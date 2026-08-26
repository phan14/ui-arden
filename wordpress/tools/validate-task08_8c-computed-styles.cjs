const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const routes = [
  ['Home', '/', '/'], ['About', '/gioi-thieu', '/?page_id=81&preview=true'],
  ['Services', '/dich-vu', '/?page_id=82&preview=true'], ['T-Shirt', '/dich-vu/may-ao-thun', '/?page_id=83&preview=true'],
  ['Policies', '/chinh-sach', '/?page_id=99&preview=true'], ['FAQ', '/faq', '/?page_id=95&preview=true'],
  ['Quote', '/bao-gia', '/?page_id=97&preview=true'], ['Careers', '/tuyen-dung', '/?page_id=98&preview=true'],
];
const selectors = {
  body: 'body', h1: 'main h1', h2: 'main h2', h3: 'main h3',
  eyebrow: 'main .arden-eyebrow, main section p', navigation: 'header nav a, header .nav > li > a',
  cardTitle: 'main article h3, main .arden-card h3', cardBody: 'main article p, main .arden-card p',
  primaryButton: 'main a[href*="bao-gia"], main .button', secondaryButton: 'main a[href^="tel:"], main .button.is-outline',
  footerHeading: 'footer h4, footer h3', footerLink: 'footer nav a, footer .arden-footer__nav a',
};
const properties = ['fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','textTransform','color','backgroundColor','borderColor','borderRadius','paddingTop','paddingRight','paddingBottom','paddingLeft','minHeight'];

function authCookie() {
  return JSON.parse(execFileSync('C:/xampp/php/php.exe', ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php';$e=time()+7200;echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`], { encoding: 'utf8' }));
}
async function collect(page, url, isWp) {
  await page.goto(url, { waitUntil: 'networkidle' });
  if (isWp) await page.addStyleTag({ content: '#wpadminbar{display:none!important}html{margin-top:0!important}' });
  return page.evaluate(({ selectors, properties }) => {
    const visible = (element) => { const s=getComputedStyle(element),r=element.getBoundingClientRect(); return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0; };
    return Object.fromEntries(Object.entries(selectors).map(([key, selector]) => {
      const element = [...document.querySelectorAll(selector)].find(visible);
      if (!element) return [key, null];
      const style = getComputedStyle(element);
      return [key, { selector, tag: element.tagName, className: element.className, text: (element.innerText||'').replace(/\s+/g,' ').trim().slice(0,100), style: Object.fromEntries(properties.map(prop => [prop, style[prop]])) }];
    }));
  }, { selectors, properties });
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const react = await browser.newContext();
  const wp = await browser.newContext();
  await wp.addCookies([{ ...authCookie(), domain: 'localhost', path: '/mytest/', httpOnly: true, sameSite: 'Lax' }]);
  const results = [];
  for (const [name, reactPath, wpPath] of routes) for (const width of [1440,1024,768,390]) {
    const viewport = { width, height: width === 390 ? 844 : 900 };
    const rp = await react.newPage({ viewport }); const wpp = await wp.newPage({ viewport });
    const [r,w] = await Promise.all([collect(rp, `http://localhost:3000${reactPath}`, false), collect(wpp, `http://localhost/mytest${wpPath}`, true)]);
    results.push({ name, width, react: r, wordpress: w });
    await rp.close(); await wpp.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(root, 'wordpress', 'audit', 'task08_8c-computed-styles.json'), JSON.stringify(results, null, 2));
  console.log(`STYLE_CASES:${results.length}`);
})().catch((error) => { console.error(error); process.exit(1); });
