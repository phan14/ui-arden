const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const wpBase = 'http://localhost/mytest';
const reactBase = 'http://localhost:3000';
const routes = [
  ['Home','/'],['About','/gioi-thieu'],['Services','/dich-vu'],
  ['T-Shirt','/dich-vu/may-ao-thun'],['Shirt','/dich-vu/may-ao-so-mi'],
  ['Jacket','/dich-vu/may-ao-khoac'],['Pants','/dich-vu/may-quan'],
  ['Projects','/du-an'],['Case Study','/du-an/bst-ao-thun-local-brand'],
  ['News','/tin-tuc'],
  ['Article 1','/tin-tuc/cach-chon-xuong-may-uy-tin-cho-local-brand'],
  ['Article 2','/tin-tuc/gsm-la-gi-cach-chon-dinh-luong-vai'],
  ['Article 3','/tin-tuc/quy-trinh-lam-mau-tai-xuong-may-chuyen-nghiep'],
  ['Fabric Guide','/bang-vai'],['Techpack','/huong-dan-techpack'],
  ['Contact','/lien-he'],['Policies','/chinh-sach'],['Search','/tim-kiem'],
  ['Careers','/tuyen-dung'],['FAQ','/faq'],['Quote','/bao-gia']
];

async function inspect(page, url) {
  const response = await page.goto(url, { waitUntil:'networkidle', timeout:30000 });
  return page.evaluate(status => {
    const main = document.querySelector('main') || document.body;
    const visible = element => { const s=getComputedStyle(element),r=element.getBoundingClientRect(); return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0; };
    const escaped = [...document.querySelectorAll('a[href]')].filter(visible).map(a=>({text:(a.innerText||a.getAttribute('aria-label')||'').replace(/\s+/g,' ').trim(),href:a.getAttribute('href'),absolute:a.href})).filter(a=>{try{const u=new URL(a.absolute);return u.hostname==='localhost'&&!u.pathname.startsWith('/mytest/')&&u.pathname!=='/mytest'}catch{return false}});
    const usp = [...document.querySelectorAll('.arden-trust-item,.arden-trust-bar .col,.arden-usp-item,[class*="trust"] h3')].filter(visible).map(e=>{const r=e.getBoundingClientRect();return{text:(e.innerText||'').replace(/\s+/g,' ').trim(),width:r.width,height:r.height,overflow:getComputedStyle(e).overflow}});
    return {
      status, url:location.href, title:document.title, text:main.innerText.replace(/\s+/g,' ').trim(),
      h1:[...main.querySelectorAll('h1')].map(x=>x.innerText.trim()), h2:main.querySelectorAll('h2').length,h3:main.querySelectorAll('h3').length,
      sections:main.querySelectorAll('section').length,images:main.querySelectorAll('img').length,cards:main.querySelectorAll('.arden-card,article,.portfolio-box').length,
      adminBar:!!document.querySelector('#wpadminbar'), raw:/\[(?:\/?)(section|row|col|ux_html|ux_text)\b/i.test(document.body.innerText),
      overflow:document.documentElement.scrollWidth>innerWidth+1, escaped, usp,
      defaultPost:/Chào tất cả mọi người|Cảm ơn vì đã sử dụng WordPress/i.test(document.body.innerText)
    };
  }, response?.status());
}

(async()=>{
  const browser=await chromium.launch({channel:'chrome'});
  const context=await browser.newContext({viewport:{width:1440,height:900}});
  const results=[];
  for(const [name,route] of routes){
    const rp=await context.newPage(),wp=await context.newPage();
    const [react,wordpress]=await Promise.all([inspect(rp,reactBase+route),inspect(wp,wpBase+route)]);
    results.push({name,route,react,wordpress});await rp.close();await wp.close();console.log(name,wordpress.status);
  }
  const faq=await context.newPage();await faq.goto(wpBase+'/faq',{waitUntil:'networkidle'});const faqBefore=faq.url();const faqTabs=faq.locator('.arden-faq-tabs .tab a,[role=tab]');const faqCount=await faqTabs.count();if(faqCount>1)await faqTabs.nth(1).click();await faq.waitForTimeout(300);const faqState={count:faqCount,before:faqBefore,after:faq.url(),selected:faqCount>1?await faqTabs.nth(1).getAttribute('aria-selected'):null};await faq.close();
  const contact=await context.newPage();await contact.goto(wpBase+'/lien-he',{waitUntil:'networkidle'});const contactState=await contact.evaluate(()=>['your-name','your-phone','your-email'].map(name=>{const e=document.querySelector(`[name="${name}"]`);return{name,exists:!!e,required:e?.required||false,ariaRequired:e?.getAttribute('aria-required')}}));await contact.close();
  const quote=await context.newPage();await quote.goto(wpBase+'/bao-gia',{waitUntil:'networkidle'});const quoteState=await quote.evaluate(()=>({visibleInternal:/\b(yes|no|need_design)\b/.test((document.querySelector('main')||document.body).innerText),options:[...document.querySelectorAll('select option')].map(o=>({value:o.value,label:o.textContent.trim()})).filter(x=>['yes','no','need_design'].includes(x.value))}));await quote.close();
  await browser.close();
  const evidence={generatedAt:new Date().toISOString(),loggedOut:true,routes:results,faqState,contactState,quoteState};
  fs.writeFileSync(path.join(root,'wordpress/audit/task09_8a_r-reproduction.json'),JSON.stringify(evidence,null,2)+'\n');
  console.log(JSON.stringify({statuses:Object.fromEntries(results.map(x=>[x.name,x.wordpress.status])),escaped:results.reduce((n,x)=>n+x.wordpress.escaped.length,0),adminBars:results.filter(x=>x.wordpress.adminBar).length,faqState,contactState,quoteState},null,2));
})().catch(error=>{console.error(error);process.exit(1)});
