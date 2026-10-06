import { testimonials } from "@/lib/content";
import { Reveal } from "./Reveal";

/** "In good company": real customer words from the current site, in a quiet rail. */
export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-paper py-28 md:py-36">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 md:flex-row md:items-end md:px-10">
        <div>
          <p className="label text-muted">in good company</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-7xl">
            for the <em className="text-rust">free spirited.</em>
          </h2>
        </div>
        <p className="max-w-xs text-[15px] leading-[1.7] text-muted">
          from those who&rsquo;ve given up drinking, and those who simply drink less.
        </p>
      </Reveal>

      <div className="rail mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mt-20 md:px-10">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex w-[82vw] shrink-0 snap-start flex-col justify-between bg-stone p-8 sm:w-[24rem] md:p-10"
          >
            <blockquote className="font-serif text-[1.6rem] leading-[1.28]">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="label mt-10 text-muted">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
