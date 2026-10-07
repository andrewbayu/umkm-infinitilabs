import sharp from 'sharp';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

const ids = ['home-hero', 'home-ugc-features', 'home-menu-features', 'home-local-features', 'home-ai'];
const sourceDir = 'assets/generated/homepage-v2';
await mkdir('public/images', { recursive: true });
const manifestPath = 'art-direction/homepage-v2/manifest.json';
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

for (const id of ids) {
  const source = `${sourceDir}/${id}.png`;
  const metadata = await sharp(source).metadata();
  // Preserve the native composition. The browser fits the image to its slot.
  for (const width of [640, 960, 1200]) {
    await sharp(source).resize({ width }).avif({ quality: 58 }).toFile(`public/images/${id}-${width}.avif`);
  }
  for (const width of [640, 1200]) {
    await sharp(source).resize({ width }).webp({ quality: 86 }).toFile(`public/images/${id}-${width}.webp`);
  }
  const asset = manifest.assets.find(asset => asset.id === id);
  asset.dimensions = { width: metadata.width, height: metadata.height };
  asset.source_file = source;
  asset.file = `public/images/${id}-1200.webp`;
  asset.responsive_files = [
    ...[640, 960, 1200].map(width => `public/images/${id}-${width}.avif`),
    ...[640, 1200].map(width => `public/images/${id}-${width}.webp`),
  ];
  console.log(`${id}: ${metadata.width} × ${metadata.height}`);
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
