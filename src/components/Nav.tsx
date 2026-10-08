"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { scrollProgress, timeAt } from "@/lib/daylight";
import { SHOP_DOMAIN } from "@/lib/products";
import { Logo } from "./Logo";

const NIGHT_FROM = 0.62; // where the palette turns from rose dusk to amber glass

/** The page's clock: a sun travels left → right along the day, and becomes a moon after dusk. */
function DayClock({ p }: { p: number }) {
  const night = p > NIGHT_FROM;
  return (
    <span className="note hidden items-center gap-3 tabular-nums lg:flex" title="the page is a day">
      <span>{timeAt(p)}</span>
      <span aria-hidden className="relative flex h-3 w-28 items-center">
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current opacity-25" />
        {/* the day fills with the can's liquid, gold at dawn to violet at night */}
        <span className="absolute top-1/2 left-0 h-px -translate-y-1/2 overflow-hidden" style={{ width: `${p * 100}%` }}>
          <span className="band absolute inset-y-0 left-0 w-28" />
        </span>
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

const ticker = ["30 serves in every bottle.", "all natural. no sugar.", "free uk delivery over £40."];

export default function Nav() {
  const { count, setOpen } = useCart();
  const [p, setP] = useState(0);

  useEffect(() => {
    let frame = 0;
    const on = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setP(scrollProgress());
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
    <header className="fixed inset-x-0 top-0 z-[45]">
      <div className="bg-night text-cream">
        <div className="voice mx-auto flex h-9 max-w-[1440px] items-center justify-center gap-6 overflow-hidden px-5 text-[13px] md:gap-12">
          {ticker.map((t, i) => (
            <span key={t} className={`whitespace-nowrap ${i === 2 ? "text-gold" : ""} ${i === 0 ? "hidden sm:inline" : ""} ${i === 1 ? "hidden md:inline" : ""}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="border-b border-ink/10 bg-paper/90 text-ink backdrop-blur-md">
        <nav className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:h-[72px] md:px-10">
          <div className="label hidden gap-8 md:flex">
            <a href="#shop" className="transition-opacity hover:opacity-50">
              shop
            </a>
            <a href="#why-bitters" className="transition-opacity hover:opacity-50">
              why bitters
            </a>
            <a href="#founders" className="transition-opacity hover:opacity-50">
              our story
            </a>
          </div>
          <a
            href="#top"
            aria-label="elixir, back to top"
            className="col-start-1 justify-self-start transition-colors duration-700 md:col-start-2 md:justify-self-center"
            style={{ color: p > NIGHT_FROM ? "var(--color-gold)" : "var(--color-brand)" }}
          >
            <Logo className="h-7 w-auto md:h-8" />
          </a>
          <div className="label col-start-3 flex items-center justify-self-end gap-6 md:gap-8">
            <DayClock p={p} />
            <a
              href={`https://${SHOP_DOMAIN}/account`}
              className="hidden transition-opacity hover:opacity-50 sm:inline"
            >
              account
            </a>
            <button onClick={() => setOpen(true)} className="label transition-opacity hover:opacity-50">
              bag ({count})
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
