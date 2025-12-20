'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import EnquiryModal from '@/components/ui/EnquiryModal';
import HeroBenefits from './HeroBenefits';

export default function Hero({ t }) {
  const [open, setOpen] = useState(false);

  /* ---------------- HERO TITLE FADE SLIDER ---------------- */


const titles = [
  [
    { text: 'Reliable Workforce Recruitment for', highlight: false },
    { text: 'German', highlight: false },
    { text: 'and', highlight: false },
    { text: 'European Employers', highlight: true },
    { text: 'Skilled & Blue-Collar Talent', highlight: false },

  ],
  // [
  //   { text: 'Recruitment', highlight: false },
  //   { text: 'solutions', highlight: false },
  //   { text: 'that', highlight: false },
  //   { text: 'connect', highlight: false },
  //   { text: 'global', highlight: true },
  //   { text: 'talent', highlight: true },
  //   { text: 'with', highlight: false },
  //   { text: 'top', highlight: false },
  //   { text: 'employers', highlight: false },
  // ],
];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % titles.length);
        setFade(true); // fade in
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, [titles.length]);
  /* ------------------------------------------------------- */

  return (
    <section id="home" className="bg-white relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-10 rounded-bl-[100px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-800 text-xs font-bold uppercase tracking-wider">
              Hiring Now For Dubai & Europe
            </span>
          </div>

          {/* HERO TITLE (FADE SLIDER) */}
         <h1
            className={`min-h-[130px] text-5xl lg:text-4xl font-bold
              text-blue-950 leading-[1.1]
              transition-opacity duration-500
              ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            {titles[activeIndex].map((word, i) => (
              <span
                key={i}
                className={word.highlight ? 'text-blue-500' : ''}
              >
                {word.text}{' '}
              </span>
            ))}
          </h1>


          {/* SUBTITLE */}
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-4 bg-blue-950 text-white font-semibold
              rounded-full hover:bg-blue-900 transition-all
              flex items-center gap-2 group
              shadow-lg shadow-blue-900/20"
            >
              {t.hero.primaryBtn}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* BENEFITS */}
          <HeroBenefits />
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
            <img
              src="https://images.unsplash.com/photo-1549637642-90187f64f420?auto=format&fit=crop&q=80&w=1200"
              alt="Industrial Worker"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 p-6
              bg-white/10 backdrop-blur-md border border-white/20
              rounded-2xl text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium opacity-90">
                  Overseas Recruitment
                </span>
                <span className="text-blue-400 font-bold">
                  98% Success
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-blue-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>

      {/* ENQUIRY MODAL */}
      <EnquiryModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
