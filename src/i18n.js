export const locales = ['en','de','es','pl'];
export const defaultLocale = 'en';

export function getMessages(locale) {
  return import(`./messages/${locale}.json`).then((m) => m.default);
}
