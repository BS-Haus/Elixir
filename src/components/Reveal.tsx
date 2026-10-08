"use client";

import { motion } from "motion/react";

export const ease = [0.22, 0.61, 0.36, 1] as const;

/** Slow, quiet fade-up as content enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const M = as === "li" ? motion.li : motion.div;
  return (
    <M
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, delay, ease }}
      className={className}
    >
      {children}
    </M>
  );
}
