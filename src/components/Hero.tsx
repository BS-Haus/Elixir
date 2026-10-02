"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { formatPrice, products } from "@/lib/products";
import { Moon } from "./Moon";
import { ease } from "./Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const bottle = products.find((p) => p.id === "bottle")!;

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-night">
      <div className="mx-auto grid min-h-[100svh] max-w-[1440px] gap-14 px-5 pt-36 pb-16 md:grid-cols-12 md:items-center md:gap-10 md:px-10 md:pt-32">
        <div className="md:col-span-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease }}
            className="label flex items-center gap-3 text-mist"
          >
            <Moon phase={0.3} className="h-4 w-4 text-blush" />
            handmade 0% bitters · london
          </motion.p>

          <h1 className="mt-8 font-serif text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.92] font-normal tracking-[-0.02em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, duration: 1.6, ease }}
                className="block"
              >
                a taste
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.38, duration: 1.6, ease }}
                className="block text-blush italic"
              >
                for more.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.4, ease }}
          >
            <p className="mt-10 max-w-md font-serif text-2xl leading-snug text-cream/90 italic">
              An acquired taste. Like everything worth having.
            </p>
            <p className="mt-5 max-w-md text-[16px] leading-[1.75] text-mist">
              Gentian root at the backbone, made by hand in London. Three drops
              into tonic, a cocktail, or whatever the night asks for.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="#bottle"
                className="label bg-blush px-8 py-4 text-night transition-colors duration-500 hover:bg-cream"
              >
                shop the elixir — {formatPrice(bottle.price!)}
              </a>
              <a
                href="#ritual"
                className="label border border-cream/25 px-8 py-4 transition-colors duration-500 hover:border-blush hover:text-blush"
              >
                the ritual
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 2, ease }}
          className="relative md:col-span-5 md:col-start-8"
        >
          <div aria-hidden className="glow absolute -inset-16" />
          <div className="arch relative mx-auto aspect-[3/4] max-w-[520px] overflow-hidden border border-hair">
            <motion.div style={{ y: photoY }} className="absolute inset-[-5%_0]">
              <Image
                src="/img/shop-product.jpg"
                alt="the elixir amber dropper bottle held up in a shaft of afternoon light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <p className="label mx-auto mt-5 flex max-w-[520px] justify-between text-mist">
            <span>three drops.</span>
            <span className="text-blush">then everything.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
