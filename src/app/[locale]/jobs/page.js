import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getMessages } from '@/i18n';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import JobGridSection from '@/components/JobGridSection';
import FaqSection from '@/components/layout/FaqSection';

export default async function JobsPage({ params }) {
  const { locale } = await params;
  const t = await getMessages(locale);

  return (
    <>
      <Header currentLang={locale} t={t} />

      {/* Page Intro */}
      <section className="pt-32 pb-8 px-6 bg-gradient-to-b from-blue-50 to-white">
        <JobGridSection />
      </section>
      
        <FaqSection />
      <Footer />
    </>
  );
}
