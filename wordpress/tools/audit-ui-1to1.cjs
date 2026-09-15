const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const routes = [
  ['home', '/'], ['about', '/gioi-thieu'], ['services', '/dich-vu'],
  ['tshirt', '/dich-vu/may-ao-thun'], ['shirt', '/dich-vu/may-ao-so-mi'],
  ['jacket', '/dich-vu/may-ao-khoac'], ['pants', '/dich-vu/may-quan'],
  ['projects', '/du-an'], ['case-study', '/du-an/bst-ao-thun-local-brand'],
  ['news', '/tin-tuc'], ['fabric', '/bang-vai'], ['techpack', '/huong-dan-techpack'],
  ['contact', '/lien-he'], ['policies', '/chinh-sach'], ['search', '/tim-kiem'],
  ['careers', '/tuyen-dung'], ['faq', '/faq'], ['quote', '/bao-gia']
];
const widths = [1440, 1024, 768, 390];
const outDir = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(__dirname, '../audit/ui-1to1-20260829');
fs.mkdirSync(outDir, { recursive: true });

async function capture(page, url, shotPath) {
  const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(innerHeight, 600)) {
      scrollTo(0, y);
      await new Promise(resolve => setTimeout(resolve, 20));
    }
    scrollTo(0, 0);
  });
  await page.screenshot({ path: shotPath, fullPage: true });
  const metrics = await page.evaluate(() => {
    const visible = element => {
      if (!element) return false;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };
    const first = selectors => selectors.flatMap(selector => [...document.querySelectorAll(selector)]).find(visible) || null;
    const sample = element => {
      if (!element) return null;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return {
        tag: element.tagName.toLowerCase(),
        classes: element.className && String(element.className).slice(0, 180),
        text: (element.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 120),
        x: +rect.x.toFixed(2), y: +rect.y.toFixed(2), width: +rect.width.toFixed(2), height: +rect.height.toFixed(2),
        fontFamily: style.fontFamily, fontSize: style.fontSize, fontWeight: style.fontWeight,
        lineHeight: style.lineHeight, letterSpacing: style.letterSpacing, textTransform: style.textTransform,
        color: style.color, backgroundColor: style.backgroundColor,
        padding: style.padding, margin: style.margin, gap: style.gap,
        borderRadius: style.borderRadius, border: style.border,
        boxShadow: style.boxShadow, display: style.display,
        gridTemplateColumns: style.gridTemplateColumns, alignItems: style.alignItems,
        maxWidth: style.maxWidth, aspectRatio: style.aspectRatio
      };
    };
    const main = document.querySelector('main') || document.body;
    const header = first(['header#header', 'body > div > header', 'header']);
    const hero = first(['main .arden-hero', 'main .arden-page-banner', 'main > section']);
    const container = first(['main .arden-container', 'main .container', 'main .row', 'main section > div']);
    const h1 = first(['main h1']);
    const sectionTitle = first(['main section:nth-of-type(n+2) h2', 'main h2']);
    const button = first(['main .arden-button', 'main a.button', 'main button']);
    const card = first(['main .arden-card', 'main article', 'main .col-inner']);
    const image = first(['main img']);
    const footer = first(['footer#footer', 'body > div > footer', 'footer']);
    return {
      title: document.title,
      viewport: { width: innerWidth, height: innerHeight },
      document: { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight },
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      adminBar: !!document.querySelector('#wpadminbar'),
      body: sample(document.body), header: sample(header), hero: sample(hero), container: sample(container),
      h1: sample(h1), sectionTitle: sample(sectionTitle), button: sample(button), card: sample(card),
      image: sample(image), footer: sample(footer)
    };
  });
  return { status: response.status(), ...metrics };
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const reactContext = await browser.newContext();
  const wpContext = await browser.newContext();
  const results = [];
  for (const [name, route] of routes) {
    for (const width of widths) {
      const viewport = { width, height: width === 390 ? 844 : 900 };
      const react = await reactContext.newPage();
      const wordpress = await wpContext.newPage();
      await Promise.all([react.setViewportSize(viewport), wordpress.setViewportSize(viewport)]);
      const stem = `${name}-${width}`;
      const [reference, current] = await Promise.all([
        capture(react, `http://localhost:3000${route}`, path.join(outDir, `${stem}-reference.png`)),
        capture(wordpress, `http://localhost/mytest${route}`, path.join(outDir, `${stem}-current.png`))
      ]);
      results.push({ name, route, width, reference, current });
      await react.close();
      await wordpress.close();
      console.log(`DONE ${stem}`);
    }
  }
  await browser.close();
  fs.writeFileSync(path.join(outDir, 'computed-style-comparison.json'), JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2) + '\n');
})().catch(error => { console.error(error); process.exit(1); });
