import type { Metadata } from "next";
import { Courier_Prime, Fahkwang, Tenor_Sans } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import ScrollTheme from "@/components/ScrollTheme";
import "./globals.css";

// Display: Moneta Sans, self-hosted from /public/fonts/moneta (local preview only until it is
// licensed for the web). Tenor Sans is the free stand-in that ships until then.
const displayFallback = Tenor_Sans({
  variable: "--font-tenor",
  subsets: ["latin"],
  weight: "400",
});

// Body and interface: a flared Thai-Latin face with a little ceremony in its terminals
const body = Fahkwang({
  variable: "--font-fahkwang",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${displayFallback.variable} ${body.variable} ${mono.variable} antialiased`}>
      <body className="min-h-full">
        <ScrollTheme />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
