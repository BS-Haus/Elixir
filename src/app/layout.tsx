import type { Metadata } from "next";
import { Archivo, Instrument_Serif } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

const sans = Archivo({ variable: "--font-archivo", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Elixir — Non-alcoholic botanical bitters · Made for presence and play",
  description:
    "Handmade 0% botanical bitters from London. Three pipettes into tonic. 30 serves in every bottle. Feel good without missing out.",
  openGraph: {
    title: "Elixir — Made for presence and play",
    description: "Handmade 0% botanical bitters. 30 serves in every bottle.",
    images: ["/img/hero-poster.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-full">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
