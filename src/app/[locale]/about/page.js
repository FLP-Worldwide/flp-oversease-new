import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getMessages } from '@/i18n';
import { CheckCircle } from 'lucide-react';

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const t = await getMessages(locale);

  return (
    <>
      <Header currentLang={locale} t={t} />


        <section className="pt-24 pb-8">
        {/* Hero Banner */}
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
            }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-800/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                About FLP Overseas
                <span className="block text-blue-300">
                    A Global Workforce Solutions Organization
                </span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Government-Authorized. Compliance-Driven. Employer-Focused.
                </p>
            </div>
            </div>
        </div>
        </div>
        </section>


      

      {/* COMPANY OVERVIEW */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Company Overview
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              FLP Overseas is an overseas recruitment and workforce mobility organization established to meet the growing global demand for skilled, reliable, and legally compliant international manpower. We operate as a specialized division of FLP Global Service Private Limited, under the FLP Worldwide Group, delivering structured workforce solutions across regulated international markets.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Licensed by the Ministry of External Affairs (MEA), Government of India, and registered with the Ministry of Corporate Affairs (MCA), FLP Overseas supports employers with recruitment solutions that align strictly with destination-country immigration laws, labor regulations, and ethical employment standards.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our role extends beyond candidate sourcing. We integrate workforce planning, skill assessment, language readiness, job-linked training, and compliance coordination into a single, accountable recruitment framework. This approach ensures employers receive job-ready manpower, while candidates access transparent and sustainable overseas employment opportunities.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b"
              alt="Recruitment process"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Vision & Mission
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              To be recognized as a trusted global workforce solutions partner, known for ethical recruitment, workforce readiness, and regulatory discipline.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>

            <ul className="space-y-4">
              {[
                'To responsibly bridge global skill gaps through structured international recruitment',
                'To prepare candidates for long-term overseas success through skill, language, and cultural readiness',
                'To deliver reliable, compliant, and scalable workforce solutions to global employers',
                'To uphold international labor standards and ethical recruitment practices in every engagement',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Global collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-12">
            How FLP Overseas Is Different
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Traditional Agencies Often
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Focus primarily on candidate sourcing</li>
                <li>• Treat language and training as optional</li>
                <li>• Provide limited post-deployment accountability</li>
                <li>• Emphasize speed over compliance</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-blue-950 mb-4">
                FLP Overseas Delivers
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• End-to-end workforce lifecycle management</li>
                <li>• Integrated skill and language preparation</li>
                <li>• Compliance-first recruitment processes</li>
                <li>• Employer-aligned, demand-based training</li>
                <li>• Focus on workforce continuity and retention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFORCE READINESS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Workforce Readiness Philosophy
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            Preparing People to Perform, Not Just to Deploy
          </p>

          <ul className="grid md:grid-cols-2 gap-6">
            {[
              'Role-specific skill assessment and trade testing',
              'Workplace-oriented language training',
              'Safety awareness and operational discipline',
              'Cultural orientation and professional conduct preparation',
              'Alignment with employer SOPs and productivity standards',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={20} className="text-blue-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Regulatory Compliance & Ethical Recruitment
          </h2>

          <div className="space-y-6 text-gray-700">
            <p>
              FLP Overseas conducts all recruitment activities strictly in accordance with Government of India regulations and aligns its operations with international labor standards applicable in destination countries.
            </p>

            <p>
              FLP Overseas follows a strict ethical recruitment policy aligned with international labor standards and responsible recruitment principles.
            </p>

            <p className="text-sm text-gray-500">
              FLP Overseas does not guarantee visas, employment outcomes, or immigration approvals. All overseas employment is subject to employer selection, legal eligibility, and approval by relevant authorities in destination countries.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
