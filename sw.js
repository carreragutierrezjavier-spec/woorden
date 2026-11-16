/* Woorden · funciona sin conexión.
   - La página (index.html) se pide primero a la red: así siempre llega la versión nueva.
   - Los archivos con ?v=N no cambian nunca para ese número: se sirven de la caché si están y, si no, de la red,
     sin límite de tiempo. Nunca se mezcla un archivo de una versión con otro de otra.
   - Fuentes e iconos, de la caché. */
const CACHE='woorden-417';
const V='?v=417';
const ASSETS=['./',
  'index.html',
  'manifest.webmanifest',
  'css/app.css?v=417',
  'js/data-base.js?v=417',
  'js/data-more.js?v=417',
  'js/data-grammar.js?v=417',
  'js/contenido.js?v=417',
  'js/data-build.js?v=417',
  'js/core.js?v=417',
  'js/game.js?v=417',
  'js/play.js?v=417',
  'js/plan.js?v=417',
  'js/story.js?v=417',
  'js/ui.js?v=417',
  'fonts/fraunces.woff2',
  'fonts/plex-400.woff2',
  'fonts/plex-500.woff2',
  'fonts/plex-600.woff2',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon.svg'];
self.addEventListener('install',e=>{
  /* se guarda lo que se pueda: si un archivo falla, se pedirá a la red cuando haga falta */
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(a=>
    fetch(a,{cache:'no-cache'}).then(r=>{ if(r&&r.ok) return c.put(a,r); }).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
async function fromNet(req,cache,ms){
  const ctl=new AbortController(), t=ms?setTimeout(()=>ctl.abort(),ms):0;
  try{
    const res=await fetch(req,{signal:ctl.signal,cache:'no-cache'});
    if(res&&res.ok) cache.put(req,res.clone()).catch(()=>{});
    return res;
  }finally{ clearTimeout(t); }
}
self.addEventListener('fetch',e=>{
  const req=e.request, url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==location.origin) return;
  e.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    /* la página: red primero (hasta 10 s); sin red, la guardada */
    if(req.mode==='navigate'){
      try{ return await fromNet(req,cache,10000); }
      catch(err){ const hit=await cache.match('index.html')||await cache.match('./'); if(hit) return hit; throw err; }
    }
    /* archivos con versión, fuentes e iconos: caché exacta y, si no está, red */
    if(url.searchParams.has('v')||/\/(fonts|icons)\//.test(url.pathname)){
      const hit=await cache.match(req); if(hit) return hit;
      return fromNet(req,cache,0);
    }
    /* lo demás: red y, sin red, la caché */
    try{ return await fromNet(req,cache,10000); }
    catch(err){ const hit=await cache.match(req,{ignoreSearch:true}); if(hit) return hit; throw err; }
  })());
});
