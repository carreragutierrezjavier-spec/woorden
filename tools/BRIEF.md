# Woorden: guía para escribir contenido

## Para quién es
Javier: español (nacido en Santander, criado en Vigo), vive en Delft, termina el máster en TU Delft con la tesis en un astillero de superyates
y quiere ser owner's representative o project manager de superyates. Juega a waterpolo. Nivel A2 pasando a B1; objetivo B1 sólido en un año.
Aprende con cuadernos de neerlandés para hispanohablantes y con esta app (Woorden), que practica a diario.

Errores típicos suyos (úsalos como inspiración, no copies estas frases):
orden del verbo tras want/omdat/dat y tras un adverbio al principio (inversión), verbos separables (hij maakt nooit schoon),
de/het y «de hele dag», elke/alle/allemaal, abuso del pluscuamperfecto, posición de niet, «te» detrás de un modal (ik zou liever een huis te hebben ✗),
toen + verbo al final, leven/wonen, spenderen/doorbrengen, mayúsculas (Pools, maandag).

## Reglas de calidad (lo más importante)
1. Neerlandés estándar de los Países Bajos, natural, como lo diría un nativo. Español de España, natural.
2. **Una sola respuesta correcta.** Con la frase y su traducción delante, solo una opción puede valer. Prueba mentalmente cada distractor:
   si en algún contexto razonable también valdría, cámbialo. Es el fallo que más frustra al alumno.
3. **Variedad de verdad.** Sujetos distintos (ik, jij, hij, zij, we, jullie, nombres), tiempos y temas distintos. Nada de cambiar una palabra
   en la misma plantilla. Temas: vida diaria en Delft, casa compartida, compras, comida, deporte (waterpolo), estudios, trabajo en un astillero,
   proyectos y reuniones, papeleo (gemeente, huurcontract, zorgverzekering), viajes, tiempo, amigos, cultura holandesa.
4. Nivel A2–B1. Vocabulario frecuente y útil.
5. Nombres solo de pila e inventados (Lotte, Sanne, Pieter, Ahmed, Emma, Daan…). Ninguna empresa real ni datos internos de ningún astillero.
6. No repitas lo que ya existe: `grep -i` en tools/existing-sentences.tsv (frases) y tools/existing-words.tsv (palabras). El comprobador detecta repeticiones exactas.

## Formato
- Solo escribes archivos nuevos en js/content/ cuyo nombre empiece por tu sección (por ejemplo prep-1.js, prep-2.js).
  Puedes repartir el trabajo en varios archivos. No toques ningún otro archivo ni uses git.
- Cada archivo es JavaScript plano que solo llama a las funciones de js/content/_init.js (léelo: son 12 líneas).
- Cadenas entre comillas simples. Para el apóstrofo dentro de una palabra usa el tipográfico ’ (auto’s, foto’s), nunca ' sin escapar.
- Comprueba cada archivo: `node --check js/content/TU-ARCHIVO.js` y luego `node tools/check-content.js TU-SECCIÓN` hasta que diga TODO OK.
  El comprobador solo carga tus archivos; los avisos (no errores) puedes valorarlos tú.
- Al acabar, informe de 10 líneas como mucho: archivos, cuántos elementos, y cualquier duda concreta que tengas sobre algún elemento.
