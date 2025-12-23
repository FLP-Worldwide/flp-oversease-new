import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Leads from "@/models/Leads";

export const runtime = "nodejs";

/* ================= GET ================= */
/* Fetch all leads (Admin Kanban) */
export async function GET() {
  try {
    await connectDB();

    const leads = await Leads.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, leads });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/* ================= POST ================= */
/* Create lead from any form */
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const lead = await Leads.create({
      firstName: body.firstName,
      lastName: body.lastName,
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,

      companyName: body.companyName,
      designation: body.designation,
      industry: body.industry,
      website: body.website,

      message: body.message,

      source: body.source, // 🔥 enquiry | callback | partner
    });

    return NextResponse.json({
      success: true,
      message: "Lead created",
      lead,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

/* ================= PUT ================= */
/* Update lead status (KANBAN MOVE) */
export async function PUT(req) {
  try {
    await connectDB();
    const { id, status } = await req.json();

    const lead = await Leads.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      message: "Lead updated",
      lead,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

/* ================= DELETE ================= */
export async function DELETE(req) {
  try {
    await connectDB();
    const { id } = await req.json();

    await Leads.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Lead deleted",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
