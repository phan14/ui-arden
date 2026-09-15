# Task 11.3A.1 — Close remaining Home mobile geometry delta

## Outcome

The targeted Home mobile geometry work is complete. The 390px document delta is reduced from the Task 11.3A checkpoint of `+710px` to `+16px`, without changing React, hiding Testimonials, or touching staging/production.

| Area | Before | After | Gate |
|---|---:|---:|---:|
| Full document | +710px | +16px | ≤40px |
| Testimonials | +363.77px | -8.42px | ≤20px |
| Footer | +249.72px | -4.41px | ≤20px |
| Blog | +38.35px | +0.35px | ≤15px |
| FAQ residual | +19.88px | -9.92px | ≤20px unexplained |

## Root causes and fixes

- Testimonials: removed inherited Flatsome blockquote/avatar/wrapper expansion and restored the React one-column mobile grid, 24px gap and compact author geometry. Three of three cards remain visible.
- Footer: removed repeated Flatsome column padding/margins, restored the React row-owned spacing, and hid only the confirmed empty `absolute-footer` wrapper.
- Blog: removed the shortcode card's extra 30px margin inside the grid and kept the React-owned 24px grid gap.
- Final residual: the Home FAQ subtitle inherited WordPress `16px/24px` typography plus a `20.8px` paragraph margin. It now matches React at `12px/19.5px` with no bottom margin, mobile-only.

## Fresh validation

- Visual evidence: exactly 16 files in `wordpress/audit/task11_3a_1-home-review/` (reference, WordPress, side-by-side and overlay for 390/768/1024/1440).
- Functional checks at all four widths: HTTP 200; no horizontal overflow; 3/3 Testimonials visible; no console errors; no broken images; header/footer present; no logged-out admin bar; no default WordPress content; zero links escaping `/mytest/`.
- PHP lint: 14/14 PASS.
- TypeScript (`tsc --noEmit`): PASS.
- React/Vite build: PASS, 1,732 modules transformed.
- JavaScript syntax checks: PASS.
- `git diff --check`: PASS (line-ending notices only).
- React source diff: none.
- CSS source/runtime hashes: identical.
- Staging and production: untouched.

## Final gate

- BLOCKER: 0
- MAJOR: 0

TASK 11.3A.1 PASS — HOME MOBILE GEOMETRY CLOSED
