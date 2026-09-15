const { chromium } = require('playwright');
const fs = require('fs');

const names = ['Hero','Trust','Services','Products','Metrics','Factory','Capabilities','Process','MOQ','Pricing','Portfolio','Why','Testimonials','Blog','FAQ','CTA'];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const rows = {};
  for (const [label, base] of [['react','http://localhost:3000/'],['wp','http://localhost/mytest/']]) {
    const page = await browser.newPage({ viewport: { width: +(process.argv[2] || 390), height: 900 } });
    await page.goto(base, { waitUntil: 'networkidle' });
    if (label === 'wp' && process.env.TASK11_3A_CSS) await page.addStyleTag({ content: fs.readFileSync(process.env.TASK11_3A_CSS, 'utf8') });
    rows[label] = await page.evaluate(() => {
      const sections = [...document.querySelectorAll('main section')].slice(0, 16).map(section => {
        const rect = section.getBoundingClientRect();
        return {top:+rect.top.toFixed(2),height:+rect.height.toFixed(2), children:[...section.querySelectorAll(':scope > .section-content > .row, :scope > .section-content > .row > .col')].map(n=>({tag:n.tagName,cls:String(n.className).slice(0,100),h:+n.getBoundingClientRect().height.toFixed(2),pb:getComputedStyle(n).paddingBottom}))};
      });
      const footer = document.querySelector('footer');
      return {
        documentHeight: document.documentElement.scrollHeight,
        footerHeight: footer ? +footer.getBoundingClientRect().height.toFixed(2) : 0,
        sections,
      };
    });
    await page.close();
  }
  let cumulative = 0;
  const table = rows.wp.sections.map((x,i)=>{
    const delta = +(x.height-rows.react.sections[i].height).toFixed(2);
    cumulative = +(cumulative + delta).toFixed(2);
    return {section:names[i],reactTop:rows.react.sections[i].top,wpTop:x.top,react:rows.react.sections[i].height,wp:x.height,delta,cumulative};
  });
  console.table(table);
  console.log(JSON.stringify({
    document: { react: rows.react.documentHeight, wp: rows.wp.documentHeight, delta: rows.wp.documentHeight - rows.react.documentHeight },
    footer: { react: rows.react.footerHeight, wp: rows.wp.footerHeight, delta: +(rows.wp.footerHeight - rows.react.footerHeight).toFixed(2) },
    sections: table,
  }, null, 2));
  await browser.close();
})();
