import Image from "next/image";
import { Reveal } from "./Reveal";

const pillars = [
  { n: "I", k: "the taste", t: "Bitter is the grown-up taste.", a: "it makes you pay attention." },
  { n: "II", k: "the root", t: "Gentian, the bitterest root on earth.", a: "years in the mountains to mature." },
  { n: "III", k: "the lore", t: "Bitter was the wise woman’s first reach.", a: "healer. herb-wife. witch." },
  { n: "IV", k: "the moment", t: "Bitter marks the moment the evening begins.", a: "a pause in a glass." },
];

export default function WhyBitters() {
  return (
    <section id="why-bitters" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="note flex flex-wrap items-center gap-3 text-muted">
              why bitters <span aria-hidden>·</span> i <span aria-hidden>·</span> gentian root
              <span className="font-serif text-[16px] font-normal tracking-normal normal-case italic">Gentiana lutea</span>
            </p>
            <h2 className="caps mt-6 flex flex-col leading-none">
              <span className="text-[20px] tracking-[0.04em]">bitter is</span>
              <span className="mt-2 text-[clamp(3.4rem,7vw,6rem)] leading-[0.95]">better.</span>
            </h2>
            <p className="mt-8 max-w-lg text-[28px] leading-[1.25]">
              Bitter is the grown-up taste. The taste modern food forgot.
            </p>
            <p className="mt-6 max-w-lg text-[19px] leading-[1.6] text-muted">
              Long before the apothecary, there were the wise women: healers, herb-wives, the ones they called
              witches. They knew the hedgerow by heart, and they reached for bitter first. Gentian, a mountain root
              that takes years to mature, was always in the basket. The bitterest of them all, and the backbone of
              the great aperitifs.
            </p>
            <span className="sticker mt-8">the witches were right.</span>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-tint">
              <Image
                src="/img/apothecary.jpg"
                alt="the elixir bottle among dried gentian root, cardamom pods and dried orange on an apothecary table"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-5 left-6 font-serif text-[18px] text-cream italic">
                Gentiana lutea
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-10 border-t border-ink/20 pt-10 sm:grid-cols-2 lg:grid-cols-4 md:mt-28">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <li>
                <p className="caps text-[22px]">{p.n}</p>
                <p className="mt-3 text-[16px] font-medium first-letter:uppercase">{p.k}</p>
                <p className="mt-3 text-[24px] leading-[1.2]">{p.t}</p>
                <p className="voice mt-3 text-muted">{p.a}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
