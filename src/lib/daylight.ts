// A day in the life of the page: scroll progress (0 → 1) maps to the time of day,
// and each stop is a full palette. Morning ivory, golden hour, a rose dusk,
// amber glass, then candlelit ember: the brand's two grounds, and the hours between.

type Palette = { bg: string; fg: string; muted: string; card: string; card2: string; accent: string };
type Stop = { at: number; p: Palette };

const DAY = { fg: "#1d1712", muted: "#6a5f55", accent: "#1d1712" };
const NIGHT = { fg: "#f3ebdf", muted: "#c2b3a3", accent: "#ee974f" };

export const stops: Stop[] = [
  { at: 0.0, p: { bg: "#edebe0", card: "#f6f4ec", card2: "#e3e1d3", ...DAY } }, // morning ivory
  { at: 0.25, p: { bg: "#ece6d8", card: "#f4efe4", card2: "#e2dac8", ...DAY } },
  { at: 0.45, p: { bg: "#eadcc4", card: "#f2e7d4", card2: "#dfceb2", ...DAY } }, // golden hour
  { at: 0.58, p: { bg: "#dfc5b4", card: "#eadacd", card2: "#d4b6a4", ...DAY } }, // rose dusk
  { at: 0.66, p: { bg: "#633f27", card: "#6e4830", card2: "#77503a", ...NIGHT } }, // amber glass
  { at: 0.8, p: { bg: "#2f2219", card: "#3a2a1e", card2: "#43311f", ...NIGHT } }, // candlelight
  { at: 1.0, p: { bg: "#241912", card: "#2f2219", card2: "#3a2a1e", ...NIGHT } }, // ember, late
];

const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (a: string, b: string, t: number) => {
  const A = hex(a);
  const B = hex(b);
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(" ")})`;
};

function luminance(rgb: string) {
  const [r, g, b] = rgb.match(/\d+/g)!.map((v) => {
    const c = Number(v) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function paletteAt(progress: number): Record<keyof Palette, string> {
  const x = Math.min(1, Math.max(0, progress));
  let i = 0;
  while (i < stops.length - 2 && x > stops[i + 1].at) i++;
  const a = stops[i];
  const b = stops[i + 1];
  const t = (x - a.at) / (b.at - a.at || 1);
  const keys = Object.keys(a.p) as (keyof Palette)[];
  const out = Object.fromEntries(keys.map((k) => [k, mix(a.p[k], b.p[k], t)])) as Record<keyof Palette, string>;
  // text follows the background's actual brightness, so it never sits mid-tone on mid-tone
  const ink = luminance(out.bg) > 0.3 ? DAY : NIGHT;
  out.fg = ink.fg;
  out.muted = ink === DAY ? (luminance(out.bg) > 0.55 ? DAY.muted : "#4f4338") : NIGHT.muted;
  out.accent = ink.accent;
  return out;
}

/** 07:00 at the top of the page → 23:30 at the bottom, in 15-minute steps. */
export function timeAt(progress: number) {
  const mins = 7 * 60 + Math.round((Math.min(1, Math.max(0, progress)) * (16.5 * 60)) / 15) * 15;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, "0")}.${String(m).padStart(2, "0")}`;
}

export function scrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? window.scrollY / max : 0;
}
