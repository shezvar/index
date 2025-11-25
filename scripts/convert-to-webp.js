// Simple PNG→WebP converter for selected assets using sharp
// Usage: node scripts/convert-to-webp.js
// Converts:
// - public/assets/hero-image.png
// - public/assets/prowoks/*.png

import fs from 'fs';
import path from 'path';
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('Sharp is not installed. Run: npm install sharp');
  process.exit(1);
}

const root = process.cwd();
const targets = [
  path.join(root, 'public', 'assets', 'hero-image.png'),
  path.join(root, 'public', 'assets', 'prowoks'),
  path.join(root, 'public', 'assets', 'esp'),
  path.join(root, 'public', 'assets', 'dtalearner'),
  path.join(root, 'public', 'assets', 'fullgap'),
  path.join(root, 'public', 'assets', 'loystar'),
  path.join(root, 'public', 'assets', 'dtaadmin'),
];

async function convertFile(inputFile, quality = 75) {
  const ext = path.extname(inputFile).toLowerCase();
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') return;
  const outFile = inputFile.replace(ext, '.webp');
  if (fs.existsSync(outFile)) {
    console.log(`Skip (exists): ${path.relative(root, outFile)}`);
  } else {
    try {
      await sharp(inputFile)
        .webp({ quality })
        .toFile(outFile);
      const inStat = fs.statSync(inputFile);
      const outStat = fs.statSync(outFile);
      const saved = Math.max(inStat.size - outStat.size, 0);
      console.log(
        `Converted: ${path.relative(root, inputFile)} → ${path.relative(root, outFile)} (saved ${(saved/1024).toFixed(1)} KB)`
      );
    } catch (err) {
      console.error(`Failed: ${inputFile}`, err.message);
    }
  }

  // Also attempt AVIF for photographic content
  const avifOut = inputFile.replace(ext, '.avif');
  if (!fs.existsSync(avifOut)) {
    try {
      await sharp(inputFile)
        .avif({ quality: Math.min(quality + 5, 85) })
        .toFile(avifOut);
      const inStat = fs.statSync(inputFile);
      const outStat = fs.statSync(avifOut);
      const saved = Math.max(inStat.size - outStat.size, 0);
      console.log(
        `Converted AVIF: ${path.relative(root, inputFile)} → ${path.relative(root, avifOut)} (saved ${(saved/1024).toFixed(1)} KB)`
      );
    } catch (err) {
      console.warn(`AVIF failed for ${inputFile}:`, err.message);
    }
  }
}

async function convertDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) continue;
    await convertFile(p, 75);
  }
}

(async function main() {
  for (const t of targets) {
    const exists = fs.existsSync(t);
    if (!exists) {
      console.warn('Not found:', path.relative(root, t));
      continue;
    }
    const stat = fs.statSync(t);
    if (stat.isDirectory()) {
      await convertDir(t);
    } else {
      await convertFile(t, 75);
    }
  }
  console.log('Done.');
})();
