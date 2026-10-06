"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { HERO_VIDEO, formatPrice, products } from "@/lib/products";
import { ease } from "./Reveal";

const lines = [
  { text: "all the ritual.", em: false },
  { text: "none of the alcohol.", em: true },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const bottle = products.find((p) => p.id === "bottle")!;

  return (
    <section id="top" ref={ref} className="bg-paper">
      <div className="mx-auto grid min-h-[100svh] max-w-[1440px] gap-12 px-5 pt-28 pb-16 md:grid-cols-12 md:items-end md:gap-10 md:px-10 md:pt-32 md:pb-20">
        {/* copy */}
        <div className="md:col-span-6 md:pb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease }}
            className="label text-muted"
          >
            non-alcoholic botanical bitters · made in london
          </motion.p>

          <h1 className="mt-8 font-serif text-[clamp(3.25rem,7.2vw,7.5rem)] leading-[0.95] tracking-[-0.02em]">
            {lines.map((l, i) => (
              <span key={l.text} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 1.4, ease }}
                  className={`block ${l.em ? "text-rust italic" : ""}`}
                >
                  {l.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease }}
          >
            <p className="mt-10 max-w-md text-[17px] leading-[1.7] text-muted">
              an ancient ritual for modern good times. elixir is a 0% bitters
              made from gentian root, red mandarin and cardamom — three pipettes
              into tonic for the dinner, the gig, or a moment to yourself.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="#bottle"
                className="label bg-ink px-8 py-4 text-paper transition-colors duration-500 hover:bg-rust"
              >
                shop elixir — {formatPrice(bottle.price!)}
              </a>
              <a
                href="#explained"
                className="label border border-ink/25 px-8 py-4 transition-colors duration-500 hover:border-ink"
              >
                what is elixir?
              </a>
            </div>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.8, ease }}
          className="relative md:col-span-5 md:col-start-8"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-stone">
            <motion.div style={{ y: photoY }} className="absolute inset-[-5%_0]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={HERO_VIDEO}
                poster="/img/hero-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Elixir brand film: the bottle, golden-hour coastlines and palms"
              />
            </motion.div>
          </div>
          <p className="label mt-4 flex justify-between text-muted">
            <span>0.0% abv</span>
            <span>30 serves per bottle</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
