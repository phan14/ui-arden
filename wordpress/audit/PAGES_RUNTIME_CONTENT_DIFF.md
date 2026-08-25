# Pages Runtime Content Diff

Runtime checks were executed at 1440, 1024, 768 and 390 pixels through authenticated WordPress draft previews.

## Static and service drafts

All 14 drafts pass comparison of complete rendered text (ignoring layout-only whitespace), H1/H2/H3 and CTA labels against their React routes.

**NO UNAPPROVED CONTENT DIFFERENCE for Batch A and Batch B.**

WordPress `wptexturize` was scoped off for these source-derived pages because it changed exact source punctuation such as `...` and hyphen ranges.

## Dynamic/system targets

- News, Single Post, Projects, Single Project, Category and Search render their WordPress-managed values without runtime errors.
- Draft Post 109 and Project 110 are explicitly labelled Task 05 validation records and do not contain production claims.
- Dynamic record content is intentionally not equal to React demo records. This remains an approved validation-only difference until real WordPress records are entered.
- The 404 template preserves the exact React heading, description and navigation labels.

Sitewide production content equivalence cannot be declared until real Posts and Project CPT records are populated.

