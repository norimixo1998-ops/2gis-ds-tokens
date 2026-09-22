const fs = require('fs');
const path = require('path');

const dir = 'tokens';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
let fail = 0;

// 1. Все файлы — валидный JSON
for (const f of files) {
  try {
    JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    console.log('OK   valid:', f);
  } catch (e) {
    fail = 1;
    console.error('FAIL invalid JSON:', f, e.message);
  }
}

const read = (f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const flat = (o, p = '') =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === 'object' && '$value' in v ? [p + k] : flat(v, p + k + '.')
  );

// 2. В semantic-слое нет hex
for (const f of files.filter((f) => f.startsWith('semantic.'))) {
  const hex = fs.readFileSync(path.join(dir, f), 'utf8').match(/"\$value":\s*"#/g);
  if (hex) { fail = 1; console.error('FAIL hex in semantic:', f, hex.length); }
  else console.log('OK   no hex:', f);
}

// 3. В primitive.color hex есть
const pcHex = (fs.readFileSync(path.join(dir, 'primitive.color.json'), 'utf8').match(/"\$value":\s*"#/g) || []).length;
if (pcHex) console.log('OK   primitive.color hex:', pcHex);
else { fail = 1; console.error('FAIL no hex in primitive.color'); }

// 4. Зеркало light/dark: пути один в один
const l = flat(read('semantic.color.light.json'));
const d = flat(read('semantic.color.dark.json'));
const miss = l.filter((x) => !d.includes(x));
const extra = d.filter((x) => !l.includes(x));
if (miss.length || extra.length) { fail = 1; console.error('FAIL mirror:', { miss, extra }); }
else console.log('OK   mirror:', l.length, 'путей в обеих темах');

process.exit(fail);