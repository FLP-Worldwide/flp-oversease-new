"use client";

import { useState } from "react";
import Editor from "./Editor";

export default function BlogFormModal({ onClose, refresh }) {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    image: "",
    excerpt: "",
    content: "",
    author: "Admin",
    tags: "",
  });

  const autoSlug = (title) =>
    title.toLowerCase()
      .trim()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  const handleSubmit = async () => {
    if (!form.title || !form.image || !form.excerpt || !form.content)
      return alert("All fields are required");

    const payload = {
      ...form,
      slug: form.slug || autoSlug(form.title),
      tags: form.tags.split(",").map(t => t.trim()),
      date: new Date().toISOString().split("T")[0],
    };

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (data.success) {
      refresh();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 max-h-[90vh] overflow-y-auto animate-slideUp">

        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Create Blog
        </h2>

        {/* ---- FORM GRID ---- */}
        <div className="grid grid-cols-2 gap-5 mb-5">

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">Title*</label>
            <input
              type="text"
              className="admin-input border border-gray-300 rounded-md px-3 py-2  "
              placeholder="Blog Title"
              value={form.title}
              onChange={(e)=>setForm({ ...form, title:e.target.value, slug:autoSlug(e.target.value)})}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">Image URL*</label>
            <input
              type="text"
              className="admin-input border border-gray-300 rounded-md px-3 py-2  "
              placeholder="https://example.com/image.jpg"
              value={form.image}
              onChange={(e)=>setForm({ ...form, image:e.target.value})}
            />
          </div>

        </div>

        {/* SLUG READONLY */}
        
        {/* EXCERPT */}
        <div className="flex flex-col space-y-1 mb-5">
          <label className="text-sm font-medium">Short Excerpt*</label>
          <textarea
             className="admin-input border border-gray-300 rounded-md px-3 py-2  "
            placeholder="A short summary that appears in blog list..."
            value={form.excerpt}
            onChange={(e)=>setForm({...form, excerpt:e.target.value})}
          ></textarea>
        </div>

        {/* TAGS */}
       
        {/* RICH EDITOR */}
        <div className="flex flex-col space-y-2 mb-7">
          <label className="text-sm font-medium">Content*</label>
          <Editor value={form.content} onChange={(v)=>setForm({...form, content:v})}/>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 pt-3">
          <button onClick={onClose} className="btn-secondary">Cancel</button>
          <button onClick={handleSubmit} className="btn-primary">Save Blog</button>
        </div>

      </div>
    </div>
  );
}
