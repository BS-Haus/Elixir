import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import Ritual from "@/components/Ritual";
import Story from "@/components/Story";
import Values from "@/components/Values";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Values />
        <Products />
        <Ritual />
        <Story />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
