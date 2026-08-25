# Task 06C report — Native propagation

## Result

Task 06C passes the native architecture and runtime gates. Twelve remaining UX Builder pages were converted; six dynamic/system routes retain proper WordPress template architecture. No final ZIP was created and SEO Final QA was not started.

## Editability

- Converted pages: 12.
- Native elements: 1,411.
- Hybrid elements: 23.
- Overall native editability: 98.4%.
- Pages below 85%: none.
- Section-sized UX HTML blobs remaining: none.

The 23 small hybrid elements are 20 external images, two preserved forms and one Fabric Guide search field. External images stay as isolated markup until permanent Media Library attachments are approved. Contact/Quote field lists stay identical to React while awaiting the approved form plugin.

## Interactions

- Careers: native Accordion containing all four complete job states; keyboard and ARIA behavior supplied by Flatsome.
- Policies: native vertical Tabs containing all five policy states.
- Fabric Guide: search/category filtering restored with scoped vanilla JavaScript.
- Quote: native select fields work normally; multi-select technique buttons use scoped vanilla JavaScript and `aria-pressed`.
- Existing native Tabs/Accordion from Task 06B remain unchanged.
- No React runtime.

## Dynamic templates

| Route type | Architecture | Status |
|---|---|---|
| News | `page-tin-tuc.php` / Posts query | PASS |
| Category | `category.php` taxonomy archive | PASS |
| Projects | `archive-project.php` CPT archive | PASS |
| Case Study | `single-project.php` | PASS |
| Search | `search.php` native query | PASS |
| 404 | `404.php` | PASS |

Static presentation remains in template markup/helpers; dynamic records were not copied into UX Builder content.

## Freeze and runtime

- Content: **NO UNAPPROVED CONTENT DIFFERENCE**. Careers/Policies additions are alternate states copied from source data.
- Structure: **NO UNAPPROVED STRUCTURE DIFFERENCE**; all 69 sections retain order and ownership.
- Representative runtime: About, Shirt Service, Manufacturing, Contact, Quote, Projects and Search PASS at 1440/1024/768/390.
- All runtime responses: HTTP 200; no raw shortcode, horizontal overflow, React runtime or page errors.
- PHP lint: PASS.
- TypeScript: PASS.
- Registered shortcode render: PASS for all 14 page imports.
- Header/Footer remain global and stable.
- All 12 updated pages remain Draft.

## Form readiness

Contact and Quote preserve the React field lists and styling hooks. They intentionally have no submission backend. Contact Form 7 remains the recommendation; no plugin was installed, activated or configured.

## Production blockers

- Approve/install/configure Contact Form 7 and mail/spam controls.
- Replace external image markup with approved Media Library attachments to make images natively selectable.
- Perform final editorial/brand review of contact details and the temporary SVG logo.
- SEO Final QA and production packaging remain separate future tasks.
