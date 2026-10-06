"use client";

import { useEffect, useState } from "react";
import { scrollProgress, timeAt } from "@/lib/daylight";

/** A quiet scroll clock: the page is a day, and this tells you what time it is. */
export default function Clock() {
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
    return () => {
      window.removeEventListener("scroll", on);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // sun climbs then sets; it becomes a moon after dusk
  const night = p > 0.55;
  const arc = Math.sin(Math.min(1, p / 0.55) * Math.PI);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-5 left-5 z-40 hidden items-center gap-3 md:flex"
    >
      <span className="relative block h-6 w-6">
        <span
          className="absolute left-1/2 block h-2.5 w-2.5 -translate-x-1/2 rounded-full transition-colors duration-700"
          style={{
            bottom: `${night ? 70 : 10 + arc * 60}%`,
            background: night ? "transparent" : "var(--accent)",
            boxShadow: night ? "inset -3px -1px 0 0 var(--fg)" : "none",
          }}
        />
      </span>
      <span className="label tabular-nums text-ink">{timeAt(p)}</span>
    </div>
  );
}
