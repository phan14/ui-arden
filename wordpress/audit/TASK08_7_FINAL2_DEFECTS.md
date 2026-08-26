# Task 08.7 FINAL2 defects

Validation date: 2026-08-26  
Branch: `copilot-task08`  
HEAD: `e3bd6e22d00353ebdc6100b4199cefacea998b8d`

Only defects reproduced during this fresh post-Task-08.9 run are listed. No runtime repair was made.

## P0

None.

## P1 — acceptance blocking

### P1-01 — T-Shirt Service has three clipped controls at 390px

- Route: Draft T-Shirt Service, `/?page_id=83&preview=true`.
- Fresh matrix evidence: `T-Shirt Service @ 390`, `clippedControls=3`.
- The material/GSM control region contains controls whose geometry extends outside the real 390px viewport.
- Runtime and interaction logic pass, but responsive safety and visual acceptance fail.

### P1-02 — FAQ category controls clip at 390px

- Route: Draft FAQ, `/?page_id=95&preview=true`.
- Fresh matrix evidence: `FAQ @ 390`, `clippedControls=1`.
- The horizontal FAQ category control row cuts off its final control at the right viewport edge.
- Accordion/search interactions remain functional, but the visible control inventory is not safely presented.

### P1-03 — Quote controls and primary submit CTA clip at 390px

- Route: Draft Quote, `/?page_id=97&preview=true`.
- Fresh matrix evidence: `Quote @ 390`, `clippedControls=10`.
- The primary submit label visibly extends beyond its control/viewport, with additional form controls counted outside the safe viewport boundary.
- Form validation and successful non-production submission state pass; responsive and visual acceptance do not.

## P2 — reproduced external production dependencies

### P2-01 — Record-dependent production content is not populated

Projects, Case Study, News, Category and Search remain record-dependent. Their system states pass under `DYNAMIC_FIDELITY_POLICY.md`; no Posts or Projects were fabricated.

### P2-02 — Production SEO/business verification remains pending

The fresh system check confirms staging remains correctly non-indexed (`blog_public=0`) and Rank Math is not installed. Production SEO and business values still require the authorized handoff stage.

## P3

### P3-01 — Expected invalid-route request entry

The 404 route returns the intended HTTP 404 and renders correctly. The failed main-document request is expected diagnostic noise for this test route.

## Confirmed closed and not carried forward

- Flatsome default Header topbar content did not reproduce.
- Header topbar inventory passed the fresh route screenshots.
- Policies desktop/mobile visual composition and five native tab/fragment states passed.
- Footer map, badges, policy links and media references passed.

