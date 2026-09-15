# Task 11.3A — Home mobile root-cause elimination

## Result

HOME MOBILE V1: **FAIL**

The diagnosis reconciled the original +1,629px exactly: +1,379.56px from the 16 main sections and +249.72px from the footer. Duplicate sections, hidden flow content and image/lazyload duplication were rejected with runtime evidence.

Scoped mobile CSS materially improved Hero, Services, Products, Process, Portfolio and other sections. An intermediate implementation reduced main drift to +116.28px, but achieved that partly by hiding the third testimonial. Independent review rejected that prohibited behavior, and the hiding rule was removed.

## Authoritative final measurement

- React document: **27,541px**
- WordPress document: **28,251px**
- Document delta: **+710px** (required ≤40px)
- Main-section delta: **+460.58px**
- Footer delta: **+249.72px**
- Testimonials delta: **+363.77px**
- Blog delta: **+38.35px**
- Horizontal overflow: **0**

The final state preserves all testimonial content. It does not satisfy the cumulative or per-section gate.

## Evidence

- DOM and initial accounting: `TASK11_3A_HOME_DOM_DIFF.md`
- Proven causes: `TASK11_3A_ROOT_CAUSES.md`
- Final accounting: `TASK11_3A_FINAL_HEIGHT_MAP.md`
- Independent review: `TASK11_3A_CODE_REVIEW.md`
- Fresh Home evidence: 16 files under `task11_3a-home-review/` (reference, WordPress, side-by-side and overlay at 390/768/1024/1440)

## Engineering checks

- PHP lint: **14/14 PASS**
- TypeScript: no configured typecheck script
- React/Vite build: **PASS**, 1,732 modules
- measurement/capture JavaScript syntax: **PASS**
- `git diff --check`: **PASS**, CRLF notices only
- React tracked diff: **0 files**
- source/runtime CSS SHA-256: **MATCH**, `F495CF2A2586199A9BBD12A376D5B7339B53B21172E8AF80920697E5C903D97C`
- staging/production/ZIP/icon/V2 work: **not touched**

TASK 11.3A FAILED — HOME MOBILE ROOT CAUSE NOT RESOLVED
