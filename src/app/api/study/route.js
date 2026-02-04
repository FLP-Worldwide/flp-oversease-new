import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Study from "@/models/Study";

/* ================= POST ================= */
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const study = await Study.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      state: body.state,
      city: body.city,

      program: body.program,
      intake: body.intake,
      destination: body.destination,
      loan: body.loan,

      study: body, // 🔥 store full form safely
    });

    return NextResponse.json({ success: true, study });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
