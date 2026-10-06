"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { formatPrice, products } from "@/lib/products";
import { ease } from "./Reveal";

/** Headline left, the serve in a portrait frame on the right. */
export default function Hero() {
  const bottle = products.find((p) => p.id === "bottle")!;

  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto grid min-h-[100svh] max-w-[1440px] items-center gap-12 px-5 pt-28 pb-16 md:grid-cols-12 md:gap-10 md:px-10 md:pt-28 md:pb-20">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease }}
            className="label text-muted"
          >
            non-alcoholic botanical bitters · made in london
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1.4, ease }}
            className="mt-6 font-serif text-[clamp(3.6rem,8.4vw,9rem)] leading-[0.92]"
          >
            all the ritual.
            <br />
            <em className="text-rust">none of the alcohol.</em>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease }}
          >
            <p className="mt-8 max-w-md text-[16px] leading-[1.55] text-muted">
              an ancient ritual for modern good times. a 0% bitters of gentian root, red mandarin and
              cardamom — three pipettes into tonic for the dinner, the gig, or a moment to yourself.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#bottle" className="label bg-ink px-8 py-4 text-paper transition-colors duration-500 hover:bg-rust">
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1.6, ease }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[540px] overflow-hidden bg-stone">
            <Image
              src="/img/shop-dropper.jpg"
              alt="a pipette of elixir over a glass of tonic with ice and a slice of orange"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="label mx-auto mt-4 flex max-w-[540px] justify-between text-muted">
            <span>0.0% abv</span>
            <span>30 serves per bottle</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
