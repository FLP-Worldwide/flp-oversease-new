import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(request) {
  const seedToken = process.env.ADMIN_SEED_TOKEN;
  const initialPassword = process.env.ADMIN_INITIAL_PASSWORD;
  if (!seedToken || !initialPassword || request.headers.get('authorization') !== `Bearer ${seedToken}`) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }
  try {
    await connectDB();

    const existing = await Admin.countDocuments();
    if (existing > 0) {
      return NextResponse.json({
        success: false,
        message: "Admin already exists",
      });
    }

    const admins = await Admin.insertMany([{
      name: 'Super Admin',
      email: process.env.ADMIN_INITIAL_EMAIL || 'admin@flp.com',
      password: initialPassword,
    }]);

    return NextResponse.json({
      success: true,
      message: "Default admins created",
      admins: admins.map(({ id, name, email }) => ({ id, name, email })),
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
