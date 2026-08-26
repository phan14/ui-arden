# Task 08.9 Policies visual difference closure

Source of truth: `src/pages/PoliciesPage.tsx`, `src/components/sections/PageBannerHeader.tsx`, `src/components/sections/PolicySection.tsx`, and the shared React CTA component. Legal copy was frozen and `LEGAL_REVIEW_REQUIRED` remains in the import source.

## Visual inventory

| Area | Repair | Status |
|---|---|---|
| Page banner | Restored slate/blue vertical gradient and 20px radial-dot layer | PASS |
| Hero container | Restored 1280px constrained container and responsive gutters | PASS |
| Hero badge | Restored outlined pill, compact type and blue decorative mark | PASS |
| Policy layout | Native Flatsome tabs styled as React 4/8 desktop grid | PASS |
| Tab controls | Restored 48px controls, 12px radius, border, icons, navy active state and amber accent | PASS |
| Content card | Restored slate-50 surface, 1px border, 16px radius, padding and light shadow | PASS |
| Card heading | Restored navy icon tile, divider and React heading rhythm | PASS |
| Nested legal cards | Retained source copy; aligned border, radius, padding, lists and vertical rhythm | PASS |
| CTA background | Restored slate-900 background with 24px cyan radial-dot pattern | PASS |
| CTA composition | Centered badge, heading, description and two-button row; stacks on mobile | PASS |
| Responsive behavior | Two columns at desktop; controls/content stack at tablet/mobile | PASS |

The existing five-tab native interaction and canonical fragment behavior were retained. No JavaScript logic or legal wording was replaced.

Fresh React/WordPress captures are stored in `wordpress/audit/task08_9-screens/` for 1440, 1024, 768 and 390px. The focused technical result is 12/12 safe across Home, Services and Policies.

## Shared root-cause review

The Header defect was global configuration. The remaining Policies differences were page-specific consequences of Flatsome's native tab DOM and missing decorative utility markup. The visual repair is scoped to `.arden-react-page--policies`, except for evidence-based Header Builder rules. No broad site-wide card, section, heading, or button redesign was applied.

## Result

**NO MATERIAL UNAPPROVED POLICIES DIFFERENCE**

