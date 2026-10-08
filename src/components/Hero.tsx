"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type TargetAndTransition } from "motion/react";
import { formatPrice, products } from "@/lib/products";
import { Words } from "./Motion";
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
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const drift = useTransform(scrollY, [0, 900], ["0%", "8%"]);
  const lift = useTransform(scrollY, [0, 900], [0, -60]);
  const from = (o: TargetAndTransition) => (reduce ? false : o);

  return (
    <section id="top" className="grid pt-[100px] md:min-h-[100svh] md:grid-cols-2 md:pt-[108px]">
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto">
        {/* the table settles in from a slow zoom, then drifts as you scroll */}
        <motion.div
          initial={from({ scale: 1.14, opacity: 0 })}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease }}
          style={reduce ? undefined : { y: drift }}
          className="absolute -inset-y-[6%] inset-x-0"
        >
          <Image
            src="/img/v9/hero-table.jpg"
            alt="the elixir bottle on a long lunch table with friends, plates and glasses of elixir and tonic"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <motion.span
          initial={from({ opacity: 0, scale: 0.6, rotate: -18 })}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 14 }}
          className="sticker absolute bottom-6 left-6"
        >
          drop in.
        </motion.span>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden px-6 py-20 md:px-12">
        {/* the can's liquid, glowing softly behind the lockup */}
        <motion.div
          aria-hidden
          initial={from({ opacity: 0, scale: 0.7 })}
          animate={{ opacity: 0.22, scale: 1 }}
          transition={{ duration: 3, ease }}
          className="pointer-events-none absolute top-[6%] left-[15%] aspect-square w-[70%]"
        >
          <div className="aura-liquid drift h-full w-full rounded-full blur-3xl" />
        </motion.div>

        <motion.div style={reduce ? undefined : { y: lift }} className="relative flex max-w-xl flex-col items-center text-center">
          <motion.span
            initial={from({ opacity: 0, scale: 0, rotate: -120 })}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 1.4, ease }}
          >
            <Star className="twinkle h-6 w-6 text-ink" />
          </motion.span>
          <h1 className="caps mt-6 flex flex-col items-center leading-none">
            <Words immediate delay={0.4} text="made for" className="text-[18px] tracking-[0.04em] md:text-[22px]" />
            <motion.span
              initial={from({ opacity: 0, letterSpacing: "0.32em", filter: "blur(10px)" })}
              animate={{ opacity: 1, letterSpacing: "0.01em", filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 2, ease }}
              className="mt-2 text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.95]"
            >
              presence
            </motion.span>
            <Words immediate delay={1.1} text="and play." className="mt-3 text-[18px] tracking-[0.04em] md:text-[22px]" />
          </h1>
          <p className="mt-8 text-[26px] leading-[1.25] md:text-[30px]">
            <Words immediate delay={1.3} stagger={0.035} text="Gentian root, with hints of red mandarin, cardamom and juniper." />
          </p>

          <dl className="mt-10 grid w-full grid-cols-3 border-y border-ink/15">
            {facts.map(([k, v], i) => (
              <motion.div
                key={k}
                initial={from({ opacity: 0, y: 12 })}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + i * 0.12, duration: 0.9, ease }}
                className={`py-4 ${i ? "border-l border-ink/15" : ""}`}
              >
                <dt className="label text-[11px] text-muted">{k}</dt>
                <dd className="mt-1 text-[18px] leading-tight first-letter:uppercase">{v}</dd>
              </motion.div>
            ))}
          </dl>

          <motion.div
            initial={from({ opacity: 0, y: 12 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 1, ease }}
            className="flex flex-col items-center"
          >
            <a href="#shop" className="btn group mt-10">
              shop the elixir · {formatPrice(bottle.price!)}
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <p className="voice mt-5 text-muted">three pipettes, a light tonic. £0.83 a serve.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
