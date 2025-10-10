"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("common.navigation");
  const locale = useLocale();

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-retro-bg/70 dark:bg-retro-bg-dark/70 backdrop-blur-sm border-b-2 border-retro-primary dark:border-retro-border-dark"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <Link
              href={`/${locale}`}
              className="font-pixel text-lg text-retro-primary dark:text-retro-text-dark"
            >
              CEM
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="font-mono text-sm uppercase tracking-wider text-retro-text dark:text-retro-text-dark hover:text-retro-primary dark:hover:text-retro-primary transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-retro-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 border-2 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark text-retro-primary dark:text-retro-text-dark"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t-2 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 font-mono text-sm uppercase tracking-wider text-retro-text dark:text-retro-text-dark hover:text-retro-primary dark:hover:text-retro-primary hover:bg-retro-primary/10 dark:hover:bg-retro-primary/10 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
