# Dynamic fidelity policy

React remains the template and visual source of truth. WordPress remains the production content source for Posts and Projects.

## Validation split

- **Template fidelity:** containers, grid, card anatomy, typography, image ratio, metadata placement, CTA treatment, responsive behavior, empty state, and single/archive/search semantics are testable without fabricated records.
- **Record fidelity:** titles, excerpts, dates, taxonomies, featured images, project metrics, and result counts depend on approved WordPress records.

## Current data-dependent routes/sections

- Projects archive and Home portfolio loop
- Project case study
- News archive and Home recent-post loop
- Category archive
- Search results

Only existing approved records or the real empty state may be used. React sample records must not be inserted merely to satisfy counts. Missing record-dependent cards/images therefore remain a documented data dependency, not authorization to fabricate business content.

Template regressions still fail acceptance; absence of unapproved production records alone does not fail otherwise-correct static templates.
