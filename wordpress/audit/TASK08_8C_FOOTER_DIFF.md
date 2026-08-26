# Task 08.8C Footer difference inventory

Source of truth: `src/components/layout/Footer.tsx`. Inventory captured before Task 08.8C Footer repair.

| React element | WordPress current state | Expected | Fix owner |
|---|---|---|---|
| CTA immediately before footer | Page-level React-derived CTA exists | Preserve page CTA; do not duplicate it inside Footer | Page UX section; freeze |
| Brand lockup | Text-only two-line brand heading | 40×40 blue mark, ARDEN wordmark, GARMENT FACTORY subline | Native UX Block + CSS |
| Business description | Present with exact converted React text | Same text, 4-column desktop span and constrained line length | Native UX Block + CSS |
| Trust badges | Collapsed into one plain paragraph | Two badges: “Bảo mật thiết kế 100%” and “10+ năm kinh nghiệm” | Native UX Block + CSS/lightweight inline icons |
| Service column | Four simplified links | Six React labels in exact order and destinations | Native UX Block |
| Contact column | Five values present | Same five values with compact icon/text rows | Native UX Block + CSS/lightweight inline icons |
| Map card | Missing | React placeholder image, location label and “Chỉ đường & Liên hệ ➔” CTA; no map SDK | Media Library + native UX image/card CSS |
| Policy sublinks | Only two links in bottom row | Six React links in exact order; five policy links use canonical fragments | Native UX Block |
| Social links | Present inside map column | Move to React policy/social row; preserve exact approved URLs/labels | Native UX Block + CSS |
| Copyright | Present | Exact React copyright text | Native UX Block |
| Quality line | Missing | Exact React source line for TP.HCM quality standard | Native UX Block |
| Background/borders | Navy present, density and dividers differ | Slate-900 background, slate borders, React vertical rhythm | Shared Footer CSS |
| Desktop columns | 4/2/3/3 Flatsome spans differ from React 4/3/3/2 | Match 12-column proportions | Native UX Block |
| Mobile stacking | Native stacking works but spacing differs | One column, then two columns at md, no overflow | Native UX Block + responsive CSS |

## Production-data constraint

Phone, address, email, website, hours and social URLs are copied only from the existing React `siteConfig`/Footer conversion. Their presence is for fidelity and does not constitute production verification. Production approval remains required.

## After repair

All listed inventory items are now present in the native `arden-footer` UX Block. The React map placeholder is Media Library attachment 203, not a remote runtime dependency. Four-width focused screenshots confirm desktop 4/3/3/2 proportions, tablet two-column stacking, mobile single-column stacking and no horizontal overflow. The five policy links target the canonical fragments fixed in Task 08.8B.
