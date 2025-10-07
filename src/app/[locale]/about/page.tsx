"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import {
  personalInfo,
  education,
  experience,
  interests,
} from "@/data/personal";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");

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

        {/* About Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto mb-6 border-4 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark pixel-glow">
              <div className="w-full h-full bg-retro-primary/20 flex items-center justify-center font-pixel text-4xl text-retro-primary dark:text-retro-text-dark">
                C
              </div>
            </div>

            <h2 className="font-pixel text-2xl text-retro-primary dark:text-retro-text-dark mb-4">
              {personalInfo.name}
            </h2>

            <div className="flex items-center justify-center mb-4">
              <MapPin
                size={16}
                className="mr-2 text-retro-primary dark:text-retro-text-dark"
              />
              <span className="font-mono text-retro-text dark:text-retro-text-dark">
                {personalInfo.location}
              </span>
            </div>

            <p className="font-mono text-retro-text dark:text-retro-text-dark leading-relaxed max-w-3xl mx-auto">
              {t("description")}
            </p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="flex items-center mb-6">
                <GraduationCap
                  size={24}
                  className="mr-3 text-retro-primary dark:text-retro-text-dark"
                />
                <h3 className="font-pixel text-xl text-retro-primary dark:text-retro-text-dark">
                  {t("education.title")}
                </h3>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="font-mono font-bold text-retro-text dark:text-retro-text-dark mb-1">
                    {edu.degree}
                  </div>
                  <div className="font-mono text-sm text-retro-primary dark:text-retro-text-dark mb-1">
                    {edu.university}
                  </div>
                  <div className="flex items-center text-sm text-retro-text dark:text-retro-text-dark">
                    <Calendar size={14} className="mr-2" />
                    {edu.year}
                  </div>
                  {edu.description && (
                    <p className="font-mono text-sm text-retro-text dark:text-retro-text-dark mt-2">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="flex items-center mb-6">
                <Briefcase
                  size={24}
                  className="mr-3 text-retro-primary dark:text-retro-text-dark"
                />
                <h3 className="font-pixel text-xl text-retro-primary dark:text-retro-text-dark">
                  {t("experience.title")}
                </h3>
              </div>

              {experience.map((exp, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="font-mono font-bold text-retro-text dark:text-retro-text-dark mb-1">
                    {exp.title}
                  </div>
                  <div className="font-mono text-sm text-retro-primary dark:text-retro-text-dark mb-1">
                    {exp.company}
                  </div>
                  <div className="flex items-center text-sm text-retro-text dark:text-retro-text-dark mb-3">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>
                  <p className="font-mono text-sm text-retro-text dark:text-retro-text-dark mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <div className="flex items-center mb-6">
              <Heart
                size={24}
                className="mr-3 text-retro-primary dark:text-retro-text-dark"
              />
              <h3 className="font-pixel text-xl text-retro-primary dark:text-retro-text-dark">
                {t("interests.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 border-2 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark hover:border-retro-accent dark:hover:border-retro-accent transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-3">{interest.icon}</div>
                  <h4 className="font-mono font-bold text-retro-text dark:text-retro-text-dark mb-2">
                    {interest.name}
                  </h4>
                  <p className="font-mono text-sm text-retro-text dark:text-retro-text-dark">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
