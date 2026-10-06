import { defineConfig } from 'astro/config';
export default defineConfig({ site: 'https://umkm.weareinfiniti.id', output: 'static', trailingSlash: 'always', build: { inlineStylesheets: 'always' } });
