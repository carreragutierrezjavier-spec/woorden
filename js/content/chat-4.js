/* Charla con Lotte · cultura, papeleo, teléfono, entrevista, sentimientos, fiestas */
addChat([

/* ---------- cultura ---------- */
{q:'Heb je al eens drop geproefd?',qe:'¿Has probado alguna vez el regaliz holandés?',o:[
 ['Ja, en ik vond het echt vies!',1,''],
 ['Ja, en ik vond het echt vies gevonden.',0,'Sobra gevonden: en pasado basta «ik vond het vies».'],
 ['Ja, en ik spuugde het uit meteen.',0,'La partícula va al final: «ik spuugde het meteen uit».']],
 r:'Haha, dat zeggen alle buitenlanders!',t:'cultura'},

{q:'Weet jij wat Delfts blauw is?',qe:'¿Sabes lo que es el azul de Delft?',o:[
 ['Nee, ik weet wat het is.',0,'Se contradice: «no» y luego «sé lo que es».'],
 ['Ja, die blauw-witte aardewerk uit Delft.',0,'aardewerk es het: «dat aardewerk»; die va con palabras de.'],
 ['Ja, dat blauw-witte aardewerk uit Delft.',1,'']],
 r:'Precies! Mijn oma heeft er een hele kast vol van.',t:'cultura'},

{q:'Waarom fietsen Nederlanders eigenlijk zoveel?',qe:'¿Por qué los holandeses van tanto en bici?',o:[
 ['Ongeveer tien kilometer per dag, denk ik.',0,'Eso dice cuánto, no por qué.'],
 ['Omdat het land zo plat is, denk ik.',1,''],
 ['Omdat het land is zo plat, denk ik.',0,'Tras omdat, el verbo va al final: «omdat het land zo plat is».']],
 r:'Klopt, en het is ook gewoon het snelst.',t:'cultura'},

{q:'Vind je het niet raar dat Nederlanders alles plannen?',qe:'¿No te parece raro que los holandeses lo planifiquen todo?',o:[
 ['In het begin wel, maar nu doe ik het zelf ook.',1,''],
 ['Nee, ik heb vanavond geen plannen.',0,'Eso dice si tienes planes; te pide tu opinión.'],
 ['In het begin wel, maar nu ik doe het zelf ook.',0,'Tras nu al principio, el verbo va antes del sujeto: «nu doe ik».']],
 r:'Haha, je bent helemaal ingeburgerd!',t:'cultura'},

{q:'Zullen we zondag naar een museum gaan?',qe:'¿Vamos a algún museo el domingo?',o:[
 ['Goed idee! Welk museum wil je gaan?',0,'Falta naar: «naar welk museum wil je (gaan)?».'],
 ['Goed idee! Naar welke museum wil je?',0,'museum es het: «welk museum»; welke va con palabras de.'],
 ['Goed idee! Naar welk museum wil je?',1,'']],
 r:'Een museum over schepen. Iets voor jou, toch?',t:'cultura'},

{q:'Weet je al wat ‘gezellig’ betekent?',qe:'¿Ya sabes lo que significa «gezellig»?',o:[
 ['Ja, het is een dorp bij Delft.',0,'gezellig no es un lugar: describe un ambiente agradable.'],
 ['Zoiets als knus en fijn samen zijn, toch?',1,''],
 ['Ja, ik weet wat het betekend.',0,'Presente con het: «het betekent», con t; betekend es el participio.']],
 r:'Precies! Dit, nu, met koffie: dat is gezellig.',t:'cultura'},

{q:'Weet je waarom er bij ons een verjaardagskalender op de wc hangt?',qe:'¿Sabes por qué tenemos un calendario de cumpleaños en el váter?',o:[
 ['Zodat je vergeet geen verjaardag?',0,'Tras zodat, el verbo va al final: «zodat je geen verjaardag vergeet».'],
 ['Zodat je geen verjaardag vergeet?',1,''],
 ['Achter de deur, naast het raampje.',0,'Eso dice dónde está; te pregunta por qué.']],
 r:'Precies! Daar kijk je elke dag wel even.',t:'cultura'},

{q:'Praten mensen hier vaak Engels tegen je?',qe:'¿La gente aquí te habla mucho en inglés?',o:[
 ['Ja, zodra ze horen mijn accent, gaan ze Engels spreken.',0,'Tras zodra, el verbo va al final: «zodra ze mijn accent horen».'],
 ['Ja, zodra ze mijn accent horen, ze gaan Engels spreken.',0,'Si la frase empieza con una subordinada, luego va el verbo: «gaan ze».'],
 ['Ja, zodra ze mijn accent horen, gaan ze Engels spreken.',1,'']],
 r:'Zeg dan gewoon: ‘Nederlands graag, ik wil oefenen!’',t:'cultura'},

/* ---------- papeleo ---------- */
{q:'Goedemorgen, heeft u een afspraak?',qe:'Buenos días, ¿tiene cita?',o:[
 ['Ja, om half elf, voor me in te schrijven.',0,'«Para + infinitivo» es om … te: «om me in te schrijven».'],
 ['Ja, om half elf, om me in te schrijven.',1,''],
 ['Nee, dank u, ik kijk alleen even rond.',0,'Eso se dice en una tienda; aquí te preguntan si tienes cita.']],
 r:'Prima. Mag ik uw paspoort en huurcontract zien?',t:'papeleo'},

{q:'Heb je al een burgerservicenummer?',qe:'¿Ya tienes el BSN, el número de ciudadano?',o:[
 ['Ja, dat kreeg ik toen ik me inschreef.',1,''],
 ['Ja, dat kreeg ik toen ik schreef me in.',0,'Tras toen, el verbo va al final y el separable junto: «toen ik me inschreef».'],
 ['Ja, dat heb ik gekrijgd bij de gemeente.',0,'El participio de krijgen es gekregen.']],
 r:'Mooi, dan kun je ook een bankrekening openen.',t:'papeleo'},

{q:'Heb je je zorgverzekering al geregeld?',qe:'¿Ya tienes arreglado el seguro médico?',o:[
 ['Ongeveer honderdveertig euro per maand.',0,'Eso dice cuánto cuesta; te pregunta si ya lo tienes.'],
 ['Ja, sinds vorige maand ben ik verzekerd.',1,''],
 ['Ja, sinds vorige maand ik ben verzekerd.',0,'Tras «sinds vorige maand» al principio, el verbo va antes del sujeto: «ben ik».']],
 r:'Goed zo, dat is hier verplicht.',t:'papeleo'},

{q:'Wilt u dit formulier even invullen?',qe:'¿Puede rellenar este formulario?',o:[
 ['Natuurlijk. Mag ik u pen even lenen?',0,'«Su» (de usted) es uw: «uw pen».'],
 ['Natuurlijk. Mag ik uw pen even uitlenen?',0,'uitlenen es prestar a otro; para pedir prestado, lenen.'],
 ['Natuurlijk. Mag ik uw pen even lenen?',1,'']],
 r:'Alstublieft. En vergeet niet onderaan te tekenen.',t:'papeleo'},

{q:'Heb je het huurcontract al getekend?',qe:'¿Ya has firmado el contrato de alquiler?',o:[
 ['Nog niet, ik wil het eerst rustig lezen.',1,''],
 ['Voor een jaar, tot volgende zomer.',0,'Eso dice cuánto dura el contrato; te pregunta si ya lo has firmado.'],
 ['Nog niet, ik lees het eerst voordat ik teken het.',0,'Tras voordat, el verbo va al final: «voordat ik het teken».']],
 r:'Verstandig. Let vooral op de opzegtermijn.',t:'papeleo'},

{q:'Weet je wat je moet doen als je verhuist?',qe:'¿Sabes qué hay que hacer cuando te mudas?',o:[
 ['Naar een groter huis in het centrum.',0,'Eso dice adónde te mudas; te pregunta qué hay que hacer.'],
 ['Je nieuw adres doorgeven aan de gemeente.',0,'Tras un posesivo, el adjetivo lleva -e: «je nieuwe adres».'],
 ['Je nieuwe adres doorgeven aan de gemeente.',1,'']],
 r:'Klopt, en dat kan gewoon online.',t:'papeleo'},

{q:'Waarom moet je naar het Spaanse consulaat?',qe:'¿Por qué tienes que ir al consulado español?',o:[
 ['Omdat mijn paspoort verloopt bijna.',0,'En la subordinada, el verbo va al final: «omdat mijn paspoort bijna verloopt».'],
 ['Omdat mijn paspoort bijna verloopt.',1,''],
 ['Mijn paspoort verloopt, ik moet het laten verlangen.',0,'verlangen es «anhelar»; «renovar» es verlengen.']],
 r:'Maak snel een afspraak, het is daar altijd druk.',t:'papeleo'},

/* ---------- teléfono ---------- */
{q:'Hallo, met Lotte. Spreek ik met Javier?',qe:'Hola, soy Lotte. ¿Hablo con Javier?',o:[
 ['Ja, daar spreek je mee!',1,''],
 ['Ja, ik spreek met Javier.',0,'Eso es «hablo con Javier»; para decir que eres tú: «daar spreek je mee».'],
 ['Ja, daar spreek je met!',0,'Al final de la frase, met se convierte en mee.']],
 r:'Hoi! Heb je even tijd om te praten?',t:'telefono'},

{q:'Kun je me straks even terugbellen?',qe:'¿Me puedes devolver la llamada luego?',o:[
 ['Ja hoor, ik bel jij over een uurtje terug.',0,'Como objeto se usa je o jou, nunca jij.'],
 ['Ja hoor, ik bel je over een uurtje terug.',1,''],
 ['Ja hoor, ik terugbel je over een uurtje.',0,'terugbellen es separable: «ik bel je … terug».']],
 r:'Top, dan ben ik weer thuis.',t:'telefono'},

{q:'Hallo, is Pieter daar?',qe:'Hola, ¿está Pieter?',o:[
 ['Nee, u heeft verkeerd verbonden.',0,'La frase hecha va con zijn: «u bent verkeerd verbonden».'],
 ['Nee, er woont hier niemand die heet Pieter.',0,'Con die, el verbo va al final: «die Pieter heet».'],
 ['Nee, u bent verkeerd verbonden, denk ik.',1,'']],
 r:'O, neem me niet kwalijk!',t:'telefono'},

{q:'Hallo? Hoor je me nog?',qe:'¿Hola? ¿Me sigues oyendo?',o:[
 ['Nauwelijks, het bereik is hier geen goed.',0,'Con un adjetivo se niega con niet: «niet goed».'],
 ['Nauwelijks, je valt steeds weg.',1,''],
 ['Nauwelijks, je valt steeds af.',0,'«Se corta» es wegvallen; afvallen es adelgazar.']],
 r:'Ik bel je zo terug via de wifi.',t:'telefono'},

{q:'Hij is er nu niet. Wilt u een bericht achterlaten?',qe:'Ahora no está. ¿Quiere dejar un mensaje?',o:[
 ['Ja, wilt u zeggen dat Javier heeft gebeld?',1,''],
 ['Ja, wilt u vertellen hem dat ik heb gebeld?',0,'El infinitivo va al final: «wilt u hem vertellen…».'],
 ['Ja, wilt u zeggen dat Javier is gebeld?',0,'«Is gebeld» significa «le han llamado»; «ha llamado» es «heeft gebeld».']],
 r:'Natuurlijk. Heeft hij uw nummer?',t:'telefono'},

/* ---------- entrevista ---------- */
{q:'Waarom wilt u graag bij ons werken?',qe:'¿Por qué quiere trabajar con nosotros?',o:[
 ['Omdat uw jachten zijn de mooiste.',0,'Tras omdat, el verbo va al final: «omdat uw jachten de mooiste zijn».'],
 ['Ik wil ervaring opdoen met grote, complexe projecten.',1,''],
 ['Ik wil ervaring winnen met grote, complexe projecten.',0,'«Ganar experiencia» es ervaring opdoen, no winnen.']],
 r:'Dat is precies wat wij zoeken.',t:'entrevista'},

{q:'Wat zijn uw sterke punten?',qe:'¿Cuáles son sus puntos fuertes?',o:[
 ['Ik ben nauwkeurig en ik kan goed plannen.',1,''],
 ['Ik ben soms een beetje ongeduldig.',0,'Eso es un punto débil; te preguntan por los fuertes.'],
 ['Ik ben nauwkeurig en ik kan plannen goed.',0,'El infinitivo va al final: «ik kan goed plannen».']],
 r:'Mooi. Kunt u daar een voorbeeld van geven?',t:'entrevista'},

{q:'Heeft u ervaring met projectmanagement?',qe:'¿Tiene experiencia en gestión de proyectos?',o:[
 ['Ja, tijdens mijn stage ik heb een klein project geleid.',0,'Tras «tijdens mijn stage» al principio, el verbo va antes del sujeto: «heb ik».'],
 ['Ja, tijdens mijn stage heb ik een kleine project geleid.',0,'project es het: con een, el adjetivo va sin -e: «een klein project».'],
 ['Ja, tijdens mijn stage heb ik een klein project geleid.',1,'']],
 r:'Interessant. Wat was het lastigste daaraan?',t:'entrevista'},

{q:'Wanneer zou u kunnen beginnen?',qe:'¿Cuándo podría empezar?',o:[
 ['Om negen uur ’s ochtends.',0,'Te preguntan desde qué fecha, no a qué hora del día.'],
 ['Vanaf maart, als ik ben afgestudeerd.',1,''],
 ['Vanaf maart, als ik heb afgestudeerd.',0,'afstuderen forma el perfecto con zijn: «als ik ben afgestudeerd».']],
 r:'Dat komt goed uit, dan start het nieuwe project.',t:'entrevista'},

{q:'Waar ziet u uzelf over vijf jaar?',qe:'¿Dónde se ve dentro de cinco años?',o:[
 ['Ik hoop dan grote projecten te leiden.',1,''],
 ['Ik hoop dan grote projecten leiden.',0,'Tras hopen, el infinitivo lleva te: «ik hoop … te leiden».'],
 ['Vijf jaar geleden was ik nog student.',0,'Eso habla del pasado; te preguntan por dentro de cinco años.']],
 r:'Ambitieus! Dat horen we graag.',t:'entrevista'},

{q:'Wat is uw grootste zwakte?',qe:'¿Cuál es su mayor punto débil?',o:[
 ['Ik ben heel flexibel en altijd positief.',0,'Eso son puntos fuertes; te preguntan por tu punto débil.'],
 ['Mijn Nederlands is nog niet perfect, maar ik leer snel.',1,''],
 ['Mijn Nederlands is niet nog perfect, maar ik leer snel.',0,'«Todavía no» es nog niet, en ese orden.']],
 r:'Eerlijk antwoord. En u spreekt het al goed!',t:'entrevista'},

{q:'Heeft u zelf nog vragen voor ons?',qe:'¿Tiene alguna pregunta para nosotros?',o:[
 ['Ja, ik heb geen vragen meer.',0,'Se contradice: «sí» y luego «no tengo preguntas».'],
 ['Ja, hoe uitziet een normale werkdag?',0,'eruitzien es separable: «hoe ziet … eruit?».'],
 ['Ja, hoe ziet een normale werkdag eruit?',1,'']],
 r:'Goede vraag. Meestal begint die met een overleg.',t:'entrevista'},

/* ---------- sentimientos ---------- */
{q:'Heb je weleens heimwee?',qe:'¿Te entra la morriña alguna vez?',o:[
 ['Ja, ik mis aan mijn familie.',0,'missen va sin preposición: «ik mis mijn familie».'],
 ['Soms, vooral naar het eten en de zee.',1,''],
 ['Soms, vooral van het eten en de zee.',0,'heimwee va con naar: «heimwee naar de zee».']],
 r:'Dat snap ik. Zullen we een keer Spaans koken?',t:'sentimientos'},

{q:'Ben je zenuwachtig voor je presentatie morgen?',qe:'¿Estás nervioso por tu presentación de mañana?',o:[
 ['Een beetje, maar ik heb goed geoefend.',1,''],
 ['Om twee uur, in zaal drie.',0,'Eso dice cuándo y dónde; te pregunta si estás nervioso.'],
 ['Een beetje, maar ik ben goed geoefend.',0,'oefenen forma el perfecto con hebben: «ik heb geoefend».']],
 r:'Komt goed! Ik duim voor je.',t:'sentimientos'},

{q:'Waar word jij echt blij van?',qe:'¿Qué te hace feliz de verdad?',o:[
 ['Ik word blij als schijnt de zon.',0,'Tras als, sujeto y verbo al final: «als de zon schijnt».'],
 ['Op een goede wedstrijd en een zonnige dag.',0,'«Alegrarse con algo» es blij worden van: «van een goede wedstrijd».'],
 ['Van een goede wedstrijd en een zonnige dag.',1,'']],
 r:'Mooi! Bij mij is het koffie en een goed boek.',t:'sentimientos'},

{q:'Waarom ben je zo boos?',qe:'¿Por qué estás tan enfadado?',o:[
 ['Mijn huisgenoot heeft mijn eten opgegeten!',1,''],
 ['Mijn huisgenoot heeft opgegeten mijn eten!',0,'El participio va al final: «heeft mijn eten opgegeten».'],
 ['Mijn huisgenoot heeft mijn eten geopeten!',0,'En los separables, ge va tras la partícula: «opgegeten».']],
 r:'Wat gemeen! Zet er de volgende keer je naam op.',t:'sentimientos'},

{q:'Ben je blij dat je naar Nederland bent gekomen?',qe:'¿Te alegras de haber venido a Holanda?',o:[
 ['Ja, ik heb er echt spijt van.',0,'Eso significa «me arrepiento»; se contradice con «ja».'],
 ['Ja, ik heb echt geen spijt van.',0,'Falta er: «ik heb er geen spijt van».'],
 ['Ja, ik heb er echt geen spijt van.',1,'']],
 r:'Wat fijn! Wij zijn ook blij met jou.',t:'sentimientos'},

{q:'Hoe voel je je na zo’n lange week?',qe:'¿Cómo te sientes después de una semana tan larga?',o:[
 ['Doodmoe, ik ga vanavond vroeg naar bed.',1,''],
 ['Lang, wel vijftig uur gewerkt.',0,'Eso dice cuánto trabajaste; te pregunta cómo te sientes.'],
 ['Doodmoe, ik ga vanavond vroeg naar de bed.',0,'«A la cama» es naar bed, sin artículo.']],
 r:'Terecht. Slaap lekker en geniet van het weekend.',t:'sentimientos'},

/* ---------- fiestas ---------- */
{q:'Vieren jullie in Spanje ook Sinterklaas?',qe:'¿En España también celebráis Sinterklaas?',o:[
 ['Op vijf december, met surprises en gedichten.',0,'Eso describe la fiesta holandesa; te pregunta si se celebra en España.'],
 ['Nee, bij ons brengen de Drie Koningen de cadeaus.',1,''],
 ['Nee, bij ons de Drie Koningen brengen de cadeaus.',0,'Tras «bij ons» al principio, el verbo va antes del sujeto: «brengen de Drie Koningen».']],
 r:'O ja, op zes januari toch? Wat leuk!',t:'fiestas'},

{q:'Heb je al kerstcadeautjes gekocht?',qe:'¿Ya has comprado los regalos de Navidad?',o:[
 ['Nog niet, ik doe het altijd in het laatste moment.',0,'«En el último momento» es op het laatste moment.'],
 ['Nog niet, ik doe het altijd op het laatste moment.',1,''],
 ['Nog niet, ik doe het altijd op de laatste moment.',0,'moment es het: «op het laatste moment».']],
 r:'Ik ook! Zullen we samen gaan shoppen?',t:'fiestas'},

{q:'Ga je met Koningsdag naar Amsterdam?',qe:'¿Vas a Ámsterdam el Día del Rey?',o:[
 ['Nee, daar is het me te druk.',1,''],
 ['Op zevenentwintig april, toch?',0,'Eso dice cuándo es; te pregunta si vas a Ámsterdam.'],
 ['Nee, daar is het me te veel druk.',0,'«Demasiado lleno» es te druk; te veel va con sustantivos.']],
 r:'Verstandig. In Delft is het ook heel gezellig.',t:'fiestas'},

{q:'Kom je zaterdag op mijn verjaardag?',qe:'¿Vienes el sábado a mi cumpleaños?',o:[
 ['Natuurlijk! Hoeveel jaar heb je eigenlijk?',0,'La edad va con zijn o worden: «hoe oud word je?».'],
 ['Ik ben zelf in mei jarig.',0,'Eso dice cuándo es tu cumpleaños; te pregunta si vas al suyo.'],
 ['Natuurlijk! Hoe oud word je eigenlijk?',1,'']],
 r:'Dertig! Dus het wordt een groot feest.',t:'fiestas'},

{q:'Mijn moeder is vandaag jarig. Kom je straks taart eten?',qe:'Mi madre cumple años hoy. ¿Vienes luego a comer tarta?',o:[
 ['Gefeliciteerd met je moeder! Ik kom graag.',1,''],
 ['Gecondoleerd met je moeder! Ik kom graag.',0,'«Gecondoleerd» es el pésame; para un cumpleaños, «gefeliciteerd».'],
 ['Beterschap voor je moeder! Ik kom graag.',0,'«Beterschap» es «que se mejore»; aquí toca «gefeliciteerd».']],
 r:'Dank je! Ze vindt het vast leuk dat je komt.',t:'fiestas'},

{q:'Heb je je sinterklaasgedicht al geschreven?',qe:'¿Ya has escrito tu poema de Sinterklaas?',o:[
 ['Een boek over zeilen, voor Daan.',0,'Eso dice qué regalo has comprado; te pregunta por el poema.'],
 ['Bijna, maar rijmen in het Nederlands is lastig!',1,''],
 ['Ja, ik heb hem gisteren geschrijven.',0,'El participio de schrijven es geschreven.']],
 r:'Haha, het hoeft niet perfect te zijn!',t:'fiestas'}

]);
