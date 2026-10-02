// Single source of truth for the two products.
// Checkout uses Shopify cart permalinks: https://{shop}/cart/{variantId}:{qty},...
// To sell E&T, create it in Shopify and set its variant ID + price.

export const INSTAGRAM = "https://www.instagram.com/drink__elixir/";

export const SHOP_DOMAIN =
  process.env.NEXT_PUBLIC_SHOP_DOMAIN ?? "drink-elixir.co";

export type Product = {
  id: "can" | "bottle";
  name: string;
  short: string;
  format: string;
  tagline: string;
  variantId: string | null; // null = not on sale yet
  price: number | null; // GBP
  image: string;
  notes: string;
  blurb: string;
  serve: string;
  ingredients: string;
};

export const products: Product[] = [
  {
    id: "bottle",
    name: "The Elixir",
    short: "The Elixir",
    format: "Handmade 0% bitters · 30 servings",
    tagline: "three drops. then everything.",
    variantId: "50378677584136",
    price: 24.99,
    image: "/img/shop-dropper.jpg",
    notes: "Gentian root, with hints of red mandarin, cardamom and juniper.",
    blurb:
      "Handmade 0% bitters in the amber dropper bottle. Drop into tonic, add to a cocktail, or take it wherever the night goes.",
    serve:
      "Three drops into tonic over ice. Add to a cocktail, or take it wherever the night goes.",
    ingredients:
      "Gentian root, organic flavourings, water, vegetable glycerine & malic acid. Stabilisers: sunflower lecithin, acacia gum.",
  },
  {
    id: "can",
    name: "E&T · Elixir & Tonic",
    short: "E&T",
    format: "Elixir & Tonic · 200ml can",
    tagline: "keep it in the fridge door.",
    variantId: process.env.NEXT_PUBLIC_CAN_VARIANT_ID ?? null,
    price: process.env.NEXT_PUBLIC_CAN_PRICE
      ? Number(process.env.NEXT_PUBLIC_CAN_PRICE)
      : null,
    image: "/img/can-night.jpg",
    notes: "Gentian root, with bitter orange and cardamom.",
    blurb:
      "Elixir & Tonic, ready-poured in a 200ml can. Chill, pour over ice, and the ritual is already done.",
    serve: "Chill. Pour over ice. Add a twist of orange if the night calls for it.",
    ingredients:
      "Filtered water, fructose, glycerin, natural flavourings (gentian, cardamom, coriander, bitter orange), malic acid, citric acid, sodium citrate, vitamin C (antioxidant), magnesium sulphate, pink Himalayan rock salt.",
  },
];

export const formatPrice = (n: number) => `£${n.toFixed(2)}`;

export function checkoutUrl(lines: { variantId: string; qty: number }[]) {
  const items = lines.map((l) => `${l.variantId}:${l.qty}`).join(",");
  return `https://${SHOP_DOMAIN}/cart/${items}`;
}
