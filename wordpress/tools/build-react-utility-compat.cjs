const fs = require('node:fs');
const path = require('node:path');
const postcss = require('postcss');

const root = path.resolve(__dirname, '..');
const sourcePath = path.join(root, 'flatsome-child', 'assets', 'css', 'react-pages.css');
const outputPath = path.join(root, 'flatsome-child', 'assets', 'css', 'react-utility-compat.css');
const source = postcss.parse(fs.readFileSync(sourcePath, 'utf8'));
const output = postcss.root();

function splitSelectors(selector) {
  const result = [];
  let depth = 0;
  let quote = '';
  let start = 0;
  for (let i = 0; i < selector.length; i += 1) {
    const char = selector[i];
    if (quote) {
      if (char === quote && selector[i - 1] !== '\\') quote = '';
      continue;
    }
    if (char === '"' || char === "'") quote = char;
    else if (char === '(' || char === '[') depth += 1;
    else if (char === ')' || char === ']') depth -= 1;
    else if (char === ',' && depth === 0) {
      result.push(selector.slice(start, i).trim());
      start = i + 1;
    }
  }
  result.push(selector.slice(start).trim());
  return result.filter(Boolean);
}

function scopeContainer(container) {
  container.walkRules((rule) => {
    rule.selector = splitSelectors(rule.selector)
      .map((selector) => `.arden-react-page ${selector}`)
      .join(',\n');
  });
  return container;
}

source.nodes.forEach((node) => {
  if (node.type === 'atrule' && node.name === 'layer' && node.params === 'utilities') {
    node.each((child) => output.append(scopeContainer(child.clone())));
  }
});

output.prepend(postcss.comment({
  text: 'Generated from the React Tailwind utility layer. Run wordpress/tools/build-react-utility-compat.cjs; do not edit by hand.',
}));

fs.writeFileSync(outputPath, output.toString());
console.log(`Wrote ${outputPath}`);
