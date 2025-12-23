"use client";

import ResumePreview from "@/components/home/ResumePreview";
import React, { useEffect, useState } from "react";


export default function AdminResumes() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedResume, setSelectedResume] = useState(null);

  /* ---------------- FETCH RESUMES ---------------- */
  useEffect(() => {
    fetch("/api/resumes")
      .then(res => res.json())
      .then(data => {
        if (data.success) setResumes(data.resumes);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-2">

      <div className="bg-white rounded-xl p-4 shadow-xs border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">Uploaded Resumes</h3>
          <div className="text-sm text-gray-500">
            {resumes.length} total resumes
          </div>
        </div>

        {loading ? (
          <div className="text-sm text-gray-500">Loading...</div>
        ) : (
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
                </tr>
              </thead>

              <tbody className="border-t border-gray-300 divide-y divide-gray-200">
                {resumes.map((row) => (
                  <tr key={row._id}>
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
                      <button
                        onClick={() => setSelectedResume(row.resume)}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ---------------- RESUME PREVIEW MODAL ---------------- */}
      {selectedResume && (
        <ResumePreview
          data={selectedResume}
          onBack={() => setSelectedResume(null)}
          onClose={() => setSelectedResume(null)}
        />
      )}
    </div>
  );
}
