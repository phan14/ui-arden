# Task 11 visual mismatch register

Date: 2026-09-03  
Reference: `http://localhost:3000/`  
Target: `http://localhost/mytest/`

Severity: V0 blocks use; V1 is a material structural/fidelity mismatch; V2 is minor polish.

| ID | Route | Severity | Cause | Fresh evidence | Status |
|---|---|---:|---|---|---|
| T11-01 | Home, mobile | V1 | WordPress markup / component inventory / responsive rhythm | `task11-after/home-390-{reference,current,side-by-side,overlay,diff}.png`; target remains 2,174 px taller | Open |
| T11-02 | About | V1 | UX Builder markup flattens React cards and image groups; icon source absent | `task11-after/about-1440-*`; +2,755 px desktop, +892 px mobile | Open |
| T11-03 | Search | V2 | Remaining intrinsic copy/card sizing differs | `task11-after/search-1440-*`; improved +984 → +185 px desktop and +3,827 → +575 px mobile | Improved, review |
| T11-04 | Fabric Guide | V2 | Icons and detailed card decoration not represented in imported markup | `task11-after/fabric-1440-*`; improved +869 → -46 px desktop and +2,332 → +357 px mobile | Improved, review |
| T11-05 | News | V2 | Card typography/metadata and mobile wrapping remain different | `task11-after/news-1440-*`; improved -839 → +56 px desktop | Improved, review |
| T11-06 | Projects | V2 | Card metadata/content differs where local CPT metadata is incomplete | `task11-after/projects-1440-*`; mobile improved -587 → +35 px | Improved, review |
| T11-07 | Icon system | V1 | React Lucide inventory is not fully present in UX Builder content | Home 142/4, About 51/0, Fabric 30/2 visible SVG counts at 1440 | Open |
| T11-08 | Case study | V1 | Existing template has no matching SVG/icon component inventory | `task11-after/case-study-1440-*`; 24/0 SVG | Open |

V0 = 0. V1 = 4. V2 = 4. The Task 11 acceptance requirement (`V0 = 0`, `V1 = 0`) is not met.
