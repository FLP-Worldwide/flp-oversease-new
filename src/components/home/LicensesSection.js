'use client';

import React from 'react';
import { ShieldCheck, BadgeCheck, FileCheck } from 'lucide-react';

export default function LicensesSection({ t }) {
  return (
    <section className="relative py-20 px-6 bg-[#F5F7FD]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Government Approved & Licensed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We operate with full compliance and official approvals, ensuring
            transparency, trust, and reliability in every recruitment process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Govt Approved */}
          <div className="p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all bg-white">
            <ShieldCheck className="text-blue-500 mb-4" size={36} />
            <h3 className="text-lg font-bold text-blue-950 mb-2">
              {t.stats.govt}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recognized and approved by the Government of India to operate as
              an overseas recruitment agency.
            </p>
            {/* <a
              href="/pdf/govt-approval.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-semibold text-blue-600 hover:underline"
            >
              View License
            </a> */}
          </div>

          {/* License 1 */}
          <div className="p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all bg-white">
            <BadgeCheck className="text-blue-500 mb-4" size={36} />
            <h3 className="text-lg font-bold text-blue-950 mb-2">
              Ministry of Corporate Affairs
            </h3>
            <p className="text-sm text-gray-600">
              Ministry Of Corporate Affairs (Lic - CIN: U80100RJ2023PTC091520 )
            </p>
            {/* <a
              href="/pdf/govt-approval.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-semibold text-blue-600 hover:underline"
            >
              View License
            </a> */}
          </div>

          {/* License 2 */}
          <div className="p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all bg-white">
            <FileCheck className="text-blue-500 mb-4" size={36} />
            <h3 className="text-lg font-bold text-blue-950 mb-2">
              Ministry of External Affairs
            </h3>
            <p className="text-sm text-gray-600">
              Ministry Of External Affairs (Lic : B-3084/RAJ/COM/100/5/11092/2025 )
            </p>
            {/* <a
              href="/pdf/mea.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-semibold text-blue-600 hover:underline"
            >
              View License
            </a> */}
          </div>

        </div>
      </div>
    </section>
  );
}
