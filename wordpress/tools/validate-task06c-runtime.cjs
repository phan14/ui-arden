const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');
const auth = JSON.parse(execFileSync('C:/xampp/php/php.exe',['-r',`require 'C:/xampp/htdocs/mytest/wp-load.php'; $e=time()+3600; echo json_encode(['name'=>LOGGED_IN_COOKIE,'value'=>wp_generate_auth_cookie(1,$e,'logged_in'),'expires'=>$e]);`],{encoding:'utf8'}));
const targets=[
  ['About','http://localhost/mytest/?page_id=81&preview=true'],['Shirt','http://localhost/mytest/?page_id=84&preview=true'],
  ['Manufacturing','http://localhost/mytest/?page_id=87&preview=true'],['Contact','http://localhost/mytest/?page_id=96&preview=true'],
  ['Quote','http://localhost/mytest/?page_id=97&preview=true'],['Projects','http://localhost/mytest/du-an/'],
  ['Search','http://localhost/mytest/?s=may']
];
(async()=>{const browser=await chromium.launch({channel:'chrome'}),context=await browser.newContext();await context.addCookies([{...auth,domain:'localhost',path:'/mytest/',httpOnly:true,sameSite:'Lax'}]);const out=[];for(const [name,url] of targets)for(const width of [1440,1024,768,390]){const page=await context.newPage({viewport:{width,height:width===390?844:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));const response=await page.goto(url,{waitUntil:'networkidle'});const state=await page.evaluate(()=>({raw:/\[(?:\/?)(section|row|row_inner|col|col_inner|ux_html|ux_text|accordion|tabgroup)\b/i.test(document.body.innerText),overflow:document.documentElement.scrollWidth>innerWidth+1,reactRuntime:!!document.querySelector('#root[data-reactroot],script[src*="react"]'),sections:document.querySelectorAll('.arden-react-page__section').length,forms:document.querySelectorAll('form').length}));out.push({name,width,http:response?.status(),errors,state});await page.close()}await browser.close();fs.writeFileSync(path.join(root,'wordpress/audit/task06c-runtime.json'),JSON.stringify(out,null,2));out.forEach(x=>console.log(`${x.name}\t${x.width}\tHTTP:${x.http}\traw:${x.state.raw}\toverflow:${x.state.overflow}\terrors:${x.errors.length}`));if(out.some(x=>x.http!==200||x.state.raw||x.state.overflow||x.errors.length||x.state.reactRuntime))process.exit(1)})().catch(e=>{console.error(e);process.exit(1)});
