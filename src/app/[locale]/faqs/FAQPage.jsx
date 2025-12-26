'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function FAQPage({ t, locale }) {
  const [openIndex, setOpenIndex] = useState(null);

  const FAQS = t.faq.list; // 🔥 FAQ translations directly from JSON

  return (
    <>
      <Header currentLang={locale} t={t} />

      <section className="bg-white pt-36 pb-24 px-6 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-bl-[120px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-950">
              {t.faq.title}
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              {t.faq.subtitle}
            </p>
          </div>

          {/* FAQ ACCORDION */}
         <div className="space-y-6 max-w-4xl mx-auto">

            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-blue-950">{item.q}</span>
                    <ChevronDown
                      className={`transition-transform ${
                        isOpen ? "rotate-180 text-blue-600" : "text-gray-600"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer t={t} />
    </>
  );
}
