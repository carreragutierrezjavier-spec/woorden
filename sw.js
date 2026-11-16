/* Woorden · funciona sin conexión. Con red, siempre intenta traer la versión nueva; sin red, usa la guardada. */
const CACHE='woorden-413';
const V='?v=413';
const ASSETS=['./',
  'index.html',
  'manifest.webmanifest',
  'css/app.css?v=413',
  'js/data-base.js?v=413',
  'js/data-more.js?v=413',
  'js/data-grammar.js?v=413',
  'js/content/_init.js?v=413',
  'js/content/chat-1.js?v=413',
  'js/content/chat-2.js?v=413',
  'js/content/chat-3.js?v=413',
  'js/content/chat-4.js?v=413',
  'js/content/gram-1.js?v=413',
  'js/content/gram-2.js?v=413',
  'js/content/gram-3.js?v=413',
  'js/content/gram-4.js?v=413',
  'js/content/gram-5.js?v=413',
  'js/content/gram-6.js?v=413',
  'js/content/mios.js?v=413',
  'js/content/prep-1.js?v=413',
  'js/content/prep-2.js?v=413',
  'js/content/prep-3.js?v=413',
  'js/content/prep-4.js?v=413',
  'js/content/prep-5.js?v=413',
  'js/content/prep-6.js?v=413',
  'js/content/prep-7.js?v=413',
  'js/content/puz-1.js?v=413',
  'js/content/puz-2.js?v=413',
  'js/content/puz-3.js?v=413',
  'js/content/puz-4.js?v=413',
  'js/content/puz-5.js?v=413',
  'js/content/story-1.js?v=413',
  'js/content/story-2.js?v=413',
  'js/content/story-3.js?v=413',
  'js/content/vocab-1.js?v=413',
  'js/content/vocab-2.js?v=413',
  'js/content/vocab-3.js?v=413',
  'js/content/vocab-4.js?v=413',
  'js/content/vocab-pos.js?v=413',
  'js/content/vocab-verbs.js?v=413',
  'js/data-build.js?v=413',
  'js/core.js?v=413',
  'js/game.js?v=413',
  'js/play.js?v=413',
  'js/plan.js?v=413',
  'js/story.js?v=413',
  'js/ui.js?v=413',
  'fonts/fraunces.woff2',
  'fonts/plex-400.woff2',
  'fonts/plex-500.woff2',
  'fonts/plex-600.woff2',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon.svg'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request, url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==location.origin) return;
  const fixed=/\/(fonts|icons)\//.test(url.pathname);
  e.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    if(fixed){ const hit=await cache.match(req); if(hit) return hit; }
    try{
      const ctl=new AbortController(), t=setTimeout(()=>ctl.abort(),4000);
      const res=await fetch(req,{signal:ctl.signal,cache:'no-cache'}); clearTimeout(t);
      if(res&&res.ok) cache.put(req,res.clone());
      return res;
    }catch(err){
      const hit=await cache.match(req)||await cache.match(req,{ignoreSearch:true})||(req.mode==='navigate'?await cache.match('index.html'):null);
      if(hit) return hit;
      throw err;
    }
  })());
});
