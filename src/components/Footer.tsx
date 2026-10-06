import { INSTAGRAM, SHOP_DOMAIN } from "@/lib/products";
import { Logo } from "./Logo";

const cols: [string, [string, string][]][] = [
  ["Shop", [["The Elixir", "#bottle"], ["E&T (soon)", "#can"]]],
  ["Elixir", [["How to drink", "#how"], ["Reviews", "#reviews"], ["About", "#about"]]],
  ["Help", [["Contact", `https://${SHOP_DOMAIN}/pages/contact`], ["Shipping", `https://${SHOP_DOMAIN}/policies/shipping-policy`], ["Refunds", `https://${SHOP_DOMAIN}/policies/refund-policy`]]],
  ["Follow", [["Instagram", INSTAGRAM], ["TikTok", "https://www.tiktok.com/@drink__elixir"]]],
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="grid border-b border-white/20 sm:grid-cols-2 md:grid-cols-4">
        {cols.map(([t, links], i) => (
          <div key={t} className={`border-white/20 px-6 py-10 ${i < 3 ? "md:border-r" : ""}`}>
            <p className="label text-white/50">{t}</p>
            <ul className="mt-4 space-y-2 text-[14px]">
              {links.map(([l, h]) => (
                <li key={l}>
                  <a href={h} {...(h.startsWith("http") && { target: "_blank", rel: "noreferrer" })} className="hover:opacity-60">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="px-6 py-10">
        <Logo className="h-auto w-full text-rust" />
        <p className="label mt-8 flex flex-col justify-between gap-2 text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} Elixir Drinks Ltd · Handmade in London</span>
          <span>Made for presence and play</span>
        </p>
      </div>
    </footer>
  );
}
