const { chromium }=require('playwright');
const { execFileSync }=require('child_process');
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..','..');
const auth=JSON.parse(execFileSync('C:/xampp/php/php.exe',['-r',`require 'C:/xampp/htdocs/mytest/wp-load.php';$e=time()+3600;echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`],{encoding:'utf8'}));
const targets=[
 ['NewsPage','http://localhost/mytest/?page_id=111&preview=true&arden_validate_drafts=1',200],
 ['SinglePost','http://localhost/mytest/?p=109&preview=true',200],
 ['ProjectsPage','http://localhost/mytest/du-an/?arden_validate_drafts=1',200],
 ['CaseStudyPage','http://localhost/mytest/?post_type=project&p=110&preview=true',200],
 ['CategoryPage','http://localhost/mytest/chuyen-muc/task-05-validation/?arden_validate_drafts=1',200],
 ['SearchPage','http://localhost/mytest/?s=Task+05&arden_validate_drafts=1',200],
 ['NotFoundPage','http://localhost/mytest/task05-route-khong-ton-tai/',404]
];
(async()=>{const b=await chromium.launch({channel:'chrome'}),c=await b.newContext();await c.addCookies([{name:auth.name,value:auth.value,domain:'localhost',path:'/mytest/',expires:auth.expires,httpOnly:true,sameSite:'Lax'}]);const out=[];for(const [name,url,expected] of targets){const item={name,url,expected,viewports:{}};for(const width of [1440,1024,768,390]){const p=await c.newPage();await p.setViewportSize({width,height:width===390?844:900});const errors=[];p.on('console',m=>{if(m.type()==='error')errors.push(m.text())});p.on('pageerror',e=>errors.push(e.message));const response=await p.goto(url,{waitUntil:'networkidle'});const data=await p.evaluate(()=>({title:document.title,h1:[...document.querySelectorAll('main h1,.arden-page-hero h1')].map(e=>e.textContent.trim()),sections:document.querySelectorAll('main section').length,cards:document.querySelectorAll('main article').length,images:document.querySelectorAll('main img').length,forms:document.querySelectorAll('main form').length,raw:/\[(section|row|col|ux_html)\b/i.test(document.body.innerText),php:/PHP (Warning|Notice|Fatal)|Fatal error|Warning:|Notice:/i.test(document.body.innerText),overflow:document.documentElement.scrollWidth>innerWidth+1}));const relevantErrors=expected===404?errors.filter(e=>!/404 \(Not Found\)/.test(e)):errors;item.viewports[width]={status:response.status(),pass:response.status()===expected&&!data.raw&&!data.php&&!relevantErrors.length,data,errors:relevantErrors};await p.close()}out.push(item);console.log(name,Object.values(item.viewports).every(v=>v.pass)?'PASS':'FAIL')}await b.close();fs.writeFileSync(path.join(root,'wordpress/audit/task05-runtime-C.json'),JSON.stringify(out,null,2))})().catch(e=>{console.error(e);process.exit(1)});
