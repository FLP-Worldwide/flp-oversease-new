import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const existing = await Admin.countDocuments();
    if (existing > 0) {
      return NextResponse.json({
        success: false,
        message: "Admin already exists",
      });
    }

    const admins = await Admin.insertMany([
      {
        name: "Super Admin",
        email: "admin@flp.com",
        password: "admin123",
      },
      {
        name: "Manager",
        email: "manager@flp.com",
        password: "manager123",
      },
    ]);

    return NextResponse.json({
      success: true,
      message: "Default admins created",
      admins,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
