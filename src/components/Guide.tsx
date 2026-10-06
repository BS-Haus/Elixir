import { Reveal } from "./Reveal";
import { Signup } from "./Signup";

// "Good Energy Guide" pillar, as the newsletter's reason to sign up. Topics from the strategy deck.
const issues = [
  { k: "going out", t: "where we’re dancing this weekend." },
  { k: "getting together", t: "three plans that aren’t dinner." },
  { k: "everyday rituals", t: "a sunday well spent." },
];

export default function Guide() {
  return (
    <section className="bg-rust px-5 py-28 text-cream md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-6">
            <p className="label text-cream/70">the good energy guide · every friday</p>
            <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-7xl">
              plans worth <em>staying sharp for.</em>
            </h2>
            <p className="mt-8 max-w-md text-[16px] leading-[1.8] text-cream/80">
              elixir&rsquo;s guide to going out, getting together and taking in
              the moment — the places, plans and rituals worth saving. plus 10%
              off your first order.
            </p>
            <div className="mt-10">
              <Signup tag="good-energy-guide" cta="get the guide" dark />
            </div>
          </Reveal>
          <ol className="border-t border-cream/25 md:col-span-5 md:col-start-8">
            {issues.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <li className="grid grid-cols-[4rem_1fr] items-baseline border-b border-cream/25 py-7">
                  <span className="font-serif text-xl text-cream/60 italic">no. {i + 1}</span>
                  <div>
                    <p className="label text-cream/60">{s.k}</p>
                    <p className="mt-2 font-serif text-3xl leading-tight">{s.t}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
