import Image from "next/image";
import { Reveal } from "./Reveal";

/** "Bitter is better" + gentian, condensed from the current site. */
export default function Bitter() {
  return (
    <section className="bg-paper px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <p className="label text-muted">Bitter is better</p>
          <h2 className="display mt-5 text-5xl md:text-7xl">
            Gentian, <em>the backbone.</em>
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-[1.8] text-muted">
            <p>
              For centuries, bitters were a trusted tonic — taken before a meal to
              slow down and settle in. Native to the mountains of Europe, gentian
              root has been prized since the ancient Greeks.
            </p>
            <p>
              With its complex bitterness and subtle earthy notes, it adds depth
              and intrigue to any glass. We pair it with red mandarin, cardamom
              and juniper: a bitters that&rsquo;s both deeply restorative and
              utterly delicious.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src="/img/shop-pour.jpg" alt="Elixir dropped into glasses of tonic with grapefruit" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
