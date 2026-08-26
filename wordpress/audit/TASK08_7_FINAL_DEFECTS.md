# Task 08.7 final defects

Final validation date: 2026-08-26  
Branch: `copilot-task08`  
Checkpoint: `e3bd6e22d00353ebdc6100b4199cefacea998b8d`

This document records defects only. No runtime repair was made during the final rerun.

## P0

None.

## P1 — acceptance blocking

### P1-01 — Global Header topbar does not match the React source of truth

- Scope: shared WordPress Header; therefore it affects the site-wide visual acceptance result.
- Fresh evidence: the WordPress screenshots display Flatsome's default topbar copy, `ADD ANYTHING HERE OR JUST REMOVE IT...`, while React displays Arden's working-hours, address, hotline, and Zalo contact strip.
- Impact: visible content and presentation in a global component are wrong. This is not one of the approved WordPress implementation differences.
- Reproduction: compare a fresh React and WordPress screenshot at desktop width, for example `task08_5-screens/home-react.png` and `task08_5-screens/home-wp.png`.
- Required closure: configure/reconstruct the WordPress Header topbar from the React source, then rerun all Header breakpoints and routes.

### P1-02 — Material component/layout visual fidelity remains below the React reference

- Scope: the fresh 21-route × 4-breakpoint matrix.
- Clearest reproduction: Policies at 1440 px.
- Observed differences include missing dotted decorative backgrounds, different badge and tab presentation, different card geometry and density, CTA alignment/spacing differences, and material typography/spacing differences across the page shell.
- The differences remain visible after applying only the narrow normalizations allowed by `APPROVED_WORDPRESS_DIFFERENCES.md`; they are not equivalent browser color serialization.
- Impact: strict React-to-WordPress visual acceptance fails even though the pages are technically safe.
- Required closure: repair against React (not against the current WordPress output), then regenerate screenshots and rerun the complete matrix.

## P2 — significant, non-blocking for runtime

### P2-01 — Production record-dependent states are not populated

- Projects, Case Study, News, Category, and Search comparisons contain approved N/A states because no approved production records were fabricated.
- This is handled under `DYNAMIC_FIDELITY_POLICY.md`, but production content still needs owner-provided records before launch.

### P2-02 — Production SEO/business configuration remains incomplete

- `blog_public=0` is correctly preserved for staging.
- Rank Math is not installed and production business values have not been independently approved.
- Complete these only in the authorized production handoff stage.

## P3 — minor

### P3-01 — Expected 404 resource console noise

- The invalid-route check reaches the intended 404 page, but the browser records the expected failed main-document request.
- The rendered 404 itself passes runtime and responsive safety.

## Not defects

- Contact Form 7 hidden/internal wrappers and transient successful form state are normalized according to the approved policy.
- Native accordion/tab hidden panels are not treated as missing visible content.
- Dynamic records were not invented to force a visual PASS.
- The WordPress admin toolbar in authenticated evidence is test-environment chrome, not a production Header component. P1-01 refers specifically to the Flatsome topbar beneath it.

