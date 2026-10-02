import { Moon } from "./Moon";
import { Reveal } from "./Reveal";

const drops = [
  { n: "I", phase: 0.25, t: "Gratitude.", d: "One drop for what you're grateful for." },
  { n: "II", phase: 0.55, t: "Intention.", d: "One for what you're calling in." },
  { n: "III", phase: 1, t: "The work.", d: "One for the work it will take." },
];

/** The heart of the brand: three drops, each with a meaning. */
export default function Ritual() {
  return (
    <section id="ritual" className="relative overflow-hidden bg-umber px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="label text-mist">the ritual</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] md:text-8xl">
            Three drops.
            <br />
            <em className="text-blush">Then everything.</em>
          </h2>
        </Reveal>

        <ol className="mt-20 grid border-t border-hair md:mt-28 md:grid-cols-3 md:border-t-0">
          {drops.map((d, i) => (
            <Reveal
              key={d.n}
              delay={i * 0.15}
              className={`border-b border-hair py-12 text-center md:border-b-0 md:px-10 md:py-4 ${
                i ? "md:border-l" : ""
              }`}
            >
              <li>
                <Moon phase={d.phase} className="mx-auto h-10 w-10 text-blush" />
                <p className="label mt-8 text-mist">{d.n}</p>
                <p className="mt-4 font-serif text-4xl md:text-5xl">{d.t}</p>
                <p className="mx-auto mt-4 max-w-[16rem] text-[15px] leading-[1.7] text-mist">
                  {d.d}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
