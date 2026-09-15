const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const audit = path.join(root, 'wordpress', 'audit');
const approvedDir = path.join(audit, 'task08_11-screens');
const approvedRaw = JSON.parse(fs.readFileSync(path.join(audit, 'task08_11-raw-regression.json'), 'utf8'));
const auth = JSON.parse(execFileSync('C:/xampp/php/php.exe', ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php';$e=time()+7200;echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`], { encoding: 'utf8' }));

const routes = [
  ['Home','/','/'],['About','/gioi-thieu','/?page_id=81&preview=true'],['Services','/dich-vu','/?page_id=82&preview=true'],['T-Shirt Service','/dich-vu/may-ao-thun','/?page_id=83&preview=true'],['Shirt Service','/dich-vu/may-ao-so-mi','/?page_id=84&preview=true'],['Jacket Service','/dich-vu/may-ao-khoac','/?page_id=85&preview=true'],['Pants Service','/dich-vu/may-quan','/?page_id=86&preview=true'],['Manufacturing','/nang-luc-san-xuat','/?page_id=87&preview=true'],['Projects','/du-an','/du-an/'],['Case Study','/du-an/bst-ao-thun-local-brand','/?post_type=project&p=110&preview=true'],['News','/tin-tuc','/?page_id=111&preview=true'],['Category','/chuyen-muc/chua-phan-loai','/chuyen-muc/chua-phan-loai/'],['Fabric Guide','/bang-vai','/?page_id=100&preview=true'],['Techpack Guide','/huong-dan-techpack','/?page_id=101&preview=true'],['FAQ','/faq','/?page_id=95&preview=true'],['Contact','/lien-he','/?page_id=96&preview=true'],['Quote','/bao-gia','/?page_id=97&preview=true'],['Careers','/tuyen-dung','/?page_id=98&preview=true'],['Policies','/chinh-sach','/?page_id=99&preview=true'],['Search','/tim-kiem','/?s=may'],['404','/task08-5-invalid','/task08-5-invalid/']
];
const widths = [1440,1024,768,390];
const dynamic = new Set(['Projects','Case Study','News','Category','Search','404']);
const normalize = value => (value || '').replace(/\s+/g, ' ').trim();
const stem = (name, width) => `${name.replace(/[^a-z0-9]+/gi,'-').toLowerCase()}-${width}`;

async function inspect(page, url, expectedStatus) {
  const pageErrors = [], consoleErrors = [], failed = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
  page.on('response', response => { if (response.status() >= 400 && !response.url().includes('favicon')) failed.push({status:response.status(),url:response.url()}); });
  const response = await page.goto(url, { waitUntil:'networkidle', timeout:30000 });
  const data = await page.evaluate(() => {
    const main = document.querySelector('main') || document.body;
    const visible = element => { const style=getComputedStyle(element), rect=element.getBoundingClientRect(); return style.display!=='none'&&style.visibility!=='hidden'&&rect.width>0&&rect.height>0; };
    const clipped = [...main.querySelectorAll('button,a,.button,input,select,textarea')].filter(visible).filter(element => { const rect=element.getBoundingClientRect(); return rect.right>innerWidth+2||rect.left<-2; }).length;
    const texts = selector => [...main.querySelectorAll(selector)].map(element => element.innerText.replace(/\s+/g,' ').trim());
    return {
      text:main.innerText.replace(/\s+/g,' ').trim(), h1:texts('h1'), h2:texts('h2'), h3:texts('h3'),
      images:main.querySelectorAll('img').length, buttons:main.querySelectorAll('button,.button,input[type=submit]').length,
      fields:main.querySelectorAll('input:not([type=hidden]),select,textarea').length, sections:main.querySelectorAll('section').length,
      overflow:document.documentElement.scrollWidth>innerWidth+1, clipped,
      brokenImages:[...document.images].filter(image=>image.complete&&image.naturalWidth===0).length,
      raw:/\[(?:\/?)(section|row|col|ux_html|ux_text|accordion|tabgroup)\b/i.test(document.body.innerText),
      duplicateIds:Object.entries([...document.querySelectorAll('[id]')].reduce((all,node)=>{all[node.id]=(all[node.id]||0)+1;return all},{})).filter(([,count])=>count>1).map(([id,count])=>({id,count}))
    };
  });
  return { status:response?.status(), expectedStatus, pageErrors, consoleErrors, failed, data };
}

async function imageDifference(comparePage, approvedPath, currentBuffer) {
  const approved = `data:image/png;base64,${fs.readFileSync(approvedPath).toString('base64')}`;
  const current = `data:image/png;base64,${currentBuffer.toString('base64')}`;
  return comparePage.evaluate(async ({approved,current}) => {
    const load = src => new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=src});
    const [a,b]=await Promise.all([load(approved),load(current)]);
    if(a.width!==b.width||a.height!==b.height)return {sameDimensions:false,approved:[a.width,a.height],current:[b.width,b.height],mismatchRatio:1,meanDelta:255};
    const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d',{willReadFrequently:true});canvas.width=a.width;canvas.height=a.height;
    ctx.drawImage(a,0,0);const ad=ctx.getImageData(0,0,a.width,a.height).data;ctx.clearRect(0,0,a.width,a.height);ctx.drawImage(b,0,0);const bd=ctx.getImageData(0,0,b.width,b.height).data;
    let sampled=0,mismatch=0,totalDelta=0;const step=8;
    for(let y=0;y<a.height;y+=step)for(let x=0;x<a.width;x+=step){const i=(y*a.width+x)*4;const delta=(Math.abs(ad[i]-bd[i])+Math.abs(ad[i+1]-bd[i+1])+Math.abs(ad[i+2]-bd[i+2]))/3;sampled++;totalDelta+=delta;if(delta>30)mismatch++;}
    return {sameDimensions:true,approved:[a.width,a.height],current:[b.width,b.height],mismatchRatio:mismatch/sampled,meanDelta:totalDelta/sampled};
  }, {approved,current});
}

(async()=>{
  const browser=await chromium.launch({channel:'chrome'});
  const wp=await browser.newContext(), react=await browser.newContext();
  await wp.addCookies([{...auth,domain:'localhost',path:'/mytest/',httpOnly:true,sameSite:'Lax'}]);
  const comparePage=await browser.newPage();
  const results=[];
  for(const [name,reactPath,wpPath] of routes){
    for(const width of widths){
      const viewport={width,height:width===390?844:900};
      const rp=await react.newPage({viewport}), wpp=await wp.newPage({viewport});
      await Promise.all([rp.setViewportSize(viewport),wpp.setViewportSize(viewport)]);
      const [r,w]=await Promise.all([
        inspect(rp,`http://localhost:3000${reactPath}`,200),
        inspect(wpp,`http://localhost/mytest${wpPath}`,name==='404'?404:200)
      ]);
      const [rShot,wShot]=await Promise.all([rp.screenshot({fullPage:true}),wpp.screenshot({fullPage:true})]);
      const key=stem(name,width), approved=approvedRaw.find(item=>item.name===name&&item.width===width);
      const [reactImage,wpImage]=await Promise.all([
        imageDifference(comparePage,path.join(approvedDir,`${key}-react.png`),rShot),
        imageDifference(comparePage,path.join(approvedDir,`${key}-wp.png`),wShot)
      ]);
      const expected404Console=name==='404'&&w.consoleErrors.every(message=>message.includes('404'));
      const runtime=w.status===w.expectedStatus&&!w.pageErrors.length&&(!w.consoleErrors.length||expected404Console)&&!w.data.brokenImages&&!w.data.raw;
      const responsive=!w.data.overflow&&!w.data.clipped;
      const stableContent=dynamic.has(name)||normalize(w.data.text)===normalize(approved?.wordpress?.data?.text);
      const stableStructure=dynamic.has(name)||(w.data.h1.length===approved?.wordpress?.data?.h1&&w.data.h2.length===approved?.wordpress?.data?.h2&&w.data.h3.length===approved?.wordpress?.data?.h3&&w.data.images===approved?.wordpress?.data?.images&&w.data.buttons===approved?.wordpress?.data?.buttons&&w.data.fields===approved?.wordpress?.data?.fields&&w.data.sections===approved?.wordpress?.data?.sections);
      // Browser rendering can vary slightly; dimensions must match and sampled changed pixels stay below 1%.
      const visual=wpImage.sameDimensions&&wpImage.mismatchRatio<=0.01&&reactImage.sameDimensions&&reactImage.mismatchRatio<=0.01;
      results.push({name,width,reactPath,wpPath,runtime,responsive,content:stableContent,structure:stableStructure,visual,diagnostics:{wordpress:w,react:r,wpImage,reactImage,duplicateIds:w.data.duplicateIds}});
      await rp.close();await wpp.close();
    }
    console.log(`DONE ${name}`);
  }
  await browser.close();
  fs.writeFileSync(path.join(audit,'task09_8a-precheck-results.json'),JSON.stringify({generatedAt:new Date().toISOString(),routes:21,widths,combinations:84,results},null,2)+'\n');
  const counts=Object.fromEntries(['runtime','responsive','content','structure','visual'].map(key=>[key,results.filter(item=>item[key]).length]));
  console.log(JSON.stringify(counts));
})().catch(error=>{console.error(error);process.exit(1)});
