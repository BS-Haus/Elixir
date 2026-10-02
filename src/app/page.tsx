import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Nav from "@/components/Nav";
import Philosophy from "@/components/Philosophy";
import Products from "@/components/Products";
import Ritual from "@/components/Ritual";
import Serves from "@/components/Serves";
import Story from "@/components/Story";
import Values from "@/components/Values";
import Voices from "@/components/Voices";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Values />
        <Philosophy />
        <Products />
        <Ritual />
        <Voices />
        <Story />
        <Serves />
        <Letter />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
