# SEO field readiness

Status: **architecture ready; Rank Math not installed locally.** Indexing is disabled (`blog_public=0`).

All Arden Pages, Posts, categories and the Project CPT can accept Rank Math title, meta description, canonical, social title, social description and social image after the plugin is installed. The child theme does not hard-code those fields or JSON-LD.

Per-page workflow: install Rank Math officially, open each Draft, enter approved fields without rewriting body content, select a production Media Library social image, leave canonical automatic until the final HTTPS domain exists, and keep the local/staging URL noindex. Configure Project archive/CPT, Posts, Categories, Search and 404 according to `RANK_MATH_SETUP.md`. Do not submit a localhost sitemap.
