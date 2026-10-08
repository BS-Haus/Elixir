import Image from "next/image";
import { Reveal } from "./Reveal";

const cards = [
  {
    k: "for the ambitious",
    t: "between the calls.",
    d: "The pause that’s yours. Three drops to close the day’s work and step into the evening on your terms.",
    a: "ceo of her own calendar.",
    img: "/img/v9/woman-drinking.jpg",
    alt: "a woman drinking from a cut-glass tumbler",
    pos: "object-[50%_30%]",
  },
  {
    k: "for the seeker",
    t: "a ritual in a glass.",
    d: "One drop for gratitude, one for intention, one for the work. For the altar, the journal and the new chapter.",
    a: "drop in.",
    img: "/img/v9/stars-hands.jpg",
    alt: "two hands meet over a tarot reading by candlelight",
    pos: "object-center",
  },
];

export default function Manifest() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="text-center">
          <p className="note text-muted">for the ambitious and the seekers</p>
          <h2 className="caps mt-4 text-[40px] leading-none md:text-[56px]">manifest responsibly.</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.k} delay={i * 0.1}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded-[20px] text-cream md:aspect-[5/6]">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03] ${c.pos}`}
                />
                {/* candlelit fade, warm rather than black */}
                <div className="absolute inset-0 bg-gradient-to-t from-ember via-ember/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                  <p className="note text-cream/70">{c.k}</p>
                  <h3 className="caps mt-3 text-[32px] leading-[1.05] md:text-[40px]">{c.t}</h3>
                  <p className="mt-4 max-w-md text-[20px] leading-[1.35] text-cream/85">{c.d}</p>
                  <p className="voice mt-4 text-cream/55">{c.a}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
