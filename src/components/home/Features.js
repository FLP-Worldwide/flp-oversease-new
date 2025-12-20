'use client';

import React from 'react';
import {
  Users,
  GraduationCap,
  Briefcase,
  Building2,
  Stethoscope,
  Anchor,
  HardHat,
  Globe2
} from 'lucide-react';

export default function Features({ t }) {
  /* Icons are UI concern, NOT translations */
  const SERVICES_ICONS = [
    Users,
    GraduationCap,
    Briefcase,
    Building2
  ];

  const INDUSTRY_ICONS = [
    Stethoscope,
    Anchor,
    HardHat,
    Globe2,
    HardHat,
    Globe2
  ];

  const INDUSTRY_IMAGES = [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPgFWzSZNYGZnNgqe2rcIQ2PBpPPg4Icudw&s',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPgFWzSZNYGZnNgqe2rcIQ2PBpPPg4Icudw&s'
  ];

const COUNTRY_FLAGS = ['🇩🇪', '🇪🇸', '🇵🇱', '🇫🇷', '🇮🇹', '🇳🇱', '🇧🇪'];


  return (
    <div className="bg-white rounded-t-[50px] -mt-10 relative z-20 pb-20">
      
      {/* Services Section */}
      <section id="services" className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">
            What We Offer
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-blue-950">
            {t.services.heading}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.list.map((service, index) => {
            const Icon = SERVICES_ICONS[index];
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gray-50 hover:bg-blue-950 group transition-all duration-300 border border-gray-100 hover:shadow-2xl"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>

                <h4 className="text-xl font-bold text-blue-950 group-hover:text-white mb-3">
                  {service.title}
                </h4>

                <p className="text-gray-500 group-hover:text-blue-100/80 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            );
          })}
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

        <div className="grid md:grid-cols-4 gap-4 h-[500px]">
          {t.industries.list.map((ind, i) => {
            const Icon = INDUSTRY_ICONS[i];
            return (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden group ${
                  i === 0 || i === 3 ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={INDUSTRY_IMAGES[i]}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/10">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    {ind.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Global Reach */}
      <section className="pt-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-950 mb-12">
          We Specialize in International Recruitment
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
      </section>
    </div>
  );
}
