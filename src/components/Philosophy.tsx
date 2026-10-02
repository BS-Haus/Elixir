import { Reveal } from "./Reveal";

/** A short centred statement, 39BC-style, between the hero and the shop. */
export default function Philosophy() {
  return (
    <section className="bg-night px-5 py-28 md:py-40">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="label text-mist">our philosophy</p>
        <p className="mt-8 font-serif text-3xl leading-[1.25] md:text-[2.75rem]">
          An acquired taste. Like everything worth having.
        </p>
        <p className="mx-auto mt-8 max-w-lg text-[15px] leading-[1.8] text-mist">
          Handmade 0% bitters from London, with gentian root at the backbone.
          Three drops into tonic, a cocktail, or whatever the night asks for.
          For women with a taste for more.
        </p>
        <a
          href="#story"
          className="label mt-10 inline-block border-b border-cream/40 pb-1 transition-colors hover:border-cream"
        >
          read the story
        </a>
      </Reveal>
    </section>
  );
}
