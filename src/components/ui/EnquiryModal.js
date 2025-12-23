'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function EnquiryModal({ open, onClose, source }) {
  if (!open) return null;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    industry: '',
    companyName: '',
    designation: '',
    phone: '',
    website: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source, // 🔥 THIS IS THE ONLY ADDITION
        }),
      });

      onClose(); // same UX
    } catch (err) {
      console.error('Lead submit failed', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-xl mx-4 rounded-[32px] p-8 shadow-2xl animate-scaleIn">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-950 mb-2">
          Send an Enquiry
        </h2>
        <p className="text-gray-500 mb-6">
          Fill in the details and our team will contact you shortly.
        </p>

        {/* 🔒 UI UNCHANGED */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="First Name" required name="firstName"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              onChange={handleChange} />
            <input placeholder="Last Name" required name="lastName"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Email" type="email" required  name="email"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              onChange={handleChange} />
            <input placeholder="Enter Industry" required name="industry"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Your Company Name" name="companyName"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              onChange={handleChange} />
            <input placeholder="Your Designation" name="designation"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Cell Phone No" required name="phone"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              onChange={handleChange} />
            <input placeholder="Company Website" name="website"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              onChange={handleChange} />
          </div>

          <textarea rows={3} placeholder="Tell Us Your Requirements" required name="message"
            className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none resize-none"
            onChange={handleChange} />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/30"
          >
            {loading ? 'Sending...' : 'Send Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}
