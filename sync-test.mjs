import fs from 'node:fs';
import path from 'node:path';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbzWVwgYOTSqZW-uc_1ND_DVY7rQV3R33bykutdGJjBmp6nAI6ks5-bsyyhBOq_b-ipn/exec';
const DEST_DIR = './src/pages/wiki';

async function sync(pack) {
  try {
    const response = await fetch(GAS_URL + "?Action=astro&Pack=" + pack);
    const pages = await response.json();

    pages.forEach(page => {
      const filePath = path.join(DEST_DIR, `${page.slug}.astro`);
      fs.writeFileSync(filePath, page.content);
      console.log(`Created: ${filePath}`);
    });
  } catch {
    console.log(pack);
  }
}

for (let pack = 0; pack < 17; pack++) {
  console.log(pack);
  sync(pack);
}