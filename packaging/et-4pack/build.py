"""
Builds the E&T 4-pack carton artwork at true scale (mm), from one template:
  carton.html  — the flat artwork alone, page-sized for print-to-PDF (3mm bleed)
  index.html   — the shareable page that presents it (written separately, embeds carton markup)
"""
import pathlib, re

HERE = pathlib.Path(__file__).parent

# ---- geometry (mm). Trim origin = top-left of the tuck flap's column ----
G = 15          # glue flap
W = 110         # panel width
D = 110         # depth (lid/base)
H = 138         # body height
TUCK = 15
DUST = 52       # dust flap depth
X = [G, G + W, G + 2 * W, G + 3 * W]       # left edge of P1..P4
Y_LID = TUCK
Y_BODY = TUCK + D
Y_BASE = Y_BODY + H
TOTAL_W = G + 4 * W
TOTAL_H = Y_BASE + D
BLEED = 3

def star(cls="star"):
    return f'<img class="{cls}" src="star.svg" alt="">'

def logo(cls="logo"):
    return f'<img class="{cls}" src="logo.svg" alt="elixir">'

def orb(tone, n):
    return f'<span class="orb orb-{tone}">{n}</span>'

# ---------------- panels ----------------
P1_LEGAL = f"""
<section class="panel body legal" style="left:{X[0]}mm;top:{Y_BODY}mm">
  <div class="pad">
    <h3 class="primary sm">Nutrition</h3>
    <table class="nut">
      <thead><tr><th>Typical values</th><th>per 100ml</th><th>per 200ml can</th></tr></thead>
      <tbody>
        <tr><td>Energy</td><td>68kJ / 16kcal</td><td>136kJ / 33kcal</td></tr>
        <tr><td>Fat</td><td>0g</td><td>0g</td></tr>
        <tr><td class="in">of which saturates</td><td>0g</td><td>0g</td></tr>
        <tr><td>Carbohydrate</td><td>4.1g</td><td>8.1g</td></tr>
        <tr><td class="in">of which sugars</td><td>2.4g</td><td>4.8g</td></tr>
        <tr><td>Fibre</td><td>0g</td><td>0g</td></tr>
        <tr><td>Protein</td><td>0g</td><td>0g</td></tr>
        <tr><td>Salt</td><td>0g</td><td>0g</td></tr>
      </tbody>
    </table>
    <p class="legaltext"><b>Ingredients:</b> Filtered Water, Fructose, Glycerin, Natural Flavourings (Gentian, Cardamom, Coriander, Bitter Orange), Malic Acid, Citric Acid, Sodium Citrate, Vitamin C (Antioxidant), Magnesium Sulphate, Pink Himalayan Rock Salt.</p>
    <p class="legaltext">Herbal bitters &amp; tonic. Alcohol free, 0.0% ABV. Vegan &amp; gluten free. Store in a cool, dry place away from direct sunlight. Once opened, consume immediately. Best served chilled.</p>
    <div class="legalfoot">
      <p class="legaltext">Elixir Drinks Ltd<br>124 City Road<br>London EC1V 2NX</p>
      <p class="legaltext right">Best before &amp; lot: see base<br><span class="qty">4 × 200ml <svg class="emark" viewBox="0 0 100 100" aria-label="e"><path d="M14 52 H86 C86 28 70 12 50 12 C28 12 12 30 12 52 C12 74 28 90 50 90 C62 90 72 85 79 77" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/></svg></span></p>
    </div>
  </div>
  <div class="glow"></div>
</section>"""

P2_FRONT = f"""
<section class="panel body front" style="left:{X[1]}mm;top:{Y_BODY}mm">
  <div class="glow strong"></div>
  <div class="pad center">
    {star()}
    {logo("logo front-logo")}
    <p class="secondary">a pause in a can.</p>
  </div>
  <div class="hero-can">
    <div class="can-shadow"></div>
    <img class="can" src="can.png" alt="a can of elixir herbal bitters &amp; tonic">
  </div>
  <div class="front-foot">
    <h2 class="primary">Herbal bitters &amp; tonic</h2>
    <p class="meta">4 × 200ml <svg class="emark" viewBox="0 0 100 100" aria-label="e"><path d="M14 52 H86 C86 28 70 12 50 12 C28 12 12 30 12 52 C12 74 28 90 50 90 C62 90 72 85 79 77" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/></svg> · 0.0% abv</p>
  </div>
</section>"""

P3_WHY = f"""
<section class="panel body why" style="left:{X[2]}mm;top:{Y_BODY}mm">
  <div class="glow"></div>
  <div class="pad">
    <p class="meta">why bitters · <i>gentiana lutea</i></p>
    <h3 class="primary stack"><span class="small">bitter is</span><span>better.</span></h3>
    <p class="secondary">Gentian, the original bitter.</p>
    <p class="bodytext">Long before the apothecary, the wise women reached for bitter first. Gentian, a mountain root years in the making, is the backbone of the great aperitifs. We pour it with a light, bright tonic, at 0.0%.</p>
    <dl class="notes">
      <div><dt>Bitter orange</dt><dd>bright zest</dd></div>
      <div><dt>Cardamom</dt><dd>warm spice</dd></div>
      <div><dt>Coriander</dt><dd>soft citrus</dd></div>
      <div><dt>Gentian</dt><dd>a clean, dry finish</dd></div>
    </dl>
  </div>
</section>"""

P4_RITUAL = f"""
<section class="panel body ritual" style="left:{X[3]}mm;top:{Y_BODY}mm">
  <div class="glow"></div>
  <div class="pad">
    <p class="meta">the signature serve</p>
    <h3 class="primary stack"><span>the ritual.</span></h3>
    <p class="secondary">Drop in.</p>
    <ol class="steps">
      <li>{orb("gold","I")}<div><b>Chill.</b><span>straight from the fridge.</span></div></li>
      <li>{orb("orange","II")}<div><b>Ice.</b><span>a heavy glass, filled generously.</span></div></li>
      <li>{orb("rose","III")}<div><b>Pour.</b><span>slowly, to keep it bright.</span></div></li>
      <li>{orb("violet","IV")}<div><b>Orange. Pause.</b><span>a moment that is yours.</span></div></li>
    </ol>
  </div>
  <p class="meta bottom">drink-elixir.co · @drink__elixir</p>
</section>"""

LID = f"""
<section class="panel lid" style="left:{X[1]}mm;top:{Y_LID}mm">
  <div class="glow soft"></div>
  <div class="pad center lidpad">
    {star()}
    <h2 class="primary lockup"><span class="small">made for</span><span>presence</span><span class="small">and play.</span></h2>
    {logo("logo lid-logo")}
  </div>
</section>"""

TUCK_FLAP = f"""
<section class="panel tuck" style="left:{X[1]}mm;top:0mm">
  <p class="meta">open here</p>
</section>"""

def dust(x, y, top, line):
    cls = "dust top" if top else "dust bottom"
    return f"""
<section class="panel {cls}" style="left:{x}mm;top:{y}mm">
  <div class="dustpad">{star("star tiny")}<p class="meta">{line}</p></div>
</section>"""

DUSTS = "".join([
    dust(X[0], Y_BODY - DUST, True, "a pause in a can."),
    dust(X[2], Y_BODY - DUST, True, "drop in."),
    dust(X[3], Y_BODY - DUST, True, "manifest responsibly."),
    dust(X[0], Y_BASE, False, "handmade in london."),
    dust(X[2], Y_BASE, False, "three drops. then everything."),
    dust(X[3], Y_BASE, False, "a pause in a can."),
])

BASE = f"""
<section class="panel base" style="left:{X[1]}mm;top:{Y_BASE}mm">
  <div class="pad">
    <p class="meta">base · crash-lock folds per printer dieline</p>
    <div class="keepclear inkjet"><b>Best before</b> DD/MM/YYYY<br><b>Lot</b> XXXXXX<span>inkjet area · keep clear</span></div>
    <div class="baserow">
      <div class="keepclear ean">Outer EAN-13<span>new code, not the can’s</span></div>
      <div class="keepclear oprl">OPRL<span>recycling marks</span></div>
    </div>
    <p class="meta">recycle the carton. rinse &amp; recycle the cans.</p>
  </div>
</section>"""

GLUE = f"""<section class="panel glue" style="left:0mm;top:{Y_BODY + 6}mm"><p class="meta">glue</p></section>"""

# ---------------- dieline (reference only; printer supplies the real one) ----------------
def dieline():
    cut, fold = [], []
    # body block outline + flaps (cut), panel joins (fold)
    for i, x in enumerate(X):
        fold.append(f'<line x1="{x}" y1="{Y_BODY}" x2="{x}" y2="{Y_BASE}"/>')
    fold += [f'<line x1="{X[0]}" y1="{Y_BODY}" x2="{TOTAL_W}" y2="{Y_BODY}"/>',
             f'<line x1="{X[0]}" y1="{Y_BASE}" x2="{TOTAL_W}" y2="{Y_BASE}"/>',
             f'<line x1="{X[1]}" y1="{Y_LID}" x2="{X[2]}" y2="{Y_LID}"/>']
    cut += [
        # lid + tuck
        f'<path d="M{X[1]} {Y_BODY} V{Y_LID} H{X[1]+4} Q{X[1]+4} 0 {X[1]+14} 0 H{X[2]-14} Q{X[2]-4} 0 {X[2]-4} {Y_LID} H{X[2]} V{Y_BODY}"/>',
        # base
        f'<path d="M{X[1]} {Y_BASE} V{TOTAL_H} H{X[2]} V{Y_BASE}"/>',
        # right edge
        f'<line x1="{TOTAL_W}" y1="{Y_BODY}" x2="{TOTAL_W}" y2="{Y_BASE}"/>',
        # glue flap
        f'<path d="M{X[0]} {Y_BODY} L0 {Y_BODY+6} V{Y_BASE-6} L{X[0]} {Y_BASE}"/>',
    ]
    for x in (X[0], X[2], X[3]):
        cut.append(f'<path d="M{x} {Y_BODY} L{x+8} {Y_BODY-DUST} H{x+W-8} L{x+W} {Y_BODY}"/>')
        cut.append(f'<path d="M{x} {Y_BASE} L{x+8} {Y_BASE+DUST} H{x+W-8} L{x+W} {Y_BASE}"/>')
    return (f'<svg class="dieline" viewBox="0 0 {TOTAL_W} {TOTAL_H}" width="{TOTAL_W}mm" height="{TOTAL_H}mm" aria-hidden="true">'
            f'<g class="cut">{"".join(cut)}</g><g class="fold">{"".join(fold)}</g></svg>')

CARTON = f"""
<div class="carton" style="width:{TOTAL_W}mm;height:{TOTAL_H}mm">
  <div class="flood"></div>
  {GLUE}{TUCK_FLAP}{LID}{DUSTS}{P1_LEGAL}{P2_FRONT}{P3_WHY}{P4_RITUAL}{BASE}
  {dieline()}
</div>"""

CSS = (HERE / "carton.css").read_text()

print_html = f"""<!doctype html><html><head><meta charset="utf-8"><title>E&amp;T carton artwork</title>
<link rel="stylesheet" href="fonts.css">
<style>
@page {{ size: {TOTAL_W + 2*BLEED}mm {TOTAL_H + 2*BLEED}mm; margin: 0 }}
html,body {{ margin:0; background:#241912 }}
.sheet {{ width:{TOTAL_W + 2*BLEED}mm; height:{TOTAL_H + 2*BLEED}mm; position:relative; overflow:hidden }}
.sheet .carton {{ position:absolute; left:{BLEED}mm; top:{BLEED}mm }}
.sheet .flood {{ inset:-{BLEED}mm }}
{CSS}
</style></head><body><div class="sheet show-die">{CARTON}</div></body></html>"""

(HERE / "carton.html").write_text(print_html)
(HERE / "carton-markup.html").write_text(CARTON)
print("ok", TOTAL_W, TOTAL_H)
