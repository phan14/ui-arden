# Approved WordPress implementation differences

These differences are accepted only when hidden or visually immaterial and when visible content/order remains equal to React.

| System | Approved difference | Validation normalization |
|---|---|---|
| Contact Form 7 | Hidden internal fields, response region, validation wrappers, `wpcf7` classes and checkbox input elements behind visible selector cards | Ignore hidden/internal nodes and compare visible labels, placeholders, options, selector labels and submit CTA. |
| Flatsome Accordion | Native toggle anchor/button, icon, ARIA attributes, generated content wrapper | Count the one visible question/job heading and answer, not internal toggle wrappers. |
| Flatsome Tabs | Native tablist/tab/tabpanel wrappers and ARIA state | Compare five visible policy controls, the active visible panel, order and canonical fragments. Hidden inactive panels are not duplicate visible content. |
| WordPress loops | Query/loop wrapper elements and pagination scaffolding | Compare visible cards/empty state and ordering; do not count invisible wrappers as cards or controls. |
| Breadcrumb integration | WordPress/SEO wrapper markup | Compare visible breadcrumb labels, order and destinations only. |

Not approved: missing visible text, changed wording, missing headings/cards/images/CTAs, incorrect metrics, duplicate visible controls, or layout differences.
