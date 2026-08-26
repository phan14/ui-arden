const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const auth = JSON.parse(execFileSync('C:/xampp/php/php.exe', ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php';$e=time()+3600;echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`], { encoding: 'utf8' }));
const routes = [['T-Shirt', 83], ['FAQ', 95], ['Quote', 97]];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const context = await browser.newContext();
  await context.addCookies([{ ...auth, domain: 'localhost', path: '/mytest/', httpOnly: true, sameSite: 'Lax' }]);
  for (const [name, id] of routes) {
    const page = await context.newPage();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`http://localhost/mytest/?page_id=${id}&preview=true`, { waitUntil: 'networkidle' });
    const data = await page.evaluate(() => {
      const visible = e => { const s = getComputedStyle(e), r = e.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
      const selector = e => {
        const cls = [...e.classList].slice(0, 4).map(x => `.${CSS.escape(x)}`).join('');
        return `${e.tagName.toLowerCase()}${e.id ? `#${e.id}` : cls}`;
      };
      const nodes = [...document.querySelectorAll('button,a,.button,input:not([type=hidden]),select,textarea,label')].filter(visible);
      const clipped = nodes.filter(e => { const r=e.getBoundingClientRect(); return r.right > innerWidth + 2 || r.left < -2; }).map(e => {
        const r=e.getBoundingClientRect(), s=getComputedStyle(e), p=e.parentElement, ps=p?getComputedStyle(p):null, pr=p?.getBoundingClientRect();
        return { selector: selector(e), text:(e.innerText||e.value||e.getAttribute('aria-label')||'').replace(/\s+/g,' ').trim().slice(0,100), rect:{left:r.left,right:r.right,width:r.width}, style:{width:s.width,minWidth:s.minWidth,maxWidth:s.maxWidth,whiteSpace:s.whiteSpace,display:s.display,padding:s.padding,boxSizing:s.boxSizing}, parent:p?{selector:selector(p),rect:{left:pr.left,right:pr.right,width:pr.width},display:ps.display,width:ps.width,minWidth:ps.minWidth,overflowX:ps.overflowX,gap:ps.gap}:null};
      });
      const first = nodes.find(e => { const r=e.getBoundingClientRect(); return r.right > innerWidth + 2 || r.left < -2; });
      const ancestors = [];
      for (let e=first; e && ancestors.length<8; e=e.parentElement) { const r=e.getBoundingClientRect(),s=getComputedStyle(e); ancestors.push({selector:selector(e),left:r.left,right:r.right,width:r.width,display:s.display,minWidth:s.minWidth,maxWidth:s.maxWidth,padding:s.padding,margin:s.margin,overflowX:s.overflowX}); }
      return { innerWidth, scrollWidth: document.documentElement.scrollWidth, clipped, ancestors };
    });
    console.log(JSON.stringify({ name, ...data }, null, 2));
    await page.close();
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
