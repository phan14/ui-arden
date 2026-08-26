# Task 08.8 fidelity inventory

Created before Task 08.8 fixes. The immutable visual/content source of truth is the React application at `http://localhost:3000/`; the current WordPress output is evidence of defects, not a design reference.

## Global defects

| ID | Classification | Scope | Observed mismatch | Repair boundary |
|---|---|---|---|---|
| F08-001 | Visual / shared system | All 21 routes, all 4 widths | Heading/body/button font metrics, colors, spacing, radii, shadows, container rhythm, header and footer differ from React. | Repair shared tokens and component adapters; do not redesign. |
| F08-002 | CSS cascade | React-derived page imports | Tailwind utility declarations in `react-pages.css` are layered, while Flatsome declarations are unlayered and therefore win the author cascade. Existing grid and weight patches cover only a subset. | Add a scoped, unlayered React utility/component compatibility layer; avoid global Flatsome breakage. |
| F08-003 | Visual / system template | Real 404 | HTTP behavior is correct, but title typography and spacing differ. | Apply shared system-template typography only. |

## P1 route/content defects

| ID | Route | Classification | Task 08.7 evidence at 1440 px | Required repair |
|---|---|---|---|---|
| F08-004 | Home | Content + structure + visual | Similarity `0.948`; sections `16/16`, H2 `13/13`, H3 `60/52`, images `29/20`, controls `34/44`. | Freeze an exact 16-section inventory, restore missing React-authoritative cards/media/headings, remove unintended controls, preserve dynamic WordPress behavior where required. |
| F08-005 | Policies | Content + structure + visual | Similarity `0.449`; H2 `2/1`; controls `5/2`. Current panels use a different policy version. | Replace Draft 99 panel copy and hierarchy from React `PolicySection`; keep five canonical native controls/fragments and mark `LEGAL_REVIEW_REQUIRED`. |
| F08-006 | T-Shirt Service | Content + semantic structure | Similarity `0.924`; H3 `19/14`; controls `6/2`. | Restore exact source-visible headings/text/control inventory while retaining native interaction and size-table safety. |
| F08-007 | FAQ | Content + semantic structure | Similarity `0.870`; H3 `11/5`. | Preserve native accordion behavior while restoring React heading hierarchy and exact visible copy. |
| F08-008 | Quote | Content + form structure | Similarity `0.890`; controls `10/6`; fields `9/16`. | Align visual/semantic form architecture without weakening CF7 validation or sending production mail. |
| F08-009 | Careers | Content + semantic structure | Similarity `0.960`; H3 `4/0`. | Restore React job-title heading semantics within native disclosure behavior. |
| F08-010 | Contact | Form structure | Similarity `1.000`; fields `6/7`. | Document or safely align the native CF7 wrapper/field difference; protect validation behavior. |

## Pilot visual routes

The first focused repair/verification set is fixed by the task: Home, About, Services, Manufacturing, T-Shirt Service, and Fabric Guide at 1440, 1024, 768, and 390 px. A pilot route cannot pass on screenshot resemblance alone: typography, color, container, grid, card, button, and overflow checks must also pass.

## Existing routes with exact high-level structure but global style drift

At 1440 px, About, Services, Shirt Service, Jacket Service, Pants Service, Manufacturing, Fabric Guide, and Techpack Guide reported text similarity `1.000` and matching section/heading/media counts. Their primary defect is shared visual-system fidelity, with native control-count differences assessed separately where applicable.

## Deferred/data-dependent defects

| ID | Classification | Scope | Constraint |
|---|---|---|---|
| F08-011 | Data-dependent P2 | Projects, Case Study, News, Category, Search | Runtime states are safe, but approved production records do not exist. Fake business records are prohibited. |
| F08-012 | External production dependency | SEO/contact ownership | Rank Math and approved recipient/business values are unavailable; keep staging/indexing safeguards. |
| F08-013 | Expected browser behavior | 404 console | Chromium reports the intentionally missing main document as a failed resource; this is not a WordPress runtime defect. |

## Content and structure freeze

- React component text, ordering, hierarchy, labels, CTA destinations, image intent, and responsive composition are authoritative.
- WordPress-native Tabs, Accordions, CF7, menus, posts/projects, and Media Library remain required implementation systems.
- A native wrapper difference may be documented, but it must not be used to excuse missing or rewritten source-visible content.
- No fabricated projects, posts, testimonials, prices, legal approval, business contacts, or mail recipients.
- No publishing, indexing, deployment, release ZIP, or Task 09 work.

## Root-cause statement

The visual drift is not primarily missing React content on every route. The compiled React stylesheet preserves Tailwind utilities inside cascade layers, while Flatsome's unlayered theme CSS has higher cascade priority. This suppresses many React utility values after otherwise successful native conversion. Policies and the named interactive pages additionally have independent content/semantic defects and therefore require page-level repairs after the shared cascade repair.
