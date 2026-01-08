import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getMessages } from '@/i18n';
import { CheckCircle } from 'lucide-react';

export default async function WorkforceReadinessPage({ params }) {
  const { locale } = await params;
  const t = await getMessages(locale);

  return (
    <>
      <Header currentLang={locale} t={t} />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Workforce Readiness
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Prepared Workforce. Predictable Performance. Global Compliance.
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl">
              Workforce readiness is the operational core of FLP Overseas. It represents how we prepare
              international manpower to perform effectively, safely, and compliantly in real overseas
              work environments.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Workforce preparation"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            We do not operate as a sourcing-only recruitment agency. We function as a workforce solutions
            partner focused on readiness, integration, and long-term workforce stability.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Global employers engage FLP Overseas not for candidate availability, but for workforce
            reliability.
          </p>
        </div>
      </section>

      {/* WHAT WORKFORCE READINESS MEANS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              What Workforce Readiness Means at FLP Overseas
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Workforce readiness combines recruitment, skill validation, language capability,
              cultural alignment, and regulatory compliance into a single accountable framework.
              This ensures that deployed workers are productive from day one and aligned with employer
              expectations, workplace SOPs, and destination-country regulations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our workforce readiness model is designed to reduce operational risk, shorten onboarding
              time, and improve retention across international hiring programs.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="Workforce training"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTEGRATED SOLUTIONS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Integrated Workforce Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            FLP Overseas delivers end-to-end international workforce solutions covering the complete
            hiring lifecycle. Our approach includes employer requirement analysis, candidate sourcing,
            skill assessment, language preparation, compliance coordination, and deployment support.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            All workforce solutions are structured to meet destination-country labor and immigration
            laws while aligning with employer operational needs.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We support skilled, semi-skilled, and general manpower across manufacturing, logistics,
            construction, hospitality, healthcare, cleaning, and technical sectors.
          </p>
        </div>
      </section>

      {/* LANGUAGE & TRAINING */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Language as an Operational Requirement
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Language capability is treated as a functional workplace requirement, not a formal
              checkbox. Workers must be able to understand instructions, follow safety procedures,
              and communicate independently in daily operations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Based on role and destination, workforce preparation may include job-oriented German,
              English, Japanese, or other regional languages. Training focuses on workplace
              communication, safety terminology, and role-specific usage rather than academic
              certification.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Workplace & SOP-Aligned Training
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Workforce preparation is aligned with real job conditions. Training focuses on how
              work is actually performed on the shop floor, construction site, warehouse, care
              facility, or service environment.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Preparation may include role-specific technical orientation, workplace safety
              standards, productivity expectations, shift discipline, and SOP familiarity.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE & COMPLIANCE */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">

          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Cultural Readiness & Professional Integration
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Cultural orientation is essential for workforce stability. Workers are prepared for
              professional conduct, workplace hierarchy, employer–employee expectations, time
              discipline, and responsible living abroad.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Compliance-First Workforce Model
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              All workforce readiness activities operate under Government of India authorization
              and in alignment with destination-country regulations. FLP Overseas follows licensed
              recruitment practices, transparent documentation processes, and ethical recruitment
              standards with a strict zero-exploitation policy.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This compliance-first approach protects employers from legal and reputational risk
              while ensuring responsible workforce deployment.
            </p>
          </div>

        </div>
      </section>

      {/* RESULT */}
      <section className="py-24 px-6 bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            The Result: Workforce Ready From Day One
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'Job-ready',
              'Language-capable',
              'Safety-aware',
              'Compliance-aligned',
              'Easier to onboard and retain',
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl py-4">
                {item}
              </div>
            ))}
          </div>

          <p className="text-lg text-blue-100">
            We do not supply unprepared candidates.  
            <br />
            <strong>We deliver workforce readiness.</strong>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Partner With FLP Overseas
          </h2>
          <p className="text-gray-700 mb-10">
            Build a compliant, prepared, and performance-ready international workforce.
          </p>

          <a
            href={`/${locale}/contact`}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl
                       font-semibold hover:bg-blue-700 transition"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
