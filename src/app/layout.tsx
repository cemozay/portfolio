import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yunus Cem Özay",
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
  authors: [{ name: "Yunus Cem Özay" }],
  creator: "Yunus Cem Özay",
  openGraph: {
    type: "website",
    url: "https://cemozay.com",
    title: "Yunus Cem Özay",
    description:
      "Modern web applications with a retro twist. Full stack developer passionate about clean code and pixel-perfect designs.",
    siteName: "Yunus Cem Özay",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunus Cem Özay",
    description:
      "Modern web applications with a retro twist. Full stack developer passionate about clean code and pixel-perfect designs.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-scroll-behavior="smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
