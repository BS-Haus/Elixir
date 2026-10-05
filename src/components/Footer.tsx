import { INSTAGRAM, SHOP_DOMAIN } from "@/lib/products";
import { Framed, Ornament } from "./Ornament";

const columns: { title: string; links: [string, string][] }[] = [
  { title: "Shop", links: [["The Elixir", "#shop"], ["E&T · coming soon", "#can"]] },
  {
    title: "Elixir",
    links: [["The ritual", "#ritual"], ["Our story", "#story"], ["Reviews", "#reviews"]],
  },
  {
    title: "Help",
    links: [
      ["Contact", `https://${SHOP_DOMAIN}/pages/contact`],
      ["Shipping", `https://${SHOP_DOMAIN}/policies/shipping-policy`],
      ["Refunds", `https://${SHOP_DOMAIN}/policies/refund-policy`],
      ["Privacy", `https://${SHOP_DOMAIN}/policies/privacy-policy`],
    ],
  },
  {
    title: "Follow",
    links: [["Instagram", INSTAGRAM], ["TikTok", "https://www.tiktok.com/@drink__elixir"]],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cocoa px-5 pt-20 pb-28 text-cream md:px-10 md:pb-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-cream/15 pb-16 sm:grid-cols-2 md:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="label text-cream/50">{c.title}</p>
              <ul className="mt-5 space-y-3 text-[15px]">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                      className="transition-opacity hover:opacity-60"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Framed bracketClass="h-24 md:h-44" className="mt-16 text-cream/80">
          <Ornament name="wordmark" label="Elixir" className="h-12 text-cream md:h-24" />
        </Framed>

        <div className="label mt-14 flex flex-col justify-between gap-2 text-cream/45 md:flex-row">
          <p>© {new Date().getFullYear()} Elixir Drinks Ltd · Handmade in London</p>
          <p>For the free spirited</p>
        </div>
      </div>
    </footer>
  );
}
