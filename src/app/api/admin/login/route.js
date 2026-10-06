import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { createAdminSession } from '@/lib/admin-session';

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const admin = await Admin.findOne({ email, password });
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const res = NextResponse.json({
      success: true,
      admin: { id: admin._id, name: admin.name, email: admin.email },
    });

    // 🔐 Simple auth cookie
    res.cookies.set("admin_auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    });

    res.cookies.set("admin_id", admin._id.toString(), {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 8,
        });
    res.cookies.set('admin_session', createAdminSession(admin._id.toString()), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 8,
    });

    return res;
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
