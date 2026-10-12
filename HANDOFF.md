# Elixir — handover

The Elixir website (drink-elixir) and the E&T carton artwork. Written for Charlotte and her Claude agent, so you can pick this up and keep building.

- **Live site:** https://elixir-lac-pi.vercel.app (Vercel deploys `main` automatically on every push)
- **Repo:** https://github.com/BS-Haus/Elixir
- **Shop:** checkout runs on the existing Shopify store, `drink-elixir.co`

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # check before pushing
```

Next.js 16 (App Router) with Tailwind v4 and `motion` for animation. This Next.js version differs from older ones: read `node_modules/next/dist/docs/` before writing routing or data code (see `AGENTS.md`).

## How the site is put together

One page, `src/app/page.tsx`, in this order:

| Section | File | Notes |
|---|---|---|
| Nav + rotating ticker | `components/Nav.tsx` | Ticker lines are the `ticker` array. The clock runs 07.00 → 23.30 as you scroll. |
| Hero lockup | `components/Hero.tsx` | "Made for / presence / and play." |
| Shop (3 cards) | `components/Shop.tsx` | Cut-out product on a lit card; lifestyle photo on hover. |
| Reviews | `components/Reviews.tsx` | Real customer quotes in `lib/content.ts`. |
| Why bitters | `components/WhyBitters.tsx` | |
| Tongue → nervous system | `components/Nervous.tsx` | See the claims note below. |
| The ritual | `components/Ritual.tsx` | Four step photos + three intentions. |
| Manifest responsibly | `components/Manifest.tsx` | |
| Founders | `components/Founder.tsx` | Charlotte & Seb. |
| In the wild | `components/Wild.tsx` | |
| FAQ | `components/Faq.tsx` | |
| 10% first order | `components/FirstOrder.tsx` + `FirstOrderPopup.tsx` | The popup shows once per visitor. |
| Footer, bag | `components/Footer.tsx`, `CartDrawer.tsx` | |

**Day to night.** `lib/daylight.ts` holds the palette stops (morning ivory → golden hour → rose dusk → amber → candlelight). `components/ScrollTheme.tsx` rewrites the colour variables as you scroll, so use the theme colours (`bg-paper`, `text-ink`, `text-muted`, `bg-raised`, `bg-tint`) rather than fixed hex values, and sections will follow the time of day.

**Products and checkout.** `lib/products.ts` is the single source of truth. Checkout is a Shopify cart permalink, `https://drink-elixir.co/cart/{variantId}:{qty}`. The bottle's variant ID is set. To sell the can, create it in Shopify, then set `NEXT_PUBLIC_CAN_VARIANT_ID` and `NEXT_PUBLIC_CAN_PRICE` in Vercel's environment variables.

**Email sign-ups** post to Shopify's built-in customer form, tagged so you can segment in Shopify → Customers:
- `newsletter, first-order` (footer panel), plus `popup` from the popup
- `newsletter, waitlist-can` and `waitlist-set` from the "notify me" boxes on the shop cards

## Brand system (in `src/app/globals.css`)

| Role | Face | Utility |
|---|---|---|
| Primary: headlines | Cinzel, capitals | `caps` |
| Secondary: lead lines, quotes, product names | Cormorant Garamond | `lede` |
| Body: paragraphs, facts, buttons | Jost (default on `body`) | — |
| Labels, nav | Cinzel, small tracked caps | `label` |
| Typewriter notes and stickers | Courier Prime | `note`, `voice`, `sticker` |

Colour: ivory `#edebe0`, candlelight ember `#241912`, the can's liquid gold `#ee974f` → orange `#e97c3e` → rose `#c16878` → violet `#5d60ce`, and the wordmark's rust `#8b3f24`. Glows use `aura-gold`, `aura-rose`, `aura-violet`, `aura-liquid` and `aura-candle`. Orbs come from `components/Orb.tsx`, the star from `components/Star.tsx`, and the wordmark from `components/Logo.tsx`. Motion helpers (`Words`, `Parallax`, `Reveal`) are in `components/Motion.tsx` and `components/Reveal.tsx`.

All fonts are free Google Fonts. Don't add commercial fonts to this repo: it's public, so the files would be redistributed.

## Next jobs (Charlotte's list)

1. **Product pages.** Add `src/app/products/[slug]/page.tsx`, driven by `lib/products.ts`, with gallery, price, add to bag, details, ingredients and how to serve. Link each Shop card and the bag to its page. Keep the home page as the brand story.
2. **Early sign-up for the cans.** The "notify me" form already exists in `Shop.tsx` (`Notify`). For a stronger launch, reuse it on the E&T product page and in a small banner. It tags sign-ups `waitlist-can` so you can email them at launch.
3. **Make the 10% real.** In Shopify, create the discount and an automated welcome email for customers tagged `first-order`. The site only collects the email.

## Things to check before launch

- **Health claims.** UK law only allows approved health claims on food, on packs and in marketing. Keep bitters copy to taste, heritage and ritual. The nervous-system section and the FAQ frame it as traditional herbal lore ("a drink, not a treatment"). Have someone sign that wording off, or soften it.
- **Can label.** The printed cans show per-can values under a "per 100ml" heading. The carton below is correct.
- **"Buy Women Built" badge.** Only use it if Elixir is a member.

## Packaging: `packaging/et-4pack/`

The E&T 4 × 200ml carton, flat, at true scale (110 × 110 × 138mm, 3mm bleed).

- `ET-carton-artwork-only.pdf`: send this to the printer to place on their dieline.
- `ET-carton-with-dieline.pdf`: the same, with a reference cut line (magenta) and fold line (cyan dashed).
- `preview.png`: a quick look.
- `build.py` + `carton.css`: the source. Edit the copy or layout, run `python3 build.py`, open `carton.html` in Chrome and print to PDF (no margins, background graphics on). The PDF page size is set by the file.

The printer must supply their own dieline: the one here is for reference only. Ask them for a proof. Legal text is 7.5pt or larger (x-height over 1.2mm) and the ℮ mark is 3.2mm tall. Best-before, lot and barcode sit in light boxes on the base so they scan.
