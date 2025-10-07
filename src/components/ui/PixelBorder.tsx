"use client";

import { ReactNode } from "react";

interface PixelBorderProps {
  children: ReactNode;
  className?: string;
  variant?: "single" | "double" | "glow";
}

export default function PixelBorder({
  children,
  className = "",
  variant = "single",
}: PixelBorderProps) {
  const baseClasses = "relative";

  const variantClasses = {
    single: "border-2 border-retro-primary dark:border-retro-border-dark",
    double:
      "border-2 border-retro-primary dark:border-retro-border-dark before:absolute before:inset-1 before:border before:border-retro-primary dark:before:border-retro-border-dark",
    glow: "border-2 border-retro-primary dark:border-retro-border-dark pixel-glow",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
