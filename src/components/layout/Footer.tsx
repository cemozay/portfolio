"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/cemozay" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/yunuscemozay",
    },
    { name: "Email", icon: Mail, href: "mailto:cemyunusozay@gmail.com" },
  ];

  return (
    <motion.footer
      className="bg-retro-bg dark:bg-retro-bg-dark border-t-2 border-retro-primary dark:border-retro-border-dark"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            className="font-mono text-sm text-retro-text dark:text-retro-text-dark"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {currentYear} Yunus Cem Özay. All rights reserved.
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-retro-primary dark:border-retro-border-dark bg-retro-bg dark:bg-retro-bg-dark text-retro-primary dark:text-retro-text-dark hover:bg-retro-primary dark:hover:bg-retro-primary hover:text-retro-bg dark:hover:text-retro-bg transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
