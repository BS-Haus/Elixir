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
      {/* gentian, as a specimen plate */}
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 overflow-hidden px-5 py-28 md:grid-cols-12 md:gap-10 md:overflow-visible md:px-10 md:py-40">
        <div className="md:col-span-5">
          <Reveal>
            <p className="label text-muted">the hero ingredient</p>
            <h2 className="mt-6 font-serif text-6xl leading-[0.95] tracking-[-0.01em] md:text-8xl">
              gentian <em className="text-rust">root</em>
            </h2>
            <p className="mt-4 font-serif text-xl text-muted italic">gentiana lutea</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 space-y-6 text-[17px] leading-[1.8] text-muted">
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

        <Reveal delay={0.15} className="md:col-span-6 md:col-start-7">
          <figure className="relative mx-auto aspect-[4/5] w-full max-w-[560px]">
            <div
              aria-hidden
              className="aura-liquid absolute top-1/2 left-1/2 aspect-square w-[105%] -translate-x-1/2 -translate-y-[46%] opacity-45 blur-xl"
            />
            <Image
              src="/img/botanical/gentian-specimen.png"
              alt="botanical illustration of gentian: the root, rhizome, flowers and buds"
              fill
              sizes="(max-width: 768px) 90vw, 560px"
              className="object-contain p-[6%]"
            />
            {/* specimen callouts */}
            <span aria-hidden className="label absolute top-[9%] right-0 hidden items-center gap-2 text-muted md:flex">
              <span className="h-px w-10 bg-current opacity-50" />
              buds
            </span>
            <span aria-hidden className="label absolute top-[34%] right-0 hidden items-center gap-2 text-muted md:flex">
              <span className="h-px w-10 bg-current opacity-50" />
              flower
            </span>
            <span aria-hidden className="label absolute bottom-[22%] left-0 hidden items-center gap-2 text-muted md:flex">
              root
              <span className="h-px w-10 bg-current opacity-50" />
            </span>
            <figcaption className="label absolute -bottom-8 left-0 w-full text-center text-muted">
              plate i · gentian, the original bitter
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* full-bleed moment */}
      <div ref={ref} className="relative h-[85svh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-[-8%_0]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            poster="/img/film-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Elixir brand film: the bottle, golden-hour coastlines, palms and surf"
          >
            <source src="/video/film-portrait.mp4" type="video/mp4" media="(max-aspect-ratio: 4/5)" />
            <source src="/video/film-hevc.mp4" type='video/mp4; codecs="hvc1"' />
            <source src="/video/film.mp4" type="video/mp4" />
          </video>
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

    </section>
  );
}
