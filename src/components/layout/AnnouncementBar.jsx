'use client';

import { useEffect, useState } from 'react';
import NavLink from '../ui/NavLink';
import { usePathname } from 'next/navigation';

export default function AnnouncementBar({ isScrolled }) {

  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const messages = [
    '🇪🇺 Hiring for Germany, Poland & Europe – Apply Now',
    '📞 Free Consultation Available – Request a Call Today',
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full transition-colors duration-300 border-b
        ${isScrolled
          ? 'bg-[#e7effc] text-slate-900 border-gray-200'
          : 'bg-blue-950 text-white border-blue-900'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4 text-sm">

        {/* LEFT: Animated Message */}
        <div className="flex-1 overflow-hidden">
          <p
            className={`transition-opacity duration-300 whitespace-nowrap ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {messages[index]}
          </p>
        </div>

        {/* RIGHT: Static Menu */}
        <div className="hidden md:flex items-center gap-4 text-xs font-medium">
          <NavLink href={`/${locale}/jobs`} isScrolled={isScrolled} className={`hover:underline 
            ${isScrolled ? 'text-slate-900' : 'text-white'}
            `}>
            Jobs
          </NavLink>
          <span className="opacity-50">|</span>
          <NavLink href={`/${locale}/employers`} isScrolled={isScrolled} 
          className={`hover:underline 
            ${isScrolled ? 'text-slate-900' : 'text-white'}
            `}
          >
            Employers
          </NavLink>

          <NavLink href={`https://flpworldwide.com`} isScrolled={isScrolled} 
          className={`hover:underline 
            ${isScrolled ? 'bg-slate-900 text-white px-4 py-1 rounded-full font-semibold' : 'bg-white text-blue-950 px-4 py-1 rounded-full font-semibold'}
            `}
            attributes={{ target: "_blank" }} 
          >
            Powered by FLP Worldwide
          </NavLink>

        </div>

      </div>
    </div>
  );
}
