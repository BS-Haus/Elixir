import type { Metadata } from "next";
import { Archivo, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elixir · Handmade 0% bitters",
  description:
    "Handmade 0% bitters from London, with gentian root at the backbone. Three drops. Then everything.",
  openGraph: {
    title: "Elixir · Handmade 0% bitters",
    description: "Three drops. Then everything.",
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
