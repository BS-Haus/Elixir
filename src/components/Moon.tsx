// Fine-line moon phases — the brand's one recurring mark. phase: 0 new · 0.25 crescent · 0.5 half · 1 full.
export function Moon({
  phase = 0.25,
  className = "",
}: {
  phase?: number;
  className?: string;
}) {
  // lit area is drawn as the circle minus an offset circle
  const off = 40 * phase; // shadow circle slides away as the moon fills
  const id = `m${Math.round(phase * 100)}`;
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className} fill="none">
      <defs>
        <mask id={id}>
          <circle cx="24" cy="24" r="20" fill="white" />
          {phase < 1 && <circle cx={24 - off} cy="24" r="20" fill="black" />}
        </mask>
      </defs>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="0.75" />
      {phase > 0 && (
        <circle cx="24" cy="24" r="20" fill="currentColor" mask={`url(#${id})`} opacity="0.9" />
      )}
    </svg>
  );
}
