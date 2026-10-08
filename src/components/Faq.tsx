"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal, ease } from "./Reveal";

const faqs = [
  {
    q: "Is Elixir alcohol free?",
    a: "Yes. The Elixir is 0%, and so is E&T, coming soon. Real roots, real botanicals, made the slow way in London.",
  },
  {
    q: "How do I take it?",
    a: "Our signature serve is three pipettes with a light tonic, ice and a slice of orange. Then experiment with mixers and garnishes to find your own.",
  },
  {
    q: "How long does a bottle last?",
    a: "Each bottle makes more than 30 drinks, at three pipettes a serve.",
  },
  {
    q: "What’s in it?",
    a: "Gentian root, organic flavourings, water, vegetable glycerine and malic acid. Stabilisers: sunflower lecithin, acacia gum. No sugar, no artificial additives.",
  },
  {
    q: "Is it good for me?",
    a: "Herbalists have long used bitterness to bring the body out of fight or flight and back into rest and digest. That’s traditional herbal lore: Elixir is a drink, not a treatment.",
  },
  { q: "How much is delivery?", a: "Free UK delivery on orders over £40." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <h2 className="caps text-[40px] leading-none md:text-[56px]">good questions.</h2>
        </Reveal>
        <div className="mt-14 border-t border-ink/25">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-ink/15">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-[24px] leading-tight"
              >
                {f.q}
                <span aria-hidden className="text-[26px] text-muted">
                  {open === i ? "−" : "+"}
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
                    <p className="max-w-2xl pb-7 text-[19px] leading-[1.6] text-muted">{f.a}</p>
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
