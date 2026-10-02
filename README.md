# elixir — drink-elixir.co

A one-page site for elixir: split hero (3D can ↔ bottle), the two products, the ritual, the story.
Built in the brand's "route two · the potion" direction: espresso / ivory, orange→cobalt potion gradient,
Fraunces + Instrument Sans + typewriter sticker type, all lowercase.

## Run

```bash
npm install
npm run dev
```

## How it's wired

- **Products** — `src/lib/products.ts` is the single source of truth (copy, price, Shopify variant IDs).
- **Commerce** — no Shopify API keys. The bag lives in the browser and checkout redirects to a
  Shopify cart permalink (`https://{shop}/cart/{variantId}:{qty}`) which lands on Shopify checkout.
  Shipping, tax, discounts and payments stay in Shopify.
- **The can** — `src/components/CanScene.tsx`: three.js cylinder wrapped with the V5 label
  (`public/img/can-label.jpg`). Drag to spin. Shows "coming soon" until `NEXT_PUBLIC_CAN_VARIANT_ID` is set.
- **The bottle** — illustrated bottle with pointer tilt + glass highlight (`ProductStage.tsx`).
- **Spline** — set `NEXT_PUBLIC_SPLINE_CAN` / `NEXT_PUBLIC_SPLINE_BOTTLE` to a `.splinecode` URL and the hero
  uses your Spline scene instead. Keep the background transparent and the object centred.

## Going live (Vercel)

1. Import the repo in Vercel, add the env vars from `.env.example`.
2. In Shopify → Settings → Domains, add `shop.drink-elixir.co` and make it primary, so checkout keeps working.
3. Point `drink-elixir.co` at Vercel and set `NEXT_PUBLIC_SHOP_DOMAIN=shop.drink-elixir.co`.
