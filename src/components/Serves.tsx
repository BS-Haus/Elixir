import { Reveal } from "./Reveal";

const serves = [
  {
    when: "Before the big meeting",
    name: "The first drop",
    steps: ["A tall glass of ice.", "Top with tonic.", "Three drops of The Elixir.", "A strip of orange peel."],
    with: "The Elixir",
  },
  {
    when: "On the podcast desk",
    name: "The long take",
    steps: ["Sparkling water over ice.", "Three drops of The Elixir.", "A slice of lemon."],
    with: "The Elixir",
  },
  {
    when: "At dinner",
    name: "The toast",
    steps: ["A chilled coupe.", "E&T, poured slowly.", "Nothing else."],
    with: "E&T",
  },
  {
    when: "Late, at the desk",
    name: "The midnight edit",
    steps: ["Soda water, no ice.", "Three drops of The Elixir.", "A slice of mandarin."],
    with: "The Elixir",
  },
];

export default function Serves() {
  return (
    <section className="bg-umber px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="label text-mist">serves</p>
            <h2 className="display mt-6 text-6xl md:text-8xl">
              For the moments
              <br />
              <em>that matter.</em>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-[1.75] text-mist">
            Every one starts with three drops.
          </p>
        </Reveal>

        <div className="grid border-t border-hair sm:grid-cols-2 lg:grid-cols-4">
          {serves.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 0.08}
              className={`border-b border-hair py-10 sm:px-8 lg:border-b-0 ${
                i % 2 ? "sm:border-l" : ""
              } ${i === 2 ? "lg:border-l" : ""} ${i === 0 ? "sm:pl-0" : ""}`}
            >
              <p className="label text-mist">{s.when}</p>
              <p className="mt-5 font-serif text-[2rem] leading-tight italic">{s.name}</p>
              <ul className="mt-6 space-y-2 text-[15px] text-cream/80">
                {s.steps.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="label mt-8 text-cream">made with {s.with}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
