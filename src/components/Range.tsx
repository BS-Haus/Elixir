"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { Signup } from "./Signup";

const BOTTLE = { id: "bottle" as const, price: 24.99 };

/** "Meet the Elixirs" — a ruled product grid with names and prices beneath, then a quick-add bar. */
export default function Range() {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <section id="range" className="scroll-mt-24 border-b border-line">
      <h2 className="caps border-b border-line py-6 text-center text-xl md:text-2xl">Meet the Elixirs.</h2>

      <div className="grid md:grid-cols-2">
        {/* concentrate */}
        <article id="bottle" className="flex flex-col border-b border-line md:border-r md:border-b-0">
          <div className="relative aspect-[4/3] bg-shell md:aspect-[5/4]">
            <Image src="/img/shop-product.jpg" alt="The Elixir dropper bottle" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <span className="label absolute top-4 left-4 rounded-full bg-white px-3 py-1">Bestseller</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-4 border-t border-line px-4 py-4 md:px-6">
            <div>
              <h3 className="caps text-[15px]">The Elixir — botanical bitters concentrate</h3>
              <p className="mt-1 text-[13px] text-muted">30ml · 30 serves · gentian, red mandarin, cardamom, juniper</p>
            </div>
            <p className="text-[15px]">{formatPrice(BOTTLE.price)}</p>
          </div>
          <div className="mt-auto flex items-center gap-3 border-t border-line px-4 py-4 md:px-6">
            <div className="flex h-10 items-center rounded-full border border-line">
              <button aria-label="decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9">
                −
              </button>
              <span className="w-5 text-center text-[14px] tabular-nums">{qty}</span>
              <button aria-label="increase quantity" onClick={() => setQty((q) => q + 1)} className="w-9">
                +
              </button>
            </div>
            <button onClick={() => add(BOTTLE.id, qty)} className="pill h-10 flex-1 justify-center bg-ink text-white hover:bg-rust">
              Add to cart — {formatPrice(BOTTLE.price * qty)}
            </button>
          </div>
        </article>

        {/* can */}
        <article id="can" className="flex flex-col">
          <div className="relative aspect-[4/3] bg-shell md:aspect-[5/4]">
            <Image src="/img/can.jpg" alt="E&T Elixir & Tonic can" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            <span className="label absolute top-4 left-4 rounded-full bg-rust px-3 py-1 text-white">Coming soon</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-4 border-t border-line px-4 py-4 md:px-6">
            <div>
              <h3 className="caps text-[15px]">E&T — Elixir & Tonic, ready-poured</h3>
              <p className="mt-1 text-[13px] text-muted">200ml can · gentian, bitter orange, cardamom</p>
            </div>
            <p className="text-[15px] text-muted">Soon</p>
          </div>
          <div className="mt-auto border-t border-line px-4 py-3 md:px-6">
            <Signup tag="et-waitlist" cta="Notify me →" />
          </div>
        </article>
      </div>
    </section>
  );
}
