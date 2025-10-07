import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "tr"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // If invalid, fallback to default locale
  const validLocale = locales.includes(locale ?? "") ? locale! : "en";

  return {
    locale: validLocale,
    messages: (await import(`../locales/${validLocale}.json`)).default,
  };
});
