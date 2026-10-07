import Image from "next/image";
import { Aura } from "./Aura";
import { Reveal } from "./Reveal";

/** "Behind the bitter": Charlotte & Seb's story, from Charlotte's launch post. */
export default function Founder() {
  return (
    <section id="founders" className="overflow-x-clip bg-stone px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image
              src="/img/founders.jpg"
              alt="photo-booth strips of charlotte and seb holding bottles of elixir, beside a glass of elixir and tonic"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[62%_50%]"
            />
          </div>
        </Reveal>
        <Reveal
          delay={0.1}
          className="space-y-6 text-[17px] leading-[1.8] text-muted md:col-span-6 md:col-start-7 md:self-center"
        >
          <p className="label">behind the bitter</p>
          <h2 className="!mt-6 font-serif text-5xl leading-[1] tracking-[-0.01em] text-ink md:text-7xl">
            made by charlotte <em className="text-rust">&amp; seb.</em>
          </h2>
          <p className="label !mt-6">husband &amp; wife · london</p>
          <p className="!mt-10">
            elixir started at home. seb stopped drinking for his health, and charlotte — already deep
            into wellness — soon followed him to almost zero. one of the best decisions they&apos;ve
            ever made.
          </p>
          <p>
            but years of mezcal and margaritas had set the bar. nothing on the non-alc shelf tasted
            as good, felt like a proper drink, and was vaguely good for you. so seb had an idea: a
            digestive bitters you could add to tonic or soda — complex flavour, with benefits.
          </p>
          <p>
            a year later he&apos;d left his corporate job, learned how to bring a drink to market and
            tested batch after batch, while charlotte shaped how elixir looks and speaks.
          </p>
          <blockquote className="relative !mt-12 font-serif text-3xl leading-[1.25] text-ink italic md:text-4xl">
            <Aura tone="rose" className="top-1/2 -left-[12%] w-[75%] -translate-y-1/2 opacity-35" />
            <span className="relative">
              from &lsquo;why aren&apos;t you drinking?&rsquo; to &lsquo;what&apos;s that you&apos;re
              drinking?&rsquo;
            </span>
          </blockquote>
          <a
            href="https://www.instagram.com/drink__elixir/"
            target="_blank"
            rel="noreferrer"
            className="label !mt-10 inline-block border-b border-ink/40 pb-1 text-ink transition-colors hover:border-ink"
          >
            follow along as we build elixir
          </a>
        </Reveal>
      </div>
    </section>
  );
}
