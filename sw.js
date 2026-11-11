/* Woorden · funciona sin conexión. Con red, siempre intenta traer la versión nueva; sin red, usa la guardada. */
const CACHE='woorden-404';
const V='?v=404';
const ASSETS=['./','index.html','manifest.webmanifest','css/app.css'+V,
  'js/data-base.js'+V,'js/data-more.js'+V,'js/data-grammar.js'+V,'js/data-build.js'+V,'js/core.js'+V,'js/game.js'+V,'js/play.js'+V,'js/ui.js'+V,
  'fonts/fraunces.woff2','fonts/plex-400.woff2','fonts/plex-500.woff2','fonts/plex-600.woff2',
  'icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/favicon.svg'];
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
