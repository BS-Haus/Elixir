"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, products } from "@/lib/products";
import { ease } from "./Reveal";

/** Mobile-first sticky add-to-bag that appears once the shop section has scrolled away. */
export default function StickyBuy() {
  const { add, open } = useCart();
  const [show, setShow] = useState(false);
  const p = products.find((x) => x.id === "bottle")!;

  useEffect(() => {
    const shop = document.getElementById("shop");
    const on = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const r = shop?.getBoundingClientRect();
      const inShop = r ? r.top < window.innerHeight && r.bottom > 0 : false;
      setShow(past && !inShop);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <AnimatePresence>
      {show && !open && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-4 bg-cocoa py-3 pr-3 pl-5 text-cream shadow-2xl md:hidden"
        >
          <div>
            <p className="font-serif text-xl leading-none">{p.name}</p>
            <p className="label mt-1 text-cream/60">{p.serves} serves · {formatPrice(p.price!)}</p>
          </div>
          <button
            onClick={() => add(p.id, 1)}
            className="label h-11 bg-cream px-5 text-cocoa transition-colors hover:bg-white"
          >
            Add to bag
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
