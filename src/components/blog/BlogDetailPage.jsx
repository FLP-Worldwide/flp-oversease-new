"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function BlogDetailPage({ slug, locale }) {


  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const res = await fetch(`/api/blogs/${slug}`);
      const data = await res.json();
      setBlog(data.blog || null);
    } catch (err) {
      console.log("Blog fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlog(); }, [slug]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!blog) return <p className="text-center py-20">Blog Not Found</p>;

  return (
    <>
   
    <section className="py-42 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <Link
          href={`/${locale}/blogs`}
          className="text-blue-600 hover:underline inline-block mb-6"
        >
          ← Back to blogs
        </Link>

        <h1 className="text-4xl font-bold text-blue-950 mb-3">{blog.title}</h1>
        <p className="text-gray-500">{blog.date}</p>

        <img
          src={blog.image}
          className="rounded-3xl shadow w-full mt-10 mb-10 object-cover"
        />

        {/* Render dynamic blog HTML from API */}
        <article
          className="prose max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>

      
    </>
  );
}
