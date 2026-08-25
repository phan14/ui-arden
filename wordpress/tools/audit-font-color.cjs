const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  for (const url of ['http://localhost:3000/', 'http://localhost/mytest/']) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(url, { waitUntil: 'networkidle' });
    const result = await page.evaluate(async () => {
      await Promise.all([
        '400 16px "Plus Jakarta Sans"', '500 16px "Plus Jakarta Sans"',
        '600 16px "Plus Jakarta Sans"', '700 16px "Plus Jakarta Sans"',
        '800 16px "Plus Jakarta Sans"', '600 16px "Be Vietnam Pro"',
        '700 16px "Be Vietnam Pro"', '800 16px "Be Vietnam Pro"',
        '900 16px "Be Vietnam Pro"'
      ].map(font => document.fonts.load(font, 'Tiếng Việt')));
      const pick = (selector) => { const e=document.querySelector(selector); if(!e)return null; const s=getComputedStyle(e); return {selector,fontFamily:s.fontFamily,fontWeight:s.fontWeight,fontSize:s.fontSize,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,color:s.color,backgroundColor:s.backgroundColor,borderColor:s.borderColor}; };
      const wp=location.pathname.startsWith('/mytest');
      const selectors=wp?['body','.arden-hero h1','.arden-hero__content > .col-inner > .text:not(.arden-eyebrow) p','.arden-trust-bar h3','.arden-trust-bar p','.arden-services h2','.arden-services h3','.arden-services .arden-card__body p','.arden-hero .button','.arden-services > .section-content > .row:last-child .button','header .nav > li > a']:['body','main section:nth-of-type(1) h1','main section:nth-of-type(1) h1 + p','main section:nth-of-type(2) h3','main section:nth-of-type(2) p','main section:nth-of-type(3) h2','main section:nth-of-type(3) h3','main section:nth-of-type(3) article p','main section:nth-of-type(1) a[href*="bao-gia"]','main section:nth-of-type(3) article a','header nav a'];
      return {styles:selectors.map(pick),fontChecks:['400 16px "Plus Jakarta Sans"','500 16px "Plus Jakarta Sans"','600 16px "Plus Jakarta Sans"','700 16px "Plus Jakarta Sans"','800 16px "Plus Jakarta Sans"','600 16px "Be Vietnam Pro"','700 16px "Be Vietnam Pro"','800 16px "Be Vietnam Pro"','900 16px "Be Vietnam Pro"'].map(v=>[v,document.fonts.check(v)])};
    });
    console.log(`AUDIT ${url}\n${JSON.stringify(result,null,2)}`); await page.close();
  }
  await browser.close();
})();
