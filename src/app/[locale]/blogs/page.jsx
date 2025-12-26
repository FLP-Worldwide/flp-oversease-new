import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogGrid from "@/components/blog/BlogGrid";
import { getMessages } from "@/i18n";

export default async function BlogsPage({ params }) {
  const { locale } = await params;   
  const t = await getMessages(locale); 

  return (
    <>
      <Header currentLang={locale} t={t} />

      {/* CLIENT Blog Grid FETCHES API */}
      <BlogGrid locale={locale} />

      <Footer />
    </>
  );
}
