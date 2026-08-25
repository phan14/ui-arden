# UX Builder Editability Audit

## Task 06B native pilot

The pilot percentage is measured at section level. A section is native when its editable structure uses registered Flatsome Builder elements and contains no `[ux_html]` wrapper.

| Pilot page | Total sections | Native | Hybrid | Custom | Native percentage |
|---|---:|---:|---:|---:|---:|
| Home | 16 | 14 | 2 | 0 | 87.5% |
| TShirt Service | 6 | 6 | 0 | 0 | 100% |
| FAQ | 6 | 6 | 0 | 0 | 100% |

Home's Portfolio and Blog sections remain hybrid because their content comes from dynamic `[arden_projects]` and `[arden_recent_posts]` queries. Their headings, copy, buttons, rows and columns remain native. TShirt's semantic size table is inside a native UX Text element because Flatsome 3.17.7 has no Table element. FAQ uses registered Search, Tabs and Accordion elements.

At element level, all pilot titles, paragraphs, buttons, rows, columns, cards, tabs and accordion items are individually selectable/editable. No pilot page contains `[ux_html]`.

## Task 06C propagation

Percentages below are element-level because permitted media/form exceptions are smaller than a section. Native includes registered Section, Row/Row Inner, Column/Column Inner, UX Text, Button, Featured Box, Tabs and Accordion elements.

| Page | Native elements | Hybrid elements | Native % | Target |
|---|---:|---:|---:|---|
| About | 189 | 10 | 95.0% | PASS |
| Services | 158 | 5 | 96.9% | PASS |
| Shirt Service | 177 | 0 | 100% | PASS |
| Jacket Service | 158 | 0 | 100% | PASS |
| Pants Service | 158 | 0 | 100% | PASS |
| Manufacturing | 220 | 5 | 97.8% | PASS |
| Contact | 35 | 1 | 97.2% | PASS |
| Quote | 30 | 1 | 96.8% | PASS |
| Careers | 25 | 0 | 100% | PASS |
| Policies | 24 | 0 | 100% | PASS |
| Fabric Guide | 160 | 1 | 99.4% | PASS |
| Techpack Guide | 77 | 0 | 100% | PASS |
| **Total** | **1411** | **23** | **98.4%** | **PASS** |

The 23 remaining UX HTML elements are intentionally small: 20 external source images, the Contact form, the Quote form and the Fabric Guide search input. Flatsome Image requires Media Library attachment IDs, while the forms must remain unchanged until Contact Form 7 is approved. No remaining UX HTML element contains an entire section or page.

Dynamic templates remain PHP/WordPress-native and are not counted as UX Builder pages: News archive, Category archive, Project archive, Project single, Search and 404.

Audit scope: Home plus 14 Task 05 static/service drafts.

## Classification

- **A Native:** section content is composed primarily from native Flatsome Text, Image, Button, Icon, Accordion or Tabs elements.
- **B Hybrid:** native Section/Row/Column with a scoped UX HTML element for special markup.
- **C Custom:** a whole section remains custom markup because native conversion would lose required behavior or fidelity.

## Current result

| Page group | Sections | Current | Target | Result |
|---|---:|---|---|---|
| Home | 16 | Mostly native UX Builder plus reusable UX Blocks/minimal shortcode | A/B | PASS from Home workstream |
| About | 8 | B Hybrid | A/B | PARTIAL |
| Services | 6 | B Hybrid | A/B | PARTIAL |
| T-shirt service | 6 | B Hybrid | A/B | PARTIAL |
| Shirt service | 8 | B Hybrid | A/B | PARTIAL |
| Jacket service | 7 | B Hybrid | A/B | PARTIAL |
| Pants service | 7 | B Hybrid | A/B | PARTIAL |
| Manufacturing | 8 | B Hybrid | A/B | PARTIAL |
| FAQ | 6 | B/C; conditional interaction states missing | A Native accordion/tabs | FAIL |
| Contact | 4 | B Hybrid; form custom | B Hybrid | PARTIAL |
| Quote | 4 | B/C; selector/form custom | B Hybrid | PARTIAL |
| Careers | 3 | B/C; expanded job states missing | B Hybrid | FAIL interaction |
| Policies | 3 | B Hybrid | A Native | PARTIAL |
| Fabric Guide | 5 | B/C; selector state | A/B | PARTIAL |
| Techpack Guide | 5 | B Hybrid | A/B | PARTIAL |

Task 04/05 imports now provide native `Section → Row → Column` per React section, but the content inside each section is still one UX HTML element. Therefore Task 06 has **not** achieved the requested significant fine-grained native conversion.

Measured across the 96 non-Home imported sections:

- Fully native A: 0%.
- Hybrid B: 91 sections, 94.8%.
- Custom/interaction-blocked C: 5 sections, 5.2%.

This audit deliberately does not relabel hybrid HTML as native.
