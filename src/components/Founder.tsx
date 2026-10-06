import { Reveal } from "./Reveal";

/** "Behind the bitter": founder-led. Portrait and quote slots are placeholders for Charlotte's own words. */
export default function Founder() {
  return (
    <section className="bg-stone px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <div className="flex aspect-[4/5] items-end bg-sand p-6">
            <p className="label text-muted">[portrait of charlotte — to shoot]</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <p className="label text-muted">behind the bitter</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-7xl">
            made by hand, <em className="text-rust">by charlotte.</em>
          </h2>
          <p className="mt-8 max-w-lg text-[17px] leading-[1.8] text-muted">
            elixir is founder-led and made in london. charlotte brings her
            interest in botanical traditions — the old apothecary bitters taken
            before the moments that mattered — into a drink for modern life.
          </p>
          <blockquote className="mt-10 max-w-lg border-l-2 border-rust pl-6 font-serif text-3xl leading-[1.25] italic">
            [a line from charlotte on why she started elixir.]
          </blockquote>
          <a
            href="https://www.instagram.com/drink__elixir/"
            target="_blank"
            rel="noreferrer"
            className="label mt-10 inline-block border-b border-ink/40 pb-1 transition-colors hover:border-ink"
          >
            follow along as we build elixir
          </a>
        </Reveal>
      </div>
    </section>
  );
}
