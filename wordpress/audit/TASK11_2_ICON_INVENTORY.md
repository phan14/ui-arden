# Task 11.2 icon inventory — diagnostic baseline

All React icons use Lucide-style SVG: `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, round cap/join unless the source component specifies otherwise.

| Route | Section/family | React | WordPress before | Source type | Status |
|---|---|---:|---:|---|---|
| Home | Entire page | 142 SVG / 0 font | 4 SVG / 61 icon-font nodes | React Lucide / WP mixed shortcode+Flatsome font | MISSING / WRONG SOURCE |
| Home | Hero | 7 SVG | 0 SVG / 6 font | Lucide | MISSING |
| Home | Trust | 4 SVG | 4 SVG / 8 font | Central SVG plus Flatsome font wrappers | DUPLICATED |
| Home | Services | 21 SVG | 0 | Lucide | MISSING |
| Home | Products | 8 SVG | 0 | Lucide | MISSING |
| Home | Factory/capabilities | 9 SVG | 0 SVG / 12 font | Lucide / Flatsome font | WRONG SOURCE |
| Home | Process | 9 SVG | 0 SVG / 18 font | Lucide / Flatsome font | WRONG SOURCE |
| Home | MOQ/Pricing | 21 SVG | 0 | Lucide | MISSING |
| Home | Portfolio | 19 SVG | 0 | Lucide | MISSING |
| Home | Why choose | 6 SVG | 0 SVG / 12 font | Lucide / Flatsome font | WRONG SOURCE |
| Home | Testimonials/Blog/FAQ/CTA | 38 SVG | 0 SVG / 5 font | Lucide / Flatsome font | MISSING / WRONG SOURCE |
| About | Entire page | 51 SVG | 0 | Lucide | MISSING |
| Fabric | Entire page | 30 SVG | 2 breadcrumb SVG | Lucide / hard-coded SVG | MISSING |

Semantic families required across these pages: `check`, `circle-check`, `arrow-right`, `star`, `package`, `package-check`, `chevron-right`, `chevron-down`, `layers`, `scissors`, `eye`, `sparkles`, `shield-check`, `clock`, `circle-question`, `calendar`, `award`, `file-check`, `zap`, `dollar-sign`, `heart-handshake`, `phone-call`, `info`, `search`, and breadcrumb `house`.

The existing central shortcode registry already covers part of this list but most UX Builder stored markup does not invoke it. Expanding the registry alone cannot close the V1; rendering must be connected to stable semantic page markup.

## After targeted implementation

All newly rendered vectors use `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, round line cap and join. Coverage remains incomplete.

| Route | Section/purpose | React icon source | WordPress current | Width/height | Status |
|---|---|---|---|---|---|
| Home | Entire page inventory | 142 Lucide SVG | 97 Lucide SVG | mixed 14/16/20px | MISSING |
| Home | Eyebrows | semantic Lucide per component | blanket `sparkles` injection | 1em | WRONG GLYPH / WRONG ALIGNMENT risk |
| Home | CTA buttons | arrow-right or phone-call by component | URL-derived arrow-right/phone-call | 1em | PARTIAL |
| Home | Capability/process/why cards | component semantic families | index-coupled arrays | 20px slots | PARTIAL / ORDER-COUPLED |
| About | Entire page inventory | 51 Lucide SVG | 8 Lucide SVG | 14/16px | MISSING |
| Fabric | Entire page inventory | 30 Lucide SVG | 10 Lucide SVG | 14/16px | MISSING |

Because many instances are still absent, the required exhaustive per-instance MATCH table and representative evidence for every corrected family cannot honestly be completed. **ICON INVENTORY V1: FAIL.**
