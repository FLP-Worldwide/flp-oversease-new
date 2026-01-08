'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function AboutSection({ t }) {
  return (
    <section id="about" className="relative  ">
      
      <div className="grid lg:grid-cols-2 items-stretch ">

        {/* LEFT — FULL IMAGE HEIGHT + EDGE TO EDGE */}
        <div className="relative w-full h-[350px] lg:h-auto">
          <img
            src="https://guidable-jobs.s3.amazonaws.com/uploads/article_images/factoryjobs01.webp"
            alt="Workforce Team"
            className="w-full h-full object-cover"
          />

          {/* LIGHT OVERLAYS FOR PREMIUM LOOK */}
          <div className="absolute top-12 left-12 bg-blue-400/20 w-40 h-40 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-12 right-12 bg-yellow-400/20 w-40 h-40 rounded-full blur-3xl -z-10" />
        </div>


        {/* RIGHT CONTENT */}
        <div className="
            max-w-2xl mx-auto w-full 
            px-6 py-16 lg:py-24   /* 👈 Now padding applies properly */
            relative  backdrop-blur-md 
            lg:rounded-l-[36px]
          "
        >
          <span className="inline-block px-4 py-2 mb-4 text-xs font-bold uppercase tracking-wider
            bg-blue-100 text-blue-700 rounded-full">
            {t.about.badge}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 leading-tight mb-5">
            {t.about.title}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            {t.about.subtitle}
          </p>

          <ul className="space-y-5 border-l-4 border-blue-600 pl-5">
            {t.about.points.map((point, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle size={22} className="text-blue-600" />
                <span className="text-gray-700 text-[15px] leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
