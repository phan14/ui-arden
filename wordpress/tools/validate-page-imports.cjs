const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const root = path.resolve(__dirname, '..', '..');
const inventory = JSON.parse(fs.readFileSync(path.join(root, 'wordpress/audit/pages-source-inventory.json'), 'utf8'));
const normalize = value => (value || '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const results = [];
  for (const source of inventory.filter(item => item.file)) {
    const filename = path.join(root, 'wordpress/import/pages', source.file);
    if (!fs.existsSync(filename)) {
      results.push({ component: source.component, exists: false });
      continue;
    }
    const raw = fs.readFileSync(filename, 'utf8');
    const html = execFileSync('C:/xampp/php/php.exe', [path.join(root, 'wordpress/tools/render-page-import.php'), source.file], { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 });
    const sourceSectionCount = (raw.match(/\[section\b/g) || []).length;
    const page = await browser.newPage();
    await page.setContent(`<main>${html}</main>`);
    const actual = await page.evaluate(() => {
      const main = document.querySelector('main');
      main.querySelectorAll('style,script').forEach(element => element.remove());
      const text = selector => [...main.querySelectorAll(selector)].map(e => e.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean);
      const leafText = selector => [...main.querySelectorAll(selector)].filter(e => !e.querySelector(selector)).map(e => e.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean);
      return {
        text: main.textContent,
        semanticTexts: leafText('h1,h2,h3,h4,h5,h6,p,li,a,button,label,option,th,td,blockquote,small,span'),
        h1: text('h1'), h2: text('h2'), h3: text('h3'),
        sections: main.querySelectorAll('section').length,
        images: main.querySelectorAll('img').length,
        forms: main.querySelectorAll('form').length,
        ctas: [...main.querySelectorAll('a,button,input[type=submit]')].map(e => (e.textContent || e.value || '').replace(/\s+/g, ' ').trim()).filter(Boolean)
      };
    });
    actual.sections = sourceSectionCount;
    await page.close();
    results.push({
      component: source.component, file: source.file, exists: true,
      content: normalize(actual.text).replace(/\s+/g, '') === normalize(source.text).replace(/\s+/g, ''),
      h1: JSON.stringify(actual.h1) === JSON.stringify(source.h1),
      h2: JSON.stringify(actual.h2) === JSON.stringify(source.h2),
      h3: JSON.stringify(actual.h3) === JSON.stringify(source.h3),
      sections: actual.sections === source.sectionCount,
      images: actual.images === source.images.length,
      forms: actual.forms === source.forms.length,
      ctas: JSON.stringify(actual.ctas) === JSON.stringify(source.ctas),
      expected: { sections: source.sectionCount, images: source.images.length, forms: source.forms.length, ctas: source.ctas.length },
      actual: { sections: actual.sections, images: actual.images, forms: actual.forms, ctas: actual.ctas.length },
      textDebug: { expected: normalize(source.text), actual: normalize(actual.text) }
    });
  }
  await browser.close();
  fs.writeFileSync(path.join(root, 'wordpress/audit/pages-import-validation.json'), JSON.stringify(results, null, 2), 'utf8');
  const content = ['# Pages Content Diff', '', '| Page | Exact text | H1 | H2 | H3 | CTA labels |', '|---|---:|---:|---:|---:|---:|', ...results.map(r => `| ${r.component} | ${r.content?'PASS':'FAIL'} | ${r.h1?'PASS':'FAIL'} | ${r.h2?'PASS':'FAIL'} | ${r.h3?'PASS':'FAIL'} | ${r.ctas?'PASS':'FAIL'} |`), '', results.every(r=>r.content&&r.h1&&r.h2&&r.h3&&r.ctas) ? '**NO UNAPPROVED CONTENT DIFFERENCE for generated static/service imports.**' : '**Differences remain; see validation JSON.**', '', 'Dynamic WordPress templates intentionally source titles, excerpts, images, dates, categories and content from WordPress records. Their production content cannot be declared equal until records are populated and validated.', ''];
  fs.writeFileSync(path.join(root, 'wordpress/audit/PAGES_CONTENT_DIFF.md'), content.join('\n'), 'utf8');
  const structure = ['# Pages Structure Diff', '', '| Page | Sections | Images | Forms |', '|---|---:|---:|---:|', ...results.map(r => `| ${r.component} | ${r.sections?'PASS':'FAIL'} (${r.actual.sections}/${r.expected.sections}) | ${r.images?'PASS':'FAIL'} (${r.actual.images}/${r.expected.images}) | ${r.forms?'PASS':'FAIL'} (${r.actual.forms}/${r.expected.forms}) |`), '', results.every(r=>r.sections&&r.images&&r.forms) ? '**NO UNAPPROVED STRUCTURE DIFFERENCE for generated static/service imports.**' : '**Differences remain; see validation JSON.**', '', 'Interactive React state is not executed by a UX HTML import. Tabs, accordions, calculators, search filtering, modal behavior and form submission require WordPress-side behavior validation before those pages are production-ready.', ''];
  fs.writeFileSync(path.join(root, 'wordpress/audit/PAGES_STRUCTURE_DIFF.md'), structure.join('\n'), 'utf8');
  if (results.some(r => !r.exists || !r.content || !r.h1 || !r.h2 || !r.h3 || !r.ctas || !r.sections || !r.images || !r.forms)) process.exitCode = 1;
})();
