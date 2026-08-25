# Arden Home — UX Builder blueprint

## Global rules

- Page template: Flatsome `Page - Full Width`; add `arden-page` to the page custom CSS class.
- Content width: 1280px. Standard section space: 56px mobile, 56–80px tablet/desktop.
- Heading order: one H1 in Hero; section titles H2; card titles H3.
- Images: upload WebP/AVIF where supported, preserve width/height metadata and useful alt text. Hero/factory 4:3; cards 16:10; avatars 1:1.
- Business contact details in the React mapping are unverified placeholders. Enter them only after confirmation in WordPress Admin.

## Home sequence and ownership

| # | Section / React source | Implementation | Builder structure and class | Desktop / tablet / mobile | Editable fields |
|---|---|---|---|---|---|
| 1 | Hero — `HeroSection.tsx` | UX Builder | Section `.arden-section.arden-hero` → Row → 7/12 Text + buttons / 5/12 Image box `.arden-hero__media` | 7/5 / 6/6 / stacked text-first | Eyebrow, H1 + highlighted line, description, 3 badges, 2 buttons, image/caption, 3 metrics |
| 2 | Trust Bar — `TrustBarSection.tsx` | UX Block `Arden Trust Bar` | Section `.arden-trust-bar` → Row → four Icon Boxes | 4 cols / 2 cols / 1 col | Icons, title, badge, description |
| 3 | Services — `ServicesGridSection.tsx` | UX Builder | Section `.arden-section.arden-services` → title row → 3 Image Boxes | 3 / 2 / 1 | Badge, H2, subtitle, cards, links, view-all button |
| 4 | Products — `ProductGridSection.tsx` | UX Builder | Section `.arden-section.arden-products` → title → Tabs + 3 Image Boxes | 3 / 2 / 1; tabs scroll on narrow screens | Heading, tabs, images, category, material, MOQ, links |
| 5 | Metrics — `MetricsSection.tsx` | UX Builder | Section `.arden-metrics` → Row → five Text columns | 5 / 3+2 / 2+2+1 | Value, label, sublabel |
| 6 | Factory — `FactorySection.tsx` | UX Block `Arden Factory` | Section `.arden-section.arden-factory` → title → four Image Boxes → dark CTA row | 4 / 2 / 1 | Heading, departments, equipment, images, CTA |
| 7 | Capabilities — `CapabilitiesSection.tsx` | UX Builder | Section `.arden-section.arden-capabilities` → 5/12 Image / 7/12 Icon Boxes | 5/7 / 5/7 / stacked | Image/caption, heading, capability number/title/text, button |
| 8 | Process — `ProcessStepsSection.tsx` | UX Block `Arden Process` | Section `.arden-section.arden-process` → title → six Icon Boxes | 3 or 6 / 2 / 1 | Step number, title, text, badge/icon |
| 9 | MOQ — `MOQSection.tsx` | UX Block `Arden MOQ Policy` | Section `.arden-section.arden-section--alt.arden-moq` → title → three cards; recommended card `.arden-card--popular` | 3 / 3 or 2+1 / 1 | Range, tier, discount, lead time, benefits, audience, popular flag, CTA |
| 10 | Pricing — `PricingCalculatorSection.tsx` | UX Builder pilot | Section `.arden-section.arden-pricing` → title → Tabs/Text/Table or form plugin embed | 2-panel / stacked / stacked | Product, fabric, MOQ, price range, lead time, disclaimer. Replace static estimates with approved data |
| 11 | Portfolio — `PortfolioGridSection.tsx` | Dynamic shortcode in UX Builder | Section `.arden-section.arden-portfolio` → title → `[arden_projects count="6"]` | 3 / 2 / 1 | Section copy in Builder; project records/images in WordPress. Falls back to posts until `project` CPT exists |
| 12 | Why Choose — `WhyChooseUsSection.tsx` | UX Builder | Section `.arden-section.arden-section--alt.arden-why-choose` → title → six Icon Boxes | 3 / 2 / 1 | Icon, title, text, badge |
| 13 | Testimonials — `TestimonialsSection.tsx` | UX Block `Arden Testimonials` | Section `.arden-section.arden-testimonials` → title → 3 testimonial boxes | 3 / 3 / 1 | Rating, quote, avatar, founder, role, brand, product/quantity |
| 14 | Blog — `BlogGridSection.tsx` | Dynamic shortcode in UX Builder | Section `.arden-section.arden-section--alt.arden-blog` → title → `[arden_recent_posts count="3"]` | 3 / 2 / 1 | Section copy/button in Builder; articles and thumbnails in Posts |
| 15 | FAQ — `FAQSection.tsx` | UX Block `Arden FAQ Accordion` | Section `.arden-section.arden-faq` → title → native Accordion | centered 768px / same / full width | Questions and answers; default open item. Rank Math owns schema configuration |
| 16 | CTA — `CTASection.tsx` | UX Block `Arden CTA Banner` | Section `.arden-section.arden-section--dark.arden-cta` → centered Text + two Buttons | inline / wrapped / stacked | Kicker, H2, subtitle, button text/links, verified phone |

## Builder notes

Use native Section, Row, Column, Text, Image, Button, Icon Box, Tabs and Accordion elements. Apply the listed Arden classes in each element's Advanced → CSS class field. Avoid duplicating FAQ JSON-LD in HTML if Rank Math FAQ schema is enabled. Header is built in Flatsome Header Builder and footer as a global UX Block/widget layout, outside this page.
