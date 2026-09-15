const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const out = path.resolve(__dirname, process.argv[2] || '../audit/task11_3a-home-review');
fs.mkdirSync(out, { recursive: true });
const dataUri = (file) => `data:image/png;base64,${fs.readFileSync(file).toString('base64')}`;

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  for (const width of [390, 768, 1024, 1440]) {
    for (const [runtime, base] of [['reference', 'http://localhost:3000/'], ['wordpress', 'http://localhost/mytest/']]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.goto(base, { waitUntil: 'networkidle' });
      await page.screenshot({ path: path.join(out, `${width}-${runtime}.png`), fullPage: true });
      await page.close();
    }
    const ref = dataUri(path.join(out, `${width}-reference.png`));
    const wp = dataUri(path.join(out, `${width}-wordpress.png`));
    for (const mode of ['side-by-side', 'overlay']) {
      const page = await browser.newPage({ viewport: { width: mode === 'side-by-side' ? width * 2 : width, height: 900 } });
      const body = mode === 'side-by-side'
        ? `<img src="${ref}"><img src="${wp}">`
        : `<div><img src="${ref}"><img class="wp" src="${wp}"></div>`;
      await page.setContent(`<!doctype html><style>*{box-sizing:border-box}html,body{margin:0;background:#fff}body{display:${mode === 'side-by-side' ? 'flex' : 'block'}}div{position:relative;width:${width}px}img{display:block;width:${width}px;height:auto}.wp{position:absolute;inset:0 auto auto 0;opacity:.5}</style>${body}`);
      await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete && image.naturalHeight));
      await page.screenshot({ path: path.join(out, `${width}-${mode}.png`), fullPage: true });
      await page.close();
    }
  }
  await browser.close();
})();
