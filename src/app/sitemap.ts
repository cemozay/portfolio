import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cemozay.dev";
  const locales = ["en", "tr"];
  const pages = ["", "/projects", "/about", "/contact"];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    pages.forEach((page) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            tr: `${baseUrl}/tr${page}`,
          },
        },
      });
    });
  });

  return sitemap;
}
