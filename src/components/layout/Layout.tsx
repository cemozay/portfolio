"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-retro-bg dark:bg-retro-bg-dark text-retro-text dark:text-retro-text-dark">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
