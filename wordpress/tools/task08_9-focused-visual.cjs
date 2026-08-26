const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const outDir = path.join(root, 'wordpress', 'audit', 'task08_9-screens');
fs.mkdirSync(outDir, { recursive: true });
const auth = JSON.parse(execFileSync('C:/xampp/php/php.exe', ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php';$e=time()+7200;echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`], { encoding: 'utf8' }));
const pages = [
  ['Home', '/', '/'],
  ['Services', '/dich-vu', '/?page_id=82&preview=true'],
  ['Policies', '/chinh-sach', '/?page_id=99&preview=true'],
];
const widths = [1440, 1024, 768, 390];

function box(element) {
  if (!element) return null;
  const rect = element.getBoundingClientRect();
  const style = getComputedStyle(element);
  return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, display: style.display, color: style.color, background: style.backgroundColor, radius: style.borderRadius, font: style.fontFamily, size: style.fontSize, weight: style.fontWeight };
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const wp = await browser.newContext();
  await wp.addCookies([{ ...auth, domain: 'localhost', path: '/mytest/', httpOnly: true, sameSite: 'Lax' }]);
  const react = await browser.newContext();
  const results = [];
  for (const [name, reactPath, wpPath] of pages) {
    for (const width of widths) {
      const viewport = { width, height: width === 390 ? 844 : 900 };
      const rp = await react.newPage({ viewport });
      const wpPage = await wp.newPage({ viewport });
      await Promise.all([rp.setViewportSize(viewport), wpPage.setViewportSize(viewport)]);
      await Promise.all([
        rp.goto(`http://localhost:3000${reactPath}`, { waitUntil: 'networkidle' }),
        wpPage.goto(`http://localhost/mytest${wpPath}`, { waitUntil: 'networkidle' }),
      ]);
      const inspect = page => page.evaluate(boxFn => {
        const b = eval(`(${boxFn})`);
        const header = document.querySelector('#main-header') || document.querySelector('.header-wrapper');
        const topbar = document.querySelector('#main-header > div:first-child') || document.querySelector('.header-top');
        const mainHeader = document.querySelector('#main-header > div:nth-child(2)') || document.querySelector('.header-main');
        const policy = document.querySelector('#policy-section');
        const tabs = document.querySelector('.arden-policy-tabs');
        return {
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          raw: /\[(section|row|col|tabgroup|tab)\b/i.test(document.body.innerText),
          headerText: header?.innerText.replace(/\s+/g, ' ').trim() || '',
          header: b(header), topbar: b(topbar), mainHeader: b(mainHeader), policy: b(policy), tabs: b(tabs),
          tabCount: document.querySelectorAll('.arden-policy-tabs [role=tab]').length,
          panelCount: document.querySelectorAll('.arden-policy-tabs [role=tabpanel]').length,
        };
      }, box.toString());
      const [r, w] = await Promise.all([inspect(rp), inspect(wpPage)]);
      const stem = `${name.toLowerCase()}-${width}`;
      await Promise.all([
        rp.screenshot({ path: path.join(outDir, `${stem}-react.png`), fullPage: true }),
        wpPage.screenshot({ path: path.join(outDir, `${stem}-wp.png`), fullPage: true }),
      ]);
      results.push({ name, width, react: r, wordpress: w });
      await rp.close();
      await wpPage.close();
    }
  }
  await browser.close();
  fs.writeFileSync(path.join(root, 'wordpress', 'audit', 'task08_9-focused-visual.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify({ cases: results.length, safe: results.filter(x => !x.wordpress.overflow && !x.wordpress.raw).length }, null, 2));
})().catch(error => { console.error(error); process.exit(1); });
