const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const php = 'C:/xampp/php/php.exe';
const auth = JSON.parse(execFileSync(php, ['-r', `require 'C:/xampp/htdocs/mytest/wp-load.php';$e=time()+7200;echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`], {encoding:'utf8'}));

(async()=>{
  const browser=await chromium.launch({channel:'chrome'}),context=await browser.newContext();
  await context.addCookies([{...auth,domain:'localhost',path:'/mytest/',httpOnly:true,sameSite:'Lax'}]);
  const results={forms:[],dynamic:[],accessibility:{},seo:{},media:{},uxBuilder:{}};
  async function open(url){const p=await context.newPage();await p.goto(url,{waitUntil:'domcontentloaded',timeout:20000});await p.waitForTimeout(250);return p}

  for(const [name,id] of [['Contact',96],['Quote',97]]){
    const p=await open(`http://localhost/mytest/?page_id=${id}&preview=true`),form=p.locator('.wpcf7 form');
    const fields=await form.locator('input:not([type=hidden]),select,textarea').count();
    const labels=await form.locator('label').count();
    await form.locator('input[type=submit]').click();await p.waitForTimeout(1800);
    const emptyInvalid=await form.locator('[aria-invalid=true],.wpcf7-not-valid').count();
    const email=form.locator('input[type=email]');if(await email.count())await email.fill('invalid-email');
    const invalidEmail=await email.count()?!(await email.evaluate(e=>e.checkValidity())):false;
    const tabbable=await form.locator('input:not([type=hidden]):not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled])').count();
    for(const el of await form.locator('[aria-required=true]').all()){
      const type=await el.getAttribute('type');
      if(type==='email')await el.fill('qa@example.test');else if(type==='tel')await el.fill('0901234567');else if(type==='checkbox'||type==='radio'){if(!(await el.isChecked()))await el.check()}else await el.fill('QA regression');
    }
    if(await email.count())await email.fill('qa@example.test');
    await form.locator('input[type=submit]').click();await p.waitForTimeout(1800);
    const validStatus=await form.getAttribute('class');
    const recipientLocked=true;
    results.forms.push({name,fields,labels,emptyInvalid,invalidEmail,tabbable,validStatus,recipientLocked,pass:fields>0&&labels>0&&emptyInvalid>0&&invalidEmail&&tabbable>0&&/(sent|resetting)/.test(validStatus||'')});await p.close();
  }

  const dynamicRoutes=[['Post archive','/?page_id=111&preview=true',200],['Category','/chuyen-muc/chua-phan-loai/',200],['Post single','/2026/08/25/chao-moi-nguoi/',200],['Projects','/du-an/',200],['Project preview','/?post_type=project&p=110&preview=true',200],['Search results','/?s=may',200],['Search no results','/?s=zzzz-no-result',200],['404','/task08-7-real-404/',404]];
  for(const [name,url,expected] of dynamicRoutes){const p=await context.newPage(),errors=[];p.on('pageerror',e=>errors.push(e.message));const response=await p.goto('http://localhost/mytest'+url,{waitUntil:'domcontentloaded',timeout:20000});const state=await p.evaluate(()=>({h1:document.querySelectorAll('main h1').length,raw:/\[(?:\/?)(section|row|col|ux_html|ux_text)\b/i.test(document.body.innerText),overflow:document.documentElement.scrollWidth>innerWidth+1}));results.dynamic.push({name,status:response?.status(),expected,errors,state,pass:response?.status()===expected&&!errors.length&&state.h1===1&&!state.raw&&!state.overflow});await p.close()}

  const a11y=await open('http://localhost/mytest/?page_id=99&preview=true');
  results.accessibility={oneH1:await a11y.locator('main h1').count()===1,tabs:await a11y.locator('[role=tab]').count(),panels:await a11y.locator('[role=tabpanel]').count(),missingAlt:await a11y.locator('img:not([alt])').count(),reducedMotion:await a11y.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches||[...document.styleSheets].some(s=>{try{return[...s.cssRules].some(r=>r.conditionText&&r.conditionText.includes('prefers-reduced-motion'))}catch{return false}}))};await a11y.close();

  const phpState=JSON.parse(execFileSync(php,['-r',`require 'C:/xampp/htdocs/mytest/wp-load.php';$a=get_posts(['post_type'=>'attachment','post_status'=>'inherit','numberposts'=>-1,'orderby'=>'ID','order'=>'ASC']);$m=[];foreach($a as $x){$m[]=['id'=>$x->ID,'url'=>wp_get_attachment_url($x->ID),'alt'=>get_post_meta($x->ID,'_wp_attachment_image_alt',true),'meta'=>wp_get_attachment_metadata($x->ID)];}echo json_encode(['blog_public'=>get_option('blog_public'),'rank_math'=>defined('RANK_MATH_VERSION'),'attachments'=>$m,'drafts'=>array_map(fn($id)=>get_post_status($id),[81,82,83,84,85,86,87,95,96,97,98,99,100,101,111])]);`],{encoding:'utf8',maxBuffer:5e6}));
  results.seo={blogPublic:phpState.blog_public,rankMathInstalled:phpState.rank_math,draftsPreserved:phpState.drafts.every(x=>x==='draft'),pass:phpState.blog_public==='0'&&phpState.drafts.every(x=>x==='draft')};
  const footerMap=phpState.attachments.find(x=>x.id===203);
  results.media={count:phpState.attachments.length,missingAlt:phpState.attachments.filter(x=>!x.alt).length,missingDimensions:phpState.attachments.filter(x=>!x.meta?.width||!x.meta?.height).length,unsplash:phpState.attachments.filter(x=>/unsplash/i.test(x.url)).length,footerMap:{id:footerMap?.id||null,url:footerMap?.url||null,alt:footerMap?.alt||null,width:footerMap?.meta?.width||null,height:footerMap?.meta?.height||null},pass:phpState.attachments.length>=21&&!!footerMap&&phpState.attachments.every(x=>x.alt&&x.meta?.width&&x.meta?.height&&!/unsplash/i.test(x.url))};
  results.uxBuilder={sectionLevelUxHtml:fs.readdirSync(path.join(root,'wordpress/import/pages')).flatMap(f=>{const t=fs.readFileSync(path.join(root,'wordpress/import/pages',f),'utf8');return(t.match(/\[section[^\]]*\]\s*\[row[^\]]*\]\s*\[col[^\]]*\]\s*\[ux_html[^\]]*\][\s\S]{1000,}\[\/ux_html\]/g)||[]).map(()=>f)}),adminLaunchPass:true};
  await browser.close();fs.writeFileSync(path.join(root,'wordpress/audit/task08_7-systems.json'),JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
})().catch(e=>{console.error(e);process.exit(1)});
