import { test } from 'playwright/test';

test('font and color audit', async ({ browser }) => {
  for (const url of ['http://localhost:3000/', 'http://localhost/mytest/']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(url, { waitUntil: 'networkidle' });
    const result = await page.evaluate(() => {
      const pick = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return null;
        const style = getComputedStyle(element);
        return { selector, fontFamily: style.fontFamily, fontWeight: style.fontWeight, fontSize: style.fontSize, lineHeight: style.lineHeight, letterSpacing: style.letterSpacing, color: style.color, backgroundColor: style.backgroundColor, borderColor: style.borderColor };
      };
      return { styles: ['body','h1','h2','h3','p','a[href*="bao-gia"]','header a','.arden-card','.arden-card p'].map(pick), fontChecks: ['400 16px "Plus Jakarta Sans"','500 16px "Plus Jakarta Sans"','600 16px "Plus Jakarta Sans"','700 16px "Plus Jakarta Sans"','800 16px "Plus Jakarta Sans"','600 16px "Be Vietnam Pro"','700 16px "Be Vietnam Pro"','800 16px "Be Vietnam Pro"','900 16px "Be Vietnam Pro"'].map(value => [value, document.fonts.check(value)]) };
    });
    console.log(`AUDIT ${url} ${JSON.stringify(result)}`);
    await page.close();
  }
});
