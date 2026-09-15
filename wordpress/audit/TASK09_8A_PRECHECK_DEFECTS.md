# Task 09.8A Precheck Defects

## Product defects

No reproducible UI/runtime defect was found.

| Severity | Open count | Affected routes |
|---|---:|---|
| P0 | 0 | None |
| P1 | 0 | None |
| P2 | 0 | None |
| P3 | 0 | None |

## Test-harness findings (resolved, not product defects)

1. The initial visual run retained a 1280px screenshot viewport. It was invalidated as test evidence. The harness now explicitly calls `setViewportSize()`; the corrected 84-case rerun passed.
2. The legacy interaction selector used an encoding-damaged Services label and an obsolete Fabric Guide class. Direct DOM inspection and the current focused suite confirmed the approved controls work: Services exposes eight dropdown links on hover and focus; Fabric Guide has six cards, five filters, search, one-result and empty states at all four widths.
3. Legacy scripts were changed only to support isolated Task 09.8A output filenames and explicit viewport enforcement. No theme, UI, content, database, staging or production code was changed.

## Non-blocking observations

Flatsome-generated global markup repeats SVG/search IDs `Group` and `s`. These existed in the approved Task 08.11 baseline, do not originate in Arden page content, and caused no interaction, accessibility-targeting, runtime or visual failure in this gate. They are recorded as an upstream markup observation, not a reproduced Arden defect.

