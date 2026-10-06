import type { APIRoute } from 'astro';
import { services } from '../data/services';
import { site } from '../data/site';
export const GET: APIRoute = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/',...services.map(s=>`/${s.slug}/`),'/privacy/'].map(path=>`<url><loc>${site.base}${path}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type':'application/xml' } });
