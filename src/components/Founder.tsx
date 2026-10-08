import Image from "next/image";
import { INSTAGRAM } from "@/lib/products";
import { Reveal } from "./Reveal";
import { Star } from "./Star";

/** Charlotte & Seb's story, from Charlotte's launch post, by candlelight. */
export default function Founder() {
  return (
    <section id="founders" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
      <div className="grain relative mx-auto max-w-[1440px] overflow-hidden rounded-[20px] bg-ember text-cream">
        <div aria-hidden className="aura-candle pointer-events-none absolute inset-0" />
        <div className="relative z-[2] grid items-center gap-12 p-6 md:grid-cols-12 md:gap-10 md:p-14">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] ring-1 ring-cream/15">
              <Image
                src="/img/founders.jpg"
                alt="photo-booth strips of charlotte and seb holding bottles of elixir, beside a glass of elixir and tonic"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-[62%_50%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
            <p className="note flex gap-3 text-cream/60">
              founder-led <span aria-hidden>·</span> london
            </p>
            <h2 className="caps mt-6 text-[36px] leading-[1.08] md:text-[48px]">
              made by charlotte &amp; seb. for the seekers.
            </h2>
            <div className="mt-8 space-y-5 text-[19px] leading-[1.6] text-cream/75">
              <p>
                Elixir started at home. Seb stopped drinking for his health, and Charlotte, already deep into
                wellness, soon followed him to almost zero. One of the best decisions they’ve ever made.
              </p>
              <p>
                But years of mezcal and margaritas had set the bar. Nothing on the non-alc shelf tasted as good,
                felt like a proper drink, and was vaguely good for you. So Seb had an idea: a digestive bitters you
                could add to tonic or soda. Complex flavour, with benefits.
              </p>
            </div>
            <blockquote className="mt-10 flex gap-4 text-[26px] leading-[1.3] italic md:text-[30px]">
              <Star className="mt-2 h-5 w-5 shrink-0 text-gold" />
              <span>
                From ‘why aren’t you drinking?’ to ‘what’s that you’re drinking?’
              </span>
            </blockquote>
            <p className="note mt-5 text-cream/60">charlotte &amp; seb, founders</p>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn btn-candle mt-10">
              follow the journey
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
