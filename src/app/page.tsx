import Block from "@/components/Block";
import CartDrawer from "@/components/CartDrawer";
import Compare from "@/components/Compare";
import Film from "@/components/Film";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Questions from "@/components/Questions";
import Range from "@/components/Range";
import Split from "@/components/Split";
import Steps from "@/components/Steps";
import Voices from "@/components/Voices";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Split title="Feel good. Miss nothing." img="/img/shop-pour.jpg" alt="Elixir dropped into glasses of tonic">
          <p>
            Book the dinner. Say yes to the gig. Stay for one more song. Elixir is a 0% botanical bitters
            — gentian root, red mandarin, cardamom — that turns tonic into a proper grown-up drink.
          </p>
          <p>An ancient ritual for modern good times. Handmade in London.</p>
        </Split>
        <Range />
        <Steps />
        <Voices />
        <Compare />
        <Block />
        <Split
          title="Bitter is better."
          img="/img/shop-dropper.jpg"
          alt="A pipette of Elixir over tonic and orange"
          cta="Try it →"
          flip
        >
          <p>
            For centuries, bitters were taken before the moments that mattered. Gentian root — native to
            the mountains of Europe, prized since the ancient Greeks — gives Elixir its complex bitterness
            and subtle, earthy depth.
          </p>
          <p>Bitter first, then bright. An acquired taste — like everything worth having.</p>
        </Split>
        <Film />
        <Questions />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
