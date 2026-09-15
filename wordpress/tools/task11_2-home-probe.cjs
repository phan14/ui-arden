const { chromium } = require('playwright');

const routes = [
  ['reference', 'http://localhost:3000/'],
  ['wordpress', 'http://localhost/mytest/'],
];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  for (const [runtime, url] of routes) {
    const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
    await page.goto(url, { waitUntil: 'networkidle' });
    const result = await page.evaluate((runtimeName) => {
      const candidates = [...document.querySelectorAll('main section')];
      const section = candidates[2];
      const selectors = runtimeName === 'wordpress'
        ? ['.section-content', '.section-content > .row', '.section-content > .row > .col', '.section-content > .row > .col > .col-inner']
        : ['.max-w-7xl', '.max-w-7xl > div', '.max-w-7xl > div > div'];
      const nodes = [section, ...selectors.map((selector) => section?.querySelector(selector))].filter(Boolean);
      return { href: location.href, candidates: candidates.length, nodes: nodes.map((node) => {
        const rect = node.getBoundingClientRect();
        const css = getComputedStyle(node);
        return {
          tag: node.tagName,
          className: String(node.className).slice(0, 120),
          width: +rect.width.toFixed(2),
          height: +rect.height.toFixed(2),
          padding: css.padding,
          margin: css.margin,
          rowGap: css.rowGap,
          columnGap: css.columnGap,
        };
      }) };
    }, runtime);
    process.stdout.write(`${runtime}\n${JSON.stringify(result, null, 2)}\n`);
    await page.close();
  }
  await browser.close();
})();
