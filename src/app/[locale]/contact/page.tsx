"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/data/personal";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tForm = useTranslations("contact.form");
  const tSocial = useTranslations("contact.social");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      name: tSocial("email"),
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      color: "text-red-500",
    },
    {
      name: tSocial("github"),
      icon: Github,
      href: `https://github.com/${personalInfo.github}`,
      color: "text-gray-800 dark:text-gray-200",
    },
    {
      name: tSocial("linkedin"),
      icon: Linkedin,
      href: `https://linkedin.com/in/${personalInfo.linkedin}`,
      color: "text-blue-600",
    },
    {
      name: tSocial("twitter"),
      icon: Twitter,
      href: `https://twitter.com/${personalInfo.twitter}`,
      color: "text-blue-400",
    },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="font-pixel text-2xl text-retro-primary dark:text-retro-text-dark mb-6">
                {tForm("send")}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-sm text-retro-text dark:text-retro-text-dark mb-2"
                  >
                    {tForm("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark text-retro-text dark:text-retro-text-dark font-mono focus:border-retro-accent dark:focus:border-retro-accent focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-sm text-retro-text dark:text-retro-text-dark mb-2"
                  >
                    {tForm("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark text-retro-text dark:text-retro-text-dark font-mono focus:border-retro-accent dark:focus:border-retro-accent focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-sm text-retro-text dark:text-retro-text-dark mb-2"
                  >
                    {tForm("subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark text-retro-text dark:text-retro-text-dark font-mono focus:border-retro-accent dark:focus:border-retro-accent focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-sm text-retro-text dark:text-retro-text-dark mb-2"
                  >
                    {tForm("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark text-retro-text dark:text-retro-text-dark font-mono focus:border-retro-accent dark:focus:border-retro-accent focus:outline-none transition-colors duration-300 resize-vertical"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {tForm("send")}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <h2 className="font-pixel text-2xl text-retro-primary dark:text-retro-text-dark mb-6">
                Get In Touch
              </h2>

              <p className="font-mono text-retro-text dark:text-retro-text-dark mb-8 leading-relaxed">
                {t("description")}
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <MapPin
                    size={20}
                    className="mr-4 text-retro-primary dark:text-retro-text-dark"
                  />
                  <span className="font-mono text-retro-text dark:text-retro-text-dark">
                    {personalInfo.location}
                  </span>
                </div>

                <div className="flex items-center">
                  <Mail
                    size={20}
                    className="mr-4 text-retro-primary dark:text-retro-text-dark"
                  />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-retro-text dark:text-retro-text-dark hover:text-retro-primary dark:hover:text-retro-primary transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-pixel text-lg text-retro-primary dark:text-retro-text-dark mb-4">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 border-2 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark hover:border-retro-accent dark:hover:border-retro-accent hover:bg-retro-primary/10 dark:hover:bg-retro-primary/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon
                        size={20}
                        className={`mr-3 ${social.color}`}
                      />
                      <span className="font-mono text-sm text-retro-text dark:text-retro-text-dark">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
