import FAQPage from "./FAQPage";
import { getMessages } from "../../../i18n";

export default async function Page({ params }) {
  const { locale } = await params;
  const t = await getMessages(locale);

  return <FAQPage t={t} locale={locale} />;
}
