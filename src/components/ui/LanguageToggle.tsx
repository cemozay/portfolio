"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "tr" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="px-3 py-2 border-2 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark text-retro-primary dark:text-retro-text-dark hover:bg-retro-primary dark:hover:bg-retro-primary hover:text-retro-bg dark:hover:text-retro-bg transition-all duration-300 font-mono font-bold uppercase tracking-wider"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {locale === "en" ? "TR" : "EN"}
    </motion.button>
  );
}
