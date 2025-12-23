"use client";

import React, { useEffect, useState } from "react";

/* ---------------- HELPERS ---------------- */

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

function getCurrentTime() {
  return new Date().toLocaleString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* ---------------- PAGE ---------------- */

export default function AdminPage() {
  const userName = "Admin";

  const [stats, setStats] = useState([]);
  const [latestLeads, setLatestLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH ALL DASHBOARD DATA ---------------- */
  useEffect(() => {
    async function loadDashboard() {
      try {
        const [jobsRes, leadsRes, resumesRes] = await Promise.all([
          fetch("/api/jobs").then(res => res.json()),
          fetch("/api/leads").then(res => res.json()),
          fetch("/api/resumes").then(res => res.json()),
        ]);

        const jobs = jobsRes.jobs || [];
        const leads = leadsRes.leads || [];
        const resumes = resumesRes.resumes || [];

        setStats([
          { title: "Total Jobs Posted", value: jobs.length },
          {
            title: "Active Openings",
            value: jobs.filter(j => j.status === "active").length,
          },
          { title: "Total Enquiries", value: leads.length },
          {
            title: "Pending Enquiries",
            value: leads.filter(l => l.status === "todo").length,
          },
          { title: "Total Resumes Created", value: resumes.length },
        ]);

        setLatestLeads(leads.slice(0, 5));
      } catch (err) {
        console.error("Dashboard load failed", err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">
            {getGreeting()}, {userName} 👋
          </h1>
          <p className="text-sm text-gray-500">
            Here’s what’s happening today
          </p>
        </div>

        <div className="text-sm text-gray-500">
          {getCurrentTime()}
        </div>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <MetricCard
            key={index}
            title={item.title}
            value={loading ? "—" : item.value}
            highlight={item.title === "Pending Enquiries"}
          />
        ))}
      </div>

      {/* LATEST LEADS */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">Latest Leads</h3>
          <span className="text-sm text-gray-500">Last 5 enquiries</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Name</th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Email</th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Phone</th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">Date</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {latestLeads.map((lead) => (
                <tr key={lead._id}>
                  <td className="py-2 px-4 text-sm">{lead.fullName}</td>
                  <td className="py-2 px-4 text-sm text-gray-700">{lead.email}</td>
                  <td className="py-2 px-4 text-sm">{lead.phone}</td>
                  <td className="py-2 px-4 text-sm">
                    {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                  </td>
                </tr>
              ))}

              {!latestLeads.length && !loading && (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-sm text-gray-500">
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function MetricCard({ title, value, highlight }) {
  return (
    <div
      className={`
        rounded-xl p-4 border shadow-sm
        ${highlight ? "bg-orange-50 border-orange-200" : "bg-white border-gray-100"}
      `}
    >
      <div className="text-xs font-medium text-gray-500">
        {title}
      </div>
      <div className="mt-2 text-2xl font-extrabold text-gray-900">
        {value}
      </div>
    </div>
  );
}
