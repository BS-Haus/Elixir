import { Framed } from "./Ornament";
import { Reveal } from "./Reveal";
import { Signup } from "./Signup";

/** Email capture with the offer from the current site (10% off the first order). */
export default function Join() {
  return (
    <section className="bg-cocoa px-5 py-24 text-cream md:px-10 md:py-32">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Framed bracketClass="h-28 md:h-40" className="text-cream/80">
          <p className="label text-cream/60">Join the free spirited</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            10% off your
            <br />
            <em>first order.</em>
          </h2>
        </Framed>
        <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-cream/70">
          Rituals, serves and first access to new editions. Occasional, considered, never noisy.
        </p>
        <div className="mt-10 flex w-full justify-center">
          <Signup tag="welcome-10" cta="Sign up" dark />
        </div>
      </Reveal>
    </section>
  );
}
