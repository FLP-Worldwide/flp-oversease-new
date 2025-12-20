'use client';

import React, { useState } from 'react';
import { UploadCloud, CheckCircle, Send } from 'lucide-react';

export default function ContactForm({ t }) {
  const [userType, setUserType] = useState('candidate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  /* ---------- Success State ---------- */
  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 bg-blue-950">
        <div className="max-w-lg mx-auto bg-white rounded-3xl p-12 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>

          <h3 className="text-2xl font-bold text-blue-950 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-500 mb-8">
            We have received your details. Our team will contact you shortly.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-bold hover:underline"
          >
            Send another response
          </button>
        </div>
      </section>
    );
  }

  /* ---------- Form ---------- */
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-blue-950 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.form.heading}
          </h2>
          <p className="text-blue-200 text-lg">
            {t.form.subheading}
          </p>

          <div className="space-y-4 pt-8">
            <div className="flex items-center gap-4 p-4 bg-blue-900/50 rounded-2xl border border-blue-800">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-blue-950 font-bold">
                1
              </div>
              <p>Fill out the form with your accurate details.</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-blue-900/50 rounded-2xl border border-blue-800">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-blue-950 font-bold">
                2
              </div>
              <p>
                Upload your CV (Candidate) or Job Requirement (Employer).
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-blue-900/50 rounded-2xl border border-blue-800">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-blue-950 font-bold">
                3
              </div>
              <p>
                Our expert team reviews and connects with you.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-4 md:p-10 rounded-[40px] shadow-2xl">
          {/* Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-full mb-8">
            <button
              type="button"
              onClick={() => setUserType('candidate')}
              className={`flex-1 py-3 text-xs font-bold rounded-full transition-all ${
                userType === 'candidate'
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'text-gray-500 hover:text-blue-900'
              }`}
            >
              {t.form.tabCandidate}
            </button>

            <button
              type="button"
              onClick={() => setUserType('employer')}
              className={`flex-1 py-3 text-xs font-bold rounded-full transition-all ${
                userType === 'employer'
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'text-gray-500 hover:text-blue-900'
              }`}
            >
              {t.form.tabEmployer}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              required
              placeholder={t.form.namePlaceholder}
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                required
                placeholder={t.form.emailPlaceholder}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <input
                type="tel"
                required
                placeholder={t.form.phonePlaceholder}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            {userType === 'employer' && (
              <textarea
                rows={3}
                placeholder={t.form.messagePlaceholder}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
              />
            )}

            {/* File Upload */}
            <div className="relative group">
              <input type="file" id="file-upload" className="hidden" />
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all"
              >
                <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-blue-500 mb-2" />
                <span className="text-sm font-medium text-gray-500">
                  {t.form.fileLabel}
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  PDF, DOCX up to 10MB
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {t.form.submitBtn}
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
