"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
}: CardProps) {
  const baseClasses =
    "bg-retro-bg dark:bg-retro-bg-dark border-2 border-retro-primary dark:border-retro-border-dark p-6 relative overflow-hidden";
  const hoverClasses = hover
    ? "hover:border-retro-accent dark:hover:border-retro-accent transition-all duration-300"
    : "";
  const glowClasses = glow ? "pixel-glow" : "";

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${glowClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
}
