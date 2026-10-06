import Image from "next/image";

/** Full-bleed image band with a single line, like "travel to Korea with us >>". */
export default function Film() {
  return (
    <section className="relative h-[70svh] min-h-[420px] overflow-hidden border-b border-line">
      <Image src="/img/dusk.jpg" alt="Dusk over a quiet harbour" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/25" />
      <a
        href="https://www.instagram.com/drink__elixir/"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 flex items-center justify-center text-[clamp(1.6rem,3.5vw,3rem)] font-medium text-white"
      >
        <span>
          the good energy guide <span aria-hidden>&gt;&gt;</span>
        </span>
      </a>
    </section>
  );
}
