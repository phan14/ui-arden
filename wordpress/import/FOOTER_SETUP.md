# Global Footer setup

The Footer is global and is intentionally absent from `home-flatsome.txt`.

1. Create a UX Block named **Arden Footer** with slug `arden-footer`, paste `ux-blocks/arden-footer.txt` in the Code editor, or use Flatsome Footer widgets if preferred.
2. Use a four-column Row: brand summary; service menu; contact details; map/directions. Stack to two columns on tablet and one column on mobile.
3. Use tokens `ARDEN_PHONE`, `ARDEN_EMAIL`, `ARDEN_ADDRESS`, `ARDEN_OPENING_HOURS` until verified. Legal company name and tax data must also be verified before publishing.
4. Add a bottom Row for policy links, copyright and approved social profiles.
5. Assign the block globally in Flatsome Footer settings. Do not paste the Footer into Home or other pages.
6. The Home already ends with `[block id="arden-cta"]`. If the same CTA is configured globally as a pre-footer, remove that one block reference from Home to prevent duplication—use exactly one placement.
7. Verify keyboard focus, contrast, map privacy/loading behavior and mobile link wrapping.
8. Give the Footer UX Block root Section class `arden-footer`; use `arden-footer__contact`, `arden-footer__nav`, `arden-footer__social` and `arden-footer__bottom` on the corresponding elements.
9. When Mobile CTA is enabled, the child theme adds mobile bottom padding so Footer controls are not covered. Verify this on iOS safe-area devices.
