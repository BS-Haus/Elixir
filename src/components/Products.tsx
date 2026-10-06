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
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="label flex w-full items-center justify-between py-5 text-left"
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
            <div className="pb-6 text-[15px] leading-[1.7] text-muted">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductRow({ p, flip }: { p: Product; flip: boolean }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const onSale = Boolean(p.variantId && p.price);

  return (
    <article
      id={p.id}
      className="grid scroll-mt-20 gap-10 md:grid-cols-12 md:items-center md:gap-10"
    >
      <Reveal className={`md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}>
        <div className={`group relative overflow-hidden bg-stone aspect-[4/5]`}>
          <Image
            src={p.image}
            alt={`${p.name}, ${p.size}`}
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
          />
        </div>
      </Reveal>

      <Reveal
        delay={0.1}
        className={`md:col-span-4 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}
      >
        <p className="label text-muted">
          {p.index} — {p.format}
        </p>
        <h3 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-6xl">
          {p.name}
        </h3>
        <p className="mt-4 text-[15px] text-muted">{p.notes.join(" · ")}</p>

        <p className="mt-8 text-[17px] leading-[1.7]">{p.blurb}</p>

        <div className="mt-8 flex items-baseline justify-between border-t border-ink/10 pt-5">
          <span className="label text-muted">{p.size}</span>
          <span className="font-serif text-3xl">
            {onSale ? formatPrice(p.price!) : "coming soon"}
          </span>
        </div>

        <div className="mt-6 flex items-stretch gap-3">
          {onSale ? (
            <>
              <Qty value={qty} onChange={(n) => setQty(Math.max(1, n))} />
              <button
                onClick={() => add(p.id, qty)}
                className="label flex-1 bg-ink py-4 text-paper transition-colors duration-500 hover:bg-rust"
              >
                add to bag
              </button>
            </>
          ) : (
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="label flex-1 border border-ink/25 py-4 text-center transition-colors duration-500 hover:border-ink"
            >
              follow for launch
            </a>
          )}
        </div>

        <div className="mt-10 border-t border-ink/10">
          <Disclosure title="details">{p.details.join(" · ")}</Disclosure>
          <Disclosure title="ingredients">{p.ingredients}</Disclosure>
          <Disclosure title="how to serve">
            {p.id === "bottle"
              ? "over ice, three pipettes of elixir, topped with a light tonic and finished with a slice of orange. also beautiful in a spritz or a zero-proof negroni."
              : "chilled, straight from the can, or poured over ice with a twist of orange peel."}
          </Disclosure>
        </div>
      </Reveal>
    </article>
  );
}

export default function Products() {
  return (
    <section id="shop" className="bg-paper px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-20 max-w-2xl md:mb-28">
          <p className="label text-muted">the collection</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-7xl">
            two ways to take it
          </h2>
        </Reveal>
        <div className="space-y-28 md:space-y-40">
          {products.map((p, i) => (
            <ProductRow key={p.id} p={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
