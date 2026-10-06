import type { APIRoute } from 'astro';
import { site } from '../data/site';
export const GET: APIRoute = () => new Response(import.meta.env.PUBLIC_SITE_ENV === 'production' ? `User-agent: *\nAllow: /\nSitemap: ${site.base}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type':'text/plain; charset=utf-8' } });
