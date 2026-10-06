// A day in the life of the page: scroll progress (0 → 1) maps to the time of day,
// and each stop is a full palette. Colours come from the brand + strategy deck
// (cream, sand, amber, rust, deep olive, espresso).

type Palette = { bg: string; fg: string; muted: string; card: string; card2: string; accent: string };
type Stop = { at: number; p: Palette };

const DAY = { fg: "#1f1a17", muted: "#6f655c", accent: "#8b3f24" };
const NIGHT = { fg: "#efe8dd", muted: "#b5a899", accent: "#d39a5e" };

export const stops: Stop[] = [
  { at: 0.0, p: { bg: "#f4efe7", card: "#e9e1d5", card2: "#e2d3bd", ...DAY } }, // dawn
  { at: 0.22, p: { bg: "#f2e8d8", card: "#e8dbc6", card2: "#dfcbad", ...DAY } }, // morning
  { at: 0.42, p: { bg: "#ecd9bb", card: "#e2caa6", card2: "#d6b88c", ...DAY } }, // golden hour
  { at: 0.5, p: { bg: "#e4c7a0", card: "#d9b68a", card2: "#cda679", ...DAY, muted: "#5f5246" } },
  { at: 0.56, p: { bg: "#6a4430", card: "#7a5038", card2: "#835a40", ...NIGHT, muted: "#d2c0ad" } }, // dusk
  { at: 0.72, p: { bg: "#3d3f27", card: "#484a30", card2: "#525438", ...NIGHT } }, // evening, deep olive
  { at: 0.88, p: { bg: "#241a14", card: "#2f231b", card2: "#382a20", ...NIGHT } }, // night
  { at: 1.0, p: { bg: "#1d1613", card: "#281e18", card2: "#30241c", ...NIGHT } }, // late
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
