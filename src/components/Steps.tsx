import Image from "next/image";

// "The Formula" pillar as a ruled three-step how-to.
const steps = [
  { n: "01", t: "Ice, and plenty of it", d: "A tall glass, filled to the top." },
  { n: "02", t: "Three pipettes of Elixir", d: "Watch it bloom, amber into clear." },
  { n: "03", t: "Top with a light tonic", d: "Finish with a slice of orange — or grapefruit." },
];

export default function Steps() {
  return (
    <section id="how" className="scroll-mt-24 border-b border-line">
      <h2 className="caps border-b border-line py-6 text-center text-xl md:text-2xl">The signature serve.</h2>
      <div className="grid md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.n} className={`border-line ${i < 2 ? "border-b md:border-r md:border-b-0" : ""}`}>
            <div className="relative aspect-square bg-shell">
              <Image
                src={["/img/shop-dropper.jpg", "/img/shop-product.jpg", "/img/shop-pour.jpg"][i]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[13px] font-medium">
                {s.n}
              </span>
            </div>
            <div className="border-t border-line px-6 py-6">
              <p className="caps text-[15px]">{s.t}</p>
              <p className="mt-2 text-[14px] text-muted">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
