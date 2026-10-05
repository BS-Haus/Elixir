"use client";

import { motion } from "motion/react";
import { HERO_VIDEO, formatPrice, products } from "@/lib/products";
import { Framed } from "./Ornament";
import { ease } from "./Reveal";

/** Full-bleed brand film from the current site, framed by the Nouveau brackets. */
export default function Hero() {
  const bottle = products.find((p) => p.id === "bottle")!;

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-cocoa text-cream">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        poster="/img/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-cocoa/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-transparent to-cocoa/40" />

      <div className="relative flex h-full flex-col items-center justify-center px-5 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease }}
        >
          <Framed bracketClass="h-36 md:h-72" className="gap-2 md:gap-10">
            <p className="label text-cream/80">Handmade 0% botanical bitters</p>
            <h1 className="display mt-5 text-[clamp(2.7rem,8vw,7.5rem)]">
              <span className="whitespace-nowrap">Alcohol-free</span>
              <br />
              <em>alchemy.</em>
            </h1>
          </Framed>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease }}
          className="mt-8 flex flex-col items-center"
        >
          <p className="max-w-md text-[16px] leading-[1.7] text-cream/85">
            Gentian root at the backbone, made by hand in London. Three pipettes
            into tonic — and the evening is yours.
          </p>
          <a
            href="#shop"
            className="label mt-8 bg-cream px-9 py-4 text-cocoa transition-colors duration-500 hover:bg-white"
          >
            Shop The Elixir — {formatPrice(bottle.price!)}
          </a>
          <p className="mt-6 max-w-sm font-serif text-lg text-cream/80 italic">
            &ldquo;Honestly the best non-alc brand I&rsquo;ve ever encountered.&rdquo;
            <span className="label mt-2 block font-sans not-italic text-cream/60">Natalie C · verified customer</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
