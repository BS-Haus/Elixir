"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { Logo } from "./Logo";

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
    <header className="fixed inset-x-0 top-0 z-[45]">
      <p
        className={`label overflow-hidden bg-umber text-center text-mist transition-all duration-700 ${
          scrolled ? "max-h-0 py-0" : "max-h-10 py-2.5"
        }`}
      >
        free uk delivery over £40<span className="hidden sm:inline"> · handmade in london</span>
      </p>
      <div
        className={`border-b transition-colors duration-700 ${
          scrolled ? "border-hair bg-night/85 backdrop-blur-md" : "border-transparent"
        }`}
      >
        <nav className="mx-auto grid h-16 max-w-[1440px] grid-cols-3 items-center px-5 md:h-20 md:px-10">
          <div className="label hidden gap-8 md:flex">
            <a href="#shop" className="transition-colors hover:text-white">
              shop
            </a>
            <a href="#ritual" className="transition-colors hover:text-white">
              rituals
            </a>
            <a href="#story" className="transition-colors hover:text-white">
              story
            </a>
          </div>
          <a
            href="#top"
            aria-label="elixir, back to top"
            className="col-start-1 justify-self-start text-cream md:col-start-2 md:justify-self-center"
          >
            <Logo className="h-6 w-auto md:h-7" />
          </a>
          <button
            onClick={() => setOpen(true)}
            className="label col-start-3 justify-self-end transition-colors hover:text-white"
          >
            basket ({count})
          </button>
        </nav>
      </div>
    </header>
  );
}
