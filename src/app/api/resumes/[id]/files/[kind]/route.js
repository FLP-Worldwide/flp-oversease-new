import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB } from '@/lib/mongodb';
import { hasAdminSession } from '@/lib/admin-session';
import Resume from '@/models/Resume';

export const runtime = 'nodejs';

export async function GET(request, { params }) {
  if (!hasAdminSession(request)) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  const { id, kind } = await params;
  if (!mongoose.isValidObjectId(id) || !['aadhaar', 'existingResume'].includes(kind)) {
    return NextResponse.json({ message: 'File not found' }, { status: 404 });
  }

  try {
    await connectDB();
    const record = await Resume.findById(id).select(`documents.${kind}`);
    const file = record?.documents?.[kind];
    if (!file?.data) return NextResponse.json({ message: 'File not found' }, { status: 404 });
    return new Response(new Uint8Array(file.data), {
      headers: {
        'Content-Type': file.contentType || 'application/octet-stream',
        'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(file.name || 'document')}`,
        'Content-Length': String(file.data.length),
        'Cache-Control': 'private, no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return NextResponse.json({ message: 'Failed to download file' }, { status: 500 });
  }
}
