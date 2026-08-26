const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const php = 'C:/xampp/php/php.exe';
const auth = JSON.parse(execFileSync(php, ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php';$e=time()+3600;echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`], { encoding: 'utf8' }));
const widths = [1440, 1024, 768, 390];
const pages = [
  ['About', 81], ['Services', 82], ['T-Shirt', 83], ['Shirt', 84],
  ['Jacket', 85], ['Pants', 86], ['Manufacturing', 87], ['Policies', 99], ['Fabric Guide', 100]
];
const normalize = value => (value || '').replace(/\s+/g, ' ').trim();

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const context = await browser.newContext();
  await context.addCookies([{ ...auth, domain: 'localhost', path: '/mytest/', httpOnly: true, sameSite: 'Lax' }]);
  const checks = [];
  const record = (name, pass, detail) => checks.push({ name, pass: Boolean(pass), detail });

  for (const [name, id] of pages) {
    for (const width of widths) {
      const page = await context.newPage({ viewport: { width, height: width === 390 ? 844 : 900 } });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const response = await page.goto(`http://localhost/mytest/?page_id=${id}&preview=true`, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(250);
      const state = await page.evaluate(() => {
        const raw = /\[(?:\/?)(?:section|row|row_inner|col|col_inner|ux_html|ux_text|button|featured_box|tabgroup|tab)\b/i.test(document.body.innerText);
        const grids = [...document.querySelectorAll('.arden-react-page .row[class*="grid"]')];
        const weighted = [...document.querySelectorAll('.arden-react-page .font-black')].filter(e => /^H[1-6]$/.test(e.tagName));
        return {
          h1: document.querySelectorAll('main h1').length,
          raw,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          grids: grids.length,
          badGrids: grids.filter(e => getComputedStyle(e).display !== 'grid').length,
          weights: weighted.map(e => getComputedStyle(e).fontWeight),
          sections: document.querySelectorAll('main section').length
        };
      });
      record(`${name} ${width} runtime/layout`, response?.status() === 200 && !errors.length && state.h1 === 1 && !state.raw && !state.overflow && state.badGrids === 0, { status: response?.status(), errors, ...state });
      record(`${name} ${width} typography`, state.weights.length === 0 || state.weights.every(weight => Number(weight) === 900), { weights: state.weights });
      await page.close();
    }
  }

  const tshirt = await context.newPage({ viewport: { width: 1440, height: 900 } });
  await tshirt.goto('http://localhost/mytest/?page_id=83&preview=true', { waitUntil: 'domcontentloaded', timeout: 20000 });
  const tshirtState = await tshirt.evaluate(() => ({
    sections: document.querySelectorAll('main section').length,
    headings: [...document.querySelectorAll('main h1,main h2,main h3')].map(e => (e.textContent || '').replace(/\s+/g, ' ').trim()),
    fabricTabs: document.querySelectorAll('.arden-fabric-tabs .tab a').length,
    gsmTabs: document.querySelectorAll('.arden-gsm-tabs .tab a').length,
    sizeRows: document.querySelectorAll('.arden-size-chart tbody tr').length,
    printCards: [...document.querySelectorAll('.arden-print-techniques h3')].length,
    processHeadings: [...document.querySelectorAll('.arden-process h3')].length,
    ctas: [...document.querySelectorAll('.arden-cta a.button')].length
  }));
  const tshirtRequired = ['MAY ÁO THUN LOCAL BRAND CHUYÊN NGHIỆP', 'In Lụa Plastisol Cao Cấp', 'Giao hàng đúng hẹn', 'BẮT ĐẦU SẢN XUẤT ÁO THUN CÙNG XƯỞNG ARDEN'];
  record('REG-003 T-Shirt content/structure', tshirtState.sections === 6 && tshirtState.fabricTabs === 5 && tshirtState.gsmTabs === 6 && tshirtState.sizeRows === 5 && tshirtState.printCards === 4 && tshirtState.processHeadings === 9 && tshirtState.ctas === 2 && tshirtRequired.every(x => tshirtState.headings.some(h => h.includes(x))), tshirtState);
  await tshirt.close();

  for (const width of widths) {
    const policy = await context.newPage({ viewport: { width, height: width === 390 ? 844 : 900 } });
    await policy.goto('http://localhost/mytest/?page_id=99&preview=true#chinh-sach-van-chuyen', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await policy.waitForTimeout(250);
    const tabs = policy.locator('.arden-policy-tabs [role=tab]');
    const panels = policy.locator('.arden-policy-tabs [role=tabpanel]');
    const before = { tabs: await tabs.count(), panels: await panels.count(), selected: await tabs.nth(4).getAttribute('aria-selected'), panelId: await panels.nth(4).getAttribute('id') };
    await tabs.nth(0).focus();
    await policy.keyboard.press('Enter');
    await policy.waitForTimeout(150);
    const after = await tabs.nth(0).getAttribute('aria-selected');
    record(`REG-004 Policies ${width}`, before.tabs === 5 && before.panels === 5 && before.selected === 'true' && before.panelId === 'chinh-sach-van-chuyen' && after === 'true', { before, after });
    await policy.close();
  }

  for (const width of widths) {
    const fabric = await context.newPage({ viewport: { width, height: width === 390 ? 844 : 900 } });
    await fabric.goto('http://localhost/mytest/?page_id=100&preview=true', { waitUntil: 'domcontentloaded', timeout: 20000 });
    await fabric.waitForTimeout(250);
    const input = fabric.locator('input[placeholder*="Tìm theo tên vải"]');
    const buttons = fabric.locator('section:has(input[placeholder*="Tìm theo tên vải"]) a.button').first().locator('xpath=ancestor::section[1]//a[contains(@class,"button")]');
    const cards = fabric.locator('section:has(input[placeholder*="Tìm theo tên vải"]) .row[class*="md:grid-cols-2"] > .col > .col-inner').filter({ has: fabric.locator('h3') });
    const total = await cards.count();
    await input.fill('zzzz-no-result');
    await input.dispatchEvent('input');
    const emptyVisible = await fabric.locator('.arden-fabric-empty:visible').count();
    await input.fill('Oxford');
    await input.dispatchEvent('input');
    const oxfordVisible = await cards.evaluateAll(es => es.filter(e => !e.closest('.col').hidden && !e.hidden).length);
    const buttonCount = await buttons.count();
    if (buttonCount >= 5) await buttons.nth(2).click();
    const pressed = buttonCount >= 5 ? await buttons.nth(2).getAttribute('aria-pressed') : null;
    record(`REG-005 Fabric ${width}`, total === 6 && emptyVisible === 1 && oxfordVisible === 1 && buttonCount >= 5 && pressed === 'true', { total, emptyVisible, oxfordVisible, buttonCount, pressed });
    await fabric.close();
  }

  const header = await context.newPage({ viewport: { width: 1440, height: 900 } });
  await header.goto('http://localhost/mytest/', { waitUntil: 'domcontentloaded', timeout: 20000 });
  const serviceItem = header.locator('.header-nav li.menu-item-has-children').filter({ hasText: 'DỊCH VỤ' }).first();
  await serviceItem.locator(':scope > a').hover();
  await header.waitForTimeout(200);
  const visibleChildren = await serviceItem.locator('.nav-dropdown a:visible').count();
  await serviceItem.locator(':scope > a').focus();
  const focusVisible = await serviceItem.locator('.nav-dropdown a:visible').count();
  record('REG-006 desktop Services dropdown', visibleChildren === 8 && focusVisible === 8, { visibleChildren, focusVisible });
  await header.close();

  const invalidPatterns = [/href="\/(?:may-ao-thun|may-ao-so-mi|may-quan)\/?"/i, /href="\/dich-vu#(?:so-mi|quan|ao-khoac)"/i, /\/du-an\/bst-ao-thun-local-brand/i];
  const linkSources = [
    'wordpress/import/home-flatsome.txt', 'wordpress/import/pages/services-flatsome.txt',
    'wordpress/import/ux-blocks/arden-footer.txt', ...fs.readdirSync(path.join(root, 'wordpress/import/pages')).map(name => `wordpress/import/pages/${name}`)
  ];
  const broken = [];
  for (const relative of [...new Set(linkSources)]) {
    const text = fs.readFileSync(path.join(root, relative), 'utf8');
    invalidPatterns.forEach(pattern => { if (pattern.test(text)) broken.push({ file: relative, pattern: String(pattern) }); });
  }
  const services = await context.newPage();
  await services.goto('http://localhost/mytest/?page_id=82&preview=true', { waitUntil: 'domcontentloaded', timeout: 20000 });
  const localBrandTarget = await services.locator('#local-brand').count();
  await services.close();
  record('REG-007 CTA routes/fragments', broken.length === 0 && localBrandTarget === 1, { broken, localBrandTarget });

  const phpState = JSON.parse(execFileSync(php, ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php';echo json_encode(['blog_public'=>get_option('blog_public'),'version'=>wp_get_theme()->get('Version'),'drafts'=>array_map(fn($id)=>get_post_status($id),[81,82,83,84,85,86,87,95,96,97,98,99,100,101,111])]);`], { encoding: 'utf8' }));
  record('Environment freeze', phpState.blog_public === '0' && phpState.version === '2.0.1' && phpState.drafts.every(status => status === 'draft'), phpState);

  await browser.close();
  const report = { generatedAt: new Date().toISOString(), checks, summary: { total: checks.length, passed: checks.filter(x => x.pass).length, failed: checks.filter(x => !x.pass).length } };
  fs.writeFileSync(path.join(root, 'wordpress/audit/task08_6c-focused.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report.summary));
  checks.filter(x => !x.pass).forEach(x => console.log('FAIL', x.name, JSON.stringify(x.detail)));
  if (report.summary.failed) process.exitCode = 1;
})().catch(error => { console.error(error); process.exit(1); });
