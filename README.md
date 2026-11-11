# Woorden

Neerlandés para hispanohablantes, diez minutos al día. App web instalable (funciona sin conexión).

**Abrirla:** https://carreragutierrezjavier-spec.github.io/woorden/

- Sesión diaria automática: repasos, palabras nuevas, gramática y oído.
- Repaso espaciado por días: lo que aciertas vuelve cada vez más tarde; lo que fallas, enseguida.
- Unas 1.700 palabras por temas, 268 verbos con sus formas, 68 países, 475 ejercicios de gramática,
  131 frases para montar, charla, números y horas, y pares de sonidos.
- Cofres, ruleta, misiones, logros y 53 azulejos con refranes holandeses.

El progreso se guarda solo en el dispositivo (Yo › Ajustes › Copia de seguridad).

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html`, `css/app.css` | La página y su aspecto |
| `js/data-*.js` | Contenido: vocabulario, verbos, gramática, frases, refranes |
| `js/core.js` | Estado guardado, repaso espaciado, voz y sonido |
| `js/game.js` | XP, stroopwafels, misiones, logros, cofres, ruleta, tienda |
| `js/play.js` | Cómo se arma una sesión y cada tipo de ejercicio |
| `js/ui.js` | Las cuatro pantallas: Hoy, Practicar, Palabras, Yo |
| `sw.js`, `manifest.webmanifest`, `icons/`, `fonts/` | Instalación y modo sin conexión |
