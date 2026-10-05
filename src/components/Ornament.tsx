// The Art Nouveau wordmark and brackets from the BS.HAUS identity deck, used as masks
// so they take the surrounding text colour (className "text-…").

const SRC = {
  wordmark: { src: "/img/orn/wordmark.png", ratio: "1659 / 354" },
  "bracket-left": { src: "/img/orn/bracket-left.png", ratio: "495 / 1179" },
  "bracket-right": { src: "/img/orn/bracket-right.png", ratio: "495 / 1179" },
} as const;

export function Ornament({
  name,
  className = "",
  label,
}: {
  name: keyof typeof SRC;
  className?: string;
  label?: string;
}) {
  const { src, ratio } = SRC[name];
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`inline-block bg-current ${className}`}
      style={{
        aspectRatio: ratio,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

/** Content framed by the Nouveau brackets — the identity's signature device. */
export function Framed({
  children,
  className = "",
  bracketClass = "h-40 md:h-64",
}: {
  children: React.ReactNode;
  className?: string;
  bracketClass?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 md:gap-10 ${className}`}>
      <Ornament name="bracket-left" className={`shrink-0 ${bracketClass}`} />
      <div className="min-w-0">{children}</div>
      <Ornament name="bracket-right" className={`shrink-0 ${bracketClass}`} />
    </div>
  );
}
