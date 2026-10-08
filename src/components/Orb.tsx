/**
 * A numbered orb in one of the can's liquid colours: a radial core, a slow
 * turning sheen, a lit rim and a soft outer glow, so it reads as glass, not a dot.
 */
const tones = {
  gold: { core: "#fbe3a6", mid: "#f3c160", edge: "#ee974f", glow: "rgba(243,193,96,.55)", ink: "#1d1712" },
  rose: { core: "#f1dbe8", mid: "#e7a6c4", edge: "#c16878", glow: "rgba(231,166,196,.5)", ink: "#1d1712" },
  violet: { core: "#d9b6f0", mid: "#9d679d", edge: "#5d60ce", glow: "rgba(157,103,157,.6)", ink: "#f3ebdf" },
  orange: { core: "#f6b179", mid: "#e97c3e", edge: "#c16878", glow: "rgba(233,124,62,.5)", ink: "#1d1712" },
};

export function Orb({
  tone,
  label,
  size = 56,
}: {
  tone: keyof typeof tones;
  label: string;
  size?: number;
}) {
  const c = tones[tone];
  return (
    <span
      className="relative isolate grid shrink-0 place-items-center rounded-full"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 30%, ${c.core} 0%, ${c.mid} 45%, ${c.edge} 100%)`,
        boxShadow: `0 0 ${size * 0.6}px ${size * 0.12}px ${c.glow}, inset 0 -${size * 0.1}px ${size * 0.25}px rgba(0,0,0,.18), inset 0 ${size * 0.06}px ${size * 0.12}px rgba(255,255,255,.45)`,
      }}
    >
      {/* a soft breath of light around the glass */}
      <span
        aria-hidden
        className="absolute -inset-[35%] -z-10 rounded-full blur-md"
        style={{ background: `radial-gradient(closest-side, ${c.glow}, transparent)`, animation: "breathe 5s ease-in-out infinite" }}
      />
      {/* a slow sheen turning across the glass */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-60 mix-blend-soft-light"
        style={{
          background: "conic-gradient(from 0deg, transparent 0 55%, rgba(255,255,255,.9) 70%, transparent 85%)",
          animation: "turn 9s linear infinite",
        }}
      />
      <span className="caps relative text-[18px]" style={{ color: c.ink }}>
        {label}
      </span>
    </span>
  );
}
