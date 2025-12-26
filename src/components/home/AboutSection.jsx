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
              src="https://guidable-jobs.s3.amazonaws.com/uploads/article_images/factoryjobs01.webp"
              alt="International Recruitment Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative */}
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10" />
        </div>

        {/* RIGHT → CONTENT */}
        <div className="space-y-4">
          <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-wider
            bg-blue-100 text-blue-700 rounded-full">
            {t.about.badge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 leading-tight">
            {t.about.title}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {t.about.subtitle}
          </p>

          <p className="text-gray-600 leading-relaxed font-semibold ">
            {t.about.highlight}
          </p>

          <ul className="space-y-4 pt-4">
            {t.about.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-blue-500 mt-1" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 leading-relaxed font-semibold ">
            {t.about.slogan}
          </p>

        </div>
      </div>
    </section>
  );
}
