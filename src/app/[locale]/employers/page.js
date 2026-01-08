import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getMessages } from '@/i18n';
import { CheckCircle } from 'lucide-react';
import EmployerWorkflow from '@/components/EmployerWorkflow';
import FaqSection from '@/components/layout/FaqSection';

export default async function EmployerPage({ params }) {
  const { locale } = await params;
  const t = await getMessages(locale);

  return (
    <>
      <Header currentLang={locale} t={t} />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Employers
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              International Workforce Solutions by FLP Overseas
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-2xl">
              FLP Overseas partners with global employers facing sustained labor shortages,
              operational pressure, and increasing compliance requirements.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Global employers workforce"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-6 text-gray-700">
          <p>
            We deliver structured, legally compliant, and workforce-ready international manpower
            designed for productivity, stability, and long-term retention.
          </p>

          <p>
            Our role is not limited to recruitment. We operate as a workforce solutions partner,
            managing preparation, compliance, and deployment under a single accountable framework.
          </p>
        </div>
      </section>

      {/* ================= EMPLOYER CHALLENGES ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Employer Challenges
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Labor Shortages, Compliance Complexity, and Workforce Risk
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Across Europe, Japan, and the Gulf, employers are experiencing persistent shortages
              of dependable manpower. Aging populations, reduced local labor participation, and
              expanding operational demand have made international hiring a strategic necessity
              rather than an option.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                'Limited availability of job-ready and language-capable workers',
                'Complex immigration, labor law, and documentation requirements',
                'Productivity and safety risks caused by skill and communication gaps',
                'High attrition resulting from inadequate workforce preparation',
                'Legal and reputational exposure from non-compliant recruitment channels',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b"
              alt="Employer challenges"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SOLUTION MODEL ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            FLP’s Solution Model
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            End-to-End Workforce Lifecycle Management
          </p>

          <ul className="grid md:grid-cols-2 gap-6">
            {[
              'Employer requirement analysis and workforce planning',
              'Targeted sourcing and structured candidate screening',
              'Skill assessment, trade testing, and role validation',
              'Job-oriented language training aligned with workplace needs',
              'Regulatory documentation and compliance coordination',
              'Visa process support and pre-departure orientation',
              'Deployment assistance and post-arrival follow-up',
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <CheckCircle size={20} className="text-blue-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WORKFORCE CATEGORIES ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Workforce Categories Supplied
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              'White-Collar Professionals – engineers, supervisors, technical and administrative staff',
              'Blue-Collar Workforce – factory workers, warehouse staff, logistics and production personnel',
              'Skilled Trades – electricians, welders, technicians, machine operators, maintenance staff',
              'Semi-Skilled Workers – production assistants, service staff, helpers, facility support roles',
              'General Workforce – laborers, cleaners, loaders, housekeeping and site support staff',
              'Healthcare Professionals – nurses, caregivers, nursing aides, healthcare assistants',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={20} className="text-blue-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= BULK & PROJECT HIRING ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Bulk & Project Hiring
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Scalable Workforce Solutions for Large-Scale Operations
          </p>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              'Manufacturing plants and industrial expansions',
              'Construction and infrastructure projects',
              'Logistics hubs and warehousing operations',
              'Hospitality groups and facility management companies',
              'Healthcare institutions and care facilities',
              'Seasonal and peak-demand workforce programs',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={20} className="text-blue-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Compliance & Risk Mitigation
          </h2>

          <ul className="space-y-4 text-gray-700">
            {[
              'Ministry of External Affairs (MEA) licensed recruitment operations',
              'Ministry of Corporate Affairs (MCA) registered corporate entity',
              'Transparent recruitment processes and documentation',
              'Alignment with destination-country immigration and labor laws',
              'Ethical recruitment with a zero-exploitation commitment',
              'Clear contracts and worker protection mechanisms',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle size={20} className="text-blue-600 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}
      {/* <EmployerWorkflow /> */}

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With FLP Overseas
          </h2>
          <p className="text-blue-100 mb-10">
            Build a reliable, compliant, and scalable global workforce with FLP Overseas.
          </p>

          <a
            href={`/${locale}/contact`}
            className="inline-block bg-white text-blue-950 px-10 py-4 rounded-xl
                       font-semibold hover:bg-gray-100 transition"
          >
            Partner With FLP Overseas
          </a>
        </div>
      </section>

      <FaqSection />
      <Footer />
    </>
  );
}
