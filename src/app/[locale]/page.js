import Hero from '@/components/home/Hero';
import Header from '../../components/layout/Header';
import { getMessages } from '../../i18n';
import Features from '@/components/home/Features';
import ContactForm from '@/components/home/ContactForm';
import Footer from '@/components/layout/Footer';
import LicensesSection from '@/components/home/LicensesSection';
import AboutSection from '@/components/home/AboutSection';
import FaqSection from '@/components/layout/FaqSection';

export default async function Page({ params }) {
  const { locale } = await params;
  const t = await getMessages(locale);

  return (
    <>
      <Header currentLang={locale} t={t} />
      {/* rest of page */}
      <Hero t={t} />
      <LicensesSection t={t} />
      <AboutSection t={t} />
      <Features t={t} />
      <ContactForm t={t} />
      <FaqSection />
      <Footer t={t} />
    </>
  );
}
