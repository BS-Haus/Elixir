"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { SHOP_DOMAIN, formatPrice, products } from "@/lib/products";
import { Words } from "./Motion";
import { Reveal, ease } from "./Reveal";

type Tile = {
  id: string;
  name: string;
  price: string;
  was?: string;
  sub: string;
  facts: [string, string][];
  cut: string; // the product, cut out, so all three sit on the same lit ground
  cutW: number;
  cutH: number;
  scale: string; // product height within the frame, so the three share a baseline
  aura: "aura-gold" | "aura-liquid" | "aura-rose";
  life: string; // the lifestyle shot revealed on hover
  lifeAlt: string;
  soon: boolean;
};

const bottle = products.find((p) => p.id === "bottle")!;

const tiles: Tile[] = [
  {
    id: "bottle",
    name: "The Elixir",
    price: formatPrice(bottle.price!),
    sub: "handmade 0% bitters. 30+ serves.",
    facts: [
      ["taste", "Bitter, bright"],
      ["serve", "3 drops + tonic"],
      ["lasts", "£0.83 a serve"],
    ],
    cut: "/img/v9/bottle-cut.png",
    cutW: 223,
    cutH: 650,
    scale: "h-[66%]",
    aura: "aura-gold",
    life: "/img/shelf.jpg",
    lifeAlt: "the elixir bottle on a sunlit kitchen shelf",
    soon: false,
  },
  {
    id: "can",
    name: "E&T",
    price: "£14",
    sub: "ready-poured. four 200ml cans.",
    facts: [
      ["taste", "Bitter orange"],
      ["serve", "Cold, over ice"],
      ["lasts", "£3.50 a can"],
    ],
    cut: "/img/v9/product-can.png",
    cutW: 352,
    cutH: 900,
    scale: "h-[68%]",
    aura: "aura-liquid",
    life: "/img/can-bowl.jpg",
    lifeAlt: "a can of elixir & tonic in a bowl with a lime and a lemon",
    soon: true,
  },
  {
    id: "set",
    name: "The Ritual Set",
    price: "£34",
    was: "£38.99",
    sub: "the elixir + four cans of e&t.",
    facts: [
      ["save", "£4.99"],
      ["serves", "30 + 4 cans"],
      ["for", "Gifting, firsts"],
    ],
    cut: "/img/v9/set-cut.png",
    cutW: 608,
    cutH: 908,
    scale: "h-[64%]",
    aura: "aura-rose",
    life: "/img/ritual-steps.jpg",
    lifeAlt: "the ritual in four steps: ice, three pipettes, tonic, a slice of orange",
    soon: true,
  },
];

/** Waitlist: Shopify's customer form, tagged so the launch email goes to the right people. */
function Notify({ id }: { id: string }) {
  return (
    <form method="post" action={`https://${SHOP_DOMAIN}/contact#newsletter`} className="flex gap-2">
      <input type="hidden" name="form_type" value="customer" />
      <input type="hidden" name="utf8" value="✓" />
      <input type="hidden" name="contact[tags]" value={`newsletter,waitlist-${id}`} />
      <label htmlFor={`notify-${id}`} className="sr-only">
        Email address
      </label>
      <input
        id={`notify-${id}`}
        type="email"
        name="contact[email]"
        required
        placeholder="your email"
        className="voice min-w-0 flex-1 rounded-full bg-tint px-4 py-3 placeholder:text-muted focus:ring-1 focus:ring-ink/40 focus:outline-none"
      />
      <button type="submit" className="btn px-5">
        notify me
      </button>
    </form>
  );
}

function Card({ t }: { t: Tile }) {
  const { add } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <article
      id={t.id}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[20px] bg-raised transition-[transform,box-shadow] duration-700 ease-out hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-40px_rgba(29,23,18,.45)]"
    >
      <div
        className="grain relative aspect-[1/1.05] overflow-hidden"
        style={{ background: "radial-gradient(120% 85% at 50% 100%, var(--card2) 0%, var(--card) 70%)" }}
      >
        {/* a glow in the product's own colour, breathing behind it */}
        <div
          aria-hidden
          className={`${t.aura} drift absolute top-[14%] left-1/2 aspect-square w-[78%] -translate-x-1/2 opacity-45 blur-2xl transition-opacity duration-700 group-hover:opacity-80`}
        />
        {/* contact shadow, so it stands on something */}
        <div
          aria-hidden
          className="absolute bottom-[13%] left-1/2 h-[5%] w-[46%] -translate-x-1/2 rounded-[50%] bg-night/30 blur-md"
        />
        <Image
          src={t.cut}
          alt={t.name}
          width={t.cutW}
          height={t.cutH}
          sizes="(max-width: 768px) 60vw, 20vw"
          className={`absolute bottom-[15%] left-1/2 w-auto -translate-x-1/2 transition-transform duration-700 ease-out group-hover:-translate-y-2 ${t.scale}`}
        />
        <Image
          src={t.life}
          alt={t.lifeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="z-[2] object-cover opacity-0 transition-opacity delay-200 duration-700 group-hover:opacity-100"
        />
        {t.soon && <span className="note absolute top-4 left-4 z-[3] rounded-full bg-raised/90 px-3 py-1.5">coming soon</span>}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[28px] leading-tight font-medium">{t.name}</h3>
          <p className="text-[24px]">
            {t.was && <s className="mr-2 text-[18px] text-muted">{t.was}</s>}
            {t.price}
          </p>
        </div>
        <p className="voice mt-1 text-muted">{t.sub}</p>

        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-ink/10 pt-4">
          {t.facts.map(([k, v]) => (
            <div key={k}>
              <dt className="label text-[10px] text-muted">{k}</dt>
              <dd className="mt-1 text-[16px] leading-tight">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto pt-6">
          {t.soon ? (
            <Notify id={t.id} />
          ) : (
            <div className="flex gap-2">
              <button onClick={() => add("bottle", 1)} className="btn flex-1">
                add · {t.price} →
              </button>
              <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="btn btn-ghost px-5">
                details
              </button>
            </div>
          )}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="overflow-hidden"
              >
                <div className="space-y-3 pt-6 text-[16px] leading-[1.5] text-muted">
                  <p>{bottle.blurb}</p>
                  <p>
                    <span className="label text-[10px] text-ink">ingredients </span>
                    {bottle.ingredients}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export default function Shop() {
  return (
    <section id="shop" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="text-center">
          <p className="note text-muted">one flavour. two ways.</p>
          <h2 className="caps mt-4 text-[44px] leading-none md:text-[56px]">
            <Words text="shop elixir." />
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08} className="h-full">
              <Card t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
