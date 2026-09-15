const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const audit = path.resolve(__dirname, '../audit');
const source = path.join(audit, 'task11_2-targeted');
const root = path.join(audit, 'task11_2-human-review');
const home = path.join(root, 'HOME-MOBILE');
const icons = path.join(root, 'ICONS');
const v2 = path.join(root, 'V2');
for (const directory of [home, icons, v2]) fs.mkdirSync(directory, { recursive: true });

for (const width of [390, 768]) {
  for (const runtime of ['reference', 'wordpress']) {
    fs.copyFileSync(path.join(source, `home-${width}-${runtime}.png`), path.join(home, `${width}-${runtime}.png`));
  }
}
for (const route of ['about', 'fabric']) {
  for (const runtime of ['reference', 'wordpress']) {
    fs.copyFileSync(path.join(source, `${route}-390-${runtime}.png`), path.join(icons, `${route}-390-${runtime}.png`));
  }
}

function fileUrl(file) { return `data:image/png;base64,${fs.readFileSync(file).toString('base64')}`; }

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  for (const width of [390, 768]) {
    const ref = fileUrl(path.join(home, `${width}-reference.png`));
    const wp = fileUrl(path.join(home, `${width}-wordpress.png`));
    for (const mode of ['side-by-side', 'overlay']) {
      const page = await browser.newPage({ viewport: { width: mode === 'side-by-side' ? width * 2 : width, height: 900 } });
      const body = mode === 'side-by-side'
        ? `<div><img src="${ref}"></div><div><img src="${wp}"></div>`
        : `<div class="overlay"><img src="${ref}"><img class="wp" src="${wp}"></div>`;
      await page.setContent(`<!doctype html><style>*{box-sizing:border-box}html,body{margin:0;background:#fff}body{display:${mode === 'side-by-side' ? 'flex' : 'block'}}div{width:${width}px;position:relative}img{display:block;width:${width}px;height:auto}.overlay .wp{position:absolute;left:0;top:0;opacity:.5}</style>${body}`);
      await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete && image.naturalHeight > 0));
      await page.screenshot({ path: path.join(home, `${width}-${mode}.png`), fullPage: true });
      await page.close();
    }
  }
  await browser.close();
})();
