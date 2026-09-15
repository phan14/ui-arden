# Task 09.8 — Proposed Arden Staging Integration Plan

This plan is not authorized until Task 09.7B isolation, storage and side-effect blockers pass.

1. Record authenticated staging DB name/prefix, document root, plugin/theme/version inventory and Restore Point B checksum/restore test.
2. Confirm Basic Auth or equivalent protection, `blog_public=0`, noindex, no GSC submission, and disabled mail/payments/webhooks/analytics contamination.
3. Export staging Pages/Posts/Products/terms/media/menus/UX Blocks/CF7/Rank Math/redirects and freeze the preservation inventory.
4. Verify the licensed Flatsome parent version is compatible; do not downgrade blindly.
5. Upload Arden child theme 2.0.1 only to staging, verify hashes/dependencies, activate only after a rollback snapshot.
6. Import Arden media by manifest/checksum, creating staging attachment IDs; record all remaps.
7. Import eight UX Blocks with staging IDs and update block references.
8. Integrate Home and mapped Pages according to `TASK09_7B_ARDEN_INTEGRATION_MAP.md`; new Pages stay Draft until their staging review step.
9. Configure Header Builder, Footer block and menus from recorded snapshots/deltas.
10. Import/remap Contact and Quote forms with `skip_mail` or an allow-listed test recipient; trigger no external mail.
11. Keep all existing posts, products, categories, media, Rank Math metadata and redirects. Deploy dynamic templates without duplicate content records.
12. Run focused route/interaction/form/media/SEO parity QA while staging stays noindex.
13. Create Restore Point C only after storage is proven sufficient, preferably off-host.
14. Stop and report. Softaculous Push to Live remains unauthorized.

Every write requires a pre-write object/database backup, validation and a staging-only rollback action. No production action belongs to Task 09.8.
