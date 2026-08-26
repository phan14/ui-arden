# Task 08.8C computed-style comparison

Source: fresh Playwright collection in `task08_8c-computed-styles.json` across Home, About, Services, T-Shirt, Policies, FAQ, Quote and Careers at 1440, 1024, 768 and 390 px (32 route/breakpoint cases).

## Root cause and repair

The React application uses the browser/system sans stack for body copy, navigation and buttons; Be Vietnam Pro is reserved for headings. WordPress previously forced Plus Jakarta Sans across most text and controls. Flatsome also supplied unlayered colors, navigation padding/radius and button declarations above the layered React utilities.

The shared repair:

- changes `--arden-font-body` to the exact React system stack;
- retains Be Vietnam Pro for headings;
- moves primary/text/muted/border tokens to the React OKLCH values;
- aligns desktop navigation padding, radius, spacing and active background;
- aligns shared Arden button font, dimensions, border, radius and secondary background;
- restores exact heading tracking/line height for native pilot banners;
- explicitly keeps headings white inside dark React/CTA sections;
- preserves the scoped unlayered React utility compatibility stylesheet.

## Representative matrix

| Element | React source | WordPress after repair | Status |
|---|---|---|---|
| Body | 16/24, weight 400, -0.01em, system sans, slate-800 | Same metrics/stack/token | PASS |
| H1 | Be Vietnam Pro, 900, responsive 30–48px, 1.15/1.25, -0.025em | Same shared metrics; dark-section white override protected | PASS |
| H2 | Be Vietnam Pro, 900, responsive 24–36px, 1.2/1.25, -0.025em | Same visible metrics | PASS |
| H3/card title | Component-dependent 12–18px, 700/900 | React-derived utility/component rules retained | PASS by matched component, not first-element page heuristic |
| Eyebrow | Component-dependent badge or introductory copy | React classes preserved; generic “first paragraph” is not used as acceptance equivalence | PASS by matched selector |
| Navigation | 12/16, 700, .05em, 8×12 padding, 8px radius | Same | PASS |
| Card body | 12/19.5 or 14/22.75 depending component | Same React utility/component values | PASS by matched card |
| Primary CTA | 14/20, 900, .1em, 48px min-height, 14×24 padding, 12px radius | Same | PASS |
| Secondary CTA | Same type/dimensions, white or transparent component background, slate border/text | Same component rules | PASS |
| Footer heading | 12/16, 800, .05em, white | Same | PASS |
| Footer links | 12/19.5, system sans, slate-400 | Same | PASS |

## Color tokens

| Token/use | React | WordPress |
|---|---|---|
| Main text | `oklch(0.208 0.042 265.755)` | Same |
| Heading dark | `oklch(0.129 0.042 264.695)` | Same |
| Muted text | `oklch(0.446 0.043 257.281)` | Same |
| Primary navy | `oklch(0.379 0.146 265.522)` | Same |
| Gold | `#f59e0b` / amber component utility | Same Arden token/component utility |
| Border | `oklch(0.929 0.013 255.508)` | Same |
| Footer | slate-900 (`#0f172a`) | Same |

RGB and OKLCH serialized strings are not treated as different when they resolve to the same rendered color. Comparisons ignore `min-height:auto` versus `0px` on non-controls and only compare semantically matched elements; they do not compare unrelated “first H3/card” elements across pages.
