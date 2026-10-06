import { testimonials } from "@/lib/content";

/** Ruled review grid — real customer words from the current site. */
export default function Voices() {
  const picks = testimonials.slice(0, 6);
  return (
    <section id="reviews" className="scroll-mt-24 border-b border-line">
      <h2 className="caps border-b border-line py-6 text-center text-xl md:text-2xl">Loved by the free spirited.</h2>
      <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((t) => (
          <figure key={t.name} className="flex flex-col justify-between bg-paper p-6 md:p-10">
            <blockquote className="text-[17px] leading-[1.55]">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="label mt-8 text-muted">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
