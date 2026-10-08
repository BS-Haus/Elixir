"use client";

import { motion } from "motion/react";
import { ease } from "./Reveal";

/** The vagus nerve: a fine line of the can's liquid that draws down through the three orbs. */
export function Nerve() {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.6, delay: 0.3, ease }}
      className="absolute top-12 bottom-12 left-[27px] w-px origin-top opacity-60"
      style={{ background: "linear-gradient(180deg,#f3c160,#e7a6c4,#5d60ce)" }}
    />
  );
}
