import Image from "next/image";
import { formatPrice, products } from "@/lib/products";
import { Orb } from "./Orb";
import { Reveal } from "./Reveal";

const drops = [
  { tone: "gold" as const, n: "I", t: "One for gratitude.", a: "for what you already have." },
  { tone: "rose" as const, n: "II", t: "One for intention.", a: "for what you’re calling in." },
  { tone: "violet" as const, n: "III", t: "One for the work.", a: "for what it will take." },
];

export default function Ritual() {
  const bottle = products.find((p) => p.id === "bottle")!;
  return (
    <section id="ritual" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="relative">
          <div aria-hidden className="aura-gold pointer-events-none absolute -right-[14%] -bottom-[12%] aspect-square w-[70%] opacity-40 blur-3xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
            <Image
              src="/img/ritual-steps.jpg"
              alt="the ritual in four steps: ice into a glass, three pipettes of elixir, tonic poured slowly, a slice of orange"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="note text-muted">the signature serve</p>
          <h2 className="caps mt-6 text-[44px] leading-[1.02] md:text-[64px]">
            the ritual.
            <br />
            drop in.
          </h2>
          <p className="mt-8 max-w-md text-[26px] leading-[1.3]">
            Three pipettes, a light tonic, ice and a slice of orange. Then experiment as you wish.
          </p>
          <ol className="mt-10 border-t border-ink/15">
            {drops.map((d) => (
              <li key={d.n} className="flex items-center gap-6 border-b border-ink/15 py-5">
                <Orb tone={d.tone} label={d.n} size={48} />
                <div>
                  <p className="text-[24px] leading-tight">{d.t}</p>
                  <p className="voice mt-1 text-muted">{d.a}</p>
                </div>
              </li>
            ))}
          </ol>
          <a href="#bottle" className="btn mt-10">
            drop in · {formatPrice(bottle.price!)} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
