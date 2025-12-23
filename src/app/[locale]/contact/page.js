'use client';
import { useState } from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getMessages } from '@/i18n';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import EnquiryFormClient from '@/components/contact/EnquiryFormClient';

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const t = await getMessages(locale);






  return (
    <>
      <Header currentLang={locale} t={t} />

      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">

          {/* Page Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
              Personal Inquiries
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have a question or requirement?  
              Make a personnel request and you will receive our offer within 24 hours on working days, or 48 hours on weekends and public holidays.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT → SIMPLE ENQUIRY FORM */}
            <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-950 mb-6">
                Send an Enquiry
              </h2>

              <EnquiryFormClient />

            </div>

            {/* RIGHT → CONTACT DETAILS */}
            <div className="space-y-10">

              <div className="bg-blue-950 rounded-[32px] p-10 text-white shadow-2xl">
                <h2 className="text-2xl font-bold mb-8">
                  Contact Details
                </h2>

                <div className="space-y-6 text-blue-100">
                  <div className="flex items-start gap-4">
                    <Mail className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p>info@flpworldwide.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p>+91-92571 13138</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Office Address</p>
                      <p className="leading-relaxed">
                        2nd & 3rd Floor, Kesari Plaza,<br /> Kanta Kalwar Rd, Sindhi Colony Extension,<br /> Shivpuri, Jhotwara, Jaipur, <br />Rajasthan 302012
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
