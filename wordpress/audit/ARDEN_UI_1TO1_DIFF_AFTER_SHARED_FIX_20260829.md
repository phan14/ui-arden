# Arden UI 1:1 — After Shared Root-Cause Fixes

Date: 2026-08-29  
Reference: `http://localhost:3000/`  
Current: `http://localhost/mytest/`  
Scope: TASK 10 shared fixes only; this is not a claim of site-wide pixel perfection.

## Evidence

- Before evidence: `wordpress/audit/ui-1to1-20260829/`
- After evidence: `wordpress/audit/ui-1to1-after-shared-20260829/`
- Fresh after run: 18 routes × 4 viewports × reference/current = 144 new PNG files.
- Fresh computed styles: `ui-1to1-after-shared-20260829/computed-style-comparison.json`.
- Height table: `ui-1to1-after-shared-20260829/height-deltas.csv`.
- Browser contexts were newly created and logged out; no previous screenshots were reused.

## Shared acceptance results

| Requirement | Before | After | Reference | Result |
|---|---:|---:|---:|---|
| Home H1 geometry, 1440 | `x=211 / w=581.3` | `x=112 / w=689.3` | `x=112 / w=689.3` | PASS |
| Home H1 geometry, 1024 | constrained | `x=32 / w=540` | `x=32 / w=540` | PASS |
| Home H1 geometry, 768 | constrained column | `x=24 / w=720` | `x=24 / w=720` | PASS |
| Home content geometry, 390 | `x=76 / w=238` | `x=16 / w=358` | `x=16 / w=358` | PASS |
| About USP grid child, 1440 | `74px` | `280px` | `280px` | PASS |
| About grid child, 1024 | collapsed before adapter | `216px` | `216px` | PASS |
| About grid child, 768 | affected by Flatsome column rules | `344px` | `344px` | PASS |
| About grid child, 390 | single column | `358px` | `358px` | PASS |
| Header, 1440 | `102px` | `102px` | `102.5px` | PASS (0.5px delta) |
| Header, 1024 | `102px` | `114.5px` | `114.5px` | PASS |
| Header, 768 | `102px` | `119px` | `119px` | PASS |
| Header, 390 | `60px` | `69px` | `69px` | PASS |
| Arden content token | Slate 900 | Slate 800 | Slate 800 | PASS |
| Hero CTA margin/gap/shadow | Flatsome margin; incomplete | `0 / 10px / two-layer shadow` | `0 / 10px / two-layer shadow` | PASS |
| Home Arden card radius | `12px` sampled before | scoped `16px` | `16px` | PASS |

The React `<body>` remains Slate 900 while its application wrapper is Slate 800. The WordPress Arden token now follows the visible application wrapper, not the unrelated shell element.

## Root causes fixed

### UI-01 — Flatsome width loss

The actual chain was `.page-wrapper → .row-main → .large-12.col → .col-inner → section`. Flatsome supplied the 1170px cap, column gutters, and the UX section supplied an additional 30px horizontal padding. The child-theme adapter now:

- removes width/padding from the page shell only under `.arden-site`;
- makes the Arden section full-width;
- uses a responsive 1280px border-box with 32/24/16px gutters;
- removes only the direct Flatsome column gutter inside an Arden section;
- reconstructs the Home 12-track desktop grid and switches to one track below 1024px.

No parent theme or WordPress core file was changed.

### UI-02 — Flatsome percentage columns inside CSS Grid

The `.large-*`, `.medium-*`, `.small-*` width/max-width/flex-basis and column padding are neutralized only for `.arden-react-page .row[class*="grid"] > .col`. At 1440 the imported grid is capped at the reference inner width of 1216px; smaller breakpoints continue using their responsive available width.

## Document-height deltas (current − reference)

Values show `before → after`; these are diagnostic, not pixel-pass thresholds.

| Route | 1440 | 390 |
|---|---:|---:|
| Home | -373 → -841 | +3944 → +2166 |
| About | +4382 → +2755 | +1675 → +890 |
| Services | +691 → +759 | +2245 → +1742 |
| T-shirt | -241 → -253 | +68 → +53 |
| Shirt | +1101 → -288 | +596 → -154 |
| Jacket | +941 → -236 | +625 → -54 |
| Pants | +1086 → -91 | +539 → -102 |
| Projects | -324 → -296 | -603 → -587 |
| Case study | +243 → +231 | +377 → +261 |
| News | -879 → -839 | -444 → -335 |
| Fabric guide | +1703 → +869 | +2859 → +2333 |
| Techpack | +155 → -124 | +142 → -78 |
| Contact | +537 → +477 | +118 → +47 |
| Policies | +60 → +60 | +351 → +360 |
| Search | +996 → +984 | +3830 → +3827 |
| Careers | -498 → -498 | -204 → -195 |
| FAQ | -86 → -110 | +152 → +113 |
| Quote | +92 → +92 | +361 → +370 |

## Remaining mismatches

The site is still **not pixel-perfect**. Shared geometry is repaired, but the new screenshots still show route-level structural differences:

- Home mobile remains 2166px taller, mainly from component inventory, icon/markup, and section rhythm differences.
- About retains different image/content inventory and is 2755px taller on desktop.
- Search mobile remains 3827px taller and requires result-card/list markup reconciliation.
- Fabric Guide still has route-specific content/control spacing differences.
- News and Projects use different archive structures from React.
- Home still lacks much of the React Lucide SVG inventory; CSS cannot semantically manufacture missing icons.
- CTA text/content differences can change intrinsic button width and are intentionally not rewritten in this shared CSS task.

These require Phase 5 template/component work, not more global width overrides.

## Validation

- PHP lint: 14/14 PASS.
- `node --check` for both TASK 10 browser tools: PASS.
- Focused shared-root regression: PASS (8/8 route/viewport cases, no failed assertions).
- TypeScript `tsc --noEmit`: PASS.
- React/Vite production build: PASS.
- `git diff --check`: PASS (line-ending warnings only, no whitespace errors).
- Source/runtime `arden.css` SHA-256 matched at test time.

## Files changed by TASK 10

- `wordpress/flatsome-child/assets/css/arden.css`
- `wordpress/tools/audit-ui-1to1.cjs`
- `wordpress/tools/validate-task10-shared-ui.cjs`
- `wordpress/audit/task10-shared-before.json`
- `wordpress/audit/task10-shared-after.json`
- `wordpress/audit/ui-1to1-after-shared-20260829/`
- `wordpress/audit/ARDEN_UI_1TO1_DIFF_AFTER_SHARED_FIX_20260829.md`

## Verdict

TASK 10 shared acceptance criteria PASS. Route-specific structural fidelity remains open; no pixel-perfect claim is made.
