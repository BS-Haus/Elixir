"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, products } from "@/lib/products";

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
            className="fixed inset-0 z-50 bg-espresso/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            key="drawer"
            role="dialog"
            aria-label="your bag"
            className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-md flex-col bg-ivory text-espresso"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
              <p className="font-display text-2xl italic">your bag</p>
              <button
                onClick={() => setOpen(false)}
                className="text-sm underline-offset-4 hover:underline"
              >
                close
              </button>
            </div>

            <div className="px-6 pt-4">
              <p className="font-type text-xs uppercase tracking-wider">
                {toFree > 0
                  ? `${formatPrice(toFree)} away from free shipping`
                  : "you've unlocked free shipping ✦"}
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-espresso/10">
                <div
                  className="potion-gradient h-full transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (subtotal / FREE_SHIPPING) * 100)}%`,
                  }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 && (
                <p className="text-espresso/60">
                  nothing here yet. the bottle is waiting.
                </p>
              )}
              <ul className="space-y-5">
                {items.map((p) => (
                  <li key={p.id} className="flex gap-4">
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-parchment">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <p className="font-display text-lg leading-tight">
                        {p.name}
                      </p>
                      <p className="text-xs text-espresso/60">{p.size}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <Qty
                          value={lines[p.id] ?? 0}
                          onChange={(n) => set(p.id, n)}
                        />
                        <p className="text-sm">
                          {formatPrice((lines[p.id] ?? 0) * p.price!)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-espresso/10 px-6 py-6">
              <div className="flex justify-between text-sm">
                <span>subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-espresso/50">
                shipping & taxes calculated at checkout
              </p>
              <button
                disabled={!count}
                onClick={checkout}
                className="mt-5 w-full rounded-full bg-espresso py-4 text-ivory transition hover:bg-rust disabled:opacity-30"
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
  dark = false,
}: {
  value: number;
  onChange: (n: number) => void;
  dark?: boolean;
}) {
  const b = `h-9 w-9 rounded-full border transition ${
    dark
      ? "border-ivory/30 hover:border-orange"
      : "border-espresso/20 hover:border-espresso"
  }`;
  return (
    <div className="flex items-center gap-3">
      <button aria-label="less" className={b} onClick={() => onChange(value - 1)}>
        –
      </button>
      <span className="w-4 text-center tabular-nums">{value}</span>
      <button aria-label="more" className={b} onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}
