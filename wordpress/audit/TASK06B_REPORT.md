# Task 06B report — Native UX Builder pilot

## Result

The reconstruction pattern passes the structural and runtime pilot gates and is safe to propagate after visual sign-off in the WordPress admin preview. No final ZIP was created, no draft was published and no SEO final QA was started.

| Page | Native sections | Result |
|---|---:|---|
| Home | 14/16 — 87.5% | PASS (target 80%) |
| TShirt Service | 6/6 — 100% | PASS (target 85%) |
| FAQ | 6/6 — 100% | PASS (target 90%) |

## Reconstruction

- TShirt draft ID 83 is now Section → Row → Column → UX Text/Featured Box/Tabs/Button. Fabric and GSM selectors use native Tabs. Its table is semantic HTML inside one native UX Text element because Flatsome has no Table element.
- FAQ draft ID 95 now uses native Search, Tabs and Accordion. All six answers exist in WordPress content instead of only the initially open React state.
- Home retains its 16-section structure. Two dynamic listing shortcodes remain for WordPress-managed Projects and Posts.
- No pilot page contains UX HTML or a React runtime.

## Content, structure and interactions

Headings, descriptions, CTA labels, figures, cards, FAQ questions/answers and section order were copied from React source. FAQ open/close uses Flatsome Accordion, which renders `aria-expanded`, `aria-controls`, keyboard activation and a visible focus outline. Fabric/GSM selection uses Flatsome tablist/tab/tabpanel semantics.

Runtime at 1440, 1024, 768 and 390 returned HTTP 200, produced no raw shortcode, no horizontal overflow and no browser page errors. Evidence is in `task06b-runtime.json`.

## Header and Footer

- Global Flatsome Header: Arden SVG wordmark, primary menu, Search, navy quote CTA, 68/64px normal/sticky heights and native mobile controls. It is not duplicated in page content.
- Global `arden-footer` UX Block: native rows/columns and React-source contact, social, policy and location content; no `ARDEN_*` or `#` placeholders.
- Minor logo/font rasterization can differ because the pilot uses a repo-native SVG rather than an approved final brand artwork file.

## Remaining special blocks

There are no UX HTML blocks on the pilot pages. Home's Projects and Recent Posts shortcodes remain necessary CMS query components; their surrounding elements are native.

## Form backend

No backend/plugin was installed. `FORM_BACKEND_DECISION.md` recommends Contact Form 7 for its validation, spam integrations, maintenance profile and native Flatsome integration.

## Verification

- All 14 page imports render registered shortcodes: PASS.
- PHP lint: PASS.
- TypeScript `tsc --noEmit`: PASS.
- Authenticated HTTP: PASS for Home and both Draft previews.
- Browser runtime at all four required widths: PASS.
- TShirt/FAQ remain Draft; no raw shortcode; no React runtime.

## Propagation decision

The pattern is safe to propagate: native Builder elements by default, semantic tables inside UX Text, native Tabs/Accordion for interactions, and custom shortcodes only for genuine WordPress queries. Propagation was intentionally not started.
