# Task 08.8 Home 1:1 difference audit

React `src/pages/HomePage.tsx` is the source of truth. The Home route has exactly 16 authored sections in this order.

| # | React component | WordPress source mapping | Status |
|---:|---|---|---|
| 1 | HeroSection | inline hero section | Present |
| 2 | TrustBarSection | `arden-trust-bar` UX Block | Present |
| 3 | ServicesGridSection | inline services section | Present |
| 4 | ProductGridSection | inline products section | Present, detailed inventory differs |
| 5 | MetricsSection | inline metrics section | Present |
| 6 | FactorySection | `arden-factory` UX Block | Present |
| 7 | CapabilitiesSection | inline capabilities section | Present |
| 8 | ProcessStepsSection | `arden-process` UX Block | Present |
| 9 | MOQSection | `arden-moq-policy` UX Block | Present |
| 10 | PricingCalculatorSection | inline pricing section | Present, native controls differ |
| 11 | PortfolioGridSection | inline portfolio plus WordPress dynamic output | Present, media/control inventory differs |
| 12 | WhyChooseUsSection | inline why-choose section | Present |
| 13 | TestimonialsSection | `arden-testimonials` UX Block | Present |
| 14 | BlogGridSection | inline blog plus WordPress dynamic output | Present, production data constrained |
| 15 | FAQSection | `arden-faq` UX Block | Present |
| 16 | CTASection | `arden-cta` UX Block | Present |

## Fresh focused evidence

At 1440 px after the scoped cascade repair:

- section count: React 16 / WordPress 16
- H2 count: React 13 / WordPress 13
- H3 count: React 60 / WordPress 52
- image count: React 29 / WordPress 20
- control count: React 34 / WordPress 44
- text-set similarity: `0.9478021978021978`

The same content/structure defect therefore remains at all required breakpoints. The missing eight H3 elements and nine images, plus ten additional controls, must be reconciled against the rendered DOM of each corresponding section. Dynamic Posts/Projects cannot be filled with fabricated business records.

## Freeze decision

The 16-section order is frozen and must not be simplified, merged, or redesigned. Task 08.8 did not establish exact detailed parity, so Home is not accepted for production handoff.
