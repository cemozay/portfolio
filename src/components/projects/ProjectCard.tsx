"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { Project } from "@/data/projects";
import { ExternalLink, Github, Calendar } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const tButtons = useTranslations("common.buttons");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col group">
        {/* Project Image */}
        <div className="w-full h-48 bg-retro-primary/10 dark:bg-retro-primary/20 mb-4 flex items-center justify-center border-2 border-retro-primary dark:border-retro-border-dark group-hover:border-retro-accent dark:group-hover:border-retro-accent transition-all duration-300">
          <div className="font-pixel text-4xl text-retro-primary dark:text-retro-text-dark">
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Project Info */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-pixel text-lg text-retro-primary dark:text-retro-text-dark">
              {project.title}
            </h3>
            <Badge variant="secondary" size="sm">
              {project.category}
            </Badge>
          </div>

          {/* Date */}
          <div className="flex items-center text-retro-text dark:text-retro-text-dark text-sm mb-3">
            <Calendar size={14} className="mr-2" />
            <span className="font-mono">{project.date}</span>
          </div>

          {/* Description */}
          <p className="font-mono text-sm text-retro-text dark:text-retro-text-dark mb-4 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full">
                  <Github size={16} className="mr-2" />
                  {tButtons("viewCode")}
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="primary" size="sm" className="w-full">
                  <ExternalLink size={16} className="mr-2" />
                  {tButtons("liveDemo")}
                </Button>
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
