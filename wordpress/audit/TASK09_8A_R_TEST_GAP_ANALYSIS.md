# Task 09.8A-R Test Gap Analysis

## Finding

The prior 84/84 result is not valid evidence of public-site readiness. It validated authenticated Draft previews and compared them with a previously approved WordPress screenshot baseline, rather than validating the current logged-out public URLs against React.

## Reproduced public baseline

Fresh logged-out checks on 2026-08-27 found 19 of the 21 target public WordPress routes returning HTTP 404. Only Home and the Projects archive returned 200. The public Projects archive had no published project records. The public database contained 15 converted Draft pages, one Draft project, one Draft validation post and one published default WordPress post.

## Why the old harness missed the defects

1. **Authenticated context:** the harness generated a WordPress administrator cookie and injected it into every WordPress browser context.
2. **Draft preview URLs:** 14 content routes used query URLs such as `?page_id=81&preview=true`, not their public pretty permalinks.
3. **Substituted routes:** Search React `/tim-kiem` was compared with WordPress `/?s=may`; Case Study used a Draft project preview; News used a Draft page preview.
4. **Expected 404 normalized as PASS:** the designated 404 case explicitly expected HTTP 404 and then counted it as a successful runtime case. This did not detect unexpected 404 responses on real content routes because those routes were never requested publicly.
5. **Dynamic content bypassed:** Projects, Case Study, News, Category and Search were included in a `dynamic` set. Their content and structure checks were forced to PASS without semantic comparison.
6. **Self-referential visual baseline:** current WordPress screenshots were compared to earlier approved WordPress screenshots, not directly accepted based on React fidelity. This can prove screenshot stability while preserving an earlier omission.
7. **Sampling tolerance:** the image test sampled every eighth pixel and allowed up to 1% changed samples. This is useful for rendering drift but cannot establish route/content completeness.
8. **Structure counts, not semantics:** static routes compared only heading/image/button/field/section counts with old WordPress output. Matching counts do not prove matching labels, destinations, records or user-facing behavior.
9. **Admin bar hidden by method rather than public validation:** related historical visual tools injected CSS to hide `#wpadminbar`; Task 09.8A used an authenticated context. Neither approach proved a clean logged-out public presentation. Fresh logged-out testing shows no admin bar, but this was not established by the old matrix.
10. **Stale selectors and cached assumptions:** the legacy interaction suite contained an encoding-damaged Services selector and obsolete Fabric Guide selectors. These were repaired at test level, but the suite still operated on preview URLs.
11. **CTA destination scope omitted:** the harness checked clipping and screenshots, but it did not fail links that resolved outside the `/mytest/` base. Fresh evidence found many visible root-relative destinations.
12. **Database state not a public gate:** the systems validator explicitly treated `blog_public=0` and all 15 converted pages remaining Draft as PASS. That freeze was appropriate for earlier non-public conversion work, but incompatible with a public-route fidelity claim.

## Stale screenshots and caching

The corrected Task 09.8A run did create fresh screenshots, so the issue was not simply browser-cache reuse. The decisive gaps were the authenticated preview URLs, old WordPress screenshots as the visual comparator, unconditional dynamic content/structure PASS, and lack of logged-out public-route and link-destination assertions.

## Required replacement gate

The reopened gate must use a cookie-free browser, actual public pretty permalinks, React as the direct source of truth, semantic inventories for all dynamic records, resolved CTA destinations, and explicit failure for every unexpected non-200 response. Screenshots must be fresh after the local fixes.

