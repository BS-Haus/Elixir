"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SHOP_DOMAIN } from "@/lib/products";
import { ease } from "./Reveal";
import { Star } from "./Star";

const SEEN = "elixir-first-order-seen";
const DELAY_MS = 8000;

function seen() {
  try {
    return localStorage.getItem(SEEN) === "1";
  } catch {
    return false;
  }
}
function markSeen() {
  try {
    localStorage.setItem(SEEN, "1");
  } catch {}
}

/**
 * 10% off the first order, offered once per visitor: after a few seconds,
 * or once they're a third of the way down the page, whichever comes first.
 */
export default function FirstOrderPopup() {
  const [open, setOpen] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (seen()) return;
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      markSeen();
      setOpen(true);
    };
    const timer = setTimeout(show, DELAY_MS);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (max > 0 && scrollY / max > 0.33) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => input.current?.focus({ preventScroll: true }), 500);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            aria-label="close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-night/55 backdrop-blur-[3px]"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="first-order-title"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.8, ease }}
            className="relative grid w-full max-w-[860px] overflow-hidden rounded-[20px] bg-ember text-cream shadow-[0_40px_120px_-30px_rgba(0,0,0,.6)] md:grid-cols-2"
          >
            <div className="relative hidden md:block">
              <Image
                src="/img/dinner.jpg"
                alt=""
                fill
                sizes="430px"
                className="object-cover"
              />
            </div>
            <div className="grain relative flex flex-col items-center px-7 py-12 text-center md:px-10 md:py-14">
              <div aria-hidden className="aura-candle pointer-events-none absolute inset-0" />
              <button
                onClick={() => setOpen(false)}
                aria-label="close"
                className="note absolute top-4 right-5 z-[3] text-cream/60 transition-colors hover:text-cream"
              >
                ✕
              </button>
              <div className="relative z-[2] flex flex-col items-center">
                <Star className="twinkle h-5 w-5" />
                <h2 id="first-order-title" className="caps mt-5 text-[34px] leading-[1.05] md:text-[40px]">
                  10% off your
                  <br />
                  first order.
                </h2>
                <p className="mt-4 text-[20px] leading-[1.35] text-cream/80">
                  Join Drop In for rituals, recipes and first word on what’s next.
                </p>
                <form
                  method="post"
                  action={`https://${SHOP_DOMAIN}/contact#newsletter`}
                  onSubmit={() => setTimeout(() => setOpen(false), 50)}
                  className="mt-7 flex w-full flex-col gap-3"
                >
                  <input type="hidden" name="form_type" value="customer" />
                  <input type="hidden" name="utf8" value="✓" />
                  <input type="hidden" name="contact[tags]" value="newsletter,first-order,popup" />
                  <label htmlFor="email-popup" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={input}
                    id="email-popup"
                    type="email"
                    name="contact[email]"
                    required
                    placeholder="your email"
                    className="voice rounded-full bg-cream/10 px-5 py-4 text-cream ring-1 ring-cream/25 placeholder:text-cream/45 focus:ring-cream/60 focus:outline-none"
                  />
                  <button type="submit" className="btn btn-gold w-full">
                    claim 10%
                  </button>
                </form>
                <button
                  onClick={() => setOpen(false)}
                  className="voice mt-5 text-cream/55 underline underline-offset-4 transition-colors hover:text-cream"
                >
                  no thanks.
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
