import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getMessages } from '@/i18n';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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

              <form className="space-y-5">

              {/* Select Industry */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Select industry
                </label>
                <select
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
                  type="text"
                  required
                  className="w-full px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Surname, first name *
                </label>
                <input
                  type="text"
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
                  placeholder="e.g. start date, number of employees, type of contract, location"
                  required
                  className="w-full px-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                Sending
                <Send size={18} />
              </button>
            </form>

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
                      <p>info@selectraoverseas.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p>+91 98718 04422</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-blue-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Office Address</p>
                      <p className="leading-relaxed">
                        Unit No-1173-1174, 11th Floor,<br />
                        Plot No.6, Vegas Mall,<br />
                        Dwarka Sector-14,<br />
                        Delhi – 110075
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
