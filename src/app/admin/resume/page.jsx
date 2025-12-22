"use client";

import React from "react";

/* ---------------- SAMPLE RESUME DATA ---------------- */

const resumeData = [
  {
    id: 1,
    name: "Amit Kumar",
    email: "amit1@example.com",
    phone: "9998887771",
    resumeUrl: "/resumes/amit-kumar.pdf",
  },
  {
    id: 2,
    name: "Rekha Sharma",
    email: "rekha@example.com",
    phone: "9876543210",
    resumeUrl: "/resumes/rekha-sharma.pdf",
  },
];

export default function AdminResumes() {
  return (
    <div className="space-y-2">

      <div className="bg-white rounded-xl p-4 shadow-xs border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">Uploaded Resumes</h3>
          <div className="text-sm text-gray-500">
            {resumeData.length} total resumes
          </div>
        </div>

        <div className="overflow-x-auto rounded-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">
                  Candidate Name
                </th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">
                  Email
                </th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">
                  Phone
                </th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">
                  View
                </th>
                <th className="py-2 px-4 text-xs font-medium text-gray-600">
                  Download
                </th>
              </tr>
            </thead>

            <tbody className="border-t border-gray-300 divide-y divide-gray-200">
              {resumeData.map((row) => (
                <tr key={row.id}>
                  <td className="py-2 px-4 text-sm font-medium">
                    {row.name}
                  </td>
                  <td className="py-2 px-4 text-sm text-gray-700">
                    {row.email}
                  </td>
                  <td className="py-2 px-4 text-sm">
                    {row.phone}
                  </td>
                  <td className="py-2 px-4 text-sm">
                    <a
                      href={row.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </a>
                  </td>
                  <td className="py-2 px-4 text-sm">
                    <a
                      href={row.resumeUrl}
                      download
                      className="text-emerald-600 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination placeholder */}
        <div className="mt-4 flex items-center justify-end">
          <div className="text-sm text-gray-500">1</div>
        </div>
      </div>
    </div>
  );
}
