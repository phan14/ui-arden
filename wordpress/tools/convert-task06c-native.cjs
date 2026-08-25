/**
 * One-shot Task 06C migration. It decomposes each DOM-derived UX HTML section
 * into small registered Flatsome elements while preserving source text/order.
 * Run with Playwright available through NODE_PATH. Review diffs before sync.
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const dir = path.join(root, 'wordpress', 'import', 'pages');
const files = [
  'about-flatsome.txt','services-flatsome.txt','shirt-service-flatsome.txt',
  'jacket-service-flatsome.txt','pants-service-flatsome.txt','manufacturing-flatsome.txt',
  'contact-flatsome.txt','quote-flatsome.txt','careers-flatsome.txt',
  'policies-flatsome.txt','fabric-guide-flatsome.txt','techpack-guide-flatsome.txt'
];

const esc = value => String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\[/g, '&#91;').replace(/\]/g, '&#93;');
const sectionPattern = /(\[section[^\]]*\])([\s\S]*?)(\[\/section\])/g;
const htmlPattern = /\[ux_html[^\]]*\]\s*([\s\S]*?)\s*\[\/ux_html\]/;

(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage();
  for (const name of files) {
    const file = path.join(dir, name);
    const source = fs.readFileSync(file, 'utf8');
    let cursor = 0;
    let output = '';
    for (const match of source.matchAll(sectionPattern)) {
      output += source.slice(cursor, match.index);
      cursor = match.index + match[0].length;
      const htmlMatch = match[2].match(htmlPattern);
      if (!htmlMatch) { output += match[0]; continue; }
      await page.setContent(`<main id="task06c-root">${htmlMatch[1]}</main>`);
      const tree = await page.evaluate(() => {
        const root = document.querySelector('#task06c-root');
        const cleanClass = el => (el.getAttribute('class') || '').replace(/\s+/g, ' ').trim();
        const serialize = el => el.outerHTML;
        const node = el => {
          if (el.nodeType === Node.TEXT_NODE) return el.textContent.trim() ? { type:'rawtext', html:el.textContent.trim() } : null;
          if (el.nodeType !== Node.ELEMENT_NODE) return null;
          const tag = el.tagName.toLowerCase(), cls = cleanClass(el);
          if (tag === 'svg' || tag === 'script' || tag === 'style') return null;
          if (/^h[1-6]$/.test(tag) || ['p','ul','ol','blockquote','small'].includes(tag)) return { type:'text', html:serialize(el), cls };
          if (tag === 'img') return { type:'media', html:serialize(el), cls };
          if (tag === 'table') return { type:'table', html:serialize(el), cls };
          if (tag === 'form' || ['input','select','textarea'].includes(tag)) return { type:'form', html:serialize(el), cls };
          if ((tag === 'a' || tag === 'button') && !el.querySelector('h1,h2,h3,h4,h5,h6,p,ul,ol,table,form,input,select,textarea')) {
            return { type:'button', text:el.textContent.replace(/\s+/g,' ').trim(), href:el.getAttribute('href') || '#', cls };
          }
          const kids = [...el.childNodes].map(node).filter(Boolean);
          if (!kids.length) return null;
          if (/\bgrid\b/.test(cls)) {
            const cols = /(?:lg:)?grid-cols-4/.test(cls) ? 4 : /(?:lg:)?grid-cols-3/.test(cls) ? 3 : /(?:md:)?grid-cols-2/.test(cls) ? 2 : 1;
            return { type:'grid', cols, cls, kids };
          }
          if (/rounded-(?:xl|2xl|3xl)|\bcard\b/.test(cls) && !/max-w-|inline-flex/.test(cls)) return { type:'card', cls, kids };
          return { type:'group', cls, kids };
        };
        return [...root.childNodes].map(node).filter(Boolean);
      });

      let htmlCount = 0;
      const render = (item, depth = 0, inCard = false) => {
        if (item.type === 'text') return `[ux_text class="${esc(item.cls)}"]${item.html}[/ux_text]\n`;
        if (item.type === 'rawtext') return `[ux_text]<p>${esc(item.html)}</p>[/ux_text]\n`;
        if (item.type === 'button') return `[button text="${esc(item.text)}" link="${esc(item.href)}" class="${esc(item.cls)}"]\n`;
        if (item.type === 'table') return `[ux_text class="arden-native-table ${esc(item.cls)}"]<div class="arden-table-scroll">${item.html}</div>[/ux_text]\n`;
        if (item.type === 'media' || item.type === 'form') { htmlCount++; return `[ux_html class="arden-special-element arden-special-element--${item.type}"]${item.html}[/ux_html]\n`; }
        if (item.type === 'card') {
          if (inCard) return item.kids.map(k => render(k, depth, true)).join('');
          return `[featured_box class="${esc(item.cls)}"]\n${item.kids.map(k => render(k, depth, true)).join('')}[/featured_box]\n`;
        }
        if (item.type === 'grid') {
          if (depth > 0) return item.kids.map(k => render(k, depth, inCard)).join('');
          const span = item.cols === 4 ? 3 : item.cols === 3 ? 4 : item.cols === 2 ? 6 : 12;
          return `[row_inner class="${esc(item.cls)}"]\n${item.kids.map(k => `[col_inner span="${span}" span__md="${item.cols > 2 ? 6 : span}" span__sm="12"]\n${render(k, depth + 1, inCard)}[/col_inner]\n`).join('')}[/row_inner]\n`;
        }
        return item.kids.map(k => render(k, depth, inCard)).join('');
      };
      const native = tree.map(render).join('');
      const rebuilt = `${match[1]}\n[row width="full-width" style="collapse"]\n[col span="12" padding="0px"]\n${native}[/col]\n[/row]\n${match[3]}`;
      output += rebuilt;
      process.stdout.write(`${name}\tsection\thtml-special:${htmlCount}\n`);
    }
    output += source.slice(cursor);
    fs.writeFileSync(file, output, 'utf8');
  }
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
