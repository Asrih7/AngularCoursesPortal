const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'src', 'assets', 'external-apps', 'react-app', 'dist');

function walk(dir) {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) files.push(...walk(full));
    else if (name.endsWith('.html') || name.endsWith('.js') || name.endsWith('.css') || name.endsWith('.svg')) files.push(full);
  }
  return files;
}

const files = walk(distDir);
console.log('Found files:', files.length);

let changed = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes('/assets/')) {
    // avoid changing other absolute paths that are already correct
    const ns = s.split('/assets/').join('/assets/external-apps/react-app/dist/assets/');
    fs.writeFileSync(f, ns, 'utf8');
    changed++;
    console.log('Patched', f);
  }
}
console.log('Patched files:', changed);