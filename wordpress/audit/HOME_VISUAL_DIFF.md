# Home visual diff

Compared:

- Source: `references/react-home-reference.png` — 1440 × 13871
- Final rebuild: `references/wordpress-final-1.3.0.png` — 1440 × 13845

Matched or materially aligned:

- All 16 Home sections and their order.
- Overall page height and vertical rhythm.
- Desktop grid counts and principal column proportions.
- Alternating white/slate section backgrounds.
- 16px cards, slate borders, shadow hierarchy and navy/amber actions.
- Five-metric band, 4-card Factory, 6-row Capabilities, 9-card Process, 3-tier MOQ, 7/5 estimator, 6-card Portfolio, 6-card Why Choose, 3 Testimonials, 3 Blog cards and 5 FAQs.
- `Be Vietnam Pro` headings and `Plus Jakarta Sans` body font are now enqueued.

Remaining visible differences:

- Global Flatsome Header still requires the documented Header Builder configuration and approved Arden logo/menu; it is not hard-coded into Home.
- External Unsplash fallback loading can vary during local screenshot capture. All 17 token positions have runtime fallbacks and retain the intended ratio.
- A few decorative Lucide glyphs use lightweight inline SVG or the closest native Flatsome presentation rather than loading the Lucide runtime library.
- Factory card selection and Product tabs are visually represented but do not reproduce every React state transition.
- Minor Flatsome line-box and button rendering differences remain.

Custom compensation used:

- Scoped typography and font enqueue.
- React-equivalent section width, spacing, radius, border, shadow and aspect-ratio rules.
- Hero showcase overlay, Trust Bar icon tiles, testimonial avatars and interactive pricing shortcode.
- Source-faithful Portfolio and Blog shortcodes so missing WordPress records cannot reduce card counts.

Status: Home content/structure is accepted. Remaining differences are limited to manual Header Builder/logo configuration, permanent Media Library image assignment and minor Flatsome/browser rendering.
