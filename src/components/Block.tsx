/** Full-bleed colour statement, like Seoul Tonic's "Drink well. Live well." */
export default function Block() {
  return (
    <section id="about" className="scroll-mt-24 bg-rust px-6 py-24 text-center text-white md:py-36">
      <h2 className="caps text-[clamp(2.4rem,6.5vw,6rem)] leading-[1]">Presence & play.</h2>
      <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-[1.7] text-white/85">
        An ancient ritual for modern good times. Long before the bar, bitters were taken before the
        moments that mattered. Elixir brings them into a full, social life — for the dinner, the gig,
        the dance floor, and the quiet hour after. Handmade in London.
      </p>
      <a href="#range" className="pill mt-10 bg-white text-ink hover:bg-ink hover:text-white">
        Find your serve →
      </a>
    </section>
  );
}
