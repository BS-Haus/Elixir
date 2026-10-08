import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Courier_Prime } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import ScrollTheme from "@/components/ScrollTheme";
import "./globals.css";

// carved capitals for display lines and labels
const caps = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// the reading serif
const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

// the typewriter aside, carried over from the can
const mono = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Elixir · Handmade 0% bitters, London",
  description:
    "Hand-crafted non-alcoholic bitters from gentian root, red mandarin and cardamom. Made for presence and play.",
  openGraph: {
    title: "Elixir · Handmade 0% bitters, London",
    description: "Made for presence and play.",
    images: ["/img/v9/hero-table.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${caps.variable} ${serif.variable} ${mono.variable} antialiased`}>
      <body className="min-h-full">
        <ScrollTheme />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
