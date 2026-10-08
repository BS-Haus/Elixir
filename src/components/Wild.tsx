import Image from "next/image";
import { INSTAGRAM } from "@/lib/products";
import { Reveal } from "./Reveal";

const moments = [
  { img: "/img/shelf.jpg", alt: "the elixir on a sunlit kitchen shelf", where: "at home.", what: "the elixir" },
  { img: "/img/v9/hero-table.jpg", alt: "the elixir on a long lunch table", where: "at lunch.", what: "the elixir" },
  { img: "/img/v9/by-water.jpg", alt: "a figure on a jetty at first light", where: "by the water.", what: "e&t" },
  { img: "/img/v9/three-women.jpg", alt: "three friends laughing with a can of e&t", where: "out with friends.", what: "e&t" },
];

export default function Wild() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="note text-muted">in the wild</p>
            <h2 className="caps mt-4 text-[40px] leading-none md:text-[56px]">this moment.</h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="label border-b border-ink/40 pb-1 transition-colors hover:border-ink"
          >
            @drink__elixir
          </a>
        </Reveal>
      </div>
      <div className="rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:grid md:grid-cols-4 md:overflow-visible md:px-10 md:mx-auto md:max-w-[1440px]">
        {moments.map((m, i) => (
          <Reveal key={m.where} delay={i * 0.08} className="w-[72vw] shrink-0 snap-start md:w-auto">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-tint">
                <Image src={m.img} alt={m.alt} fill sizes="(max-width: 768px) 72vw, 25vw" className="object-cover" />
              </div>
              <figcaption className="voice mt-3 flex justify-between text-muted">
                <span>{m.where}</span>
                <span className="text-ink">{m.what}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
