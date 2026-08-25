# Arden UX Block registry

Create these under **UX Blocks → Add New**. Slugs must match exactly so `[block id="…"]` remains portable.

| Block name | Slug | React component | Root class | Usage | Editable fields |
|---|---|---|---|---|---|
| Arden Trust Bar | `arden-trust-bar` | `TrustBarSection.tsx` | `.arden-trust-bar` | Home, About, Manufacturing, Services, FAQ | Four icons, titles, badges, descriptions |
| Arden Factory | `arden-factory` | `FactorySection.tsx` | `.arden-factory` | Home, About, Manufacturing | Heading copy, department images/content, equipment, CTA |
| Arden Process | `arden-process` | `ProcessStepsSection.tsx` | `.arden-process` | Home, About, Manufacturing, Case Study | Six steps, icons/numbers, badges, descriptions |
| Arden MOQ Policy | `arden-moq-policy` | `MOQSection.tsx` | `.arden-moq` | Home, Manufacturing, Quote | Tier ranges, discount, timing, benefits, recommended label, CTA |
| Arden Certifications | `arden-certifications-bar` | `CertificationsSection.tsx` | `.arden-certifications` | About, Manufacturing; optional Home | Certificate name, issuer, description, icon/badge |
| Arden Testimonials | `arden-testimonials` | `TestimonialsSection.tsx` | `.arden-testimonials` | Home, About, Services | Quote, rating, avatar, person/role/brand, order detail |
| Arden FAQ Accordion | `arden-faq` | `FAQSection.tsx` | `.arden-faq` | Home, Services, Quote, FAQ | Heading copy, questions/answers, initial open state |
| Arden CTA Banner | `arden-cta` | `CTASection.tsx` | `.arden-cta` | Global, Services, Blog, Contact | Kicker, H2, subtitle, two buttons, verified phone |
| Arden Contact Strip | `arden-contact-strip` | `ContactStripSection.tsx` | `.arden-contact-strip` | Header top bar or pre-footer | Verified phone, Zalo, address, status, CTA |

`CapabilitiesSection.tsx` remains page-owned UX Builder content in Phase 1 because its image/copy arrangement is easily editable and its reuse is not established. If later used across multiple pages without page-specific copy, promote it to `arden-factory-capabilities`.

Business identity, phone, address, email and operating hours shown in the React reference or old mapping are configuration candidates, not verified production data.
