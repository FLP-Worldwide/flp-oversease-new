import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Resume from "@/models/Resume";

export const runtime = "nodejs";

/* ================= GET ================= */
export async function GET() {
  try {
    await connectDB();
    const resumes = await Resume.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, resumes });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/* ================= POST ================= */
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const resume = await Resume.create({
      name: body.basics?.name,
      email: body.basics?.email,
      phone: body.basics?.phone,
      resume: body, // 🔥 FULL resume stored here
    });

    return NextResponse.json({ success: true, resume });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
