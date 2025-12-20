'use client';

import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        
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
          <p className="text-blue-50 text-sm leading-relaxed">
            A premium government approved overseas recruitment agency dedicated
            to connecting global talent with industry leaders.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6 text-blue-400">Contact</h4>
          <ul className="space-y-4 text-sm text-blue-100/80">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-blue-50" />
              <span>info@flpworldwide.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-blue-50" />
              <span>+91-92571 13138</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-blue-50 shrink-0 mt-1"
              />
              <span>
                2nd & 3rd Floor, Kesari Plaza, Kanta Kalwar Rd, Sindhi Colony Extension,
                Shivpuri, Jhotwara, Jaipur, Rajasthan 302012
              </span>
            </li>

          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-blue-400">Quick Links</h4>
          <ul className="space-y-3 text-sm text-blue-100/80">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Submit CV
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold mb-6 text-blue-400">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-500 hover:text-blue-950 transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-500 hover:text-blue-950 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-blue-500 hover:text-blue-950 transition-all"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/40">
        <p>
          © 2025 FLP Overseas Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
