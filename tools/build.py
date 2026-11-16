#!/usr/bin/env python3
"""Prepara la app para publicar: mete en index.html todos los scripts (también los de js/content/),
sube el número de versión (para que el móvil descargue lo nuevo) y actualiza la lista del modo sin conexión en sw.js."""
import os, re
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
sw=open('sw.js').read()
v=int(re.search(r"woorden-(\d+)",sw).group(1))+1
content=['js/content/_init.js']+sorted('js/content/'+f for f in os.listdir('js/content') if f.endswith('.js') and f!='_init.js')
order=['js/data-base.js','js/data-more.js','js/data-grammar.js']+content+['js/data-build.js','js/core.js','js/game.js','js/play.js','js/plan.js','js/story.js','js/ui.js']
for f in order: assert os.path.exists(f), f
idx=open('index.html').read()
tags='\n'.join('<script src="%s?v=%d"></script>'%(f,v) for f in order)
idx=re.sub(r'<!-- js:start -->.*?<!-- js:end -->','<!-- js:start -->\n'+tags+'\n<!-- js:end -->',idx,flags=re.S)
idx=re.sub(r'css/app\.css\?v=\d+','css/app.css?v=%d'%v,idx)
open('index.html','w').write(idx)
assets=["./","index.html","manifest.webmanifest","css/app.css"+"?v=%d"%v]+[f+"?v=%d"%v for f in order]+[
 "fonts/fraunces.woff2","fonts/plex-400.woff2","fonts/plex-500.woff2","fonts/plex-600.woff2",
 "icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","icons/favicon.svg"]
sw=re.sub(r"const CACHE='woorden-\d+';","const CACHE='woorden-%d';"%v,sw)
sw=re.sub(r"const V='\?v=\d+';","const V='?v=%d';"%v,sw)
sw=re.sub(r"const ASSETS=\[.*?\];","const ASSETS="+repr(assets).replace(", ",",\n  ")+";",sw,flags=re.S)
open('sw.js','w').write(sw)
print('versión',v,'·',len(order),'scripts ·',len(content)-1,'archivos de contenido')
