import type { Metadata } from "next";
import { DM_Mono, Hanken_Grotesk, Newsreader } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import Clock from "@/components/Clock";
import ScrollTheme from "@/components/ScrollTheme";
import "./globals.css";

const serif = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const sans = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const mono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Elixir — Non-Alcoholic Botanical Bitters",
  description:
    "Hand-crafted non-alcoholic bitters from gentian root, red mandarin and cardamom. All the ritual, none of the alcohol.",
  openGraph: {
    title: "Elixir — Non-Alcoholic Botanical Bitters",
    description: "All the ritual, none of the alcohol.",
    images: ["/img/shop-dropper.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} antialiased`}>
      <body className="min-h-full">
        <ScrollTheme />
        <CartProvider>{children}</CartProvider>
        <Clock />
      </body>
    </html>
  );
}
