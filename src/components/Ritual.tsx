import Image from "next/image";
import { formatPrice, products } from "@/lib/products";
import { Orb } from "./Orb";
import { Words } from "./Motion";
import { Reveal } from "./Reveal";

const steps = [
  { n: "i", t: "ice.", img: "/img/ritual-1-ice.jpg", alt: "a hand dropping ice into an amber glass" },
  { n: "ii", t: "three pipettes.", img: "/img/ritual-2-drops.jpg", alt: "elixir dropped from a pipette into the glass" },
  { n: "iii", t: "a light tonic.", img: "/img/ritual-3-tonic.jpg", alt: "tonic poured slowly over the ice" },
  { n: "iv", t: "a slice of orange.", img: "/img/ritual-4-orange.jpg", alt: "a slice of orange placed into the drink" },
];

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
        <div className="relative">
          <div aria-hidden className="aura-gold pointer-events-none absolute -right-[14%] -bottom-[12%] aspect-square w-[70%] opacity-40 blur-3xl" />
          {/* the four steps, one tile each; the right column sits a little lower, like a contact sheet */}
          <ol className="relative grid grid-cols-2 gap-3 md:gap-4">
            {steps.map((st, i) => (
              <Reveal as="li" key={st.n} delay={i * 0.15} className={i % 2 ? "translate-y-[8%]" : ""}>
                <figure className="group relative aspect-[3/4] overflow-hidden rounded-[16px]">
                  <Image
                    src={st.img}
                    alt={st.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline gap-3 bg-gradient-to-t from-night/70 to-transparent px-4 pt-10 pb-3 text-cream">
                    <span className="caps text-[15px]">{st.n}</span>
                    <span className="voice text-[13px]">{st.t}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <p className="note text-muted">the signature serve</p>
          <h2 className="caps mt-6 flex flex-col text-[44px] leading-[1.02] md:text-[64px]">
            <Words text="the ritual." />
            <Words text="drop in." delay={0.25} />
          </h2>
          <p className="mt-8 max-w-md text-[26px] leading-[1.3]">
            Three pipettes, a light tonic, ice and a slice of orange. Then experiment as you wish.
          </p>
          <ol className="mt-10 border-t border-ink/15">
            {drops.map((d, i) => (
              <Reveal as="li" key={d.n} delay={0.2 + i * 0.15} className="flex items-center gap-6 border-b border-ink/15 py-5">
                  <Orb tone={d.tone} label={d.n} size={48} />
                  <div>
                    <p className="text-[24px] leading-tight">{d.t}</p>
                    <p className="voice mt-1 text-muted">{d.a}</p>
                  </div>
              </Reveal>
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
