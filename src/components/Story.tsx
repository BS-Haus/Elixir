"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";

const chapters = [
  {
    n: "01",
    k: "The taste",
    t: "Some tastes have to be earned.",
    d: "Bitter is the taste most of us refuse at first. Then one day it becomes the one we look for. Once you have it, you want more.",
  },
  {
    n: "02",
    k: "The keepers",
    t: "Kept by wise women.",
    d: "Long before the bar, bitters were kept by wise women, alchemists and apothecaries. A few drops were taken before the moments that mattered: the journey, the vow, the long night of work.",
  },
  {
    n: "03",
    k: "The root",
    t: "Gentian is the backbone.",
    d: "One of the most bitter roots there is, and the heart of everything we make. The Elixir lifts it with red mandarin, cardamom and juniper. E&T pours it with bitter orange and cardamom.",
  },
];

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" className="bg-night">
      {/* opening */}
      <div ref={ref} className="relative h-[90svh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-[-8%_0]">
          <Image
            src="/img/shop-pour.jpg"
            alt="elixir dropped from a pipette into a row of glasses"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/55 to-night" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <Reveal>
            <p className="label text-mist">our story</p>
            <p className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.05] md:text-8xl">
              The original elixirs
              <br />
              <em className="text-blush">were bitter.</em>
            </p>
          </Reveal>
        </div>
      </div>

      {/* chapters */}
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
        {chapters.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.05}>
            <div className="grid gap-6 border-t border-hair py-14 md:grid-cols-12 md:gap-10 md:py-20">
              <p className="label text-mist md:col-span-3">
                {c.n} · {c.k}
              </p>
              <p className="font-serif text-4xl leading-[1.1] md:col-span-5 md:text-5xl">
                {c.t}
              </p>
              <p className="text-[16px] leading-[1.8] text-mist md:col-span-4">{c.d}</p>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <p className="mx-auto max-w-3xl border-t border-hair pt-20 text-center font-serif text-3xl leading-[1.35] italic md:text-4xl">
            We make Elixir by hand in London, for women with a taste for more —
            from their work, their nights and their lives.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
