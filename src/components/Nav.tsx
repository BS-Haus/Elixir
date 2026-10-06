"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { scrollProgress, timeAt } from "@/lib/daylight";
import { Logo } from "./Logo";

/** The page's clock: a sun travels left → right along the day, and becomes a moon after dusk. */
function DayClock({ p }: { p: number }) {
  const night = p > 0.55;
  return (
    <span className="label flex items-center gap-3 tabular-nums" title="the page is a day">
      <span>{timeAt(p)}</span>
      <span aria-hidden className="relative hidden h-3 w-24 items-center sm:flex md:w-36">
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current opacity-30" />
        <span
          className="absolute top-1/2 left-0 h-px -translate-y-1/2 bg-current opacity-80"
          style={{ width: `${p * 100}%` }}
        />
        <span
          className="absolute top-1/2 block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${p * 100}%`,
            background: night ? "transparent" : "currentColor",
            boxShadow: night ? "inset -3px -1px 0 0 currentColor" : "none",
          }}
        />
      </span>
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
