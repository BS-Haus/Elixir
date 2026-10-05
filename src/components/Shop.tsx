"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice, products } from "@/lib/products";
import { Qty } from "./CartDrawer";
import { Reveal, ease } from "./Reveal";
import { Signup } from "./Signup";

function Disclosure({ title, children, open: initial = false }: { title: string; children: React.ReactNode; open?: boolean }) {
  const [open, setOpen] = useState(initial);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="label flex w-full items-center justify-between py-5 text-left"
      >
        {title}
        <span aria-hidden className={`text-base transition-transform duration-500 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[15px] leading-[1.75] text-muted">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Product-page buy box on the homepage: gallery + price + add to bag, no extra click to buy. */
export default function Shop() {
  const p = products.find((x) => x.id === "bottle")!;
  const et = products.find((x) => x.id === "can")!;
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);
  const perServe = p.price! / p.serves;
  const etOnSale = Boolean(et.variantId && et.price);

  return (
    <section id="shop" className="scroll-mt-24 bg-paper px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:gap-10">
        {/* gallery */}
        <Reveal className="md:col-span-7">
          <div className="grid gap-3 md:grid-cols-[80px_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {p.images.map((im, i) => (
                <button
                  key={im.src}
                  onClick={() => setImg(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`relative aspect-square w-20 overflow-hidden transition-opacity ${img === i ? "opacity-100 ring-1 ring-cocoa" : "opacity-55 hover:opacity-90"}`}
                >
                  <Image src={im.src} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative order-1 aspect-[4/5] overflow-hidden bg-mint md:order-2">
              <AnimatePresence mode="sync">
                <motion.div
                  key={img}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease }}
                  className="absolute inset-0"
                >
                  <Image src={p.images[img].src} alt={p.images[img].alt} fill priority sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* buy box */}
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 md:self-center">
          <p className="label text-muted">{p.format}</p>
          <h2 className="display mt-4 text-6xl md:text-7xl">{p.name}</h2>
          <p className="mt-4 text-[15px] text-muted">{p.notes}</p>

          <div className="mt-8 flex items-baseline gap-4">
            <span className="font-serif text-4xl">{formatPrice(p.price!)}</span>
            <span className="label text-muted">{p.serves} serves · {formatPrice(perServe)} a drink</span>
          </div>

          <p className="mt-6 text-[16px] leading-[1.75]">{p.blurb}</p>

          <div className="mt-8 flex gap-3">
            <Qty value={qty} onChange={(n) => setQty(Math.max(1, n))} />
            <button
              onClick={() => add(p.id, qty)}
              className="label h-12 flex-1 bg-cocoa text-cream transition-colors duration-500 hover:bg-chocolate"
            >
              Add to bag — {formatPrice(p.price! * qty)}
            </button>
          </div>
          <ul className="label mt-5 flex flex-wrap gap-x-6 gap-y-2 text-muted">
            <li>Free UK delivery over £40</li>
            <li>Secure Shopify checkout</li>
          </ul>

          <div className="mt-10 border-t border-line">
            <Disclosure title="The signature serve" open>
              {p.serve}
            </Disclosure>
            <Disclosure title="Ingredients">{p.ingredients}</Disclosure>
            <Disclosure title="Delivery & returns">
              Free UK delivery on orders over £40. Full details in our{" "}
              <a className="underline underline-offset-4" href="https://drink-elixir.co/policies/shipping-policy">
                shipping
              </a>{" "}
              and{" "}
              <a className="underline underline-offset-4" href="https://drink-elixir.co/policies/refund-policy">
                refund
              </a>{" "}
              policies.
            </Disclosure>
          </div>
        </Reveal>
      </div>

      {/* E&T */}
      <Reveal className="mx-auto mt-20 max-w-[1440px] md:mt-28">
        <div id="can" className="grid scroll-mt-28 items-center gap-8 bg-mint md:grid-cols-12">
          <div className="relative aspect-square md:col-span-4">
            <Image src={et.images[0].src} alt={et.images[0].alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
          <div className="px-6 pb-10 md:col-span-7 md:col-start-6 md:px-0 md:py-12">
            <p className="label text-sage">{etOnSale ? et.format : "Coming soon · " + et.format}</p>
            <h3 className="display mt-4 text-5xl md:text-6xl">{et.name}</h3>
            <p className="mt-4 max-w-md text-[16px] leading-[1.75] text-muted">
              {et.blurb} {et.notes}.
            </p>
            <div className="mt-8">
              {etOnSale ? (
                <button
                  onClick={() => add(et.id, 1)}
                  className="label h-12 bg-cocoa px-8 text-cream transition-colors duration-500 hover:bg-chocolate"
                >
                  Add to bag — {formatPrice(et.price!)}
                </button>
              ) : (
                <>
                  <p className="label mb-2 text-muted">Be first to know</p>
                  <Signup tag="et-waitlist" cta="Join the list" />
                </>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
