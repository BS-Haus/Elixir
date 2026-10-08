"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { formatPrice, products } from "@/lib/products";
import { ease } from "./Reveal";
import { Star } from "./Star";

const facts = [
  ["serves", "30+ a bottle"],
  ["sugar", "none"],
  ["made", "by hand, london"],
];

/** The lockup: the table on the left, the carved stack on the right. */
export default function Hero() {
  const bottle = products.find((p) => p.id === "bottle")!;

  return (
    <section id="top" className="grid pt-[100px] md:min-h-[100svh] md:grid-cols-2 md:pt-[108px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease }}
        className="relative aspect-[4/5] md:aspect-auto"
      >
        <Image
          src="/img/v9/hero-table.jpg"
          alt="the elixir bottle on a long lunch table with friends, plates and glasses of elixir and tonic"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="sticker absolute bottom-6 left-6">drop in.</span>
      </motion.div>

      <div className="relative flex items-center justify-center overflow-hidden px-6 py-20 md:px-12">
        {/* the can's liquid, glowing softly behind the lockup */}
        <div aria-hidden className="aura-liquid drift pointer-events-none absolute top-[6%] left-1/2 aspect-square w-[70%] -translate-x-1/2 opacity-20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.4, ease }}
          className="relative flex max-w-xl flex-col items-center text-center"
        >
          <Star className="h-6 w-6 text-ink" />
          <h1 className="caps mt-6 flex flex-col items-center leading-none">
            <span className="text-[18px] tracking-[0.04em] md:text-[22px]">made for</span>
            <span className="mt-2 text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.95]">presence</span>
            <span className="mt-3 text-[18px] tracking-[0.04em] md:text-[22px]">and play.</span>
          </h1>
          <p className="mt-8 text-[26px] leading-[1.25] md:text-[30px]">
            Gentian root, with hints of red mandarin, cardamom and juniper.
          </p>

          <dl className="mt-10 grid w-full grid-cols-3 border-y border-ink/15">
            {facts.map(([k, v], i) => (
              <div key={k} className={`py-4 ${i ? "border-l border-ink/15" : ""}`}>
                <dt className="label text-[11px] text-muted">{k}</dt>
                <dd className="mt-1 text-[18px] leading-tight first-letter:uppercase">{v}</dd>
              </div>
            ))}
          </dl>

          <a href="#shop" className="btn mt-10">
            shop the elixir · {formatPrice(bottle.price!)} →
          </a>
          <p className="voice mt-5 text-muted">three pipettes, a light tonic. £0.83 a serve.</p>
        </motion.div>
      </div>
    </section>
  );
}
