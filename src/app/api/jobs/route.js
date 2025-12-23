import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Job from "@/models/Job";
export const runtime = "nodejs";
export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, jobs });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const job = await Job.create({
      title: body.title,
      country: body.country,
      salary: body.salary,
      jobType: body.jobType,
      skills: body.skills,
      description: body.description,
    });

    return NextResponse.json({
      success: true,
      message: "Job created",
      job,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();

    const job = await Job.findByIdAndUpdate(
      body.id,
      body,
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Job updated",
      job,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

// DELETE Job
export async function DELETE(req) {
  try {
    await connectDB();

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Job ID required" },
        { status: 400 }
      );
    }

    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
