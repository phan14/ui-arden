const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const out = path.resolve(__dirname, '../audit/task11_1-sections');
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  for (const width of [768, 390]) {
    for (const [runtime, base] of [['reference', 'http://localhost:3000'], ['wordpress', 'http://localhost/mytest']]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.goto(base + '/', { waitUntil: 'networkidle' });
      const sections = await page.$$('main section, .arden-page > section');
      for (let i = 0; i < sections.length; i++) await sections[i].screenshot({ path: path.join(out, `home-${i + 1}-${width}-${runtime}.png`) });
      await page.close();
    }
  }
  await browser.close();
})();
