import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
await mkdir('public/images', {recursive:true});
for (const name of ['coffee','food','stay']) {
 for (const width of [640,960,1200]) await sharp(`public/images/${name}.jpg`).resize(width, Math.round(width * 5/6), {fit:'cover'}).avif({quality:48}).toFile(`public/images/${name}-${width}.avif`);
 for (const width of [640,1200]) await sharp(`public/images/${name}.jpg`).resize(width, Math.round(width * 5/6), {fit:'cover'}).webp({quality:80}).toFile(`public/images/${name}-${width}.webp`);
}
for (const name of ['creator-cafe','campaign-bakery','hospitality-host']) {
 for (const width of [640,960,1200]) await sharp(`assets/generated/${name}.png`).resize(width, Math.round(width * 1.5)).avif({quality:48}).toFile(`public/images/${name}-${width}.avif`);
 for (const width of [640,1200]) await sharp(`assets/generated/${name}.png`).resize(width, Math.round(width * 1.5)).webp({quality:80}).toFile(`public/images/${name}-${width}.webp`);
}
for (const name of ['campaign-hero','campaign-food','campaign-stay']) {
 for (const width of [640,960,1200]) await sharp(`assets/generated/${name}.png`).resize(width, Math.round(width * 1.25)).avif({quality:48}).toFile(`public/images/${name}-${width}.avif`);
 for (const width of [640,1200]) await sharp(`assets/generated/${name}.png`).resize(width, Math.round(width * 1.25)).webp({quality:80}).toFile(`public/images/${name}-${width}.webp`);
}
const logo = (await readFile('public/images/infinitilabs-logo-original.png')).toString('base64');
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#ffffff"/><rect x="760" width="440" height="630" fill="#dfd500"/><image x="75" y="65" width="310" height="48" href="data:image/png;base64,${logo}"/><text x="75" y="255" font-family="Georgia" font-size="64" fill="#191919">Paket konten &amp; iklan</text><text x="75" y="335" font-family="Georgia" font-size="64" fill="#191919">untuk bisnis kuliner</text><text x="75" y="415" font-family="Georgia" font-size="64" fill="#191919">dan penginapan.</text><text x="75" y="530" font-family="Arial" font-size="22" fill="#585852">Paket khusus dari InfinitiLabs</text><text x="75" y="565" font-family="Arial" font-size="22" fill="#585852">untuk kuliner dan penginapan</text><text x="815" y="320" font-family="Georgia" font-size="90" fill="#191919">F&amp;B</text></svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/social-preview.png');
console.log('Responsive WebP assets and social preview ready.');
