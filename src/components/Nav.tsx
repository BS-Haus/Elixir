"use client";

import { useCart } from "@/lib/cart";
import { Logo } from "./Logo";

const links = [
  ["Shop", "#range"],
  ["How to drink", "#how"],
  ["Reviews", "#reviews"],
  ["About", "#about"],
];

/** Hairline-ruled bar, Seoul-Tonic-style. */
export default function Nav() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-[45] bg-paper">
      <p className="label bg-ink py-2 text-center text-white">Free UK delivery over £40</p>
      <nav className="grid h-14 grid-cols-[auto_1fr_auto] items-center border-b border-line px-4 md:px-6">
        <a href="#top" aria-label="Elixir" className="text-rust">
          <Logo className="h-6 w-auto" />
        </a>
        <ul className="label hidden justify-center gap-14 md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="transition-opacity hover:opacity-50">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(true)} className="label justify-self-end transition-opacity hover:opacity-50">
          Cart ({count})
        </button>
      </nav>
    </header>
  );
}
