'use client';

import { X, Send } from 'lucide-react';
import { useState } from 'react';

export default function EnquiryModal({ open, onClose }) {
  if (!open) return null;

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

        {/* Form */}
        <form className="space-y-5">

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                required
                />
                <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                required
                />
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                required
                />
                <input
                type="text"
                placeholder="Enter Industry"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                required
                />
            </div>

            {/* Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="text"
                placeholder="Your Company Name"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
                <input
                type="text"
                placeholder="Your Designation"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                type="tel"
                placeholder="Cell Phone No"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                required
                />
                <input
                type="url"
                placeholder="Company Website"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                />
            </div>

            {/* Requirements */}
            <textarea
                rows={3}
                placeholder="Tell Us Your Requirements"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none resize-none"
                required
            />

            {/* Submit */}
            <button
                type="submit"
                className="w-full mt-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/30"
            >
                Send Enquiry
            </button>
            </form>

      </div>
    </div>
  );
}
