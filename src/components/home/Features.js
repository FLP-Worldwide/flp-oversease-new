'use client';

import React from 'react';
import {


  Briefcase,
  Building2,
  Stethoscope,
  Anchor,
  HardHat,
  Globe2, Users, Settings, Languages, FileCheck, Plane, GraduationCap, ClipboardList 
} from 'lucide-react';
import LanguageWorkforceReadiness from './LanguageWorkforceReadiness';

const PROCESS_STEPS = [
  {
    title: "Employer requirement analysis",
    img: "https://uptc.com.br/wp-content/uploads/2017/09/Reuni%C3%B5es-Efetivas.jpg"
  },
  {
    title: "Candidate sourcing & screening",
    img: "https://civicminds.com/wp-content/uploads/2019/01/Candidate-Screening-Process-1.png"
  },
  {
    title: "Skill & trade assessment",
    img: "https://www.vetassess.com.au/sites/default/files/images/rpl_1_c_0.jpg"
  },
  {
    title: "Language training (if required)",
    img: "https://www.fita.in/wp-content/uploads/2022/03/Marathahalli-website-image-3.jpg"
  },
  {
    title: "Compliance & documentation",
    img: "https://www.tortechnologies.com/wp-content/uploads/2021/03/why-regulatory-compliance-documentation-is-important.jpg"
  },
  {
    title: "Visa coordination support",
    img: "https://www.joinincampus.com/assets/images/web/visa-assistance-thumb.png"
  },
  {
    title: "Pre-departure orientation",
    img: "https://skillupglobal.com/wp-content/uploads/2024/10/AdobeStock_224521180_result-scaled.webp"
  },
  {
    title: "Deployment & onboarding",
    img: "https://www.schneider.im/media/2025/01/SCHNEIDER-IT-MANAGEMENT-2025-01-20-Website-Microsoft-Onboarding-Services-2.jpg"
  }
];

export default function Features({ t }) {
  /* Icons are UI concern, NOT translations */
  const SERVICES_ICONS = [
    Users,
    GraduationCap,
    Briefcase,
    Building2
  ];

  

  const INDUSTRY_IMAGES = [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPgFWzSZNYGZnNgqe2rcIQ2PBpPPg4Icudw&s',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    'https://www.pritchardindustries.com/wp-content/uploads/2023/02/4d8c46_e0f63c3f8c29461db29dcb4cab1c6cf2_mv2.jpg',
    'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/11/04/1402110409494713929249824.jpg',
    'https://careoptionsforkids.com/wp-content/uploads/2025/04/What-is-it-Like-Being-a-Home-Healthcare.jpg'
  ];

const COUNTRY_FLAGS = [
  "🇩🇪", // Germany
  "🇦🇹", // Austria
  "🇨🇭", // Switzerland
  "🇳🇱", // Netherlands
  "🇧🇪", // Belgium
  "🇫🇷", // France
  "🇮🇹", // Italy
  "🇪🇸", // Spain
  "🇵🇱", // Poland
  "🇨🇿", // Czech Republic
  "🇸🇰", // Slovakia
  "🇭🇺", // Hungary
  "🇷🇴", // Romania
  "🇧🇬", // Balkans (closest flag Bulgaria/Serbia – choose one)
  "🇸🇪", // Scandinavia (Sweden as representative)
  "🇯🇵", // Japan
  "🇦🇪", // UAE
  "🇸🇦", // Saudi Arabia
  "🇶🇦", // Qatar
  "🇰🇼", // Kuwait
  "🇴🇲", // Oman
  "🇧🇭", // Bahrain
];


  return (
    <div className="bg-white rounded-t-[50px]  relative z-20 ">
      

      <section className="bg-[#F5F7FD] py-24 px-6 w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT BLOCK */}
          <div>
            {/* Top Highlight Line Text */}
            <p className="text-[18px] font-medium text-blue-700 tracking-wide relative pb-4">
              Why Global Employers Choose FLP Overseas
              <span className="block w-[120px] h-[2px] bg-blue-700/50 mt-2"></span>
            </p>

            {/* Main Heading */}
            <h2 className="text-[30px] md:text-[42px] leading-tight font-bold text-[#1B2233]">
              We do not push candidates, <br />We deliver workforce solutions.
            </h2>
          </div>

          {/* RIGHT TEXT BLOCK */}
          <div className="flex flex-col">
            <p className="text-[22px] md:text-[26px] text-[#1B2233] leading-snug font-medium">
              Government-authorized recruitment, <br />End-to-end workforce lifecycle management<br />
              Language-integrated recruitment model, <br />Demand-based skill training, <br />Zero-exploitation policy
            </p>

            <span className="block w-[120px] h-[2px] bg-blue-700/50 mt-4"></span>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-blue-500 font-semibold uppercase tracking-wider text-sm">
          Section 5 — What We Do
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mt-2">
          End-To-End Workforce Deployment Process
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {PROCESS_STEPS.map((item, i) => (
          <div
            key={i}
            className="relative group h-60 rounded-lg overflow-hidden shadow-lg  hover:shadow-2xl transition-all duration-300"
          >
            {/* Background image */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold text-lg leading-snug drop-shadow-lg">
                {i + 1}) {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Industries Section */}
      <section className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-500">
              From healthcare professionals to skilled construction workers, we bridge the gap between talent and global demand.
            </p>
          </div>

          <a
            href="#contact"
            className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2"
          >
            View All Industries <span className="text-lg">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-3 auto-rows-[250px] md:auto-rows-[320px]">

          {t.industries.list.map((ind, i) => {

            return (
              <div
              key={i}
              className={`relative rounded-3xl overflow-hidden group 
                ${i === 0 || i === 3 ? 'md:col-span-2' : ''} 
                h-64 md:h-72  // <-- add height (adjust as you like)
              `}
            >
              <img
                src={INDUSTRY_IMAGES[i]}
                alt={ind.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                {/* <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/10"></div> */}
                <h4 className="text-2xl font-bold text-white">{ind.title}</h4>
              </div>
            </div>

            );
          })}
        </div>
      </section>

<LanguageWorkforceReadiness />

      {/* Global Reach */}
      {/* <section className="pt-24 px-6 max-w-7xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-blue-950 mb-12">
    GLOBAL MARKETS WE SERVE
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {t.countries.map((name, i) => (
      <div
        key={i}
        className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all min-w-[140px]"
      >
        <span className="text-5xl">{COUNTRY_FLAGS[i]}</span>
        <span className="font-bold text-gray-700 text-sm">
          {name}
        </span>
      </div>
    ))}
  </div>
</section> */}

    </div>
  );
}
