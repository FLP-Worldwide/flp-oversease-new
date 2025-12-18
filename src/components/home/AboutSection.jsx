'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function AboutSection({ t }) {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT → IMAGE */}
        <div className="relative">
          <div className="rounded-[36px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
              alt="International Recruitment Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative */}
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl -z-10" />
        </div>

        {/* RIGHT → CONTENT */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-wider
            bg-emerald-100 text-emerald-700 rounded-full">
            {t.about.badge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 leading-tight">
            {t.about.title}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {t.about.subtitle}
          </p>

          <ul className="space-y-4 pt-4">
            {t.about.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-emerald-500 mt-1" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
