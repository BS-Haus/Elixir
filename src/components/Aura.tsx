/**
 * A soft orb in the can's liquid colours, fading to nothing. Purely decorative:
 * place it inside a `relative` parent and position it with className.
 */
export function Aura({
  tone = "liquid",
  className = "",
}: {
  tone?: "liquid" | "gold" | "rose" | "violet";
  className?: string;
}) {
  const bg = {
    liquid: "aura-liquid",
    gold: "aura-gold",
    rose: "aura-rose",
    violet: "aura-violet",
  }[tone];
  return (
    <div
      aria-hidden
      className={`${bg} pointer-events-none absolute aspect-square blur-2xl ${className}`}
    />
  );
}
