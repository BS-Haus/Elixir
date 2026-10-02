import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import Ritual from "@/components/Ritual";
import Story from "@/components/Story";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Ritual />
        <Story />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
