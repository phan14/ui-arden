# React Home → WordPress 1:1 mapping

Source and WordPress order are both exactly:

1. `HeroSection` → native UX Builder Section
2. `TrustBarSection` → UX Block `arden-trust-bar`
3. `ServicesGridSection` → native UX Builder Section
4. `ProductGridSection` → native UX Builder Section
5. `MetricsSection` → native UX Builder Section
6. `FactorySection` → UX Block `arden-factory`
7. `CapabilitiesSection` → native UX Builder Section
8. `ProcessStepsSection` → UX Block `arden-process`
9. `MOQSection` → UX Block `arden-moq-policy`
10. `PricingCalculatorSection` → minimal shortcode `arden_pricing_calculator`
11. `PortfolioGridSection` → static source-faithful Home grid; WordPress records may replace it only when their fields match source
12. `WhyChooseUsSection` → native UX Builder Section
13. `TestimonialsSection` → UX Block `arden-testimonials`
14. `BlogGridSection` → static source-faithful Home grid; WordPress posts may replace it only when their fields match source
15. `FAQSection` → UX Block `arden-faq`
16. `CTASection` → UX Block `arden-cta`

Each mapping must preserve exact heading, paragraph, CTA, card/image/count/order and responsive column behavior recorded in the two inventories. Native UX Builder is preferred; CSS and minimal shortcode code are used only where native elements cannot retain the React interaction.
