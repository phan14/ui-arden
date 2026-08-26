# Accessibility final audit

Status: **PASS for automated structural/runtime checks; manual assistive-technology verification remains pre-publish.**

- Every audited page has one H1, no horizontal overflow, no raw shortcode, no missing image alt and no browser runtime error at 1440/1024/768/390.
- Links and real controls remain semantic; calculator/filter/quote selectors use buttons or native inputs. Focus styles are present for form controls and submit actions.
- CF7 definitions use labels, native email/tel/date/select/textarea/checkbox controls, required validation and native error/status output.
- Decorative inline icons are `aria-hidden`; accordions/tabs use Flatsome behavior. Reduced-motion rules in the design layer are preserved.
- Color palette and typography remain source-faithful; verify contrast with final logo/photos and browser zoom before publish.

Manual checklist: keyboard-only menu/accordion/form submission, visible focus on every control, screen-reader names/status announcements, 200% zoom/reflow, reduced-motion preference, and touch targets on a real 390px-class device.
