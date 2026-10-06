import Image from "next/image";
import { Reveal } from "./Reveal";

// "The Formula" pillar: answer what it is, how it tastes, when to drink it, and can vs concentrate.
const facts = [
  {
    n: "01",
    k: "what it is",
    t: "a non-alcoholic botanical bitters.",
    d: "a few drops turn tonic, soda or a zero-proof cocktail into a proper grown-up drink. 0% alcohol, vegan, nothing artificial.",
  },
  {
    n: "02",
    k: "how it tastes",
    t: "bitter first, then bright.",
    d: "gentian root at the backbone, lifted with red mandarin, cardamom and juniper. an acquired taste — like everything worth having.",
  },
  {
    n: "03",
    k: "when to drink it",
    t: "wherever the night takes you.",
    d: "before dinner, at the table, on the way to a gig, or at the end of a long day. for feeling good without missing out.",
  },
];

const formats = [
  {
    href: "#bottle",
    img: "/img/shop-product.jpg",
    pos: "object-[50%_38%]",
    k: "the concentrate",
    t: "make your own serve.",
    d: "the dropper bottle. 30 serves for hosting, the home bar and the kitchen shelf.",
    cta: "shop the concentrate",
  },
  {
    href: "#can",
    img: "/img/can-bowl.jpg",
    pos: "object-[50%_40%]",
    k: "the can",
    t: "take it into the moment.",
    d: "elixir & tonic, ready-poured. for picnics, festivals and the 3pm lull.",
    cta: "coming soon",
  },
];

export default function Explained() {
  return (
    <section id="explained" className="scroll-mt-20 bg-paper px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <p className="label text-muted">the formula</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-8xl">
            elixir, <em className="text-rust">explained.</em>
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 border-t border-ink/10 pt-12 md:mt-24 md:grid-cols-3 md:gap-10">
          {facts.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <li>
                <p className="label text-muted">
                  {f.n} — {f.k}
                </p>
                <p className="mt-6 font-serif text-3xl leading-[1.1] md:text-4xl">{f.t}</p>
                <p className="mt-5 text-[16px] leading-[1.75] text-muted">{f.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-24 md:mt-32">
          <p className="label text-muted">concentrate or can?</p>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {formats.map((f, i) => (
            <Reveal key={f.k} delay={i * 0.1}>
              <a href={f.href} className="group flex h-full flex-col bg-stone">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={f.img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03] ${f.pos}`}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-10">
                  <div>
                    <p className="label text-muted">{f.k}</p>
                    <p className="mt-4 font-serif text-3xl leading-[1.05] md:text-[2.6rem]">{f.t}</p>
                    <p className="mt-4 text-[15px] leading-[1.7] text-muted">{f.d}</p>
                  </div>
                  <p className="label mt-6 text-ink transition-colors group-hover:text-rust">
                    {f.cta} →
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
