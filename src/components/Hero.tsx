"use client";

import { motion } from "motion/react";
import { formatPrice, products } from "@/lib/products";
import { ease } from "./Reveal";

/** Full-screen brand film. Landscape 1080p on larger screens, a shot-by-shot portrait cut on phones. */
export default function Hero() {
  const bottle = products.find((p) => p.id === "bottle")!;

  return (
    <section id="top" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-espresso text-cream">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="/img/film-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Elixir brand film: the bottle, golden-hour coastlines, palms and surf"
      >
        <source src="/video/film-portrait.mp4" type="video/mp4" media="(max-aspect-ratio: 4/5)" />
        <source src="/video/film-1080-hevc.mp4" type='video/mp4; codecs="hvc1"' />
        <source src="/video/film-1080-h264.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-espresso/35" />

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-12 md:px-10 md:pb-16">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2, ease }}
              className="label text-cream/80"
            >
              non-alcoholic botanical bitters · made in london
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 1.4, ease }}
              className="mt-6 font-serif text-[clamp(3.4rem,8.6vw,9.5rem)] leading-[0.98]"
            >
              all the ritual.
              <br />
              <em className="text-amber">none of the alcohol.</em>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease }}
            className="md:col-span-4"
          >
            <p className="max-w-sm text-[16px] leading-[1.7] text-cream/85">
              an ancient ritual for modern good times. a 0% bitters of gentian root, red mandarin and
              cardamom — three pipettes into tonic for the dinner, the gig, or a moment to yourself.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#bottle" className="label bg-cream px-7 py-4 text-espresso transition-colors duration-500 hover:bg-white">
                shop elixir — {formatPrice(bottle.price!)}
              </a>
              <a
                href="#explained"
                className="label border border-cream/50 px-7 py-4 transition-colors duration-500 hover:border-cream"
              >
                what is elixir?
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
