import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_auth", "", { maxAge: 0, path: "/" });
  res.cookies.set('admin_session', '', { maxAge: 0, path: '/' });
  return res;
}
