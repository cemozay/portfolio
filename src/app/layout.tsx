import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cem Ozay - Full Stack Developer",
  description:
    "Modern web applications with a retro twist. Full stack developer passionate about clean code and pixel-perfect designs.",
  keywords: [
    "portfolio",
    "developer",
    "react",
    "nextjs",
    "typescript",
    "retro",
    "pixel art",
  ],
  authors: [{ name: "Cem Ozay" }],
  creator: "Cem Ozay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cemozay.dev",
    title: "Cem Ozay - Full Stack Developer",
    description:
      "Modern web applications with a retro twist. Full stack developer passionate about clean code and pixel-perfect designs.",
    siteName: "Cem Ozay Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cem Ozay - Full Stack Developer",
    description:
      "Modern web applications with a retro twist. Full stack developer passionate about clean code and pixel-perfect designs.",
    creator: "@cemozay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
