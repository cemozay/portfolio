"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BadgeProps) {
  const baseClasses =
    "font-mono font-bold uppercase tracking-wider inline-block";

  const variantClasses = {
    primary: "bg-retro-primary text-retro-bg dark:text-retro-bg-dark",
    secondary:
      "bg-retro-bg dark:bg-retro-bg-dark text-retro-primary border border-retro-primary",
    accent: "bg-retro-accent text-retro-bg dark:text-retro-bg-dark",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <motion.span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
}
