'use client';

import { useEffect, useState } from 'react';
import { Briefcase, MapPin, Clock, X } from 'lucide-react';

export default function JobGridSection() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/jobs');
      const data = await res.json();
      const activeJobs = (data.jobs || []).filter(
        (job) => job.status === "active"
      );
      
      setJobs(activeJobs || []);
    } catch (err) {
      console.error('Failed to fetch jobs', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Current Job Openings
          </h2>
          <p className="text-gray-600">
            Explore verified overseas job opportunities with government-approved employers.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading jobs...</p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="group bg-white border border-gray-200 rounded-2xl p-6
              hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 mb-5">
                <Briefcase className="text-blue-600" size={22} />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-blue-950 mb-3">
                {job.title}
              </h3>

              {/* Meta */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{job.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span className="capitalize">{job.jobType}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills?.slice(0, 3).map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-6 w-full py-2.5 rounded-full
                bg-blue-950 text-white text-sm font-semibold
                hover:bg-blue-900 transition-all"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-xl w-full rounded-2xl p-6 relative">

            {/* Close */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            {/* Content */}
            <h3 className="text-2xl font-bold text-blue-950 mb-2">
              {selectedJob.title}
            </h3>

            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <p><strong>Country:</strong> {selectedJob.country}</p>
              <p><strong>Job Type:</strong> {selectedJob.jobType}</p>
              <p><strong>Salary:</strong> {selectedJob.salary}</p>
              <p><strong>Status:</strong> {selectedJob.status}</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Job Description</h4>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {selectedJob.description}
              </p>
            </div>

            <button
              className="mt-6 w-full py-3 rounded-full
              bg-blue-950 text-white font-semibold
              hover:bg-blue-900 transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
