'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How does the overseas recruitment process work?',
    a: 'We understand your requirements, source verified candidates, conduct interviews, and handle documentation to ensure a smooth hiring process.'
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'We specialize in recruitment for Europe, the Middle East, and other international markets depending on employer needs.'
  },
  {
    q: 'Do you provide government-approved recruitment?',
    a: 'Yes, we are a government-approved overseas recruitment agency and follow all legal and compliance requirements.'
  },
  {
    q: 'How long does the hiring process take?',
    a: 'Typically, you will receive suitable profiles within 24–48 working hours after submitting your requirements.'
  },
  {
    q: 'Can candidates submit their CV directly?',
    a: 'Yes, candidates can upload their CV through our website, and our team will get in touch after review.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know about our recruitment process
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-slate-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
