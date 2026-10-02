import { SHOP_DOMAIN } from "@/lib/products";
import { Moon } from "./Moon";
import { Reveal } from "./Reveal";

/** The new moon letter — posts to Shopify's built-in newsletter (customer) form. */
export default function Letter() {
  return (
    <section className="relative overflow-hidden bg-night px-5 py-28 md:px-10 md:py-40">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center gap-4 text-blush">
          {[0, 0.25, 0.5, 0.75, 1].map((ph) => (
            <Moon key={ph} phase={ph} className="h-5 w-5" />
          ))}
        </div>
        <p className="label mt-10 text-mist">the new moon letter</p>
        <h2 className="mt-6 font-serif text-5xl leading-[1] md:text-7xl">
          What&rsquo;s your <em className="text-blush">ritual?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.75] text-mist">
          One email on each new moon. A ritual, a serve, and first access to
          limited editions. Nothing else.
        </p>
        <form
          method="post"
          action={`https://${SHOP_DOMAIN}/contact#newsletter`}
          className="mx-auto mt-12 flex max-w-md border-b border-cream/30 focus-within:border-blush"
        >
          <input type="hidden" name="form_type" value="customer" />
          <input type="hidden" name="utf8" value="✓" />
          <input type="hidden" name="contact[tags]" value="newsletter" />
          <label htmlFor="letter-email" className="sr-only">
            Email address
          </label>
          <input
            id="letter-email"
            type="email"
            name="contact[email]"
            required
            placeholder="Email address"
            className="min-w-0 flex-1 bg-transparent py-4 text-[15px] placeholder:text-mist/60 focus:outline-none"
          />
          <button type="submit" className="label px-2 text-blush transition-colors hover:text-cream">
            subscribe
          </button>
        </form>
      </Reveal>
    </section>
  );
}
