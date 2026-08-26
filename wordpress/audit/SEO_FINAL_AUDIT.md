# SEO final audit

Status: **PASS at theme/runtime level; Rank Math production configuration remains manual.**

- Automated runtime matrix found exactly one H1 on Home, About, T-Shirt, Manufacturing, FAQ, Contact, Quote, Projects, News, Search and 404 at all four viewports.
- H2/H3 remain section/card hierarchy; templates provide `main`, article/archive semantics and native WordPress permalinks.
- Theme hard-coded JSON-LD: none. Breadcrumb microdata was removed from imported content. Rank Math is the sole schema/metadata owner.
- Runtime code contains no localhost, Windows path, `.tsx`, React asset or `/src/assets` dependency.
- Images migrated for the audited pages and Home use attachment IDs with existing-content alt text. Runtime scan found zero images missing an `alt` attribute.
- Dynamic queries request published records only and render safe empty states. No fake Posts/Projects remain in theme runtime.
- Internal destinations use WordPress-compatible relative paths. Hash links used by the fabric selector are intentional controls, not navigation CTAs.
- Search and 404 indexability must be set in Rank Math; staging remains non-indexed until the cutover checklist is complete.

Schema ownership: Rank Math — Organization/LocalBusiness, WebSite, WebPage, Article, Breadcrumb, FAQ and social metadata. Child theme — semantic HTML and visual breadcrumbs only. Do not add duplicate JSON-LD to UX Builder.
