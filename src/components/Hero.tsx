"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { products } from "@/lib/products";
import ProductStage from "./ProductStage";
import { Sticker } from "./Sticker";

export default function Hero() {
  const [hover, setHover] = useState<"can" | "bottle" | null>(null);

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-espresso pt-20"
    >
      {/* headline */}
      <div className="pointer-events-none relative z-10 px-5 pt-6 text-center md:pt-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-type text-xs uppercase tracking-[0.3em] text-orange"
        >
          non-alcoholic · botanical bitters
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto mt-4 max-w-4xl font-display text-[clamp(2.6rem,7.5vw,6.5rem)] leading-[0.92] font-light tracking-tight [font-variation-settings:'SOFT'_100,'WONK'_1]"
        >
          made for presence <em className="font-normal text-orange">&amp;</em>{" "}
          <em className="font-normal">play</em>
        </motion.h1>
      </div>

      {/* split stage */}
      <div className="relative flex flex-1 flex-row">
        {products.map((p, i) => {
          const active = hover === p.id;
          const dimmed = hover && !active;
          return (
            <motion.a
              key={p.id}
              href={`#${p.id}`}
              onPointerEnter={() => setHover(p.id)}
              onPointerLeave={() => setHover(null)}
              animate={{ flexGrow: active ? 1.35 : 1, opacity: dimmed ? 0.55 : 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="group relative flex min-w-0 basis-0 flex-col items-center"
            >
              {/* potion glow */}
              <div
                aria-hidden
                className={`absolute top-1/2 left-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] transition-opacity duration-700 ${
                  i === 0 ? "bg-orange/35" : "bg-cobalt/40"
                } ${active ? "opacity-100" : "opacity-60"}`}
              />
              <div className="relative h-full min-h-[46svh] w-full flex-1">
                <ProductStage product={p} hovered={active} />
              </div>

              <div className="relative z-10 px-2 pb-8 text-center">
                <p className="font-type text-[11px] uppercase tracking-[0.3em] text-ivory/60">
                  {p.kicker}
                </p>
                <p className="mt-1 font-display text-lg leading-tight italic sm:text-2xl md:text-3xl">
                  {p.name}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-ivory/70 transition group-hover:text-orange">
                  {p.price ? "shop now" : "discover"}
                  <span className="transition group-hover:translate-x-1">→</span>
                </p>
              </div>

              {i === 0 && (
                <Sticker
                  shape="star"
                  className="absolute top-[6%] right-[10%] hidden md:flex"
                >
                  low
                  <br />
                  sugar
                </Sticker>
              )}
              {i === 1 && (
                <Sticker
                  shape="circle"
                  className="absolute top-[8%] left-[10%] hidden md:flex"
                >
                  30
                  <br />
                  serves
                </Sticker>
              )}
            </motion.a>
          );
        })}

        {/* centre seam */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[8%] bottom-[18%] left-1/2 w-px bg-gradient-to-b from-transparent via-ivory/20 to-transparent md:block"
        />
      </div>

      <p className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 font-type text-[10px] uppercase tracking-[0.3em] text-ivory/40 md:block">
        drag the can · tilt the bottle
      </p>
    </section>
  );
}
