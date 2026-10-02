import { INSTAGRAM, SHOP_DOMAIN } from "@/lib/products";
import { Logo } from "./Logo";

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: "shop",
    links: [
      ["The Elixir", "#bottle"],
      ["E&T · Elixir & Tonic", "#can"],
    ],
  },
  {
    title: "elixir",
    links: [
      ["Rituals", "#ritual"],
      ["Story", "#story"],
      ["Instagram", INSTAGRAM],
      ["TikTok", "https://www.tiktok.com/@drink__elixir"],
    ],
  },
  {
    title: "help",
    links: [
      ["Contact", `https://${SHOP_DOMAIN}/pages/contact`],
      ["Delivery", `https://${SHOP_DOMAIN}/policies/shipping-policy`],
      ["Returns", `https://${SHOP_DOMAIN}/policies/refund-policy`],
      ["Privacy", `https://${SHOP_DOMAIN}/policies/privacy-policy`],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hair bg-night px-5 pt-24 pb-10 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="max-w-sm font-serif text-[1.7rem] leading-[1.2] md:col-span-5">
            Handmade 0% bitters from London, with gentian root at the backbone.{" "}
            <em className="text-cream/75">For women with a taste for more.</em>
          </p>
          {columns.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <p className="label text-mist">{c.title}</p>
              <ul className="mt-5 space-y-3 text-[15px]">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                      className="transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Logo className="mt-24 h-auto w-full text-ember" />

        <div className="label mt-8 flex flex-col justify-between gap-2 border-t border-hair pt-6 text-mist md:flex-row">
          <p>© {new Date().getFullYear()} Elixir. Handmade in London.</p>
          <p>ask me about my ritual.</p>
        </div>
      </div>
    </footer>
  );
}
