# Pages Runtime Structure Diff

## Batch A and Batch B

At 1440, 1024, 768 and 390 pixels, all 14 drafts pass:

- section count;
- card count in the initially rendered React state;
- CTA count and order;
- image count;
- form count;
- H1/H2/H3 hierarchy;
- no raw shortcode output.

Each import is split per source section into native Flatsome structure:

`Section → Row → Column → UX HTML`

Section-level UX Builder editing and reordering is available. Inner React-derived markup is edited inside one UX HTML element per section; it is not yet decomposed into individual native Text/Image/Button elements.

## Batch C

Dynamic/system templates render successfully with minimal draft records. Demo card counts intentionally differ from React because only one validation Post and one validation Project were created. No fake production catalogue was seeded.

## Interaction gap

The initial DOM structure matches, but React conditional state is not fully present in the captured imports. FAQ answers beyond the initially open item, careers expanded details, tabs, selectors and modal state require a dedicated native interaction conversion. Therefore full interactive structure equivalence is not yet achieved.

