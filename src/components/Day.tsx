import Image from "next/image";
import { Reveal } from "./Reveal";

// "Lead with the moment": where Elixir fits in her day (strategy deck persona).
// The whole page already runs from morning to night; this is the day at a glance.
const moments = [
  {
    time: "7.30",
    k: "the morning reset",
    d: "a walk along the canal, a podcast, a coffee. no elixir yet — just the intention.",
  },
  {
    time: "13.00",
    k: "the midday flow",
    d: "the studio, the deadlines, lunch with a colleague. a cold can of e&t for the 3pm lull.",
  },
  {
    time: "19.30",
    k: "good company",
    d: "candlelight, mismatched plates, music low. three pipettes into tonic, then on to a gig.",
  },
  {
    time: "23.00",
    k: "a moment to herself",
    d: "a page in the journal, a last glass over ice. clear-headed, grounded, ready for tomorrow.",
  },
];

export default function Day() {
  return (
    <section className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-10">
          <Reveal className="md:col-span-7">
            <p className="label text-muted">a day with elixir</p>
            <h2 className="mt-6 font-serif text-5xl leading-[1] md:text-8xl">
              feel good, <em className="text-rust">without missing out.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              <Image
                src="/img/dinner.jpg"
                alt="three pipettes of elixir into a glass of tonic at a candlelit dinner with friends"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="label mt-4 text-muted">19.30 — good company</p>
          </Reveal>
        </div>

        <ol className="mt-16 grid border-t border-ink/15 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {moments.map((m, i) => (
            <Reveal
              key={m.time}
              delay={i * 0.1}
              className={`border-b border-ink/15 py-10 sm:px-6 lg:border-b-0 ${i % 2 ? "sm:border-l" : ""} ${i === 2 ? "lg:border-l" : ""} ${i === 0 ? "sm:pl-0" : ""}`}
            >
              <li>
                <p className="font-serif text-6xl leading-none tabular-nums md:text-7xl">{m.time}</p>
                <p className="label mt-8 text-muted">{m.k}</p>
                <p className="mt-4 text-[15px] leading-[1.75] text-muted">{m.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
