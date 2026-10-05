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
  title: "Elixir — Alcohol-free alchemy · Handmade 0% botanical bitters",
  description:
    "Handmade 0% botanical bitters from London, with gentian root at the backbone. Three pipettes into tonic. 30 serves in every bottle.",
  openGraph: {
    title: "Elixir — Alcohol-free alchemy",
    description: "Handmade 0% botanical bitters. 30 serves in every bottle.",
    images: ["/img/hero-poster.jpg"],
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
