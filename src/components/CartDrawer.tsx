"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, products } from "@/lib/products";
import { ease } from "./Reveal";

const FREE_SHIPPING = 40;

export default function CartDrawer() {
  const { open, setOpen, lines, set, subtotal, count, checkout } = useCart();
  const items = products.filter((p) => lines[p.id] && p.price);
  const toFree = Math.max(0, FREE_SHIPPING - subtotal);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="scrim"
            className="fixed inset-0 z-50 bg-cocoa/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            key="drawer"
            role="dialog"
            aria-label="your bag"
            className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-md flex-col bg-paper text-cocoa"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex h-16 items-center justify-between border-b border-line px-6 md:h-20">
              <p className="label">your bag ({count})</p>
              <button
                onClick={() => setOpen(false)}
                className="label transition-opacity hover:opacity-50"
              >
                close
              </button>
            </div>

            <div className="border-b border-line px-6 py-5">
              <p className="label text-muted">
                {toFree > 0
                  ? `${formatPrice(toFree)} away from complimentary shipping`
                  : "complimentary shipping unlocked"}
              </p>
              <div className="mt-3 h-px bg-line">
                <div
                  className="h-px bg-sage transition-all duration-700"
                  style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING) * 100)}%` }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              {items.length === 0 && (
                <p className="font-serif text-2xl text-muted">your bag is empty.</p>
              )}
              <ul className="space-y-8">
                {items.map((p) => (
                  <li key={p.id} className="flex gap-5">
                    <div className="relative h-28 w-22 shrink-0 overflow-hidden bg-mint">
                      <Image src={p.images[0].src} alt="" fill sizes="88px" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <p className="font-serif text-2xl leading-tight">{p.name}</p>
                      <p className="label mt-1 text-muted">{p.format}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <Qty value={lines[p.id] ?? 0} onChange={(n) => set(p.id, n)} />
                        <p className="text-[15px]">
                          {formatPrice((lines[p.id] ?? 0) * p.price!)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line px-6 py-6">
              <div className="flex justify-between text-[15px]">
                <span>subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="label mt-2 text-muted">shipping & taxes at checkout</p>
              <button
                disabled={!count}
                onClick={checkout}
                className="label mt-6 w-full bg-cocoa py-4 text-cream transition-colors duration-500 hover:bg-chocolate disabled:opacity-30"
              >
                checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export function Qty({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  const b = "flex w-9 items-center justify-center transition-opacity hover:opacity-50";
  return (
    <div className="flex h-12 items-stretch border border-cocoa/20">
      <button aria-label="decrease quantity" className={b} onClick={() => onChange(value - 1)}>
        −
      </button>
      <span className="flex w-6 items-center justify-center text-[15px] tabular-nums">
        {value}
      </span>
      <button aria-label="increase quantity" className={b} onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}
