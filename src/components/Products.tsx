"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { INSTAGRAM, formatPrice, products, type Product } from "@/lib/products";
import { Qty } from "./CartDrawer";
import { Reveal, ease } from "./Reveal";

function Disclosure({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hair">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="label flex w-full items-center justify-between py-5 text-left transition-colors hover:text-blush"
      >
        {title}
        <span
          aria-hidden
          className={`text-base transition-transform duration-500 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[15px] leading-[1.75] text-mist">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductCard({ p, i }: { p: Product; i: number }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const onSale = Boolean(p.variantId && p.price);

  return (
    <Reveal delay={i * 0.15} className="flex flex-col">
      <article id={p.id} className="flex scroll-mt-28 flex-col">
        <div className="relative">
          <div aria-hidden className="glow absolute -inset-10" />
          <div className="arch group relative aspect-[4/5] overflow-hidden border border-hair bg-ember">
            <Image
              src={p.image}
              alt={`${p.name}, ${p.format}`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <p className="label mt-10 text-center text-mist">{p.format}</p>
        <h3 className="mt-4 text-center font-serif text-4xl md:text-5xl">{p.name}</h3>
        <p className="mt-3 text-center font-serif text-xl text-blush italic">{p.tagline}</p>
        <p className="mx-auto mt-6 max-w-md text-center text-[15px] leading-[1.75] text-mist">
          {p.notes} {p.blurb}
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          {onSale ? (
            <>
              <Qty value={qty} onChange={(n) => setQty(Math.max(1, n))} />
              <button
                onClick={() => add(p.id, qty)}
                className="label h-12 bg-blush px-8 text-night transition-colors duration-500 hover:bg-cream"
              >
                add to basket — {formatPrice(p.price! * qty)}
              </button>
            </>
          ) : (
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="label flex h-12 items-center border border-cream/25 px-8 transition-colors duration-500 hover:border-blush hover:text-blush"
            >
              coming soon — follow for launch
            </a>
          )}
        </div>

        <div className="mx-auto mt-10 w-full max-w-md border-t border-hair">
          <Disclosure title="how to serve">{p.serve}</Disclosure>
          <Disclosure title="ingredients">{p.ingredients}</Disclosure>
        </div>
      </article>
    </Reveal>
  );
}

export default function Products() {
  return (
    <section id="shop" className="overflow-hidden bg-night px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center md:mb-28">
          <p className="label text-mist">one flavour. two ways.</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-7xl">
            Choose your <em className="text-blush">ritual.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.75] text-mist">
            The Elixir for the drops you measure yourself. E&T when the tonic is
            already poured.
          </p>
        </Reveal>
        <div className="grid gap-24 md:grid-cols-2 md:gap-16 lg:gap-28">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
