'use client';

import React, { useState } from 'react';
import ResumeModal from './ResumeModal';

export default function ResumeBuilderSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-950">
          Build Your Resume for Europe
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Create a professional, Europe-ready resume using Europass
          or build one instantly on our platform and download as PDF.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">

          {/* Europass */}
          <a
            href="https://europa.eu/europass/eportfolio/screen/cv-editor?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4
              rounded-xl
              bg-blue-950
              text-white
              font-semibold
              hover:bg-blue-900
              transition
            "
          >
            Create Resume with Europass
          </a>

          {/* On Website */}
          <button
            onClick={() => setOpen(true)}
            className="
              px-8 py-4
              rounded-xl
              border-2 border-blue-950
              text-blue-950
              font-semibold
              hover:bg-blue-50
              transition
            "
          >
            Create Resume with Us
          </button>
        </div>
      </div>

      {/* Resume Modal */}
      {open && <ResumeModal onClose={() => setOpen(false)} />}
    </section>
  );
}
