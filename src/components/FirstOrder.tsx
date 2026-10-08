import Image from "next/image";
import { SHOP_DOMAIN } from "@/lib/products";
import { Reveal } from "./Reveal";
import { Star } from "./Star";

/** The final sell: 10% off the first order, for joining the list. Posts to Shopify's customer form. */
export default function FirstOrder() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[620px]">
        <Image
          src="/img/dinner.jpg"
          alt="three pipettes of elixir into a glass of tonic at a candlelit dinner"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="grain relative flex items-center justify-center overflow-hidden bg-ember px-6 py-20 text-cream">
        <div aria-hidden className="aura-candle pointer-events-none absolute inset-0" />
        <Reveal className="relative z-[2] flex max-w-md flex-col items-center text-center">
          <Star className="h-5 w-5 text-cream" />
          <h2 className="caps mt-6 flex flex-col items-center leading-none">
            <span className="text-[44px] md:text-[56px]">10% off</span>
            <span className="mt-1 text-[44px] md:text-[56px]">your first</span>
            <span className="mt-3 text-[18px] tracking-[0.04em]">order.</span>
          </h2>
          <p className="mt-6 text-[22px] leading-[1.35] text-cream/85">
            Rituals, recipes and first word on what’s next. Once a month.
          </p>
          <form
            method="post"
            action={`https://${SHOP_DOMAIN}/contact#newsletter`}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
          >
            <input type="hidden" name="form_type" value="customer" />
            <input type="hidden" name="utf8" value="✓" />
            <input type="hidden" name="contact[tags]" value="newsletter,first-order" />
            <label htmlFor="email-first-order" className="sr-only">
              Email address
            </label>
            <input
              id="email-first-order"
              type="email"
              name="contact[email]"
              required
              placeholder="your email"
              className="voice min-w-0 flex-1 rounded-full bg-cream/10 px-5 py-4 text-cream ring-1 ring-cream/25 placeholder:text-cream/45 focus:ring-cream/60 focus:outline-none"
            />
            <button type="submit" className="btn btn-gold">
              claim 10%
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
