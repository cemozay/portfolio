"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function FeaturedProjects() {
  const t = useTranslations("home.featuredProjects");
  const tButtons = useTranslations("common.buttons");
  const locale = useLocale();

  const featuredProjects = projects.filter((project) => project.featured);

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                {/* Project Image */}
                <div className="w-full h-48 bg-retro-primary/10 dark:bg-retro-primary/20 mb-4 flex items-center justify-center border-2 border-retro-primary dark:border-retro-border-dark">
                  <div className="font-pixel text-2xl text-retro-primary dark:text-retro-text-dark">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-pixel text-lg text-retro-primary dark:text-retro-text-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-retro-text dark:text-retro-text-dark mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" size="sm">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
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
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href={`/${locale}/projects`}>
            <Button size="lg" variant="outline">
              {tButtons("viewProjects")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
