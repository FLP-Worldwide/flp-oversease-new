'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function EnquiryFormClient() {
  const [form, setForm] = useState({
    industry: '',
    jobTitle: '',
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    message: '',
    source: "enquiry"
  });

  const [loading, setLoading] = useState(false);
const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'enquiry',
        }),
      });

      setForm({
        industry: '',
        jobTitle: '',
        companyName: '',
        fullName: '',
        phone: '',
        email: '',
        message: '',
      });

      setSubmitted(true);

    } catch (err) {
      console.error('Enquiry failed', err);
    } finally {
      setLoading(false);
    }
  };

  /* ⬇️ UI COPY-PASTE EXACTLY AS-IS ⬇️ */
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
    
     {submitted && (
        <p className="text-green-600 font-semibold">
          ✅ Thank you! We’ll contact you shortly.
        </p>
      )}
                  {/* Select Industry */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Select industry
                    </label>
                    <select
                    name="industry"
                    onChange={handleChange}
                      required
                      className="w-full px-3 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    >
                      <option value="">Please select</option>
                      <option>Production & Logistics</option>
                      <option>Electrical Engineering</option>
                      <option>Building Industry</option>
                      <option>Mechanical Engineering</option>
                      <option>Plant Engineering</option>
                      <option>IT & Software Development</option>
                      <option>Engineering</option>
                      <option>Heating & Air Conditioning</option>
                      <option>Health & Care</option>
                      <option>Miscellaneous</option>
                    </select>
                  </div>
    
                  {/* Job Title */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Job title
                    </label>
                    <input
                     name="jobTitle"
                     onChange={handleChange}
                      type="text"
                      placeholder="e.g. welder, electrician"
                      className="w-full px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
    
                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Company *
                    </label>
                    <input
                    name="companyName"
                     onChange={handleChange}
                      type="text"
                      required
                      className="w-full px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
    
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      first name, Surname *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
    
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Area code, telephone number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      placeholder="e.g. +49 172 7477707"
                      required
                      className="w-full px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
    
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="e.g. info@company.com"
                      required
                      className="w-full px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
    
                  {/* Further Information */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Further information *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      onChange={handleChange}
                      placeholder="e.g. start date, number of employees, type of contract, location"
                      required
                      className="w-full px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                    />
                  </div>
    
                  {/* Submit */}
                  <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2
                        ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-400'}
                        text-white transition-all`}
                    >
                        {loading ? 'Sending...' : 'Send Enquiry'}
                        {!loading && <Send size={18} />}
                    </button>
                </form>
  );
}
