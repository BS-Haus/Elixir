import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const sans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
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
    <html lang="en" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body className="min-h-full">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
