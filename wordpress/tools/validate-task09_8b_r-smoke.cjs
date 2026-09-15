const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const base = 'http://127.0.0.1:8098';
const routes = [
  ['Home','/'],['About','/gioi-thieu/'],['Services','/dich-vu/'],['Projects','/du-an/'],
  ['Case study','/du-an/bst-ao-thun-local-brand/'],['News','/tin-tuc/'],
  ['Article','/tin-tuc/cach-chon-xuong-may-uy-tin-cho-local-brand/'],['Quote','/bao-gia/'],
  ['FAQ','/faq/'],['Search','/tim-kiem/'],['Contact','/lien-he/']
];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const context = await browser.newContext();
  const results = [];
  for (const [name, route] of routes) {
    const page = await context.newPage();
    const errors = [], failed = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('response', response => { if (response.status() >= 400 && !response.url().includes('favicon')) failed.push({ type: 'http', status: response.status(), url: response.url() }); });
    page.on('requestfailed', request => {
      if (!request.url().includes('favicon')) failed.push({ type: 'network', error: request.failure()?.errorText || 'request failed', url: request.url() });
    });
    const response = await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.evaluate(async () => {
      const step = Math.max(window.innerHeight, 600);
      for (let position = 0; position < document.documentElement.scrollHeight; position += step) {
        window.scrollTo(0, position);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
    await page.waitForFunction(() => [...document.images].every(image => image.complete), null, { timeout: 10000 }).catch(() => {});
    const state = await page.evaluate(() => ({
      css: [...document.styleSheets].some(sheet => /flatsome-child\/assets\/css\/arden\.css/.test(sheet.href || '')),
      js: [...document.scripts].some(script => /flatsome-child\/assets\/js\/native-interactions\.js/.test(script.src || '')),
      pendingImages: [...document.images].filter(image => !image.complete).map(image => image.currentSrc || image.src),
      brokenImages: [...document.images].filter(image => image.complete && image.naturalWidth === 0).map(image => image.currentSrc || image.src),
      adminBar: !!document.querySelector('#wpadminbar'),
      fatal: /Fatal error|There has been a critical error/i.test(document.body.innerText),
      h1: [...document.querySelectorAll('h1')].map(node => node.innerText.trim())
    }));
    const pass = response?.status() === 200 && state.css && state.js && !state.pendingImages.length && !state.brokenImages.length && !state.adminBar && !state.fatal && !errors.length && !failed.length && state.h1.length > 0;
    results.push({ name, route, status: response?.status(), pass, errors, failed, state });
    console.log(`${name}\t${response?.status()}\t${pass ? 'PASS' : 'FAIL'}`);
    await page.close();
  }
  await browser.close();
  const output = path.resolve(__dirname, '../audit/task09_8b_r-smoke.json');
  fs.writeFileSync(output, JSON.stringify({ generatedAt: new Date().toISOString(), base, results }, null, 2) + '\n');
  if (results.some(result => !result.pass)) process.exit(1);
})().catch(error => { console.error(error); process.exit(1); });
