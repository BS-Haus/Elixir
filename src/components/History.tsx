import { Framed, Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

// Heritage narrative from the BS.HAUS identity deck.
const chapters = [
  {
    year: "1890–1910",
    title: "Tonics & elixirs",
    body: "“Elixir”, “tonic” and “restorative” were real product categories, sold to a status-conscious clientele. The fashionable diagnosis was neurasthenia — nerve exhaustion, blamed on the pace of modern life. The cure: rest, spa resorts, and for those without the time, tonics.",
  },
  {
    year: "The Belle Époque",
    title: "The absinthe ritual",
    body: "A drink whose ritual mattered as much as its content: the fountain, the slotted spoon, the sugar cube, the louche as water clouds the glass. It carried a whole mythology of artistic mysticism and a faint, glamorous danger.",
  },
  {
    year: "1920–1933",
    title: "Prohibition",
    body: "While rum-runners worked the coast at night, tonic and patent-medicine brands — the Vai Brothers’ “Padres Elixir” among them — thrived as the legal alternative that didn’t need to hide.",
  },
  {
    year: "Today",
    title: "Alcohol-free alchemy",
    body: "Elixir takes the old instinct — a few bitter drops before the moments that matter — and leaves out the alcohol. Handmade in London, with gentian root at the backbone.",
  },
];

export default function History() {
  return (
    <section id="story" className="scroll-mt-24 bg-mint px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="text-center">
          <p className="label text-muted">Our story</p>
          <Framed bracketClass="h-32 md:h-48" className="mt-8 text-sage">
            <h2 className="display text-5xl text-cocoa md:text-8xl">
              The original elixirs
              <br />
              <em>were bitter.</em>
            </h2>
          </Framed>
        </Reveal>

        <ol className="mt-20 grid gap-px bg-line md:mt-28 md:grid-cols-4">
          {chapters.map((c, i) => (
            <Reveal key={c.year} delay={i * 0.08} className="bg-mint">
              <li className="flex h-full flex-col p-2 py-10 md:p-8">
                <p className="label text-sage">{c.year}</p>
                <p className="display mt-5 text-4xl">{c.title}</p>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted">{c.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20 flex justify-center text-cocoa md:mt-28">
          <Ornament name="wordmark" className="h-8 md:h-10" />
        </Reveal>
      </div>
    </section>
  );
}
