"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "font-pixel text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer relative overflow-hidden";

  const variantClasses = {
    primary:
      "bg-retro-primary text-retro-bg border-2 border-retro-primary hover:bg-retro-accent hover:border-retro-accent pixel-glow",
    secondary:
      "bg-retro-bg text-retro-primary border-2 border-retro-primary hover:bg-retro-primary hover:text-retro-bg",
    outline:
      "bg-transparent text-retro-primary border-2 border-retro-primary hover:bg-retro-primary hover:text-retro-bg",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-retro-accent opacity-0"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );
}
