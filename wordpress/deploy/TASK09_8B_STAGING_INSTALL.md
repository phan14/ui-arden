# Task 09.8B Staging Installation Runbook

This runbook applies only to:

`https://ardenstyle.vn/staging/wp-admin/`

Do not use it in the production administrator at `https://ardenstyle.vn/wp-admin/`.

## Before upload

- [ ] Confirm the browser URL contains `/staging/`.
- [ ] Confirm the production admin is not open.
- [ ] Confirm the staging backup and rollback theme remain available.
- [ ] Confirm the licensed Flatsome parent theme exists on staging.
- [ ] Verify the ZIP SHA-256 is `FD5CCE72AD28BCC50951DA266CA2BB51884238F62339ADA32F482E2383C01990`.
- [ ] Confirm staging remains protected and `noindex,nofollow`.

## Upload path

In staging WordPress only:

1. Open **Appearance → Themes → Add New → Upload Theme**.
2. Select `arden-child-2.0.1-staging.zip`.
3. Upload, but do not proceed blindly if WordPress reports an existing destination.

## Existing theme directory safety gate

If WordPress reports **Destination folder already exists**, stop and classify the state as:

**EXISTING THEME DIRECTORY DETECTED**

Do not delete or overwrite the directory. Record its active/inactive state and version. Preserve rollback by making a verified staging-only filesystem backup or renaming the exact staging directory to a timestamped rollback name through the hosting file manager, only after confirming the resolved path is under `/public_html/staging/wp-content/themes/`. Keep the prior copy intact, then retry the upload. If the exact path or rollback copy cannot be verified, stop and request operator review.

Never rename, delete or overwrite anything under production `/public_html/wp-content/themes/`.

## Staging activation checklist

- [ ] Verify the installed theme is Arden Flatsome Child 2.0.1.
- [ ] Activate it on staging only.
- [ ] Homepage returns HTTP 200.
- [ ] `wp-admin` remains accessible.
- [ ] CSS, JavaScript and images load.
- [ ] No PHP fatal or redirect loop occurs.
- [ ] Homepage uses the approved Arden UI.
- [ ] Header, footer and desktop navigation work.
- [ ] Mobile navigation and layout work.
- [ ] Homepage has one logical H1.
- [ ] WooCommerce remains available.
- [ ] Rank Math remains available.
- [ ] Staging remains `noindex,nofollow`.
- [ ] Production remains unchanged.

## Rollback

If activation causes a fatal or material layout failure:

1. Do not Push to Live.
2. Restore or activate the previous staging theme copy.
3. Preserve the staging database.
4. Leave production unchanged.
5. Record the failure and the exact staging state.
6. Return to the frozen local source for correction and validation.

This runbook does not authorize deployment, activation, production modification, indexing changes or Push to Live.

