# Rank Math setup for Arden

Keep staging/local indexing disabled. Configure production URLs only after DNS, HTTPS and WordPress Address/Site Address are final.

1. Run Rank Math Setup Wizard and enter the verified Organization or Local Business name, logo, phone, address and social profiles.
2. Homepage: set title, description, canonical and social image in Rank Math; do not add metadata in UX Builder.
3. Pages: use WebPage schema by default. Review title/description and canonical page by page.
4. Posts: enable Article schema, author/date data and Posts sitemap.
5. Categories: index only useful archives; add unique descriptions or set thin archives to noindex.
6. Project CPT: enable sitemap and appropriate WebPage/Article-like schema only if Rank Math supports the intended content model. Configure the `/du-an/` archive title and description separately.
7. Search and 404: noindex search results; 404 must never be indexed or added to sitemap.
8. Breadcrumbs: enable Rank Math breadcrumbs and insert through the supported Flatsome/theme location. Rank Math owns Breadcrumb schema.
9. Sitemaps: include Pages, Posts, Projects and useful taxonomies; exclude attachments and staging/test records.
10. Robots/canonical: use self-canonicals on production; never enter localhost manually. Verify robots.txt and page-level robots after cutover.
11. OpenGraph: configure default production logo/social image and validate Homepage, Post and Project sharing cards.
12. Schema ownership: Rank Math owns Organization/LocalBusiness, WebSite, WebPage, Article, Breadcrumb and FAQ schema. The child theme outputs semantic HTML only.

Before enabling indexing, clear caches, regenerate sitemap, inspect canonical/robots/schema source on representative URLs, and submit only the production sitemap.
