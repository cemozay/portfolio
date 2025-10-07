"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import { Project } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const t = useTranslations("projects");

  if (projects.length === 0) {
    return (
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="font-pixel text-2xl text-retro-primary dark:text-retro-text-dark mb-4">
          {t("noProjects")}
        </div>
        <div className="font-mono text-retro-text dark:text-retro-text-dark">
          Try selecting a different category
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
}
