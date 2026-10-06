"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

// "Lead with the moment": a day in her life, from the strategy deck's persona.
// The section's light shifts from morning cream to late-night espresso as you scroll.
const moments = [
  {
    time: "7.30",
    k: "the morning reset",
    t: "a little space before it all begins.",
    d: "a walk along the canal, a podcast, a coffee. no elixir yet — just the intention.",
  },
  {
    time: "13.00",
    k: "the midday flow",
    t: "ambitious, busy, unbothered.",
    d: "the studio, the deadlines, lunch at the bakery with a colleague. a cold can of e&t for the 3pm lull, with no slump to follow.",
  },
  {
    time: "19.30",
    k: "good company",
    t: "the table is set. the night is young.",
    d: "thursday dinner — mismatched vintage plates, candlelight, music low. three pipettes into tonic for the table, then on to a gig.",
  },
  {
    time: "23.00",
    k: "a moment to herself",
    t: "home, clear-headed, grounded.",
    d: "a quick tidy, a page in the journal, a last glass over ice. tomorrow starts well too.",
  },
];

export default function Day() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bg = useTransform(
    scrollYProgress,
    [0.1, 0.35, 0.55, 0.75],
    ["#f3f0ea", "#e9dcc6", "#3d3f27", "#1d1613"],
  );
  const fg = useTransform(scrollYProgress, [0.42, 0.52], ["#1f1a17", "#efe9df"]);

  return (
    <motion.section ref={ref} style={{ backgroundColor: bg, color: fg }} className="px-5 md:px-10">
      <div className="mx-auto max-w-[1440px] pt-28 md:pt-40">
        <p className="label opacity-60">a day with elixir</p>
        <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-8xl">
          feel good, <em>without missing out.</em>
        </h2>
      </div>

      <ol className="mx-auto max-w-[1440px] pb-28 md:pb-40">
        {moments.map((m) => (
          <li
            key={m.time}
            className="grid min-h-[70svh] items-center gap-6 border-b border-current/15 py-16 md:grid-cols-12 md:gap-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
              transition={{ duration: 1 }}
              className="font-serif text-[clamp(5rem,16vw,15rem)] leading-[0.85] tracking-[-0.03em] md:col-span-6"
            >
              {m.time}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-25% 0px -25% 0px" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="md:col-span-5 md:col-start-8"
            >
              <p className="label opacity-60">{m.k}</p>
              <p className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">{m.t}</p>
              <p className="mt-5 max-w-md text-[16px] leading-[1.8] opacity-75">{m.d}</p>
            </motion.div>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}
