# Task 11.3B â€” Fresh icon inventory

Inventory was collected from the live logged-out React and local WordPress runtimes at 390px and 1440px. React uses `lucide-react@0.546.0`. Every matched WordPress vector uses the same Lucide child markup, `viewBox="0 0 24 24"`, `stroke="currentColor"`, `stroke-width="2"`, round cap/join, and `fill="none"` except filled stars.

## Before repair

| Route | React total | WordPress rendered baseline | Exact matches confirmed |
|---|---:|---:|---:|
| Home | 142 | 97 | 1 |
| About | 51 | 8 | 0 |
| Fabric Guide | 30 | 10 | 2 |
| **Total** | **223** | **115** | **3** |

Slot-level pairing across all three routes found 120 missing semantic slots, 100 rendered-but-wrong slots, and 12 extra/duplicated nodes. These categories intentionally do not equal a simple subtraction of raw SVG counts because a wrong or duplicated node can occupy, displace, or accompany an intended slot.

Root-cause classification for the 220 non-matching React slots:

| Root cause | Count | Share |
|---|---:|---:|
| Missing semantic binding | 120 | 54.5% |
| Blanket, URL-derived, or order-coupled wrong glyph | 70 | 31.8% |
| Hand-authored registry path/size differing from Lucide 0.546 | 30 | 13.6% |

## After repair â€” per route and purpose

Each row represents all repeated instances of one semantic purpose. `WP source` is the centralized `arden_icon_paths()` registry rendered through the idempotent `data-arden-icon` layer.

| Route | Section/purpose | React source / identity (quantity) | WordPress source | Size token(s) | Alignment | Status |
|---|---|---|---|---|---|---|
| Home | Hero badges/actions/caption | SparklesÃ—2, CircleCheckÃ—1, ShieldCheckÃ—1, AwardÃ—1, ArrowRightÃ—1, ChevronRightÃ—1 | Central registry | 14/16 | inline/card | MATCH |
| Home | Trust promises | PackageCheck, ShieldCheck, Clock, Layers | Central registry | 20 | card slot | MATCH |
| Home | Services | ArrowRightÃ—1, CheckÃ—15, ChevronRightÃ—5 | Central registry | 14/16 | list/button | MATCH |
| Home | Products | ArrowRightÃ—1, LayersÃ—6, ClockÃ—1 | Central registry | 14/16 | metadata/button | MATCH |
| Home | Factory/capabilities | ArrowRightÃ—6, CheckÃ—3 | Central registry | 12/14/16 | overlay/list/button | MATCH |
| Home | Process | FileCheck, Sparkles, Scissors, Layers, ShieldCheck, PackageÃ—4 | Central registry | 20 | icon slot | MATCH |
| Home | MOQ | CheckÃ—12, ArrowRightÃ—3, ShieldCheckÃ—1 | Central registry | 16/20 | list/button | MATCH |
| Home | Pricing | SparklesÃ—1, CircleCheckÃ—3, ArrowRightÃ—1 | Central registry | 16 | result/list/button | MATCH |
| Home | Portfolio | ArrowRightÃ—1, EyeÃ—6, ScissorsÃ—6, PackageÃ—6 | Central registry | 14/16 | metadata/action | MATCH |
| Home | Why choose | ShieldCheck, Zap, Award, DollarSign, HeartHandshake, CircleCheck | Central registry | 20 | card slot | MATCH |
| Home | Testimonials | StarÃ—15 | Central registry | 16 | inline row | MATCH |
| Home | Blog | ArrowRightÃ—1, CalendarÃ—3, ClockÃ—3, ChevronRightÃ—3 | Central registry | 14/16 | metadata/action | MATCH |
| Home | FAQ | CircleQuestionMarkÃ—5, ChevronDownÃ—5 | Central registry | 16 | control | MATCH |
| Home | CTA | Sparkles, ArrowRight, PhoneCall | Central registry | 14/16 | badge/button | MATCH |
| About | Banner | House, ChevronRight, Sparkles | Central registry | 14 | breadcrumb/badge | MATCH |
| About | Trust | PackageCheck, ShieldCheck, Clock, Layers | Central registry | 20 | card slot | MATCH |
| About | Story | CheckÃ—4, ArrowRight | Central registry | 16 | list/action | MATCH |
| About | Factory | ArrowRightÃ—5, CheckÃ—3 | Central registry | 12/14/16 | overlay/list/action | MATCH |
| About | Certifications | Award, CircleCheck, FileCheck, ShieldCheck | Central registry | 20 | card slot | MATCH |
| About | Process | FileCheck, Sparkles, Scissors, Layers, ShieldCheck, PackageÃ—4 | Central registry | 20 | card slot | MATCH |
| About | Testimonials | StarÃ—15 | Central registry | 16 | inline row | MATCH |
| About | CTA | Sparkles, ArrowRight, PhoneCall | Central registry | 14/16 | badge/button | MATCH |
| Fabric | Banner | House, ChevronRight, Sparkles | Central registry | 14 | breadcrumb/badge | MATCH |
| Fabric | Trust | PackageCheck, ShieldCheck, Clock, Layers | Central registry | 20 | card slot | MATCH |
| Fabric | GSM guide | InfoÃ—1 | Central registry | 16 | inline | MATCH |
| Fabric | Search/material benefits | SearchÃ—1, CircleCheckÃ—18 | Central registry | 20/14 | input/list | MATCH |
| Fabric | CTA | Sparkles, ArrowRight, PhoneCall | Central registry | 14/16 | badge/button | MATCH |

## Final totals

| Metric | Result |
|---|---:|
| Total React semantic icons | 223 |
| WordPress matched identity and SVG signature | 223 |
| Missing | 0 |
| Wrong identity | 0 |
| Wrong SVG/viewBox/stroke/fill | 0 |
| Duplicated/extra | 0 |
| Flatsome icon-font glyphs in audited content | 0 |
| Declared geometry mismatch | 0 |
| Rendered mobile geometry mismatch | 2 |

At 390px, React's pricing CTA ArrowRight renders `12.83×16px` and the final Hotline PhoneCall renders `13.23×16px`; WordPress renders both `16×16px`. The difference is recorded as an open V1 geometry mismatch.

**ICON V1 = 2 rendered geometry mismatches.**
