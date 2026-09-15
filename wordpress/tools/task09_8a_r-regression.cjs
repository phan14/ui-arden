const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const audit = path.join(root, 'wordpress', 'audit');
const shots = path.join(audit, 'task09_8a_r-screens');
fs.mkdirSync(shots, { recursive: true });
const data = JSON.parse(fs.readFileSync(path.join(audit, 'task09_8a_r-react-data.json'), 'utf8'));
const routes = [
  ['Home','/'],['About','/gioi-thieu'],['Services','/dich-vu'],['T-Shirt','/dich-vu/may-ao-thun'],
  ['Shirt','/dich-vu/may-ao-so-mi'],['Jacket','/dich-vu/may-ao-khoac'],['Pants','/dich-vu/may-quan'],
  ['Projects','/du-an'],['Case Study','/du-an/bst-ao-thun-local-brand'],['News','/tin-tuc'],
  ['Article 1','/tin-tuc/cach-chon-xuong-may-uy-tin-cho-local-brand'],
  ['Article 2','/tin-tuc/gsm-la-gi-cach-chon-dinh-luong-vai'],
  ['Article 3','/tin-tuc/quy-trinh-lam-mau-tai-xuong-may-chuyen-nghiep'],
  ['Fabric Guide','/bang-vai'],['Techpack','/huong-dan-techpack'],['Contact','/lien-he'],
  ['Policies','/chinh-sach'],['Search','/tim-kiem'],['Careers','/tuyen-dung'],['FAQ','/faq'],['Quote','/bao-gia']
];
const widths = [1440,1024,768,390];
const normalize = value => (value || '').normalize('NFC').replace(/\s+/g,' ').trim();
const folded = value => normalize(value).toLocaleLowerCase('vi');
const words = value => new Set(normalize(value).toLocaleLowerCase('vi').split(/\s+/).filter(Boolean));
const similarity = (a,b) => { const x=words(a),y=words(b),i=[...x].filter(v=>y.has(v)).length; return i/Math.max(1,x.size+y.size-i); };
const safeStem = (name,width) => `${name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${width}`;

async function inspect(page,url) {
  const errors=[], failed=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  page.on('response',r=>{if(r.status()>=400&&!/favicon/.test(r.url()))failed.push({status:r.status(),url:r.url()})});
  const response=url ? await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000}) : null;
  await page.waitForTimeout(500);
  const dom=await page.evaluate(()=>{
    const main=document.querySelector('main')||document.body;
    const visible=e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0};
    const headings=s=>[...main.querySelectorAll(s)].filter(visible).map(e=>e.innerText.replace(/\s+/g,' ').trim());
    const escaped=[...document.querySelectorAll('a[href]')].filter(visible).filter(a=>{try{const u=new URL(a.href);return u.hostname==='localhost'&&!u.pathname.startsWith('/mytest')&&location.port!=='3000'}catch{return false}}).map(a=>a.href);
    const style=e=>{if(!e)return null;const s=getComputedStyle(e),r=e.getBoundingClientRect();return{font:s.fontFamily,size:parseFloat(s.fontSize),weight:s.fontWeight,color:s.color,bg:s.backgroundColor,radius:s.borderRadius,width:r.width,height:r.height}};
    return {text:normalizeText(main.innerText),h1:headings('h1'),h2:headings('h2'),h3:headings('h3'),sections:main.querySelectorAll('section').length,images:[...main.querySelectorAll('img')].filter(visible).length,cards:[...main.querySelectorAll('.arden-card,article,.portfolio-box')].filter(visible).length,fields:[...main.querySelectorAll('input:not([type=hidden]),select,textarea')].filter(visible).length,adminBar:!!document.querySelector('#wpadminbar'),raw:/\[(?:\/?)(section|row|col|ux_text|ux_html)\b/i.test(document.body.innerText),overflow:document.documentElement.scrollWidth>innerWidth+1,clipped:[...main.querySelectorAll('a,button,input,select,textarea')].filter(visible).filter(e=>{const r=e.getBoundingClientRect();return r.left<-2||r.right>innerWidth+2}).length,broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).length,escaped,projectCards:main.querySelectorAll('.arden-content-card').length,postTitles:headings('article h2,article h3'),styles:{body:style(document.body),h1:style(main.querySelector('h1')),button:style(main.querySelector('.button,.arden-button,button,input[type=submit]')),hero:style(main.querySelector('.arden-page-banner,.arden-hero,main section'))}};
    function normalizeText(s){return(s||'').normalize('NFC').replace(/\s+/g,' ').trim()}
  });
  return {status:response?.status()||200,url:page.url(),errors,failed,dom};
}

function semanticPass(name,react,wp) {
  if (name.startsWith('Article ')) { const article=data.articles[Number(name.slice(-1))-1]; return wp.dom.h1.some(h=>folded(h)===folded(article.title))&&folded(wp.dom.text).includes(folded(article.excerpt).slice(0,60)); }
  if(name==='Projects') return wp.dom.projectCards===6&&data.projects.every(p=>folded(wp.dom.text).includes(folded(p.title)));
  if(name==='Case Study') return folded(wp.dom.text).includes(folded(data.projects[0].title))&&/THÔNG TIN KỸ THUẬT/i.test(wp.dom.text)&&/TIẾN ĐỘ|QUY TRÌNH/i.test(wp.dom.text);
  if(name==='News') return data.articles.every(a=>folded(wp.dom.text).includes(folded(a.title)));
  if(name==='Search') return /TÌM KIẾM/i.test(wp.dom.h1.join(' '))&&wp.dom.fields>0;
  return normalize(react.dom.h1[0])===normalize(wp.dom.h1[0])&&similarity(react.dom.text,wp.dom.text)>=0.78;
}

function visualPass(name,react,wp) {
  const rs=react.dom.styles,ws=wp.dom.styles;
  const fontOk=(ws.body?.font||'')===(rs.body?.font||'')&&/Vietnam/i.test(ws.h1?.font||'')&&/Vietnam/i.test(rs.h1?.font||'');
  const headingRatio=(ws.h1?.size||0)/Math.max(1,rs.h1?.size||1);
  const buttonOk=!ws.button||((ws.button.height||0)>=34&&(ws.button.width||0)>20);
  const heroRatio=(ws.hero?.height||0)/Math.max(1,rs.hero?.height||1);
  const heroOk=heroRatio>=0.5&&heroRatio<=1.8;
  return fontOk&&headingRatio>=0.72&&headingRatio<=1.3&&buttonOk&&(name.startsWith('Article ')||heroOk);
}

async function interaction(page,name) {
  if(name==='FAQ'||name==='Policies'||name==='T-Shirt'||name==='Careers'){
    const controls=page.locator('[role=tab],.accordion-title');if(await controls.count()>1){const before=page.url();await controls.nth(1).click();await page.waitForTimeout(150);return page.url().split('#')[0]===before.split('#')[0];}
  }
  if(name==='Fabric Guide'){
    const applied=await page.evaluate(()=>{const input=[...document.querySelectorAll('main input')].find(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width>0&&r.height>0&&s.display!=='none'&&s.visibility!=='hidden'});if(!input)return false;input.value='không-tồn-tại-arden';input.dispatchEvent(new Event('input',{bubbles:true}));return true});
    await page.waitForTimeout(100);return applied&&await page.locator('[role=status],.arden-fabric-empty').count()>0;
  }
  if(name==='Contact'||name==='Quote'){const form=page.locator('.wpcf7 form').first();if(await form.count()){const req=await form.locator('[required],[aria-required=true]').count();return req>=2;}}
  if(name==='Search'){const tabs=page.locator('[data-search-type]');if(await tabs.count()>1){const before=page.url();await tabs.nth(1).click();return page.url()===before;}}
  const bad=await page.locator('a[href^="http://localhost/"]:not([href^="http://localhost/mytest"])').count();return bad===0;
}

(async()=>{
  const browser=await chromium.launch({channel:'chrome'});
  const reactContext=await browser.newContext(),wpContext=await browser.newContext();
  const results=[];
  for(const [name,route] of routes){
    for(const width of widths){
      const viewport={width,height:width===390?844:900};
      const rp=await reactContext.newPage(),wp=await wpContext.newPage();
      await Promise.all([rp.setViewportSize(viewport),wp.setViewportSize(viewport)]);
      let reactPromise;
      if(name.startsWith('Article ')){
        const article=data.articles[Number(name.slice(-1))-1];
        reactPromise=(async()=>{await rp.goto('http://localhost:3000/tin-tuc',{waitUntil:'domcontentloaded',timeout:30000});await rp.waitForTimeout(500);const card=rp.locator('article').filter({hasText:article.title}).first();await card.locator('button').first().click();await rp.getByRole('heading',{name:article.title,exact:true}).first().waitFor({state:'visible'});return inspect(rp,null)})();
      }else reactPromise=inspect(rp,'http://localhost:3000'+route);
      const [r,w]=await Promise.all([reactPromise,inspect(wp,'http://localhost/mytest'+route)]);
      const runtime=w.status===200&&!w.errors.length&&!w.dom.broken&&!w.dom.raw;
      const responsive=!w.dom.overflow&&!w.dom.clipped;
      const content=semanticPass(name,r,w);
      const structure=runtime&&w.dom.h1.length>0&&w.dom.sections>0&&(name!=='Projects'||w.dom.projectCards===6);
      const visual=visualPass(name,r,w);
      const interactions=await interaction(wp,name);
      const stem=safeStem(name,width);
      await Promise.all([rp.screenshot({path:path.join(shots,stem+'-react.png'),fullPage:true}),wp.screenshot({path:path.join(shots,stem+'-wp.png'),fullPage:true})]);
      results.push({name,route,width,runtime,responsive,visual,content,structure,interactions,diagnostics:{react:r,wordpress:w,textSimilarity:similarity(r.dom.text,w.dom.text)}});
      await rp.close();await wp.close();
    }
    console.log('DONE',name);
  }
  await browser.close();
  const axes=['runtime','responsive','visual','content','structure','interactions'];
  const counts=Object.fromEntries(axes.map(k=>[k,results.filter(x=>x[k]).length]));
  fs.writeFileSync(path.join(audit,'task09_8a_r-results.json'),JSON.stringify({generatedAt:new Date().toISOString(),loggedOut:true,widths,routes:routes.length,combinations:results.length,counts,results},null,2)+'\n');
  console.log(JSON.stringify(counts));
})().catch(e=>{console.error(e);process.exit(1)});
