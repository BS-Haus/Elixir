// The can's sticker language: typewriter caps on butter stars and sky dots.
export function Sticker({
  shape,
  children,
  className = "",
}: {
  shape: "star" | "circle" | "cloud";
  children: React.ReactNode;
  className?: string;
}) {
  const base =
    "pointer-events-none z-10 items-center justify-center text-center font-type text-[13px] leading-[1.05] font-bold uppercase text-espresso";
  if (shape === "circle")
    return (
      <div
        className={`${base} h-24 w-24 -rotate-12 rounded-full bg-sky ${className}`}
      >
        <span>{children}</span>
      </div>
    );
  if (shape === "cloud")
    return (
      <div
        className={`${base} h-28 w-28 rotate-6 rounded-[42%_58%_55%_45%/50%_45%_55%_50%] border-2 border-espresso bg-ivory ${className}`}
      >
        <span>{children}</span>
      </div>
    );
  return (
    <div className={`${base} h-28 w-28 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 animate-spin-slow fill-butter"
        aria-hidden
      >
        <polygon points="50,0 59,30 90,15 72,43 100,55 68,62 78,95 50,74 22,95 32,62 0,55 28,43 10,15 41,30" />
      </svg>
      <span className="relative rotate-12">{children}</span>
    </div>
  );
}
