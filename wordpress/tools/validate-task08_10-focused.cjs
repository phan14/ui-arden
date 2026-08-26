const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const outDir = path.join(root, 'wordpress', 'audit', 'task08_10-screens');
fs.mkdirSync(outDir, { recursive: true });
const auth = JSON.parse(execFileSync('C:/xampp/php/php.exe', ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php';$e=time()+3600;echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`], { encoding: 'utf8' }));
const routes = [['T-Shirt', 83], ['FAQ', 95], ['Quote', 97]];
const widths = [390, 768, 1024, 1440];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const context = await browser.newContext();
  await context.addCookies([{ ...auth, domain: 'localhost', path: '/mytest/', httpOnly: true, sameSite: 'Lax' }]);
  const results = [];
  for (const [name, id] of routes) for (const width of widths) {
    const page = await context.newPage();
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    const errors = [], consoleErrors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
    const response = await page.goto(`http://localhost/mytest/?page_id=${id}&preview=true`, { waitUntil: 'networkidle' });
    const state = await page.evaluate(() => {
      const visible = e => { const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0; };
      const clipped = [...document.querySelectorAll('button,a,.button,input:not([type=hidden]),select,textarea,label')].filter(visible).filter(e => { const r=e.getBoundingClientRect(); return r.right>innerWidth+2||r.left<-2; });
      return { innerWidth, scrollWidth:document.documentElement.scrollWidth, overflow:document.documentElement.scrollWidth>innerWidth+1, clipped:clipped.length, raw:/\[(section|row|col|tabgroup|tab)\b/i.test(document.body.innerText), brokenImages:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).length };
    });
    await page.screenshot({ path:path.join(outDir, `${name.toLowerCase()}-${width}.png`), fullPage:true });
    results.push({ name, width, status:response.status(), errors, consoleErrors, ...state, pass:response.status()===200&&!errors.length&&!state.overflow&&!state.clipped&&!state.raw&&!state.brokenImages });
    await page.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(root, 'wordpress', 'audit', 'task08_10-focused.json'), JSON.stringify(results, null, 2)+'\n');
  console.log(JSON.stringify({ total:results.length, passed:results.filter(x=>x.pass).length, failed:results.filter(x=>!x.pass) }, null, 2));
})().catch(error => { console.error(error); process.exit(1); });
