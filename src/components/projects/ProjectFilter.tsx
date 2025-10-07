"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface ProjectFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  selectedCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  const t = useTranslations("projects.filter");

  const categories = [
    { key: "all", label: t("all") },
    { key: "web", label: t("web") },
    { key: "mobile", label: t("mobile") },
    { key: "backend", label: t("backend") },
  ];

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
            selectedCategory === category.key
              ? "bg-retro-primary text-retro-bg dark:text-retro-bg-dark border-2 border-retro-primary pixel-glow"
              : "bg-transparent text-retro-text dark:text-retro-text-dark border-2 border-retro-primary dark:border-retro-border-dark hover:bg-retro-primary hover:text-retro-bg dark:hover:text-retro-bg"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {category.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
