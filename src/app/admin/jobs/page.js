"use client";

import React, { useEffect, useState } from "react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    title: "",
    country: "",
    type: "Full Time",
    salary: "",
    skills: "",
    description: "",
    status: "Active",
  });

  /* ---------------- FETCH JOBS ---------------- */

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data.jobs || []);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  /* ---------------- HELPERS ---------------- */

  const resetForm = () => {
    setForm({
      title: "",
      country: "",
      type: "Full Time",
      salary: "",
      skills: "",
      description: "",
      status: "Active",
    });
    setEditing(null);
  };

  const handleOpenCreate = () => {
    resetForm();
    setShowModal(true);
  };

  const handleEdit = (job) => {
    setEditing(job);
    setForm({
      title: job.title,
      country: job.country,
      type: job.jobType === "part-time" ? "Part Time" : "Full Time",
      salary: job.salary || "",
      skills: job.skills?.join(", ") || "",
      description: job.description || "",
      status: job.status === "closed" ? "Inactive" : "Active",
    });
    setShowModal(true);
  };

  /* ---------------- SAVE (CREATE / UPDATE) ---------------- */

  const handleSave = async () => {
    if (!form.title || !form.country) {
      alert("Job title and country are required");
      return;
    }

    const payload = {
      title: form.title,
      country: form.country,
      salary: form.salary,
      jobType: form.type === "Part Time" ? "part-time" : "full-time",
      skills: form.skills.split(",").map((s) => s.trim()).filter(Boolean),
      description: form.description,
      status: form.status === "Active" ? "active" : "closed",
    };

    try {
      if (editing) {
        await fetch("/api/jobs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editing._id, ...payload }),
        });
      } else {
        await fetch("/api/jobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setShowModal(false);
      resetForm();
      fetchJobs();
    } catch (err) {
      console.error("Save failed", err);
    }
  };

  /* ---------------- DELETE ---------------- */

const handleDelete = async (id) => {
  const confirmDelete = confirm("Are you sure you want to delete this job?");
  if (!confirmDelete) return;

  try {
    const res = await fetch("/api/jobs", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    if (data.success) {
      // remove from UI instantly
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error("Failed to delete job", err);
  }
};


  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Job Listings</h2>
          <p className="text-sm text-gray-500">
            Manage job posts for overseas recruitment.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700 transition"
        >
          + Create Job
        </button>
      </div>

      {/* JOB TABLE */}
      <div className="bg-white rounded-xl p-4 shadow-xs border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">Job Posts</h3>
          <div className="text-sm text-gray-500">
            {loading ? "Loading..." : `${jobs.length} total`}
          </div>
        </div>

        <div className="overflow-x-auto rounded-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Title</th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Country</th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Type</th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Salary</th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Status</th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job._id}>
                  <td className="py-2 px-4 text-sm font-medium">{job.title}</td>
                  <td className="py-2 px-4 text-sm">{job.country}</td>
                  <td className="py-2 px-4 text-sm">
                    {job.jobType === "part-time" ? "Part Time" : "Full Time"}
                  </td>
                  <td className="py-2 px-4 text-sm">{job.salary || "—"}</td>
                  <td className="py-2 px-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        job.status === "active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {job.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(job)}
                        className="px-3 py-1 rounded-md border border-gray-200 text-sm hover:bg-gray-50"
                      >
                        Edit
                      </button>
                      <button
                       onClick={() => handleDelete(job._id)}
                        className="px-3 py-1 rounded-md border border-red-200 text-sm text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {!loading && jobs.length === 0 && (
                <tr>
                  <td colSpan="6" className="py-6 text-center text-sm text-gray-500">
                    No jobs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL (UNCHANGED UI) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/30" onClick={() => setShowModal(false)} />
          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-xl p-6">

            <h3 className="text-lg font-semibold mb-3">
              {editing ? "Edit Job" : "Create Job"}
            </h3>

            <div className="space-y-3">

              <Input label="Job Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
              <Input label="Country" value={form.country} onChange={(v) => setForm({ ...form, country: v })} />

              <div className="grid grid-cols-2 gap-3">
                <Select label="Job Type" value={form.type} options={["Full Time", "Part Time"]} onChange={(v) => setForm({ ...form, type: v })} />
                <Select label="Status" value={form.status} options={["Active", "Inactive"]} onChange={(v) => setForm({ ...form, status: v })} />
              </div>

              <Input label="Salary" value={form.salary} onChange={(v) => setForm({ ...form, salary: v })} />
              <Input label="Required Skills" value={form.skills} onChange={(v) => setForm({ ...form, skills: v })} />
              <Textarea label="Job Description" value={form.description} onChange={(v) => setForm({ ...form, description: v })} />

              <div className="flex justify-end gap-2 pt-3">
                <button onClick={() => setShowModal(false)} className="px-3 py-1 rounded-md border border-gray-200">
                  Cancel
                </button>
                <button onClick={handleSave} className="px-3 py-1 rounded-md bg-emerald-600 text-white">
                  Save Job
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- UI HELPERS (UNCHANGED) ---------------- */

const Input = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="text-sm text-gray-600">{label}</label>
    <input
      className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Textarea = ({ label, value, onChange }) => (
  <div>
    <label className="text-sm text-gray-600">{label}</label>
    <textarea
      rows={4}
      className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Select = ({ label, value, options, onChange }) => (
  <div>
    <label className="text-sm text-gray-600">{label}</label>
    <select
      className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);
