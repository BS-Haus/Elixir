// Single source of truth for the two products.
// Checkout uses Shopify cart permalinks: https://{shop}/cart/{variantId}:{qty},...
// To sell E&T, create it in Shopify and set NEXT_PUBLIC_CAN_VARIANT_ID + NEXT_PUBLIC_CAN_PRICE.

export const INSTAGRAM = "https://www.instagram.com/drink__elixir/";
export const SHOP_DOMAIN = process.env.NEXT_PUBLIC_SHOP_DOMAIN ?? "drink-elixir.co";
export const HERO_VIDEO =
  "https://cdn.shopify.com/videos/c/o/v/9f8a0f63a0744bfcaad1fbb20f1ef0bc.mp4";

export type Product = {
  id: "can" | "bottle";
  name: string;
  format: string;
  variantId: string | null; // null = not on sale yet
  price: number | null; // GBP
  serves: number;
  images: { src: string; alt: string }[];
  notes: string;
  blurb: string;
  serve: string;
  ingredients: string;
};

export const products: Product[] = [
  {
    id: "bottle",
    name: "The Elixir",
    format: "Handmade 0% botanical bitters · 30ml",
    variantId: "50378677584136",
    price: 24.99,
    serves: 30,
    images: [
      { src: "/img/shop-product.jpg", alt: "The Elixir amber dropper bottle held up to the light" },
      { src: "/img/shop-dropper.jpg", alt: "A pipette of Elixir over tonic with ice and orange" },
      { src: "/img/shop-pour.jpg", alt: "Elixir dropped into a row of tonic glasses with grapefruit" },
    ],
    notes: "Gentian root · red mandarin · cardamom · juniper",
    blurb:
      "Our non-alcoholic bitters, hand-crafted in London from foraged herbs and gentian root. Three pipettes into tonic, a cocktail, or wherever the evening takes you.",
    serve:
      "Three pipettes of Elixir with a light tonic, ice and a slice of orange. Or try grapefruit, soda, or your favourite zero-proof cocktail.",
    ingredients:
      "Gentian root, organic flavourings, water, vegetable glycerine & malic acid. Stabilisers: sunflower lecithin, acacia gum.",
  },
  {
    id: "can",
    name: "E&T · Elixir & Tonic",
    format: "Ready-poured · 200ml can",
    variantId: process.env.NEXT_PUBLIC_CAN_VARIANT_ID ?? null,
    price: process.env.NEXT_PUBLIC_CAN_PRICE ? Number(process.env.NEXT_PUBLIC_CAN_PRICE) : null,
    serves: 1,
    images: [{ src: "/img/can.jpg", alt: "E&T Elixir & Tonic, 200ml can" }],
    notes: "Gentian root · bitter orange · cardamom",
    blurb: "The ritual, ready-poured. Chill, pour over ice, and it's already done.",
    serve: "Chilled, over ice, with a twist of orange.",
    ingredients:
      "Filtered water, fructose, glycerin, natural flavourings (gentian, cardamom, coriander, bitter orange), malic acid, citric acid, sodium citrate, vitamin C (antioxidant), magnesium sulphate, pink Himalayan rock salt.",
  },
];

export const formatPrice = (n: number) => `£${n.toFixed(2)}`;

export function checkoutUrl(lines: { variantId: string; qty: number }[]) {
  const items = lines.map((l) => `${l.variantId}:${l.qty}`).join(",");
  return `https://${SHOP_DOMAIN}/cart/${items}`;
}
