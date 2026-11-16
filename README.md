# Woorden

Neerlandés para hispanohablantes. App web instalable (funciona sin conexión).

**Abrirla:** https://carreragutierrezjavier-spec.github.io/woorden/

- **Rondas cortas** (8, 12 o 16 preguntas): repasos, palabras nuevas al azar de todos los temas, gramática y oído.
- **Palabras nuevas**: primero se preguntan. Si ya la sabes, se da por sabida; si no, se enseña con un ejemplo y vuelve unos pasos después.
  Lo que ya ha salido hoy no vuelve, salvo lo fallado (hasta tres veces).
- **Repaso espaciado** con intervalos propios de cada palabra: lo fácil se espacia rápido, lo difícil vuelve antes.
- **Vocabulario por grupos**: sustantivos, verbos, adjetivos, palabras útiles y expresiones, cada uno por temas.
- **Gramática por destrezas** (una por preposición, de/het, niet/geen, presente, pasado…): se mide el acierto
  en las últimas 20 frases y las frases se sacan del banco sin repetir. Algunas se generan solas a partir del vocabulario.
- **Escuchar**: frases para ordenar de oído, frases para entender, dictado, números y horas, pares de sonidos.
- **Conversación**: charla con Lotte y la historia de Mateo (un capítulo nuevo cada día que se cumple el objetivo).
- Cofres, ruleta, misiones, logros, azulejos con refranes y estadísticas.

El progreso se guarda solo en el dispositivo (Yo › Ajustes › Copia de seguridad).

## Añadir contenido
Todo el contenido nuevo va en `js/content/`, con las funciones de `js/content/_init.js`
(`addPrep`, `addGram`, `newGram`, `addPuz`, `addChat`, `addStory`, `addVocab`, `addVerbs`, `setPos`).
- Errores de los textos corregidos: `js/content/mios.js` (`addGram('mios',[…])`).
- Comprobar: `node tools/check-content.js [sección]`. Guía de calidad: `tools/BRIEF.md`.
- Antes de publicar: `python3 tools/build.py`. Junta todo `js/content/` en `js/contenido.js` (lo que carga la página; no se edita a mano) y sube la versión.

## Estructura
| Archivo | Qué es |
|---|---|
| `index.html`, `css/app.css` | La página y su aspecto |
| `js/data-*.js`, `js/content/*.js` | Contenido |
| `js/data-build.js` | Une el contenido: temas, grupos, destrezas y ejercicios generados |
| `js/core.js` | Estado guardado, repaso espaciado, voz y sonido |
| `js/game.js` | XP, stroopwafels, misiones, logros, cofres, ruleta, tienda |
| `js/play.js` | Los tipos de ejercicio y el final de la ronda |
| `js/plan.js` | Qué sale en cada ronda |
| `js/story.js` | La historia por capítulos |
| `js/ui.js` | Las pantallas: Hoy, Practicar, Diccionario, Yo |
| `sw.js`, `manifest.webmanifest`, `icons/`, `fonts/` | Instalación y modo sin conexión |
