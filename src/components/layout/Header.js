'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import NavLink from '../ui/NavLink';
import AnnouncementBar from './AnnouncementBar';

export default function Header({ currentLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || currentLang;

  // 👇 languages inline (no constants)
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/'));
  };

  return (
<>
      {/* <AnnouncementBar /> */}
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-emerald-950/95 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-60 h-15 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src={isScrolled ? '/images/logo1.png' : '/images/logo.svg'}
                alt="FLP Overseas Logo"
                width={220}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            {/* <div
              className={`text-xl font-bold tracking-tight ${
                isScrolled ? 'text-white' : 'text-emerald-950'
              }`}
            >
              Oversease<span className="text-emerald-400">.</span>
            </div> */}
          </div>



        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          
           <NavLink href={`/${locale}/`} isScrolled={isScrolled}>
            {t.nav.home}
          </NavLink>
          <a href="#about" className={`text-sm font-medium hover:text-emerald-400 ${isScrolled ? 'text-gray-200' : 'text-emerald-900'}`}>{t.nav.about}</a>
          <a href="#services" className={`text-sm font-medium hover:text-emerald-400 ${isScrolled ? 'text-gray-200' : 'text-emerald-900'}`}>{t.nav.services}</a>
          
          <NavLink href={`/${locale}/contact/`} isScrolled={isScrolled}>
            {t.nav.contact}
          </NavLink>

        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full border ${
                isScrolled
                  ? 'border-emerald-800 text-white hover:bg-emerald-900'
                  : 'border-emerald-200 text-emerald-900 hover:bg-emerald-50'
              }`}
            >
              <span className="text-lg">
                {languages.find(l => l.code === currentLang)?.flag}
              </span>
              <span className="text-xs font-semibold uppercase">
                {currentLang}
              </span>
              <ChevronDown size={14} />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 text-sm hover:bg-emerald-50 flex items-center gap-3 text-gray-700"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-emerald-950 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl">
          <a onClick={() => setMobileMenuOpen(false)} href="#home">{t.nav.home}</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#about">{t.nav.about}</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#services">{t.nav.services}</a>
          <a onClick={() => setMobileMenuOpen(false)} href="#contact">{t.nav.contact}</a>

          <div className="flex gap-2 py-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 rounded-lg border flex justify-center items-center gap-2 ${
                  currentLang === lang.code
                    ? 'bg-emerald-950 text-white border-emerald-950'
                    : 'border-gray-200'
                }`}
              >
                <span>{lang.flag}</span>
                <span className="uppercase text-xs font-bold">
                  {lang.code}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
