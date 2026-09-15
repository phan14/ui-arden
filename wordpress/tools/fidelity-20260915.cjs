const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');

const routes = [
  ['home', '/'], ['about', '/gioi-thieu/'], ['services', '/dich-vu/'],
  ['tshirt', '/dich-vu/may-ao-thun/'], ['shirt', '/dich-vu/may-ao-so-mi/'],
  ['pants', '/dich-vu/may-quan/'], ['jacket', '/dich-vu/may-ao-khoac/'],
  ['fabric', '/bang-vai/'], ['techpack', '/huong-dan-techpack/'],
  ['manufacturing', '/nang-luc-san-xuat/'], ['projects', '/du-an/'],
  ['case-study', '/du-an/bst-ao-thun-local-brand/'], ['news', '/tin-tuc/'],
  ['category', '/chuyen-muc/kien-thuc-vai/'], ['search', '/tim-kiem/'],
  ['faq', '/faq/'], ['quote', '/bao-gia/'], ['contact', '/lien-he/'],
  ['policies', '/chinh-sach/'], ['careers', '/tuyen-dung/'], ['404', '/fidelity-missing-page/'],
];
const selected = process.argv[3] ? routes.filter(([name]) => process.argv[3].split(',').includes(name)) : routes;
const out = path.resolve(__dirname, '../audit/fidelity-20260915', process.argv[2] || 'after-sync');
const viewports = [{ width: 1440, height: 900 }, { width: 768, height: 1024 }, { width: 390, height: 844 }];
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const contexts = { react: await browser.newContext(), wordpress: await browser.newContext() };
  const results = [];
  try {
    for (const [name, route] of selected) {
      for (const viewport of viewports) {
        const pair = { name, route, viewport };
        for (const [runtime, base] of [['react', 'http://localhost:3000'], ['wordpress', 'http://localhost/mytest']]) {
          const page = await contexts[runtime].newPage();
          await page.setViewportSize(viewport);
          const errors = [], failedRequests = [];
          page.on('pageerror', error => errors.push(error.message));
          page.on('requestfailed', request => failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
          const response = await page.goto(base + route, { waitUntil: 'domcontentloaded' });
          await page.evaluate(async () => {
            await Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 8000))]);
            for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * .8) {
              scrollTo({ top: y, behavior: 'instant' });
              await new Promise(resolve => setTimeout(resolve, 100));
            }
            await Promise.race([
              Promise.all([...document.images].map(img => img.decode().catch(() => {}))),
              new Promise(resolve => setTimeout(resolve, 10000)),
            ]);
            scrollTo({ top: 0, behavior: 'instant' });
          });
          await page.waitForTimeout(300);
          pair[runtime] = await page.evaluate(() => {
            const rect = node => {
              const b = node.getBoundingClientRect(), s = getComputedStyle(node);
              return { x: b.x, y: b.y, width: b.width, height: b.height, font: s.fontFamily, size: s.fontSize, lineHeight: s.lineHeight };
            };
            return {
              title: document.title, height: document.documentElement.scrollHeight,
              overflow: document.documentElement.scrollWidth > innerWidth,
              headings: [...document.querySelectorAll('main h1,main h2')].map(n => ({ text: n.textContent.trim(), ...rect(n) })),
              sections: [...document.querySelectorAll('main section')].map(n => ({ id: n.id, className: n.className, ...rect(n) })),
              footer: document.querySelector('footer') ? rect(document.querySelector('footer')) : null,
              brokenImages: [...document.images].filter(n => !n.complete || !n.naturalWidth).map(n => ({ src: n.currentSrc || n.src, alt: n.alt })),
              styles: [...document.querySelectorAll('link[rel=stylesheet]')].map(n => n.href),
            };
          });
          Object.assign(pair[runtime], { status: response.status(), errors, failedRequests });
          await page.screenshot({ path: path.join(out, `${name}-${viewport.width}-${runtime}.png`), fullPage: true });
          await page.close();
        }
        results.push(pair);
        fs.writeFileSync(path.join(out, 'metrics.json'), JSON.stringify(results, null, 2));
        console.log(`${name} ${viewport.width}: height ${pair.react.height}/${pair.wordpress.height}, overflow ${pair.wordpress.overflow}, broken images ${pair.react.brokenImages.length}/${pair.wordpress.brokenImages.length}, HTTP ${pair.wordpress.status}`);
      }
    }
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
