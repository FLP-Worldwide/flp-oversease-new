'use client';

import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <div className="w-60 h-15 rounded-xl flex items-center overflow-hidden">
            <Image
              src={'/images/logo1.png'}
              alt="FLP Overseas Logo"
              width={220}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-blue-50 text-sm leading-relaxed mt-3">
            This is not recruitment as usual. <br/>
            This is workforce engineering for global industries.
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

            {/* Website under email */}
            {/* <li className="flex items-center gap-3">
              <span className="text-blue-50 font-bold">🌐</span>
              <a href="https://flpoverseas.com" target="_blank" className="hover:text-white">
                www.flpoverseas.com
              </a>
            </li> */}

            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-50 shrink-0 mt-1" />
              <span>
                2nd & 3rd Floor, Kesari Plaza, Kanta Kalwar Rd, Sindhi Colony Extension,<br/>
                Shivpuri, Jhotwara, Jaipur, Rajasthan 302012
              </span>
            </li>
          </ul>
        </div>

        {/* Awards / Licenses Section */}
        <div>
          <h4 className="font-bold mb-6 text-blue-400">Awards & Licensing</h4>
          
          <ul className="space-y-3 text-sm text-blue-100/80 leading-relaxed">
            <li>✔ Government of India–approved recruitment agency</li>
            <li>✔ Ministry of External Affairs (MEA) licensed</li>
            <li>✔ Ministry of Corporate Affairs registered</li>
            <li>✔ Ethical recruitment commitment</li>
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
  );
}
