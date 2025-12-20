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

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const changeLanguage = (lang) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/'));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* Announcement */}
      <AnnouncementBar isScrolled={isScrolled} />

      {/* Header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-blue-950/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          <NavLink href={`/${locale}/`}>
          <Image
            src={isScrolled ? '/images/logo1.png' : '/images/logo.svg'}
            alt="FLP Overseas Logo"
            width={220}
            height={40}
            className="object-contain"
            priority
          /></NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href={`/${locale}/`} isScrolled={isScrolled}>{t.nav.home}</NavLink>
            <a className={`hover:text-blue-400 ${isScrolled ? 'text-gray-200' : 'text-blue-900'}`} href="#about">
              {t.nav.about}
            </a>
            <a className={`hover:text-blue-400 ${isScrolled ? 'text-gray-200' : 'text-blue-900'}`} href="#services">
              {t.nav.services}
            </a>
            <NavLink href={`/${locale}/contact`} isScrolled={isScrolled}>{t.nav.contact}</NavLink>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border ${
                  isScrolled
                    ? 'border-blue-800 text-white hover:bg-blue-900'
                    : 'border-blue-200 text-blue-900 hover:bg-blue-50'
                }`}
              >
                <span>{languages.find(l => l.code === currentLang)?.flag}</span>
                <span className="text-xs font-semibold uppercase">{currentLang}</span>
                <ChevronDown size={14} />
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border overflow-hidden">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 text-sm hover:bg-blue-50 flex gap-3"
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-blue-400 hover:bg-blue-300 text-blue-950 font-bold rounded-full transition-all text-white"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-white' : 'text-blue-950'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t p-6 space-y-4 shadow-xl">
            <a href="#home">{t.nav.home}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
        )}
      </div>
    </nav>
  );
}
