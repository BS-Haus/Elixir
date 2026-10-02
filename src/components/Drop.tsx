// A single drop of the potion: a small orb in the can's gradient. Abstract by design —
// any illustrated mark should come from the founders' own direction.
export function Drop({ className = "h-3 w-3" }: { className?: string }) {
  return <span aria-hidden className={`inline-block rounded-full bg-potion ${className}`} />;
}

export function Drops({ count, className = "h-2.5 w-2.5" }: { count: number; className?: string }) {
  return (
    <span aria-hidden className="inline-flex items-center gap-2">
      {Array.from({ length: count }, (_, i) => (
        <Drop key={i} className={className} />
      ))}
    </span>
  );
}
