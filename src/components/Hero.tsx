"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { formatPrice, products } from "@/lib/products";
import { Sticker } from "./Sticker";

const ease = [0.2, 0.8, 0.2, 1] as const;
const lines = [
  { words: ["all", "the", "ritual."], em: false },
  { words: ["none", "of", "the", "alcohol."], em: true },
];
// stagger delay per word, in reading order
const delays = lines.map((l, li) =>
  l.words.map((_, wi) => 0.15 + (li * lines[0].words.length + wi) * 0.07),
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const bottle = products.find((p) => p.id === "bottle")!;

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative overflow-hidden bg-rust text-cream"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-7xl gap-12 px-5 pt-28 pb-14 md:grid-cols-12 md:items-center md:gap-8 md:px-8 md:pt-24 md:pb-16">
        {/* copy */}
        <div className="relative z-10 md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-type text-xs uppercase tracking-[0.3em] text-butter"
          >
            non-alcoholic botanical bitters · 0.0% abv
          </motion.p>

          <h1 className="mt-6 font-display text-[clamp(3.4rem,9vw,8.75rem)] leading-[0.88] font-medium tracking-[-0.035em] [font-variation-settings:'SOFT'_100,'WONK'_1]">
            {lines.map((line, li) => (
              <span key={li} className="block">
                {line.words.map((w, wi) => (
                  <span
                    key={w}
                    className="inline-block overflow-hidden pb-[0.08em] align-bottom"
                  >
                    <motion.span
                      initial={{ y: "105%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: delays[li][wi], duration: 0.9, ease }}
                      className={`inline-block pr-[0.22em] ${
                        line.em ? "font-normal text-butter italic" : ""
                      }`}
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-cream/85 md:text-xl"
          >
            elixir is a hand-crafted bitters made from gentian root, red
            mandarin and cardamom. three pipettes into tonic and you have a
            proper grown-up drink — and a clear head for whatever comes next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#bottle"
              className="rounded-full bg-cream px-7 py-4 text-espresso transition hover:bg-butter"
            >
              shop the bottle · {formatPrice(bottle.price!)}
            </a>
            <a
              href="#can"
              className="rounded-full border border-cream/40 px-7 py-4 transition hover:border-cream"
            >
              meet the can
            </a>
          </motion.div>
        </div>

        {/* the pour */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease }}
          className="relative mx-3 md:col-span-5 md:mx-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] md:aspect-[3/4]">
            <motion.div style={{ y: photoY }} className="absolute inset-[-6%_0]">
              <Image
                src="/img/shop-pour.jpg"
                alt="elixir dropped from a pipette into glasses of tonic with grapefruit"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[60%_50%]"
              />
            </motion.div>
          </div>
          <Sticker shape="star" className="absolute -top-8 -left-8 flex">
            30
            <br />
            serves
          </Sticker>
          <Sticker shape="circle" className="absolute -right-4 -bottom-6 flex">
            0.0%
            <br />
            abv
          </Sticker>
        </motion.div>
      </div>

      <a
        href="#shop"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-type text-[10px] tracking-[0.3em] text-cream/60 uppercase transition hover:text-cream md:flex"
      >
        meet the two
        <motion.span
          aria-hidden
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          ↓
        </motion.span>
      </a>
    </section>
  );
}
