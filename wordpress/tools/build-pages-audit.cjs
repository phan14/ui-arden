const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const auditDir = path.join(root, 'wordpress', 'audit');
const importDir = path.join(root, 'wordpress', 'import', 'pages');
const pages = [
  ['AboutPage', '/gioi-thieu', 'about-flatsome.txt', 'static'],
  ['CareersPage', '/tuyen-dung', 'careers-flatsome.txt', 'static'],
  ['ContactPage', '/lien-he', 'contact-flatsome.txt', 'static'],
  ['FabricGuidePage', '/bang-vai', 'fabric-guide-flatsome.txt', 'static'],
  ['FAQPage', '/faq', 'faq-flatsome.txt', 'static'],
  ['JacketServicePage', '/dich-vu/may-ao-khoac', 'jacket-service-flatsome.txt', 'service'],
  ['ManufacturingPage', '/nang-luc-san-xuat', 'manufacturing-flatsome.txt', 'static'],
  ['PantsServicePage', '/dich-vu/may-quan', 'pants-service-flatsome.txt', 'service'],
  ['PoliciesPage', '/chinh-sach', 'policies-flatsome.txt', 'static'],
  ['QuotePage', '/bao-gia', 'quote-flatsome.txt', 'static'],
  ['ServicesPage', '/dich-vu', 'services-flatsome.txt', 'static'],
  ['ShirtServicePage', '/dich-vu/may-ao-so-mi', 'shirt-service-flatsome.txt', 'service'],
  ['TechpackGuidePage', '/huong-dan-techpack', 'techpack-guide-flatsome.txt', 'static'],
  ['TShirtServicePage', '/dich-vu/may-ao-thun', 'tshirt-service-flatsome.txt', 'service'],
  ['NewsPage', '/tin-tuc', null, 'dynamic'],
  ['CategoryPage', '/chuyen-muc/kien-thuc-vai', null, 'dynamic'],
  ['SearchPage', '/tim-kiem?q=vai', null, 'dynamic'],
  ['ProjectsPage', '/du-an', null, 'dynamic'],
  ['CaseStudyPage', '/du-an/bst-ao-thun-local-brand', null, 'dynamic'],
  ['NotFoundPage', '/route-khong-ton-tai', null, 'system'],
];

const clean = value => (value || '').replace(/\u00a0/g, ' ').replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
const escShortcode = html => html.replace(/\[/g, '&#91;').replace(/\]/g, '&#93;');

(async () => {
  fs.mkdirSync(auditDir, { recursive: true });
  fs.mkdirSync(importDir, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome' });
  const inventory = [];
  for (const [component, route, file, type] of pages) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const renderErrors = [];
    page.on('pageerror', error => renderErrors.push(error.message));
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(250);
    if (!await page.locator('main').count()) {
      const sourcePath = path.join(root, 'src', 'pages', `${component}.tsx`);
      inventory.push({ component, route, file, type, renderError: renderErrors.join('; ') || 'React route rendered no main element', sourceFile: sourcePath, sectionCount: 0, topCount: 0, cardCount: 0, dynamicControlCount: 0, h1: [], h2: [], h3: [], paragraphs: [], semanticTexts: [], ctas: [], images: [], forms: [], sectionOrder: [], reusable: [], text: '', html: [] });
      await page.close();
      continue;
    }
    const data = await page.evaluate(() => {
      const main = document.querySelector('main');
      const wrapper = main && main.firstElementChild;
      const top = wrapper ? [...wrapper.children] : [];
      const sections = top.filter(el => el.matches('section'));
      const all = main ? [...main.querySelectorAll('*')] : [];
      const texts = selector => main ? [...main.querySelectorAll(selector)].map(e => e.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean) : [];
      const leafTexts = selector => main ? [...main.querySelectorAll(selector)].filter(e => !e.querySelector(selector)).map(e => e.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean) : [];
      const cards = all.filter(e => e.matches('article') || /(^|\s)(card|rounded-2xl)(\s|$)/.test(e.className || '')).length;
      const dynamic = all.filter(e => e.matches('form,input,textarea,select') || e.getAttribute('role') === 'tab').length;
      const reusable = sections.map(e => e.getAttribute('aria-label') || e.id || '').filter(Boolean);
      const html = top.map(el => {
        const clone = el.cloneNode(true);
        clone.querySelectorAll('script').forEach(n => n.remove());
        clone.querySelectorAll('*').forEach(n => {
          [...n.attributes].forEach(a => {
            if (/^on/i.test(a.name)) n.removeAttribute(a.name);
            if (a.name === 'style' && !a.value.trim()) n.removeAttribute(a.name);
          });
        });
        return clone.outerHTML;
      });
      return {
        title: document.title,
        h1: texts('h1'), h2: texts('h2'), h3: texts('h3'),
        paragraphs: texts('p'),
        semanticTexts: leafTexts('h1,h2,h3,h4,h5,h6,p,li,a,button,label,option,th,td,blockquote,small,span'),
        ctas: [...main.querySelectorAll('a,button,input[type=submit]')].map(e => (e.textContent || e.value || '').replace(/\s+/g, ' ').trim()).filter(Boolean),
        images: [...main.querySelectorAll('img')].map(i => ({ src: i.getAttribute('src') || '', alt: i.alt || '' })),
        forms: [...main.querySelectorAll('form')].map(f => [...f.querySelectorAll('input,select,textarea,button')].map(e => ({ tag:e.tagName.toLowerCase(), type:e.type || '', name:e.name || '', label:e.labels?.[0]?.textContent?.replace(/\s+/g,' ').trim() || e.getAttribute('placeholder') || '', required:e.required }))),
        sectionCount: sections.length,
        topCount: top.length,
        sectionOrder: sections.map((e,i) => e.querySelector('h1,h2')?.textContent.replace(/\s+/g, ' ').trim() || e.getAttribute('aria-label') || e.id || `Section ${i+1}`),
        cardCount: cards,
        dynamicControlCount: dynamic,
        reusable,
        text: (main?.textContent || '').trim(), html
      };
    });
    inventory.push({ component, route, file, type, renderError: renderErrors.join('; '), ...data });
    if (file) {
      const blocks = data.html.map((outer, index) => {
        const section = outer.match(/^<section([^>]*)>([\s\S]*)<\/section>$/i);
        if (!section) return ['[ux_html class="arden-react-page__block"]', escShortcode(outer), '[/ux_html]'].join('\n');
        const className = (section[1].match(/class="([^"]*)"/) || [,''])[1];
        const id = (section[1].match(/id="([^"]*)"/) || [,''])[1];
        const shortcodeAttrs = [`class="arden-react-page__section ${className}"`];
        if (id) shortcodeAttrs.push(`id="${id}"`);
        return [
          `[section ${shortcodeAttrs.join(' ')}]`,
          '[row width="full-width" style="collapse"]',
          '[col span="12" padding="0px"]',
          `[ux_html class="arden-react-page__content arden-react-page__content--${index + 1}"]`,
          escShortcode(section[2]),
          '[/ux_html]', '[/col]', '[/row]', '[/section]'
        ].join('\n');
      });
      const source = [`<!-- Source: src/pages/${component}.tsx | Route: ${route} | Generated section-by-section from rendered React DOM; do not paraphrase. -->`, `<div class="arden-react-page arden-react-page--${component.replace(/Page$/, '').toLowerCase()}">`, ...blocks, '</div>', ''].join('\n');
      fs.writeFileSync(path.join(importDir, file), source, 'utf8');
    }
    await page.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(auditDir, 'pages-source-inventory.json'), JSON.stringify(inventory, null, 2), 'utf8');

  const md = ['# Pages Source Inventory', '', 'Generated directly from the rendered React routes. Content below is source text and is not paraphrased.', ''];
  for (const p of inventory) {
    md.push(`## ${p.component}`, '', `- Route: \`${p.route}\``, `- Classification: ${p.type}`, `- React render error: ${p.renderError || 'None'}`, `- H1: ${p.h1.map(x => `\`${x}\``).join('; ') || 'None'}`, `- Sections: ${p.sectionCount}`, `- Top-level rendered blocks: ${p.topCount}`, `- Cards/rounded content blocks: ${p.cardCount}`, `- Images: ${p.images.length}`, `- Forms: ${p.forms.length}`, `- Interactive/form controls: ${p.dynamicControlCount}`, `- CTA labels: ${p.ctas.map(x => `\`${x}\``).join('; ') || 'None'}`, '', '### Section order', '', ...p.sectionOrder.map((x,i) => `${i+1}. ${x}`), '', '### H2', '', ...p.h2.map(x => `- ${x}`), '', '### H3', '', ...p.h3.map(x => `- ${x}`), '', '### Images', '', ...p.images.map(x => `- ${x.alt || '(no alt)'} — ${x.src}`), '', '### Forms', '', '```json', JSON.stringify(p.forms, null, 2), '```', '', '### Exact rendered page text', '', '```text', clean(p.text), '```', '');
  }
  fs.writeFileSync(path.join(auditDir, 'PAGES_SOURCE_INVENTORY.md'), md.join('\n'), 'utf8');
})();
