"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ease } from "./Reveal";

/**
 * A line that arrives word by word, each word rising out of a soft blur.
 * `immediate` plays on load (the hero); otherwise it plays as it scrolls into view.
 */
export function Words({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const hidden = { opacity: 0, y: "0.35em", filter: "blur(8px)" };
  const shown = { opacity: 1, y: "0em", filter: "blur(0px)" };
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block whitespace-pre"
          initial={reduce ? false : hidden}
          {...(immediate ? { animate: shown } : { whileInView: shown, viewport: { once: true, margin: "-40px" } })}
          transition={{ duration: 1.1, delay: delay + i * stagger, ease }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}

/** Drifts its child gently against the scroll, so photographs feel deep rather than flat. */
export function Parallax({
  children,
  className = "",
  amount = 6,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number; // percent of travel each way
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={reduce ? undefined : { y }} className="absolute -inset-y-[8%] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}
