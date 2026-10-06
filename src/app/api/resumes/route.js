import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { hasAdminSession } from '@/lib/admin-session';
import Resume from '@/models/Resume';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_REQUEST_SIZE = 12 * 1024 * 1024;
const allowed = {
  aadhaar: { pdf: 'application/pdf', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png' },
  existingResume: {
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
};

function matchesFileType(extension, buffer) {
  if (extension === 'pdf') return buffer.subarray(0, 5).toString() === '%PDF-';
  if (extension === 'jpg' || extension === 'jpeg') return buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  if (extension === 'png') return buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  if (extension === 'doc') return buffer.subarray(0, 8).equals(Buffer.from([208, 207, 17, 224, 161, 177, 26, 225]));
  if (extension === 'docx') return buffer[0] === 0x50 && buffer[1] === 0x4b;
  return false;
}

async function readDocument(file, kind) {
  if (!(file instanceof File)) throw new Error(`${kind} file is required.`);
  if (file.size === 0 || file.size > MAX_FILE_SIZE) throw new Error(`${kind} must be between 1 byte and 5 MB.`);
  const name = file.name.replace(/[\\/\r\n"]/g, '_').slice(0, 120);
  const extension = name.split('.').pop()?.toLowerCase();
  const contentType = allowed[kind][extension];
  if (!contentType) throw new Error(`Unsupported ${kind} file type.`);
  const data = Buffer.from(await file.arrayBuffer());
  if (!matchesFileType(extension, data)) throw new Error(`Invalid ${kind} file.`);
  return { name, contentType, data };
}

export async function GET(request) {
  if (!hasAdminSession(request)) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  try {
    await connectDB();
    const resumes = await Resume.find()
      .select('-documents.aadhaar.data -documents.existingResume.data')
      .sort({ createdAt: -1 });
    return NextResponse.json({ success: true, resumes });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    if (Number(request.headers.get('content-length')) > MAX_REQUEST_SIZE) {
      return NextResponse.json({ success: false, message: 'Files must be 5 MB or less each.' }, { status: 413 });
    }

    if (!request.headers.get('content-type')?.includes('multipart/form-data')) {
      throw new Error('File upload is required.');
    }
    const form = await request.formData();
    const mode = form.get('mode');
    if (mode !== 'created' && mode !== 'uploaded') throw new Error('Invalid resume submission.');
    const aadhaar = await readDocument(form.get('aadhaar'), 'aadhaar');
    const existingResume = mode === 'uploaded'
      ? await readDocument(form.get('existingResume'), 'existingResume')
      : undefined;
    const basics = mode === 'uploaded' ? JSON.parse(form.get('basics') || '{}') : undefined;
    const resume = mode === 'uploaded'
      ? { source: 'uploaded', basics }
      : JSON.parse(form.get('resume') || '{}');
    const documents = { aadhaar, ...(existingResume ? { existingResume } : {}) };

    if (!resume?.basics?.name?.trim()) throw new Error('Full name is required.');
    await connectDB();
    const saved = await Resume.create({
      name: resume.basics.name.trim(),
      email: resume.basics.email || '',
      phone: resume.basics.phone || '',
      resume,
      documents,
    });
    return NextResponse.json({ success: true, id: saved.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
