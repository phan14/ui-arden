const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const batch = (process.argv[2] || '').toUpperCase();
const groups = {
  A: ['AboutPage','ServicesPage','TShirtServicePage','ShirtServicePage','JacketServicePage','PantsServicePage','ManufacturingPage'],
  B: ['FAQPage','ContactPage','QuotePage','CareersPage','PoliciesPage','FabricGuidePage','TechpackGuidePage']
};
if (!groups[batch]) throw new Error('Usage: node validate-task05-runtime.cjs A|B');
const inventory = JSON.parse(fs.readFileSync(path.join(root,'wordpress/audit/pages-source-inventory.json'),'utf8'));
const sync = JSON.parse(fs.readFileSync(path.join(root,'wordpress/audit/task05-sync.json'),'utf8'));
const auth = JSON.parse(execFileSync('C:/xampp/php/php.exe', ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php'; $e=time()+3600; echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`], {encoding:'utf8'}));
const widths = [1440,1024,768,390];
const normalize = x => (x||'').replace(/\s+/g,' ').trim();
const collect = async page => page.evaluate(() => {
  const main=document.querySelector('main,#content');
  const root=document.querySelector('.arden-react-page') || main;
  const texts=s=>[...(root?.querySelectorAll(s)||[])].map(e=>e.textContent.replace(/\s+/g,' ').trim()).filter(Boolean);
  const leafTexts=s=>[...(root?.querySelectorAll(s)||[])].filter(e=>!e.querySelector(s)).map(e=>e.textContent.replace(/\s+/g,' ').trim()).filter(Boolean);
  const firstSection=root?.querySelector('section');
  const textRoot=root?.cloneNode(true); textRoot?.querySelectorAll('style,script').forEach(e=>e.remove());
  const style=e=>{if(!e)return null;const s=getComputedStyle(e);return {fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,lineHeight:s.lineHeight,color:s.color,backgroundColor:s.backgroundColor}};
  return {
    contentText:textRoot?.textContent||'',
    semanticTexts:leafTexts('h1,h2,h3,h4,h5,h6,p,li,a,button,label,option,th,td,blockquote,small,span'),
    h1:texts('h1'),h2:texts('h2'),h3:texts('h3'),
    sections:root?.querySelectorAll('section').length||0,
    images:root?.querySelectorAll('img').length||0,
    forms:root?.querySelectorAll('form').length||0,
    ctas:[...(root?.querySelectorAll('a,button,input[type=submit]')||[])].map(e=>(e.textContent||e.value||'').replace(/\s+/g,' ').trim()).filter(Boolean),
    cards:[...(root?.querySelectorAll('*')||[])].filter(e=>e.matches('article')||/(^|\s)(card|rounded-2xl)(\s|$)/.test(e.className||'')).length,
    pageHeight:document.documentElement.scrollHeight,
    overflow:document.documentElement.scrollWidth>innerWidth+1,
    body:style(document.body),h1Style:style(root?.querySelector('h1')),h2Style:style(root?.querySelector('h2')),
    firstSection:firstSection?{height:Math.round(firstSection.getBoundingClientRect().height),background:style(firstSection).backgroundColor}:null,
    rawShortcode:/\[(section|row|col|ux_html)\b/i.test(root?.innerText||''),
    runtimeError:/PHP (Warning|Notice|Fatal)|Fatal error|Warning:|Notice:/i.test(document.body.innerText)
  };
});
(async()=>{
  const browser=await chromium.launch({channel:'chrome'});
  const context=await browser.newContext();
  await context.addCookies([{name:auth.name,value:auth.value,domain:'localhost',path:'/mytest/',expires:auth.expires,httpOnly:true,sameSite:'Lax'}]);
  const results=[];
  for(const component of groups[batch]){
    const source=inventory.find(x=>x.component===component), item=sync[component];
    const pageResult={component,id:item.id,slug:item.slug,status:item.status,source:item.source,viewports:{}};
    for(const width of widths){
      const height=width===390?844:900;
      const react=await context.newPage(), wp=await context.newPage();
      await Promise.all([react.setViewportSize({width,height}),wp.setViewportSize({width,height})]);
      const errors=[]; wp.on('console',m=>{if(m.type()==='error')errors.push(m.text())});wp.on('pageerror',e=>errors.push(e.message));
      const [rr,wr]=await Promise.all([react.goto('http://localhost:3000'+source.route,{waitUntil:'networkidle'}),wp.goto(`http://localhost/mytest/?page_id=${item.id}&preview=true`,{waitUntil:'networkidle'})]);
      const [rd,wd]=await Promise.all([collect(react),collect(wp)]);
      const content=rd.contentText.replace(/\s+/g,'')===wd.contentText.replace(/\s+/g,'');
      const structure=rd.sections===wd.sections&&rd.images===wd.images&&rd.forms===wd.forms&&rd.cards===wd.cards&&JSON.stringify(rd.ctas)===JSON.stringify(wd.ctas);
      pageResult.viewports[width]={http:{react:rr?.status(),wordpress:wr?.status()},content,structure,react:rd,wordpress:wd,consoleErrors:errors};
      if(!content||!structure||wd.rawShortcode||wd.runtimeError||wr?.status()!==200){
        await wp.screenshot({path:path.join(root,`wordpress/audit/task05-${batch}-${component}-${width}-wp.png`),fullPage:true});
      }
      await react.close();await wp.close();
    }
    results.push(pageResult);
    console.log(`${component}\t${Object.values(pageResult.viewports).every(v=>v.http.wordpress===200&&!v.wordpress.rawShortcode&&!v.wordpress.runtimeError)?'HTTP_PASS':'HTTP_FAIL'}\t${Object.values(pageResult.viewports).every(v=>v.content)?'CONTENT_PASS':'CONTENT_FAIL'}\t${Object.values(pageResult.viewports).every(v=>v.structure)?'STRUCTURE_PASS':'STRUCTURE_FAIL'}`);
  }
  await browser.close();
  fs.writeFileSync(path.join(root,`wordpress/audit/task05-runtime-${batch}.json`),JSON.stringify(results,null,2));
})().catch(e=>{console.error(e);process.exit(1)});
