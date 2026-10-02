"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

export default function Nav() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-espresso/80 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-display text-3xl font-black tracking-tight [font-variation-settings:'SOFT'_100,'WONK'_0]"
        >
          elixir
        </a>
        <div className="flex items-center gap-6 text-sm md:gap-9">
          <a href="#shop" className="hidden hover:text-orange sm:inline">
            shop
          </a>
          <a href="#ritual" className="hidden hover:text-orange sm:inline">
            the ritual
          </a>
          <a href="#story" className="hidden hover:text-orange sm:inline">
            our story
          </a>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full border border-ivory/30 px-4 py-2 transition hover:border-orange hover:text-orange"
          >
            bag
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-orange px-1 text-[11px] font-semibold text-espresso">
              {count}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
