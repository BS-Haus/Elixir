"use client";

import Image from "next/image";
import { motion } from "motion/react";

const steps = [
  { n: "01", t: "ice, and plenty of it", d: "a big glass. the cold is part of it." },
  { n: "02", t: "three pipettes of elixir", d: "watch it bloom, amber into clear." },
  { n: "03", t: "a light tonic", d: "pour slowly. let it fizz and settle." },
  { n: "04", t: "a slice of orange", d: "then put your phone down." },
];

export default function Ritual() {
  return (
    <section id="ritual" className="grain relative overflow-hidden bg-rust px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[28px]"
        >
          <Image
            src="/img/shop-pour.jpg"
            alt="elixir being dropped from a pipette into glasses of tonic with grapefruit"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <div>
          <p className="font-type text-xs uppercase tracking-[0.3em] text-butter">
            the ritual
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            the drink that
            <br />
            <em className="text-butter">savours</em> the moment
          </h2>
          <ol className="mt-12 divide-y divide-cream/20 border-y border-cream/20">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-baseline gap-6 py-5"
              >
                <span className="font-type text-sm text-cream/50">{s.n}</span>
                <div>
                  <p className="font-display text-2xl transition group-hover:text-butter md:text-3xl">
                    {s.t}
                  </p>
                  <p className="mt-1 text-sm text-cream/70">{s.d}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
