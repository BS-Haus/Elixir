"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, products, type Product } from "@/lib/products";
import { Qty } from "./CartDrawer";

export const INSTAGRAM = "https://www.instagram.com/drink__elixir/";

function ProductCard({ p, i }: { p: Product; i: number }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [showIngredients, setShowIngredients] = useState(false);
  const onSale = Boolean(p.variantId && p.price);

  return (
    <motion.article
      id={p.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
      className="flex scroll-mt-24 flex-col"
    >
      <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-parchment">
        <Image
          src={p.image}
          alt={`${p.name}, ${p.size}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
        />
        <span className="absolute top-5 left-5 rounded-full bg-ivory/90 px-3 py-1 font-type text-[11px] uppercase tracking-[0.2em] backdrop-blur">
          {p.kicker}
        </span>
        {!onSale && (
          <span className="absolute top-5 right-5 rounded-full bg-butter px-3 py-1 font-type text-[11px] font-bold uppercase tracking-[0.2em]">
            coming soon
          </span>
        )}
      </div>

      <div className="mt-7 flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-4xl leading-none tracking-tight md:text-5xl">
            {p.name}
          </h3>
          <p className="mt-2 text-espresso/60">{p.descriptor}</p>
        </div>
        {onSale && (
          <p className="shrink-0 font-display text-3xl">{formatPrice(p.price!)}</p>
        )}
      </div>

      <p className="mt-5 max-w-lg leading-relaxed text-espresso/80">{p.blurb}</p>

      {/* the recipe, written as a spell */}
      <ol className="mt-6 space-y-1 border-l-2 border-orange pl-4 font-display text-lg italic text-espresso/80">
        {p.spell.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <ul className="mt-6 flex flex-wrap gap-2">
        {p.facts.map((f) => (
          <li
            key={f}
            className="rounded-full border border-espresso/15 px-3 py-1 font-type text-xs uppercase tracking-wider"
          >
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setShowIngredients((s) => !s)}
        className="mt-5 self-start text-sm text-espresso/60 underline-offset-4 hover:underline"
        aria-expanded={showIngredients}
      >
        {showIngredients ? "hide" : "show"} ingredients
      </button>
      {showIngredients && (
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-espresso/60">
          {p.ingredients}
        </p>
      )}

      <div className="mt-auto flex items-center gap-4 pt-8">
        {onSale ? (
          <>
            <Qty value={qty} onChange={(n) => setQty(Math.max(1, n))} />
            <button
              onClick={() => add(p.id, qty)}
              className="flex-1 rounded-full bg-espresso py-4 text-ivory transition hover:bg-rust"
            >
              add to bag · {formatPrice(p.price! * qty)}
            </button>
          </>
        ) : (
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full border-2 border-espresso py-4 text-center transition hover:bg-espresso hover:text-ivory"
          >
            follow @drink__elixir for launch day
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Products() {
  return (
    <section id="shop" className="bg-ivory px-5 py-24 text-espresso md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
            two ways
            <br />
            <em>to take it</em>
          </h2>
          <p className="max-w-sm text-espresso/70">
            the bottle, for the ritual at home. the can, for when the ritual
            comes with you. same gentian heart, same intended effect: presence.
          </p>
        </div>
        <div className="grid gap-16 md:grid-cols-2 md:gap-10">
          {products.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
