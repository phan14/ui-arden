# Task 08 route test

Authenticated preview URLs are used for Draft content; no Draft was published.

| Route | Expected | Actual | Result |
|---|---:|---:|---|
| Home | 200 | 200 | PASS |
| About draft preview | 200 | 200 | PASS |
| Services draft preview | 200 | 200 | PASS |
| T-Shirt draft preview | 200 | 200 | PASS |
| Shirt draft preview | 200 | 200 | PASS |
| Jacket draft preview | 200 | 200 | PASS |
| Pants draft preview | 200 | 200 | PASS |
| Manufacturing draft preview | 200 | 200 | PASS |
| FAQ draft preview | 200 | 200 | PASS |
| Contact draft preview | 200 | 200 | PASS |
| Quote draft preview | 200 | 200 | PASS |
| News draft preview | 200 | 200 | PASS |
| Search | 200 | 200 | PASS |
| Category | 200 | 200 | PASS |
| Post single | 200 | 200 | PASS |
| Project archive | 200 | 200 | PASS |
| Project draft single preview | 200 | 200 | PASS |
| Invalid | 404 | 404 | PASS |

Search, category, published Post, Project archive and Draft Project single template were exercised. Pretty permalinks for Draft pages become publicly routable only after deliberate publication.
