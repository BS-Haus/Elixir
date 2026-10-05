import Bitter from "@/components/Bitter";
import CartDrawer from "@/components/CartDrawer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Join from "@/components/Join";
import Nav from "@/components/Nav";
import Reviews from "@/components/Reviews";
import Ritual from "@/components/Ritual";
import Shop from "@/components/Shop";
import StickyBuy from "@/components/StickyBuy";
import Values from "@/components/Values";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Values />
        <Shop />
        <Reviews />
        <Ritual />
        <History />
        <Bitter />
        <Faq />
        <Join />
      </main>
      <Footer />
      <StickyBuy />
      <CartDrawer />
    </>
  );
}
