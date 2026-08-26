# Task 08 pre-flight

Snapshot taken before Task 08 mutations on 2026-08-26.

- WordPress: `C:\xampp\htdocs\mytest`, database `mytest` on `localhost`, prefix `wp_`.
- Uploads: `C:\xampp\htdocs\mytest\wp-content\uploads`.
- Active theme: `flatsome-child` 2.0.0; parent `flatsome` 3.17.7.
- Active plugins before Task 08: Classic Editor 1.7.0 only.
- Homepage: page 48, static front page; permalink structure `/%year%/%monthnum%/%day%/%postname%/`.
- Primary menu: term 4 assigned to `primary`. Initial items IDs 118–124. Footer block: `arden-footer` (block 59). Header Builder used the primary nav, search, CTA, sticky header and reconstructed SVG logo.
- Initial page IDs: Home 48 (published); Drafts 81, 82, 83, 84, 85, 86, 87, 95, 96, 97, 98, 99, 100, 101, 111.
- Initial UX Blocks: 26, 28, 30, 33, 35, 37, 39, 59 (published).
- Important finding: `blog_public` was `1`; Task 08 restored staging safety to `0`.

Recoverable backups:

- `wordpress/backups/task08-preflight-20260826/mytest.sql`
- `wordpress/backups/task08-preflight-20260826/uploads.zip`
- `wordpress/backups/task08-preflight-20260826/flatsome-child-live.zip`

No pre-existing Page, Post, Project, upload, plugin or theme was deleted.
