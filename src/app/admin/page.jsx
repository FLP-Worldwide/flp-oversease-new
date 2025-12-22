"use client";

import React from "react";

/* ---------------- MOCK DATA ---------------- */

const userName = "Admin"; // later replace with auth user

const stats = [
  { title: "Total Jobs Posted", value: 245 },
  { title: "Active Openings", value: 68 },
  { title: "Total Enquiries", value: 1420 },
  { title: "Pending Enquiries", value: 312 },
  { title: "Total Resumes Created", value: 980 },
];

const latestLeads = [
  { id: 1, name: "Amit Kumar", email: "amit@example.com", phone: "9998887771", date: "2025-12-21" },
  { id: 2, name: "Rekha Sharma", email: "rekha@example.com", phone: "9876543210", date: "2025-12-21" },
  { id: 3, name: "Mohit Jain", email: "mohit@example.com", phone: "9123456780", date: "2025-12-20" },
  { id: 4, name: "Pooja Verma", email: "pooja@example.com", phone: "9001122334", date: "2025-12-20" },
  { id: 5, name: "Ravi Singh", email: "ravi@example.com", phone: "8899776655", date: "2025-12-19" },
];

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

      {/* METRICS (3 PER ROW) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((item, index) => (
          <MetricCard
            key={index}
            title={item.title}
            value={item.value}
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
                <tr key={lead.id}>
                  <td className="py-2 px-4 text-sm">{lead.name}</td>
                  <td className="py-2 px-4 text-sm text-gray-700">{lead.email}</td>
                  <td className="py-2 px-4 text-sm">{lead.phone}</td>
                  <td className="py-2 px-4 text-sm">{lead.date}</td>
                </tr>
              ))}
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
