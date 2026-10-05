import Image from "next/image";
import { Framed } from "./Ornament";
import { Reveal } from "./Reveal";

const drops = [
  { n: "I", t: "Gratitude.", d: "One drop for what you're grateful for." },
  { n: "II", t: "Intention.", d: "One for what you're calling in." },
  { n: "III", t: "The work.", d: "One for the work it will take." },
];

export default function Ritual() {
  return (
    <section id="ritual" className="scroll-mt-24 bg-chocolate text-cream">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        <div className="relative min-h-[60svh] md:min-h-0">
          <Image
            src="/img/shop-dropper.jpg"
            alt="Three pipettes of Elixir over tonic, ice and orange"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="px-5 py-20 md:px-16 md:py-32">
          <Reveal>
            <Framed bracketClass="h-24 md:h-32" className="text-cream/90">
              <h2 className="display text-center text-4xl md:text-6xl">
                Three drops.
                <br />
                <em className="whitespace-nowrap">Then everything.</em>
              </h2>
            </Framed>
            <p className="mt-10 max-w-md text-[16px] leading-[1.8] text-cream/75">
              Long before the bar, bitters were kept by wise women, alchemists and
              apothecaries, and taken before the moments that mattered. Ours come
              with a meaning each.
            </p>
          </Reveal>
          <ol className="mt-12 border-t border-cream/20">
            {drops.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.08}>
                <li className="grid grid-cols-[3rem_1fr] items-baseline border-b border-cream/20 py-6">
                  <span className="font-serif text-xl text-cream/50 italic">{d.n}</span>
                  <div>
                    <p className="display text-4xl">{d.t}</p>
                    <p className="mt-2 text-[15px] text-cream/70">{d.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <a
            href="#shop"
            className="label mt-10 inline-block border-b border-cream/50 pb-1 transition-colors hover:border-cream"
          >
            Begin your ritual
          </a>
        </div>
      </div>
    </section>
  );
}
