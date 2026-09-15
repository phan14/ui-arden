const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const phase = process.argv[2] || 'before';
const outDir = path.resolve(__dirname, `../audit/task11-${phase}`);
const routes = [
  ['home', '/'], ['about', '/gioi-thieu'], ['search', '/tim-kiem'],
  ['fabric', '/bang-vai'], ['news', '/tin-tuc'], ['projects', '/du-an'],
  ['case-study', '/du-an/bst-ao-thun-local-brand']
];
const widths = [1440, 1024, 768, 390];
fs.mkdirSync(outDir, { recursive: true });

async function settle(page, url, viewport) {
  await page.setViewportSize(viewport);
  const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(innerHeight, 600)) {
      scrollTo(0, y);
      await new Promise(resolve => setTimeout(resolve, 15));
    }
    scrollTo(0, 0);
  });
  const metrics = await page.evaluate(() => {
    const visible = node => {
      const css = getComputedStyle(node);
      const box = node.getBoundingClientRect();
      return css.display !== 'none' && css.visibility !== 'hidden' && box.width > 0 && box.height > 0;
    };
    const box = node => {
      if (!node) return null;
      const rect = node.getBoundingClientRect();
      return { x: +rect.x.toFixed(2), y: +rect.y.toFixed(2), width: +rect.width.toFixed(2), height: +rect.height.toFixed(2) };
    };
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const links = [...document.querySelectorAll('main a[href]')];
    return {
      document: { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight },
      main: box(main), footer: box(footer),
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      adminBar: !!document.querySelector('#wpadminbar'),
      counts: {
        sections: document.querySelectorAll('main section').length,
        articles: document.querySelectorAll('main article').length,
        cards: document.querySelectorAll('main .arden-card, main [class*="rounded-2xl"]').length,
        tabs: document.querySelectorAll('main [role="tab"], main [data-search-type], main [data-filter]').length,
        inputs: document.querySelectorAll('main input, main select, main textarea').length,
        svg: [...document.querySelectorAll('main svg')].filter(visible).length,
        iconFonts: [...document.querySelectorAll('main i, main [class*="icon-"]')].filter(visible).length,
        headings: document.querySelectorAll('main h1, main h2, main h3, main h4').length,
        images: document.querySelectorAll('main img').length
      },
      escapedLinks: links.map(a => a.href).filter(href => href.startsWith('http://localhost/') && !href.startsWith('http://localhost/mytest/')).length,
      h1: box(document.querySelector('main h1')),
      firstArticle: box(document.querySelector('main article')),
      firstInput: box(document.querySelector('main input')),
      consoleMarker: document.readyState
    };
  });
  return { status: response.status(), ...metrics };
}

async function composite(browser, refPath, curPath, outputPath, mode) {
  const ref = `data:image/png;base64,${fs.readFileSync(refPath).toString('base64')}`;
  const cur = `data:image/png;base64,${fs.readFileSync(curPath).toString('base64')}`;
  const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
  await page.setContent(`<style>*{box-sizing:border-box}html,body{margin:0;background:#fff}#wrap{display:${mode === 'side' ? 'flex' : 'grid'};align-items:start}img{display:block;${mode === 'side' ? 'width:50%;height:auto' : 'grid-area:1/1;width:100%;height:auto'}${mode === 'overlay' ? ';opacity:.5' : ''}${mode === 'diff' ? ';mix-blend-mode:difference' : ''}}</style><div id="wrap"><img src="${ref}"><img src="${cur}"></div>`);
  await page.waitForFunction(() => [...document.images].every(img => img.complete));
  await page.screenshot({ path: outputPath, fullPage: true });
  await page.close();
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const refContext = await browser.newContext();
  const curContext = await browser.newContext();
  const results = [];
  for (const [name, route] of routes) {
    for (const width of widths) {
      const viewport = { width, height: width === 390 ? 844 : 900 };
      const refPage = await refContext.newPage();
      const curPage = await curContext.newPage();
      const refPath = path.join(outDir, `${name}-${width}-reference.png`);
      const curPath = path.join(outDir, `${name}-${width}-current.png`);
      const [reference, current] = await Promise.all([
        settle(refPage, `http://localhost:3000${route}`, viewport),
        settle(curPage, `http://localhost/mytest${route}`, viewport)
      ]);
      await Promise.all([refPage.screenshot({ path: refPath, fullPage: true }), curPage.screenshot({ path: curPath, fullPage: true })]);
      await refPage.close(); await curPage.close();
      await composite(curContext, refPath, curPath, path.join(outDir, `${name}-${width}-side-by-side.png`), 'side');
      await composite(curContext, refPath, curPath, path.join(outDir, `${name}-${width}-overlay.png`), 'overlay');
      await composite(curContext, refPath, curPath, path.join(outDir, `${name}-${width}-diff.png`), 'diff');
      results.push({ name, route, width, reference, current });
      console.log(`DONE ${name}-${width}`);
    }
  }
  await browser.close();
  fs.writeFileSync(path.join(outDir, 'metrics.json'), `${JSON.stringify({ phase, generatedAt: new Date().toISOString(), results }, null, 2)}\n`);
})().catch(error => { console.error(error); process.exit(1); });
