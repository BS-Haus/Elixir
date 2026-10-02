import { SHOP_DOMAIN } from "@/lib/products";
import { INSTAGRAM } from "./Products";

const policies = [
  ["shipping", "shipping-policy"],
  ["refunds", "refund-policy"],
  ["privacy", "privacy-policy"],
  ["terms", "terms-of-service"],
];

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-espresso px-5 pt-24 pb-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl italic">made for presence and play.</p>
            <p className="mt-3 text-sm text-ivory/60">
              free uk shipping on orders over £40.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-type text-xs uppercase tracking-[0.3em] text-ivory/40">
              say hello
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-orange">
                  instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@drink__elixir" target="_blank" rel="noreferrer" className="hover:text-orange">
                  tiktok
                </a>
              </li>
              <li>
                <a href={`https://${SHOP_DOMAIN}/pages/contact`} className="hover:text-orange">
                  contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-type text-xs uppercase tracking-[0.3em] text-ivory/40">
              the small print
            </p>
            <ul className="mt-4 space-y-2">
              {policies.map(([label, slug]) => (
                <li key={slug}>
                  <a href={`https://${SHOP_DOMAIN}/policies/${slug}`} className="hover:text-orange">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none text-center font-display text-[clamp(6rem,26vw,22rem)] leading-[0.8] font-black tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(245,236,223,0.25)] [font-variation-settings:'SOFT'_100]"
        >
          elixir
        </p>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/40 md:flex-row">
          <p>© {new Date().getFullYear()} elixir drinks ltd · 124 city road, london ec1v 2nx</p>
          <p>non-alcoholic. please enjoy presently.</p>
        </div>
      </div>
    </footer>
  );
}
