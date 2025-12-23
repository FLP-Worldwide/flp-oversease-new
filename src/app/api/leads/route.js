import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Leads from "@/models/Leads";

export const runtime = "nodejs";

/* ================= GET ================= */
export async function GET() {
  try {
    await connectDB();

    const leads = await Leads.find()
      .sort({ status: 1, sequence: 1 });

    return NextResponse.json({ success: true, leads });
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

    const status = body.status || "todo";

    const max = await Leads.find({ status })
      .sort({ sequence: -1 })
      .limit(1);

    const nextSequence = max.length ? max[0].sequence + 1 : 1;

    const lead = await Leads.create({
      ...body,
      status,
      sequence: nextSequence,
      history: [{ text: "Lead created" }],
    });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

/* ================= PUT ================= */
export async function PUT(req) {
  try {
    await connectDB();
    const { id, status, sequence, comment } = await req.json();

    const update = {};
    if (status !== undefined) update.status = status;
    if (sequence !== undefined) update.sequence = sequence;
    if (comment) update.$push = { history: { text: comment } };

    const lead = await Leads.findByIdAndUpdate(id, update, { new: true });

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/* ================= DELETE ================= */
export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();
    await Leads.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
