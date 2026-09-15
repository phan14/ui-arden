const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const output = path.resolve(__dirname, '../audit/task11_2-diagnosis.json');
const routes = [['home', '/'], ['about', '/gioi-thieu'], ['fabric', '/bang-vai']];

const box = el => {
  const rect = el.getBoundingClientRect();
  const css = getComputedStyle(el);
  return { top: +rect.top.toFixed(2), bottom: +rect.bottom.toFixed(2), height: +rect.height.toFixed(2), width: +rect.width.toFixed(2), display: css.display, padding: css.padding, margin: css.margin, gap: css.gap, position: css.position, overflow: css.overflow, aspectRatio: css.aspectRatio };
};

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const result = { generatedAt: new Date().toISOString(), home: {}, icons: [] };
  for (const [runtime, base] of [['reference', 'http://localhost:3000'], ['wordpress', 'http://localhost/mytest']]) {
    const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
    await page.goto(base + '/', { waitUntil: 'networkidle' });
    result.home[runtime] = await page.evaluate(boxFn => {
      const toBox = eval(`(${boxFn})`);
      const sections = [...document.querySelectorAll('main section, .arden-page > section')];
      return {
        documentHeight: document.documentElement.scrollHeight,
        sections: sections.map((el, index) => ({ index: index + 1, id: el.id || '', className: String(el.className).slice(0, 140), ...toBox(el), children: el.children.length, hiddenDescendants: [...el.querySelectorAll('*')].filter(n => { const c=getComputedStyle(n),r=n.getBoundingClientRect(); return (c.visibility==='hidden'||c.display==='none') && r.height>0; }).length })),
      };
    }, box.toString());
    await page.close();
  }
  for (const [route, pathname] of routes) {
    for (const [runtime, base] of [['reference', 'http://localhost:3000'], ['wordpress', 'http://localhost/mytest']]) {
      const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
      await page.goto(base + pathname, { waitUntil: 'networkidle' });
      result.icons.push({ route, runtime, ...(await page.evaluate(() => ({
        svg: [...document.querySelectorAll('main svg')].map(svg => ({ viewBox: svg.getAttribute('viewBox'), width: getComputedStyle(svg).width, height: getComputedStyle(svg).height, stroke: svg.getAttribute('stroke'), strokeWidth: svg.getAttribute('stroke-width'), fill: svg.getAttribute('fill'), className: String(svg.getAttribute('class') || '') })),
        iconFonts: [...document.querySelectorAll('main i, main [class*="icon-"]')].map(n => String(n.className)),
      }))) });
      await page.close();
    }
  }
  fs.writeFileSync(output, JSON.stringify(result, null, 2));
  await browser.close();
})();
