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
    } catch (error) {
      console.error("Blog fetch failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  if(loading) return <p className="text-center py-20">Loading blogs...</p>;

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-center text-4xl font-bold text-blue-950 mb-2">
          Latest Blogs
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Insights & trending recruitment topics
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index)=>(
            <Link key={index} 
              href={`/${locale}/blogs/${blog.slug}`}
              className="rounded-3xl shadow-sm border border-gray-200 hover:shadow-lg overflow-hidden bg-white transition"
            >
              <img src={blog.image} className="h-60 w-full object-cover" />

              <div className="p-6">
                <h3 className="font-bold text-lg text-blue-900">{blog.title}</h3>
                <p className="text-gray-500 text-sm my-2">{blog.date}</p>
                <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${locale}/blogs`}
            className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-semibold transition"
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
}
