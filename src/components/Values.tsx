import { Reveal } from "./Reveal";

const values = [
  ["0.0%", "alcohol, always"],
  ["30", "serves in every bottle"],
  ["natural", "botanicals, nothing artificial"],
  ["vegan", "& gluten free"],
];

/** A quiet row of facts between the hero and the shop. */
export default function Values() {
  return (
    <section className="border-y border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
        {values.map(([big, small], i) => (
          <Reveal
            key={big}
            delay={i * 0.08}
            className={`px-5 py-10 md:px-10 md:py-14 ${
              i % 2 ? "border-l border-ink/10" : ""
            } ${i > 1 ? "border-t border-ink/10 md:border-t-0" : ""} ${
              i === 2 ? "md:border-l" : ""
            }`}
          >
            <p className="font-serif text-4xl md:text-5xl">{big}</p>
            <p className="label mt-3 text-muted">{small}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
