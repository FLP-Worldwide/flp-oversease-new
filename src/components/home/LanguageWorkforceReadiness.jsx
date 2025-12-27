'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function LanguageWorkforceReadiness({ t }) {
  return (
    <section className="py-24 px-6 bg-[#F5F7FD] relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-3">
          Language & Workforce Readiness
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-blue-950 leading-tight">
          Language Is Not Optional—It Is Operational.
        </h3>
      </div>

      {/* Subtitle */}
      <p className="max-w-4xl mx-auto text-gray-700 text-lg text-center leading-relaxed mb-12">
        Workplace language skills directly impact productivity, safety compliance, and retention overseas. 
        FLP Overseas integrates job-oriented language programs ensuring workers communicate effectively 
        from Day One in global industries.
      </p>

      {/* Language Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {[
          "German (A1–B2) – Workplace-focused training for industrial, service & healthcare roles",
          "Japanese – Career-aligned language with cultural and industry norms",
          "English – Functional workplace English for Europe & Gulf markets",
          "Scandinavian / Balkan Languages – Provided on demand based on employer needs",
        ].map((item,i)=>(
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all">
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-blue-600 mt-1" />
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

