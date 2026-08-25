# Pages Runtime Visual Diff

Validated at 1440, 1024, 768 and 390 pixels for all imported drafts.

## Fixed during runtime validation

- Restored exact React section padding over Flatsome's generated inline 30px padding.
- Preserved exact punctuation by disabling `wptexturize` only for `arden-react-page` content.
- Restored Contact and Quote `<form>` markup by importing under an authenticated administrator context.
- Confirmed no horizontal overflow in dynamic/system templates at all four widths.

## Page-height comparison after spacing fix

Most static/service drafts are within approximately ±8% of React total height. Notable remaining tablet/mobile differences:

- FAQ: approximately -8% to -9% at 1024/768.
- Careers: approximately -11% / -15% / -10% at 1024/768/390.
- Policies: approximately -5% to -10% at smaller widths.
- Other pages: generally between -5% and +8%, including global Header/Footer differences.

These differences are primarily caused by missing React interactive expanded/alternate states and the still-unmatched global Flatsome Header/Footer, not missing top-level sections.

## Remaining visual differences

- Header still uses the current Flatsome logo/configuration rather than the exact React Arden header.
- Footer architecture is global, but spacing/logo/detail alignment is not yet 1:1.
- Interactive tabs/accordions/selectors do not yet reproduce all alternate React states.
- Inner section content remains a UX HTML element, so per-element UX Builder controls are not yet native.

Visual status: **runtime baseline validated, 1:1 final visual QA not yet clean.**

