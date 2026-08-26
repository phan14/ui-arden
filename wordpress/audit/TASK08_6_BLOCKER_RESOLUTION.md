# TASK 08.6A.1 — BLOCKER RESOLUTION

## Scope and inspection boundary

This is a documentation-only safety investigation. No runtime file, WordPress database record, menu, theme option, CSS, JavaScript, page content, publication state, index setting, ZIP, or theme version was changed.

Repository inspection covered:

- `wordpress/audit/TASK08_6_SAFE_PLAN.md`
- `wordpress/audit/COPILOT_TAKEOVER_AUDIT.md`
- `wordpress/audit/FULL_REGRESSION_DEFECTS.md`
- `wordpress/audit/FULL_TEST_MATRIX.md`
- `wordpress/audit/TASK08_5_REPORT.md`
- `wordpress/audit/SITE_ROUTE_MAPPING.md`
- `wordpress/audit/task08_5-full-regression.json`
- the React source, WordPress import files, child-theme CSS/JS, and menu configuration named below

Read-only runtime checks were also attempted against `http://localhost/mytest/`:

- public preview URLs for `page_id=83`, `99`, and `100` returned HTTP 404
- REST requests for those draft pages returned HTTP 401
- `/wp-admin/edit.php?post_type=page` redirected to `wp-login.php`
- no authenticated WordPress session or database read credential was available

The authenticated results already recorded in `TASK08_5_REPORT.md`, `FULL_REGRESSION_DEFECTS.md`, and `task08_5-full-regression.json` are treated as historical evidence, not as a substitute for a fresh authenticated runtime inspection.

## 1. Exact safety blockers

### B-001 — Shared CSS selector impact is not fully runtime-verified

- Affected REG defects: REG-001, REG-002; also REG-010 and part of REG-009.
- Missing information: the current rendered Flatsome elements matched to each broad selector in `arden.css`, plus their computed styles at 1440, 1024, 768, and 390 pixels. In particular, the runtime impact of `.arden-page h1` through `h4`, `.arden-content-grid`, `.arden-services .col > .col-inner`, `.arden-card`, and `.header-wrapper .nav-dropdown` is not newly measurable without authenticated previews.
- Why execution is unsafe: changing a global selector can alter every imported page, the 404 template, and shared cards/buttons. Repository declarations show potential conflicts but cannot prove which selector wins in the live generated DOM.
- Source of missing information: authenticated WordPress draft previews plus browser computed-style/DOM inspection, compared with React source and the existing CSS.
- Repository-resolvable: partially. The selector declarations and React expectations are resolved below; live selector-to-element impact is not.
- WordPress runtime inspection required: yes.
- Human/user input required: no, unless authenticated access cannot be supplied.
- Classification: **B — WordPress-runtime-resolvable**.

Resolution status: **partially resolved**. The repository evidence is sufficient to define the safe scope, but not to authorize a global CSS edit.

### B-002 — T-shirt three-way source/import/Draft provenance is inconsistent

- Affected REG defect: REG-003.
- Missing information: the exact content currently stored in Draft ID 83 and the import operation/version that produced it.
- Why execution is unsafe: the current import file contains six top-level sections, while the regression record reports four rendered sections, one H3 and two controls. Patching the import without confirming the Draft could leave the runtime unchanged; patching the Draft directly would violate the source-to-import-to-Draft synchronization rule.
- Source of missing information: React component and data source, import file, and authenticated WordPress Draft 83 content/metadata/revision or import log.
- Repository-resolvable: yes for React and import; no for current Draft contents.
- WordPress runtime inspection required: yes.
- Human/user input required: no, if authenticated read-only access is supplied.
- Classification: **B — WordPress-runtime-resolvable**.

Resolution status: **repository portion resolved; Draft portion unresolved**. React is authoritative. The import is a native pilot representation and is not equivalent to the React rendered structure: it has one section for Fabric Options, one for Size Chart, one for Print Techniques, one for Process, and one CTA/banner section, but the React source also requires five selectable fabric cards, six GSM controls, four print cards, the source size data/table, nine `productionProcess` records as imported, and the exact CTA behavior. The Draft cannot be declared synchronized until ID 83 is read.

### B-003 — Policies three-way source/import/Draft provenance and ID mapping are inconsistent

- Affected REG defect: REG-004; also REG-007 policy fragments.
- Missing information: the exact Draft ID 99 content and the rendered IDs/controls produced by its current tabgroup.
- Why execution is unsafe: the React component defines five policy IDs (`chung`, `chinh-sach-bao-mat`, `chinh-sach-thanh-toan`, `chinh-sach-doi-tra`, `chinh-sach-van-chuyen`), but the import uses a Flatsome vertical tabgroup with title-only tabs and no explicit matching panel IDs. The regression reports one H2 and two controls, so an import edit may not map to the live Draft or preserve footer anchors.
- Source of missing information: `PolicySection.tsx`, `PoliciesPage.tsx`, `policies-flatsome.txt`, and authenticated Draft 99 HTML/content metadata.
- Repository-resolvable: yes for React and import; no for current Draft/rendered IDs.
- WordPress runtime inspection required: yes.
- Human/user input required: no for technical mapping; legal copy approval remains a separate business gate.
- Classification: **B — WordPress-runtime-resolvable**.

Resolution status: **repository portion resolved; Draft/runtime portion unresolved**. The import is stale relative to React because it has abbreviated tab content, title-only tabs, no verified React section IDs, and no demonstrated `activeTab` contract. The React five-ID contract is authoritative; Draft 99 must be read before synchronization.

### B-004 — Fabric Guide DOM contract is only partly verified

- Affected REG defect: REG-005.
- Missing information: the exact rendered selectors and element hierarchy in the current authenticated Draft 100 DOM.
- Why execution is unsafe: `native-interactions.js` binds to `#fabric-grid`, searches for `input[type="text"]`/`input[type="search"]`, takes the first five `a.button` elements, and infers cards from `.col` elements containing an `h3` and `Thành phần:`. The import has `#fabric-grid`, an input, five button shortcodes, and six `col_inner` cards, but does not include `.arden-fabric-card`, `.arden-fabric-filter`, explicit `data-category`, or a no-results node. The historical test found zero expected card/filter classes. Without the live DOM, it is unsafe to decide whether the mismatch comes from shortcode rendering, the Draft, or the script selectors.
- Source of missing information: React filter data/logic, `fabric-guide-flatsome.txt`, `native-interactions.js`, and authenticated Draft 100 DOM.
- Repository-resolvable: yes for the expected contract and minimum repair design; no for the current rendered DOM.
- WordPress runtime inspection required: yes.
- Human/user input required: no, if authenticated preview access is supplied.
- Classification: **B — WordPress-runtime-resolvable**.

Resolution status: **partially resolved**. Expected selector: `#fabric-grid`. Expected controls: search input plus five category controls corresponding to React categories `all`, `tshirt`, `shirt`, `jacket`, and `pants`. Expected data: six records defined locally in `FabricGuidePage.tsx`, filtered by category and by name/composition/application. Minimum repair: make the rendered native controls/cards expose a stable scoped data contract, then bind filtering and an accessible empty state to that contract. The actual current selector mapping remains unresolved.

### B-005 — Header dropdown generated markup and Header Builder state are unavailable

- Affected REG defect: REG-006.
- Missing information: stored menu item parent IDs/locations, Flatsome Header Builder element configuration, and generated desktop DOM/classes/visibility for the Services menu.
- Why execution is unsafe: the PHP configuration declares an eight-item child list and assigns menu location `primary`, but the regression says mobile exposes the children while desktop hover exposes zero visible dropdown links. This cannot distinguish menu configuration from Header Builder markup, CSS overflow/z-index/pointer-events, or desktop hover/focus behavior. A CSS or PHP change made without that distinction can break the global header or mobile menu.
- Source of missing information: `task08-configure-navigation.php`, `HEADER_SETUP.md`, authenticated WordPress menu/Header Builder settings, and generated desktop DOM.
- Repository-resolvable: menu intent and hierarchy are yes; live stored state and generated DOM are no.
- WordPress runtime inspection required: yes.
- Human/user input required: no for inspection; authenticated admin access is required.
- Classification: **B — WordPress-runtime-resolvable**.

Resolution status: **repository portion resolved; runtime portion unresolved**. Repository intent is unambiguous: parent `Dịch vụ` at `/dich-vu`, eight children, primary location `primary`, and no custom `header.php`. The failure is therefore not proven to be PHP configuration or code until the runtime Builder/menu/DOM state is inspected.

### B-006 — Two CTA destinations have no authoritative target

- Affected REG defect: REG-007.
- Missing information: approved destination for the `Gia Công Local Brand` service card and confirmation that a real Project CPT exists for the case-study slug.
- Why execution is unsafe: the canonical route table confirms `/dich-vu/may-ao-thun`, `/dich-vu/may-ao-so-mi`, `/dich-vu/may-quan`, and `/dich-vu/may-ao-khoac`, but React `servicesData` still contains `/dich-vu#local-brand` for `gia-cong-local-brand`. React `App.tsx` renders any `/du-an/*` as `CaseStudyPage`, but that does not prove WordPress has a matching Project record. Choosing a replacement would alter business navigation without authority.
- Source of missing information: React `siteData.ts`, `App.tsx`, `SITE_ROUTE_MAPPING.md`, the imported Home/Services CTA links, authenticated WordPress Project CPT read-only listing, and owner/business decision for Local Brand scope.
- Repository-resolvable: the conflict is yes; the final target is no for Local Brand and project existence is runtime-resolvable.
- WordPress runtime inspection required: yes for Project existence.
- Human/user input required: yes for the Local Brand destination if no dedicated canonical route/section is approved; yes if the case-study target has no Project record.
- Classification: **C — Requires user/business decision** for final target selection. Runtime inspection can reduce the uncertainty but cannot authorize a new business destination.

Resolution status: **unresolved**. Confirm one of the following before CTA repair:

1. Local Brand CTA points to `/dich-vu` as the approved general service route; or
2. Local Brand CTA points to an approved existing service/page route; or
3. Local Brand receives a new canonical route, which is outside this no-fix investigation.

For the case study, confirm that Project CPT record/slug `bst-ao-thun-local-brand` exists. If it does not exist, the owner must approve a replacement target; do not silently redirect it.

### B-007 — Authenticated WordPress inspection capability is unavailable

- Affected REG defects: REG-001 through REG-006, and REG-007 where Draft/CPT existence is involved.
- Missing information: authenticated read-only access to Draft previews, WordPress REST/admin pages, menu settings, Header Builder configuration, and generated DOM/computed styles.
- Why execution is unsafe: public access intentionally returns 404 for Draft previews and REST returns 401; the admin area requires login. The repository cannot prove the current database state or generated runtime output.
- Source of missing information: a user-provided authenticated browser session or a read-only WordPress inspection path.
- Repository-resolvable: no.
- WordPress runtime inspection required: yes.
- Human/user input required: yes, to provide an authenticated session/access path without exposing credentials in chat.
- Classification: **D — Requires unavailable environment/tooling**.

Resolution status: **unresolved**. The user must share an already authenticated browser page/session or provide a safe read-only inspection mechanism. Do not provide passwords or tokens in chat.

## 2. Repository-resolved selector-impact matrix

The matrix below separates the repository-known declaration from the runtime evidence still needed before editing.

| Selector | Current declaration | React expectation | Affected pages | Safe scope | Risk |
|---|---|---|---|---|---|
| `.arden-page h1, .arden-page h2, .arden-page h3, .arden-page h4` | Sets Arden heading color, heading font family with `!important`, and `letter-spacing: -.02em`; no shared `font-weight` declaration | React heading utilities use H1/H2 `font-black` (900), H3/H4 mostly `font-bold` (700), with page-specific responsive sizes | Most static pages, service pages, Policies, 404 | Shared typography token only after computed-style verification; 404 may need a page/system override | High: global cascade and missing explicit weight can preserve Flatsome 600 |
| `.arden-site .arden-hero h1` | Explicit 900 weight, responsive size, line-height and letter spacing | React hero H1 is 900 and responsive | Home and pages using Arden hero | Shared hero component | Medium: can alter hero wrapping and height |
| `.arden-site .arden-section-title h2` | Explicit 900 weight and tight tracking | React section H2 is 900, but exact responsive size follows source utility classes | All section-title blocks | Shared section-heading component | High: broad H2 visual change |
| `.arden-site .arden-services h3` | Explicit 18px, 900 weight, 1.5556 line-height | React service card H3 is `text-base`/responsive with `font-bold`; source expectation is not universally 18px/900 | Home/services/service-card grids | Shared services card only, not all H3 | Medium: card heights and grid rhythm |
| `.arden-site .arden-products h3, .arden-site .arden-factory h3, .arden-site .arden-capabilities h3, .arden-site .arden-process h3, .arden-site .arden-portfolio h3` | Explicit 14px, 700 weight | React component-specific H3 utilities vary between 14px, 16px and responsive 20px | Products, factory, capability, process, portfolio sections | Shared component groups individually | High: one selector covers unlike React components |
| `.arden-site .arden-why-choose h3, .arden-site .arden-blog h3` | Explicit 16px, 700 weight | React card headings are component-specific and commonly 16px/700 | Why-choose/blog | Shared component groups | Medium |
| `.arden-card` | Global card border, radius `var(--arden-radius-lg)`, surface, shadow and hidden overflow | React cards generally use `rounded-2xl` (16px), border and shadow, but some cards use different backgrounds/overflow | Static pages and UX blocks | Shared card primitive only | High when applied to generated `.col` wrappers |
| `.col.arden-card` and `.col.arden-card > .col-inner` | Removes outer card styling, applies inner padding 24px, radius and `height: 100%` | React card padding/radius vary by component; generated Flatsome `.col` is a layout wrapper, not always the card itself | Services/products/factory and imported card grids | Only explicit card columns | High: can create blank space or collapse visual grouping |
| `.arden-content-grid` | Three-column CSS grid, two columns at medium, one at small | React grids are page-specific: often 1/2/3 columns with component-specific breakpoints | Content/archive/search grids | Page/template-specific grid only | High: broad fixed grid assumptions |
| `.arden-services .col > .col-inner, .arden-products .col > .col-inner` | `display:flex`, `height:100%`, column direction; child `.ux-text` flexes | React cards use flex column where needed, but not every generated column | Services/products | Explicit service/product card rows only | High: changes equal-height behavior |
| `.arden-site .header-wrapper .nav-dropdown` | Border, radius and shadow only | React dropdown is visible on service parent hover/focus and contains eight child links | Global header | Header dropdown only after runtime DOM/config inspection | High: CSS does not itself create the dropdown state |

Matrix conclusion: global design tokens can be specified from the repository, but the first runtime edit remains blocked until the authenticated DOM identifies which generated elements receive these selectors.

## 3. T-shirt three-way evidence

| Layer | Evidence | State |
|---|---|---|
| React source | `src/pages/TShirtServicePage.tsx` imports `SizeChartSection`, `PrintTechniquesSection`, `ProcessStepsSection`, defines five fabric cards and six GSM options, and renders banner + fabric selector + size chart + print techniques + process + CTA | Authoritative/current |
| React data | `src/data/siteData.ts` supplies `sizeChartTshirt` and `productionProcess`; `PrintTechniquesSection.tsx` defines four technique records | Authoritative/current |
| WordPress import | `wordpress/import/pages/tshirt-service-flatsome.txt` contains a six-section native import with banner, fabric selector, size chart, print techniques, process, and CTA, but it is marked `arden-pilot`, uses a tabgroup instead of five selectable React cards, and does not represent React click state | Present but not behaviorally equivalent; stale relative to React interaction/structure |
| WordPress Draft 83 | Historical regression says rendered output was 4 sections, 1 H3, 2 controls, and 0.444 text similarity; public read-only preview now returns 404 and REST returns 401 | Current database state not readable in this session |

Conclusion: the import is stale/incomplete relative to React behavior, but the claim that Draft 83 exactly matches that import cannot be made without authenticated read-only content inspection.

## 4. Policies three-way evidence

| Layer | Evidence | State |
|---|---|---|
| React source | `PoliciesPage.tsx` renders banner, `PolicySection`, and CTA. `PolicySection.tsx` defines five sections and exact IDs: `chung`, `chinh-sach-bao-mat`, `chinh-sach-thanh-toan`, `chinh-sach-doi-tra`, `chinh-sach-van-chuyen` | Authoritative/current |
| WordPress import | `wordpress/import/pages/policies-flatsome.txt` contains five title-based tabs with abbreviated copy; no verified matching section IDs or React active-tab state contract | Present but stale/incomplete relative to React |
| WordPress Draft 99 | Historical regression says one H2 and two controls; public read-only preview returns 404 and REST returns 401 | Current database/rendered state not readable in this session |

Conclusion: the import is stale relative to React. Draft 99 cannot be declared synchronized or unsynchronized beyond the historical regression evidence until its content and rendered DOM are inspected authenticated.

## 5. Fabric Guide exact contract

- React root selector: `#fabric-grid`.
- React controls: one text input and a `Tabs` control with five options: `all`, `tshirt`, `shirt`, `jacket`, `pants`.
- React data source: the local `fabricList` in `FabricGuidePage.tsx`; six records, filtered by `name`, `composition`, and `application`.
- React state: `selectedCategory` defaults to `all`; `searchQuery` defaults to empty string.
- Import root: `#fabric-grid` exists.
- Import controls: one text input and five button shortcodes exist.
- Import cards: six `col_inner` blocks exist, but no `.arden-fabric-card`, no `.arden-fabric-filter`, and no explicit category data attributes exist.
- JS initialization: `DOMContentLoaded` in `native-interactions.js`.
- JS selectors: first text/search input under `#fabric-grid`; first five `a.button`; inferred `.col` cards containing `h3` and text `Thành phần:`.
- Missing state/control: stable category identifier, stable card selector/data attributes, and explicit accessible empty-state node.
- Historical rendered result: zero `.arden-fabric-card` and zero `.arden-fabric-filter` according to `FULL_REGRESSION_DEFECTS.md`; this is consistent with a missing class contract, but the current live DOM still requires authenticated confirmation.
- Minimum repair: establish one stable native DOM contract for controls/cards, derive filtering from explicit category/card data, preserve `aria-pressed` or equivalent tab semantics, and add an accessible no-results state. No React runtime dependency is needed.

## 6. Header dropdown inspection result

Repository-resolved facts:

- Parent: `Dịch vụ`, URL `/dich-vu`.
- Children: eight entries in `task08-configure-navigation.php`.
- Menu location: `primary`.
- PHP file is explicitly local-only and calls mutating WordPress functions; it was not executed.
- Header setup requires native Flatsome Header Builder and explicitly says no custom `header.php`.
- Relevant child CSS only styles `.nav-dropdown`; it does not create the menu hierarchy or guarantee visibility/focus state.

Runtime-unresolved facts:

- actual stored menu item parent IDs and menu location
- Header Builder element/menu selection
- generated desktop `<ul>`/dropdown markup and classes
- computed `display`, `visibility`, `opacity`, `pointer-events`, `overflow`, and `z-index`
- keyboard focus/disclosure behavior

Classification conclusion: **REG-006 is not proven to be PHP/configuration-only or CSS/code-only.** It is a WordPress-runtime integration blocker until those facts are read.

## 7. CTA target validation

| CTA/source | Confirmed canonical target | Status | Remaining authority |
|---|---|---|---|
| T-shirt service | `/dich-vu/may-ao-thun` | Confirmed by `App.tsx`, `Header.tsx`, `Footer.tsx`, and `SITE_ROUTE_MAPPING.md` | Runtime page existence still needs authenticated check |
| Shirt service | `/dich-vu/may-ao-so-mi` | Confirmed by React route map and route mapping | Runtime page existence still needs authenticated check |
| Pants service | `/dich-vu/may-quan` | Confirmed by React route map and route mapping | Runtime page existence still needs authenticated check |
| Jacket service | `/dich-vu/may-ao-khoac` | Confirmed by React route map and route mapping | Runtime page existence still needs authenticated check |
| Services card: Shirt | Current source still has `/dich-vu#so-mi` in `siteData.ts` | Unresolved source drift | Repair target should be `/dich-vu/may-ao-so-mi` only after route policy confirmation; canonical mapping strongly supports it |
| Services card: Pants | Current source still has `/dich-vu#quan` | Unresolved source drift | Repair target should be `/dich-vu/may-quan` only after route policy confirmation; canonical mapping strongly supports it |
| Services card: Jacket | Current source still has `/dich-vu#ao-khoac` | Unresolved source drift | Repair target should be `/dich-vu/may-ao-khoac` only after route policy confirmation; canonical mapping strongly supports it |
| Services card: Gia Công Local Brand | Current source still has `/dich-vu#local-brand`; no route mapping entry exists | **No authoritative destination** | User/business decision required |
| Case-study cards | `/du-an/bst-ao-thun-local-brand` appears in React and imports; no confirmed Project CPT record in accessible runtime | **Target existence unresolved** | Authenticated CPT inspection, then owner approval if absent |
| Footer service links | Import uses legacy `/may-ao-thun/`, `/may-ao-so-mi/`, `/may-quan/`; React Footer uses canonical child paths | Confirmed drift | Canonical targets are the React Footer paths above |
| Policy footer fragments | React IDs are exact five IDs above; import has no verified matching panel IDs | Runtime mapping unresolved | Authenticated Draft 99 DOM must confirm fragment targets |

## 8. Unresolved items and required supply

1. Authenticated read-only WordPress browser/session access, or another safe read-only inspection path, to inspect Drafts 83, 99, and 100; menu 4; Header Builder; generated DOM; computed styles; and Project CPT records.
2. Approval of the Local Brand CTA destination if no existing canonical route is intended.
3. Confirmation of the `bst-ao-thun-local-brand` Project record; if absent, an owner-approved replacement target.
4. Legal/content approval remains required before any Policies content is synchronized, even after the technical Draft mapping is known.

## 9. Safety outcome

The repository blockers that can be resolved without mutation have been resolved and recorded. Runtime blockers remain because the local WordPress site is unauthenticated, and two CTA destinations lack authoritative business confirmation.

Task 08.6B remains blocked pending the unresolved items above.

## TASK 08.6A.2 — AUTHENTICATED READ-ONLY RUNTIME RESOLUTION

No WordPress mutation was performed. The shared browser session was used only for authenticated GET/navigation and DOM/computed-style reads. No save, update, publish, menu change, theme change, or form submission was performed.

### Runtime access result

- WordPress admin is authenticated as user `arden`.
- Draft 83, Draft 99, and Draft 100 edit screens were readable.
- Authenticated preview URLs for all three Drafts returned HTTP 200.
- The Project CPT list was readable and contains only Draft 110, `Task 05 — Dự án kiểm thử giao diện`.
- Public Draft access remains intentionally unavailable without the authenticated preview context.

### B-001 / REG-001 and REG-002 — resolved runtime evidence

At the authenticated 1440px Draft 100 preview:

- `h1` computes to Be Vietnam Pro, weight 600, 48px, 55.2px line-height, and `-0.96px` letter spacing.
- the sampled `h2` computes to weight 600, 36px, and 43.2px line-height.
- the sampled `h3` computes to weight 600, 18.4px, and 24.84px line-height.
- `body` computes to Plus Jakarta Sans, weight 400, 16px, and 24px line-height.
- the sampled primary button computes to weight 800, 11px, 26.4px line-height, and 12px radius.
- the sampled `.col-inner` is a generated Flatsome wrapper with 0px radius.

The runtime confirms the global typography defect: React expects H1/H2 `font-black` (900), while the generated WordPress headings compute at 600. The CSS selector-impact matrix in this document remains the safe scope classification. REG-001 still requires visual regression comparison after any future fix, but the runtime selector and computed-style facts are no longer unknown.

Classification result: **resolved as B**. No runtime-information blocker remains for this item; execution still requires the normal phase gate and screenshot comparison.

### B-002 / REG-003 — resolved three-way evidence

| Layer | Authenticated/read-only result | State |
|---|---|---|
| React | `TShirtServicePage.tsx` renders banner, five selectable fabric cards, six GSM controls, size chart, four print-technique cards, process steps from `productionProcess`, and CTA | Authoritative/current |
| Import | `tshirt-service-flatsome.txt` is 11,176 bytes and contains six `[section]` shortcodes, four explicit section IDs, two tabgroups, 11 tabs, 14 H3 tags, and two button shortcodes; it is marked `arden-pilot` and uses reduced tab representations | Stale/incomplete for React behavioral parity |
| Draft 83 | title `May áo thun Local Brand chuyên nghiệp`; slug `/dich-vu/may-ao-thun/`; status Draft; 9,928-character content; six `[section]` shortcodes, four explicit section IDs, two tabgroups, 11 tabs, 14 H3 tags, and two button shortcodes | Database stores the pilot import representation |
| Rendered Draft 83 | HTTP 200 authenticated preview; five `<section>` elements, one H1, five H2, five H3, eight `button/a.button` elements; no `#fabric-grid`, no Fabric Guide classes, no policy IDs | Rendered output is not React-equivalent |

Precise conclusion: Draft 83 matches the pilot import counts/content shape, but both are stale relative to the React interaction and card structure. The prior historical four-section result is not reproducible in the current authenticated preview; the current rendered count is five. The stale layer is the WordPress import/Draft representation relative to React, not the React source.

Classification result: **resolved as B**. The current Draft and provenance are now known; no runtime-information blocker remains.

### B-003 / REG-004 and policy fragments — resolved three-way evidence

| Layer | Authenticated/read-only result | State |
|---|---|---|
| React | `PolicySection.tsx` defines five policy records and exact IDs: `chung`, `chinh-sach-bao-mat`, `chinh-sach-thanh-toan`, `chinh-sach-doi-tra`, `chinh-sach-van-chuyen` | Authoritative/current |
| Import | `policies-flatsome.txt` is 8,379 bytes and contains three `[section]` shortcodes, one vertical tabgroup, five `[tab]` shortcodes, one `policy-section` ID, and abbreviated title-based tab content | Stale/incomplete for React IDs/content/state |
| Draft 99 | title `Chính sách`; slug `/chinh-sach/`; status Draft; 7,408-character content; three `[section]` shortcodes, one tabgroup, five tabs, one `policy-section` ID, one H1, one H2, and two button shortcodes | Database stores the abbreviated import representation |
| Rendered Draft 99 | HTTP 200 authenticated preview; four `<section>` elements, one H1, one H2, four H3, eight `button/a.button` elements, and zero elements matching the five React policy IDs | Rendered output cannot satisfy React footer fragments |

Precise conclusion: Draft 99 matches the abbreviated import shape, and both are stale relative to React. The missing policy anchor IDs are confirmed in the rendered DOM, not merely inferred. The stale layer is the WordPress import/Draft representation relative to React.

Classification result: **resolved as B** for technical runtime visibility. Legal approval remains a separate user/business gate.

### B-004 / REG-005 — resolved runtime DOM contract

Authenticated Draft 100 preview at 1440px returned HTTP 200 and rendered six `<section>` elements, but:

- `#fabric-grid`: 0 matches
- `.arden-fabric-card`: 0 matches
- `.arden-fabric-filter`: 0 matches
- input with placeholder `Tìm theo tên vải, định lượng hoặc ứng dụng...`: 1 match, parent `.arden-special-element.arden-special-element--form`
- five expected category labels: not rendered as `a.button` elements under `#fabric-grid` because that root does not exist
- fabric card H3s: five visible named records were found under generated `.col-inner` wrappers; the six-source-record expectation is not represented by a stable data contract
- `native-interactions.js` is enqueued on the page, but its `#fabric-grid` root query returns no node, so its initialization exits before binding

Precise conclusion: the broken contract is the missing rendered `#fabric-grid` root and missing stable card/filter classes/data attributes. The minimum repair is to restore a scoped root/control/card contract in the import/Draft and then bind the existing script to that contract, with an accessible empty state.

Classification result: **resolved as B**. The current runtime contract is now known; no runtime-information blocker remains.

### B-005 / REG-006 — resolved menu/Header Builder/DOM evidence

Authenticated menu 4 inspection found:

- parent item 120: `Dịch vụ`, parent `0`, URL `/dich-vu`
- child items 178 through 185: exactly eight children, each with parent `120`
- all eight child URLs match the repository canonical route mapping
- the menu edit screen identifies the configured location as `Main Menu`; the generated header uses the primary desktop menu

Authenticated Header Builder inspection found:

- Flatsome Header Dropdown Style is active
- Add border: checked
- Add shadow: checked
- Add arrow: checked
- dropdown radius: 0px
- text color: Dark
- text style: Simple

At a forced 1440px authenticated Draft 100 preview:

- visible desktop Services item is `menu-item-120`
- before hover, its `.nav-dropdown` has eight links, `visibility: hidden`, `opacity: 0`, and `z-index: 9`
- after hover, the item has `aria-expanded="true"` and class `current-dropdown`
- after hover, the dropdown has eight links, `visibility: visible`, `opacity: 1`, `pointer-events: auto`, `overflow: visible`, and `z-index: 9`

Precise conclusion: the configured hierarchy, Header Builder dropdown behavior, generated desktop DOM, hover state, pointer events, overflow, and z-index are all currently correct and the defect is not reproducible in this authenticated runtime. The historical REG-006 failure likely came from a stale/non-authenticated test state or a prior generated-header state; it is not currently proven to be a PHP, CSS, or menu-code defect.

Classification result: **resolved as B**. Do not change menu/PHP/CSS for REG-006 without a new reproducible failure.

### B-006 / REG-007 — runtime route/CPT result

Authenticated page edit screens confirm these Draft slugs exist:

- 83: `/dich-vu/may-ao-thun/`
- 84: `/dich-vu/may-ao-so-mi/`
- 85: `/dich-vu/may-ao-khoac/`
- 86: `/dich-vu/may-quan/`
- 99: `/chinh-sach/`
- 100: `/bang-vai/`

The Project CPT list contains only Draft 110, `Task 05 — Dự án kiểm thử giao diện`; no Project with slug `bst-ao-thun-local-brand` is present in the readable list.

Precise conclusion:

- the four service CTA canonical destinations are confirmed by React, route mapping, and corresponding Draft slugs;
- the legacy footer paths and `/dich-vu#so-mi`, `/dich-vu#quan`, `/dich-vu#ao-khoac` remain confirmed source/import drift;
- `/dich-vu#local-brand` has no route-map authority;
- `/du-an/bst-ao-thun-local-brand` has no current Project CPT record.

Classification result: **C** for the final Local Brand destination and replacement of the missing Project target. Runtime existence inspection is resolved.

## TASK 08.6A.2 safety result

All WordPress-runtime blockers have been inspected read-only and resolved as technical information gaps. The only remaining blockers are user/business decisions:

1. Approve the canonical destination for the `Gia Công Local Brand` CTA. The repository currently provides no authoritative route for it.
2. Approve a replacement for `/du-an/bst-ao-thun-local-brand`, because no matching Project CPT record exists. Do not invent or silently redirect the destination.
3. Approve the React policy copy/structure for synchronization into Draft 99 as legally acceptable content.

No runtime-information blocker remains. Task 08.6B is still blocked only by these user/business decisions.

NOT SAFE TO EXECUTE TASK 08.6B

## TASK 08.6A.3 — USER DECISIONS APPLIED

The three remaining user/business decisions are now resolved for planning and execution scope. No runtime file or WordPress database content was modified.

### Decision 1 — Local Brand CTA

- Approved target: `/dich-vu/#local-brand`
- CTA label and surrounding content: unchanged
- Required Task 08.6B acceptance condition: the WordPress Services page must contain a target element with exactly `id="local-brand"`.
- The target element must be added only during the authorized runtime fix phase; this document records the requirement and does not add it now.

### Decision 2 — Missing Case Study target

- Approved temporary target: `/du-an/`
- No Project slug will be invented.
- No fake production Project content will be created.
- All unresolved case-study CTAs identified in REG-007 are to use `/du-an/` until a real Project record exists.

### Decision 3 — Policies legal status

- React Policies content and structure are accepted as authoritative for conversion planning.
- Legal status: `LEGAL_REVIEW_REQUIRED`
- The legal marker does not authorize rewriting, removing, publishing, or automatically synchronizing the Policies page.
- Existing Policies content must remain in place until the authorized implementation phase and subsequent legal review.

## TASK 08.6A.3 SAFETY RE-EVALUATION

The previous runtime blockers and the three user-decision blockers have been resolved for execution planning. The remaining acceptance conditions are implementation checks, not information gaps:

- create the Services-page `id="local-brand"` target while preserving the approved `/dich-vu/#local-brand` CTA;
- replace unresolved case-study CTA targets with `/du-an/` without creating Project content;
- retain the React-authoritative Policies structure/content and mark it `LEGAL_REVIEW_REQUIRED`;
- keep the Policies page Draft and indexing disabled until legal review and the normal regression gates pass.

SAFE TO EXECUTE TASK 08.6B
