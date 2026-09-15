# Task 09.8A-R — Local Fidelity Gate Reopened

Date: 2026-08-27  
Git baseline HEAD: `5dc2344c920afa87bdf58b713e1963f3dbc78be9`  
Scope: local WordPress only. No ZIP was built. Staging and production were not accessed or modified.

## Outcome

The independent report was correct: the old 84/84 result was not sufficient. Every listed P0/P1 was reproduced before repair. The local WordPress public state initially had only Home and the project archive available while converted pages and dynamic records remained Draft; shared root-relative links escaped `/mytest/`.

The repaired public state now has all 21 mapped routes available at their canonical local permalinks, 6 project records, one canonical case study, and 5 React-source articles. Default WordPress content is absent from public presentation.

## Why the previous 84/84 missed the defects

The former harness used an administrator auth cookie and Draft preview query URLs, substituted `/tim-kiem` with `/?s=may`, substituted the case study with a Draft preview, exempted dynamic routes from semantic content/structure comparison, and allowed expected 404 templates to count as runtime PASS. It also compared against earlier WordPress evidence rather than independently gating the current public React-to-WordPress result. Full findings are in `TASK09_8A_R_TEST_GAP_ANALYSIS.md`.

## Repairs made

- Added a native public Search page template.
- Published the 14 converted local pages required by the public route map.
- Imported 6 projects and 5 articles from `src/data/siteData.ts` into local WordPress.
- Restored the project, case-study, news, and article permalink paths.
- Drafted default WordPress posts so they cannot appear publicly.
- Rebased frontend header/footer/UX Block links with WordPress `home_url()` handling.
- Rebuilt the case-study native template and completed project archive sections.
- Fixed FAQ/search interaction behavior, Contact native required validation, and Quote labels.
- Fixed shared mobile USP sizing, badge padding, banner proportions, and article heading scale.

## Fresh final regression

The final run was created after all repairs, used no auth cookie, used no Draft preview URL, and captured fresh paired React/WordPress screenshots.

- Routes: 21
- Breakpoints: 1440, 1024, 768, 390
- Combinations: 84
- Runtime: 84/84 PASS
- Responsive: 84/84 PASS
- Visual: 84/84 PASS
- Content: 84/84 PASS
- Structure: 84/84 PASS
- Interactions: 84/84 PASS
- Unexpected 404: 0
- CTA/base-path escapes: 0
- Default WordPress public content: 0
- Logged-out admin-bar contamination: 0
- P0: 0
- P1: 0

The React article comparison uses the actual `SinglePostSection` state reached through its News-card interaction because the React demo does not resolve article content directly from the pathname. WordPress article routes themselves were tested directly and return 200.

## Focused validation

- FAQ: 5 category tabs; switching tabs does not leave `/faq/`; selected state updates.
- Contact: name and phone have CF7 server validation plus HTML `required`.
- Quote: `yes`, `no`, and `need_design` are not visible labels.
- Projects: 6/6 source records visible.
- Search: `/tim-kiem` returns 200 and tab controls remain on-route.
- Logged-out frontend: no `#wpadminbar` across all 21 routes.

## Static validation

- Child-theme PHP lint: 14/14 PASS
- TypeScript (`tsc --noEmit`): PASS
- React production build: PASS
- `git diff --check`: PASS (line-ending notices only; exit 0)

## Evidence

- `task09_8a_r-reproduction.json`
- `task09_8a_r-results.json`
- `task09_8a_r-php-lint.json`
- `task09_8a_r-screens/`
- `TASK09_8A_R_MATRIX.md`
- `TASK09_8A_R_DEFECTS.md`
- `TASK09_8A_R_TEST_GAP_ANALYSIS.md`

READY TO REBUILD STAGING ZIP
