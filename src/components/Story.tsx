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
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-28 md:grid-cols-12 md:gap-10 md:px-10 md:py-40">
        <Reveal className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone">
            <Image
              src="/img/apothecary.jpg"
              alt="the elixir bottle among dried gentian root, cardamom pods and dried orange on an apothecary table"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal
          delay={0.1}
          className="space-y-6 text-[17px] leading-[1.8] text-muted md:col-span-5 md:col-start-8"
        >
          <p className="label">the hero ingredient</p>
          <h2 className="!mt-6 font-serif text-6xl leading-[0.95] tracking-[-0.01em] text-ink md:text-8xl">
            gentian <em className="text-rust">root</em>
          </h2>
          <p className="!mt-4 !mb-10 font-serif text-xl italic">gentiana lutea</p>
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
