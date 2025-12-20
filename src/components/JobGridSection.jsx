'use client';

import { Briefcase, MapPin, Clock } from 'lucide-react';

const JOBS = [
  {
    title: 'Construction Worker',
    location: 'Germany',
    type: 'Full Time',
  },
  {
    title: 'Warehouse Associate',
    location: 'Poland',
    type: 'Contract',
  },
  {
    title: 'Factory Helper',
    location: 'Hungary',
    type: 'Full Time',
  },
  {
    title: 'Logistics Supervisor',
    location: 'Netherlands',
    type: 'Full Time',
  },
  {
    title: 'Electrician',
    location: 'Germany',
    type: 'Contract',
  },
  {
    title: 'Plumber',
    location: 'Romania',
    type: 'Full Time',
  },
  {
    title: 'Forklift Operator',
    location: 'Poland',
    type: 'Shift Based',
  },
  {
    title: 'General Labor',
    location: 'Croatia',
    type: 'Full Time',
  },
];

export default function JobGridSection() {
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {JOBS.map((job, index) => (
            <div
              key={index}
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
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{job.type}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className="mt-6 w-full py-2.5 rounded-full
                bg-blue-950 text-white text-sm font-semibold
                hover:bg-blue-900 transition-all"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
