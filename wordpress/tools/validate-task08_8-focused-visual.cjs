const fs = require('node:fs');
const path = require('node:path');

const sourcePath = path.join(__dirname, 'task08_5-full-regression.cjs');
let source = fs.readFileSync(sourcePath, 'utf8');
const pilotRoutes = `const routes=[
 ['Home','/','/'],
 ['About','/gioi-thieu','/?page_id=81&preview=true'],
 ['Services','/dich-vu','/?page_id=82&preview=true'],
 ['Manufacturing','/nang-luc-san-xuat','/?page_id=87&preview=true'],
 ['T-Shirt Service','/dich-vu/may-ao-thun','/?page_id=83&preview=true'],
 ['Fabric Guide','/bang-vai','/?page_id=100&preview=true'],
 ['Policies','/chinh-sach','/?page_id=99&preview=true'],
 ['FAQ','/faq','/?page_id=95&preview=true'],
 ['Quote','/bao-gia','/?page_id=97&preview=true'],
 ['Careers','/tuyen-dung','/?page_id=98&preview=true']
];`;

source = source
  .replace(/const routes=\[[\s\S]*?\];\nconst dynamic=/, `${pilotRoutes}\nconst dynamic=`)
  .replace(/task08_5-screens/g, 'task08_8-focused-screens')
  .replace(/task08_5-full-regression\.json/g, 'TASK08_8_FOCUSED_RESULTS.json');

// The authenticated Draft preview toolbar is not part of the production-facing design.
source = source.replace(
  "const data=await page.evaluate",
  "await page.addStyleTag({content:'#wpadminbar{display:none!important}html{margin-top:0!important}'});const data=await page.evaluate",
);

new Function('require', '__dirname', '__filename', source)(require, __dirname, __filename);
