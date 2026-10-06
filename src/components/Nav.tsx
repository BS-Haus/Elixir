"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { scrollProgress, timeAt } from "@/lib/daylight";
import { Logo } from "./Logo";

/** The page's clock, in the nav: a sun that climbs and sets, then a moon. */
function DayClock({ p }: { p: number }) {
  const night = p > 0.55;
  const arc = Math.sin(Math.min(1, p / 0.55) * Math.PI);
  return (
    <span className="label flex items-center gap-2.5 tabular-nums" title="the page is a day">
      <span aria-hidden className="relative block h-4 w-4">
        <span
          className="absolute left-1/2 block h-2 w-2 -translate-x-1/2 rounded-full"
          style={{
            bottom: `${night ? 55 : 5 + arc * 55}%`,
            background: night ? "transparent" : "currentColor",
            boxShadow: night ? "inset -2.5px -1px 0 0 currentColor" : "none",
          }}
        />
      </span>
      <span>{timeAt(p)}</span>
    </span>
  );
}

export default function Nav() {
  const { count, setOpen } = useCart();
  const [p, setP] = useState(0);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    let frame = 0;
    const on = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setP(scrollProgress());
        setOverHero(window.scrollY < window.innerHeight - 90);
      });
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[45] border-b transition-colors duration-500 ${
        overHero ? "border-cream/20 bg-transparent text-cream" : "border-ink/10 bg-paper/90 text-ink backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-20 md:px-10">
        <div className="label hidden gap-8 md:flex">
          <a href="#shop" className="transition-opacity hover:opacity-50">
            shop
          </a>
          <a href="#explained" className="transition-opacity hover:opacity-50">
            what is elixir?
          </a>
          <a href="#ritual" className="transition-opacity hover:opacity-50">
            the ritual
          </a>
        </div>
        <a
          href="#top"
          aria-label="elixir, back to top"
          className={`col-start-1 justify-self-start md:col-start-2 md:justify-self-center ${overHero ? "text-cream" : "text-rust"}`}
        >
          <Logo className="h-6 w-auto md:h-7" />
        </a>
        <div className="col-start-3 flex items-center justify-self-end gap-6 md:gap-8">
          <DayClock p={p} />
          <button onClick={() => setOpen(true)} className="label transition-opacity hover:opacity-50">
            bag ({count})
          </button>
        </div>
      </nav>
    </header>
  );
}
