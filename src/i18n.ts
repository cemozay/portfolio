import { getRequestConfig } from "next-intl/server";

const locales = ["en", "tr"];

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locales.includes(locale ?? "") ? locale! : "en";

  return {
    locale: validLocale,
    messages: (await import(`../locales/${validLocale}.json`)).default,
  };
});
