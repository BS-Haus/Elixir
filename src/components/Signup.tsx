import { SHOP_DOMAIN } from "@/lib/products";

/** Email capture posting to Shopify's built-in customer (newsletter) form, tagged for segmentation. */
export function Signup({ tag, cta = "subscribe", dark = false }: { tag: string; cta?: string; dark?: boolean }) {
  return (
    <form
      method="post"
      action={`https://${SHOP_DOMAIN}/contact#newsletter`}
      className={`flex w-full max-w-md border-b ${dark ? "border-cream/40 focus-within:border-cream" : "border-ink/40 focus-within:border-ink"}`}
    >
      <input type="hidden" name="form_type" value="customer" />
      <input type="hidden" name="utf8" value="✓" />
      <input type="hidden" name="contact[tags]" value={`newsletter,${tag}`} />
      <label htmlFor={`email-${tag}`} className="sr-only">
        Email address
      </label>
      <input
        id={`email-${tag}`}
        type="email"
        name="contact[email]"
        required
        placeholder="email address"
        className={`min-w-0 flex-1 bg-transparent py-4 text-[15px] focus:outline-none ${dark ? "placeholder:text-cream/50" : "placeholder:text-muted"}`}
      />
      <button type="submit" className="label px-2 transition-opacity hover:opacity-60">
        {cta}
      </button>
    </form>
  );
}
