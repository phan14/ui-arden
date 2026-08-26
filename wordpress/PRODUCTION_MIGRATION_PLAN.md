# Production migration plan

## Scenario A — new/empty production WordPress

Use a full-site migration of database, uploads, Arden child theme, licensed Flatsome parent, plugins and configuration. Take a destination backup first, migrate with a serialized-safe tool, replace URLs, save permalinks, then validate attachments, forms, menus, Header/Footer, Rank Math and all routes before enabling indexing.

## Scenario B — production already contains data

Use selective migration. Do not overwrite the production database. Export/import the Arden Pages and UX Blocks with stable mapping, Media Library attachments, Project CPT configuration, menus/theme mods and approved plugin settings. Resolve ID/slug conflicts deliberately; rebuild CF7 forms or migrate them with their IDs remapped. Preserve existing users, orders, posts, SEO records and unrelated theme/plugin settings.

## URL replacement

Replace `http://localhost/mytest` with the final HTTPS origin only in the migrated copy. Use WP-CLI `search-replace --all-tables-with-prefix --precise --recurse-objects` or a reputable migration plugin that understands PHP serialized data. Never use raw SQL text replacement. Run a dry run, back up first, exclude GUID changes unless the migration tool specifically handles them, then scan for localhost and mixed content.

Draft statuses and `blog_public=0` must survive migration until business data, forms, SEO and final QA are approved.
