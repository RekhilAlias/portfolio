"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

// Game/Cartoon Button (Cute Style)
export const ArcaneButton = ({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
  [key: string]: unknown;
}) => {
  const Component = href ? motion.a : motion.button;

  // Base: Bold font, thick border, button reset, rounded
  const baseStyles =
    "relative px-8 py-3 font-black tracking-wider text-xl uppercase transition-all duration-300 group border-4 border-white rounded-full box-border active:scale-95";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[4px_4px_0px_0px_hsl(var(--shadow-color))] hover:shadow-[6px_6px_0px_0px_hsl(var(--shadow-color))] hover:-translate-y-1",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[4px_4px_0px_0px_hsl(var(--shadow-color))] hover:shadow-[6px_6px_0px_0px_hsl(var(--shadow-color))] hover:-translate-y-1",
  };

  return (
    <Component
      href={href}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
};

// Game Panel Frame
export const ArcaneFrame = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative p-8 border-4 border-white bg-white/80 backdrop-blur-md rounded-3xl shadow-[8px_8px_0px_0px_hsl(var(--shadow-color))]",
        className,
      )}
    >
      {/* Decorative dots for 'cute' UI */}
      <div className="absolute top-3 left-3 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-primary/20"></div>
        <div className="w-3 h-3 rounded-full bg-secondary/20"></div>
      </div>
      {children}
    </div>
  );
};
