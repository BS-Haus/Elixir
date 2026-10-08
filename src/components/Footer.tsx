import { INSTAGRAM, SHOP_DOMAIN } from "@/lib/products";
import { Logo } from "./Logo";

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: "shop",
    links: [
      ["the elixir", "#bottle"],
      ["e&t (elixir & tonic)", "#can"],
      ["the ritual set", "#set"],
    ],
  },
  {
    title: "follow",
    links: [
      ["instagram", INSTAGRAM],
      ["tiktok", "https://www.tiktok.com/@drink__elixir"],
      ["contact", `https://${SHOP_DOMAIN}/pages/contact`],
    ],
  },
  {
    title: "information",
    links: [
      ["shipping", `https://${SHOP_DOMAIN}/policies/shipping-policy`],
      ["refunds", `https://${SHOP_DOMAIN}/policies/refund-policy`],
      ["privacy", `https://${SHOP_DOMAIN}/policies/privacy-policy`],
      ["terms", `https://${SHOP_DOMAIN}/policies/terms-of-service`],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="px-5 pt-24 pb-10 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[26px] leading-tight">
              Made for presence and play.
              <br />
              <em className="text-muted">Handmade 0% bitters, London.</em>
            </p>
            <span className="sticker mt-6">manifest responsibly.</span>
            <p className="voice mt-6 text-muted">free uk delivery over £40.</p>
          </div>
          {columns.map((c) => (
            <div key={c.title} className="md:col-span-2 md:col-start-auto">
              <p className="label text-muted">{c.title}</p>
              <ul className="mt-5 space-y-3 text-[18px]">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
                      className="transition-opacity hover:opacity-50"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Logo className="mt-24 h-auto w-full text-rust transition-colors duration-700" />

        <div className="note mt-8 flex flex-col justify-between gap-2 border-t border-ink/10 pt-6 text-muted md:flex-row">
          <p>© {new Date().getFullYear()} elixir drinks ltd</p>
          <p>124 city road, london ec1v 2nx</p>
        </div>
      </div>
    </footer>
  );
}
