# Task 08.9 Header difference closure

Source of truth: `src/components/layout/Header.tsx`  
Validated routes: Home, Services, Policies  
Validated widths: 1440, 1024, 768, 390

## Root cause

The Header Builder row ownership was already correct, but its content was written to the wrong Theme Mod keys. The local configuration stored Arden copy in `html_topbar_left` and `html_topbar_right`; Flatsome 3.17.7 renders `topbar_left` and `topbar_right`. Consequently the active `html` Header element fell back to Flatsome's `ADD ANYTHING HERE OR JUST REMOVE IT...` default.

This was fixed in Header Builder configuration, not hidden with CSS. The configuration now writes the two keys consumed by Flatsome and preserves the existing row element ownership, primary menu and working Services dropdown.

## Inventory comparison

| Header area | React | WordPress after repair | Status |
|---|---|---|---|
| Information row | Hours, address, hotline and Zalo | Same visible Arden inventory | PASS |
| Default Flatsome content | Absent | Absent in all 12 focused cases | PASS |
| Logo lockup | ARDEN mark and wordmark | Existing Arden logo lockup retained | PASS |
| Navigation | Eight items in React order | Eight items in the same order | PASS |
| Services dropdown | Eight child destinations | Existing native dropdown retained; interaction PASS | PASS |
| Search | Visible icon | Native Header search retained | PASS |
| Quote CTA | Navy quote CTA | Native Header button retained | PASS |
| Desktop dimensions | 34px top row + approximately 68px main row | 34px + 68px | PASS |
| Sticky state | Enabled | Existing Flatsome sticky state retained | PASS |
| Mobile | Logo, search, hamburger; no information row | Same visual order; top row hidden below 768px | PASS |

The focused run found no overflow, raw shortcode, or reappearance of default Header content at any tested width.

## Result

**NO MATERIAL UNAPPROVED HEADER DIFFERENCE**

