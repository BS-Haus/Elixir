"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sticker } from "./Sticker";

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="story" ref={ref} className="bg-parchment text-espresso">
      {/* gentian */}
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-12 md:px-8 md:py-32">
        <div className="md:col-span-5">
          <p className="font-type text-xs uppercase tracking-[0.3em] text-rust">
            the hero ingredient
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.9] tracking-tight md:text-8xl">
            <em>gentian</em>
            <br />
            root
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-espresso/80 md:col-span-6 md:col-start-7">
          <p>
            a european alpine botanical, prized since the ancient greeks for its
            complex bitterness and subtle, earthy notes.
          </p>
          <p>
            bitterness has always been the start of a good meal — the old
            aperitif instinct, the ritual that tells the body to slow down,
            rest and digest. elixir is that instinct, made for now.
          </p>
          <p>
            a symphony of carefully selected botanicals, without the alcohol.
            something you take that gives you more.
          </p>
        </div>
      </div>

      {/* full-bleed moment */}
      <div className="relative h-[80svh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-[-12%_0]">
          <Image
            src="/img/dusk.jpg"
            alt="sunset over a quiet harbour"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-14 md:px-8">
          <p className="max-w-3xl font-display text-4xl leading-tight text-ivory md:text-6xl">
            no hangover. no fog. just <em className="text-butter">you,</em>{" "}
            fully here for it.
          </p>
        </div>
        <Sticker shape="cloud" className="absolute top-10 right-8 flex md:right-16">
          vegan
          <br />& gluten
          <br />
          free
        </Sticker>
      </div>

      {/* buy women built */}
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="max-w-xl font-display text-3xl leading-snug md:text-4xl">
          independent, women-founded, and made for the good parties —{" "}
          <em>without</em> the morning after.
        </p>
        <div className="flex -rotate-3 flex-col font-type text-2xl font-bold uppercase leading-none">
          <span className="bg-ember px-3 py-1 text-butter">buy</span>
          <span className="ml-4 bg-sky px-3 py-1 text-ember">women</span>
          <span className="ml-8 bg-[#7c9a54] px-3 py-1 text-[#f2c9e0]">built</span>
        </div>
      </div>
    </section>
  );
}
