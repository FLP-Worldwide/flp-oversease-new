import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
export const runtime = "nodejs";

// GET all blogs


export async function GET() {
  try {
    await connectDB();
// const count = await Blog.countDocuments();


// if (count === 0) {
//   await Blog.create({
//     title: "Hiring Skilled Workers from India for Germany: Complete Employer Guide",
//     slug: "hiring-skilled-workers-from-india-for-germany",
//     image: "/images/blog-default-germany.jpg",
//     excerpt: "Learn how German employers can legally hire skilled workers from India with language readiness, compliance, and ethical recruitment.",
//     content: `... FULL HTML CONTENT ABOVE ...`,
//     author: "FLP Overseas",
//     tags: ["Germany", "Skilled Workers", "India Hiring", "Work Migration", "Recruitment"]
//   });
//   console.log("🌱 Default Blog Inserted");
// }

    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// CREATE new blog
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const blog = await Blog.create(body);

    return NextResponse.json({ success: true, message: "Blog created", blog });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
