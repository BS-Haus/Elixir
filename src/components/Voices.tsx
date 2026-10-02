import { Reveal } from "./Reveal";

// Placeholder slots for real customer quotes / UGC — to be populated by the founders.
const slots = [
  { quote: "[A real customer quote goes here.]", who: "[First name], [what she does]" },
  { quote: "[A real customer quote goes here.]", who: "[First name], [what she does]" },
  { quote: "[A real customer quote goes here.]", who: "[First name], [what she does]" },
];

export default function Voices() {
  return (
    <section className="border-t border-hair bg-night px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="grid items-end gap-6 md:grid-cols-3">
          <p className="label text-mist">in their words</p>
          <h2 className="display text-center text-5xl md:text-7xl">
            What the ritual
            <br />
            <em>feels like.</em>
          </h2>
          <p className="label text-mist md:text-right">kept in the fridge door</p>
        </Reveal>
        <div className="mt-16 grid gap-px bg-hair md:mt-20 md:grid-cols-3">
          {slots.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="flex aspect-[4/5] flex-col justify-between bg-umber p-8 md:p-10">
              <p className="label text-mist">[photo or video]</p>
              <div>
                <p className="font-serif text-3xl leading-[1.2] italic">{s.quote}</p>
                <p className="label mt-6 text-mist">{s.who}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
