import CartDrawer from "@/components/CartDrawer";
import Day from "@/components/Day";
import Explained from "@/components/Explained";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
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
        <Explained />
        <Products />
        <Reviews />
        <Ritual />
        <Day />
        <Story />
        <Founder />
        <Guide />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
