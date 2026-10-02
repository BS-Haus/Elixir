"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const steps = [
  { n: "i", t: "ice", d: "a heavy glass, filled generously." },
  { n: "ii", t: "three pipettes of elixir", d: "watch it bloom, amber into clear." },
  { n: "iii", t: "a light tonic", d: "poured slowly, to keep the bubbles fine." },
  { n: "iv", t: "a slice of orange", d: "and a moment that is entirely yours." },
];

export default function Ritual() {
  return (
    <section id="ritual" className="bg-espresso px-5 py-28 text-cream md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12 md:items-center md:gap-10">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/img/shop-pour.jpg"
              alt="elixir dropped from a pipette into glasses of tonic with grapefruit"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="label text-cream/50">the ritual</p>
            <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-7xl">
              the drink that savours <em>the moment</em>
            </h2>
          </Reveal>
          <ol className="mt-16 border-t border-cream/15">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="grid grid-cols-[3rem_1fr] items-baseline border-b border-cream/15 py-6 md:grid-cols-[4rem_1fr_1fr]">
                  <span className="font-serif text-lg text-cream/40 italic">{s.n}</span>
                  <span className="font-serif text-2xl md:text-3xl">{s.t}</span>
                  <span className="col-start-2 mt-2 text-[15px] text-cream/60 md:col-start-3 md:mt-0">
                    {s.d}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
