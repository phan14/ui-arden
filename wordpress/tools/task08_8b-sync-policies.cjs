const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..', '..');
const jsonPath = path.join(root, 'wordpress', 'audit', 'task08_8b-policies-react.json');
const importPath = path.join(root, 'wordpress', 'import', 'pages', 'policies-flatsome.txt');
const panels = JSON.parse(fs.readFileSync(jsonPath, 'utf8').replace(/^\uFEFF/, ''));
const titles = [
  'Chính sách chung & Thỏa thuận hợp tác',
  'Chính sách bảo mật thiết kế & NDA',
  'Chính sách thanh toán & Đặt cọc',
  'Chính sách đổi trả & Bảo hành đường may',
  'Chính sách vận chuyển & Giao nhận',
];

function sanitize(html) {
  return html
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, '')
    .replace(/<div class="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center">\s*<\/div>/gi, '')
    .trim();
}

const tabs = panels.map((panel, index) => {
  const title = titles[index].replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return `[tab title="${title}"]${sanitize(panel.html)}[/tab]`;
}).join('\n');

let source = fs.readFileSync(importPath, 'utf8');
source = source.replace(
  /\[tabgroup type="vertical" class="arden-policy-tabs"\][\s\S]*?\[\/tabgroup\]/,
  `[tabgroup type="vertical" class="arden-policy-tabs"]\n${tabs}\n[/tabgroup]`,
);
if (!source.includes('LEGAL_REVIEW_REQUIRED')) {
  source = `<!-- LEGAL_REVIEW_REQUIRED: React-authoritative conversion content; legal approval is not implied. -->\n${source}`;
}
fs.writeFileSync(importPath, source);
console.log(`Synchronized ${panels.length} exact React policy panels into ${importPath}`);
