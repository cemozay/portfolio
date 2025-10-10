"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { useState } from "react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "tr", name: "Türkçe" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale !== locale) {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    }
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className="w-10 h-10 flex items-center justify-center border-2 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark text-retro-primary dark:text-retro-text-dark hover:bg-retro-primary dark:hover:bg-retro-primary hover:text-retro-bg dark:hover:text-retro-bg transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Change Language"
      >
        <Languages size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-12 right-0 z-50 min-w-[140px] border-2 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-2 text-left font-mono text-sm transition-all duration-200 ${
                  locale === lang.code
                    ? "bg-retro-primary text-retro-bg dark:bg-retro-primary dark:text-retro-bg"
                    : "text-retro-text dark:text-retro-text-dark hover:bg-retro-primary/20 dark:hover:bg-retro-primary/20"
                }`}
                whileHover={{ x: 4 }}
              >
                {lang.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
