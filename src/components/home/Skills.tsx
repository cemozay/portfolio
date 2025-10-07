"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { skills } from "@/data/skills";

export default function Skills() {
  const t = useTranslations("home.skills");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "frontend", "backend", "mobile", "tools"];
  const categoryLabels = {
    all: "All",
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    tools: "Tools",
  };

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 scroll-snap-align-start">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-pixel text-3xl sm:text-4xl lg:text-5xl text-retro-primary dark:text-retro-text-dark mb-4">
            {t("title")}
          </h2>
          <p className="font-mono text-lg text-retro-text dark:text-retro-text-dark">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-retro-primary text-retro-bg dark:text-retro-bg-dark border-2 border-retro-primary"
                  : "bg-transparent text-retro-text dark:text-retro-text-dark border-2 border-retro-primary dark:border-retro-border-dark hover:bg-retro-primary hover:text-retro-bg dark:hover:text-retro-bg"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryLabels[category as keyof typeof categoryLabels]}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark p-4 h-24 flex flex-col items-center justify-center hover:border-retro-accent dark:hover:border-retro-accent transition-all duration-300">
                <div className="text-2xl mb-2">{skill.icon}</div>
                <div className="font-mono text-xs text-retro-text dark:text-retro-text-dark">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
