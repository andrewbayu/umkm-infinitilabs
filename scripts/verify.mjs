import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base = process.env.TEST_URL || 'http://127.0.0.1:4321';
const browser = await chromium.launch({channel:'msedge', headless:true});
const routes = ['/', '/creator-style-social-content/', '/signature-product-campaign/', '/local-awareness-ads/', '/privacy/'];
const widths = [360,390,768,1280,1440];
const report = { checks:[], errors:[], accessibility:[] };
await mkdir('test-results',{recursive:true});
try {
 const context = await browser.newContext();
 const page = await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 for(const route of routes){
  for(const width of widths){
   await page.setViewportSize({width,height:900});
   const response = await page.goto(base+route,{waitUntil:'networkidle'});
   assert.equal(response.status(),200,route);
   await page.evaluate(()=>document.fonts.ready);
   assert.equal(await page.locator('h1').count(),1);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth),true,`Overflow ${route} ${width}`);
   await page.locator('img').evaluateAll(images=>images.forEach(i=>i.loading='eager'));
   await page.waitForFunction(()=>Array.from(document.images).every(i=>i.complete && i.naturalWidth>0));
   assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),`https://umkm.weareinfiniti.id${route}`);
   for(const href of await page.locator('a[href^="https://wa.me/"]').evaluateAll(as=>as.map(a=>a.href))){const u=new URL(href);assert.equal(u.pathname,'/6285212924950');assert.match(u.searchParams.get('text'),/^Halo InfinitiLabs/);}
   report.checks.push(`${route} @ ${width}px: route, layout, images, metadata, WhatsApp OK`);
  }
  await page.reload({waitUntil:'networkidle'});
  await page.locator('img').evaluateAll(images=>images.forEach(i=>i.loading='eager'));
  await page.waitForFunction(()=>Array.from(document.images).every(i=>i.complete && i.naturalWidth>0));
  assert.equal(await page.locator('h1').count(),1);
  const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','best-practice']).analyze();
  report.accessibility.push({route,violations:results.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>n.target)}))});
  if(route!=='/' && route!=='/privacy/'){
   assert.equal(await page.locator('.pricing-cards .price-card').count(),2);
   assert.equal(await page.locator('.pricing-section .comparison-row').count(),7);
   const serviceName = {'/creator-style-social-content/':'Konten Media Sosial','/signature-product-campaign/':'Promosi Menu & Paket','/local-awareness-ads/':'Local Awareness Ads'}[route];
   for(const card of await page.locator('.price-card').all()){const tier=await card.locator('h3').innerText();const href=await card.locator('a').getAttribute('href');const msg=new URL(href).searchParams.get('text');assert.ok(msg.includes(tier));assert.ok(msg.includes(serviceName));assert.match(msg,/Rp[\d.]+\/bulan/);}
  }
  if(route==='/') {await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.screenshot({path:'test-results/home-desktop.png',fullPage:true});await page.screenshot({path:'test-results/desktop-fold.png'});}
 }
 await page.setViewportSize({width:390,height:844});
 await page.goto(base,{waitUntil:'networkidle'});
 await page.locator('img').evaluateAll(images=>images.forEach(i=>i.loading='eager'));
 await page.waitForFunction(()=>Array.from(document.images).every(i=>i.complete && i.naturalWidth>0));
 const mobileAxe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
 report.accessibility.push({route:'mobile /',violations:mobileAxe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))});
 await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.screenshot({path:'test-results/home-mobile.png',fullPage:true});await page.screenshot({path:'test-results/mobile-fold.png'});
 await page.locator('.mobile-menu summary').click();assert.equal(await page.locator('.mobile-menu').getAttribute('open'),'');
 await page.keyboard.press('Escape');assert.equal(await page.locator('.mobile-menu').getAttribute('open'),null);
 await page.locator('.mobile-menu summary').click();await page.locator('.mobile-menu a[href="/#strategi"]').click();assert.equal(await page.locator('.mobile-menu').getAttribute('open'),null);
 await page.locator('.faq-list summary').first().focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.faq-list details').first().getAttribute('open'),'');
 await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
 await page.goto(base+'/local-awareness-ads/',{waitUntil:'networkidle'});await page.screenshot({path:'test-results/ads-mobile.png',fullPage:true});
 // Check the package selector and contract disclosure before validating links.
 await page.goto(base+'/');
 const packageTabs=page.locator('.package-tabs [role="tab"]');
 assert.equal(await packageTabs.count(),3);
 for(let i=0;i<3;i++){
  await packageTabs.nth(i).click();
  assert.equal(await packageTabs.nth(i).getAttribute('aria-selected'),'true');
  assert.equal(await page.locator('.package-panel:visible').count(),1);
  assert.equal(await page.locator('.package-panel:visible .price-card').count(),2);
  for(const card of await page.locator('.package-panel:visible .price-card').all()){
   assert.match(await card.locator('.contract-badge').innerText(),/3 bulan/);
   assert.match(await card.locator('.contract-total').innerText(),/Dibayar per bulan/);
   assert.equal(await card.locator('.plan-delivery h4').innerText(),'Output per bulan');
   assert.match(await card.locator('.plan-scope:not(.initial-output) h4').innerText(),/SoW/);
  }
 }
 await packageTabs.first().focus();await page.keyboard.press('End');assert.equal(await packageTabs.last().getAttribute('aria-selected'),'true');
 await page.keyboard.press('Home');assert.equal(await packageTabs.first().getAttribute('aria-selected'),'true');
 // Validate all internal route and fragment targets on each page.
 for(const route of routes){await page.goto(base+route);const links=await page.locator('a').evaluateAll(as=>as.map(a=>a.getAttribute('href')).filter(h=>h?.startsWith('/')||h?.startsWith('#')));for(const href of [...new Set(links)]){const u=new URL(href,base+route);assert.ok(routes.includes(u.pathname),`Unknown route ${href}`);if(u.hash){await page.goto(u.href);assert.equal(await page.locator(u.hash).count(),1,`Missing anchor ${u.href}`);}}}
 assert.equal(report.errors.length,0);
 assert.equal(report.accessibility.flatMap(x=>x.violations).length,0,'Accessibility violations — see report');
 console.log(`PASS: ${report.checks.length} route/viewport checks, desktop + mobile WCAG scans, navigation, FAQ keyboard, links, WhatsApp, reduced motion.`);
} catch(e) {report.errors.push(e.message);throw e;} finally {await writeFile('test-results/verification.json',JSON.stringify(report,null,2));await browser.close();}
