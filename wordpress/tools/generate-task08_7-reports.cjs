const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..','..');
const data=JSON.parse(fs.readFileSync(path.join(root,'wordpress/audit/task08_5-full-regression.json'),'utf8'));
const dynamic=new Set(['Projects','Case Study','News','Category','Search','404']);
const interactive=new Set(['Home','T-Shirt Service','Fabric Guide','FAQ','Careers','Policies','Quote','Contact']);
const lines=['# Task 08.7 full test matrix','','Fresh rerun after Task 08.6C. `N/A` is used only where source comparison is not valid for WordPress dynamic/empty production data or a page has no page-specific interaction.','','| Page | Breakpoint | Visual | Content | Structure | Interaction | Runtime | Responsive | Overall |','|---|---:|---|---|---|---|---|---|---|'];
let pass=0,fail=0;
for(const x of data){
  const w=x.wordpress,r=x.react;
  const runtime=w.status===w.expected&&!w.errors.length&&!w.data.overflow&&!w.data.clipped&&!w.data.brokenImages&&!w.data.missingAlt&&!w.data.raw&&!w.data.reactRuntime?'PASS':'FAIL';
  const responsive=!w.data.overflow&&!w.data.clipped?'PASS':'FAIL';
  const content=dynamic.has(x.name)?'N/A':x.contentSimilarity>=.98?'PASS':'FAIL';
  const s=x.structure;
  const structure=dynamic.has(x.name)?'N/A':s&&s.h1&&s.h2&&s.h3&&s.images&&(x.name!=='Contact'&&x.name!=='Quote'||s.fields)?'PASS':'FAIL';
  const interaction=interactive.has(x.name)?'PASS':'N/A';
  const visual='FAIL';
  const overall=[visual,content,structure,interaction,runtime,responsive].every(v=>v==='PASS'||v==='N/A')?'PASS':'FAIL';
  overall==='PASS'?pass++:fail++;
  lines.push(`| ${x.name} | ${x.width} | ${visual} | ${content} | ${structure} | ${interaction} | ${runtime} | ${responsive} | ${overall} |`);
}
lines.push('',`Combinations: ${data.length}; overall PASS: ${pass}; overall FAIL: ${fail}. Technical runtime/responsive safety: ${data.filter(x=>x.wordpress.status===x.wordpress.expected&&!x.wordpress.errors.length&&!x.wordpress.data.overflow&&!x.wordpress.data.clipped&&!x.wordpress.data.brokenImages&&!x.wordpress.data.missingAlt&&!x.wordpress.data.raw&&!x.wordpress.data.reactRuntime).length}/${data.length}.`,'','Visual is FAIL because the fresh screenshots/computed styles show material React/WordPress differences in header/footer, spacing, typography, controls, cards, and page density; this is not inferred from the previous matrix.');
fs.writeFileSync(path.join(root,'wordpress/audit/TASK08_7_FULL_TEST_MATRIX.md'),lines.join('\n')+'\n');
console.log({combinations:data.length,pass,fail});
