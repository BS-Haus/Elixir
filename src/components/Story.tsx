"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "./Reveal";

export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" className="bg-paper">
      {/* gentian */}
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-28 md:grid-cols-12 md:px-10 md:py-40">
        <Reveal className="md:col-span-5">
          <p className="label text-muted">the hero ingredient</p>
          <h2 className="mt-6 font-serif text-6xl leading-[0.95] tracking-[-0.01em] md:text-8xl">
            gentian <em className="text-rust">root</em>
          </h2>
        </Reveal>
        <Reveal
          delay={0.1}
          className="space-y-6 text-[17px] leading-[1.8] text-muted md:col-span-5 md:col-start-8 md:pt-4"
        >
          <p>
            a european alpine botanical, prized since the ancient greeks for its
            complex bitterness and subtle, earthy notes.
          </p>
          <p>
            bitterness has always opened a good meal — the old aperitif
            instinct, the pause that tells the body to slow down. elixir keeps
            that instinct and leaves out the alcohol.
          </p>
          <p>
            a considered blend of botanicals: something you take that gives you
            more.
          </p>
        </Reveal>
      </div>

      {/* full-bleed moment */}
      <div ref={ref} className="relative h-[85svh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-[-8%_0]">
          <Image
            src="/img/dusk.jpg"
            alt="dusk over a quiet harbour"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-espresso/35" />
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <Reveal>
            <p className="max-w-4xl text-center font-serif text-4xl leading-[1.15] text-cream md:text-6xl">
              made for presence <em>and play.</em>
            </p>
          </Reveal>
        </div>
      </div>

      {/* founder line */}
      <div className="mx-auto max-w-[1440px] px-5 py-28 text-center md:px-10 md:py-36">
        <Reveal>
          <p className="label text-muted">independent · women-founded · london</p>
          <p className="mx-auto mt-8 max-w-3xl font-serif text-3xl leading-[1.3] md:text-5xl">
            for the good evenings — and the clear mornings that follow them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
