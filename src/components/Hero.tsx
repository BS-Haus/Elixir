import { HERO_VIDEO } from "@/lib/products";

/** Full-bleed film with a single uppercase line beneath, like Seoul Tonic's ice-block hero. */
export default function Hero() {
  return (
    <section id="top">
      <div className="relative h-[78svh] min-h-[520px] overflow-hidden bg-espresso">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          poster="/img/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Elixir brand film"
        />
        <a href="#range" className="pill absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-ink hover:bg-ink hover:text-white">
          Shop Elixir →
        </a>
      </div>
      <p className="caps border-b border-line px-4 py-5 text-center text-[clamp(1rem,1.6vw,1.35rem)]">
        The drink that savours the moment.
      </p>
    </section>
  );
}
