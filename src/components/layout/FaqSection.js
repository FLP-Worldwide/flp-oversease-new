'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const FAQS = [
  {
    q: 'Is FLP Overseas government approved?',
    a: 'Yes. FLP Overseas is licensed by the Ministry of External Affairs (MEA) and registered with the Ministry of Corporate Affairs (MCA), Government of India.'
  },
  {
    q: 'What is your MEA license number?',
    a: 'Our official MEA recruitment license number is B-3084/RAJ/COM/100/5/11092/2025.'
  },
  {
    q: 'Which countries do you recruit for?',
    a: 'Europe, Japan, Gulf & Middle East nations, and other global destinations depending on employer requirements.'
  },
  {
    q: 'Do you provide language training?',
    a: 'Yes. We offer German, Japanese, French, English, Scandinavian, and Balkan language modules based on job needs.'
  },
  {
    q: 'Is language mandatory for all jobs?',
    a: 'It depends on the country and job role. For Germany & healthcare positions language proficiency is mandatory.'
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

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="/en/faqs"   // <-- create full FAQ page later
            className="inline-block px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 font-medium transition"
          >
            View All FAQs
          </a>
        </div>

      </div>
    </section>
  );
}
