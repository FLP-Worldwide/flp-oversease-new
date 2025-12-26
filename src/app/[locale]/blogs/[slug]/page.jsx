import BlogDetailPage from "@/components/blog/BlogDetailPage";
import { getMessages } from "@/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default async function Page({ params }) {
  const { slug, locale } = await params;   
    const t = await getMessages(locale); 
  
  
  return <>
 <Header currentLang={locale} t={t} />  
  <BlogDetailPage slug={slug} locale={locale} />
    <Footer />
  </>;
}
