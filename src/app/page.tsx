import CartDrawer from "@/components/CartDrawer";
import Faq from "@/components/Faq";
import FirstOrder from "@/components/FirstOrder";
import FirstOrderPopup from "@/components/FirstOrderPopup";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Manifest from "@/components/Manifest";
import Nav from "@/components/Nav";
import Nervous from "@/components/Nervous";
import Reviews from "@/components/Reviews";
import Ritual from "@/components/Ritual";
import Shop from "@/components/Shop";
import WhyBitters from "@/components/WhyBitters";
import Wild from "@/components/Wild";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Shop />
        <Reviews />
        <WhyBitters />
        <Nervous />
        <Ritual />
        <Manifest />
        <Founder />
        <Wild />
        <Faq />
        <FirstOrder />
      </main>
      <Footer />
      <CartDrawer />
      <FirstOrderPopup />
    </>
  );
}
