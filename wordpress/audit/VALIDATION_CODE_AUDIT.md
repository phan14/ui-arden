# Validation-only code audit

| Item | Classification | Shipping decision |
|---|---|---|
| `wordpress/tools/sync-task05-drafts.php` | DEV ONLY | Outside child theme; do not package. |
| `validate-task05-runtime.cjs` | DEV ONLY | Outside child theme; do not package. |
| `validate-task05-dynamic.cjs` | DEV ONLY | Outside child theme; do not package. |
| `validate-page-imports.cjs` | DEV ONLY | Outside child theme; do not package. |
| `validate-page-shortcodes.php` | DEV ONLY | Outside child theme; do not package. |
| `arden_task05_validation_query()` | DEV ONLY runtime aid | Now requires `WP_DEBUG`, authenticated `edit_posts`, explicit query flag and non-admin main query. Public production visitors cannot activate it when `WP_DEBUG` is false. Remove before final package if no longer needed. |
| Dynamic templates/helpers | PRODUCTION REQUIRED | Retain. |
| React-page CSS compatibility layer | PRODUCTION REQUIRED while imports remain hybrid | Retain. |

