# Task 11.3A — proven root causes before implementation

## 1. Flatsome typography and paragraph margins override component tokens

- **Evidence:** Hero description is WP 16px/26px/4 lines/104px versus React 12px/19.5px/3 lines/58.5px. Service headings are WP 18/28 versus React 16/24; service body is WP 14/22.75 versus React 12/19.5.
- **Pixel contribution:** a diagnostic 12px/19.5px normalization reduced the document by 1,671px. Individual deltas remained, so this is material but not a valid global fix.
- **File:** `wordpress/flatsome-child/assets/css/arden.css`.
- **Correct fix:** restore typography and margins at the matching Home component scopes.

## 2. Flatsome `.col` bottom padding is being used as unintended layout spacing

- **Evidence:** mobile `.col` has 30px bottom padding. Runtime-only removal reduced the document by 1,872px, with precisely measurable section effects (Hero -90, Services -120, Products -162, Factory -210, Process -300, etc.).
- **Pixel contribution:** section-specific; the experiment proves the source but cannot be used globally because React has deliberate 12/16/24/40px component gaps.
- **File:** `arden.css`.
- **Correct fix:** replace this padding only inside each reconstructed Home component with its React gap.

## 3. UX Builder flattened React component groupings

- **Evidence:** Hero badge stack is 318px versus 207.5px; service body 252.6px versus 196px while image geometry is identical. Five service cards explain roughly 373px of the +440.9px Services delta.
- **Pixel contribution:** Hero about +110.5px from badges; Services about +373px from repeated cards; analogous grouping differences occur in Products, Testimonials and Blog.
- **File:** `arden.css` only; no content/markup mutation is supported.
- **Correct fix:** reconstruct grid/flex grouping and inter-item gaps using stable Home section classes.

## 4. Flatsome clearfix pseudo-elements participate in CSS grids

- **Evidence:** `.row:before/:after` become grid items after the row is switched to grid. Runtime-only suppression reduces Hero 1402.9→1354.9, exactly 48px.
- **Pixel contribution:** +48px in Hero and potentially one grid gap in every converted row.
- **File:** `arden.css`.
- **Correct fix:** suppress clearfix content only on Home rows that are explicitly converted to grid.

## 5. Footer repeats the same typography/column-spacing mechanism

- **Evidence:** 16 main sections explain +1,379.8px; footer accounts for the exact remaining +249.2px; residual 0px.
- **Pixel contribution:** +249.2px.
- **File:** `arden.css`.
- **Correct fix:** match the React footer's mobile column typography and gaps, without hiding content or fixed-height compensation.

## Rejected causes

No duplicate sections, simultaneous desktop/mobile variants, flow-consuming hidden elements, empty spacer rows, inherited min-height, duplicate lazyload boxes, or material image-ratio mismatch were found.

Implementation may proceed only with scoped component rules. Global font compression or global `.col { padding-bottom:0 }` is explicitly unsupported because Process, Portfolio and Why Choose are already shorter than React.
