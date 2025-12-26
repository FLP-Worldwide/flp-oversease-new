import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const runtime = "nodejs";

export async function GET(req, context) {
  const resolved = await context.params;     // 🔥 unwrap the promise correctly
  const slug = resolved.slug;                // slug now real string

  console.log("🔎 Requested slug:", slug);

  try {
    await connectDB();

    const blog = await Blog.findOne({
      slug: { $regex: `^${slug}$`, $options: "i" }
    });

    console.log("Matched blog:", blog);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// UPDATE a blog
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const blog = await Blog.findOneAndUpdate({ slug: params.slug }, body, { new: true });

    return NextResponse.json({ success: true, message: "Blog updated", blog });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}

// DELETE a blog
export async function DELETE(req, context) {
  const { slug } = await context.params;   // 🔥 unwrap params

  try {
    await connectDB();

    const blog = await Blog.findOneAndDelete({ slug });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Blog deleted" });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}