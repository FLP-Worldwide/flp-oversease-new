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

  if (loading) return <p className="text-center py-20">Loading blogs...</p>;

  return(
    <>
      <section className="py-24 px-6 bg-[#F5F7FD] relative overflow-hidden">

        {/* Soft background blob */}
        <div className="absolute -top-10 -right-20 w-60 h-60 bg-blue-400/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-blue-700 font-semibold tracking-wide">Latest Insights</p>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight mt-2">
              Latest <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Blogs & News</span>
            </h2>

            <p className="text-gray-600 text-base mt-3">
              Stay updated with workforce trends, international hiring updates, and migration compliance insights.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {blogs.map((blog, index)=>(
              <Link 
                key={index} 
                href={`/${locale}/blogs/${blog.slug}`}
                className="group bg-white rounded-3xl shadow-sm border border-gray-200 hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={blog.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-blue-950 group-hover:text-blue-600 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{blog.date}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{blog.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-14">
            <Link
              href={`/${locale}/blogs`}
              className="px-10 py-3.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-md"
            >
              View All Blogs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
