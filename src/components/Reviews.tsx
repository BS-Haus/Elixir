import { testimonials } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Real customer words, in a horizontal rail (Aesop-quiet, DTC-persuasive). */
export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 border-t border-line bg-paper py-20 md:py-28">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 md:flex-row md:items-end md:px-10">
        <div>
          <p className="label text-muted">In their words</p>
          <h2 className="display mt-5 text-5xl md:text-7xl">
            For the <em>free spirited.</em>
          </h2>
        </div>
        <p className="max-w-xs text-[15px] leading-[1.7] text-muted">
          From those who&rsquo;ve given up drinking, and those who simply drink less.
        </p>
      </Reveal>

      <div className="rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mt-16 md:px-10">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex w-[82vw] shrink-0 snap-start flex-col justify-between bg-mint p-8 sm:w-[24rem] md:p-10"
          >
            <blockquote className="font-serif text-[1.65rem] leading-[1.25]">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="label mt-10 text-muted">{t.name} · verified customer</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
