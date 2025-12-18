export const locales = ['en', 'de'];
export const defaultLocale = 'en';

export function getMessages(locale) {
  return import(`./messages/${locale}.json`).then((m) => m.default);
}
