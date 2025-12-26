'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogGrid({ locale }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch (e) { console.log("Blog fetch error", e); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchBlogs(); }, []);

  if (loading) return <p className="text-center py-32">Loading blog posts...</p>;

  return (
    <section className="py-42 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-950 text-center mb-2">Blogs</h1>
        <p className="text-center text-gray-600 mb-12">Articles, insights & resources</p>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Link href={`/${locale}/blogs/${blog.slug}`} key={blog.id}
              className="rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden bg-white"
            >
              <img src={blog.image} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h2 className="font-bold text-blue-900 text-lg">{blog.title}</h2>
                <p className="text-sm text-gray-500 my-2">{blog.date}</p>
                <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
