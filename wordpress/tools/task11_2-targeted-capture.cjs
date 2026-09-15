const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const output = path.resolve(__dirname, '../audit/task11_2-targeted');
fs.mkdirSync(output, { recursive: true });

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  for (const width of [390, 768, 1024, 1440]) {
    for (const [runtime, base] of [['reference', 'http://localhost:3000'], ['wordpress', 'http://localhost/mytest']]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.goto(`${base}/`, { waitUntil: 'networkidle' });
      await page.screenshot({ path: path.join(output, `home-${width}-${runtime}.png`), fullPage: true });
      await page.close();
    }
  }
  for (const [route, pathname] of [['about', '/gioi-thieu'], ['fabric', '/bang-vai']]) {
    for (const [runtime, base] of [['reference', 'http://localhost:3000'], ['wordpress', 'http://localhost/mytest']]) {
      const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
      await page.goto(base + pathname, { waitUntil: 'networkidle' });
      await page.screenshot({ path: path.join(output, `${route}-390-${runtime}.png`), fullPage: true });
      await page.close();
    }
  }
  await browser.close();
})();
