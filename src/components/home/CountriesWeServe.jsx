'use client';

import React from "react";

export default function CountriesWeServe() {
  return (
    <section id="countries" className="py-24 bg-[#f8f8f9] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
            Countries We Serve
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-4 leading-tight">
            Global Workforce Deployment <br />Across Key Markets
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed text-base">
            FLP Overseas supports international workforce deployment across regions with
            long-term & seasonal labor demand. We operate through legal migration routes 
            following destination-country laws, ensuring compliant, ethical & reliable 
            recruitment for employers and workers both.
          </p>

          {/* Region List */}
          <ul className="mt-8 space-y-4 border-l-4 border-blue-600 pl-6 text-gray-800 text-[15px] leading-relaxed">
            <li><b>Europe (Core Market)</b></li>
            <li>Scandinavia – Sweden, Norway, Denmark, Finland</li>
            <li>Balkans – Serbia, Croatia, Romania, Bulgaria, North Macedonia</li>
            <li>Japan</li>
            <li>Gulf & Middle East – UAE, Saudi Arabia, Qatar, Oman</li>
          </ul>

          <p className="mt-6 text-sm text-gray-600 italic">
            All recruitment and deployment activities comply with immigration & labor regulations 
            of destination countries.
          </p>
        </div>

      </div>

      {/* RIGHT FULL-WIDTH MAP */}
      <div className="absolute top-0 right-0 w-[55%] h-full hidden lg:block select-none">
        <div className="w-full h-full relative">
          <img
            src="/images/map.avif"
            alt="World Map"
            className="w-full h-auto object-contain opacity-100"
          />

          {/* Marker Points */}
          <span className="absolute top-[22%] left-[51%] w-4 h-4 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="absolute top-[13%] left-[40%] w-3.5 h-3.5 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="absolute top-[30%] left-[52%] w-3.5 h-3.5 bg-blue-500 rounded-full animate-pulse"></span>
          <span className="absolute top-[34%] right-[21%] w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></span>
          <span className="absolute top-[36%] left-[55%] w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
        </div>
      </div>

      {/* MAP FOR MOBILE BELOW CONTENT */}
      <div className="lg:hidden mt-14 px-6">
        <div className="relative w-full ">
          <img
            src="/images/map.avif"
            className="w-full object-contain"
          />

          {/* Pins */}
          <span className="absolute top-[38%] left-[44%] w-4 h-4 bg-blue-600 rounded-full"></span>
          <span className="absolute top-[33%] left-[45%] w-3.5 h-3.5 bg-blue-400 rounded-full"></span>
          <span className="absolute top-[45%] left-[46%] w-3.5 h-3.5 bg-blue-500 rounded-full"></span>
          <span className="absolute top-[42%] right-[16%] w-4 h-4 bg-yellow-500 rounded-full"></span>
          <span className="absolute top-[53%] left-[50%] w-4 h-4 bg-red-500 rounded-full"></span>
        </div>
      </div>

    </section>
  );
}
