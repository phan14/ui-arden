# TASK 09.5 — SEO Migration Rules

1. Preserve high-performing production URLs exactly whenever possible.
2. Never mass-change slugs to match the React or staging route vocabulary.
3. Every removed indexed URL requires an explicit, reviewed row in the decision matrix.
4. Use only relevant, one-hop permanent redirects after staging verification.
5. Reject redirect chains, loops, blanket homepage redirects and soft-404 destinations.
6. Preserve canonical intent and ensure each retained URL self-canonicalizes on HTTPS/non-www.
7. Preserve valuable content, dates, authors, headings, schema and Rank Math metadata before improving it.
8. Preserve internal-link destinations; update links only from an approved mapping.
9. Preserve valuable media URLs, attachment metadata and alt text; do not regenerate upload paths unnecessarily.
10. Keep all root-level post permalinks and WooCommerce product URLs unless a reviewed exception is approved.
11. Keep the production database/content and integrate the Arden theme/pages selectively on a protected clone.
12. Do not change domain during this migration. `ardenstyle.vn` remains out of scope.
13. Preserve existing service URLs where GSC shows value; adapt staged pages to them.
14. Do not infer zero SEO value from absence in GSC; require backlink/index/content review.
15. A `410 CANDIDATE` label never authorizes deletion. No URL currently has an approved 410 action.
16. Capture and restore-test files/database, Rank Math settings/redirects, server rules, media, menus and WooCommerce data before integration.
17. Validate old/new parity for status, canonical, robots, title, description, schema, H1, content, media and internal links on staging.
18. Keep production indexing unchanged until an approved cutover plan and rollback gate exist.

## Architecture decision

Choose option C: build a protected production staging copy and perform a controlled database/content merge, while following option B’s preservation principle.

Do not use option A (full database replacement). The safe implementation is to clone the existing production database/files, retain IDs/content/SEO/WooCommerce records, integrate the validated Arden child theme and new pages selectively as Drafts, then reconcile/test on the clone. This gives rollback evidence and prevents the staged empty/draft database from replacing the established SEO corpus.
