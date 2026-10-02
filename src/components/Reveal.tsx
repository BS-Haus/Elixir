"use client";

import { motion } from "motion/react";

export const ease = [0.22, 0.61, 0.36, 1] as const;

/** Slow, quiet fade-up as content enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
