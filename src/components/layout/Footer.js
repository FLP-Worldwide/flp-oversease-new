'use client';

import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918149133730" // ← Replace with real number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6  right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white 
        w-14 h-14 rounded-full flex items-center justify-center shadow-xl 
        animate-bounce hover:animate-none transition-all"
      >
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-white-icon.png"   // use an svg/png icon
          alt="WhatsApp"
          width={30}
          height={30}
        />
      </a>

      <footer className="bg-blue-950 text-white pt-20 pb-10 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="w-60 h-15 rounded-xl flex items-center overflow-hidden">
              <Image
                src={'/images/logo-w.png'}
                alt="FLP Overseas Logo"
                width={220}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-blue-50 text-sm leading-relaxed mt-3">
              FLP Overseas is a Government of India–authorized overseas recruitment organization, licensed by MEA & MCA.
              Recruitment Agent License: B-3084/RAJ/COM/100/5/11092/2025
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-blue-400">Contact</h4>
            <ul className="space-y-4 text-sm text-blue-100/80">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-50" />
                <span>info@flpoverseas.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-50 shrink-0 mt-1" />
                <span>
                  2nd & 3rd Floor, Kesari Plaza, Kanta Kalwar Rd, Sindhi Colony Extension,  
                  Shivpuri, Jhotwara, Jaipur, Rajasthan 302012
                </span>
              </li>
            </ul>
          </div>

          {/* Awards / Licenses */}
          <div>
            <h4 className="font-bold mb-6 text-blue-400">Awards & Licensing</h4>
            <ul className="space-y-3 text-sm text-blue-100/80 leading-relaxed">
              <li>✔ Government of India–approved recruitment agency</li>
              <li>✔ MEA Licensed & MCA Registered</li>
              <li>✔ Ethical hiring process</li>
              <li>✔ International workforce deployment</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/40">
          <p>© 2025 FLP Overseas Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
