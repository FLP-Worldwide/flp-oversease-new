"use client";

import React, { useEffect, useState } from "react";
import BlogFormModal from "@/components/admin/blog/BlogFormModal";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);

  const fetchBlogs = async () => {
    setLoading(true);
    const res = await fetch("/api/blogs");
    const data = await res.json();
    if (data.success) setBlogs(data.blogs);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="space-y-4">

      <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Blogs</h3>

          <button
            onClick={() => setOpenForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            + Add New Blog
          </button>
        </div>

        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr className="text-sm text-gray-600">
                  <th className="py-2 px-4 text-left">Title</th>
                  <th className="py-2 px-4 text-left">Slug</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {blogs.map((blog) => (
                  <tr key={blog._id} className="text-sm">
                    <td className="py-2 px-4 font-medium">{blog.title}</td>
                    <td className="py-2 px-4 text-gray-500">{blog.slug}</td>
                    <td className="py-2 px-4">{blog.date}</td>
                    <td className="py-2 px-4">
                      <button className="text-red-500 hover:underline"
                        onClick={async () => {
                          await fetch("/api/blogs/" + blog.slug, { method: "DELETE" });
                          fetchBlogs();
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {openForm && <BlogFormModal onClose={() => setOpenForm(false)} refresh={fetchBlogs} />}

    </div>
  );
}
