const { chromium } = require('playwright');

const widths = [1440, 1024, 768, 390];
const route = '/du-an/bst-ao-thun-local-brand';

const visible = `node => {
  const style = getComputedStyle(node);
  const rect = node.getBoundingClientRect();
  return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
}`;

async function inspect(page, base, width) {
  await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
  const response = await page.goto(`${base}${route}`, { waitUntil: 'networkidle', timeout: 30000 });
  return page.evaluate(({ status, visibleSource }) => {
    const isVisible = eval(visibleSource);
    const box = selector => {
      const node = document.querySelector(selector);
      if (!node) return null;
      const rect = node.getBoundingClientRect();
      return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
    };
    return {
      status,
      overflow: document.documentElement.scrollWidth > innerWidth + 1,
      article: box('main article'),
      svg: [...document.querySelectorAll('main svg')].filter(isVisible).length,
      iconFonts: [...document.querySelectorAll('main i, main [class*="icon-"]')].filter(isVisible).length,
      processCards: document.querySelectorAll('main .arden-process-card, main .arden-process .col-inner').length,
      caseStudyH2: [...document.querySelectorAll('.arden-case-study h2')].map(node => node.textContent.trim()),
      highlights: document.querySelectorAll('.arden-case-study__highlights li').length,
      sidebarRows: document.querySelectorAll('.arden-case-study__sidebar dl > div').length,
      contentStats: !![...document.querySelectorAll('.arden-case-study h2')].find(node => /THÔNG SỐ DỰ ÁN/i.test(node.textContent)),
    };
  }, { status: response.status(), visibleSource: visible });
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  let failed = false;
  for (const width of widths) {
    const context = await browser.newContext();
    const referencePage = await context.newPage();
    const wordpressPage = await context.newPage();
    const reference = await inspect(referencePage, 'http://localhost:3000', width);
    const wordpress = await inspect(wordpressPage, 'http://localhost/mytest', width);
    const checks = {
      http200: wordpress.status === 200,
      noOverflow: !wordpress.overflow,
      threeHighlights: wordpress.highlights === 3,
      fiveSidebarRows: wordpress.sidebarRows === 5,
      noExtraStatsBlock: !wordpress.contentStats,
      centralizedSvgIcons: wordpress.svg >= 14 && wordpress.iconFonts === 0,
      articleHeightClose: Math.abs(wordpress.article.height - reference.article.height) <= 80,
    };
    const pass = Object.values(checks).every(Boolean);
    failed ||= !pass;
    console.log(JSON.stringify({ width, pass, checks, reference, wordpress }));
    await context.close();
  }
  await browser.close();
  process.exit(failed ? 1 : 0);
})().catch(error => {
  console.error(error);
  process.exit(1);
});
