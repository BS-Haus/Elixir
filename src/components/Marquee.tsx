const words = [
  "0.0% abv",
  "vegan & gluten free",
  "low sugar",
  "30 serves in every bottle",
  "all natural ingredients",
  "buy women built",
  "free shipping over £40",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden bg-espresso py-4 text-cream">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-type text-sm font-bold uppercase tracking-[0.2em]">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <span aria-hidden className="text-cream/50">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
