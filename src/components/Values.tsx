import { Reveal } from "./Reveal";

const values = [
  ["Handmade", "in London"],
  ["0%", "alcohol"],
  ["30", "servings a bottle"],
  ["Vegan", "& gluten free"],
];

export default function Values() {
  return (
    <section className="border-y border-hair bg-night">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-4">
        {values.map(([big, small], i) => (
          <Reveal
            key={big}
            delay={i * 0.08}
            className={`px-5 py-10 text-center md:px-10 md:py-14 ${
              i % 2 ? "border-l border-hair" : ""
            } ${i > 1 ? "border-t border-hair md:border-t-0" : ""} ${
              i === 2 ? "md:border-l" : ""
            }`}
          >
            <p className="font-serif text-3xl md:text-4xl">{big}</p>
            <p className="label mt-3 text-mist">{small}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
