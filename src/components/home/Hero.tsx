"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import Button from "../ui/Button";

export default function Hero() {
  const t = useTranslations("home.hero");
  const tButtons = useTranslations("common.buttons");
  const locale = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 scroll-snap-align-start">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-32 h-32 mx-auto border-4 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark pixel-glow">
              <div className="w-full h-full bg-retro-primary/20 flex items-center justify-center font-pixel text-4xl text-retro-primary dark:text-retro-text-dark">
                YC
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-pixel text-4xl sm:text-6xl lg:text-7xl text-retro-primary dark:text-retro-text-dark mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t("title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="font-mono text-xl sm:text-2xl lg:text-3xl text-retro-text dark:text-retro-text-dark mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t("subtitle")}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="font-mono text-base sm:text-lg lg:text-xl text-retro-text dark:text-retro-text-dark mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link href={`/${locale}/about`}>
              <Button size="lg" variant="primary">
                {tButtons("viewProjects")}
              </Button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" variant="outline">
                {tButtons("getInTouch")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
