# Arden UI 1:1 — Fresh Runtime Diff

Date: 2026-08-29  
Reference: `http://localhost:3000/`  
Current implementation: `http://localhost/mytest/`  
Mode: read-only UI audit; no UI source was modified.

## Verdict

The current WordPress implementation is **not pixel-perfect**. The earlier 84/84 result remains useful for runtime safety, but its visual gate is not a pixel gate: it allowed broad size ratios and sampled only a few generic elements. Fresh isolated-browser evidence shows systemic width/grid failures, responsive divergence, missing icon markup, and route-level structural differences.

Fresh evidence:

- 18 representative routes × 4 widths (`1440`, `1024`, `768`, `390`) = 72 fresh reference/current pairs.
- Full-page screenshots: `wordpress/audit/ui-1to1-20260829/`.
- Computed styles/geometry: `computed-style-comparison.json` in that folder.
- Logged-out browser contexts: WordPress admin bar was not present in this run.

## Highest-leverage differences and exact fixes

### UI-01 — Flatsome constrains the entire Home inside a 1170 px content row

**Screenshot reference:** `ui-1to1-20260829/home-1440-reference.png`  
**Current implementation:** `ui-1to1-20260829/home-1440-current.png`

At 1440 px:

| Element | Reference | Current |
|---|---:|---:|
| Full-width hero | `x 0 / width 1440 / height 605.6` | `x 150 / width 1140 / height 810.1` |
| Hero content/grid | `x 112 / width 1216` | `x 196 / width 1048` |
| H1 box | `x 112 / width 689.3 / height 169.6` | `x 211 / width 581.3 / height 220.8` |
| Hero image | `434.7 × 325.5` | `364.7 × 273.5` |

The visible result is narrower cards, extra H1 wrapping, misplaced media and wrong section rhythm.

**Exact CSS fix:** remove the Flatsome page wrapper width before styling individual sections.

```css
.arden-site .page-wrapper {
  padding: 0 !important;
}

.arden-site .row-main,
.arden-site .row-main > .col,
.arden-site .row-main > .col > .col-inner {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  flex-basis: 100% !important;
}

.arden-page > .section {
  width: 100% !important;
  margin-inline: 0 !important;
}

.arden-page > .section > .section-content {
  width: 100% !important;
  max-width: 1280px !important;
  margin-inline: auto !important;
  padding-inline: 32px !important;
}

.arden-page > .section > .section-content > .row {
  width: 100% !important;
  max-width: 1216px !important;
  margin-inline: auto !important;
}

@media (max-width: 1023px) {
  .arden-page > .section > .section-content { padding-inline: 24px !important; }
}

@media (max-width: 549px) {
  .arden-page > .section > .section-content { padding-inline: 16px !important; }
}
```

Do not apply the `1280/1216` rule blindly to an imported React block that already contains its own `.max-w-7xl`; scope either the Flatsome adapter or the imported utility container, not both.

### UI-02 — Imported React grids are destroyed by Flatsome `.col` percentage widths

**Screenshot reference:** `about-1440-reference.png`  
**Current implementation:** `about-1440-current.png`

The About USP grid parent is already correct: four `296 px` grid tracks with `32 px` gaps. But each Flatsome child `.col.large-3` is only `74 px` wide. The reference card is `280 px` wide. This causes vertical letter wrapping and adds `4,382 px` to the desktop page.

**Exact CSS fix:** neutralize Flatsome column sizing only when a WordPress `.row` is also a React/Tailwind grid.

```css
.arden-react-page .row.grid > .col {
  width: auto !important;
  max-width: none !important;
  flex-basis: auto !important;
  padding: 0 !important;
  margin: 0 !important;
}

.arden-react-page .row.grid > .col > .col-inner {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.arden-react-page .row.grid {
  width: 100% !important;
  max-width: none !important;
  margin-inline: 0 !important;
}
```

Expected verification for the About USP row at 1440: `grid-template-columns: 280px 280px 280px 280px`, `gap: 32px`, child width `280px`, section height about `197px`.

### UI-03 — Mobile horizontal gutters are doubled

**Screenshot reference:** `home-390-reference.png`  
**Current implementation:** `home-390-current.png`

At 390 px, the reference H1/content width is `358 px` at `x=16`. WordPress is only `238 px` at `x=76`. The current hero is `1,618.5 px` high versus `1,133 px` reference; the page is `3,944 px` longer.

**Exact CSS fix:** UI-01 plus removal of nested Flatsome row/column padding on mobile.

```css
@media (max-width: 549px) {
  .arden-page .section,
  .arden-page .section-content,
  .arden-page .row,
  .arden-page .col,
  .arden-page .col-inner {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .arden-page .section { padding-left: 0 !important; padding-right: 0 !important; }
  .arden-page .section-content { padding-left: 16px !important; padding-right: 16px !important; }
  .arden-page .section-content > .row { width: 100% !important; }
  .arden-page .section-content > .row > .col { padding-left: 0 !important; padding-right: 0 !important; }
}
```

### UI-04 — Responsive heading scale differs on most imported pages

At 1440 both use `48px`, but the imported WordPress H1 has a `1280 px` box where the reference is `768 px`. At 390 most reference H1s use `30/37.5`, while current WordPress uses `32/36.8`. Home and native FAQ are exceptions and already use `30/34.5` or `30/37.5` correctly.

**Exact CSS fix:** scope this to imported page banners, not the Home hero.

```css
.arden-react-page .arden-page-banner h1,
.arden-react-page > section:first-child h1 {
  width: 100%;
  max-width: 48rem;
  font-family: "Be Vietnam Pro", "Plus Jakarta Sans", sans-serif;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

@media (max-width: 767px) {
  .arden-react-page .arden-page-banner h1,
  .arden-react-page > section:first-child h1 {
    max-width: 100%;
    font-size: 30px;
    line-height: 1.25;
    letter-spacing: -0.025em;
  }
}
```

### UI-05 — Body color is one token too dark

The reference Home body text computes to Slate 800: `oklch(27.9% 0.041 260.031)`. Current WordPress computes to Slate 900: `oklch(20.8% 0.042 265.755)`. H1 navy is effectively aligned with Slate 950 and should not be changed.

**Exact CSS fix:**

```css
.arden-site,
.arden-page {
  color: oklch(27.9% 0.041 260.031);
}

.arden-page h1,
.arden-page h2,
.arden-page h3,
.arden-page h4 {
  color: oklch(12.9% 0.042 264.695);
}
```

### UI-06 — Button metrics match partially, but shadow/gap/margins do not

Reference Home primary CTA at 1440: `14px`, weight `900`, line-height `20px`, letter spacing `1.4px`, padding `14px 24px`, radius `12px`, height `50px`, icon gap `10px`, subtle two-layer shadow. Current: same typography/padding/radius/colors, but `52.4px` high, no shadow, no flex gap, and Flatsome adds `margin: 0 14px 14px 0`.

**Exact CSS fix:**

```css
.arden-page .arden-button,
.arden-page a.button,
.arden-page button.button {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  min-height: 50px !important;
  margin: 0 !important;
  padding: 14px 24px !important;
  border-radius: 12px !important;
  font-size: 14px !important;
  font-weight: 900 !important;
  line-height: 20px !important;
  letter-spacing: 0.1em !important;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px -1px rgb(0 0 0 / 10%) !important;
}
```

At 390, the current first Home CTA becomes `224 × 74.8` because of narrow content. Fix UI-01/UI-03 before forcing button width; the reference remains `319.5 × 50` and does not need `width:100%`.

### UI-07 — Card radius/background hierarchy differs

On Home, the first sampled reference card uses `16px` radius and Slate-50 background; current uses `12px`, white, `12px` internal padding and a different `0 1px 2px / 6%` shadow. Imported cards sometimes lose radius entirely because the sampled outer Flatsome `.col` becomes the visible wrapper.

**Exact CSS fix:**

```css
.arden-page .arden-card,
.arden-react-page .rounded-2xl {
  border-radius: 16px !important;
}

.arden-page .arden-card--soft,
.arden-page .arden-feature-card {
  background: oklch(98.4% 0.003 247.858) !important;
  border: 1px solid oklch(92.9% 0.013 255.508) !important;
}
```

Do not globally add a shadow to every card. The reference mixes `none`, `shadow-xs`, and `shadow-sm`; preserve the component-specific class.

### UI-08 — Hero image geometry and radius differ

Home desktop reference image: `434.7 × 325.5`, no radius on the raw image; current: `364.7 × 273.5`, radius `12px`. Mobile reference: `322 × 241`; current `196 × 147`.

**Exact CSS fix after UI-01:**

```css
.arden-hero__media .img,
.arden-hero__media .img-inner,
.arden-hero__media img {
  width: 100% !important;
  max-width: none !important;
  aspect-ratio: 4 / 3;
}

.arden-hero__media img {
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 0 !important;
}

@media (max-width: 767px) {
  .arden-hero__media { width: 100% !important; }
  .arden-hero__media .img { width: calc(100% - 36px) !important; margin-inline: 18px !important; }
}
```

### UI-09 — Icon system is structurally incomplete; CSS alone cannot fix it

Home reference contains `142` inline Lucide SVGs. Current WordPress contains only `4` SVGs plus `77` icon-font/placeholder elements. The first reference icons are `14×14` and `16×16`; current surviving SVGs are `20×20` and begin much later in the document.

**Required implementation fix:** restore the actual icon nodes in UX Builder/shortcodes or expand `[arden_icon]` to cover every reference icon. Then apply:

```css
.arden-icon,
.arden-icon svg {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}

.arden-eyebrow .arden-icon,
.arden-eyebrow .arden-icon svg {
  width: 14px;
  height: 14px;
  flex-basis: 14px;
}
```

No CSS can create the missing icon shapes semantically from absent markup.

### UI-10 — Header height differs by breakpoint

| Width | Reference | Current |
|---:|---:|---:|
| 1440 | `102.5px` | `102px` |
| 1024 | `114.5px` | `102px` |
| 768 | `119px` | `102px` |
| 390 | `69px` | `60px` |

**Exact CSS target:**

```css
@media (min-width: 1280px) { .arden-site #header { min-height: 103px; } }
@media (min-width: 769px) and (max-width: 1279px) { .arden-site #header { min-height: 115px; } }
@media (width: 768px) { .arden-site #header { min-height: 119px; } }
@media (max-width: 549px) { .arden-site #header { min-height: 69px; } }
```

Height alone is not sufficient if the correct top-bar/mobile row is absent; verify row visibility and vertical centering after applying.

## Route-level structure and spacing differences

The values below are full-document height deltas (`current − reference`). A small delta does not prove pixel equality, but a large delta proves layout/content mismatch.

| Route | 1440 delta | 390 delta | Main observed difference | Required fix |
|---|---:|---:|---|---|
| Home | `-373` | `+3944` | constrained wrapper; mobile gutters; missing icons | UI-01, 03, 06, 08, 09 |
| About | `+4382` | `+1675` | `.col.large-3` collapses grid children | UI-02; then recheck cards/images |
| Services | `+691` | `+2245` | grid/columns too narrow and stack too tall | UI-02/03 |
| T-shirt | `-241` | `+68` | close overall height; localized component spacing remains | compare section screenshots; do not global-patch |
| Shirt | `+1101` | `+596` | imported grid sizing | UI-02 |
| Jacket | `+941` | `+625` | imported grid sizing | UI-02 |
| Pants | `+1086` | `+539` | imported grid sizing | UI-02 |
| Projects | `-324` | `-603` | archive DOM/content differs from React filter layout | rebuild archive controls/card metadata; CSS insufficient |
| Case study | `+243` | `+377` | banner width/line-height and card wrapper | UI-04/07 plus template-specific spacing |
| News | `-879` | `-444` | reference featured article/sidebar/filter/search; current generic 3-column archive | rebuild page structure; CSS insufficient |
| Fabric guide | `+1703` | `+2858` | grid children collapsed | UI-02 |
| Techpack | `+155` | `+142` | close height; banner width/type scale differs | UI-04; component-level verification |
| Contact | `+537` | `+117` | two-column proportions/spacing differ | UI-02 plus explicit `5fr 7fr` grid |
| Policies | `+60` | `+351` | desktop close; mobile tab/panel rhythm differs | mobile tab gap/padding component fix |
| Search | `+996` | `+3830` | result cards/gutters and stack severely differ | UI-02/03; verify result DOM |
| Careers | `-498` | `-204` | missing/shorter content rhythm | reconcile structure before CSS |
| FAQ | `-86` | `+152` | close height; accordion/search default presentation differs | component-specific state and spacing |
| Quote | `+92` | `+361` | desktop close; mobile fields and section gaps too tall | form grid/padding at mobile |

### Route-specific exact CSS adapters

```css
/* Contact: reference is a balanced 5/7 layout at desktop. */
@media (min-width: 1024px) {
  .arden-react-page .arden-contact-grid {
    display: grid !important;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr) !important;
    gap: 40px !important;
    align-items: start !important;
  }
}

/* Generic imported section rhythm: reference 72–80 px desktop, 56 px common content sections. */
@media (min-width: 640px) {
  .arden-react-page > section { padding-block: 72px; }
}
@media (max-width: 639px) {
  .arden-react-page > section { padding-block: 56px; }
}

/* Form fields: prevent Flatsome height/casing overrides. */
.arden-react-page input,
.arden-react-page select,
.arden-react-page textarea {
  width: 100%;
  border-radius: 12px;
  font: 400 12px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-transform: none;
}
```

The generic section rule must be checked against sections intentionally using `py-8`, `py-10`, or `py-20`; component classes should win. It is a target baseline, not permission to flatten the hierarchy.

## Colors, radius and shadows

### Already aligned or nearly aligned

- Primary blue: `oklch(37.9% 0.146 265.522)`.
- H1 heading color: reference Slate 950 and current `rgb(2,6,23)` are equivalent.
- H1 desktop family/weight on Home: `Be Vietnam Pro`, `900`.
- Primary button size/weight/padding/radius are close before layout compression.

### Different

- Body copy token: Slate 800 reference vs Slate 900 current.
- Home soft-card radius: `16px` reference vs `12px` current.
- Home primary CTA shadow: present reference vs `none` current.
- Reference uses component-specific shadows (`114` DOM elements report non-none on Home) while current has only `22`; most of this gap is missing/different component markup, not a safe global shadow rule.

## Screenshot index

Every route below has `1440`, `1024`, `768`, and `390` files with suffixes `-reference.png` and `-current.png` under `wordpress/audit/ui-1to1-20260829/`:

`home`, `about`, `services`, `tshirt`, `shirt`, `jacket`, `pants`, `projects`, `case-study`, `news`, `fabric`, `techpack`, `contact`, `policies`, `search`, `careers`, `faq`, `quote`.

Examples:

- `home-1440-reference.png` / `home-1440-current.png`
- `home-390-reference.png` / `home-390-current.png`
- `about-1440-reference.png` / `about-1440-current.png`
- `news-1440-reference.png` / `news-1440-current.png`

## Acceptance gate after implementation

1. Apply UI-01 and UI-02 first; they are shared root causes.
2. Re-capture all 72 pairs—do not reuse this PASS/fail state.
3. Require geometry tolerance ≤ `2px` for shared containers/components and typography equality for family/size/weight/line-height/letter-spacing.
4. Require exact semantic component inventory for icons, filters, search, cards, forms and CTA; pixel CSS cannot compensate for missing DOM.
5. Compare screenshots with a real pixel/SSIM tool. The current repository has no `pixelmatch`/`pngjs` dependency, so this audit does not fabricate a pixel-difference percentage.

**Final status: NOT PIXEL-PERFECT.** The first implementation action should be the two shared Flatsome adapters (UI-01 and UI-02), followed by fresh screenshots before any route-specific tuning.
