'use client';

import React from 'react';
import { ShieldCheck, BadgeCheck, FileCheck } from 'lucide-react';

export default function LicensesSection({ t }) {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-4">
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
          <div className="p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all bg-emerald-50/40">
            <ShieldCheck className="text-emerald-500 mb-4" size={36} />
            <h3 className="text-lg font-bold text-emerald-950 mb-2">
              {t.stats.govt}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recognized and approved by the Government of India to operate as
              an overseas recruitment agency.
            </p>
          </div>

          {/* License 1 */}
          <div className="p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all bg-white">
            <BadgeCheck className="text-emerald-500 mb-4" size={36} />
            <h3 className="text-lg font-bold text-emerald-950 mb-2">
              Ministry of Corporate Affairs
            </h3>
            <p className="text-sm text-gray-600">
              {t.stats.license1}
            </p>
          </div>

          {/* License 2 */}
          <div className="p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg transition-all bg-white">
            <FileCheck className="text-emerald-500 mb-4" size={36} />
            <h3 className="text-lg font-bold text-emerald-950 mb-2">
              Ministry of External Affairs
            </h3>
            <p className="text-sm text-gray-600">
              {t.stats.license2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
