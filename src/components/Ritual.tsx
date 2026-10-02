"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Drops } from "./Drop";
import { Reveal, ease } from "./Reveal";

const drops = [
  { n: "01", t: "Gratitude.", d: "One drop for what you're grateful for.", img: "/img/shop-dropper.jpg" },
  { n: "02", t: "Intention.", d: "One for what you're calling in.", img: "/img/shop-product.jpg" },
  { n: "03", t: "The work.", d: "One for the work it will take.", img: "/img/shop-pour.jpg" },
];

/** The heart of the brand: three drops as steps beside one large image (39BC ritual layout). */
export default function Ritual() {
  const [active, setActive] = useState(0);

  return (
    <section id="ritual" className="bg-umber">
      <div className="mx-auto grid max-w-[1440px] md:min-h-[100svh] md:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-24 md:col-span-5 md:px-10 md:py-32">
          <Reveal>
            <p className="label text-mist">the elixir ritual</p>
            <h2 className="display mt-6 text-6xl md:text-[5.25rem] lg:text-[6rem]">
              Three drops.
              <br />
              <em className="whitespace-nowrap">Then everything.</em>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.8] text-mist">
              Long before the bar, a few drops were taken before the moments
              that mattered. Ours come with a meaning each.
            </p>
          </Reveal>

          <ol className="mt-14 border-t border-hair">
            {drops.map((d, i) => (
              <li key={d.n}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`grid w-full grid-cols-[3.5rem_1fr_auto] items-baseline border-b border-hair py-6 text-left transition-opacity duration-500 ${
                    active === i ? "opacity-100" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <span className="label text-mist">{d.n}</span>
                  <span>
                    <span className="display block text-4xl md:text-5xl">{d.t}</span>
                    <span className="mt-2 block text-[15px] text-mist">{d.d}</span>
                  </span>
                  <Drops count={i + 1} className="h-2 w-2" />
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative min-h-[70svh] overflow-hidden md:col-span-7">
          <AnimatePresence mode="sync">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease }}
              className="absolute inset-0"
            >
              <Image
                src={drops[active].img}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <p className="label absolute right-6 bottom-6 text-cream">step {drops[active].n}</p>
        </div>
      </div>
    </section>
  );
}
