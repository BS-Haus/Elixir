"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { formatPrice, products } from "@/lib/products";
import { ease } from "./Reveal";

/** Split-screen hero: product still beside the ritual, one line of type across both. */
export default function Hero() {
  const bottle = products.find((p) => p.id === "bottle")!;

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-night">
      <div className="absolute inset-0 grid grid-cols-2">
        {[
          { src: "/img/can-ember.jpg", alt: "E&T Elixir & Tonic can", pos: "object-[50%_40%]" },
          { src: "/img/shop-product.jpg", alt: "the elixir dropper bottle held in afternoon light", pos: "object-center" },
        ].map((im, i) => (
          <motion.div
            key={im.src}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 2.2, ease }}
            className="relative overflow-hidden"
          >
            <Image src={im.src} alt={im.alt} fill priority sizes="50vw" className={`object-cover ${im.pos}`} />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night from-15% via-night/55 via-45% to-night/10" />

      <div className="absolute inset-x-0 bottom-0 px-5 pb-12 text-center md:pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.4, ease }}
          className="label text-cream/80"
        >
          handmade 0% bitters · london
        </motion.p>
        <h1 className="display mt-5 text-[clamp(3.6rem,9vw,9rem)]">
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 1.6, ease }}
              className="inline-block"
            >
              a taste&nbsp;
            </motion.span>
          </span>
          <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.65, duration: 1.6, ease }}
              className="text-potion inline-block italic"
            >
              for more.
            </motion.span>
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.4, ease }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href="#bottle"
            className="label bg-cream px-8 py-4 text-night transition-colors duration-500 hover:bg-white"
          >
            shop the elixir — {formatPrice(bottle.price!)}
          </a>
          <a
            href="#ritual"
            className="label border border-cream/40 px-8 py-4 transition-colors duration-500 hover:border-cream"
          >
            the ritual
          </a>
        </motion.div>
      </div>
    </section>
  );
}
