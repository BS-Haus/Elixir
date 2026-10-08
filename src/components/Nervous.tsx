import Image from "next/image";
import { Orb } from "./Orb";
import { Nerve } from "./Nerve";
import { Words } from "./Motion";
import { Reveal } from "./Reveal";

const steps = [
  { tone: "gold" as const, n: "I", k: "Taste", t: "Bitter receptors wake on the tongue." },
  { tone: "rose" as const, n: "II", k: "Signal", t: "The message travels the vagus nerve." },
  { tone: "violet" as const, n: "III", k: "Settle", t: "Rest and digest, as the wise women told it." },
];

/** The bitter response, by candlelight. */
export default function Nervous() {
  return (
    <section className="px-5 pb-24 md:px-10 md:pb-32">
      <Reveal className="mx-auto max-w-[1440px]">
        <div className="grain relative overflow-hidden rounded-[20px] bg-ember text-cream">
          {/* light pooling in the dark: gold rising on the left, violet settling on the right */}
          <div aria-hidden className="aura-gold drift pointer-events-none absolute -top-[30%] -left-[10%] aspect-square w-[55%] opacity-25 blur-3xl" />
          <div
            aria-hidden
            className="aura-violet drift pointer-events-none absolute -right-[12%] -bottom-[40%] aspect-square w-[60%] opacity-35 blur-3xl"
            style={{ animationDelay: "-7s" }}
          />
          <Image
            src="/img/v9/gentian-line-cream.svg"
            alt=""
            width={640}
            height={1100}
            className="pointer-events-none absolute top-1/2 right-[38%] hidden h-[115%] w-auto -translate-y-1/2 opacity-[0.07] lg:block"
          />

          <div className="relative z-[2] grid gap-14 p-8 md:grid-cols-2 md:gap-16 md:p-16">
            <div>
              <p className="note flex flex-wrap gap-3 text-cream/60">
                the bitter response <span aria-hidden>·</span> what the wise women knew
              </p>
              <h2 className="caps mt-6 text-[36px] leading-[1.08] md:text-[46px]">
                <Words text="from the tongue to the nervous system." stagger={0.05} />
              </h2>
              <p className="mt-8 text-[26px] leading-[1.3]">
                We have bitter receptors far beyond the tongue, and they speak to the vagus nerve: the long line
                between body and brain.
              </p>
              <p className="mt-6 text-[18px] leading-[1.6] text-cream/65">
                The wise women knew it before science had a name for it. Herbalists now call it the bitter reflex:
                for centuries, bitterness has been used to call the body out of fight or flight and back into rest
                and digest. Three drops. Drop in.
              </p>
            </div>

            <div className="md:pt-4">
              <ol className="relative border-t border-cream/15">
                {/* the nerve: a fine line of the can's liquid joining the three orbs */}
                <Nerve />
                {steps.map((s, i) => (
                  <Reveal as="li" key={s.n} delay={0.35 + i * 0.35} className="relative flex items-center gap-6 border-b border-cream/15 py-6">
                      <Orb tone={s.tone} label={s.n} />
                      <div>
                        <p className="text-[15px] font-medium text-cream/60">{s.k}</p>
                        <p className="mt-1 text-[22px] leading-[1.25]">{s.t}</p>
                      </div>
                  </Reveal>
                ))}
              </ol>
              <p className="voice mt-6 text-cream/50">one. two. three.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
