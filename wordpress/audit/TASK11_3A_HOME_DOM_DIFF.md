# Task 11.3A — Home DOM structure diff

Fresh 390px audit, 2026-09-03. Both runtimes contain exactly 16 first-level visual Home sections in the same order.

| Section | React hierarchy | WordPress hierarchy | Duplication/visibility finding |
|---|---|---|---|
| Hero | `section > container > grid > component groups` | `section > .section-content > .row > .col > .col-inner` plus absolute background and STYLE | No duplicate; WP row pseudo-elements become grid items |
| Trust–CTA | `section > container > component/grid` | `section > .section-content > .row > .col > .col-inner` plus absolute background/STYLE where present | No desktop/mobile duplicate; wrappers add box-model rules |
| Footer | `footer > container > grids` | UX Builder footer section/rows/columns | No duplicate; Flatsome typography/column spacing adds height |

The absolute background nodes are out of flow. STYLE nodes are `display:none`. Closed accordion bodies and responsive hidden nodes have zero rectangles. No empty row/column, spacer, inherited `min-height`, duplicate CTA, or hidden desktop/mobile variant accounts for the drift.

## Fresh height accounting

| Section | React top | React bottom | React height | WP top | WP bottom | WP height | Delta | Cumulative |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Hero | 69.0 | 1202.0 | 1133.0 | 69.0 | 1471.9 | 1402.9 | +269.9 | +269.9 |
| Trust | 1202.0 | 1692.0 | 490.0 | 1471.9 | 2036.6 | 564.8 | +74.8 | +344.7 |
| Services | 1692.0 | 4524.6 | 2832.6 | 2036.6 | 5310.2 | 3273.5 | +440.9 | +785.6 |
| Products | 4524.6 | 7314.7 | 2790.1 | 5310.2 | 8684.9 | 3374.8 | +584.7 | +1370.3 |
| Metrics | 7314.7 | 7741.2 | 426.5 | 8684.9 | 9154.3 | 469.4 | +42.9 | +1413.2 |
| Factory | 7741.2 | 10198.3 | 2457.1 | 9154.3 | 11640.3 | 2486.0 | +28.9 | +1442.1 |
| Capabilities | 10198.3 | 11730.9 | 1532.6 | 11640.3 | 13329.5 | 1689.3 | +156.7 | +1598.8 |
| Process | 11730.9 | 13784.0 | 2053.1 | 13329.5 | 14931.8 | 1602.2 | -450.9 | +1147.9 |
| MOQ | 13784.0 | 15903.4 | 2119.4 | 14931.8 | 17201.1 | 2269.4 | +150.0 | +1297.9 |
| Pricing | 15903.4 | 17112.0 | 1208.6 | 17201.1 | 18697.7 | 1496.6 | +288.0 | +1585.9 |
| Portfolio | 17112.0 | 20684.1 | 3572.1 | 18697.7 | 21680.6 | 2982.9 | -589.2 | +996.7 |
| Why choose | 20684.1 | 22146.1 | 1462.1 | 21680.6 | 22778.3 | 1097.7 | -364.4 | +632.3 |
| Testimonials | 22146.1 | 23164.2 | 1018.1 | 22778.3 | 24259.1 | 1480.9 | +462.8 | +1095.1 |
| Blog | 23164.2 | 24873.8 | 1709.6 | 24259.1 | 26231.1 | 1972.0 | +262.4 | +1357.5 |
| FAQ | 24873.8 | 25647.9 | 774.1 | 26231.1 | 27030.0 | 799.0 | +24.9 | +1382.4 |
| CTA | 25647.9 | 26167.8 | 519.9 | 27030.0 | 27547.4 | 517.3 | -2.6 | +1379.8 |

Main total is +1,379.8px. Footer is +249.2px. Document total is exactly +1,629px; unexplained residual is 0px.

## Box-model, text, and image findings

- Section vertical padding already matches React: ordinary 56px, Hero 48px, Trust/Metrics 32px.
- Flatsome mobile `.col` contributes 30px bottom padding. Removing it experimentally changes the document by -1,872px, proving material impact but also proving a blanket removal is invalid.
- Hero WP content inner is 805.1px versus React 661px. WP description is 16/26px, four lines, 104px plus margin; React is 12/19.5px, three lines, 58.5px without that margin. Badge stack is 318px versus 207.5px.
- Services first-card image is identical at 356×222.5px. React card body is 196px; WP is 252.6px. Approximately 373px of the Services delta comes from five repeated card differences.
- Service/card images and major product/blog ratios match. Hero image differs only about 6×4px. No placeholder-plus-image or double-height image was found.
- A runtime-only removal of grid-row clearfix pseudo-elements reduces Hero exactly 48px, proving those pseudos create an extra grid track/gap.
