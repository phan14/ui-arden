const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const source = path.resolve(__dirname, '../audit/task11_1-final-144');
const output = path.resolve(__dirname, '../audit/task11_1-human-review');
const cases = [
  ['HOME-MOBILE', 'home', 390],
  ['ABOUT', 'about', 1440],
  ['CASE-STUDY', 'case-study', 1440],
  ['ICONS', 'case-study', 390],
];
fs.mkdirSync(output, { recursive: true });

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const contact = [];
  for (const [folder, route, width] of cases) {
    const target = path.join(output, folder);
    fs.mkdirSync(target, { recursive: true });
    const refPath = path.join(source, `${route}-${width}-reference.png`);
    const wpPath = path.join(source, `${route}-${width}-current.png`);
    fs.copyFileSync(refPath, path.join(target, 'reference.png'));
    fs.copyFileSync(wpPath, path.join(target, 'wordpress.png'));
    const ref = `data:image/png;base64,${fs.readFileSync(refPath).toString('base64')}`;
    const wp = `data:image/png;base64,${fs.readFileSync(wpPath).toString('base64')}`;
    for (const mode of ['side-by-side', 'overlay']) {
      const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
      const side = mode === 'side-by-side';
      await page.setContent(`<style>*{box-sizing:border-box}html,body{margin:0;background:#fff}.wrap{display:${side ? 'flex' : 'grid'};align-items:start}img{display:block;${side ? 'width:50%' : 'grid-area:1/1;width:100%;opacity:.5'}}</style><div class="wrap"><img src="${ref}"><img src="${wp}"></div>`);
      await page.waitForFunction(() => [...document.images].every(img => img.complete));
      await page.screenshot({ path: path.join(target, `${mode}.png`), fullPage: true });
      await page.close();
    }
    contact.push({ folder, image: path.join(target, 'side-by-side.png') });
  }
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  const blocks = contact.map(item => `<section><h2>${item.folder}</h2><img src="data:image/png;base64,${fs.readFileSync(item.image).toString('base64')}"></section>`).join('');
  await page.setContent(`<style>body{margin:24px;font:16px Arial;background:#e2e8f0}section{padding:16px;margin-bottom:24px;background:#fff}h2{margin:0 0 12px}img{display:block;width:100%;max-height:900px;object-fit:cover;object-position:top}</style>${blocks}`);
  await page.screenshot({ path: path.join(output, 'CONTACT-SHEET.png'), fullPage: true });
  await browser.close();
})();
