# Home 390px height map — before Task 11.2

Source: fresh `task11_2-diagnosis.json`. Header top is 69px in both runtimes.

| Section | React top | WP top | React height | WP height | Section delta | Cumulative delta |
|---|---:|---:|---:|---:|---:|---:|
| Hero | 69.0 | 69.0 | 1133.0 | 1294.9 | +161.9 | +161.9 |
| Trust | 1202.0 | 1363.9 | 490.0 | 560.8 | +70.8 | +232.7 |
| Services | 1692.0 | 1924.6 | 2832.6 | 3163.7 | +331.1 | +563.8 |
| Products | 4524.6 | 5088.3 | 2790.1 | 3104.7 | +314.6 | +878.4 |
| Metrics | 7314.7 | 8193.0 | 426.5 | 545.8 | +119.3 | +997.7 |
| Factory | 7741.2 | 8738.8 | 2457.1 | 2408.0 | -49.1 | +948.6 |
| Capabilities | 10198.3 | 11146.8 | 1532.6 | 1784.0 | +251.4 | +1200.0 |
| Process | 11730.9 | 12930.7 | 2053.1 | 1797.9 | -255.2 | +944.8 |
| MOQ | 13784.0 | 14728.6 | 2119.4 | 2433.5 | +314.1 | +1258.9 |
| Pricing | 15903.4 | 17162.2 | 1208.6 | 1627.6 | +419.0 | +1677.9 |
| Portfolio | 17112.0 | 18789.8 | 3572.1 | 2801.6 | -770.5 | +907.4 |
| Why choose | 20684.0 | 21591.3 | 1462.1 | 1141.7 | -320.4 | +587.0 |
| Testimonials | 22146.1 | 22733.0 | 1018.1 | 1568.5 | +550.4 | +1137.4 |
| Blog | 23164.2 | 24301.5 | 1709.6 | 1881.5 | +171.9 | +1309.3 |
| FAQ | 24873.8 | 26183.1 | 774.1 | 884.7 | +110.6 | +1419.9 |
| CTA | 25647.9 | 27067.7 | 519.9 | 489.3 | -30.6 | +1389.3 |

Main delta is +1389.3px. Footer contributes another +249.7px, producing document delta +1639px. There are 16 visible sections in both runtimes, no duplicate/hidden layout section, and no inherited min-height cause.
