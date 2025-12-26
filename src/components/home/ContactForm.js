'use client';

import React, { useState } from 'react';
import { UploadCloud, CheckCircle, Send } from 'lucide-react';

export default function ContactForm({ t }) {
  const [userType, setUserType] = useState('hire_manpower');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source:
            userType === 'hire_manpower'
              ? 'hire_manpower'
              : 'request_workforce',
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Lead submit failed', err);
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Background patterns — UNCHANGED */}
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
        <p>An employer facing labor shortages.</p>
      </div>

      <div className="flex items-center gap-4 p-4 bg-blue-900/50 rounded-2xl border border-blue-800">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-blue-950 font-bold">
          2
        </div>
        <p>
          A staffing agency seeking reliable sourcing.
        </p>
      </div>

      <div className="flex items-center gap-4 p-4 bg-blue-900/50 rounded-2xl border border-blue-800">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-blue-950 font-bold">
          3
        </div>
        <p>
          An institution planning skill development.
        </p>
      </div>
      <div className="flex items-center gap-4 p-4 bg-blue-900/50 rounded-2xl border border-blue-800">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-blue-950 font-bold">
          4
        </div>
        <p>
          A company wanting a dedicated workforce pipeline.
        </p>
      </div>
    </div>
  </div>


        {/* RIGHT FORM — SAME UI */}
        <div className="bg-white p-4 md:p-10 rounded-[40px] shadow-2xl">

          {/* Tabs — UNCHANGED */}
          <div className="flex p-1 bg-gray-100 rounded-full mb-8">
            <button
              type="button"
              onClick={() => setUserType('hire_manpower')}
              className={`flex-1 py-3 text-xs font-bold rounded-full transition-all ${
                userType === 'hire_manpower'
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'text-gray-500'
              }`}
            >
              {t.form.tabCandidate}
            </button>

            <button
              type="button"
              onClick={() => setUserType('request_workforce')}
              className={`flex-1 py-3 text-xs font-bold rounded-full transition-all ${
                userType === 'request_workforce'
                  ? 'bg-blue-950 text-white shadow-md'
                  : 'text-gray-500'
              }`}
            >
              {t.form.tabEmployer}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="fullName"
              required
              placeholder={t.form.namePlaceholder}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                required
                placeholder={t.form.emailPlaceholder}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl"
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder={t.form.phonePlaceholder}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl"
              />
            </div>

           
              <textarea
                name="message"
                rows={3}
                placeholder={t.form.messagePlaceholder}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl resize-none"
              />
           

            {/* FILE UPLOAD — STILL HERE, UNCHANGED */}
            {/* <div className="relative group">
              <input type="file" id="file-upload" className="hidden" />
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer"
              >
                <UploadCloud className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm font-medium text-gray-500">
                  {t.form.fileLabel}
                </span>
              </label>
            </div> */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : (
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
