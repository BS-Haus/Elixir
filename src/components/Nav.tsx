"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { Ornament } from "./Ornament";

const links = [
  ["Shop", "#shop"],
  ["Reviews", "#reviews"],
  ["The ritual", "#ritual"],
  ["Our story", "#story"],
];

export default function Nav() {
  const { count, setOpen } = useCart();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[45]">
      <p className="label bg-cocoa py-2.5 text-center text-cream/85">
        Free UK delivery over £40 <span className="hidden sm:inline">· 30 serves in every bottle</span>
      </p>
      <div
        className={`border-b transition-colors duration-700 ${
          solid
            ? "border-line bg-paper/92 text-cocoa backdrop-blur-md"
            : "border-transparent text-cream"
        }`}
      >
        <nav className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-20 md:px-10">
          <div className="label hidden gap-7 md:flex">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="transition-opacity hover:opacity-60">
                {l}
              </a>
            ))}
          </div>
          <a href="#top" className="col-start-1 justify-self-start md:col-start-2 md:justify-self-center">
            <Ornament name="wordmark" label="Elixir" className="h-5 md:h-6" />
          </a>
          <div className="col-start-3 flex items-center justify-self-end gap-6">
            <a
              href="#shop"
              className="label hidden border border-current px-4 py-2 transition-opacity hover:opacity-60 sm:inline-block"
            >
              Shop The Elixir
            </a>
            <button onClick={() => setOpen(true)} className="label transition-opacity hover:opacity-60">
              Bag ({count})
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
