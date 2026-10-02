import type { Metadata } from "next";
import { Courier_Prime, Fraunces, Instrument_Sans } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const courier = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "elixir · made for presence and play",
  description:
    "non-alcoholic botanical bitters and herbal bitters & tonic. hand-crafted from gentian root, bitter orange and cardamom. the drink that savours the moment.",
  openGraph: {
    title: "elixir · made for presence and play",
    description: "non-alcoholic botanical bitters & tonic.",
    images: ["/img/can-mockup.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${courier.variable} antialiased`}
    >
      <body className="min-h-full">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
