// Single source of truth for the two products.
// Checkout uses Shopify cart permalinks: https://{shop}/cart/{variantId}:{qty},...
// To sell the can, create it in Shopify and paste its variant ID + price below.

export const INSTAGRAM = "https://www.instagram.com/drink__elixir/";


export const SHOP_DOMAIN =
  process.env.NEXT_PUBLIC_SHOP_DOMAIN ?? "drink-elixir.co";

export type Product = {
  id: "can" | "bottle";
  index: string;
  name: string;
  format: string;
  variantId: string | null; // null = not on sale yet
  price: number | null; // GBP
  size: string;
  image: string;
  notes: string[];
  details: string[];
  blurb: string;
  ingredients: string;
};

export const products: Product[] = [
  {
    id: "bottle",
    index: "01",
    name: "The Elixir",
    format: "the bottle",
    variantId: "50378677584136",
    price: 24.99,
    size: "30 serves",
    image: "/img/v9/product-bottle.jpg",
    notes: ["gentian root", "red mandarin", "cardamom", "juniper"],
    details: ["non-alcoholic", "30 serves", "all natural", "hand-crafted"],
    blurb:
      "our non-alcoholic bitters, hand-crafted from foraged herbs and gentian root. three pipettes into tonic, a cocktail, or wherever the evening takes you.",
    ingredients:
      "gentian root, organic flavourings, water, vegetable glycerine & malic acid. stabilisers: sunflower lecithin, acacia gum.",
  },
  {
    id: "can",
    index: "02",
    name: "E&T",
    format: "the can",
    variantId: process.env.NEXT_PUBLIC_CAN_VARIANT_ID ?? null,
    price: process.env.NEXT_PUBLIC_CAN_PRICE
      ? Number(process.env.NEXT_PUBLIC_CAN_PRICE)
      : null,
    size: "200ml",
    image: "/img/v9/product-can.png",
    notes: ["cardamom", "bitter orange", "gentian root"],
    details: ["0.0% abv", "33 kcal", "low sugar", "vegan & gluten free"],
    blurb:
      "the ritual, ready-poured. elixir bitters with a light, bright tonic — crisp, gently bitter and made to be opened in good company.",
    ingredients:
      "filtered water, fructose, glycerin, natural flavourings (gentian, cardamom, coriander, bitter orange), malic acid, citric acid, sodium citrate, vitamin c (antioxidant), magnesium sulphate, pink himalayan rock salt.",
  },
];

export const formatPrice = (n: number) => `£${n.toFixed(2)}`;

export function checkoutUrl(lines: { variantId: string; qty: number }[]) {
  const items = lines.map((l) => `${l.variantId}:${l.qty}`).join(",");
  return `https://${SHOP_DOMAIN}/cart/${items}`;
}
