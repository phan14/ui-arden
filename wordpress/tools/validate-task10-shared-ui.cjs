const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const output = process.argv[2] || path.resolve(__dirname, '../audit/task10-shared-after.json');
const widths = [1440, 1024, 768, 390];

const sample = async (page, url, width) => {
  await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
  const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  return page.evaluate(({ status }) => {
    const rect = selector => {
      const node = document.querySelector(selector);
      if (!node) return null;
      const box = node.getBoundingClientRect();
      const css = getComputedStyle(node);
      return {
        x: +box.x.toFixed(2), width: +box.width.toFixed(2), height: +box.height.toFixed(2),
        color: css.color, margin: css.margin, gap: css.gap,
        borderRadius: css.borderRadius, boxShadow: css.boxShadow,
        gridTemplateColumns: css.gridTemplateColumns
      };
    };
    const h1 = document.querySelector('main h1');
    const h1Ancestors = [];
    for (let node = h1; node && h1Ancestors.length < 8; node = node.parentElement) {
      const box = node.getBoundingClientRect();
      h1Ancestors.push({ tag: node.tagName.toLowerCase(), classes: String(node.className || ''), x: +box.x.toFixed(2), width: +box.width.toFixed(2), padding: getComputedStyle(node).padding });
    }
    return {
      status,
      header: rect('header#header, body > div > header, header'),
      hero: rect('main .arden-hero, main section'),
      h1: rect('main h1'),
      body: rect('body'),
      content: rect('.arden-page, main > div'),
      button: rect('main .arden-button, main a.button, main button'),
      card: rect('main .arden-feature-badges .arden-card, main .arden-card, main article'),
      aboutGrid: rect('main .row.grid'),
      aboutGridChild: rect('main .grid > *'),
      h1Ancestors
    };
  }, { status: response.status() });
};

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const referenceContext = await browser.newContext();
  const currentContext = await browser.newContext();
  const cases = [];
  for (const width of widths) {
    for (const [name, route] of [['home', '/'], ['about', '/gioi-thieu']]) {
      const referencePage = await referenceContext.newPage();
      const currentPage = await currentContext.newPage();
      const [reference, current] = await Promise.all([
        sample(referencePage, `http://localhost:3000${route}`, width),
        sample(currentPage, `http://localhost/mytest${route}`, width)
      ]);
      const checks = {
        http: reference.status === 200 && current.status === 200,
        headerHeight: Math.abs(reference.header.height - current.header.height) <= 2,
        bodyColor: current.content && current.content.color === 'oklch(0.279 0.041 260.031)'
      };
      if (name === 'home') {
        checks.heroWidth = !!current.hero && Math.abs(reference.body.width - current.hero.width) <= 2;
        checks.h1Geometry = !!reference.h1 && !!current.h1 && Math.abs(reference.h1.x - current.h1.x) <= 2 && Math.abs(reference.h1.width - current.h1.width) <= 2;
        checks.buttonMargin = !!reference.button && !!current.button && current.button.margin === reference.button.margin;
        checks.buttonGap = !!current.button && current.button.gap === '10px';
        checks.buttonShadow = !!current.button && current.button.boxShadow !== 'none';
        checks.buttonHeight = !!current.button && Math.abs(current.button.height - 50) <= 0.5;
        checks.cardRadius = !!current.card && current.card.borderRadius === '16px';
      } else {
        checks.gridChildWidth = reference.aboutGridChild && current.aboutGridChild &&
          Math.abs(reference.aboutGridChild.width - current.aboutGridChild.width) <= 2;
      }
      cases.push({ name, width, reference, current, checks, pass: Object.values(checks).every(Boolean) });
      await referencePage.close();
      await currentPage.close();
    }
  }
  await browser.close();
  const result = { generatedAt: new Date().toISOString(), cases, pass: cases.every(item => item.pass) };
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify({ output, pass: result.pass, failures: cases.filter(item => !item.pass).map(item => ({ name: item.name, width: item.width, checks: item.checks })) }, null, 2));
  process.exit(result.pass ? 0 : 1);
})().catch(error => { console.error(error); process.exit(2); });
