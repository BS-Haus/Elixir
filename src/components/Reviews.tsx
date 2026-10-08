import { testimonials } from "@/lib/content";
import { Words } from "./Motion";
import { Reveal } from "./Reveal";

/** Real customer words, from the Senja widget on drink-elixir.co. */
export default function Reviews() {
  return (
    <section className="py-24 md:py-32">
      <Reveal className="px-5 text-center">
        <p className="note text-muted">what our customers say</p>
        <h2 className="caps mt-4 text-[40px] leading-none md:text-[56px]">
          <Words text="poured. tasted. told." />
        </h2>
        <p className="voice mt-5 text-muted">
          <span className="tracking-[0.2em] text-gold">★★★★★</span> from the people who drink it.
        </p>
      </Reveal>

      <div className="rail mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:px-10">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={Math.min(i, 3) * 0.08} className="shrink-0 snap-start">
            <figure className="flex h-full w-[80vw] flex-col justify-between rounded-[20px] bg-raised p-7 sm:w-[340px] md:p-8">
              <div>
                <p aria-label="five stars" className="tracking-[0.2em] text-gold">
                  ★★★★★
                </p>
                <blockquote className="mt-5 text-[22px] leading-[1.3]">&ldquo;{t.quote}&rdquo;</blockquote>
              </div>
              <figcaption className="label mt-8 text-[11px] text-muted">{t.name}.</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
