"use client";

import { useEffect } from "react";
import { paletteAt, scrollProgress } from "@/lib/daylight";

/** Rewrites the page's colour variables every frame you scroll: dawn at the top, night at the foot. */
export default function ScrollTheme() {
  useEffect(() => {
    const root = document.documentElement.style;
    let frame = 0;
    const paint = () => {
      frame = 0;
      const p = paletteAt(scrollProgress());
      root.setProperty("--bg", p.bg);
      root.setProperty("--fg", p.fg);
      root.setProperty("--muted", p.muted);
      root.setProperty("--card", p.card);
      root.setProperty("--card2", p.card2);
      root.setProperty("--accent", p.accent);
    };
    const on = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
