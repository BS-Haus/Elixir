"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { faqs } from "@/lib/content";
import { Reveal, ease } from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-line bg-paper px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="label text-muted">Before you pour</p>
          <h2 className="display mt-5 text-5xl md:text-6xl">Questions.</h2>
        </Reveal>
        <div className="border-t border-line md:col-span-7 md:col-start-6">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-line">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between py-6 text-left font-serif text-2xl"
              >
                {f.q}
                <span aria-hidden className={`ml-6 font-sans text-base transition-transform duration-500 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-xl pb-6 text-[15px] leading-[1.8] text-muted">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
