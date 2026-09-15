const { chromium } = require('playwright');

const base = 'http://localhost/mytest';
const checks = [
  ['search', '/tim-kiem/', { sections: 4, tabs: 4, maxCards: 6, groups: 3 }],
  ['news', '/tin-tuc/', { sections: 3, tabs: 4, inputs: 1, featured: 1, sidebar: 1 }],
  ['projects', '/du-an/', { sections: 4, tabs: 5, projectCards: 6 }],
  ['fabric', '/bang-vai/', { fabricCards: 6, tabs: 5 }],
];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const failures = [];
  for (const [name, path, expected] of checks) {
    const response = await page.goto(base + path, { waitUntil: 'networkidle' });
    const actual = await page.evaluate(() => ({
      status: document.title.includes('Page not found') ? 404 : 200,
      sections: document.querySelectorAll('main section, main + section').length,
      tabs: document.querySelectorAll('main [role="tab"]').length,
      inputs: document.querySelectorAll('main input[type="search"], main input[type="text"]').length,
      maxCards: document.querySelectorAll('main .arden-search-result').length,
      groups: document.querySelectorAll('main .arden-search-group').length,
      featured: document.querySelectorAll('main .arden-news-featured').length,
      sidebar: document.querySelectorAll('main .arden-news-sidebar').length,
      projectCards: document.querySelectorAll('main .arden-project-card').length,
      fabricCards: (() => { const input = document.querySelector('.arden-react-page--fabricguide input[type="text"]'); const root = input && input.closest('.section'); return root ? root.querySelectorAll('.row[class*="md:grid-cols-2"] > .col > .col-inner').length : 0; })(),
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    }));
    if (!response || response.status() !== 200 || actual.status !== 200 || actual.overflow) failures.push(`${name}: runtime/overflow`);
    for (const [key, value] of Object.entries(expected)) {
      if (key === 'maxCards' ? actual[key] > value : actual[key] !== value) failures.push(`${name}: ${key} expected ${value}, got ${actual[key]}`);
    }
    console.log(name, actual);
  }
  await browser.close();
  if (failures.length) {
    console.error('\nTASK 11 structural failures:\n- ' + failures.join('\n- '));
    process.exit(1);
  }
  console.log('TASK 11 focused structure PASS');
})();
