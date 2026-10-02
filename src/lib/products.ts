// Single source of truth for the two products.
// Checkout uses Shopify cart permalinks: https://{shop}/cart/{variantId}:{qty},...
// To sell the can, create it in Shopify and paste its variant ID + price below.

export const SHOP_DOMAIN =
  process.env.NEXT_PUBLIC_SHOP_DOMAIN ?? "drink-elixir.co";

export type Product = {
  id: "can" | "bottle";
  name: string;
  kicker: string;
  descriptor: string;
  variantId: string | null; // null = not on sale yet
  price: number | null; // GBP
  size: string;
  image: string;
  spell: string[];
  facts: string[];
  blurb: string;
  ingredients: string;
  splineScene?: string; // set NEXT_PUBLIC_SPLINE_CAN / _BOTTLE to swap in your Spline scene
};

export const products: Product[] = [
  {
    id: "can",
    name: "herbal bitters & tonic",
    kicker: "the can",
    descriptor: "cardamom, bitter orange & gentian root",
    variantId: process.env.NEXT_PUBLIC_CAN_VARIANT_ID ?? null,
    price: process.env.NEXT_PUBLIC_CAN_PRICE
      ? Number(process.env.NEXT_PUBLIC_CAN_PRICE)
      : null,
    size: "200ml slim can",
    image: "/img/can-mockup.jpg",
    spell: [
      "a crack of the tab",
      "a pinch of bitter orange",
      "a whisper of cardamom",
      "gentian, to ground you",
    ],
    facts: ["0.0% abv", "33 cal", "low sugar", "vegan & gluten free"],
    blurb:
      "the ritual, ready-poured. elixir bitters meets a light, bright tonic — crisp, gently bitter and made to be opened in good company.",
    ingredients:
      "filtered water, fructose, glycerin, natural flavourings (gentian, cardamom, coriander, bitter orange), malic acid, citric acid, sodium citrate, vitamin c (antioxidant), magnesium sulphate, pink himalayan rock salt",
    splineScene:
      process.env.NEXT_PUBLIC_SPLINE_CAN ??
      "https://prod.spline.design/hljPgD0hN2DjOHz7/scene.splinecode",
  },
  {
    id: "bottle",
    name: "elixir bitters",
    kicker: "the bottle",
    descriptor: "gentian root, red mandarin, cardamom & juniper",
    variantId: "50378677584136",
    price: 24.99,
    size: "30 serves · dropper bottle",
    image: "/img/shop-product.jpg",
    spell: [
      "three parts gentian",
      "a pinch of red mandarin",
      "a whisper of cardamom",
      "one juniper berry, crushed",
    ],
    facts: ["non-alcoholic", "30 serves", "all natural", "hand-crafted"],
    blurb:
      "our non-alcoholic bitters, hand-crafted from foraged herbs and gentian root. three pipettes into tonic, a cocktail, or wherever the evening takes you.",
    ingredients:
      "gentian root, organic flavourings, water, vegetable glycerine & malic acid. stabilisers: sunflower lecithin, acacia gum",
    splineScene:
      process.env.NEXT_PUBLIC_SPLINE_BOTTLE ??
      "https://prod.spline.design/s2TJzUYpppquhRJX/scene.splinecode",
  },
];

export const formatPrice = (n: number) => `£${n.toFixed(2)}`;

export function checkoutUrl(lines: { variantId: string; qty: number }[]) {
  const items = lines.map((l) => `${l.variantId}:${l.qty}`).join(",");
  return `https://${SHOP_DOMAIN}/cart/${items}`;
}
