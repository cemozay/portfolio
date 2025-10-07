"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ProjectFilter from "@/components/projects/ProjectFilter";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects, getProjectsByCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const t = useTranslations("projects");

  const filteredProjects = getProjectsByCategory(selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 scroll-snap-align-start scroll-snap-type-y-mandatory">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="font-pixel text-4xl sm:text-5xl lg:text-6xl text-retro-primary dark:text-retro-text-dark mb-4">
            {t("title")}
          </h1>
          <p className="font-mono text-lg text-retro-text dark:text-retro-text-dark">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Project Filter */}
        <ProjectFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Projects Grid */}
        <ProjectGrid projects={filteredProjects} />

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark p-6">
            <div className="font-pixel text-3xl text-retro-primary dark:text-retro-text-dark mb-2">
              {projects.length}
            </div>
            <div className="font-mono text-sm text-retro-text dark:text-retro-text-dark uppercase tracking-wider">
              Total Projects
            </div>
          </div>
          <div className="text-center bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark p-6">
            <div className="font-pixel text-3xl text-retro-primary dark:text-retro-text-dark mb-2">
              {projects.filter((p) => p.liveUrl).length}
            </div>
            <div className="font-mono text-sm text-retro-text dark:text-retro-text-dark uppercase tracking-wider">
              Live Demos
            </div>
          </div>
          <div className="text-center bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark p-6">
            <div className="font-pixel text-3xl text-retro-primary dark:text-retro-text-dark mb-2">
              {new Set(projects.flatMap((p) => p.technologies)).size}
            </div>
            <div className="font-mono text-sm text-retro-text dark:text-retro-text-dark uppercase tracking-wider">
              Technologies
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
