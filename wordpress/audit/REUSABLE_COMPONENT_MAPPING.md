# Reusable component mapping

| React component/pattern | WordPress implementation | Content rule |
|---|---|---|
| Global Header | Flatsome Header Builder | Configure once; never paste into page content. |
| Global Footer | Global footer UX Block (`arden-footer`) | Configure once; never paste into page content. |
| `TrustBarSection` | UX Block `arden-trust-bar` | Shared only where React uses the same trust content. |
| `FactorySection` | UX Block `arden-factory` | Shared source content. |
| `ProcessStepsSection` | UX Block `arden-process` | Shared default process; page-specific heading remains page-owned. |
| `MOQSection` | UX Block `arden-moq-policy` | Shared source content. |
| `TestimonialsSection` | UX Block `arden-testimonials` | Shared source testimonials. |
| `FAQSection` | UX Block `arden-faq` when question set is identical | Page-specific FAQ sets must remain page content. |
| `CTASection` | UX Block `arden-cta` only for identical Home CTA | Page-specific title/subtitle/button labels remain page-owned. |
| `PageBannerHeader` | Shared `.arden-page-hero` CSS/template helper | Content differs per page and is not shared as one UX Block. |
| Breadcrumb | `arden_breadcrumbs()` / Rank Math fallback | Global semantic pattern. |
| Cards, badges, buttons, tables | Shared child-theme CSS patterns | Visual reuse only; page content remains exact. |
| Contact/quote forms | React-shaped HTML plus WordPress form styling layer | No custom mail handler; submission backend remains unbound until a form solution is approved. |

Existing reusable UX Blocks: 8 (`arden-trust-bar`, `arden-factory`, `arden-process`, `arden-moq-policy`, `arden-testimonials`, `arden-faq`, `arden-cta`, `arden-footer`).

