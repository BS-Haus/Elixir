"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { checkoutUrl, products, type Product } from "./products";

type Lines = Partial<Record<Product["id"], number>>;

type Cart = {
  lines: Lines;
  open: boolean;
  setOpen: (o: boolean) => void;
  add: (id: Product["id"], qty?: number) => void;
  set: (id: Product["id"], qty: number) => void;
  count: number;
  subtotal: number;
  checkout: () => void;
};

const CartContext = createContext<Cart | null>(null);
const KEY = "elixir-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<Lines>({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      // hydrate from storage after mount so server and client markup match
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved) setLines(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {}
  }, [lines]);

  const set = (id: Product["id"], qty: number) =>
    setLines((l) => {
      const next = { ...l };
      if (qty <= 0) delete next[id];
      else next[id] = Math.min(qty, 24);
      return next;
    });

  const add = (id: Product["id"], qty = 1) => {
    set(id, (lines[id] ?? 0) + qty);
    setOpen(true);
  };

  const sellable = products.filter((p) => p.variantId && p.price);
  const count = sellable.reduce((n, p) => n + (lines[p.id] ?? 0), 0);
  const subtotal = sellable.reduce(
    (n, p) => n + (lines[p.id] ?? 0) * (p.price ?? 0),
    0,
  );

  const checkout = () => {
    const items = sellable
      .filter((p) => lines[p.id])
      .map((p) => ({ variantId: p.variantId!, qty: lines[p.id]! }));
    if (items.length) window.location.href = checkoutUrl(items);
  };

  return (
    <CartContext.Provider
      value={{ lines, open, setOpen, add, set, count, subtotal, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}
