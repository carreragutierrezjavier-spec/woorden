/* Generado por tools/build.py a partir de js/content/*.js. No editar aquí. */

/* ---- js/content/_init.js ---- */
/* Woorden · contenido ampliado. Este archivo se carga antes que los demás de js/content/ y define dónde se guarda cada cosa.
   Cada archivo de contenido solo llama a estas funciones. */
var PREP_BANK=[], GR_MORE={}, GR_NEW={}, PUZ_ADD={}, PUZ_NAMES={}, CHAT_ADD=[], STORY=[], VOCAB_ADD=[], VERBS_ADD=[], POS={}, PROPER_ADD=[];

/* preposiciones: [frase con ___, respuesta, 'mal|mal|mal', traducción, pista] */
function addPrep(items){ PREP_BANK.push(...items); }
/* más ejercicios para una destreza de gramática que ya existe o que se crea con newGram */
function addGram(skill,items){ (GR_MORE[skill]=GR_MORE[skill]||[]).push(...items); }
/* destreza nueva: {n:'Nombre', ref:'§…', lv:1|2|3, tip:'explicación corta', grp:'verbos'|'articulos'|'orden'|'otros'} */
function newGram(skill,def){ GR_NEW[skill]=def; }
/* frases para montar: grupo existente o nuevo (con nombre) */
function addPuz(key,items,name){ (PUZ_ADD[key]=PUZ_ADD[key]||[]).push(...items); if(name) PUZ_NAMES[key]=name; }
function addChat(items){ CHAT_ADD.push(...items); }
function addStory(chapter){ STORY.push(chapter); }
/* vocabulario: tema existente (name null) o nuevo; lv 1 básico · 2 intermedio · 3 trabajo y vida en Holanda */
function addVocab(theme,name,lv,str){ VOCAB_ADD.push([theme,name,lv,str]); }
function addVerbs(rows){ VERBS_ADD.push(...rows); }
function setPos(map){ Object.assign(POS,map); }
function addProper(list){ PROPER_ADD.push(...list); }

/* ---- js/content/chat-1.js ---- */
/* Charla con Lotte · presentarse, trabajo, estudios, deporte */
addChat([

/* ---------- presentarse ---------- */
{q:'Uit welk deel van Spanje kom je?',qe:'¿De qué parte de España eres?',o:[
 ['Ik ga in de zomer naar het noorden.',0,'Eso dice adónde vas en verano, no de dónde eres.'],
 ['Uit Galicië. Ik ben in Vigo opgegroeid.',1,''],
 ['Uit Galicië. Ik heb in Vigo opgegroeid.',0,'opgroeien forma el perfecto con zijn: «ik ben opgegroeid».']],
 r:'Galicië! Daar is het eten vast heerlijk.',t:'presentarse'},

{q:'Wat brengt jou naar Delft?',qe:'¿Qué te trae por Delft?',o:[
 ['Mijn studie: ik doe een master aan de TU.',1,''],
 ['De trein van half negen.',0,'«¿Qué te trae?» pregunta el motivo, no el medio de transporte.'],
 ['Mijn studie: ik doe een master in de TU.',0,'En una universidad se estudia con aan: «aan de TU».']],
 r:'Knap! En bevalt Delft je een beetje?',t:'presentarse'},

{q:'Hoe spreek je je naam uit?',qe:'¿Cómo se pronuncia tu nombre?',o:[
 ['J, a, v, i, e, r.',0,'Eso es deletrear; te pregunta cómo se pronuncia.'],
 ['Je uitspreekt de j als een Nederlandse g.',0,'uitspreken es separable: «je spreekt de j uit als…».'],
 ['De j spreek je uit als een Nederlandse g.',1,'']],
 r:'O, met een harde g! Dat kunnen wij wel.',t:'presentarse'},

{q:'Welke talen spreek je allemaal?',qe:'¿Qué idiomas hablas?',o:[
 ['Ik ben Spaans en Engels.',0,'Eso son nacionalidades; para idiomas: «ik spreek…».'],
 ['Spaans en Engels, en nu ook een beetje Nederland.',0,'Nederland es el país; el idioma es Nederlands.'],
 ['Spaans en Engels, en nu ook een beetje Nederlands.',1,'']],
 r:'Drie talen, knap hoor!',t:'presentarse'},

{q:'Hoe lang blijf je nog in Nederland?',qe:'¿Cuánto tiempo más te vas a quedar en Holanda?',o:[
 ['Als ik werk vind, blijf ik hier.',1,''],
 ['Al bijna twee jaar.',0,'Eso es lo que llevas aquí; te pregunta cuánto te vas a quedar.'],
 ['Als ik werk vind, ik blijf hier.',0,'Tras una subordinada al principio va el verbo: «blijf ik».']],
 r:'Mooi, dan word je nog een echte Delftenaar.',t:'presentarse'},

{q:'Hoe ken jij Sanne eigenlijk?',qe:'¿Y tú de qué conoces a Sanne?',o:[
 ['Ik weet haar van waterpolo.',0,'A las personas se las conoce con kennen; weten es saber un dato.'],
 ['Heel goed, ze is erg aardig.',0,'«Hoe ken je…?» pregunta de qué la conoces, no cuánto.'],
 ['Van waterpolo, we spelen bij dezelfde club.',1,'']],
 r:'O, dus jij bent die Spanjaard uit haar team!',t:'presentarse'},

{q:'Wat doe je in je vrije tijd?',qe:'¿Qué haces en tu tiempo libre?',o:[
 ['Ik kook graag en ik speel waterpolo.',1,''],
 ['Ik graag kook en ik speel waterpolo.',0,'graag va detrás del verbo conjugado: «ik kook graag».'],
 ['Ik heb op vrijdag vrij.',0,'Eso dice cuándo libras, no qué haces.']],
 r:'Wat kook je dan het liefst?',t:'presentarse'},

{q:'Jij bent de nieuwe afstudeerder, toch?',qe:'Tú eres el nuevo que viene a hacer la tesis, ¿no?',o:[
 ['Klopt, ik ben de nieuw afstudeerder.',0,'Tras de, el adjetivo lleva -e: «de nieuwe afstudeerder».'],
 ['Klopt, ik ben Javier. Ik ben vandaag begonnen.',1,''],
 ['Klopt, ik ben Javier. Ik heb vandaag begonnen.',0,'beginnen forma el perfecto con zijn: «ik ben begonnen».']],
 r:'Welkom aan boord! Ik ben Lotte, van de planning.',t:'presentarse'},

{q:'Ben je getrouwd?',qe:'¿Estás casado?',o:[
 ['Nee, ik ben geen getrouwd.',0,'Con un adjetivo se niega con niet: «niet getrouwd».'],
 ['Nee, ik heb niet getrouwd.',0,'Estar casado es getrouwd zijn: «ik ben niet getrouwd».'],
 ['Nee, maar ik heb wel een vriendin.',1,'']],
 r:'O, leuk! Woont ze ook in Nederland?',t:'presentarse'},

{q:'Hoe noemen je vrienden jou eigenlijk?',qe:'¿Cómo te llaman tus amigos?',o:[
 ['Meestal Javi, dat is korter.',1,''],
 ['Meestal heten ze me Javi.',0,'heten es «llamarse»; «llamar a alguien algo» es noemen.'],
 ['Meestal bellen ze me Javi.',0,'bellen es llamar por teléfono; aquí es noemen.']],
 r:'Javi! Leuk, dat ga ik ook zeggen.',t:'presentarse'},

/* ---------- trabajo ---------- */
{q:'Hoe lang duurt de vergadering?',qe:'¿Cuánto dura la reunión?',o:[
 ['Om tien uur, in de grote zaal.',0,'Eso dice cuándo y dónde; te pregunta cuánto dura.'],
 ['Een uurtje, tot ongeveer elf uur.',1,''],
 ['Het vergadering duurt een uurtje.',0,'Las palabras en -ing son de: «de vergadering».']],
 r:'Mooi, dan kunnen we daarna samen lunchen.',t:'trabajo'},

{q:'Heb je de tekeningen al naar de klant gestuurd?',qe:'¿Ya le has mandado los planos al cliente?',o:[
 ['Ja, ik heb hen gisteren gestuurd.',0,'hen es solo para personas; para cosas se dice ze.'],
 ['Nee, vanmiddag ik stuur ze.',0,'Si empiezas por vanmiddag, el verbo va antes del sujeto: «stuur ik».'],
 ['Nee, dat doe ik vanmiddag.',1,'']],
 r:'Prima, zet mij maar in de cc.',t:'trabajo'},

{q:'Kun jij de notulen maken?',qe:'¿Puedes encargarte del acta?',o:[
 ['Ja hoor, ik stuur ze vanmiddag rond.',1,''],
 ['Graag gedaan.',0,'«Graag gedaan» es «de nada»; aquí te piden un favor.'],
 ['Ja hoor, ik rondstuur ze vanmiddag.',0,'rondsturen es separable: «ik stuur ze rond».']],
 r:'Top, dank je! Dan hoef ik het niet te doen.',t:'trabajo'},

{q:'Werk je vandaag thuis of op de werf?',qe:'¿Hoy trabajas en casa o en el astillero?',o:[
 ['Ja, ik werk vandaag.',0,'Te da a elegir entre dos sitios; «ja» no responde.'],
 ['Op de werf, ik moet een inspectie doen.',1,''],
 ['Op de werf, ik moet een inspectie te doen.',0,'Tras moeten, el infinitivo va sin te.']],
 r:'Vergeet je veiligheidsschoenen niet!',t:'trabajo'},

{q:'Hoe vaak hebben jullie overleg met de eigenaar?',qe:'¿Cada cuánto tenéis reunión con el propietario?',o:[
 ['Ongeveer twee uur per keer.',0,'Eso dice cuánto dura, no cada cuánto.'],
 ['Elk maand, meestal online.',0,'maand es de: «elke maand» (elk solo va con palabras het).'],
 ['Eén keer per maand, meestal online.',1,'']],
 r:'En de rest van de tijd mailen jullie?',t:'trabajo'},

{q:'Heb je het druk deze week?',qe:'¿Vas muy liado esta semana?',o:[
 ['Ja, vrijdag moet ik mijn rapport inleveren.',1,''],
 ['Nee, ik heb het heel druk.',0,'Se contradice: «no» y luego «estoy muy liado».'],
 ['Ja, het is heel druk op de weg.',0,'Eso habla del tráfico; te pregunta si tú estás liado.']],
 r:'Succes! Laat maar weten als ik kan helpen.',t:'trabajo'},

{q:'Hoe is je begeleider op de werf?',qe:'¿Qué tal es tu tutor en el astillero?',o:[
 ['Hij heet Pieter.',0,'Eso es su nombre; te pregunta cómo es.'],
 ['Aardig, maar hij heeft bijna nooit tijd.',1,''],
 ['Aardig, maar hij heeft nooit geen tijd.',0,'nooit ya niega: «hij heeft nooit tijd», sin geen.']],
 r:'Herkenbaar! Plan gewoon een vaste afspraak met hem.',t:'trabajo'},

{q:'Wie zijn er donderdag allemaal bij het overleg?',qe:'¿Quiénes vienen el jueves a la reunión?',o:[
 ['In de vergaderzaal op de eerste verdieping.',0,'Eso dice dónde es, no quién viene.'],
 ['Van tien tot twaalf.',0,'Eso dice a qué hora es, no quién viene.'],
 ['De projectleider, de kapitein en ik.',1,'']],
 r:'Prima, dan regel ik koffie voor vier.',t:'trabajo'},

{q:'Wanneer moet het jacht klaar zijn?',qe:'¿Cuándo tiene que estar terminado el yate?',o:[
 ['In april, vlak voor het zomerseizoen.',1,''],
 ['Op april, vlak voor het zomerseizoen.',0,'Con los meses se usa in: «in april».'],
 ['Het is zestig meter lang.',0,'Eso dice cuánto mide, no cuándo estará listo.']],
 r:'Dat wordt nog flink doorwerken dus.',t:'trabajo'},

{q:'Heb je gisteren overgewerkt?',qe:'¿Ayer hiciste horas extra?',o:[
 ['Ja, ik heb pas om acht uur naar huis gegaan.',0,'gaan forma el perfecto con zijn: «ik ben gegaan».'],
 ['Ja, ik ben pas om acht uur naar huis gegaan.',1,''],
 ['Ja, ik ben pas om acht uur naar thuis gegaan.',0,'«A casa» es naar huis; thuis significa «en casa».']],
 r:'Doe het vandaag dan maar rustig aan.',t:'trabajo'},

{q:'Stoor ik even?',qe:'¿Te molesto un momento?',o:[
 ['Graag gedaan, kom maar binnen.',0,'«Graag gedaan» es «de nada»; nadie te ha dado las gracias.'],
 ['Nee hoor, kom maar buiten.',0,'buiten es «fuera»; «pasa» es kom maar binnen.'],
 ['Nee hoor, kom maar binnen.',1,'']],
 r:'Heb je vijf minuutjes voor me?',t:'trabajo'},

{q:'Hoeveel mensen werken er op de werf?',qe:'¿Cuánta gente trabaja en el astillero?',o:[
 ['Een stuk of driehonderd, denk ik.',1,''],
 ['Ze werken er al dertig jaar.',0,'Eso dice desde hace cuánto, no cuántas personas.'],
 ['Er is ongeveer driehonderd mensen.',0,'En plural es «er zijn»; no es invariable como «hay».']],
 r:'Zoveel? Dan ken je vast nog niet iedereen.',t:'trabajo'},

{q:'Heb je de nieuwe planning al gezien?',qe:'¿Has visto ya la nueva planificación?',o:[
 ['Nee, ik heb hem nog geen gezien.',0,'Para negar un verbo se usa niet: «nog niet gezien».'],
 ['Ja, de oplevering is nu een maand later.',1,''],
 ['Ja, de oplevering is nu een maand meer laat.',0,'El comparativo de laat es later, no «meer laat».']],
 r:'Precies. De eigenaar zal er niet blij mee zijn.',t:'trabajo'},

{q:'Weet jij of de eigenaar morgen ook komt?',qe:'¿Sabes si el propietario viene también mañana?',o:[
 ['Nee, dat ken ik niet.',0,'Saber un dato es weten: «dat weet ik niet».'],
 ['Geen idee, ik vraag het even aan Pieter.',1,''],
 ['Geen idee, ik vraag het even voor Pieter.',0,'«Preguntarle a alguien» es vragen aan; voor es «para».']],
 r:'Graag, dan kan ik de rondleiding plannen.',t:'trabajo'},

/* ---------- estudios ---------- */
{q:'Waar gaat je scriptie over?',qe:'¿De qué trata tu tesis?',o:[
 ['Over drie maanden.',0,'«Over drie maanden» es «dentro de tres meses»; te pregunta de qué trata.'],
 ['Het gaat goed, dank je.',0,'«Waar gaat het over?» pregunta el tema, no qué tal va.'],
 ['Over geluid en trillingen aan boord van jachten.',1,'']],
 r:'Klinkt ingewikkeld, maar wel heel nuttig!',t:'estudios'},

{q:'Wanneer moet je je scriptie inleveren?',qe:'¿Cuándo tienes que entregar la tesis?',o:[
 ['Eind januari, als alles goed gaat.',1,''],
 ['Eind januari, als alles gaat goed.',0,'Tras als, el verbo va al final: «als alles goed gaat».'],
 ['Ongeveer zestig pagina’s.',0,'Eso dice cuánto ocupa, no cuándo la entregas.']],
 r:'Dan heb je nog even. Hou vol!',t:'estudios'},

{q:'Hoe ging je toets Nederlands gisteren?',qe:'¿Qué tal te fue ayer el examen de neerlandés?',o:[
 ['Morgen om negen uur, in lokaal drie.',0,'Eso dice cuándo es; el examen ya fue ayer.'],
 ['Best goed, ik denk dat ik het gehaald heb.',1,''],
 ['Best goed, ik denk dat ik heb het gehaald.',0,'Tras dat, los verbos van al final: «dat ik het gehaald heb».']],
 r:'Super! Wanneer krijg je de uitslag?',t:'estudios'},

{q:'Studeer je liever thuis of in de bibliotheek?',qe:'¿Prefieres estudiar en casa o en la biblioteca?',o:[
 ['Thuis, want daar kan ik muziek luisteren.',0,'luisteren lleva naar: «naar muziek luisteren».'],
 ['In de bibliotheek, thuis word ik te snel afgeleid.',1,''],
 ['In de bibliotheek, thuis ik word te snel afgeleid.',0,'Si empiezas por thuis, el verbo va antes del sujeto: «word ik».']],
 r:'Ik ook! Thuis ga ik altijd opruimen.',t:'estudios'},

{q:'Wanneer studeer je eigenlijk af?',qe:'¿Y cuándo acabas el máster, por cierto?',o:[
 ['Aan de TU, in Delft.',0,'Eso dice dónde estudias, no cuándo terminas.'],
 ['Ik afstudeer in maart, hoop ik.',0,'afstuderen es separable: «ik studeer in maart af».'],
 ['In maart, hoop ik.',1,'']],
 r:'Dan moeten we dat groots vieren!',t:'estudios'},

{q:'Welk vak vond je het leukst tijdens je master?',qe:'¿Qué asignatura te gustó más del máster?',o:[
 ['Jachtontwerp vond ik het leukst.',1,''],
 ['Ik had vier vakken per kwartaal.',0,'Eso dice cuántas tenías, no cuál te gustó más.'],
 ['Jachtontwerp vond ik het leuker.',0,'leuker es comparativo («más divertido que»); aquí va el superlativo: «het leukst».']],
 r:'Logisch, daar werk je nu ook aan!',t:'estudios'},

{q:'Hoe lang volg je al Nederlandse les?',qe:'¿Cuánto tiempo llevas yendo a clases de neerlandés?',o:[
 ['Twee keer per week, op dinsdag en donderdag.',0,'Eso dice cada cuánto, no desde hace cuánto.'],
 ['Ongeveer een jaar, en ik oefen alle dag.',0,'«Cada día» es elke dag; «alle dag» no existe.'],
 ['Ongeveer een jaar, en ik oefen elke dag.',1,'']],
 r:'Dat hoor ik! Je gaat hard vooruit.',t:'estudios'},

{q:'Heb je vanmiddag nog college?',qe:'¿Tienes clase en la uni esta tarde?',o:[
 ['Nee, ik heb vanmiddag een collega.',0,'collega es un compañero de trabajo; college es una clase en la universidad.'],
 ['Nee, ik heb geen colleges meer, alleen mijn scriptie.',1,''],
 ['Nee, ik heb niet colleges meer.',0,'Con un sustantivo se niega con geen: «geen colleges».']],
 r:'Lekker, dan kun je je eigen tijd indelen.',t:'estudios'},

/* ---------- deporte ---------- */
{q:'Hoe vaak train je per week?',qe:'¿Cuántas veces entrenas a la semana?',o:[
 ['Drie keer, en op zaterdag hebben we een wedstrijd.',1,''],
 ['Drie keer, en op zaterdag we hebben een wedstrijd.',0,'Tras «op zaterdag» al principio, el verbo va antes del sujeto: «hebben we».'],
 ['Anderhalf uur, van acht tot half tien.',0,'Eso dice cuánto dura, no cuántas veces.']],
 r:'Wauw, dan ben je echt fit!',t:'deporte'},

{q:'Hebben jullie zaterdag gewonnen?',qe:'¿Ganasteis el sábado?',o:[
 ['Nee, we zijn in de laatste minuut verloren.',0,'Perder un partido va con hebben: «we hebben verloren».'],
 ['Ja, we hebben met twee doelpunten gewint.',0,'El participio de winnen es gewonnen.'],
 ['Nee, we hebben in de laatste minuut verloren.',1,'']],
 r:'Balen! Volgende keer beter.',t:'deporte'},

{q:'Heb je zin om zondag mee te gaan hardlopen?',qe:'¿Te apetece venir a correr el domingo?',o:[
 ['Ja, leuk! Waar afspreken we?',0,'afspreken es separable: «waar spreken we af?».'],
 ['Ja, leuk! Waar spreken we af?',1,''],
 ['Ja, ik ga zondag mee te hardlopen.',0,'Tras (mee)gaan, el infinitivo va sin te: «ik ga mee hardlopen».']],
 r:'Bij de molen, om negen uur.',t:'deporte'},

{q:'Hoe ben je eigenlijk met waterpolo begonnen?',qe:'¿Cómo empezaste con el waterpolo?',o:[
 ['Toen ik was tien, nam mijn vader me mee.',0,'Tras toen, el verbo va al final: «toen ik tien was».'],
 ['Als ik tien was, nam mijn vader me mee.',0,'Para un momento concreto del pasado se usa toen, no als.'],
 ['Toen ik tien was, nam mijn vader me mee.',1,'']],
 r:'Wat leuk. Speelt je vader zelf ook?',t:'deporte'},

{q:'Kijk je vanavond ook naar Oranje?',qe:'¿Vas a ver esta noche a la selección holandesa?',o:[
 ['Ja, met mijn team in de kroeg.',1,''],
 ['Ja, oranje vind ik een mooie kleur.',0,'Aquí Oranje es la selección holandesa, no el color.'],
 ['Ja, gisteravond in de kroeg.',0,'Te pregunta por esta noche (vanavond), no por anoche.']],
 r:'Gezellig! Trek wel iets oranjes aan.',t:'deporte'},

{q:'Heb je weleens geschaatst?',qe:'¿Has patinado sobre hielo alguna vez?',o:[
 ['Eén keer, maar ik kan nog niet goed te schaatsen.',0,'Tras kunnen, el infinitivo va sin te.'],
 ['Eén keer, en ik ben drie keer gevallen.',1,''],
 ['Eén keer, en ik heb drie keer gevallen.',0,'vallen forma el perfecto con zijn: «ik ben gevallen».']],
 r:'Haha, dat hoort erbij! Volgende winter ga je met mij mee.',t:'deporte'},

{q:'Doe je mee aan het toernooi volgende maand?',qe:'¿Vas a jugar el torneo del mes que viene?',o:[
 ['In Leiden, in het grote zwembad.',0,'Eso dice dónde es; te pregunta si participas.'],
 ['Ja, als mijn schouder dan weer beter is.',1,''],
 ['Ja, als mijn schouder is dan weer beter.',0,'Tras als, el verbo va al final: «als mijn schouder … beter is».']],
 r:'Hopelijk! Wat is er met je schouder?',t:'deporte'},

{q:'Met hoeveel spelers speel je waterpolo?',qe:'¿Con cuántos jugadores se juega al waterpolo?',o:[
 ['Twee keer per week, ’s avonds.',0,'Eso dice cada cuánto entrenas, no cuántos jugadores hay.'],
 ['Vier periodes van acht minuten.',0,'Eso dice cuánto dura el partido, no cuántos jugadores hay.'],
 ['Met zeven per team, inclusief de keeper.',1,'']],
 r:'Zeven? Ik dacht dat het er meer waren.',t:'deporte'}

]);

/* ---- js/content/chat-2.js ---- */
/* Charla con Lotte · comida, casa, planes, opinión */
addChat([

/* ---------- comida ---------- */
{q:'Goedemorgen, wat mag het zijn?',qe:'Buenos días, ¿qué le pongo?',o:[
 ['Een bruin brood, gesneden graag.',1,''],
 ['Nee, dank u, dat was alles.',0,'Eso se contesta a «¿algo más?», no a «¿qué le pongo?».'],
 ['Een bruin brood, gesnijd graag.',0,'El participio de snijden es gesneden.']],
 r:'Alstublieft. Anders nog iets?',t:'comida'},

{q:'Anders nog iets?',qe:'¿Algo más?',o:[
 ['Graag gedaan, dat was het.',0,'«Graag gedaan» es «de nada»; aquí di «nee, dank u».'],
 ['Ja, doe ook maar vier krentenbol.',0,'Con un número, el sustantivo va en plural: «vier krentenbollen».'],
 ['Nee, dank u, dat was het.',1,'']],
 r:'Dat is dan vier euro twintig.',t:'comida'},

{q:'Wat eet je meestal als lunch?',qe:'¿Qué sueles comer a mediodía?',o:[
 ['Om half één, in de kantine.',0,'Eso dice cuándo y dónde, no qué comes.'],
 ['Een paar boterhammen, maar ik mis een warme lunch.',1,''],
 ['Een paar boterhammen, maar ik mis een warm lunch.',0,'lunch es de: con een, el adjetivo lleva -e: «een warme lunch».']],
 r:'Dat hoor ik van alle Spanjaarden!',t:'comida'},

{q:'Ben je ergens allergisch voor?',qe:'¿Eres alérgico a algo?',o:[
 ['Ja, ik ben allergisch aan noten.',0,'allergisch va con voor: «allergisch voor noten».'],
 ['Nee hoor, ik eet alles.',1,''],
 ['Ja, ik heb geen allergieën.',0,'Se contradice: «sí» y luego «no tengo alergias».']],
 r:'Makkelijk! Dan maak ik gewoon lasagne.',t:'comida'},

{q:'Hebben jullie al gekozen?',qe:'¿Ya habéis elegido?',o:[
 ['Ja, we zijn gekozen.',0,'kiezen forma el perfecto con hebben; «we zijn gekozen» es «nos han elegido».'],
 ['Ja, de rekening graag.',0,'Eso es pedir la cuenta; te preguntan qué vas a tomar.'],
 ['Ja, ik neem de vis van de dag.',1,'']],
 r:'Prima keuze! En wat willen jullie drinken?',t:'comida'},

{q:'Kook jij vanavond, of zal ik het doen?',qe:'¿Cocinas tú esta noche o lo hago yo?',o:[
 ['Laat mij maar koken, ik maak tortilla.',1,''],
 ['Eet smakelijk!',0,'«Eet smakelijk» es «que aproveche»; te preguntan quién cocina.'],
 ['Laat mij maar te koken, ik maak tortilla.',0,'Tras laten, el infinitivo va sin te.']],
 r:'Heerlijk! Dan doe ik de afwas.',t:'comida'},

{q:'Wat drinken jullie in Spanje bij het eten?',qe:'¿Qué bebéis en España con la comida?',o:[
 ['Meestal water, en soms een glas van wijn.',0,'Con cantidades no se pone van: «een glas wijn».'],
 ['Meestal water, en soms een glas wijn.',1,''],
 ['Om negen of tien uur ’s avonds.',0,'Eso dice a qué hora cenáis, no qué bebéis.']],
 r:'Hier drinken veel mensen gewoon melk bij het eten!',t:'comida'},

{q:'Zullen we vanavond gewoon pizza bestellen?',qe:'¿Pedimos pizza esta noche y ya está?',o:[
 ['Goed plan, ik heb niet zin om te koken.',0,'Con el sustantivo zin se niega con geen: «geen zin».'],
 ['Goed plan, ik heb geen zin om koken.',0,'Tras om hace falta te: «om te koken».'],
 ['Goed plan, ik heb geen zin om te koken.',1,'']],
 r:'Top. Ik bestel, jij betaalt de volgende keer.',t:'comida'},

{q:'Heb je al eens stamppot gegeten?',qe:'¿Has probado alguna vez el stamppot?',o:[
 ['Ja, bij Sanne thuis, met rookworst.',1,''],
 ['Ja, nog nooit.',0,'«Nog nooit» significa «nunca»; se contradice con «ja».'],
 ['Ja, bij Sanne huis, met rookworst.',0,'«En casa de Sanne» es «bij Sanne thuis».']],
 r:'Echt Hollands! En vond je het lekker?',t:'comida'},

{q:'Zal ik iets meenemen voor het etentje?',qe:'¿Llevo algo para la cena?',o:[
 ['Nee hoor, je hoeft niks te meenemen.',0,'Con separables, te va en medio: «mee te nemen».'],
 ['Ja, graag. Neem maar een fles wijn mee.',1,''],
 ['Ja, graag. Meeneem maar een fles wijn.',0,'meenemen es separable: «neem … mee».']],
 r:'Rood of wit? Wat eten we eigenlijk?',t:'comida'},

/* ---------- casa ---------- */
{q:'Woon je alleen?',qe:'¿Vives solo?',o:[
 ['Nee, ik leef met drie huisgenoten.',0,'«Vivir en un sitio» es wonen; leven es «estar vivo».'],
 ['Nee, met drie huisgenoten, in een oud huis.',1,''],
 ['Ja, met drie huisgenoten.',0,'«Ja» diría que vives solo; con compañeros es «nee».']],
 r:'Gezellig! Of is het soms ook lastig?',t:'casa'},

{q:'Wie maakt bij jullie de badkamer schoon?',qe:'¿Quién limpia el baño en vuestra casa?',o:[
 ['Om de beurt, maar Daan schoonmaakt nooit.',0,'schoonmaken es separable: «Daan maakt nooit schoon».'],
 ['Boven, naast de slaapkamers.',0,'Eso dice dónde está el baño, no quién lo limpia.'],
 ['Om de beurt, maar Daan maakt nooit schoon.',1,'']],
 r:'Haha, er is altijd zo’n huisgenoot!',t:'casa'},

{q:'Hoeveel huur betaal je eigenlijk?',qe:'¿Cuánto pagas de alquiler, por cierto?',o:[
 ['Zeshonderd euro, inclusief gas, water en licht.',1,''],
 ['Zeshonderd euro’s, inclusief gas, water en licht.',0,'Con una cantidad, euro no lleva plural: «zeshonderd euro».'],
 ['Altijd op de eerste van de maand.',0,'Eso dice cuándo pagas, no cuánto.']],
 r:'Dat valt mee voor Delft!',t:'casa'},

{q:'Werkt alles goed in je nieuwe kamer?',qe:'¿Funciona todo bien en tu nueva habitación?',o:[
 ['Ja, ik werk er elke dag aan mijn scriptie.',0,'«Werkt alles?» es «¿funciona todo?», no habla de tu trabajo.'],
 ['Bijna, alleen de verwarming doet niet.',0,'Con el sentido de «funcionar», doen lleva siempre het: «de verwarming doet het niet».'],
 ['Bijna, alleen de verwarming doet het niet.',1,'']],
 r:'Vervelend! Heb je de huisbaas al gebeld?',t:'casa'},

{q:'Hoe zijn je buren eigenlijk?',qe:'¿Qué tal son tus vecinos?',o:[
 ['Heel aardig, maar hun hond blaft de hele dag.',1,''],
 ['Heel aardig, maar hun hond blaft het hele dag.',0,'dag es de: «de hele dag».'],
 ['Ze wonen naast ons, op nummer twaalf.',0,'Eso dice dónde viven, no cómo son.']],
 r:'Wat irritant! Heb je er al iets van gezegd?',t:'casa'},

{q:'Wil je me zaterdag helpen met verhuizen?',qe:'¿Me ayudas el sábado con la mudanza?',o:[
 ['Veel succes met verhuizen!',0,'Eso es desearle suerte; te está pidiendo ayuda.'],
 ['Tuurlijk! Hoe laat moet ik er zijn?',1,''],
 ['Tuurlijk! Hoe laat moet ik er te zijn?',0,'Tras moeten, el infinitivo va sin te.']],
 r:'Om negen uur. Ik zorg voor broodjes!',t:'casa'},

{q:'Waar kan ik mijn fiets neerzetten?',qe:'¿Dónde puedo dejar la bici?',o:[
 ['Zet hem maar op de schuur achter het huis.',0,'op es «encima de»; dentro es in: «in de schuur».'],
 ['Zet hem maar in de schuur achter de huis.',0,'huis es het: «achter het huis».'],
 ['Zet hem maar in de schuur achter het huis.',1,'']],
 r:'Top. Moet ik hem op slot zetten?',t:'casa'},

{q:'Wanneer ben je eigenlijk verhuisd?',qe:'¿Cuándo te mudaste, por cierto?',o:[
 ['Twee maanden geleden, in september.',1,''],
 ['Ik heb in september verhuisd.',0,'verhuizen forma el perfecto con zijn: «ik ben verhuisd».'],
 ['Naar een kamer vlak bij de markt.',0,'Eso dice adónde, no cuándo.']],
 r:'En, voel je je er al thuis?',t:'casa'},

{q:'Wat is het wachtwoord van jullie wifi?',qe:'¿Cuál es la contraseña de vuestro wifi?',o:[
 ['Sorry, we hebben niet wifi.',0,'Con un sustantivo se niega con geen: «geen wifi».'],
 ['Het staat achter op de router.',1,''],
 ['Het ligt achter op de router.',0,'Lo que está escrito en un sitio «staat»: «het staat op de router».']],
 r:'Gevonden, dank je! Wat een lang wachtwoord.',t:'casa'},

{q:'Zullen we zaterdag samen de tuin opruimen?',qe:'¿Arreglamos juntos el jardín el sábado?',o:[
 ['Prima, als het regent niet.',0,'En la subordinada, niet va antes del verbo final: «als het niet regent».'],
 ['Veel plezier!',0,'Eso se le desea a quien va sin ti; te proponen hacerlo juntos.'],
 ['Prima, als het niet regent.',1,'']],
 r:'Afgesproken. Ik neem handschoenen mee.',t:'casa'},

/* ---------- planes ---------- */
{q:'Heb je zin om vrijdag naar de film te gaan?',qe:'¿Te apetece ir al cine el viernes?',o:[
 ['Leuk! Welke film wil je zien?',1,''],
 ['Ja, ik heb er echt zin op.',0,'«Tener ganas de algo» es zin hebben in: «ik heb er zin in».'],
 ['Vrijdag kan ik niet, ik moet te werken.',0,'Tras moeten, el infinitivo va sin te.']],
 r:'Weet ik nog niet. Kies jij maar!',t:'planes'},

{q:'Kun je morgen om drie uur?',qe:'¿Puedes mañana a las tres?',o:[
 ['Ja, het is nu drie uur.',0,'Eso dice la hora que es; te preguntan si puedes quedar.'],
 ['Drie uur lukt me niet, vier uur wel.',1,''],
 ['Om drie uur lukt ik niet, om vier uur wel.',0,'Con lukken, el sujeto es la cosa: «het lukt me niet».']],
 r:'Vier uur is ook prima. Tot morgen!',t:'planes'},

{q:'Weet je al of je zaterdag komt?',qe:'¿Sabes ya si vienes el sábado?',o:[
 ['Nog niet, ik weet niet als ik kan.',0,'«Si» en pregunta indirecta es of: «of ik kan».'],
 ['Ja, ik kom vrijdag om acht uur.',0,'Te pregunta por el sábado (zaterdag), no por el viernes.'],
 ['Nog niet, ik laat het je morgen weten.',1,'']],
 r:'Oké, dan houd ik een plekje voor je vrij.',t:'planes'},

{q:'Wat zullen we vanavond eens doen?',qe:'¿Qué hacemos esta noche?',o:[
 ['Zin in een spelletje bij mij thuis?',1,''],
 ['Gisteren hebben we een film gekeken.',0,'Te pregunta qué hacer esta noche, no qué hicisteis ayer.'],
 ['Zullen we een spelletje maken bij mij thuis?',0,'A un juego se juega con spelen (o doen), no con maken.']],
 r:'Gezellig! Ik neem chips mee.',t:'planes'},

{q:'Gaat ons etentje morgen nog door?',qe:'¿Sigue en pie nuestra cena de mañana?',o:[
 ['Ja, het gaat door de stad.',0,'Aquí doorgaan es «celebrarse, seguir en pie», no «pasar por».'],
 ['Helaas niet, ik voel me niet lekker.',1,''],
 ['Helaas niet, ik voel niet lekker.',0,'voelen necesita me: «ik voel me niet lekker».']],
 r:'Ach, beterschap! Dan verzetten we het.',t:'planes'},

{q:'Wat zijn je plannen voor de zomer?',qe:'¿Qué planes tienes para el verano?',o:[
 ['Ik spendeer de zomer bij mijn familie in Vigo.',0,'Pasar un tiempo en un sitio es doorbrengen; spenderen es gastar.'],
 ['Ik heb de zomer in Vigo doorgebracht.',0,'Eso es pasado; te pregunta por tus planes.'],
 ['Ik ga drie weken naar mijn familie in Vigo.',1,'']],
 r:'Heerlijk! Dan zie je je vriendin ook weer.',t:'planes'},

{q:'Hoe laat zullen we afspreken?',qe:'¿A qué hora quedamos?',o:[
 ['Om kwart voor negen, bij het station?',1,''],
 ['Om negen min kwart, bij het station?',0,'«Menos cuarto» es kwart voor: «kwart voor negen».'],
 ['Bij de fietsenstalling van het station.',0,'Eso dice dónde; te pregunta a qué hora.']],
 r:'Prima, ik wacht bij de ingang.',t:'planes'},

{q:'Lijkt het je leuk om mee te gaan naar een concert?',qe:'¿Te apetecería venir a un concierto?',o:[
 ['Ja, ik lijk het heel leuk.',0,'Con lijken, el sujeto es la cosa: «het lijkt me leuk».'],
 ['Ja, lijkt me super! Wie speelt er?',1,''],
 ['Ja, ik lijk op mijn broer.',0,'«Lijken op» es «parecerse a»; aquí es «me parece divertido».']],
 r:'Een jazzband uit Rotterdam. Ze zijn echt goed.',t:'planes'},

{q:'Wat doe je met oud en nieuw?',qe:'¿Qué haces en Nochevieja?',o:[
 ['Ik heb oude en nieuwe kleren.',0,'«Oud en nieuw» es Nochevieja, no «viejo y nuevo».'],
 ['Bij vrienden, en om twaalf uur we eten druiven.',0,'Tras «om twaalf uur» al principio, el verbo va antes del sujeto: «eten we».'],
 ['Bij vrienden, en om twaalf uur eten we druiven.',1,'']],
 r:'Druiven? Wij eten oliebollen!',t:'planes'},

{q:'Waar zien we elkaar?',qe:'¿Dónde nos vemos?',o:[
 ['Bij de ingang van de bibliotheek?',1,''],
 ['Om acht uur, is dat goed?',0,'Eso dice cuándo; te pregunta dónde.'],
 ['Op de ingang van de bibliotheek?',0,'«En la entrada» (junto a ella) es bij de ingang.']],
 r:'Goed, ik wacht binnen als het regent.',t:'planes'},

{q:'Wanneer heb je weer eens tijd?',qe:'¿Cuándo vuelves a tener un rato?',o:[
 ['Volgende week dinsdag, dan ik ben vrij.',0,'Tras dan al principio, el verbo va antes del sujeto: «dan ben ik vrij».'],
 ['Volgende week dinsdag, dan ben ik vrij.',1,''],
 ['Vorige week dinsdag.',0,'Vorige week es la semana pasada; te pregunta por el futuro.']],
 r:'Dinsdag is goed. Dan kook ik!',t:'planes'},

{q:'Kom jij ook naar de barbecue van Ahmed?',qe:'¿Tú también vienes a la barbacoa de Ahmed?',o:[
 ['Zaterdag om vijf uur, bij hem in de tuin.',0,'Eso dice cuándo y dónde es; te pregunta si vas.'],
 ['Ja, als ik op tijd klaar ben met werken.',1,''],
 ['Ja, als ik in tijd klaar ben met werken.',0,'«A tiempo» es op tijd.']],
 r:'Hopelijk! Hij maakt altijd veel te veel vlees.',t:'planes'},

/* ---------- opinión ---------- */
{q:'Wat vind jij van fietsen in de regen?',qe:'¿Qué te parece ir en bici bajo la lluvia?',o:[
 ['Ik denk het niet.',0,'Eso es «creo que no»; te pide tu opinión.'],
 ['Vreselijk, maar je went eraan.',1,''],
 ['Ik vind niet leuk, maar je went eraan.',0,'vinden necesita objeto: «ik vind het niet leuk».']],
 r:'Precies! Een goede regenjas helpt ook.',t:'opinion'},

{q:'Vind je Delft mooier dan Vigo?',qe:'¿Te parece Delft más bonita que Vigo?',o:[
 ['Delft is meer mooi dan Vigo.',0,'El comparativo de mooi es mooier, no «meer mooi».'],
 ['Delft ligt tussen Den Haag en Rotterdam.',0,'Eso dice dónde está Delft; te pide comparar.'],
 ['Allebei mooi, maar Vigo heeft de zee.',1,'']],
 r:'Dat snap ik. Maar wij hebben Scheveningen!',t:'opinion'},

{q:'Wat vond je van de film gisteravond?',qe:'¿Qué te pareció la película de anoche?',o:[
 ['Mooi, maar het einde vond ik een beetje raar.',1,''],
 ['Mooi, maar het einde ik vond een beetje raar.',0,'Si empiezas por el objeto, el verbo va segundo: «het einde vond ik».'],
 ['Om negen uur, met Sanne en Daan.',0,'Eso dice cuándo y con quién; te pide tu opinión.']],
 r:'Echt? Ik vond het einde juist het best!',t:'opinion'},

{q:'Vind je niet dat Nederlanders erg direct zijn?',qe:'¿No te parece que los holandeses son muy directos?',o:[
 ['Ja, ze praten altijd precies wat ze denken.',0,'praten es «hablar» y no lleva ese objeto; «decir lo que piensan» es zeggen.'],
 ['Ja, ze zeggen altijd precies wat ze denken.',1,''],
 ['Ja, ze zeggen altijd precies wat denken ze.',0,'En «lo que piensan», el verbo va al final: «wat ze denken».']],
 r:'Haha, dat vatten we op als een compliment.',t:'opinion'},

{q:'Wat vind je van het nieuwe ontwerp voor de salon?',qe:'¿Qué te parece el nuevo diseño del salón?',o:[
 ['Pieter heeft het gemaakt, geloof ik.',0,'Eso dice quién lo hizo; te pide tu opinión.'],
 ['Mooi, maar ik denk dat het te duur wordt.',1,''],
 ['Mooi, maar ik denk dat het wordt te duur.',0,'Tras dat, el verbo va al final: «dat het te duur wordt».']],
 r:'Dat dacht ik ook. Zeg het maar in de vergadering.',t:'opinion'},

{q:'Wat vind je ervan dat de winkels hier zo vroeg dichtgaan?',qe:'¿Qué te parece que aquí las tiendas cierren tan pronto?',o:[
 ['Lastig, ik moet altijd haasten na mijn werk.',0,'haasten es reflexivo: «ik moet me haasten».'],
 ['Meestal om zes uur.',0,'Eso dice a qué hora cierran; te pide tu opinión.'],
 ['Lastig, in Spanje zijn ze tot negen uur open.',1,'']],
 r:'Op donderdag is er koopavond, hoor!',t:'opinion'},

{q:'Wie wint er volgens jou: Spanje of Nederland?',qe:'¿Quién crees que gana: España u Holanda?',o:[
 ['Volgens mij wint Spanje, ze zijn veel beste.',0,'«Mucho mejores» es veel beter; beste es «el mejor».'],
 ['Volgens mij Spanje wint, natuurlijk!',0,'Tras «volgens mij», primero el verbo: «volgens mij wint Spanje».'],
 ['Volgens mij wint Spanje, natuurlijk!',1,'']],
 r:'Dat zullen we zaterdag zien!',t:'opinion'},

{q:'Kun je beter met de trein of met de auto naar Amsterdam?',qe:'¿Es mejor ir a Ámsterdam en tren o en coche?',o:[
 ['Met de trein, dan hoef je niet te parkeren.',1,''],
 ['Op de trein, dan hoef je niet te parkeren.',0,'Como medio de transporte se dice met de trein.'],
 ['Met de trein, dan moet je niet parkeren.',0,'«No tener que» es niet hoeven te; «niet moeten» suena a prohibición.']],
 r:'Klopt, en parkeren in Amsterdam is heel duur.',t:'opinion'},

{q:'Wat vind jij belangrijk in een baan?',qe:'¿Qué es importante para ti en un trabajo?',o:[
 ['Een goed salaris. En jou?',0,'«¿Y tú?» es «en jij?»; jou es «a ti».'],
 ['Dat ik veel leer en leuke collega’s heb.',1,''],
 ['Dat ik veel leer en leuk collega’s heb.',0,'En plural el adjetivo lleva -e: «leuke collega’s».']],
 r:'Mee eens. Goede collega’s zijn goud waard.',t:'opinion'},

{q:'Denk je dat we de deadline halen?',qe:'¿Crees que llegaremos a la fecha de entrega?',o:[
 ['Ik denk het wel, als er niets gaat mis.',0,'En la subordinada, el separable va junto al final: «als er niets misgaat».'],
 ['Ja, ik denk vaak aan de deadline.',0,'denken aan es «pensar en algo»; para opinar: «ik denk het wel».'],
 ['Ik denk het wel, als er niets misgaat.',1,'']],
 r:'Laten we het hopen. Duimen maar!',t:'opinion'}

]);

/* ---- js/content/chat-3.js ---- */
/* Charla con Lotte · salud, compras, viajes, tiempo, transporte, familia */
addChat([

/* ---------- salud ---------- */
{q:'Wat kan ik voor u doen?',qe:'¿En qué puedo ayudarle?',o:[
 ['Ik heb al drie dagen hoofdpijn en koorts.',1,''],
 ['Ik ben al drie dagen hoofdpijn en koorts.',0,'Los síntomas se tienen: «ik heb hoofdpijn en koorts».'],
 ['Ik heb drie dagen geleden hoofdpijn en koorts.',0,'geleden marca un momento pasado; «desde hace tres días» es «al drie dagen».']],
 r:'Vervelend. Moet u ook veel hoesten?',t:'salud'},

{q:'Waarom snuit je steeds je neus?',qe:'¿Por qué no paras de sonarte la nariz?',o:[
 ['Ik heb een beetje constipatie.',0,'constipatie es estreñimiento; el constipado es «verkouden zijn».'],
 ['Ik ben een beetje verkouden.',1,''],
 ['Ik heb een beetje verkouden.',0,'verkouden es adjetivo y va con zijn: «ik ben verkouden».']],
 r:'Neem wat thee met honing, dat helpt.',t:'salud'},

{q:'Sinds wanneer heeft u last van uw schouder?',qe:'¿Desde cuándo le molesta el hombro?',o:[
 ['Aan de rechterkant, vooral hier.',0,'Eso dice dónde duele, no desde cuándo.'],
 ['Sinds ik een klap heb gekregen, twee weken geleden.',1,''],
 ['Sinds ik heb een klap gekregen, twee weken geleden.',0,'Tras sinds («desde que»), los verbos van al final: «sinds ik een klap heb gekregen».']],
 r:'Ik ga even kijken. Kunt u uw arm optillen?',t:'salud'},

{q:'Heb je al een afspraak bij de huisarts?',qe:'¿Ya tienes cita con el médico de cabecera?',o:[
 ['Ja, morgen op tien uur.',0,'La hora va con om: «om tien uur».'],
 ['Ja, ik kan morgen om tien uur terecht.',1,''],
 ['Ja, ik ga morgen om tien uur bij de huisarts.',0,'Con gaan se dice naar: «naar de huisarts».']],
 r:'Goed zo. Laat je weten wat hij zegt?',t:'salud'},

{q:'Gaat het al wat beter met je?',qe:'¿Ya estás algo mejor?',o:[
 ['Ja, het gaat al veel goeder.',0,'El comparativo de goed es beter.'],
 ['Ja, ik ga al veel beter.',0,'Se dice «het gaat beter (met me)», no «ik ga beter».'],
 ['Ja, het gaat al veel beter, dank je.',1,'']],
 r:'Fijn! Maar doe nog wel rustig aan.',t:'salud'},

{q:'Heeft u een recept van de huisarts?',qe:'¿Tiene receta del médico?',o:[
 ['Ja, hij heeft het vanochtend naar u gestuurd.',1,''],
 ['Ja, een recept voor tortilla.',0,'Aquí recept es la receta médica, no una de cocina.'],
 ['Ja, hij is het vanochtend naar u gestuurd.',0,'sturen forma el perfecto con hebben: «hij heeft … gestuurd».']],
 r:'Even kijken… Ja, ik heb het. Momentje.',t:'salud'},

{q:'Waarom was je gisteren niet op de werf?',qe:'¿Por qué no fuiste ayer al astillero?',o:[
 ['Ik was ziek, want ik iets verkeerds had gegeten.',0,'Tras want, orden normal: «want ik had iets verkeerds gegeten».'],
 ['Ik was ziek, want ik had iets verkeerds gegeten.',1,''],
 ['Ik heb ziek geweest, sorry.',0,'zijn forma el perfecto con zijn: «ik ben ziek geweest».']],
 r:'Vervelend! Gaat het nu weer een beetje?',t:'salud'},

{q:'Mag je van de fysiotherapeut al weer sporten?',qe:'¿Ya te deja el fisio volver a hacer deporte?',o:[
 ['Nog niet, pas over twee weken.',1,''],
 ['Nog niet, pas twee weken geleden.',0,'geleden es «hace» (pasado); aquí hablas del futuro.'],
 ['Nog geen, pas over twee weken.',0,'Sin sustantivo detrás se niega con niet: «nog niet»; geen va con sustantivos.']],
 r:'Geduld dan maar. Dan kom je sterker terug!',t:'salud'},

/* ---------- compras ---------- */
{q:'Wilt u het bonnetje?',qe:'¿Quiere el tique?',o:[
 ['Ja, graag gedaan.',0,'«Graag gedaan» es «de nada»; di «ja, graag».'],
 ['Nee, dank u, dat hoeft niet.',1,''],
 ['Nee, ik wil niet het bonnetje.',0,'niet va detrás: «ik wil het bonnetje niet» (o «geen bonnetje»).']],
 r:'Prima. Fijne dag nog!',t:'compras'},

{q:'Heeft u een tasje nodig?',qe:'¿Necesita una bolsa?',o:[
 ['Nee, dank u, ik heb er zelf een bij me.',1,''],
 ['Nee, ik betaal liever contant.',0,'Te pregunta si quieres bolsa, no cómo pagas.'],
 ['Nee, dank u, ik heb zelf een bij me.',0,'Con een suelto hace falta er: «ik heb er een bij me».']],
 r:'Goed bezig! Dat is dan twaalf euro vijftig.',t:'compras'},

{q:'Welke maat heeft u?',qe:'¿Qué talla usa?',o:[
 ['Eén meter tachtig, ongeveer.',0,'Eso es tu altura, no tu talla.'],
 ['Meestal M, maar deze is me te kleine.',0,'Detrás del verbo, el adjetivo no lleva -e: «te klein».'],
 ['Meestal M, maar deze is me te klein.',1,'']],
 r:'Dan pak ik even een L voor u.',t:'compras'},

{q:'Wilt u uw geld terug of een andere maat?',qe:'¿Quiere que le devolvamos el dinero o prefiere otra talla?',o:[
 ['Liever een maat groter, als dat kan.',1,''],
 ['Ja, graag.',0,'Te da a elegir entre dos cosas; «ja» no elige.'],
 ['Liever een maat groter, als kan dat.',0,'Tras als, el verbo va al final: «als dat kan».']],
 r:'Geen probleem, ik kijk even in het magazijn.',t:'compras'},

{q:'Hoeveel kaas mag het zijn?',qe:'¿Cuánto queso le pongo?',o:[
 ['Vijfhonderd grammen, alstublieft.',0,'Con una cantidad, gram no lleva plural: «vijfhonderd gram».'],
 ['Een pond, alstublieft.',1,''],
 ['Drie euro per pond, toch?',0,'Eso pregunta el precio; te preguntan cuánto quieres.']],
 r:'Jong of belegen? Wilt u eerst even proeven?',t:'compras'},

{q:'Weet jij hoe laat de supermarkt dichtgaat?',qe:'¿Sabes a qué hora cierra el súper?',o:[
 ['Nee, ik weet niet hoe laat hij gaat dicht.',0,'En la pregunta indirecta, el verbo va al final y junto: «hoe laat hij dichtgaat».'],
 ['Ja, hij zit naast het station.',0,'Eso dice dónde está; te pregunta a qué hora cierra.'],
 ['Om tien uur, geloof ik.',1,'']],
 r:'Mooi, dan haal ik het nog.',t:'compras'},

{q:'Zal ik deze jas nemen, of is hij te duur?',qe:'¿Me llevo este abrigo o es demasiado caro?',o:[
 ['Neem hem niet, hij staat je echt goed.',0,'Se contradice: le dices que no lo compre porque le queda bien.'],
 ['Neem hem maar, hij staat je echt goed.',1,''],
 ['Neem hem maar, hij staat goed met jou.',0,'«Te queda bien» es «hij staat je goed».']],
 r:'Oké, je hebt me overtuigd!',t:'compras'},

{q:'Waar heb je die schoenen gekocht?',qe:'¿Dónde te compraste esos zapatos?',o:[
 ['Op de markt, voor maar twintig euro.',1,''],
 ['Vorige week zaterdag.',0,'Eso dice cuándo; te pregunta dónde.'],
 ['In de markt, voor maar twintig euro.',0,'En el mercado (al aire libre) se dice op de markt.']],
 r:'Twintig euro? Wat een koopje!',t:'compras'},

/* ---------- viajes ---------- */
{q:'Ben je al eens in Maastricht geweest?',qe:'¿Has estado alguna vez en Maastricht?',o:[
 ['Nee, ik heb er nog nooit geweest.',0,'zijn forma el perfecto con zijn: «ik ben er nog nooit geweest».'],
 ['Het ligt in het zuiden, bij België.',0,'Eso dice dónde está; te pregunta si has estado.'],
 ['Nee, nog nooit, maar ik wil er graag heen.',1,'']],
 r:'Moet je echt doen, het is heel anders dan Delft.',t:'viajes'},

{q:'Wanneer vertrek je naar Spanje?',qe:'¿Cuándo te vas a España?',o:[
 ['Op twintig december, heel vroeg in de ochtend.',1,''],
 ['In twintig december, heel vroeg in de ochtend.',0,'Con una fecha se usa op: «op twintig december».'],
 ['Twee weken, tot na oud en nieuw.',0,'Eso dice cuánto tiempo te vas, no cuándo sales.']],
 r:'Dan ben je net op tijd voor de feestdagen.',t:'viajes'},

{q:'Heb je je koffer al ingepakt?',qe:'¿Ya has hecho la maleta?',o:[
 ['Ongeveer twintig kilo, denk ik.',0,'Eso dice cuánto pesa; te pregunta si ya la has hecho.'],
 ['Nog niet, ik doe het morgenochtend wel.',1,''],
 ['Nee, ik inpak hem morgenochtend.',0,'inpakken es separable: «ik pak hem morgenochtend in».']],
 r:'Typisch! Vergeet je oplader niet.',t:'viajes'},

{q:'Hoeveel nachten blijft u?',qe:'¿Cuántas noches se queda?',o:[
 ['Met twee personen, mijn vriendin en ik.',0,'Eso dice cuántas personas, no cuántas noches.'],
 ['Drie nachten, sinds zondag.',0,'sinds es «desde» (pasado); «hasta» es tot.'],
 ['Drie nachten, tot zondag.',1,'']],
 r:'Prima. Het ontbijt is van zeven tot tien.',t:'viajes'},

{q:'Wat moet ik zeker zien als ik naar Spanje ga?',qe:'¿Qué tengo que ver sí o sí si voy a España?',o:[
 ['Galicië! De kust is daar prachtig.',1,''],
 ['In augustus, dan is het warm.',0,'Eso dice cuándo ir; te pregunta qué ver.'],
 ['Galicië! Daar de kust is prachtig.',0,'Si empiezas por daar, el verbo va antes del sujeto: «daar is de kust…».']],
 r:'Galicië? Is het daar niet net zo nat als hier?',t:'viajes'},

{q:'Hoe lang duurt de treinreis naar Parijs?',qe:'¿Cuánto se tarda en tren a París?',o:[
 ['Om drie uur, vanaf Rotterdam.',0,'«Om drie uur» es «a las tres»; la duración es «drie uur».'],
 ['Een uur of drie, vanaf Rotterdam.',1,''],
 ['Ongeveer honderd euro, retour.',0,'Eso dice cuánto cuesta, no cuánto dura.']],
 r:'Wat snel! Zullen we een weekendje gaan?',t:'viajes'},

{q:'Waar logeer je in Lissabon?',qe:'¿Dónde te alojas en Lisboa?',o:[
 ['Bij een vriend die studeert daar.',0,'Con die, el verbo va al final: «die daar studeert».'],
 ['Bij een vriend die daar studeert.',1,''],
 ['Van vrijdag tot maandag.',0,'Eso dice cuándo; te pregunta dónde te quedas.']],
 r:'Handig, dan heb je meteen een gids!',t:'viajes'},

{q:'Is je vlucht vertraagd?',qe:'¿Tu vuelo lleva retraso?',o:[
 ['Ja, we vertrekken al om tien uur.',0,'al es «ya, antes de lo previsto»; con retraso se dice pas.'],
 ['Ja, we hebben een uur vertraagd.',0,'El retraso se tiene: «we hebben een uur vertraging».'],
 ['Ja, we vertrekken pas om tien uur.',1,'']],
 r:'Wat vervelend! Heb je iets te lezen bij je?',t:'viajes'},

/* ---------- tiempo ---------- */
{q:'Heb je het niet koud zonder jas?',qe:'¿No tienes frío sin abrigo?',o:[
 ['Jawel, ik heb het ijskoud!',1,''],
 ['Ja, ik heb ijskoud.',0,'Falta het: «ik heb het (ijs)koud».'],
 ['Nee, ik heb het ijskoud!',0,'Con «nee» dices que no tienes frío; para decir que sí, «jawel».']],
 r:'Hier, neem mijn sjaal maar even.',t:'tiempo'},

{q:'Wat zegt het weerbericht voor morgen?',qe:'¿Qué dice el parte del tiempo para mañana?',o:[
 ['Dat het morgen de hele dag gaat regen.',0,'El verbo es regenen; regen es el sustantivo «lluvia».'],
 ['Eerst regen, maar ’s middags wordt het droog.',1,''],
 ['Eerst regen, maar ’s middags het wordt droog.',0,'Tras «’s middags» al principio, el verbo va antes del sujeto: «wordt het».']],
 r:'Mooi, dan gaan we ’s middags wandelen.',t:'tiempo'},

{q:'Waait het hard buiten?',qe:'¿Hace mucho viento fuera?',o:[
 ['Ja, het maakt heel veel wind.',0,'«Hace viento» es «het waait»; maken no vale.'],
 ['Ja, ik had het hele weg tegenwind.',0,'weg es de: «de hele weg».'],
 ['Ja, ik had de hele weg tegenwind.',1,'']],
 r:'Typisch Nederland. Op de terugweg heb je vast meewind!',t:'tiempo'},

{q:'Zou het vandaag nog gaan sneeuwen?',qe:'¿Crees que nevará hoy?',o:[
 ['Ik denk het niet, het is niet koud genoeg.',1,''],
 ['Ik denk niet, het is te warm.',0,'«Creo que no» es «ik denk het niet».'],
 ['Ik denk het niet, het is niet genoeg koud.',0,'genoeg va detrás del adjetivo: «koud genoeg».']],
 r:'Jammer, ik hoopte op een witte winter.',t:'tiempo'},

{q:'Hoe warm wordt het ’s zomers in Vigo?',qe:'¿Cuánto calor hace en verano en Vigo?',o:[
 ['Vooral in juli en augustus.',0,'Eso dice cuándo; te pregunta cuánto calor hace.'],
 ['Meestal rond de vijfentwintig graden.',1,''],
 ['Meestal rond de vijfentwintig graad.',0,'Con temperaturas se usa el plural: «vijfentwintig graden».']],
 r:'Heerlijk, dat klinkt als perfect zomerweer.',t:'tiempo'},

{q:'Neem je een paraplu mee?',qe:'¿Te llevas un paraguas?',o:[
 ['Nee, ik neem hem mee niet.',0,'niet va antes de la partícula: «ik neem hem niet mee».'],
 ['Nee, bij deze wind waait hij toch kapot.',1,''],
 ['Nee, bij dit wind waait hij toch kapot.',0,'wind es de: «deze wind» (dit va con palabras het).']],
 r:'Slim. Een regenjas is hier veel handiger.',t:'tiempo'},

/* ---------- transporte ---------- */
{q:'Sorry, weet u hoe ik bij het station kom?',qe:'Perdone, ¿sabe cómo llego a la estación?',o:[
 ['Ja, hier rechtdoor en bij het stoplicht linksaf.',1,''],
 ['Ja, hier rechtdoor en op het stoplicht linksaf.',0,'«En el semáforo» es bij het stoplicht; op sería «encima».'],
 ['Ja, de trein vertrekt om half vijf.',0,'Eso dice la hora del tren; te pregunta el camino.']],
 r:'Dank u wel! Dat kan ik wel vinden.',t:'transporte'},

{q:'Waarom ben je zo laat?',qe:'¿Por qué llegas tan tarde?',o:[
 ['Sorry, ik ben me verslapen.',0,'verslapen forma el perfecto con hebben: «ik heb me verslapen».'],
 ['Sorry, ik heb de trein gemist.',1,''],
 ['Sorry, ik heb de trein verloren.',0,'«Perder el tren» es de trein missen; verliezen es perder algo o un partido.']],
 r:'Geeft niet, we zijn ook net begonnen.',t:'transporte'},

{q:'Hoe ga je morgen naar Utrecht?',qe:'¿Cómo vas mañana a Utrecht?',o:[
 ['Met de trein, ik overstap één keer.',0,'overstappen es separable: «ik stap één keer over».'],
 ['Om acht uur, na het ontbijt.',0,'Eso dice cuándo; te pregunta cómo vas.'],
 ['Met de trein, ik moet één keer overstappen.',1,'']],
 r:'Check wel even de app, er zijn vaak storingen.',t:'transporte'},

{q:'Mag ik je fiets even lenen?',qe:'¿Me dejas la bici un momento?',o:[
 ['Ja hoor, als je hem vanavond terugbrengt.',1,''],
 ['Twee jaar geleden, in Delft.',0,'Eso dice cuándo la compraste; te pide que se la prestes.'],
 ['Ja hoor, als je hem vanavond brengt terug.',0,'En la subordinada, el separable va junto al final: «als je hem terugbrengt».']],
 r:'Beloofd! Ik moet alleen even naar de winkel.',t:'transporte'},

{q:'Moet ik in de bus een kaartje kopen?',qe:'¿Tengo que comprar billete en el autobús?',o:[
 ['Lijn vier, richting het centrum.',0,'Eso dice qué autobús coger; te pregunta si necesitas billete.'],
 ['Nee, je kunt gewoon inchecken met je bankpas.',1,''],
 ['Nee, je kunt gewoon checken in met je bankpas.',0,'Con un modal, el separable va junto: «je kunt inchecken».']],
 r:'Wat handig! Dat wist ik niet.',t:'transporte'},

{q:'Is je fiets nou weer gestolen?',qe:'¿Te han vuelto a robar la bici?',o:[
 ['Ja, hij heeft weer gestolen.',0,'«Ha sido robada» es «hij is gestolen»; «hij heeft gestolen» es «él ha robado».'],
 ['Ja, voor de twee keer dit jaar!',0,'«La segunda vez» es de tweede keer.'],
 ['Ja, voor de tweede keer dit jaar!',1,'']],
 r:'Ach nee! Je moet echt een beter slot kopen.',t:'transporte'},

/* ---------- familia ---------- */
{q:'Wat doen je ouders voor werk?',qe:'¿A qué se dedican tus padres?',o:[
 ['Mijn vader is visser en mijn moeder is lerares.',1,''],
 ['Mijn vader is visser en mijn moeder lerares is.',0,'En la oración principal, el verbo va segundo: «mijn moeder is lerares».'],
 ['Ze wonen in Vigo, vlak bij de haven.',0,'Eso dice dónde viven, no a qué se dedican.']],
 r:'Een visser! Dan eet je thuis vast veel vis.',t:'familia'},

{q:'Hoe vaak bel je met je familie?',qe:'¿Cada cuánto hablas por teléfono con tu familia?',o:[
 ['Een uurtje of zo, meestal.',0,'Eso dice cuánto dura, no cada cuánto.'],
 ['Bijna elke dag, meestal met mijn moeder.',1,''],
 ['Bijna elke dag roep ik mijn moeder.',0,'roepen es llamar a voces; por teléfono es bellen.']],
 r:'Wat lief! Mijn moeder zou dat ook willen.',t:'familia'},

{q:'Lijk je meer op je vader of op je moeder?',qe:'¿Te pareces más a tu padre o a tu madre?',o:[
 ['Aan mijn vader, zeggen ze altijd.',0,'«Parecerse a» es lijken op: «op mijn vader».'],
 ['Mijn vader is ouder dan mijn moeder.',0,'Eso compara a tus padres; te pregunta a quién te pareces.'],
 ['Op mijn vader, zeggen ze altijd.',1,'']],
 r:'Dan moet hij een knappe man zijn!',t:'familia'},

{q:'Komt je familie je weleens opzoeken?',qe:'¿Viene tu familia a verte alguna vez?',o:[
 ['Ja, mijn ouders komen in april een weekje.',1,''],
 ['Ja, ik ga met kerst naar huis.',0,'Eso es que tú vas a verlos; te pregunta si ellos vienen.'],
 ['Ja, mijn ouders willen in april te komen.',0,'Tras willen, el infinitivo va sin te.']],
 r:'Leuk! In april staan de tulpen in bloei.',t:'familia'},

{q:'Ben jij de oudste of de jongste thuis?',qe:'¿Eres el mayor o el pequeño de tus hermanos?',o:[
 ['Ik ben achtentwintig, en jij?',0,'Eso es tu edad; te pregunta qué lugar ocupas entre tus hermanos.'],
 ['De middelste: ik heb een ouder broer en een jonger zus.',0,'broer y zus son palabras de: con een, el adjetivo lleva -e: «oudere», «jongere».'],
 ['De middelste: ik heb een oudere broer en een jongere zus.',1,'']],
 r:'Aha, de middelste! Die zijn altijd het gezelligst.',t:'familia'},

{q:'Heb je neefjes of nichtjes?',qe:'¿Tienes sobrinos?',o:[
 ['Ja, mijn broer heeft twee: een jongen en een meisje.',0,'Con un número suelto hace falta er: «mijn broer heeft er twee».'],
 ['Ja, mijn broer heeft twee kleine kinderen.',1,''],
 ['Ja, en ik ben hun favoriete tante.',0,'tante es «tía»; tú serías hun oom.']],
 r:'Wat leuk! Ben jij een leuke oom?',t:'familia'}

]);

/* ---- js/content/chat-4.js ---- */
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
 ['Ja, ik weet wat betekent het.',0,'En la pregunta indirecta, el verbo va al final: «wat het betekent».']],
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
 ['Een beetje, maar ik heb goed gepraktiseerd.',0,'praktiseren es ejercer una profesión (como un médico); «practicar» es oefenen.']],
 r:'Komt goed! Ik duim voor je.',t:'sentimientos'},

{q:'Waar word jij echt blij van?',qe:'¿Qué te hace feliz de verdad?',o:[
 ['Ik word blij als schijnt de zon.',0,'Tras als, el verbo va al final: «als de zon schijnt».'],
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
 ['Ja, ik heb het gisteren geschrijven.',0,'El participio de schrijven es geschreven.']],
 r:'Haha, het hoeft niet perfect te zijn!',t:'fiestas'}

]);

/* ---- js/content/gram-1.js ---- */
/* Woorden · gramática ampliada (1): niet o geen, perfecto con hebben o zijn, pronombres */

addGram('nietgeen',[
 ['Ik heb ___ huisdieren, maar mijn huisgenoot heeft een kat.','geen','niet|nee|niets','No tengo mascotas, pero mi compañero de piso tiene un gato.'],
 ['De bus rijdt vandaag ___.','niet','geen|nee|niets','Hoy no pasa el autobús.'],
 ['Ik heb ___ dorst, dank je.','geen','niet|nee|niets','No tengo sed, gracias.'],
 ['Dit is ___ goed moment om te bellen.','geen','niet|nee|niets','No es un buen momento para llamar.','Adjetivo + sustantivo sin artículo definido: geen.'],
 ['De trein is weer ___ op tijd.','niet','geen|nee|niets','El tren otra vez no llega puntual.'],
 ['Ik heb ___ geld meer.','geen','niet|nee|niets','Ya no me queda dinero.','Ya no + sustantivo: geen … meer.'],
 ['Ze werkt ___ meer bij de werf.','niet','geen|nee|niets','Ya no trabaja en el astillero.','Ya no + verbo: niet meer.'],
 ['Het is ___ ver, je kunt lopen.','niet','geen|nee|niets','No está lejos, puedes ir andando.'],
 ['Sorry, ik heb ___ kleingeld.','geen','niet|nee|niets','Lo siento, no tengo suelto.'],
 ['Ik ken die man ___.','niet','geen|nee|niets','No conozco a ese hombre.'],
 ['Er is ___ melk meer in de koelkast.','geen','niet|nee|niets','Ya no queda leche en la nevera.'],
 ['Ik ben ___ moe, ik heb alleen honger.','niet','geen|nee|niets','No estoy cansado, solo tengo hambre.'],
 ['Bel me ___ na tien uur ’s avonds.','niet','geen|nee|niets','No me llames después de las diez de la noche.'],
 ['Dat is ___ probleem.','geen','niet|nee|niets','No hay problema.'],
 ['Ik vind het ___ erg om even te wachten.','niet','geen|nee|niets','No me importa esperar un poco.'],
 ['Waarom ga je ___ mee naar het feest?','niet','geen|nee|niets','¿Por qué no vienes a la fiesta?'],
 ['Lotte heeft vandaag ___ les.','geen','niet|nee|niets','Lotte hoy no tiene clase.'],
 ['Het restaurant is op maandag ___ open.','niet','geen|nee|niets','El restaurante no abre los lunes.'],
 ['Je hoeft je schoenen ___ uit te doen.','niet','geen|nee|niets','No hace falta que te quites los zapatos.'],
 ['Dit is ___ de goede trein.','niet','geen|nee|niets','Este no es el tren correcto.','Con artículo definido (de, het) va niet.'],
 ['We gaan ___ naar het strand, het regent.','niet','geen|nee|niets','No vamos a la playa, que llueve.'],
 ['Ik heb het huis ___ gezien, alleen foto’s.','nog niet','nog geen|geen nog|niet nog','Todavía no he visto la casa, solo fotos.'],
 ['We hebben ___ nieuwe huisgenoot gevonden.','nog geen','nog niet|niet nog|geen nog','Todavía no hemos encontrado compañero de piso nuevo.','Todavía no + sustantivo sin artículo: nog geen.'],
 ['Hij is ___ Belg, hij is Nederlander.','geen','niet|nee|niets','No es belga, es holandés.'],
 ['Ik bedoel ___ jou, ik bedoel je broer.','niet','geen|nee|niets','No me refiero a ti, me refiero a tu hermano.'],
 ['Het was ___ makkelijk examen.','geen','niet|nee|niets','No fue un examen fácil.'],
 ['Het examen was ___ makkelijk.','niet','geen|nee|niets','El examen no fue fácil.','Adjetivo solo, sin sustantivo detrás: niet.'],
 ['Ik heb ___ last meer van mijn knie.','geen','niet|nee|niets','La rodilla ya no me molesta.'],
 ['Ik kan je ___ goed verstaan.','niet','geen|nee|niets','No te oigo bien.'],
 ['Waarom eet je ___ groente?','geen','niet|nee|niets','¿Por qué no comes verdura?'],
 ['Je moet ___ zo hard werken.','niet','geen|nee|niets','No deberías trabajar tanto.'],
 ['Het is ___ mijn schuld!','niet','geen|nee|niets','¡No es culpa mía!','Con posesivo (mijn, jouw…) va niet.'],
 ['Ik ben ___ student meer, ik werk nu.','geen','niet|nee|niets','Ya no soy estudiante, ahora trabajo.'],
 ['Vergeet je paspoort ___!','niet','geen|nee|niets','¡No te olvides del pasaporte!'],
 ['Waarom ruim je je kamer ___?','niet op','op niet|geen op|niets op','¿Por qué no recoges tu cuarto?','niet va delante del prefijo separable: ruim … niet op.'],
 ['Ik heb de rekening ___.','nog niet betaald','niet nog betaald|nog geen betaald|betaald nog niet','Todavía no he pagado la factura.'],
 ['Er was ___ wind, dus we konden niet zeilen.','helemaal geen','helemaal niet|niet helemaal|geen helemaal','No había nada de viento, así que no pudimos navegar.'],
 ['Ik heb vannacht ___ geslapen.','helemaal niet','helemaal geen|geen helemaal|helemaal nee','Esta noche no he dormido nada.'],
 ['Er is hier ___ supermarkt in de buurt.','geen','niet|nee|niets','Aquí cerca no hay ningún súper.'],
 ['Hij heeft zijn huiswerk ___.','niet gemaakt','gemaakt niet|geen gemaakt|niets gemaakt','No ha hecho los deberes.']
]);

addGram('hebzijn',[
 ['Mijn zus ___ vorig jaar afgestudeerd.','is','heeft|wordt|ben','Mi hermana se graduó el año pasado.'],
 ['___ jullie al eens in Groningen geweest?','Zijn','Hebben|Worden|Is','¿Habéis estado alguna vez en Groninga?'],
 ['Ik ___ voor mijn rijexamen geslaagd!','ben','heb|word|is','¡He aprobado el examen de conducir!','slagen (aprobar) y zakken (suspender) van con zijn.'],
 ['Helaas ___ hij voor zijn examen gezakt.','is','heeft|wordt|ben','Por desgracia, ha suspendido el examen.'],
 ['We ___ de wedstrijd met 8-6 gewonnen.','hebben','zijn|worden|heeft','Hemos ganado el partido 8 a 6.'],
 ['Mijn buren ___ vorige zomer uit elkaar gegaan.','zijn','hebben|worden|is','Mis vecinos lo dejaron el verano pasado.'],
 ['Delft ___ de laatste jaren erg veranderd.','is','heeft|wordt|zijn','Delft ha cambiado mucho en los últimos años.','Sin objeto (algo cambia) → zijn.'],
 ['De klant ___ het ontwerp al drie keer veranderd.','heeft','is|wordt|hebben','El cliente ya ha cambiado el diseño tres veces.','Con objeto (cambiar algo) → hebben.'],
 ['De huurprijzen ___ weer gestegen.','zijn','hebben|worden|is','Los alquileres han vuelto a subir.'],
 ['Het ___ me eindelijk gelukt!','is','heeft|wordt|ben','¡Por fin lo he conseguido!'],
 ['Hoe laat ___ je gisteren thuisgekomen?','ben','heb|word|is','¿A qué hora llegaste ayer a casa?'],
 ['We ___ gisteravond met het team uitgegaan.','zijn','hebben|worden|is','Anoche salimos con el equipo.'],
 ['Ik ___ me bij de gemeente ingeschreven.','heb','ben|word|is','Me he empadronado en el ayuntamiento.','Los reflexivos van con hebben.'],
 ['Emma ___ zich vanochtend verslapen.','heeft','is|wordt|hebben','Esta mañana Emma se ha quedado dormida.'],
 ['Ik ___ in Vigo opgegroeid.','ben','heb|word|is','Me crie en Vigo.'],
 ['Hoe lang ___ je in Japan gebleven?','ben','heb|word|is','¿Cuánto tiempo te quedaste en Japón?'],
 ['We ___ twee uur in de file gestaan.','hebben','zijn|worden|heeft','Hemos estado dos horas en un atasco.'],
 ['De vergadering ___ om negen uur begonnen.','is','heeft|wordt|zijn','La reunión empezó a las nueve.'],
 ['Ik ___ net een nieuw project begonnen.','ben','heb|word|is','Acabo de empezar un proyecto nuevo.','beginnen va con zijn, aunque lleve objeto.'],
 ['___ je de film al gezien?','Heb','Ben|Word|Is','¿Ya has visto la película?'],
 ['Hij ___ vorige maand ziek geweest.','is','heeft|wordt|ben','Estuvo enfermo el mes pasado.'],
 ['Ik ___ vorige week griep gehad.','heb','ben|word|is','La semana pasada tuve gripe.'],
 ['We ___ de hele middag gezeild.','hebben','zijn|worden|heeft','Hemos navegado toda la tarde.','Sin destino, solo la actividad → hebben.'],
 ['We ___ naar Texel gezeild.','zijn','hebben|worden|is','Hemos ido a Texel en velero.','Con destino (naar Texel) → zijn.'],
 ['Ik ___ vanochtend een uur gezwommen.','heb','ben|word|is','Esta mañana he nadado una hora.'],
 ['Hij ___ naar de overkant gezwommen.','is','heeft|wordt|ben','Ha nadado hasta el otro lado.'],
 ['Ik weet niet waarom hij niet gekomen ___.','is','heeft|wordt|ben','No sé por qué no ha venido.'],
 ['Toen ik wakker werd, ___ mijn huisgenoten al vertrokken.','waren','hadden|werden|zijn','Cuando me desperté, mis compañeros de piso ya se habían ido.','Pluscuamperfecto con zijn: waren … vertrokken.'],
 ['Hij ___ zijn telefoon in de trein laten liggen.','heeft','is|wordt|hebben','Se ha dejado el móvil en el tren.'],
 ['Mijn oma ___ vorige week negentig geworden.','is','heeft|wordt|ben','Mi abuela cumplió noventa años la semana pasada.'],
 ['Wie ___ de afwas gedaan?','heeft','is|wordt|hebben','¿Quién ha fregado los platos?'],
 ['Het examen ___ erg meegevallen.','is','heeft|wordt|zijn','El examen ha sido más fácil de lo que esperaba.','meevallen y tegenvallen van con zijn.'],
 ['Ik ___ om zes uur wakker geworden.','ben','heb|word|is','Me he despertado a las seis.'],
 ['Hij ___ voor de tv in slaap gevallen.','is','heeft|wordt|ben','Se ha quedado dormido delante de la tele.'],
 ['Ik ___ veel gereisd voor mijn werk.','heb','ben|word|is','He viajado mucho por trabajo.'],
 ['Mijn broer ___ vorig jaar naar Australië gereisd.','is','heeft|wordt|ben','Mi hermano viajó a Australia el año pasado.'],
 ['Mijn huisgenoot ___ zijn paspoort kwijtgeraakt.','is','heeft|wordt|ben','Mi compañero de piso ha perdido el pasaporte.','kwijtraken (perder) va con zijn.'],
 ['Ahmed ___ vijf jaar in Londen gewoond.','heeft','is|wordt|hebben','Ahmed vivió cinco años en Londres.'],
 ['We ___ gisteren lekker gegeten bij die nieuwe Italiaan.','hebben','zijn|worden|heeft','Ayer comimos muy bien en ese italiano nuevo.'],
 ['Ik ___ de hele avond voor mijn tentamen geleerd.','heb','ben|word|is','He pasado toda la tarde estudiando para el examen.']
]);

addGram('pron',[
 ['Ken jij Sanne? Ik heb ___ gisteren op de markt gezien.','haar','zij|hem|haarzelf','¿Conoces a Sanne? Ayer la vi en el mercado.'],
 ['Mijn ouders komen in mei. Ik heb ___ al een jaar niet gezien.','ze','zij|hun|ons','Mis padres vienen en mayo. Hace un año que no los veo.','Objeto de persona en plural: ze (o hen). «hun» no va como objeto directo.'],
 ['Waar is mijn paraplu? Ik kan ___ nergens vinden.','hem','het|hij|ze','¿Dónde está mi paraguas? No lo encuentro por ningún lado.','de paraplu → hem.'],
 ['Ik heb een nieuw bureau gekocht. ___ staat in mijn kamer.','Het','Hij|Hem|Ze','Me he comprado un escritorio nuevo. Está en mi cuarto.','het bureau → het.'],
 ['Dit is Ahmed. Ik werk met ___ samen.','hem','hij|zijn|zich','Este es Ahmed. Trabajo con él.'],
 ['Lotte en ik gaan verhuizen. ___ nieuwe huis staat in Rotterdam.','Ons','Onze|Wij|Hun','Lotte y yo nos mudamos. Nuestra casa nueva está en Róterdam.','het huis → ons.'],
 ['___ trainer is heel streng.','Onze','Ons|Wij|We','Nuestro entrenador es muy estricto.','de trainer → onze.'],
 ['Kunt u ___ naam even spellen?','uw','u|jouw|jullie','¿Puede deletrear su nombre, por favor?'],
 ['Mag ik ___ iets vragen, mevrouw?','u','uw|jou|zich','¿Le puedo preguntar algo, señora?'],
 ['Mijn buren hebben een hond. ___ hond blaft de hele nacht.','Hun','Hen|Zij|Haar','Mis vecinos tienen un perro. Su perro ladra toda la noche.'],
 ['Ik heb de buren om hulp gevraagd en ___ hebben me geholpen.','ze','hun|hen|haar','Les pedí ayuda a los vecinos y me ayudaron.','Como sujeto: zij o ze. «hun hebben» es un error típico.'],
 ['Dit cadeau is voor ___.','jou','jij|jouw|jouwe','Este regalo es para ti.'],
 ['Is deze jas van jou of van ___?','mij','ik|mijn|mijne','¿Esta chaqueta es tuya o mía?'],
 ['Pieter heeft een nieuwe baan. ___ werkt nu in Den Haag.','Hij','Hem|Zijn|Het','Pieter tiene un trabajo nuevo. Ahora trabaja en La Haya.'],
 ['Wil je ___ even helpen met de boodschappen?','me','ik|mijn|zich','¿Me ayudas un momento con la compra?'],
 ['Ik heb nieuwe schoenen gekocht, maar ___ zijn te klein.','ze','hen|hun|het','Me he comprado zapatos nuevos, pero me quedan pequeños.','Cosas en plural: ze.'],
 ['Hoe heet ___ broer?','jouw','jou|jij|jouwe','¿Cómo se llama tu hermano?'],
 ['Emma en Daan wonen samen. Vanavond eet ik bij ___.','hen','hun|zij|hem','Emma y Daan viven juntos. Esta noche ceno en casa de ellos.','Tras preposición, para personas: hen.'],
 ['We hebben een boot. ___ boot ligt in de haven van Scheveningen.','Onze','Ons|Wij|Hun','Tenemos un barco. Nuestro barco está en el puerto de Scheveningen.','de boot → onze.'],
 ['Ik heb ___ gisteren een berichtje gestuurd, maar hij antwoordt niet.','hem','hij|zijn|hen','Ayer le mandé un mensaje, pero no contesta.'],
 ['Lotte belt ___ moeder elke zondag.','haar','zij|zich|zijzelf','Lotte llama a su madre todos los domingos.'],
 ['Daan is ___ fiets kwijt.','zijn','hem|hij|zich','Daan ha perdido su bici.'],
 ['Kun je ___ de foto’s sturen?','ons','onze|wij|we','¿Nos puedes mandar las fotos?'],
 ['Ik wacht bij het station op ___. Tot straks, jongens!','jullie','jullies|jouw|jij','Os espero en la estación. ¡Hasta luego, chicos!'],
 ['Kun je ___ even zeggen hoe laat het is?','me','mijn|ik|zich','¿Me puedes decir qué hora es?'],
 ['Sanne en ik zijn huisgenoten. ___ wonen vlak bij de Markt.','We','Ons|Onze|Hun','Sanne y yo compartimos piso. Vivimos al lado de la Markt.'],
 ['Wanneer zien we ___ weer?','elkaar','ons|zich|we','¿Cuándo nos volvemos a ver?','El uno al otro: elkaar.'],
 ['Het formulier? Ik heb ___ al ingevuld.','het','hem|ze|hij','¿El formulario? Ya lo he rellenado.','het formulier → het.'],
 ['De fles witte wijn? Ik heb ___ in de koelkast gezet.','hem','het|hij|zijn','¿La botella de vino blanco? La he metido en la nevera.','de fles → hem.'],
 ['Hebben jullie ___ huiswerk al gemaakt?','jullie','jullies|jouwe|jij','¿Ya habéis hecho los deberes?']
]);

/* ---- js/content/gram-2.js ---- */
/* Woorden · gramática ampliada (2): conectores y orden, reflexivos, cuantificadores */

addGram('conect',[
 ['Ik neem een jas mee, ___ het wordt vanavond koud.','want','omdat|dus|daarom','Me llevo un abrigo porque esta noche va a hacer frío.','Tras el conector, orden normal (het wordt…) → want.'],
 ['Ik neem een paraplu mee ___ het vanmiddag gaat regenen.','omdat','want|dus|daarom','Me llevo un paraguas porque esta tarde va a llover.','Verbos al final (gaat regenen) → omdat.'],
 ['De trein had vertraging. ___ kwam ik te laat op college.','Daardoor','Omdat|Want|Hoewel','El tren llevaba retraso. Por eso llegué tarde a clase.','daardoor = por eso, a causa de eso. Lleva inversión.'],
 ['___ ik in Delft woon, fiets ik elke dag.','Sinds','Toen|Tijdens|Daarna','Desde que vivo en Delft, voy en bici todos los días.'],
 ['Bel me ___ je in Rotterdam aankomt.','zodra','sinds|toen|tijdens','Llámame en cuanto llegues a Róterdam.'],
 ['Hij ging naar zijn werk, ___ hij erg verkouden was.','hoewel','want|toch|dus','Fue a trabajar, aunque estaba muy resfriado.'],
 ['Het water was ijskoud. ___ gingen we zwemmen.','Toch','Hoewel|Omdat|Want','El agua estaba helada. Aun así, nos metimos a nadar.','toch al principio: inversión (gingen we).'],
 ['Ik weet niet ___ de winkel op zondag open is.','of','als|wat|want','No sé si la tienda abre los domingos.','«Si» de duda (no sé si…) → of. «Si» de condición → als.'],
 ['___ je klaar bent, kunnen we gaan.','Als','Toen|Of|Want','Cuando estés listo, nos vamos.'],
 ['___ we vorige zomer in Parijs waren, regende het elke dag.','Toen','Als|Wanneer|Of','Cuando estuvimos en París el verano pasado, llovió todos los días.','Un momento concreto del pasado → toen.'],
 ['Ik maak het eten klaar ___ jij de tafel dekt.','terwijl','tijdens|toen|daarna','Yo hago la comida mientras tú pones la mesa.'],
 ['Ik zet twee wekkers, ___ ik me niet verslaap.','zodat','want|dus|daarom','Pongo dos despertadores para no quedarme dormido.'],
 ['Schiet op, ___ missen we de trein!','anders','want|omdat|zodat','¡Date prisa, que si no perdemos el tren!','anders = si no. Lleva inversión.'],
 ['Ik heb het druk. ___ heb ik morgen een deadline.','Bovendien','Omdat|Hoewel|Want','Estoy liado. Además, mañana tengo una entrega.'],
 ['Eerst doe ik boodschappen, ___ kook ik.','dan','als|toen|want','Primero hago la compra y luego cocino.'],
 ['___ ik de mail had gelezen, belde ik de klant.','Nadat','Na|Daarna|Tijdens','Después de leer el correo, llamé al cliente.','na va con sustantivo (na het eten); con frase, nadat.'],
 ['Ik kan niet komen, ___ ik moet morgen vroeg op.','want','omdat|hoewel|zodat','No puedo ir porque mañana tengo que madrugar.','Orden normal (ik moet…) → want.'],
 ['Ze is vandaag thuis ___ ze op de monteur moet wachten.','omdat','want|dus|daarom','Hoy está en casa porque tiene que esperar al técnico.','Verbos al final (moet wachten) → omdat.'],
 ['Het museum is dicht, ___ we gaan naar een café.','dus','daarom|omdat|want','El museo está cerrado, así que vamos a un café.','Sin inversión (we gaan) → dus.'],
 ['Mijn fiets is kapot. ___ ga ik vandaag met de bus.','Daarom','Omdat|Want|Hoewel','Tengo la bici rota. Por eso hoy voy en autobús.','daarom al principio: inversión (ga ik).'],
 ['Hij praat ___ hij alles weet.','alsof','zoals|want|dus','Habla como si lo supiera todo.'],
 ['___ je wilt, kun je bij ons blijven slapen.','Als','Of|Toen|Dan','Si quieres, te puedes quedar a dormir en casa.'],
 ['Zowel Lotte ___ Daan spelen waterpolo.','als','en|of|dan','Tanto Lotte como Daan juegan al waterpolo.','zowel … als = tanto … como.'],
 ['Hij spreekt niet alleen Engels, ___ ook Chinees.','maar','en|of|dan','No solo habla inglés, sino también chino.','niet alleen … maar ook = no solo … sino también.'],
 ['Ik weet precies ___ je bedoelt.','wat','dat|of|als','Sé exactamente lo que quieres decir.'],
 ['Kun je me vertellen ___ de bus vertrekt?','hoe laat','wat|welke|als','¿Me puedes decir a qué hora sale el autobús?'],
 ['Weet jij ___ deze tas is?','van wie','wie van|van wat|wiens van','¿Sabes de quién es este bolso?'],
 ['Ik hoop ___ het morgen droog blijft.','dat','of|wat|als','Espero que mañana no llueva.'],
 ['Ik zou graag meegaan, ___ ik moet nog werken.','maar','omdat|hoewel|terwijl','Me encantaría ir, pero todavía tengo que trabajar.'],
 ['___ ik nog geen Nederlands sprak, vond ik alles moeilijk.','Toen','Als|Wanneer|Sinds','Cuando todavía no hablaba neerlandés, todo me parecía difícil.'],
 ['Ik ben blij ___ je er bent.','dat','of|want|wat','Me alegro de que estés aquí.'],
 ['Hij is te laat ___ hij de bus heeft gemist.','omdat','want|dus|daarom','Llega tarde porque ha perdido el autobús.'],
 ['We moeten opschieten, ___ de winkel gaat om zes uur dicht.','want','omdat|zodat|tenzij','Tenemos que darnos prisa, que la tienda cierra a las seis.'],
 ['Ik blijf in Nederland ___ ik hier een baan vind.','als','toen|of|want','Me quedo en Holanda si encuentro trabajo aquí.'],
 ['Kom je morgen, ___ heb je geen tijd?','of','want|omdat|toen','¿Vienes mañana o no tienes tiempo?'],
 ['Ik blijf thuis, want ik ___.','heb hoofdpijn','hoofdpijn heb|hoofdpijn hebben|hoofdpijn hebt','Me quedo en casa porque me duele la cabeza.','Tras want, orden normal: sujeto + verbo.'],
 ['Ik blijf thuis omdat ik ___.','hoofdpijn heb','heb hoofdpijn|hoofdpijn hebben|hoofdpijn hebt','Me quedo en casa porque me duele la cabeza.','Tras omdat, el verbo va al final.'],
 ['Hoewel het ___, gaan we toch zwemmen.','koud is','is koud|koud zijn|koud bent','Aunque hace frío, vamos a nadar igualmente.'],
 ['Als het morgen mooi weer is, ___ naar het strand.','gaan we','we gaan|we gaat|gaat we','Si mañana hace buen tiempo, vamos a la playa.','Subordinada delante → la principal empieza por el verbo.'],
 ['Omdat de bus niet reed, ___ te laat op mijn werk.','kwam ik','ik kwam|kom ik|ik kom','Como no pasaba el autobús, llegué tarde al trabajo.'],
 ['Het regent, maar ___ toch.','we gaan','gaan we|we gaat|wij gaat','Llueve, pero vamos igualmente.','Tras maar, orden normal.'],
 ['Hij zei dat ___.','hij de mail al had gestuurd','hij had de mail al gestuurd|had hij de mail al gestuurd|hij al had de mail gestuurd','Dijo que ya había enviado el correo.','Tras dat, todos los verbos van al final.'],
 ['Ik denk dat ___.','we de deadline niet halen','we halen de deadline niet|halen we de deadline niet|we de deadline halen niet','Creo que no llegamos a la fecha de entrega.'],
 ['Terwijl ik ___, ging de telefoon.','aan het koken was','was aan het koken|aan het koken waren|kookte ik','Mientras estaba cocinando, sonó el teléfono.'],
 ['Toen ik ___, sliep iedereen al.','thuiskwam','kwam thuis|kwam ik thuis|thuiskomen','Cuando llegué a casa, ya estaban todos dormidos.','Tras toen, el verbo al final (y el separable, junto).']
]);

addGram('reflex',[
 ['Hoe voel jij ___ vandaag?','je','jou|zich|me','¿Cómo te encuentras hoy?'],
 ['Ik schaam ___ voor mijn fout.','me','zich|mijn|je','Me avergüenzo de mi error.'],
 ['We moeten ___ goed voorbereiden op de vergadering.','ons','zich|we|onze','Tenemos que prepararnos bien para la reunión.'],
 ['Jullie hoeven ___ niet te haasten.','je','jullie|zich|ons','No hace falta que os deis prisa.','jullie → je.'],
 ['Mijn huisgenoot bemoeit ___ overal mee.','zich','hem|haar|je','Mi compañero de piso se mete en todo.'],
 ['Gedraag ___ een beetje!','je','jou|zich|me','¡Compórtate un poco!'],
 ['Ik heb ___ ingeschreven voor de cursus.','me','zich|mijn|ik','Me he inscrito en el curso.'],
 ['Ze kleedt ___ om na de training.','zich','zij|hij|haarzelf','Se cambia de ropa después del entrenamiento.'],
 ['Hij ___ elke dag om zes uur wakker.','wordt','wordt zich|wordt hem|zich wordt','Se despierta todos los días a las seis.','Despertarse = wakker worden, sin pronombre.'],
 ['Ga even ___, ik kom zo.','zitten','zich zitten|je zitten|zitten je','Siéntate un momento, enseguida voy.','Sentarse = gaan zitten, sin pronombre.'],
 ['We ___ vanavond thuis.','blijven','blijven ons|ons blijven|blijven zich','Esta noche nos quedamos en casa.','Quedarse = blijven, sin pronombre.'],
 ['Hij ___ snel boos.','wordt','wordt zich|wordt hem|zich wordt','Se enfada enseguida.','Enfadarse = boos worden, sin pronombre.'],
 ['Ik herinner ___ die avond nog goed.','me','mijn|zich|je','Me acuerdo bien de aquella noche.'],
 ['De kinderen vermaken ___ prima in het zwembad.','zich','zij|hun|hunzelf','Los niños se lo pasan en grande en la piscina.'],
 ['Hebben jullie ___ geamuseerd op het feest?','je','jullie|zich|jouw','¿Os lo pasasteis bien en la fiesta?'],
 ['Daan heeft ___ bedacht: hij komt toch.','zich','hem|hij|zijn','Daan ha cambiado de idea: al final viene.'],
 ['Houd ___ aan de regels!','je','jou|zich|me','¡Cumple las normas!'],
 ['U moet ___ eerst bij de receptie melden.','zich','uw|zijn|jij','Primero tiene que presentarse en recepción.','Con u, el reflexivo suele ser zich (también vale u: u moet u melden).'],
 ['De nieuwe collega stelt ___ voor aan het team.','zich','hij|zijn|zij','El nuevo compañero se presenta al equipo.'],
 ['Kun jij ___ voorstellen dat je hier tien jaar woont?','je','jou|zich|me','¿Te imaginas vivir aquí diez años?'],
 ['Mijn ouders maken ___ zorgen om mij.','zich','hen|hun|ze','Mis padres se preocupan por mí.'],
 ['We hebben ___ gisteren aangemeld voor het toernooi.','ons','zich|we|onze','Ayer nos apuntamos al torneo.'],
 ['Ze praat vaak tegen ___.','zichzelf','zich|haarzelf|zelf','A menudo habla consigo misma.','Tras preposición, «sí mismo/misma» = zichzelf.'],
 ['Ik ___ om elf uur naar bed.','ga','ga me|me ga|ga mij','Me acuesto a las once.','Acostarse = naar bed gaan, sin pronombre.'],
 ['Waarom ontspan je ___ niet even?','je','jou|zich|me','¿Por qué no te relajas un rato?'],
 ['Sanne heeft ___ bij onze club aangesloten.','zich','haar|ze|hem','Sanne se ha unido a nuestro club.'],
 ['Ik interesseer ___ erg voor scheepsbouw.','me','zich|mijn|ik','Me interesa mucho la construcción naval.'],
 ['Waar hebben jullie ___ leren kennen?','elkaar','je|jullie|zich','¿Dónde os conocisteis?','El uno al otro: elkaar.'],
 ['Hij ___ van zijn fiets.','viel','viel zich|viel hem|zich viel','Se cayó de la bici.','Caerse = vallen, sin pronombre.'],
 ['Hij ___ vroeg weg van het feest.','ging','ging zich|ging hem|zich ging','Se fue pronto de la fiesta.','Irse = weggaan, sin pronombre.']
]);

addGram('cuant',[
 ['Ik heb ze ___ uitgenodigd.','allemaal','alle|alles|iedereen','Los he invitado a todos.','«Todos» suelto, detrás del verbo o del pronombre: allemaal.'],
 ['___ kamers in het huis hebben een raam.','Alle','Allemaal|Alles|Elke','Todas las habitaciones de la casa tienen ventana.','alle + sustantivo en plural.'],
 ['Is ___ klaar voor het feest?','alles','alle|allemaal|elke','¿Está todo listo para la fiesta?'],
 ['Zijn jullie ___ klaar? Dan gaan we.','allemaal','alle|alles|iedereen','¿Estáis todos listos? Pues nos vamos.'],
 ['___ is welkom op mijn verjaardag.','Iedereen','Allemaal|Alle|Elke','Todo el mundo está invitado a mi cumpleaños.'],
 ['Iedereen ___ blij met het resultaat.','is','zijn|ben|bent','Todo el mundo está contento con el resultado.','iedereen va con el verbo en singular.'],
 ['Ik ga ___ week twee keer naar de sportschool.','elke','elk|alle|hele','Voy al gimnasio dos veces por semana.'],
 ['We gaan ___ jaar op vakantie naar Spanje.','elk','elke|alle|hele','Cada año nos vamos de vacaciones a España.','het jaar → elk jaar.'],
 ['Het heeft de ___ nacht gestormd.','hele','heel|elke|alle','Ha habido temporal toda la noche.'],
 ['Ik ben het ___ weekend thuis gebleven.','hele','heel|elk|alle','Me he quedado en casa todo el fin de semana.','het weekend → het hele weekend.'],
 ['___ heeft mijn fiets gezien.','Niemand','Niets|Nergens|Geen','Nadie ha visto mi bici.'],
 ['Er is ___ aan de hand, hoor.','niets','niemand|nergens|geen','No pasa nada, tranquilo.'],
 ['Ik heb ___ gezocht, maar ik kan mijn pas niet vinden.','overal','nergens|iedereen|alle','He buscado por todas partes, pero no encuentro mi tarjeta.'],
 ['Is er ___ die Spaans spreekt?','iemand','iets|ergens|iedereen','¿Hay alguien que hable español?'],
 ['Heb je ___ nodig uit de supermarkt?','iets','iemand|ergens|elke','¿Necesitas algo del súper?'],
 ['Dit is niet mijn jas; die is van iemand ___.','anders','andere|ander|anderen','Esta chaqueta no es mía; es de otra persona.','Otra persona = iemand anders; otra cosa = iets anders.'],
 ['Ik heb ___ suiker in mijn koffie gedaan.','een beetje','een paar|enkele|sommige','Me he echado un poco de azúcar en el café.','Con incontables, een beetje; con contables, een paar.'],
 ['Ik heb ___ vragen over het contract.','een paar','een beetje|iets|weinig van','Tengo un par de preguntas sobre el contrato.'],
 ['___ van mijn vrienden wonen in Amsterdam.','Sommige','Sommig|Alles|Iemand','Algunos de mis amigos viven en Ámsterdam.'],
 ['___ werk doen we in de eerste week.','Het meeste','De meeste|Meest|Al de','La mayor parte del trabajo la hacemos la primera semana.','het werk → het meeste werk.'],
 ['___ mijn vrienden komen naar het feest.','Al','Alle|Alles|Allemaal','Todos mis amigos vienen a la fiesta.','Delante de posesivo o artículo: al (al mijn vrienden, al het geld).'],
 ['___ teams spelen vandaag goed.','Beide','Allebei|Alles|Elke','Los dos equipos juegan bien hoy.'],
 ['Er wonen hier ___ mensen.','weinig','een beetje|sommig|elk','Aquí vive poca gente.'],
 ['Ik heb ___ boeken over schepen.','veel','heel|erg|zeer','Tengo muchos libros sobre barcos.','Mucho, muchos = veel. heel y erg van con adjetivos.'],
 ['___ kind krijgt een cadeautje.','Elk','Elke|Alle|Hele','Cada niño recibe un regalito.','het kind → elk kind.'],
 ['Ik heb ___ gegeten sinds vanochtend.','niets','niemand|geen|nooit','No he comido nada desde esta mañana.'],
 ['Ik ben mijn sleutels ___ kwijtgeraakt.','ergens','iets|iemand|overal','He perdido las llaves en algún sitio.'],
 ['Ik ben ___ zo gelukkig geweest als in Vigo.','nergens','niemand|niets|geen','En ningún sitio he sido tan feliz como en Vigo.'],
 ['___ van ons heeft een auto.','Niemand','Niets|Nergens|Nooit','Ninguno de nosotros tiene coche.'],
 ['Hoeveel kost dat ___ bij elkaar?','allemaal','alle|elke|iedereen','¿Cuánto cuesta todo eso junto?'],
 ['Het is ___ koud om te zwemmen.','te','te veel|veel|teveel','Hace demasiado frío para nadar.','Con adjetivo, te; con sustantivo o verbo, te veel.'],
 ['Ik heb ___ gedaan wat ik kon.','alles','alle|allemaal|elke','He hecho todo lo que he podido.'],
 ['Ze heeft ___ haar examens gehaald.','al','alle|alles|allemaal','Ha aprobado todos sus exámenes.'],
 ['De trein naar Den Haag gaat ___ kwartier.','elk','elke|alle|hele','El tren a La Haya pasa cada cuarto de hora.','het kwartier → elk kwartier.'],
 ['Mijn ouders werken ___ in een ziekenhuis.','allebei','alle|alles|elke','Mis padres trabajan los dos en un hospital.']
]);

/* ---- js/content/gram-3.js ---- */
/* Woorden · gramática ampliada (3): infinitivo con o sin te, plurales, diminutivos */

addGram('teinf',[
 ['Kunnen we de vergadering naar donderdag ___?','verplaatsen','te verplaatsen|verplaatst|verplaatsen te','¿Podemos pasar la reunión al jueves?'],
 ['Je moet dit formulier uiterlijk vrijdag ___.','invullen','in te vullen|te invullen|ingevuld','Tienes que rellenar este formulario como muy tarde el viernes.'],
 ['Hij heeft beloofd de huur op tijd ___.','te betalen','betalen|betaald|om betalen','Ha prometido pagar el alquiler a tiempo.'],
 ['We gaan zaterdag met de club ___.','zeilen','te zeilen|gezeild|zeilt','El sábado vamos a navegar con el club.'],
 ['Ik laat mijn fiets ___.','repareren','te repareren|gerepareerd|repareert','Voy a llevar la bici a que me la arreglen.','laten + infinitivo, sin te.'],
 ['Ze staat al tien minuten bij de bushalte ___.','te wachten','wachten|gewacht|aan wachten','Lleva diez minutos esperando en la parada del autobús.'],
 ['Hij heeft besloten in Nederland ___.','te blijven','blijven|gebleven|om blijven','Ha decidido quedarse en Holanda.'],
 ['Kom je vanavond bij ons ___?','eten','te eten|gegeten|eet','¿Vienes a cenar a casa esta noche?','komen + infinitivo, sin te.'],
 ['Ik zie de bus al ___.','aankomen','aan te komen|te aankomen|aangekomen','Ya veo llegar el autobús.'],
 ['Ik hoor de kinderen in de tuin ___.','spelen','te spelen|gespeeld|speelt','Oigo a los niños jugar en el jardín.'],
 ['Hij blijft maar ___ over zijn nieuwe auto.','praten','te praten|gepraat|praat','No para de hablar de su coche nuevo.','blijven + infinitivo, sin te.'],
 ['Je hoeft niet op mij ___.','te wachten','wachten|gewacht|om wachten','No hace falta que me esperes.','hoeven + te.'],
 ['Ik heb geen tijd ___ te koken.','om','voor|te|aan','No tengo tiempo para cocinar.'],
 ['Hij vertrok zonder gedag ___ zeggen.','te','om|aan|voor','Se fue sin decir adiós.','zonder + te + infinitivo.'],
 ['Het is belangrijk om goed ___.','te slapen','slapen|geslapen|slaapt','Es importante dormir bien.'],
 ['Ik ben vergeten de verwarming ___.','uit te zetten','te uitzetten|uitzetten|uitgezet','Se me ha olvidado apagar la calefacción.','En los separables, te va en medio: uit te zetten.'],
 ['Wie gaat er vandaag de keuken ___?','schoonmaken','schoon te maken|te schoonmaken|schoongemaakt','¿Quién va a limpiar hoy la cocina?','gaan + infinitivo, sin te.'],
 ['Probeer de keuken vandaag ___.','schoon te maken','te schoonmaken|schoonmaken|schoongemaakt','Intenta limpiar la cocina hoy.','proberen + te, y en los separables te va en medio.'],
 ['Wat ben je ___?','aan het doen','te doen|aan te doen|om te doen','¿Qué estás haciendo?'],
 ['Zou je het raam even willen ___?','dichtdoen','dicht te doen|te dichtdoen|dichtgedaan','¿Podrías cerrar la ventana, por favor?'],
 ['Mag ik hier mijn fiets ___?','neerzetten','neer te zetten|te neerzetten|neergezet','¿Puedo dejar aquí la bici?'],
 ['We zaten de hele avond ___.','te kletsen','kletsen|gekletst|aan kletsen','Estuvimos toda la noche charlando.','zitten, staan, liggen + te + infinitivo.'],
 ['Ik begin het systeem ___.','te begrijpen','begrijpen|begrepen|begrijp','Empiezo a entender el sistema.'],
 ['Ze weigert ___.','mee te gaan','te meegaan|meegaan|meegegaan','Se niega a venir con nosotros.'],
 ['Ik hoop je snel weer ___.','te zien','zien|gezien|zie','Espero verte pronto.'],
 ['Ik ben van plan om volgend jaar ___.','te verhuizen','verhuizen|verhuisd|verhuis','Tengo pensado mudarme el año que viene.'],
 ['Ik moet om zes uur ___.','opstaan','op te staan|te opstaan|opgestaan','Tengo que levantarme a las seis.'],
 ['Ik haat het om vroeg ___.','op te staan','opstaan|te opstaan|opgestaan','Odio madrugar.'],
 ['Ik heb nog veel ___.','te doen','doen|om doen|aan doen','Todavía tengo mucho que hacer.'],
 ['We gaan proberen het ontwerp voor de zomer ___.','af te ronden','te afronden|afronden|afgerond','Vamos a intentar terminar el diseño antes del verano.']
]);

addGram('plural',[
 ['de straat → plural','straten','straaten|stratten|straats','las calles'],
 ['het jaar → plural','jaren','jaaren|jarren|jaars','los años'],
 ['de week → plural','weken','weeken|wekken|weeks','las semanas'],
 ['het uur → plural','uren','uuren|urren|uurs','las horas'],
 ['de taal → plural','talen','taalen|tallen|taals','los idiomas'],
 ['de naam → plural','namen','naamen|nammen|naams','los nombres'],
 ['de boot → plural','boten','booten|botten|boots','los barcos'],
 ['de vraag → plural','vragen','vraagen|vraggen|vraags','las preguntas'],
 ['de buur → plural','buren','buuren|burren|buurs','los vecinos'],
 ['de bus → plural','bussen','busen|buss|busses','los autobuses'],
 ['de kat → plural','katten','katen|kats|kaatten','los gatos'],
 ['de fles → plural','flessen','flesen|fless|flesses','las botellas'],
 ['de zus → plural','zussen','zusen|zuss|zuzen','las hermanas'],
 ['de stap → plural','stappen','stapen|staps|stappens','los pasos'],
 ['het plan → plural','plannen','planen|plans|plannes','los planes'],
 ['de brug → plural','bruggen','brugen|brugs|bruggens','los puentes'],
 ['de golf → plural','golven','golfen|golfs|golffen','las olas'],
 ['de fotograaf → plural','fotografen','fotograven|fotograafen|fotograffen','los fotógrafos','Excepción: la f se queda (fotografen).'],
 ['de chef → plural','chefs','cheven|chefen|cheffen','los jefes','Palabra extranjera: -s, y la f no cambia.'],
 ['de kaas → plural','kazen','kaasen|kaazen|kaases','los quesos'],
 ['de neus → plural','neuzen','neusen|neuzzen|neuses','las narices'],
 ['de prijs → plural','prijzen','prijsen|prijses|prijzzen','los precios'],
 ['de vogel → plural','vogels','vogelen|vogel’s|voggels','los pájaros'],
 ['de sleutel → plural','sleutels','sleutelen|sleutel’s|sleuttels','las llaves'],
 ['de keuken → plural','keukens','keukenen|keuken’s|keukes','las cocinas'],
 ['de computer → plural','computers','computeren|computer’s|computeres','los ordenadores'],
 ['de broer → plural','broers','broeren|broer’s|broerren','los hermanos','Irregular: -s.'],
 ['de oom → plural','ooms','omen|oomen|oom’s','los tíos','Irregular: -s.'],
 ['de kok → plural','koks','kokken|koken|kok’s','los cocineros','Irregular: -s.'],
 ['het lied → plural','liederen','lieden|lieds|liedderen','las canciones','Irregular: -eren, como kinderen.'],
 ['de koe → plural','koeien','koes|koeën|koeen','las vacas','Irregular: koeien.'],
 ['de radio → plural','radio’s','radios|radioen|radio’en','las radios'],
 ['de euro → plural','euro’s','euros|euroen|euro’en','los euros'],
 ['de hobby → plural','hobby’s','hobbys|hobbies|hobby’en','las aficiones'],
 ['het cadeau → plural','cadeaus','cadeau’s|cadeauen|cadeaux','los regalos','Tras -eau, solo -s y sin apóstrofo.'],
 ['het idee → plural','ideeën','ideeen|idee’s|ideën','las ideas','-ee acentuada al final → -ën, con diéresis.'],
 ['de zee → plural','zeeën','zeeen|zee’s|zeën','los mares'],
 ['de familie → plural','families','familieën|familie’s|familiën','las familias','-ie sin acento → -s.'],
 ['de mogelijkheid → plural','mogelijkheden','mogelijkheiden|mogelijkheids|mogelijkhedden','las posibilidades','-heid → -heden.'],
 ['de vergadering → plural','vergaderingen','vergaderings|vergaderinggen|vergaderingens','las reuniones'],
 ['de gebeurtenis → plural','gebeurtenissen','gebeurtenisen|gebeurtenis’s|gebeurtenizzen','los acontecimientos'],
 ['het probleem → plural','problemen','probleemen|problems|probleems','los problemas'],
 ['de telefoon → plural','telefoons','telefonen|telefoonen|telefoon’s','los teléfonos','Irregular: -s.'],
 ['het gat → plural','gaten','gatten|gats|gaaten','los agujeros','Irregular: la a se alarga (gaten).'],
 ['het dak → plural','daken','dakken|daks|daaken','los tejados','Irregular: la a se alarga (daken).']
]);

addGram('dimin',[
 ['het brood → diminutivo','broodje','broodtje|brodje|broodetje','el bocadillo','Un broodje es un bocadillo o un panecillo.'],
 ['de kaart → diminutivo','kaartje','kaarttje|kaartetje|kaartpje','el billete','Een kaartje = un billete o una entrada.'],
 ['de fiets → diminutivo','fietsje','fietstje|fietsetje|fietspje','la bicicletita'],
 ['het stuk → diminutivo','stukje','stuktje|stukkje|stukketje','el trocito'],
 ['de koek → diminutivo','koekje','koektje|koeketje|koekpje','la galleta'],
 ['het gat → diminutivo','gaatje','gatje|gattetje|gatetje','el agujerito','Irregular: gat → gaatje. Een gaatje en un diente es una caries.'],
 ['het uur → diminutivo','uurtje','uurje|uuretje|uurpje','la horita'],
 ['de schoen → diminutivo','schoentje','schoenje|schoenetje|schoenpje','el zapatito'],
 ['de telefoon → diminutivo','telefoontje','telefoonje|telefoonetje|telefoonpje','la llamada','Een telefoontje = una llamada de teléfono.'],
 ['de tuin → diminutivo','tuintje','tuinje|tuinetje|tuinpje','el jardincito'],
 ['de keuken → diminutivo','keukentje','keukenje|keukennetje|keukenpje','la cocinita','Tras -en sin acento: -tje.'],
 ['de jongen → diminutivo','jongetje','jongentje|jongenje|jongennetje','el niño pequeño','Irregular: jongen → jongetje.'],
 ['de koffie → diminutivo','koffietje','koffieje|koffiepje|koffiëtje','el cafecito'],
 ['het cadeau → diminutivo','cadeautje','cadeauje|cadeau’tje|cadeaupje','el regalito'],
 ['de baby → diminutivo','baby’tje','babytje|babyje|baby’je','el bebé chiquitín','Tras y: ’tje, con apóstrofo.'],
 ['de opa → diminutivo','opaatje','opatje|opaje|opa’tje','el abuelito','Vocal final: se dobla y + tje (opaatje).'],
 ['de lepel → diminutivo','lepeltje','lepelje|lepelletje|lepelpje','la cucharilla','Tras -el sin acento: -tje.'],
 ['het kwartier → diminutivo','kwartiertje','kwartierje|kwartieretje|kwartierpje','el cuartito de hora'],
 ['de naam → diminutivo','naampje','naamtje|naamje|naametje','el nombrecito'],
 ['de duim → diminutivo','duimpje','duimtje|duimje|duimetje','el pulgarcito'],
 ['de droom → diminutivo','droompje','droomtje|droomje|droometje','el sueñecito'],
 ['de bezem → diminutivo','bezempje','bezemtje|bezemje|bezemmetje','la escobita','Tras -em sin acento: -pje.'],
 ['het scherm → diminutivo','schermpje','schermtje|schermje|schermetje','la pantallita'],
 ['de bel → diminutivo','belletje','belje|beltje|belpje','la campanita','Iemand een belletje geven = dar un toque (llamar).'],
 ['de pil → diminutivo','pilletje','pilje|piltje|pilpje','la pastillita'],
 ['de pan → diminutivo','pannetje','panje|pantje|panpje','el cacito'],
 ['de bon → diminutivo','bonnetje','bonje|bontje|bonpje','el tique de compra','Een bonnetje = el tique de la compra.'],
 ['de bom → diminutivo','bommetje','bomje|bomtje|bompje','la bomba (al tirarse al agua)','Een bommetje = tirarse al agua en bomba.'],
 ['de ster → diminutivo','sterretje','sterje|stertje|sterpje','la estrellita'],
 ['het ding → diminutivo','dingetje','dingje|dingtje|dinkje','la cosita','Sílaba con acento (ding): -etje, no -kje.'],
 ['het hotel → diminutivo','hotelletje','hotelje|hoteltje|hotelpje','el hotelito','Acento al final (ho-tel): -letje.'],
 ['de ketting → diminutivo','kettinkje','kettingje|kettingetje|kettingtje','la cadenita','-ing sin acento → -inkje.'],
 ['de tekening → diminutivo','tekeninkje','tekeningje|tekeningetje|tekeningtje','el dibujito'],
 ['het eten → diminutivo','etentje','eetje|etenje|etennetje','la cena con amigos','Een etentje = una cena fuera o con amigos.'],
 ['het feest → diminutivo','feestje','feesttje|feestetje|feestpje','la fiestecita']
]);

/* ---- js/content/gram-4.js ---- */
/* Woorden · gramática ampliada (4): ortografía, compuestos y derivadas, relativos */

addGram('spell',[
 ['Wij ___ elke dinsdag.','zwemmen','zwemen|zweemen|zwemmmen','Nadamos todos los martes.','Vocal corta: se dobla la consonante (zwem-men).'],
 ['Hij ___ zijn fiets nooit op slot.','zet','zett|zed|zeet','Nunca le pone el candado a la bici.','zetten: raíz zet; zet + t = zet (no se escribe tt).'],
 ['Ik ___ je morgen een berichtje.','stuur','stur|stuurt|stuuer','Mañana te mando un mensaje.'],
 ['Hij ___ een nieuwe kamer.','zoekt','zoekd|zookt|zoect','Busca una habitación nueva.'],
 ['Ze ___ al een uur in de file.','staat','staad|stat|staadt','Lleva una hora en un atasco.'],
 ['Hij ___ altijd de bus van acht uur.','neemt','nemt|neempt|neemd','Siempre coge el autobús de las ocho.'],
 ['Waarom ___ je zo laat?','bel','belt|bell|beld','¿Por qué llamas tan tarde?','Con je detrás del verbo, sin -t.'],
 ['___ hij morgen?','Rijdt','Rijd|Rijt|Reidt','¿Conduce él mañana?','Solo jij/je pierde la -t al ir detrás; hij no: rijdt hij.'],
 ['___ jij morgen?','Rijd','Rijdt|Rijt|Reid','¿Conduces tú mañana?'],
 ['Het vliegtuig ___ om drie uur.','landt','land|lant|landd','El avión aterriza a las tres.'],
 ['___ u al geholpen?','Wordt','Word|Wort|Wordd','¿Ya le atienden?','Con u, la -t se mantiene: wordt u.'],
 ['Wat ___ jouw broer van het plan?','vindt','vind|vint|vindd','¿Qué piensa tu hermano del plan?','El sujeto es «jouw broer» (él): vindt.'],
 ['Zij ___ veel over haar werk.','vertelt','verteld|vertellt|verteldt','Cuenta muchas cosas de su trabajo.'],
 ['Hij ___ volgende week naar Utrecht.','verhuist','verhuisd|verhuizt|verhuisdt','Se muda a Utrecht la semana que viene.'],
 ['Ze is vorige maand ___.','verhuisd','verhuist|verhuizd|verhuisdt','Se mudó el mes pasado.','Participio: la raíz verhuiz- lleva z → -d (verhuisd).'],
 ['Ik heb vandaag twintig kilometer ___.','gefietst','gefietsd|gefiets|gefietzt','Hoy he hecho veinte kilómetros en bici.'],
 ['We hebben samen ___.','gekookt','gekookd|gekoocht|gekoct','Hemos cocinado juntos.'],
 ['Hij heeft drie jaar in Leiden ___.','gestudeerd','gestudeert|gestudeerdt|gestudierd','Estudió tres años en Leiden.'],
 ['Wie heeft de rekening ___?','betaald','betaalt|betaaldt|gebetaald','¿Quién ha pagado la cuenta?'],
 ['We hebben een huisje aan zee ___.','gehuurd','gehuurt|gehuurdt|gehuuren','Hemos alquilado una casita junto al mar.'],
 ['De kinderen hebben de hele middag ___.','gespeeld','gespeelt|gespeeldt|gespeelld','Los niños han jugado toda la tarde.'],
 ['Hij heeft de deur blauw ___.','geverfd','geverft|geverfdt|geverv','Ha pintado la puerta de azul.','verven: raíz con v → -d (geverfd).'],
 ['Wie heeft het raam ___?','geopend','geopent|geopendt|geoppend','¿Quién ha abierto la ventana?'],
 ['Ik heb nog nooit zo hard ___.','gelachen','gelacht|gelachd|gelaacht','Nunca me he reído tanto.'],
 ['Hij ___ niet op mijn vraag.','antwoordde','antwoorde|antwoordte|antwoordden','No contestó a mi pregunta.','Raíz antwoord + de → antwoordde (dos d).'],
 ['Gisteren ___ we twee uur met de buren.','praatten','praaten|prateden|praatte','Ayer estuvimos dos horas hablando con los vecinos.','Raíz praat + ten → praatten (dos t).'],
 ['Daan ___ in die tijd heel gezond.','leefde','leefte|leevde|leefden','En aquella época Daan llevaba una vida muy sana.','leven: cuenta la v del infinitivo → -de (leefde).'],
 ['Jullie ___ te snel.','lopen','loopen|lopten|lopenn','Andáis demasiado rápido.'],
 ['Zij ___ altijd over het weer.','praten','praaten|pratten|praatn','Siempre hablan del tiempo.'],
 ['Wij ___ de tassen op de stoel.','leggen','leegen|leggenn|lechen','Ponemos las bolsas en la silla.'],
 ['We eten vanavond ___ kaas.','Franse','franse','Esta noche comemos queso francés.','Los adjetivos de nacionalidad también llevan mayúscula.'],
 ['Groningen ligt in het ___ van Nederland.','noorden','Noorden','Groninga está en el norte de Holanda.','Los puntos cardinales van en minúscula.'],
 ['Ahmed spreekt ook ___.','Arabisch','arabisch','Ahmed también habla árabe.'],
 ['De ___ in Nederland is vaak nat.','winter','Winter','El invierno en Holanda suele ser húmedo.','Las estaciones van en minúscula.'],
 ['Mijn zus woont in de ___.','Verenigde Staten','verenigde staten|Verenigde staten','Mi hermana vive en Estados Unidos.'],
 ['Ik ben ___, maar ik woon in Delft.','Spanjaard','spanjaard|Spanjard|Spanjaart','Soy español, pero vivo en Delft.'],
 ['Hij werkt voor een ___ bedrijf.','Amerikaans','amerikaans|Amerikaansch','Trabaja para una empresa estadounidense.'],
 ['Zullen we vanavond ___ eten?','Indonesisch','indonesisch|Indonesies','¿Comemos indonesio esta noche?'],
 ['Hij ___ zijn haar elke ochtend.','kamt','kammt|kaamt|kamd','Se peina todas las mañanas.'],
 ['Hij ___ de hond uit.','laat','laatt|laad|lat','Saca al perro.']
]);

addGram('compuestos',[
 ['___ treinstation','het','de','la estación de tren','het station → het treinstation.'],
 ['___ zorgverzekering','de','het','el seguro médico'],
 ['___ huurcontract','het','de','el contrato de alquiler'],
 ['___ winkelwagen','de','het','el carro de la compra'],
 ['___ jachthaven','de','het','el puerto deportivo'],
 ['___ wereldkampioenschap','het','de','el campeonato del mundo','Ojo: het kampioenschap, como het landschap.'],
 ['___ fietsslot','het','de','el candado de la bici','het slot → het fietsslot.'],
 ['___ kerstcadeau','het','de','el regalo de Navidad'],
 ['___ kantoorgebouw','het','de','el edificio de oficinas'],
 ['tand + borstel','tandenborstel','tandborstel|tandsborstel|tandeborstel','el cepillo de dientes'],
 ['boodschap + lijst','boodschappenlijst','boodschaplijst|boodschapslijst|boodschapenlijst','la lista de la compra'],
 ['station + plein','stationsplein','stationplein|stationenplein|stationeplein','la plaza de la estación'],
 ['werk + kamer','werkkamer','werkamer|werkskamer|werkenkamer','el despacho (en casa)','Si se juntan dos k, se escriben las dos.'],
 ['universiteit + bibliotheek','universiteitsbibliotheek','universiteitbibliotheek|universiteitenbibliotheek|universiteitebibliotheek','la biblioteca de la universidad'],
 ['student + huis','studentenhuis','studenthuis|studentshuis|studentehuis','la casa de estudiantes'],
 ['verkeer + licht','verkeerslicht','verkeerlicht|verkeerenlicht|verkeerelicht','el semáforo'],
 ['arbeid + contract','arbeidscontract','arbeidcontract|arbeidencontract|arbeidecontract','el contrato de trabajo'],
 ['verjaardag + feest','verjaardagsfeest','verjaardagfeest|verjaardagenfeest|verjaardagefeest','la fiesta de cumpleaños'],
 ['lang → de ___','lengte','langheid|langte|langing','la longitud','Algunos adjetivos dan sustantivos en -te: lang → lengte, hoog → hoogte.'],
 ['Que se puede pagar: ___','betaalbaar','betaalloos|betaallijk|betaalzaam','asequible'],
 ['Que se puede llevar a cabo: ___','haalbaar','haalloos|haallijk|haalzaam','factible'],
 ['Sin cables: ___','draadloos','draadbaar|draadlijk|draadzaam','inalámbrico'],
 ['Examen de recuperación: de ___','herkansing','verkansing|ontkansing|miskansing','la recuperación','her- = otra vez: una segunda oportunidad (kans).'],
 ['Lo contrario de «eerlijk»','oneerlijk','ineerlijk|miseerlijk|vereerlijk','injusto'],
 ['spelen → de ___ (persona)','speler','spelaar|speeler|spelist','el jugador']
]);

addGram('relat',[
 ['Het restaurant ___ we gisteren waren, was erg goed.','waar','dat|die|wat','El restaurante donde estuvimos ayer era muy bueno.'],
 ['De fiets ___ ik vorige week heb gekocht, is al kapot.','die','dat|wie|wat','La bici que me compré la semana pasada ya está rota.'],
 ['Het contract ___ je moet tekenen, ligt op je bureau.','dat','die|wie|wat','El contrato que tienes que firmar está en tu mesa.'],
 ['Het team ___ de wedstrijd won, komt uit Rotterdam.','dat','die|wie|wat','El equipo que ganó el partido es de Róterdam.','het team → dat.'],
 ['De collega’s ___ ik het meest samenwerk, zitten in Amsterdam.','met wie','met die|met wat|die met','Los compañeros con los que más trabajo están en Ámsterdam.','Preposición + persona: met wie.'],
 ['Het probleem ___ we het gisteren over hadden, is opgelost.','waar','dat|wat|die','El problema del que hablamos ayer está resuelto.','waar … over: la preposición puede ir al final.'],
 ['Dit is de kamer ___ ik slaap.','waarin','in die|in wat|die in','Esta es la habitación en la que duermo.'],
 ['De vrouw ___ ik mijn kamer huur, is heel aardig.','van wie','van die|van wat|die van','La mujer a la que le alquilo la habitación es muy maja.'],
 ['Het enige ___ ik wil, is slapen.','wat','die|wie|waar','Lo único que quiero es dormir.'],
 ['Er is niets ___ ik niet eet.','wat','die|wie|waar','No hay nada que no coma.'],
 ['___ het laatst weggaat, doet het licht uit.','Wie','Die|Wat|Dat','El último que se vaya, que apague la luz.','«El que» (cualquier persona) = wie.'],
 ['___ ik niet begrijp, is waarom hij boos is.','Wat','Dat|Die|Wie','Lo que no entiendo es por qué está enfadado.'],
 ['Ik heb een vriend ___ in Japan woont.','die','dat|wie|wat','Tengo un amigo que vive en Japón.'],
 ['Ken je het meisje ___ Pieter staat te praten?','met wie','met dat|met die|dat met','¿Conoces a la chica con la que está hablando Pieter?'],
 ['De werf ___ ik stage loop, bouwt jachten van zestig meter.','waar','die|dat|wat','El astillero donde hago las prácticas construye yates de sesenta metros.'],
 ['De schepen ___ hier gebouwd worden, gaan naar het buitenland.','die','dat|wie|wat','Los barcos que se construyen aquí se van al extranjero.','Plural: siempre die.'],
 ['De mail ___ je me stuurde, heb ik niet ontvangen.','die','dat|wat|wie','No he recibido el correo que me mandaste.'],
 ['De stad ___ ik vandaan kom, ligt aan zee.','waar','die|dat|wat','La ciudad de la que vengo está junto al mar.'],
 ['Het huis ___ mijn ouders wonen, is te groot voor hen.','waarin','dat|die|wat','La casa en la que viven mis padres es demasiado grande para ellos.'],
 ['De mensen ___ ik op de cursus heb leren kennen, zijn heel aardig.','die','dat|wie|wat','La gente que conocí en el curso es muy maja.'],
 ['Mijn huisgenoot, ___ uit Italië komt, kookt fantastisch.','die','dat|wie|wat','Mi compañero de piso, que es italiano, cocina de maravilla.'],
 ['De klant ___ we het jacht bouwen, wil alles in het wit.','voor wie','voor die|voor wat|die voor','El cliente para el que construimos el yate lo quiere todo en blanco.'],
 ['Dit is de app ___ je een fiets kunt huren.','waarmee','met die|met wat|die met','Esta es la app con la que puedes alquilar una bici.','Preposición + cosa: waar + preposición (waarmee).'],
 ['Het examen ___ ik zo bang voor was, viel erg mee.','waar','dat|wat|die','El examen que tanto me asustaba resultó más fácil de lo esperado.'],
 ['De dingen ___ ik het meest mis, zijn de zon en het eten.','die','dat|wat|wie','Las cosas que más echo de menos son el sol y la comida.'],
 ['Het cadeau ___ je me gaf, vind ik prachtig.','dat','die|wat|wie','El regalo que me diste me encanta.'],
 ['Het bedrijf ___ zij werkt, heeft vijftig werknemers.','waar','dat|die|wat','La empresa en la que trabaja tiene cincuenta empleados.'],
 ['Hij zegt dat hij ziek is, ___ ik niet geloof.','wat','dat|die|wie','Dice que está enfermo, cosa que no me creo.','Cuando se refiere a toda la frase anterior: wat.'],
 ['Het hotel dat we aan de haven ___, is bijna klaar.','bouwen','bouwen we|bouwt|gebouwd','El hotel que estamos construyendo en el puerto está casi terminado.','En la relativa el verbo va al final y concuerda con el sujeto.'],
 ['De man die ___, is onze nieuwe buurman.','in de tuin werkt','werkt in de tuin|in de tuin werken|werkt hij in de tuin','El hombre que trabaja en el jardín es nuestro nuevo vecino.','En la relativa el verbo va al final.']
]);

/* ---- js/content/gram-5.js ---- */
/* Woorden · gramática ampliada (5): la palabra «er», la pasiva */

addGram('er',[
 ['___ ligt een pakketje voor je op tafel.','Er','Het|Dat|Hij','Hay un paquete para ti en la mesa.'],
 ['Hoeveel kamers heeft het huis? Het heeft ___ vier.','er','ze|het|die','¿Cuántas habitaciones tiene la casa? Tiene cuatro.','Con una cantidad, er sustituye a lo contado.'],
 ['Wil je een appel? Ik heb ___ nog drie.','er','ze|het|hem','¿Quieres una manzana? Me quedan tres.'],
 ['Ben je ooit in Maastricht geweest? Nee, ik ben ___ nog nooit geweest.','er','het|hem|dat','¿Has estado alguna vez en Maastricht? No, nunca he estado allí.'],
 ['Ik woon al drie jaar in Delft en ik vind het ___ heerlijk.','er','het|hem|dat','Llevo tres años viviendo en Delft y me encanta.'],
 ['Wat is ___ aan de hand?','er','het|dat|hij','¿Qué pasa?'],
 ['___ regent al de hele dag.','Het','Er|Dat|Hij','Lleva todo el día lloviendo.','Con el tiempo atmosférico: het regent, het sneeuwt.'],
 ['___ zijn te veel toeristen in de stad.','Er','Ze|Hij|Hun','Hay demasiados turistas en la ciudad.'],
 ['Ik heb ___ spijt van.','er','het|dat|hem','Me arrepiento.'],
 ['Ik heb ___ een hekel aan.','er','het|dat|hem','Lo odio.'],
 ['Ik ben ___ trots op.','er','het|dat|hem','Estoy orgulloso de ello.'],
 ['Ik kan ___ niets aan doen.','er','het|dat|hem','No puedo hacer nada al respecto.'],
 ['Het examen? Ik heb ___ helemaal niet aan gedacht!','er','het|dat|hem','¿El examen? ¡Ni me había acordado!'],
 ['Mijn nieuwe telefoon? Ik ben ___ heel tevreden over.','er','het|hem|dat','¿Mi móvil nuevo? Estoy muy contento con él.','Con preposición, para cosas: er … over (nunca «over hem»).'],
 ['Weet jij ___ iets van?','er','het|dat|hem','¿Tú sabes algo de eso?'],
 ['Die cursus? Ik heb ___ geen tijd voor.','er','het|dat|hem','¿Ese curso? No tengo tiempo para eso.'],
 ['Ik hou ___ niet van.','er','het|dat|hem','No me gusta.'],
 ['Ik zorg ___ dat alles op tijd klaar is.','ervoor','voor het|het voor|eraan','Me encargo de que todo esté listo a tiempo.'],
 ['Ik denk ___ om een nieuwe fiets te kopen.','erover','over het|het over|erop','Estoy pensando en comprarme una bici nueva.'],
 ['Ik twijfel ___.','eraan','aan het|het aan|erop','Tengo mis dudas.'],
 ['Hoeveel inwoners heeft Delft? ___ wonen ongeveer honderdduizend mensen.','Er','Het|Ze|Hij','¿Cuántos habitantes tiene Delft? Viven unas cien mil personas.'],
 ['___ wordt op de deur geklopt.','Er','Het|Men|Ze','Llaman a la puerta.'],
 ['Is ___ nog koffie?','er','het|die|hij','¿Queda café?'],
 ['Zit ___ suiker in?','er','het|dat|ze','¿Lleva azúcar?'],
 ['Het weer? Ik ben ___ nog steeds niet aan gewend.','er','het|dat|hem','¿El tiempo? Todavía no me he acostumbrado.'],
 ['Ik moet ___ even over nadenken.','er','het|dat|hem','Me lo tengo que pensar.'],
 ['Mijn vrienden waren ___ allemaal.','er','ze|hun|hem','Estaban todos mis amigos.'],
 ['___ gebeurt nooit iets in dit dorp.','Er','Het|Dat|Hij','En este pueblo nunca pasa nada.'],
 ['We hebben ___ lang over gepraat.','er','het|dat|hem','Hemos hablado mucho de ello.'],
 ['Ik heb ___ niets mee te maken.','er','het|dat|hem','No tengo nada que ver con eso.']
]);

addGram('pasiva',[
 ['De sleutels ___ morgen opgehaald.','worden','wordt|werden|hebben','Las llaves se recogen mañana.'],
 ['Mijn fiets ___ vorige week gestolen.','werd','wordt|heeft|werden','Me robaron la bici la semana pasada.'],
 ['De motoren ___ vorige maand geleverd.','werden','werd|worden|hebben','Los motores se entregaron el mes pasado.','Plural en pasado: werden.'],
 ['Het pakketje ___ al bezorgd.','is','heeft|zijn|worden','El paquete ya está entregado.','Resultado ya hecho: is + participio (sin geworden).'],
 ['De boodschappen ___ al gedaan.','zijn','is|hebben|wordt','La compra ya está hecha.'],
 ['De vergadering ___ uitgesteld tot volgende week.','is','heeft|zijn|worden','La reunión se ha aplazado a la semana que viene.'],
 ['De romp moet nog ___ geschilderd.','worden','wordt|geworden|werd','Todavía hay que pintar el casco.','Modal + worden + participio.'],
 ['Dit probleem kan snel ___ opgelost.','worden','wordt|geworden|werd','Este problema se puede solucionar rápido.'],
 ['Het nieuwe plan wordt ___ de gemeente betaald.','door','van|bij|met','El plan nuevo lo paga el ayuntamiento.','El agente de la pasiva va con door.'],
 ['Het contract ___ gisteren door beide partijen getekend.','werd','wordt|heeft|werden','Ayer ambas partes firmaron el contrato.'],
 ['Er ___ in Nederland veel kaas gegeten.','wordt','worden|heeft|eet','En Holanda se come mucho queso.','Pasiva impersonal: er wordt + participio.'],
 ['De nieuwe ramen worden morgen ___.','geplaatst','geplaatsd|plaatsen|plaatst','Las ventanas nuevas se colocan mañana.'],
 ['Het eten wordt om zeven uur ___.','geserveerd','geserveert|serveren|serveerde','La cena se sirve a las siete.'],
 ['Deze huizen zijn in 1920 ___.','gebouwd','gebouwt|bouwden|bouwen','Estas casas se construyeron en 1920.'],
 ['Het museum ___ elk jaar door duizenden toeristen bezocht.','wordt','worden|heeft|bezoekt','Miles de turistas visitan el museo cada año.'],
 ['Deze kerk ___ in de veertiende eeuw gebouwd.','werd','wordt|heeft|werden','Esta iglesia se construyó en el siglo XIV.'],
 ['De wedstrijd van gisteren ___ afgelast vanwege de storm.','werd','wordt|heeft|werden','El partido de ayer se suspendió por el temporal.'],
 ['Hij ___ geopereerd en mag morgen naar huis.','is','zijn|werden|word','Lo han operado y mañana puede irse a casa.'],
 ['Er ___ gisteren veel gelachen tijdens de vergadering.','werd','wordt|heeft|werden','Ayer hubo muchas risas en la reunión.'],
 ['Je ___ om negen uur op kantoor verwacht.','wordt','word|worden|bent','Te esperan en la oficina a las nueve.','Con je delante del verbo: wordt.'],
 ['Jullie ___ om acht uur opgehaald.','worden','wordt|hebben|word','Os recogen a las ocho.'],
 ['Het verslag ___ altijd door Lotte geschreven.','wordt','worden|heeft|schrijft','El acta siempre la escribe Lotte.'],
 ['Hoe ___ dat woord uitgesproken?','wordt','worden|heeft|spreekt','¿Cómo se pronuncia esa palabra?'],
 ['Het jacht ___ volgend jaar aan de eigenaar opgeleverd.','wordt','worden|werd|heeft','El yate se entrega al armador el año que viene.'],
 ['Alle documenten moeten nog ___.','gecontroleerd worden','gecontroleerd wordt|controleren worden|gecontroleerd geworden','Todavía hay que revisar todos los documentos.']
]);

/* ---- js/content/gram-6.js ---- */
/* Woorden · gramática ampliada (6): destrezas nuevas de verbos: presente y pasado */

newGram('presente',{n:'Presente: conjugar',ref:'§3',lv:1,grp:'verbos',
 tip:'ik + raíz (lezen → ik lees, leven → ik leef, zitten → ik zit) · jij, u, hij, zij + raíz + t · plural = infinitivo. Si jij/je va detrás del verbo, sin -t (kom je?); con u, siempre -t (komt u). Irregulares: ben/bent/is, heb/hebt/heeft, kan, wil, mag, zal.'});

addGram('presente',[
 ['Ik ___ elke avond een uurtje. (lezen)','lees','lez|leest|lezen','Leo una horita todas las noches.','lezen → ik lees: la z final se escribe s y la e se dobla.'],
 ['Mijn huisgenoot ___ de hele zondag. (slapen)','slaapt','slapt|slaap|slapen','Mi compañero de piso se pasa el domingo durmiendo.'],
 ['Ik ___ al jaren zonder auto. (leven)','leef','leev|leeft|leven','Llevo años viviendo sin coche.','leven → ik leef: la v final se escribe f.'],
 ['Op kantoor ___ ik naast een Spaanse collega. (zitten)','zit','zitt|zitten|zet','En la oficina me siento al lado de una compañera española.','zitten → ik zit: al final de palabra, una sola t.'],
 ['Mijn vriendin ___ altijd vroeg op. (opstaan)','staat','sta|staan|stat','Mi novia siempre se levanta temprano.'],
 ['Hij ___ een lange mail naar de klant. (schrijven)','schrijft','schrijvt|schrijf|schrijven','Le escribe un correo largo al cliente.'],
 ['Waarom ___ je zo hard? (lachen)','lach','lacht|lachen|lachd','¿Por qué te ríes tanto?','Con je detrás del verbo, sin -t.'],
 ['Hij ___ zijn huis aan twee studenten. (verhuren)','verhuurt','verhuur|verhuren|verhurt','Le alquila su casa a dos estudiantes.'],
 ['___ jij ook Spaans? (spreken)','Spreek','Spreekt|Spreken|Sprekt','¿Tú también hablas español?','Con jij detrás del verbo, sin -t.'],
 ['Jij ___ altijd zo hard! (fietsen)','fietst','fiets|fietsen|fietsd','¡Tú siempre vas tan rápido en bici!','Con jij delante del verbo, con -t.'],
 ['Wat ___ je van mijn nieuwe fiets? (vinden)','vind','vindt|vinden|vint','¿Qué te parece mi bici nueva?','Con je detrás: vind je, sin -t.'],
 ['___ jij het hier ook te koud? (vinden)','Vind','Vindt|Vinden|Vint','¿A ti también te parece que aquí hace demasiado frío?'],
 ['Mijn baas ___ dat ik te veel overuren maak. (vinden)','vindt','vind|vinden|vint','A mi jefe le parece que hago demasiadas horas extra.','Raíz vind + t → vindt.'],
 ['Mijn baas ___ elke dag met de auto naar Rotterdam. (rijden)','rijdt','rijd|rijden|rijt','Mi jefe va todos los días en coche a Róterdam.'],
 ['Sorry, wat ___ u? (zeggen)','zegt','zeg|zeggen|zegd','Perdone, ¿cómo dice?','Con u, la -t se queda aunque u vaya detrás: zegt u.'],
 ['Waar ___ u vandaan? (komen)','komt','kom|komen|koomt','¿De dónde es usted?'],
 ['Mijn ouders ___ trots op me. (zijn)','zijn','is|bent|ben','Mis padres están orgullosos de mí.'],
 ['___ jij morgen ook op de training? (zijn)','Ben','Bent|Is|Zijn','¿Tú también vas mañana al entrenamiento?','Con jij detrás del verbo: ben jij.'],
 ['Jij ___ altijd zo vrolijk. (zijn)','bent','ben|is|zijn','Tú siempre estás tan alegre.'],
 ['Het eten ___ bijna klaar. (zijn)','is','ben|bent|zijn','La comida está casi lista.'],
 ['Lotte ___ twee katten. (hebben)','heeft','hebt|heb|hebben','Lotte tiene dos gatos.'],
 ['___ jij een fietspomp voor me? (hebben)','Heb','Hebt|Heeft|Hebben','¿Tienes una bomba de bici para dejarme?','Con jij detrás del verbo: heb jij.'],
 ['Jij ___ altijd zoveel energie. (hebben)','hebt','heb|heeft|hebben','Tú siempre tienes muchísima energía.'],
 ['Daan ___ heel goed koken. (kunnen)','kan','kunt|kunnen|kant','Daan sabe cocinar muy bien.'],
 ['___ jij me morgen helpen met verhuizen? (kunnen)','Kun','Kunt|Kunnen','¿Me puedes ayudar mañana con la mudanza?','Con jij detrás: kun jij (también se dice kan jij).'],
 ['Mijn zus ___ arts worden. (willen)','wil','wilt|willen|wild','Mi hermana quiere ser médica.'],
 ['___ jullie iets drinken? (willen)','Willen','Wil|Wilt|Wilde','¿Queréis tomar algo?'],
 ['Hier ___ je niet roken. (mogen)','mag','mogt|mogen|magt','Aquí no se puede fumar.'],
 ['Wij ___ morgen eerder naar huis. (mogen)','mogen','mag|mogt|mochten','Mañana podemos irnos antes a casa.'],
 ['Ik ___ je morgen bellen. (zullen)','zal','zul|zult|zullen','Te llamaré mañana.'],
 ['___ we vanavond pizza bestellen? (zullen)','Zullen','Zal|Zult|Zul','¿Pedimos pizza esta noche?','Zullen we…? sirve para proponer algo.'],
 ['De trein naar Utrecht ___ om tien over half negen. (gaan)','gaat','ga|gaan|gat','El tren a Utrecht sale a las nueve menos veinte.'],
 ['We ___ dit weekend naar Groningen. (gaan)','gaan','gaat|ga|gaant','Este fin de semana vamos a Groninga.'],
 ['Wat ___ jouw vriendin voor werk? (doen)','doet','doe|doen|doed','¿A qué se dedica tu novia?','El sujeto es «jouw vriendin» (ella): doet.'],
 ['Ik ___ de afwas wel. (doen)','doe','doet|doen|doo','Ya friego yo los platos.'],
 ['___ jullie ook naar mijn verjaardag? (komen)','Komen','Komt|Kom|Kommen','¿Venís también a mi cumpleaños?'],
 ['___ jij die man daar? (zien)','Zie','Ziet|Zien|Zies','¿Ves a ese hombre de ahí?'],
 ['Hij ___ zonder bril bijna niets. (zien)','ziet','zie|zien|ziedt','Sin gafas no ve casi nada.'],
 ['De fietsen ___ achter het huis. (staan)','staan','staat|sta|staant','Las bicis están detrás de la casa.'],
 ['Wat ___ je precies? (bedoelen)','bedoel','bedoelt|bedoelen|bedoeld','¿Qué quieres decir exactamente?'],
 ['Hij ___ niet op mijn berichten. (antwoorden)','antwoordt','antwoord|antwoorden|antwoordd','No contesta a mis mensajes.','Raíz antwoord + t → antwoordt.'],
 ['Hij ___ niet van koffie. (houden)','houdt','houd|houden|hout','No le gusta el café.'],
 ['Jij ___ steeds beter in Nederlands. (worden)','wordt','word|worden|wort','Cada vez se te da mejor el neerlandés.','Con jij delante: jij wordt.'],
 ['Wij ___ elke zaterdag een wedstrijd. (spelen)','spelen','speelen|speelt|spellen','Jugamos un partido todos los sábados.'],
 ['Lotte ___ heel snel. (praten)','praat','praatt|praten|praad','Lotte habla muy rápido.','Raíz acabada en t: no se añade otra (zij praat).'],
 ['Weet jij waar mijn sleutels ___? (zijn)','zijn','is|ben|bent','¿Sabes dónde están mis llaves?'],
 ['Het ___ hier altijd. (waaien)','waait','waai|waaien|waaid','Aquí siempre hace viento.'],
 ['Dat ___ vijf euro. (kosten)','kost','kosten|kostt|koste','Eso cuesta cinco euros.'],
 ['Mijn huisgenoten ___ elke avond samen. (koken)','koken','kookt|kook|kooken','Mis compañeros de piso cocinan juntos todas las noches.'],
 ['___ jij van sushi? (houden)','Hou','Houdt|Houden|Hout','¿Te gusta el sushi?','Con jij detrás: hou jij (o houd jij), sin -t.']
]);

newGram('pasado',{n:'Pasado: imperfecto y participio',ref:'§18',lv:2,grp:'verbos',
 tip:'Débiles: raíz + te(n) si antes de -en hay t, k, f, s, ch o p (’t kofschip: werkte); si no, + de(n): woonde, leefde. Fuertes: cambian la vocal (ging, kwam). Participio: ge- + raíz + t/d, o -en si es fuerte (gegaan); op-ge-beld; sin ge- con be-, ver-, ont-, her-: begrepen.'});

addGram('pasado',[
 ['Gisteren ___ ik twee uur op de bus. (wachten)','wachtte','wachte|wachtde|wacht','Ayer esperé el autobús dos horas.','Raíz wacht + te → wachtte (dos t).'],
 ['Vorige week ___ hij elke dag naar de werf. (fietsen)','fietste','fietsde|fietst|fietsten','La semana pasada iba en bici al astillero todos los días.'],
 ['Gisteravond ___ mijn huisgenoot paella. (koken)','kookte','kookde|kookt|kookten','Anoche mi compañero de piso hizo paella.'],
 ['Toen we in Japan waren, ___ we veel foto’s. (maken)','maakten','maakte|maakden|maken','Cuando estuvimos en Japón, hicimos muchas fotos.','Plural en pasado: -ten o -den.'],
 ['Mijn opa ___ veertig jaar op een scheepswerf. (werken)','werkte','werkde|werkt|werkten','Mi abuelo trabajó cuarenta años en un astillero.'],
 ['Toen ik klein was, ___ ik vlak bij de zee. (wonen)','woonde','woonte|woon|woonden','De pequeño vivía muy cerca del mar.'],
 ['Het feest van vorige zaterdag ___ tot drie uur ’s nachts. (duren)','duurde','duurte|duurt|duurden','La fiesta del sábado pasado duró hasta las tres de la madrugada.'],
 ['In 2020 ___ ik naar Nederland. (verhuizen)','verhuisde','verhuiste|verhuizde|verhuisden','En 2020 me mudé a Holanda.','Cuenta la z del infinitivo (verhuizen): -de.'],
 ['Vroeger ___ we elke zomer in Spanje. (kamperen)','kampeerden','kampeerde|kampeerten|kamperen','Antes acampábamos todos los veranos en España.'],
 ['Toen ik vijftien was, ___ ik al waterpolo. (spelen)','speelde','speelte|speel|speelden','A los quince años ya jugaba al waterpolo.'],
 ['Vorige week ___ jullie niet op mijn mail. (reageren)','reageerden','reageerde|reageerten|reageren','La semana pasada no contestasteis a mi correo.'],
 ['Vorig jaar ___ we elke zondag. (zeilen)','zeilden','zeilde|zeilten|zeilen','El año pasado salíamos a navegar todos los domingos.'],
 ['Vorige vrijdag ___ ik een lange mail aan de klant. (schrijven)','schreef','schrijfde|schreeft|schreven','El viernes pasado le escribí un correo largo al cliente.','Verbo fuerte: schrijven → schreef.'],
 ['Vorige zomer ___ we met de trein naar Parijs. (gaan)','gingen','ging|gaan|gaanden','El verano pasado fuimos a París en tren.'],
 ['Eergisteren ___ hij pas om middernacht thuis. (komen)','kwam','komde|kwamen|komt','Anteayer no llegó a casa hasta medianoche.'],
 ['Vorige week ___ ik een prachtige film. (zien)','zag','ziede|zagen|zie','La semana pasada vi una película preciosa.'],
 ['Gisteren ___ ik het examen best makkelijk. (vinden)','vond','vindde|vonden|vind','Ayer el examen me pareció bastante fácil.'],
 ['Gisterochtend ___ ik naar de bakker. (lopen)','liep','loopte|liepen|loop','Ayer por la mañana fui andando a la panadería.'],
 ['Wat ___ jullie gisteravond? (doen)','deden','deed|doeten|doen','¿Qué hicisteis anoche?'],
 ['Afgelopen zaterdag ___ Lotte een nieuwe jas. (kopen)','kocht','koopte|kochten|koopt','El sábado pasado Lotte se compró un abrigo nuevo.'],
 ['Hij ___ me gisteren om hulp. (vragen)','vroeg','vraagde|vroegen|vraagt','Ayer me pidió ayuda.'],
 ['De les ___ gisteren een kwartier te laat. (beginnen)','begon','beginde|begonnen|begint','Ayer la clase empezó con un cuarto de hora de retraso.'],
 ['Hij ___ gisteren zijn telefoon in de trein. (vergeten)','vergat','vergeette|vergaten|vergeet','Ayer se dejó el móvil en el tren.'],
 ['Mijn buurvrouw ___ vorige week een brief van de gemeente. (krijgen)','kreeg','krijgde|kregen|krijgt','La semana pasada mi vecina recibió una carta del ayuntamiento.'],
 ['Afgelopen zondag ___ ik de hele dag thuis. (blijven)','bleef','blijfde|bleven|blijf','El domingo pasado me quedé en casa todo el día.'],
 ['Twee weken geleden ___ ik ziek. (zijn)','was','waren|ben|wees','Hace dos semanas estuve enfermo.'],
 ['Vorige week ___ we geen internet. (hebben)','hadden','had|hebben|hebde','La semana pasada no teníamos internet.'],
 ['Gisteren ___ ik mijn moeder op. (opbellen)','belde','opbelde|belden|bel','Ayer llamé a mi madre.','En la principal, el prefijo va al final: belde … op.'],
 ['Vorige dinsdag ___ ik om vijf uur op. (opstaan)','stond','opstond|stonden|sta','El martes pasado me levanté a las cinco.'],
 ['De trein ___ gisteren pas om tien uur aan. (aankomen)','kwam','aankwam|kwamen|komt','Ayer el tren no llegó hasta las diez.'],
 ['Hij ___ vorige week de keuken schoon. (schoonmaken)','maakte','schoonmaakte|maakten|maakt','La semana pasada limpió la cocina.'],
 ['Vorige maand ___ de huurprijzen weer. (stijgen)','stegen','steeg|stijgden|stijgen','El mes pasado los alquileres volvieron a subir.'],
 ['We zijn gisteren naar het strand ___. (gaan)','gegaan','gegaant|ging|gegeen','Ayer fuimos a la playa.'],
 ['Ik heb je gisteren drie keer ___. (opbellen)','opgebeld','geopbeld|opgebelt|opbelde','Ayer te llamé tres veces.','En los separables, ge- va en medio: op-ge-beld.'],
 ['Heb je de uitleg ___? (begrijpen)','begrepen','gebegrepen|begrijpt|begreept','¿Has entendido la explicación?','Con be-, ver-, ont-, her-, ge- no se añade ge-.'],
 ['Ik heb mijn portemonnee ___. (verliezen)','verloren','geverloren|verloor|verliesd','He perdido la cartera.'],
 ['Wie heeft de koekjes ___? (opeten)','opgegeten','opgeëten|geopgegeten|opat','¿Quién se ha comido las galletas?'],
 ['Waarom heb je het niet eerder ___? (vertellen)','verteld','geverteld|vertelt|vertelde','¿Por qué no lo has dicho antes?','Con ver- no se añade ge-: verteld.'],
 ['Ik heb gisteren mijn nieuwe huisgenoot ___. (ontmoeten)','ontmoet','geontmoet|ontmoette|ontmoetd','Ayer conocí a mi nuevo compañero de piso.'],
 ['Hoe laat is de veerboot naar Texel ___? (vertrekken)','vertrokken','gevertrokken|vertrok|vertrekt','¿A qué hora salió el ferry a Texel?'],
 ['Wie heeft deze bloemen ___? (brengen)','gebracht','gebrengd|bracht|gebrocht','¿Quién ha traído estas flores?'],
 ['Ik heb gisteren een parkeervergunning ___. (aanvragen)','aangevraagd','geaanvraagd|aanvroeg|aangevraagt','Ayer solicité un permiso de aparcamiento.'],
 ['Ik heb de mail nog niet ___. (beantwoorden)','beantwoord','gebeantwoord|beantwoordt|beantwoordde','Todavía no he contestado el correo.'],
 ['Pieter is gisteren ___. (thuisblijven)','thuisgebleven','gethuisbleven|thuisgeblijfd|thuisbleef','Pieter se quedó ayer en casa.'],
 ['We hebben gisteren drie uur ___. (trainen)','getraind','getraint|trainden|gegetraind','Ayer entrenamos tres horas.']
]);

/* ---- js/content/mios.js ---- */
/* Tus errores: frases sacadas de los textos que Javier ha mandado para corregir (4A, 4B y el texto de clase sobre Vigo).
   Cuando mande un texto nuevo, sus errores se añaden aquí con addGram('mios',[...]). */
newGram('mios',{n:'Tus errores de los textos',ref:'textos',lv:1,grp:'otros',
  tip:'Son frases de tus propios textos, ya corregidas. Vuelven hasta que aciertes casi todas.'});
addGram('mios',[
 ['Elke zondag sta ik ___ hele middag te koken.','de','het|een','Todos los domingos me paso toda la tarde cocinando.','«hele» necesita artículo: de hele middag (texto 4A)'],
 ['Mijn huisgenoten liggen ___ hele dag te slapen.','de','het|een','Mis compañeros de piso se pasan todo el día durmiendo.','dag es palabra de «de»: de hele dag (texto 4A)'],
 ['Ik zou liever een groot huis ___.','hebben','te hebben|heb|gehad','Preferiría tener una casa grande.','Tras zou, el infinitivo va sin te (texto 4A)'],
 ['Ik denk dat de Nederlandse keuken ___.','niet lekker is','is niet lekker|niet is lekker|lekker niet is','Creo que la cocina holandesa no es rica.','Tras dat, el verbo al final; niet delante del adjetivo (texto 4A)'],
 ['Een van mijn huisgenoten is ___.','Pools','pools|Polen|Pool','Uno de mis compañeros de piso es polaco.','Nacionalidad: adjetivo y con mayúscula (texto 4A)'],
 ['Ik erger ___ een beetje aan hem.','me','mijn|zich|hem','Me molesta un poco.','zich ergeren aan: ik erger me (texto 4A)'],
 ['Hij ___ nooit schoon.','maakt','schoonmaakt|maak|maken','Nunca limpia.','Separable: hij maakt … schoon (texto 4A)'],
 ['Mijn andere huisgenoot is ___ rustig, en dat is tof.','heel','te veel|veel|meer','Mi otro compañero de piso es muy tranquilo, y eso mola.','Delante de un adjetivo: heel (muy); te veel va con sustantivos (texto 4A)'],
 ['Ik woon met drie vrienden ___.','samen','mee|bij|met','Comparto casa con tres amigos.','samenwonen: ik woon … samen (texto 4A)'],
 ['Ik zou liever een groot huis hebben, ___ ik heb geen geld.','maar','omdat|dus|want','Preferiría tener una casa grande, pero no tengo dinero.','maar = pero, y no cambia el orden (texto 4A)'],
 ['Een week geleden was ik in Frankrijk, ___ de buurt van Parijs.','in','bij|op|aan','Hace una semana estuve en Francia, cerca de París.','in de buurt van = cerca de (texto 4B)'],
 ['___ we bij het hotel aankwamen, was het personeel er niet.','Toen','Als|Dan|Daarna','Cuando llegamos al hotel, el personal no estaba.','Una vez en el pasado: toen + verbo al final (texto 4B)'],
 ['Toen we bij het hotel ___, was er niemand.','aankwamen','kwamen aan|aankomen|aankwam','Cuando llegamos al hotel, no había nadie.','Tras toen, el verbo va al final y unido (texto 4B)'],
 ['Een uur later ___ we de sleutels.','kregen','kreeg|krijgen|gekregen','Una hora después nos dieron las llaves.','Para contar lo que pasó, imperfecto (texto 4B)'],
 ['Daarom ___ we een klacht ingediend.','hebben','zijn|worden|heeft','Por eso pusimos una reclamación.','indienen va con hebben (texto 4B)'],
 ['We hebben een klacht ___.','ingediend','ingedieend|ingediendt|indiend','Pusimos una reclamación.','Se escribe ingediend (texto 4B)'],
 ['We waren boos, maar we konden ___ niets doen.','echter','daarom|want|dus','Estábamos enfadados, pero sin embargo no podíamos hacer nada.','echter va en medio de la frase (texto 4B)'],
 ['We wilden ___ trouwdag vieren.','onze','ons|onzer|onse','Queríamos celebrar nuestro aniversario de boda.','de trouwdag → onze (texto 4B)'],
 ['Op de foto’s zag de kamer er heel mooi ___.','uit','op|aan|in','En las fotos, la habitación tenía muy buena pinta.','er … uitzien = tener aspecto (texto 4B)'],
 ['We ___ een onvergetelijke ervaring verwacht, maar het was een ramp.','hadden','waren|zijn|werden','Habíamos esperado una experiencia inolvidable, pero fue un desastre.','Pluscuamperfecto solo para algo anterior a otro pasado (texto 4B)'],
 ['Ik heb mijn hele leven in Vigo ___.','doorgebracht','gespendeerd|uitgegeven|besteed','He pasado toda mi vida en Vigo.','Pasar tiempo en un sitio: doorbrengen (texto de Vigo)'],
 ['Toeristen denken dat paella het ___ eten is.','beste','best|goedste|beter','Los turistas creen que la paella es la mejor comida.','het beste eten: superlativo con -e (texto de Vigo)'],
 ['Maar ik ben het er niet mee ___.','eens','een|samen|eender','Pero no estoy de acuerdo.','het (er) mee eens zijn (texto de Vigo)'],
 ['Ik geef ___ dat het verrukkelijk is.','toe','too|tot|aan','Reconozco que está buenísimo.','toegeven: ik geef … toe (texto de Vigo)'],
 ['In Galicië eten we veel vis, maar ook ___.','vlees','vleis|vlaas|vleez','En Galicia comemos mucho pescado, pero también carne.','vlees = carne (texto de Vigo)'],
 ['Vigo ligt dicht bij Portugal en ___ is vis daar belangrijk.','daarom','omdat|want|toen','Vigo está cerca de Portugal y por eso el pescado es importante allí.','daarom + inversión: daarom is vis… (texto de Vigo)'],
 ['De koeien uit Galicië ___ heel bekend.','zijn','hebben|wordt|is','Las vacas gallegas son muy conocidas.','Ser + adjetivo: zijn (texto de Vigo)'],
 ['Er zijn veel ___ in de zee bij Vigo.','vissen','visen|vises|vissenen','Hay muchos peces en el mar de Vigo.','vis → vissen: vocal corta, se dobla la s (texto de Vigo)'],
 ['Ik ___ al twee jaar in Delft.','woon','leef|woont|wonen','Vivo en Delft desde hace dos años.','Vivir en un sitio: wonen, no leven'],
 ['Het is ___ recept met octopus, olijfolie en paprikapoeder.','een','de|geen','Es una receta con pulpo, aceite de oliva y pimentón.','het recept: «una receta» = een recept (texto de Vigo)']
]);

/* ---- js/content/prep-1.js ---- */
/* Woorden · preposiciones en contexto (1): op */
addPrep([
 ['Er ligt een dikke laag sneeuw ___ het dak.','op','in|uit|tijdens','Hay una capa gruesa de nieve en el tejado.','op = sobre una superficie'],
 ['Leg je natte handdoek niet ___ de grond!','op','in|naar|voor','¡No dejes la toalla mojada en el suelo!','op de grond = en el suelo'],
 ['Mijn huisgenoot werkt drie dagen per week ___ kantoor en twee dagen thuis.','op','in|bij|naar','Mi compañero de piso trabaja tres días a la semana en la oficina y dos en casa.','op kantoor (sin artículo)'],
 ['We hebben elkaar ___ een verjaardagsfeestje leren kennen.','op','in|naar|langs','Nos conocimos en una fiesta de cumpleaños.','op een feest(je) = en una fiesta'],
 ['Ze staat al een kwartier ___ het perron te wachten.','op','in|na|naar','Lleva un cuarto de hora esperando en el andén.','op het perron / op het station'],
 ['Ik draag altijd een helm als ik ___ de werf rondloop.','op','uit|naar|tijdens','Siempre llevo casco cuando ando por el astillero.','op de werf (lugar de trabajo)'],
 ['We hebben in juli een huisje ___ Texel gehuurd.','op','naar|uit|over','En julio alquilamos una casita en Texel.','op + isla (op Texel, op Ameland)'],
 ['In de zomer spelen we volleybal ___ het strand van Scheveningen.','op','in|naar|door','En verano jugamos al vóley en la playa de Scheveningen.','op het strand'],
 ['Elke zaterdag koop ik verse vis ___ de markt.','op','in|uit|over','Todos los sábados compro pescado fresco en el mercado.','op de markt'],
 ['Ik heb die informatie ___ internet gevonden.','op','in|naar|bij','Encontré esa información en internet.','op internet / op een website'],
 ['Ik hoorde het nieuws ___ de radio.','op','in|naar|achter','Oí la noticia en la radio.','op de radio / op tv'],
 ['We gaan ___ mijn verjaardag uit eten.','op','in|om|over','El día de mi cumpleaños salimos a cenar.','op + día concreto (op mijn verjaardag)'],
 ['Ik ben ___ een zondag geboren.','op','in|om|sinds','Nací en domingo.','op + día de la semana'],
 ['Als je niet ___ tijd betaalt, krijg je een boete.','op','in|met|na','Si no pagas a tiempo, te ponen una multa.','op tijd = a tiempo'],
 ['Ik stond ___ dat moment onder de douche.','op','in|om|naar','En ese momento yo estaba en la ducha.','op dat moment = en ese momento'],
 ['Pieter heeft zijn presentatie ___ het laatste moment afgemaakt.','op','in|bij|naast','Pieter terminó su presentación en el último momento.','op het laatste moment'],
 ['Het pakket komt ___ zijn vroegst volgende week.','op','in|voor|naar','El paquete llega, como pronto, la semana que viene.','op zijn vroegst = como pronto'],
 ['Hij is ___ jonge leeftijd met zwemmen begonnen.','op','in|bij|tijdens','Empezó a nadar muy joven.','op jonge leeftijd = de muy joven'],
 ['Wil jij vanavond ___ de kinderen van de buren passen?','op','voor|naar|met','¿Puedes cuidar esta noche a los niños de los vecinos?','passen op = cuidar de'],
 ['Als je in Nederland auto rijdt, moet je goed ___ fietsers letten.','op','in|naar|voor','Cuando conduces en Holanda tienes que fijarte bien en los ciclistas.','letten op = fijarse en'],
 ['Het bedrijf heeft nog niet ___ mijn sollicitatie gereageerd.','op','aan|voor|met','La empresa todavía no ha respondido a mi candidatura.','reageren op = responder a'],
 ['Weet jij het antwoord ___ deze vraag?','op','aan|in|over','¿Sabes la respuesta a esta pregunta?','het antwoord op = la respuesta a'],
 ['Je zus lijkt sprekend ___ jou.','op','aan|naar|tegenover','Tu hermana es clavada a ti.','lijken op = parecerse a'],
 ['Kunnen we zaterdag ___ jullie rekenen voor de verhuizing?','op','met|tegen|naar','¿Podemos contar con vosotros el sábado para la mudanza?','rekenen op = contar con'],
 ['We hopen ___ mooi weer voor de barbecue.','op','voor|naar|over','Esperamos que haga buen tiempo para la barbacoa.','hopen op = esperar (desear)'],
 ['Hoe bereid jij je ___ een sollicitatiegesprek voor?','op','met|naar|door','¿Cómo te preparas para una entrevista de trabajo?','zich voorbereiden op = prepararse para'],
 ['Met dat lawaai kan ik me niet ___ mijn scriptie concentreren.','op','in|naar|over','Con ese ruido no puedo concentrarme en la tesis.','zich concentreren op'],
 ['Je moet ___ de blauwe knop klikken.','op','in|naar|tegen','Tienes que hacer clic en el botón azul.','klikken op = hacer clic en'],
 ['Ik ben een beetje jaloers ___ mijn zus, die in Barcelona woont.','op','van|tegen|zonder','Tengo un poco de envidia de mi hermana, que vive en Barcelona.','jaloers zijn op = tener envidia de'],
 ['Mijn huisgenote is dol ___ Spaanse series.','op','van|om|ondanks','A mi compañera de piso le chiflan las series españolas.','dol zijn op = encantar'],
 ['Na de wedstrijd was de trainer kwaad ___ ons.','op','met|tegen|van','Después del partido el entrenador estaba enfadado con nosotros.','kwaad/boos op + persona'],
 ['De film is gebaseerd ___ een waargebeurd verhaal.','op','in|uit|volgens','La película está basada en una historia real.','gebaseerd op = basado en'],
 ['Het weer heeft veel invloed ___ mijn humeur.','op','in|voor|naar','El tiempo influye mucho en mi humor.','invloed hebben op = influir en'],
 ['Er is morgen een grote kans ___ regen.','op','in|voor|over','Mañana hay muchas probabilidades de lluvia.','kans op = probabilidad de'],
 ['Misschien heb je als student recht ___ zorgtoeslag.','op','aan|voor|ondanks','Puede que como estudiante tengas derecho a la ayuda del seguro médico.','recht hebben op = tener derecho a'],
 ['Met deze kaart krijg je tien procent korting ___ alle boeken.','op','in|over|volgens','Con esta tarjeta tienes un diez por ciento de descuento en todos los libros.','korting op = descuento en'],
 ['Vanuit mijn kamer heb ik uitzicht ___ de Oude Kerk.','op','bij|naast|voor','Desde mi habitación tengo vistas a la Oude Kerk.','uitzicht op = vistas a'],
 ['Gaan jullie deze zomer ___ vakantie naar Spanje?','op','in|van|door','¿Os vais de vacaciones a España este verano?','op vakantie (gaan/zijn)'],
 ['Mijn ouders komen volgende maand ___ bezoek.','op','in|van|naar','Mis padres vienen de visita el mes que viene.','op bezoek komen = venir de visita'],
 ['Ik ben al maanden ___ zoek naar een kamer in Delft.','op','in|voor|uit','Llevo meses buscando habitación en Delft.','op zoek zijn naar = estar buscando'],
 ['Wil je me ___ de hoogte houden van het project?','op','in|over|voor','¿Me mantienes al tanto del proyecto?','op de hoogte houden = mantener al tanto'],
 ['Heb je de fiets wel ___ slot gezet?','op','in|met|onder','¿Le has puesto el candado a la bici?','op slot = cerrado con llave o candado'],
 ['Het is makkelijker als je het ___ deze manier doet.','op','in|van|met','Es más fácil si lo haces de esta manera.','op deze manier = de esta manera'],
 ['Mijn oma gaat met 85 nog elke dag ___ de fiets naar de markt.','op','in|bij|uit','Mi abuela, con 85 años, todavía va todos los días en bici al mercado.','op de fiets = en bici'],
 ['Er staat bijna geen geld meer ___ mijn rekening.','op','in|bij|onder','Ya casi no me queda dinero en la cuenta.','geld op je rekening = dinero en la cuenta'],
 ['Ons waterpoloteam is ___ de tweede plaats geëindigd.','op','in|naar|achter','Nuestro equipo de waterpolo quedó en segundo lugar.','op de … plaats eindigen = quedar en … lugar'],
 ['We wachten nog ___ het antwoord van de verhuurder.','op','voor|naar|over','Seguimos esperando la respuesta del casero.','wachten op = esperar (algo o a alguien)'],
 ['Wat je nu zegt, slaat nergens ___.','op','in|over|naar','Lo que dices ahora no tiene ningún sentido.','nergens op slaan = no tener sentido'],
 ['Er was veel kritiek ___ het nieuwe ontwerp van het jacht.','op','aan|van|in','Hubo muchas críticas al nuevo diseño del yate.','kritiek op = críticas a'],
 ['Je bent ___ de goede weg met je Nederlands.','op','in|langs|over','Vas por buen camino con tu neerlandés.','op de goede weg = por buen camino'],
 ['Alles is hier ___ loopafstand: de supermarkt, de bakker en het station.','op','in|met|voor','Aquí todo está a un paso: el súper, la panadería y la estación.','op loopafstand = a poca distancia a pie'],
 ['Onze oude spullen staan ___ zolder.','op','in|boven|achter','Nuestras cosas viejas están en el desván.','op zolder = en el desván'],
 ['In mijn klas heeft maar één ___ de vijf studenten een auto.','op','in|voor|na','En mi clase solo uno de cada cinco estudiantes tiene coche.','één op de vijf = uno de cada cinco']
]);

/* ---- js/content/prep-2.js ---- */
/* Woorden · preposiciones en contexto (2): in */
addPrep([
 ['Er zit geen melk meer ___ de koelkast.','in','op|uit|na','Ya no queda leche en la nevera.','in = dentro de'],
 ['Ik heb mijn sleutels per ongeluk ___ mijn andere jas laten zitten.','in','op|uit|naar','Me he dejado las llaves en el otro abrigo sin querer.','in = dentro (de un bolsillo, un bolso…)'],
 ['Tijdens de training liggen we twee uur ___ het water.','in','uit|over|naar','En el entrenamiento pasamos dos horas en el agua.','in het water'],
 ['Vorig jaar heeft mijn broer drie maanden ___ Noorwegen gewerkt.','in','aan|naar|uit','El año pasado mi hermano trabajó tres meses en Noruega.','in + país o ciudad'],
 ['Veel studenten willen een semester ___ het buitenland studeren.','in','aan|uit|voor','Muchos estudiantes quieren estudiar un semestre en el extranjero.','in het buitenland = en el extranjero'],
 ['Mijn ouders hebben een huisje ___ het noorden van Spanje.','in','aan|boven|tegen','Mis padres tienen una casita en el norte de España.','in het noorden / in het zuiden'],
 ['Is er een goede bakker hier ___ de buurt?','in','op|bij|naar','¿Hay una buena panadería por aquí cerca?','in de buurt = cerca, por aquí'],
 ['We spreken af ___ het centrum, bij de Nieuwe Kerk.','in','op|naar|door','Quedamos en el centro, junto a la Nieuwe Kerk.','in het centrum'],
 ['Kun je dit formulier ___ het Engels invullen?','in','aan|met|bij','¿Puedes rellenar este formulario en inglés?','in het Nederlands / in het Engels'],
 ['Het waterpoloseizoen begint ___ september.','in','op|om|sinds','La temporada de waterpolo empieza en septiembre.','in + mes'],
 ['Ons studentenhuis is ___ 1912 gebouwd.','in','aan|om|over','Nuestra casa de estudiantes se construyó en 1912.','in + año'],
 ['Het regent hier ___ de herfst bijna elke dag.','in','op|om|naar','Aquí en otoño llueve casi todos los días.','in + estación del año'],
 ['Ik drink ___ de ochtend altijd twee koppen koffie.','in','aan|tot|achter','Por la mañana siempre me tomo dos cafés.','in de ochtend / in de avond'],
 ['Ze heeft het boek ___ twee dagen uitgelezen.','in','aan|om|tot','Se leyó el libro entero en dos días.','in + duración (in twee dagen = en dos días)'],
 ['Ik wil ___ de toekomst als projectmanager werken.','in','op|bij|naar','En el futuro quiero trabajar de project manager.','in de toekomst = en el futuro'],
 ['Ik vond het Nederlandse eten ___ het begin vreemd.','in','om|tot|naast','Al principio la comida holandesa me parecía rara.','in het begin = al principio'],
 ['Wat ga je ___ de kerstvakantie doen?','in','op|om|over','¿Qué vas a hacer en las vacaciones de Navidad?','in de vakantie = en vacaciones'],
 ['We stonden een half uur ___ de rij voor het museum.','in','aan|bij|uit','Estuvimos media hora haciendo cola delante del museo.','in de rij staan = hacer cola'],
 ['Mijn baas staat elke ochtend ___ de file op de A13.','in','aan|uit|tegen','Mi jefe se mete todas las mañanas en el atasco de la A13.','in de file staan = estar en un atasco'],
 ['Ik lees altijd ___ de trein naar Rotterdam.','in','bij|met|uit','Siempre leo en el tren a Róterdam.','in de trein = dentro del tren'],
 ['Wacht maar even ___ de auto, ik ben zo terug.','in','naar|uit|over','Espera un momento en el coche, vuelvo enseguida.','in de auto = dentro del coche'],
 ['Zondag ben ik tot elf uur ___ bed gebleven.','in','bij|uit|tijdens','El domingo me quedé en la cama hasta las once.','in bed (sin artículo)'],
 ['Mijn huisgenoot ligt sinds gisteren ___ het ziekenhuis.','in','aan|naar|uit','Mi compañero de piso está ingresado en el hospital desde ayer.','in het ziekenhuis liggen = estar ingresado'],
 ['Wie heeft de vuile pannen ___ de keuken laten staan?','in','op|naar|langs','¿Quién ha dejado las cazuelas sucias en la cocina?','in + habitación (in de keuken)'],
 ['Als het mooi weer is, eten we ___ de tuin.','in','op|naar|door','Si hace buen tiempo, comemos en el jardín.','in de tuin = en el jardín'],
 ['Zullen we morgen ___ het Delftse Hout gaan hardlopen?','in','aan|uit|tijdens','¿Vamos mañana a correr al Delftse Hout?','in het park / in het bos'],
 ['Dat staat ___ het huurcontract, artikel 5.','in','uit|voor|naar','Eso viene en el contrato de alquiler, artículo 5.','in het contract / in de krant'],
 ['Mijn oma gelooft nog steeds ___ spoken.','in','op|van|zonder','Mi abuela todavía cree en fantasmas.','geloven in = creer en'],
 ['Ik heb veel interesse ___ duurzame scheepsbouw.','in','aan|van|door','Me interesa mucho la construcción naval sostenible.','interesse hebben in = interesarse por'],
 ['Sanne is veel beter ___ koken dan haar vriend.','in','aan|van|naast','Sanne cocina mucho mejor que su novio.','goed/beter/slecht in iets'],
 ['Heb jij ook zo’n zin ___ de zomer?','in','aan|naar|tegenover','¿Tú también tienes tantas ganas de que llegue el verano?','zin hebben in = tener ganas de'],
 ['Ik heb ontzettend veel trek ___ patat.','in','aan|van|voor','Me muero de ganas de comer patatas fritas.','trek hebben in = tener ganas de comer'],
 ['Sorry, ik heb me ___ de datum vergist.','in','op|van|om','Perdona, me he equivocado de fecha.','zich vergissen in = equivocarse de'],
 ['Kun je de soep even ___ de gaten houden?','in','aan|uit|bij','¿Puedes vigilar un momento la sopa?','in de gaten houden = vigilar'],
 ['Door de nieuwe dienstregeling ben ik helemaal ___ de war.','in','op|uit|door','Con los nuevos horarios estoy totalmente confundido.','in de war zijn = estar confundido'],
 ['Deze week is de kaas ___ de aanbieding.','in','aan|van|voor','Esta semana el queso está de oferta.','in de aanbieding = de oferta'],
 ['Ik neem vandaag thee ___ plaats van koffie.','in','op|voor|bij','Hoy tomo té en lugar de café.','in plaats van = en lugar de'],
 ['We waren ___ totaal met twaalf mensen.','in','aan|met|over','En total éramos doce.','in totaal = en total'],
 ['Ik kom ___ ieder geval na het eten.','in','op|voor|bij','Yo voy en cualquier caso, después de cenar.','in ieder geval = en cualquier caso'],
 ['Hij is ___ het echt veel kleiner dan op tv.','in','op|na|uit','En persona es mucho más bajo que en la tele.','in het echt = en persona, en la vida real'],
 ['Ik zit graag ___ de zon op het terras.','in','op|aan|bij','Me gusta sentarme al sol en la terraza.','in de zon = al sol'],
 ['We hebben twee uur ___ de regen op de bus gewacht.','in','bij|tegen|over','Esperamos el autobús dos horas bajo la lluvia.','in de regen = bajo la lluvia'],
 ['Fiets nooit zonder licht ___ het donker.','in','op|tot|uit','Nunca vayas en bici sin luz cuando está oscuro.','in het donker = a oscuras'],
 ['Na mijn master wil ik ___ de jachtbouw werken.','in','op|met|naar','Después del máster quiero trabajar en la construcción de yates.','werken in + sector'],
 ['Het jacht ligt nu ___ de haven van Rotterdam.','in','op|uit|naar','El yate está ahora en el puerto de Róterdam.','in de haven = en el puerto'],
 ['Snijd de paprika ___ kleine stukjes.','in','op|met|uit','Corta el pimiento en trocitos.','in stukjes snijden = cortar en trocitos'],
 ['Moet ik ___ pak naar het sollicitatiegesprek?','in','op|van|met','¿Tengo que ir de traje a la entrevista?','in pak = de traje'],
 ['Nederlanders zijn ___ het algemeen erg direct.','in','op|voor|bij','Los holandeses, en general, son muy directos.','in het algemeen = en general']
]);

/* ---- js/content/prep-3.js ---- */
/* Woorden · preposiciones en contexto (3): aan, bij */
addPrep([
 /* aan */
 ['Hang je jas maar ___ de kapstok.','aan','in|tegen|naar','Cuelga el abrigo en el perchero.','aan = colgado de'],
 ['Ik heb mijn fiets ___ een lantaarnpaal vastgemaakt.','aan','langs|uit|naar','He atado la bici a una farola.','vastmaken aan = atar a'],
 ['Mijn tante heeft een appartement ___ de kust bij Alicante.','aan','op|in|naar','Mi tía tiene un piso en la costa, cerca de Alicante.','aan de kust / aan zee'],
 ['Als het warm is, zitten we vaak ___ de gracht met een biertje.','aan','in|uit|naar','Cuando hace calor solemos sentarnos junto al canal con una cerveza.','aan de gracht = a orillas del canal'],
 ['Mijn moeder hangt elke zondag een uur ___ de telefoon.','aan','op|met|over','Mi madre se pasa una hora al teléfono todos los domingos.','aan de telefoon = al teléfono'],
 ['De bakker zit ___ de andere kant van de straat.','aan','uit|bij|voor','La panadería está al otro lado de la calle.','aan de andere kant = al otro lado'],
 ['Er zijn twaalf bemanningsleden ___ boord van het jacht.','aan','op|in|achter','Hay doce tripulantes a bordo del yate.','aan boord = a bordo'],
 ['Heb je de sleutel al ___ de nieuwe huisgenoot gegeven?','aan','op|naar|uit','¿Le has dado ya la llave al nuevo compañero de piso?','iets geven aan iemand'],
 ['Vraag het maar ___ de huisbaas, hij weet het zeker.','aan','om|op|tot','Pregúntaselo al casero, él lo sabe seguro.','iets vragen aan iemand = preguntar a alguien'],
 ['Dat geheim heb ik ___ niemand verteld.','aan','voor|naar|bij','Ese secreto no se lo he contado a nadie.','vertellen aan iemand'],
 ['Kun je dit ___ de nieuwe stagiair uitleggen?','aan','naar|met|bij','¿Puedes explicárselo al nuevo becario?','uitleggen aan iemand'],
 ['Denk ___ je paraplu, het gaat vanmiddag regenen!','aan','op|van|zonder','¡Acuérdate del paraguas, que esta tarde va a llover!','denken aan = acordarse de'],
 ['Dit jaar neemt ons team deel ___ het studentenkampioenschap.','aan','op|met|voor','Este año nuestro equipo participa en el campeonato universitario.','deelnemen aan = participar en'],
 ['Ik werk al vier maanden ___ mijn scriptie.','aan','op|in|door','Llevo cuatro meses trabajando en la tesis.','werken aan = trabajar en (un proyecto)'],
 ['Ben je al gewend ___ het Nederlandse eten?','aan','op|naar|tegenover','¿Ya te has acostumbrado a la comida holandesa?','gewend zijn aan = estar acostumbrado a'],
 ['Er is een groot tekort ___ woningen in Delft.','aan','in|van|zonder','En Delft hay una gran escasez de viviendas.','tekort aan = escasez de'],
 ['Door gebrek ___ tijd ben ik niet naar de training gegaan.','aan','van|om|voor','Por falta de tiempo no fui al entrenamiento.','gebrek aan = falta de'],
 ['Deze foto herinnert me ___ onze reis naar Portugal.','aan','van|over|volgens','Esta foto me recuerda a nuestro viaje a Portugal.','iemand herinneren aan = recordarle algo'],
 ['Ligt het ___ mij, of is het hier koud?','aan','bij|in|door','¿Soy yo, o hace frío aquí?','het ligt aan … = es cosa de …'],
 ['Wie is er nu ___ de beurt?','aan','op|in|na','¿A quién le toca ahora?','aan de beurt zijn = tocarle a uno'],
 ['Wat is er ___ de hand? Je kijkt zo boos.','aan','op|om|uit','¿Qué pasa? Pareces enfadado.','Wat is er aan de hand? = ¿Qué pasa?'],
 ['Na de koffie gaan we weer ___ de slag.','aan','op|met|over','Después del café nos ponemos otra vez manos a la obra.','aan de slag gaan = ponerse a trabajar'],
 ['Pieter kan nu niet bellen, hij is ___ het douchen.','aan','op|bij|over','Pieter no puede hablar ahora, se está duchando.','aan het + infinitivo = estar haciendo algo'],
 ['Ze waren de hele middag ___ het voetballen in het park.','aan','op|met|tijdens','Estuvieron toda la tarde jugando al fútbol en el parque.','aan het + infinitivo = estar haciendo algo'],
 ['Hoeveel geef jij per maand ___ boodschappen uit?','aan','in|over|op','¿Cuánto gastas al mes en la compra?','uitgeven aan = gastar en'],
 ['Ik besteed te veel tijd ___ mijn telefoon.','aan','van|in|tegen','Paso demasiado tiempo con el móvil.','tijd besteden aan = dedicar tiempo a'],
 ['Het ontwerp moet ___ alle veiligheidseisen voldoen.','aan','op|met|voor','El diseño tiene que cumplir todos los requisitos de seguridad.','voldoen aan = cumplir (requisitos)'],
 ['Voeg nog wat zout ___ de soep toe.','aan','op|met|uit','Añade un poco más de sal a la sopa.','toevoegen aan = añadir a'],
 ['Mijn huisgenoot is verslaafd ___ koffie.','aan','van|met|zonder','Mi compañero de piso es adicto al café.','verslaafd aan = adicto a'],
 ['Hij heeft een ring ___ zijn vinger.','aan','naar|in|boven','Lleva un anillo en el dedo.','aan = puesto en (anillo en el dedo)'],
 ['Je hebt niets ___ een fiets zonder slot.','aan','op|van|over','Una bici sin candado no te sirve de nada.','iets hebben aan = servir de algo'],
 ['Ik sta altijd ___ jouw kant.','aan','op|van|achter','Siempre estoy de tu parte.','aan iemands kant staan = estar de su parte'],
 ['Mijn moeder geeft Spaanse les ___ volwassenen.','aan','bij|met|naar','Mi madre da clases de español a adultos.','les geven aan iemand'],
 ['Na dit semester ben ik echt ___ vakantie toe.','aan','op|in|voor','Después de este semestre necesito de verdad unas vacaciones.','aan iets toe zijn = necesitar algo ya'],
 ['Iedereen moet zich ___ de huisregels houden.','aan','zonder|bij|voor','Todo el mundo tiene que cumplir las normas de la casa.','zich houden aan = atenerse a'],
 ['Ik heb een hekel ___ vroeg opstaan.','aan','van|met|ondanks','Odio madrugar.','een hekel hebben aan = odiar'],
 ['Ik moet steeds ___ dat examen denken.','aan','op|naar|van','No paro de pensar en ese examen.','denken aan = pensar en'],

 /* bij */
 ['Ik heb gisteravond ___ Sanne gegeten; ze kookt fantastisch.','bij','naar|aan|uit','Anoche cené en casa de Sanne; cocina de maravilla.','bij + persona = en casa de'],
 ['Mag ik vannacht ___ jullie slapen? Mijn trein rijdt niet meer.','bij','naar|over|tegen','¿Puedo dormir esta noche en vuestra casa? Ya no hay trenes.','bij iemand slapen = dormir en su casa'],
 ['Na haar studie is Femke ___ een ingenieursbureau gaan werken.','bij','uit|over|tegen','Después de la carrera, Femke se puso a trabajar en una ingeniería.','werken bij + empresa'],
 ['Mijn huisgenoot loopt stage ___ een architectenbureau in Rotterdam.','bij','naar|uit|door','Mi compañero de piso hace prácticas en un estudio de arquitectura de Róterdam.','stage lopen bij + empresa'],
 ['Je moet je binnen vijf dagen ___ de gemeente inschrijven.','bij','naar|over|na','Tienes que empadronarte en el ayuntamiento en un plazo de cinco días.','zich inschrijven bij de gemeente'],
 ['Ik ben ___ een Nederlandse zorgverzekeraar verzekerd.','bij','met|voor|uit','Tengo el seguro médico con una aseguradora holandesa.','verzekerd zijn bij + empresa'],
 ['Ik zit nu ___ de tandarts, ik bel je straks terug.','bij','naar|in|op','Ahora estoy en el dentista; te llamo luego.','bij de tandarts / bij de huisarts'],
 ['Mijn haar is te lang, ik moet morgen ___ de kapper langs.','bij','aan|uit|over','Tengo el pelo demasiado largo; mañana tengo que pasarme por la peluquería.','bij iemand langsgaan = pasarse por'],
 ['Ik woon vlak ___ het station.','bij','naar|in|uit','Vivo muy cerca de la estación.','bij = cerca de'],
 ['Er is een ongeluk gebeurd ___ de brug over de Schie.','bij','naar|uit|tijdens','Ha habido un accidente junto al puente sobre el Schie.','bij = junto a, cerca de'],
 ['Wat drinken jullie meestal ___ het eten?','bij','op|naar|om','¿Qué soléis beber con la comida?','bij het eten = con la comida'],
 ['De barbecue gaat ___ slecht weer niet door.','bij','naar|aan|uit','Si hace mal tiempo, la barbacoa se suspende.','bij + condición (bij slecht weer)'],
 ['Je krijgt de sleutels ___ aankomst in het hotel.','bij','aan|met|naar','Te dan las llaves al llegar al hotel.','bij aankomst = al llegar'],
 ['Heb je je paspoort ___ je?','bij','met|aan|uit','¿Llevas el pasaporte encima?','iets bij je hebben = llevar encima'],
 ['Die rode trui past niet ___ je groene broek.','bij','met|aan|naar','Ese jersey rojo no pega con tus pantalones verdes.','passen bij = pegar con, combinar con'],
 ['Overwerken hoort nu eenmaal ___ dit vak.','bij','aan|met|voor','Hacer horas extra va con el oficio.','horen bij = formar parte de'],
 ['Met kerst komt mijn hele familie ___ elkaar in Vigo.','bij','aan|uit|over','En Navidad toda mi familia se reúne en Vigo.','bij elkaar komen = reunirse'],
 ['Is dat ___ jullie in Spanje ook zo?','bij','aan|op|uit','¿En España también es así?','bij ons / bij jullie = en nuestra/vuestra casa o país'],
 ['Gebruik ___ brand nooit de lift.','bij','in|met|voor','En caso de incendio, no uses nunca el ascensor.','bij brand = en caso de incendio'],
 ['Bel ___ twijfel altijd even de huisarts.','bij','met|op|na','Si tienes dudas, llama siempre al médico de cabecera.','bij twijfel = en caso de duda'],
 ['Hij is al twintig jaar ___ de brandweer.','bij','in|op|voor','Lleva veinte años en los bomberos.','bij de brandweer / bij de politie'],
 ['Ik haal elke zaterdag brood ___ de bakker op de hoek.','bij','aan|naar|door','Todos los sábados compro el pan en la panadería de la esquina.','bij de bakker = en la panadería'],
 ['Morgen gaan we op bezoek ___ mijn oma in het verzorgingshuis.','bij','aan|over|tot','Mañana vamos a visitar a mi abuela a la residencia.','op bezoek gaan bij iemand'],
 ['Ik heb morgen een afspraak ___ de huisarts.','bij','naar|aan|uit','Mañana tengo cita con el médico de cabecera.','een afspraak bij de huisarts'],
 ['Je kunt ___ de kassa met je pinpas betalen.','bij','op|in|naar','Puedes pagar con tarjeta en la caja.','bij de kassa = en la caja'],
 ['De kat van de buren zit altijd ___ ons in de tuin.','bij','naar|op|tegen','El gato de los vecinos siempre está en nuestro jardín.','bij ons in de tuin = en nuestro jardín'],
 ['Je mag de bal ___ waterpolo niet met twee handen pakken.','bij','aan|naar|over','En waterpolo no puedes coger el balón con las dos manos.','bij + deporte o actividad = en'],
 ['Kom je zaterdag ___ ons eten?','bij','op|aan|uit','¿Vienes el sábado a cenar a casa?','bij iemand eten = comer en su casa'],
 ['Ik woon tijdelijk ___ een Nederlands gezin in.','bij','met|op|voor','Vivo temporalmente en casa de una familia holandesa.','inwonen bij iemand'],
 ['Ik heb mijn tas ___ Femke laten liggen.','bij','naar|op|tegen','Me he dejado la bolsa en casa de Femke.','bij iemand = en casa de alguien'],
 ['Ik was ___ de opening van het nieuwe zwembad.','bij','aan|in|tijdens','Estuve en la inauguración de la nueva piscina.','bij = presente en (un acto)']
]);

/* ---- js/content/prep-4.js ---- */
/* Woorden · preposiciones en contexto (4): naar, van */
addPrep([
 /* naar */
 ['Ik ga morgen met de trein ___ Groningen.','naar','in|aan|uit','Mañana voy en tren a Groninga.','naar + destino'],
 ['Met kerst vlieg ik ___ Santander.','naar','in|op|bij','En Navidad vuelo a Santander.','naar + ciudad (destino)'],
 ['Mijn huisgenoot is vorige maand ___ Amsterdam verhuisd.','naar','aan|over|tot','Mi compañero de piso se mudó a Ámsterdam el mes pasado.','verhuizen naar = mudarse a'],
 ['Hoe laat ga jij meestal ___ bed?','naar','in|aan|op','¿A qué hora te sueles ir a la cama?','naar bed gaan = irse a la cama'],
 ['Na de training gaan we nog even ___ de kroeg.','naar','in|op|bij','Después del entrenamiento vamos un rato al bar.','gaan naar + lugar'],
 ['Kom je ook ___ mijn verjaardag, zaterdag?','naar','aan|uit|over','¿Vienes también a mi cumpleaños el sábado?','naar een feest komen/gaan'],
 ['Zullen we vanavond ___ de film gaan?','naar','in|aan|tegen','¿Vamos al cine esta noche?','naar de film gaan = ir al cine'],
 ['Ik moet nog even ___ de supermarkt voor melk.','naar','in|op|aan','Todavía tengo que ir al súper a por leche.','moeten + naar (sin verbo de movimiento)'],
 ['Daan fietst elke dag ___ de universiteit.','naar','in|aan|over','Daan va todos los días en bici a la universidad.','naar = a, hacia (destino)'],
 ['Het is zulk mooi weer, laten we ___ buiten gaan.','naar','op|in|door','Hace tan buen tiempo… ¡salgamos fuera!','naar buiten = (salir) fuera'],
 ['Waarom kijk je zo ___ me?','naar','op|aan|over','¿Por qué me miras así?','kijken naar = mirar'],
 ['Je moet beter ___ de trainer luisteren.','naar','aan|voor|bij','Tienes que hacerle más caso al entrenador.','luisteren naar = escuchar, hacer caso'],
 ['Mijn oma vraagt altijd ___ mijn studie.','naar','om|op|voor','Mi abuela siempre me pregunta por los estudios.','vragen naar = preguntar por'],
 ['Een toerist vroeg me de weg ___ het station.','naar','tot|aan|met','Un turista me preguntó cómo llegar a la estación.','de weg naar = el camino a'],
 ['Ik ben op zoek ___ een tweedehands fiets.','naar','voor|om|van','Estoy buscando una bici de segunda mano.','op zoek zijn naar = estar buscando'],
 ['Ik verlang soms ___ de zon en het eten van thuis.','naar','op|om|tegenover','A veces echo de menos el sol y la comida de casa.','verlangen naar = añorar'],
 ['Deze thee smaakt een beetje ___ zeep.','naar','van|aan|ondanks','Este té sabe un poco a jabón.','smaken naar = saber a'],
 ['Je sporttas ruikt helemaal ___ zwembad.','naar','van|uit|tegen','Tu bolsa de deporte huele muchísimo a piscina.','ruiken naar = oler a'],
 ['Ik ben benieuwd ___ de uitslag van het examen.','naar','op|om|ondanks','Tengo curiosidad por saber el resultado del examen.','benieuwd zijn naar = tener curiosidad por'],
 ['Mijn collega’s zijn erg nieuwsgierig ___ het Spaanse eten.','naar','op|voor|volgens','Mis compañeros tienen mucha curiosidad por la comida española.','nieuwsgierig naar = curioso por'],
 ['Ze doet onderzoek ___ de stabiliteit van grote jachten.','naar','op|door|tijdens','Investiga la estabilidad de los grandes yates.','onderzoek naar = investigación sobre'],
 ['We kijken echt uit ___ de zomervakantie.','naar','om|tegen|door','Tenemos muchísimas ganas de que lleguen las vacaciones de verano.','uitkijken naar = esperar con ilusión'],
 ['Het kind wees ___ de grote boot in de haven.','naar','om|tegen|uit','El niño señaló el barco grande del puerto.','wijzen naar = señalar'],
 ['Bel me maar, ik ben nu op weg ___ huis.','naar','in|voor|over','Llámame, ahora voy de camino a casa.','op weg naar = de camino a'],
 ['Ik ga morgen ___ mijn moeder in Vigo.','naar','aan|over|tot','Mañana voy a ver a mi madre a Vigo.','naar + persona = ir a casa de alguien'],
 ['Kun je me morgen ___ het vliegveld brengen?','naar','aan|in|over','¿Me puedes llevar mañana al aeropuerto?','brengen naar = llevar a'],
 ['Hij gooide de bal ___ zijn teamgenoot.','naar','aan|uit|tot','Le pasó el balón a su compañero de equipo.','gooien naar = lanzar a, hacia'],
 ['Mijn kleine broertje gaat volgend jaar ___ de middelbare school.','naar','aan|in|uit','Mi hermano pequeño empieza el instituto el año que viene.','naar school gaan = ir al colegio'],
 ['Steeds meer jongeren gaan ___ het buitenland voor hun studie.','naar','in|aan|uit','Cada vez más jóvenes se van al extranjero a estudiar.','naar het buitenland (gaan)'],
 ['Met die hoest moet je echt ___ de dokter.','naar','aan|in|voor','Con esa tos tienes que ir al médico, en serio.','naar de dokter (gaan)'],
 ['Wanneer ga je terug ___ Spanje?','naar','in|aan|bij','¿Cuándo vuelves a España?','teruggaan naar = volver a'],
 ['We gaan in mei op vakantie ___ Kroatië.','naar','op|voor|uit','En mayo nos vamos de vacaciones a Croacia.','op vakantie naar + país'],

 /* van */
 ['Wat lief ___ je dat je bent gekomen!','van','met|over|ondanks','¡Qué detalle por tu parte haber venido!','lief/aardig van je = un detalle por tu parte'],
 ['Ik ben ___ plan om na de zomer een auto te kopen.','van','in|op|zonder','Tengo pensado comprarme un coche después del verano.','van plan zijn = tener pensado'],
 ['Je moet de tickets ___ tevoren online kopen.','van','met|op|voor','Tienes que comprar las entradas por internet con antelación.','van tevoren = con antelación'],
 ['Blijf ___ mijn eten af!','van','uit|over|langs','¡No toques mi comida!','afblijven van = no tocar'],
 ['Ik schrok ___ de harde knal.','van','op|met|tegen','Me asusté con el estruendo.','schrikken van = asustarse con/de'],
 ['Ik baal ___ dit weer.','van','aan|met|volgens','Estoy harto de este tiempo.','balen van = estar harto de'],
 ['Ik ben altijd doodmoe ___ de training op dinsdag.','van','aan|uit|over','Siempre acabo muerto del entrenamiento de los martes.','moe van = cansado por'],
 ['We lagen dubbel ___ het lachen.','van','om|op|voor','Nos partíamos de risa.','van + causa (van het lachen)'],
 ['Ik sta te rillen ___ de kou.','van','om|met|voor','Estoy temblando de frío.','van + causa (van de kou)'],
 ['Is dit de fiets ___ jouw huisgenoot?','van','bij|aan|naar','¿Es esta la bici de tu compañero de piso?','van = de (posesión)'],
 ['Ik heb deze trui ___ mijn oma gekregen.','van','door|uit|naar','Este jersey me lo regaló mi abuela.','krijgen van iemand = recibir de alguien'],
 ['Hoe lang duurt het ___ Delft naar Rotterdam met de fiets?','van','uit|op|tot','¿Cuánto se tarda en bici de Delft a Róterdam?','van … naar = de … a'],
 ['Het dek van het jacht is ___ teakhout.','van','uit|met|door','La cubierta del yate es de teca.','van + material (van hout, van staal)'],
 ['Ze werkt aan een jacht ___ zeventig meter.','van','op|met|over','Trabaja en un yate de setenta metros.','van + medida (een jacht van 70 meter)'],
 ['Ik kreeg een boete ___ negentig euro omdat ik zonder licht fietste.','van','met|op|na','Me pusieron una multa de noventa euros por ir en bici sin luz.','van + cantidad (een boete van …)'],
 ['Lotte is een ___ mijn beste vriendinnen.','van','uit|bij|voor','Lotte es una de mis mejores amigas.','een van = uno de'],
 ['Ik heb de helft ___ de taart opgegeten.','van','uit|boven|aan','Me he comido la mitad de la tarta.','de helft van = la mitad de'],
 ['Ben jij op de hoogte ___ de nieuwe regels?','van','met|in|door','¿Estás al tanto de las nuevas normas?','op de hoogte zijn van = estar al tanto de'],
 ['Het salaris is afhankelijk ___ je ervaring.','van','op|met|volgens','El sueldo depende de tu experiencia.','afhankelijk van = depende de'],
 ['De klant is nog niet overtuigd ___ het nieuwe ontwerp.','van','aan|met|voor','El cliente todavía no está convencido del nuevo diseño.','overtuigd van = convencido de'],
 ['We waren erg onder de indruk ___ het jacht.','van','op|met|uit','El yate nos impresionó mucho.','onder de indruk van = impresionado por'],
 ['Je leert het meest ___ je eigen fouten.','van','met|aan|voor','De lo que más se aprende es de los propios errores.','leren van = aprender de'],
 ['Veel studenten maken gebruik ___ de bibliotheek.','van','met|op|door','Muchos estudiantes usan la biblioteca.','gebruikmaken van = hacer uso de'],
 ['Je moet ___ het mooie weer profiteren.','van','aan|met|over','Tienes que aprovechar el buen tiempo.','profiteren van = aprovechar'],
 ['Morgen neem ik afscheid ___ mijn collega’s op de werf.','van','met|bij|voor','Mañana me despido de mis compañeros del astillero.','afscheid nemen van = despedirse de'],
 ['Hou jij ___ pittig eten?','van','op|met|volgens','¿Te gusta la comida picante?','houden van = gustar mucho'],
 ['Het Nederlandse onderwijs verschilt veel ___ het Spaanse.','van','op|uit|tegen','La enseñanza holandesa es muy distinta de la española.','verschillen van = ser distinto de'],
 ['Ik ben nog niet hersteld ___ de griep.','van','op|uit|over','Todavía no me he recuperado de la gripe.','herstellen van = recuperarse de'],
 ['Wanneer komen Pieter en Noor terug ___ vakantie?','van','tot|aan|naar','¿Cuándo vuelven Pieter y Noor de vacaciones?','terug van vakantie = de vuelta de vacaciones'],
 ['Ik heb nog niets ___ de verhuurder gehoord.','van','bij|op|voor','Todavía no sé nada del casero.','iets horen van iemand = saber de alguien'],
 ['Ik word gek ___ die herrie.','van','met|uit|voor','Ese ruido me está volviendo loco.','gek worden van iets = que algo te vuelva loco'],
 ['Mijn zus heeft een dochter ___ drie.','van','met|op|in','Mi hermana tiene una hija de tres años.','een kind van drie (jaar)']
]);

/* ---- js/content/prep-5.js ---- */
/* Woorden · preposiciones en contexto (5): met, voor */
addPrep([
 /* met */
 ['Ik ga zaterdag ___ een paar vrienden naar het strand.','met','bij|van|uit','El sábado voy a la playa con unos amigos.','met = con (compañía)'],
 ['We gaan ___ de bus naar Den Haag, want de trein rijdt niet.','met','door|bij|tijdens','Vamos a La Haya en autobús porque no hay trenes.','met + transporte (met de bus)'],
 ['Ik betaal liever ___ mijn pinpas dan contant.','met','door|van|op','Prefiero pagar con tarjeta que en efectivo.','met = con (instrumento)'],
 ['Schrijf je de brief ___ de hand of op de computer?','met','in|aan|uit','¿Escribes la carta a mano o en el ordenador?','met de hand = a mano'],
 ['Wil je je patat ___ mayonaise?','met','van|op|voor','¿Quieres las patatas fritas con mayonesa?','met = con (comida)'],
 ['We hebben een kamer ___ uitzicht op zee geboekt.','met','van|in|voor','Hemos reservado una habitación con vistas al mar.','met = con (característica)'],
 ['De man ___ de rode jas is mijn nieuwe buurman.','met','van|op|uit','El hombre de la chaqueta roja es mi nuevo vecino.','met = con, de (rasgo)'],
 ['Wat doen jullie ___ oud en nieuw?','met','in|bij|uit','¿Qué hacéis en Nochevieja?','met + fiesta (met kerst, met oud en nieuw)'],
 ['Mijn broer gaat in juni ___ zijn Duitse vriendin trouwen.','met','bij|aan|tegen','Mi hermano se casa en junio con su novia alemana.','trouwen met = casarse con'],
 ['Heb je al ___ je begeleider over je planning gepraat?','met','bij|van|tot','¿Ya has hablado con tu tutor sobre la planificación?','praten met iemand over iets'],
 ['Ik heb om vier uur ___ Ahmed afgesproken bij het station.','met','op|door|uit','He quedado con Ahmed a las cuatro en la estación.','afspreken met = quedar con'],
 ['Ik ben nog druk bezig ___ mijn verslag.','met','op|in|van','Todavía estoy liado con el informe.','bezig zijn met = estar ocupado con'],
 ['Kun je ___ dat getik ophouden? Ik probeer te werken.','met','van|op|voor','¿Puedes dejar de dar golpecitos? Intento trabajar.','ophouden met = dejar de'],
 ['Je moet rekening houden ___ vertraging op de A4.','met','op|voor|door','Tienes que tener en cuenta posibles retrasos en la A4.','rekening houden met = tener en cuenta'],
 ['Morgen maak ik kennis ___ mijn nieuwe collega’s.','met','bij|van|tegenover','Mañana conozco a mis nuevos compañeros.','kennismaken met = conocer a alguien'],
 ['Hij kan niet goed ___ kritiek omgaan.','met','op|over|ondanks','No lleva bien las críticas.','omgaan met = llevar, manejar'],
 ['Sanne heeft weer ruzie ___ haar huisgenote.','met','tegen|bij|voor','Sanne ha vuelto a pelearse con su compañera de piso.','ruzie hebben met = pelearse con'],
 ['Dat probleem heeft niets ___ jou te maken.','met','van|op|zonder','Ese problema no tiene nada que ver contigo.','te maken hebben met = tener que ver con'],
 ['Vergeleken ___ Vigo is Delft heel klein.','met','van|tot|voor','Comparado con Vigo, Delft es muy pequeño.','vergeleken met = comparado con'],
 ['Ik wil je feliciteren ___ je nieuwe baan!','met','voor|op|aan','¡Quiero felicitarte por tu nuevo trabajo!','feliciteren met = felicitar por'],
 ['Wat is er ___ je laptop? Hij doet het niet meer.','met','van|naar|tot','¿Qué le pasa a tu portátil? Ya no funciona.','Wat is er met …? = ¿Qué le pasa a …?'],
 ['We gingen ___ z’n vieren naar Texel.','met','op|in|van','Fuimos los cuatro a Texel.','met z’n tweeën/vieren = los dos/los cuatro'],
 ['Sorry, dat deed ik niet ___ opzet!','met','op|aan|voor','¡Perdona, no lo he hecho a propósito!','met opzet = a propósito'],
 ['Mijn vader gaat volgend jaar ___ pensioen.','met','op|in|voor','Mi padre se jubila el año que viene.','met pensioen gaan = jubilarse'],
 ['Laat me even ___ rust, ik moet studeren.','met','in|op|uit','Déjame en paz un rato, que tengo que estudiar.','iemand met rust laten = dejar en paz'],
 ['Mijn ouders komen ___ het vliegtuig naar Amsterdam.','met','door|van|naar','Mis padres vienen en avión a Ámsterdam.','met + transporte (met het vliegtuig)'],
 ['Ik ben ___ achttien jaar het huis uitgegaan.','met','in|aan|van','Me fui de casa a los dieciocho años.','met + edad (met achttien jaar)'],
 ['We zijn ___ veertien man in het team.','met','van|op|in','Somos catorce en el equipo.','met + número de personas'],
 ['Woon je ___ je vriendin samen?','met','bij|van|voor','¿Vives con tu novia?','samenwonen met = vivir con (la pareja)'],
 ['Ik heb gisteren een uur ___ mijn moeder gebeld.','met','aan|bij|tegen','Ayer estuve una hora hablando por teléfono con mi madre.','bellen met iemand = hablar por teléfono con'],
 ['Ik ben heel blij ___ mijn nieuwe fiets.','met','op|van|volgens','Estoy muy contento con mi bici nueva.','blij zijn met iets = contento con algo'],
 ['Hoe gaat het ___ je scriptie?','met','van|op|voor','¿Qué tal va la tesis?','Hoe gaat het met …? = ¿Qué tal va …?'],
 ['Studenten kunnen ___ korting naar het museum.','met','op|van|in','Los estudiantes pueden ir al museo con descuento.','met korting = con descuento'],
 ['Sorry dat ik ___ de deur in huis val, maar ik heb je hulp nodig.','met','door|op|in','Perdona que vaya directo al grano, pero necesito tu ayuda.','met de deur in huis vallen = ir al grano'],

 /* voor */
 ['In de bioscoop ging er een heel lange man ___ me zitten.','voor','naast|achter|boven','En el cine se sentó delante de mí un hombre altísimo.','voor = delante de'],
 ['Ik moet het verslag ___ de vergadering van maandag naar de klant sturen.','voor','sinds|tot|om','Tengo que mandarle el informe al cliente antes de la reunión del lunes.','voor = antes de'],
 ['Vorige week heb ik ___ het eerst haring gegeten.','voor','op|in|om','La semana pasada comí arenque por primera vez.','voor het eerst = por primera vez'],
 ['Ik heb een cadeautje ___ je meegenomen uit Spanje.','voor','naar|bij|uit','Te he traído un regalito de España.','voor = para (destinatario)'],
 ['Deze kamer is te klein ___ twee personen.','voor','van|op|tegen','Esta habitación es demasiado pequeña para dos personas.','te … voor = demasiado … para'],
 ['Sporten is goed ___ je gezondheid.','voor','met|bij|naar','Hacer deporte es bueno para la salud.','goed/slecht voor = bueno/malo para'],
 ['Heb je vanmiddag even tijd ___ een kort gesprek?','voor','met|op|bij','¿Tienes un rato esta tarde para una charla breve?','tijd hebben voor = tener tiempo para'],
 ['Wie zorgt er dit weekend ___ de drankjes?','voor','van|op|om','¿Quién se encarga de las bebidas este fin de semana?','zorgen voor = encargarse de'],
 ['Onze hond is doodsbang ___ het vuurwerk met oud en nieuw.','voor','aan|op|om','Nuestro perro les tiene pánico a los petardos de Nochevieja.','bang voor = miedo a'],
 ['Kijk uit ___ de tram!','voor','op|met|tegen','¡Cuidado con el tranvía!','uitkijken voor = tener cuidado con'],
 ['De gemeente waarschuwt ___ gladheid op de fietspaden.','voor','op|met|van','El ayuntamiento avisa de que hay placas de hielo en los carriles bici.','waarschuwen voor = advertir de'],
 ['Je hoeft je niet te schamen ___ je accent.','voor','van|op|tegen','No tienes que avergonzarte de tu acento.','zich schamen voor = avergonzarse de'],
 ['Er is veel belangstelling ___ de cursus Nederlands.','voor','op|van|volgens','Hay mucho interés por el curso de neerlandés.','belangstelling voor = interés por'],
 ['We moeten een oplossing ___ dit probleem vinden.','voor','aan|op|uit','Tenemos que encontrar una solución a este problema.','een oplossing voor = una solución a'],
 ['Hoeveel heb je ___ die fiets betaald?','voor','om|met|tegen','¿Cuánto pagaste por esa bici?','betalen voor = pagar por'],
 ['Ik moet vanavond ___ mijn tentamen leren.','voor','aan|om|met','Esta noche tengo que estudiar para el examen.','leren voor een tentamen = estudiar para'],
 ['Hij is helaas ___ zijn rijexamen gezakt.','voor','op|in|bij','Por desgracia ha suspendido el examen de conducir.','zakken/slagen voor een examen'],
 ['Wat ___ boot is dat? Een zeiljacht?','voor','van|met|over','¿Qué tipo de barco es ese? ¿Un velero?','wat voor … = qué tipo de'],
 ['Neem ___ de zekerheid een paraplu mee.','voor','met|in|op','Llévate un paraguas por si acaso.','voor de zekerheid = por si acaso'],
 ['Ik ben ___ niets naar het gemeentehuis gegaan: het was dicht.','voor','met|op|uit','Fui al ayuntamiento para nada: estaba cerrado.','voor niets = para nada (o gratis)'],
 ['De meeste huisgenoten zijn ___ een schoonmaakrooster.','voor','aan|met|over','La mayoría de los compañeros de piso están a favor de un turno de limpieza.','voor zijn = estar a favor'],
 ['Hij is erg lang ___ zijn leeftijd.','voor','van|op|over','Es muy alto para su edad.','voor zijn leeftijd = para su edad'],
 ['Deze fiets is niet geschikt ___ lange afstanden.','voor','op|met|zonder','Esta bici no es adecuada para distancias largas.','geschikt voor = adecuado para'],
 ['Welke documenten heb je nodig ___ een huurcontract?','voor','op|naar|uit','¿Qué documentos necesitas para un contrato de alquiler?','nodig hebben voor = necesitar para'],
 ['Ik doe het gewoon ___ de lol.','voor','met|van|op','Lo hago solo por diversión.','voor de lol = por diversión'],
 ['Dank je wel ___ de uitnodiging!','voor','van|om|tegenover','¡Muchas gracias por la invitación!','bedanken voor = dar las gracias por'],
 ['Ik kijk ___ het slapengaan nooit meer op mijn telefoon.','voor','sinds|om|over','Antes de dormir ya nunca miro el móvil.','voor = antes de'],
 ['En ___ mij een biertje, alsjeblieft.','voor','bij|met|naar','Y para mí una cerveza, por favor.','voor mij = para mí (al pedir)'],
 ['Ik ben uitgenodigd ___ een sollicitatiegesprek!','voor','aan|naar|met','¡Me han invitado a una entrevista de trabajo!','uitnodigen voor = invitar a'],
 ['Je moet het formulier ___ het einde van de maand inleveren.','voor','tijdens|sinds|om','Tienes que entregar el formulario antes de fin de mes.','voor = antes de (plazo)'],
 ['Ik huur deze kamer ___ 500 euro per maand.','voor','met|om|op','Alquilo esta habitación por 500 euros al mes.','voor + precio (voor 500 euro)'],
 ['Mijn trein vertrekt om tien ___ acht.','voor','over|na|tot','Mi tren sale a las ocho menos diez.','tien voor acht = las ocho menos diez'],
 ['Zal ik ___ jou ook een kaartje kopen?','voor','naar|aan|om','¿Compro también una entrada para ti?','voor = para (alguien)']
]);

/* ---- js/content/prep-6.js ---- */
/* Woorden · preposiciones en contexto (6): over, om, uit */
addPrep([
 /* over */
 ['Ze schrijft haar scriptie ___ de geschiedenis van de Nederlandse scheepsbouw.','over','van|aan|tegen','Escribe la tesis sobre la historia de la construcción naval holandesa.','over = sobre (tema)'],
 ['Hebben jullie het al ___ de schoonmaak gehad?','over','van|met|voor','¿Ya habéis hablado de la limpieza?','het hebben over = hablar de'],
 ['Waar hebben jullie het ___?','over','van|om|uit','¿De qué estáis hablando?','het hebben over = hablar de'],
 ['Heb je al ___ mijn voorstel nagedacht?','over','aan|in|op','¿Ya has pensado en mi propuesta?','nadenken over = pensar en, reflexionar sobre'],
 ['Mijn huisgenoot klaagt altijd ___ het weer.','over','van|op|voor','Mi compañero de piso siempre se queja del tiempo.','klagen over = quejarse de'],
 ['Hij vertelde ons ___ zijn reis door Japan.','over','op|uit|naar','Nos habló de su viaje por Japón.','vertellen over = contar sobre'],
 ['Ik heb een interessant artikel ___ waterstofschepen gelezen.','over','van|op|door','He leído un artículo interesante sobre barcos de hidrógeno.','een artikel/boek over = sobre'],
 ['Maak je geen zorgen ___ het examen.','over','van|op|tegen','No te preocupes por el examen.','zich zorgen maken over = preocuparse por'],
 ['De klant is erg enthousiast ___ het nieuwe interieur.','over','met|op|van','El cliente está muy entusiasmado con el nuevo interior.','enthousiast over = entusiasmado con'],
 ['Ik was verbaasd ___ hoe direct Nederlanders zijn.','over','naar|op|ondanks','Me sorprendió lo directos que son los holandeses.','verbaasd over = sorprendido por'],
 ['Hij is nog steeds boos ___ de hoge rekening.','over','van|met|tegen','Sigue enfadado por la factura tan alta.','boos over + cosa (boos op + persona)'],
 ['Mag ik je een vraag stellen ___ het huurcontract?','over','van|op|voor','¿Te puedo hacer una pregunta sobre el contrato de alquiler?','een vraag over = una pregunta sobre'],
 ['Waar vind ik informatie ___ de zorgverzekering?','over','op|met|tijdens','¿Dónde encuentro información sobre el seguro médico?','informatie over = información sobre'],
 ['Als alles goed gaat, studeer ik ___ twee maanden af.','over','sinds|tot|om','Si todo va bien, me gradúo dentro de dos meses.','over = dentro de (tiempo)'],
 ['Waar woon jij ___ vijf jaar, denk je?','over','sinds|tijdens|om','¿Dónde crees que vivirás dentro de cinco años?','over = dentro de (tiempo)'],
 ['De les begint om kwart ___ negen.','over','voor|op|tot','La clase empieza a las nueve y cuarto.','kwart over negen = las nueve y cuarto'],
 ['We fietsen ___ de brug naar de andere kant van de stad.','over','door|uit|tegen','Cruzamos el puente en bici para ir al otro lado de la ciudad.','over = por encima, cruzando'],
 ['In de EU kun je zonder paspoortcontrole gewoon ___ de grens.','over','door|bij|uit','En la UE puedes cruzar la frontera sin control de pasaportes, sin más.','over de grens = cruzar la frontera'],
 ['Nederlandse jachten varen ___ de hele wereld.','over','tot|uit|tegen','Los yates holandeses navegan por todo el mundo.','over de hele wereld = por todo el mundo'],
 ['Ik heb gisteren met Daan ___ zijn nieuwe baan gepraat.','over','van|op|om','Ayer hablé con Daan de su nuevo trabajo.','praten met iemand over iets'],
 ['Mijn huisgenoten discussiëren eindeloos ___ de afwas.','over','van|om|tegen','Mis compañeros de piso discuten sin parar sobre los platos.','discussiëren over = discutir sobre'],
 ['Gisteravond zagen we een documentaire ___ de Deltawerken.','over','van|op|uit','Anoche vimos un documental sobre el Plan Delta.','een film/documentaire over'],
 ['De gemeente beslist volgende week ___ de nieuwe fietsenstalling.','over','van|op|naar','El ayuntamiento decide la semana que viene sobre el nuevo aparcamiento de bicis.','beslissen over = decidir sobre'],
 ['Ik ben het met je eens ___ dat punt.','over','in|van|voor','Estoy de acuerdo contigo en ese punto.','het eens zijn over iets'],
 ['Ik wil graag meer weten ___ het leven op een jacht.','over','op|voor|naar','Me gustaría saber más sobre la vida a bordo de un yate.','meer weten over = saber más sobre'],
 ['Waar gaat die film ___?','over','van|aan|op','¿De qué va esa película?','gaan over = tratar de'],
 ['Mijn baas wil een kort rapport ___ de proefvaart.','over','op|uit|tot','Mi jefe quiere un informe breve sobre la prueba de mar.','een rapport over = un informe sobre'],

 /* om */
 ['Ik heb ___ half tien een afspraak bij de bank.','om','op|in|aan','A las nueve y media tengo cita en el banco.','om + hora (om half tien = a las 9:30)'],
 ['Mijn wekker gaat elke dag ___ zes uur.','om','aan|in|over','Mi despertador suena todos los días a las seis.','om + hora'],
 ['De supermarkt gaat ___ negen uur ’s avonds dicht.','om','aan|in|door','El súper cierra a las nueve de la noche.','om + hora'],
 ['We zijn gisteren pas ___ twee uur ’s nachts thuisgekomen.','om','tot|op|in','Ayer no llegamos a casa hasta las dos de la madrugada.','pas om … = no … hasta las …'],
 ['Precies ___ middernacht begint het vuurwerk.','om','aan|in|over','A medianoche en punto empiezan los fuegos artificiales.','om middernacht = a medianoche'],
 ['Zullen we ___ zeven uur bij mij afspreken?','om','op|in|aan','¿Quedamos a las siete en mi casa?','om + hora'],
 ['We doen ___ de twee weken samen boodschappen.','om','op|in|tegen','Hacemos la compra juntos cada dos semanas.','om de twee weken = cada dos semanas'],
 ['Ik ga ___ de dag zwemmen.','om','op|in|over','Voy a nadar un día sí y otro no.','om de dag = un día sí y otro no'],
 ['In ons huis koken we ___ de beurt.','om','aan|op|na','En nuestra casa cocinamos por turnos.','om de beurt = por turnos'],
 ['Er zit een goede pizzeria hier ___ de hoek.','om','door|uit|naar','Aquí a la vuelta de la esquina hay una pizzería buena.','om de hoek = a la vuelta de la esquina'],
 ['Doe een sjaal ___ je nek, het vriest.','om','aan|op|bij','Ponte una bufanda al cuello, que está helando.','om = alrededor de'],
 ['Kijk eens goed ___ je heen.','om','bij|op|naar','Mira bien a tu alrededor.','om … heen = alrededor de'],
 ['Hij heeft zijn baas ___ een loonsverhoging gevraagd.','om','op|van|aan','Le pidió a su jefe un aumento de sueldo.','vragen om = pedir'],
 ['We moesten allemaal ___ zijn grap lachen.','om','aan|op|tegen','Su chiste nos hizo reír a todos.','lachen om = reírse de/con'],
 ['Hij geeft niet ___ dure kleren.','om','aan|tegenover|van','La ropa cara le da igual.','geven om = importarle a uno'],
 ['Bij waterpolo gaat het ___ teamwork.','om','naar|met|tegen','En el waterpolo lo importante es el trabajo en equipo.','het gaat om = lo importante es'],
 ['Delft is wereldberoemd ___ zijn blauwe aardewerk.','om','met|op|uit','Delft es famoso en todo el mundo por su cerámica azul.','beroemd/bekend om = famoso por'],
 ['Ik wed ___ een biertje dat Spanje wint.','om','op|met|uit','Me apuesto una cerveza a que gana España.','wedden om = apostarse algo'],
 ['In de finale spelen we ___ de eerste plaats.','om','in|bij|tot','En la final nos jugamos el primer puesto.','spelen om = jugarse algo'],
 ['Juist ___ die reden ben ik naar Nederland gekomen.','om','van|op|tegen','Precisamente por esa razón vine a Holanda.','om die reden = por esa razón'],
 ['Bij het ongeluk is gelukkig niemand ___ het leven gekomen.','om','aan|uit|in','Por suerte, nadie murió en el accidente.','om het leven komen = morir (en un accidente)'],
 ['Ik ben ___ een uur of acht thuis.','om','op|in|aan','Llego a casa sobre las ocho.','om een uur of acht = sobre las ocho'],
 ['Het draait allemaal ___ geld.','om','aan|over|tegen','Todo gira en torno al dinero.','draaien om = girar en torno a'],

 /* uit */
 ['Onze trainer komt oorspronkelijk ___ Hongarije.','uit','in|naar|bij','Nuestro entrenador es originario de Hungría.','komen uit = ser de (origen)'],
 ['Deze tomaten zijn afkomstig ___ Spanje.','uit','in|bij|naar','Estos tomates proceden de España.','afkomstig uit = procedente de'],
 ['Pak jij even de melk ___ de koelkast?','uit','in|op|naar','¿Sacas tú un momento la leche de la nevera?','uit = de dentro, fuera de'],
 ['Hij keek de hele les ___ het raam.','uit','voor|in|op','Se pasó toda la clase mirando por la ventana.','uit het raam kijken = mirar por la ventana'],
 ['Ik kom ’s ochtends moeilijk ___ bed.','uit','van|in|na','Por las mañanas me cuesta salir de la cama.','uit bed komen = levantarse'],
 ['Elk jaar halen ze duizenden fietsen ___ de Amsterdamse grachten.','uit','van|in|over','Cada año sacan miles de bicis de los canales de Ámsterdam.','halen uit = sacar de'],
 ['Drink niet ___ het pak, pak een glas!','uit','van|in|op','¡No bebas del cartón, coge un vaso!','drinken uit = beber de (un recipiente)'],
 ['Ik ken mijn BSN ___ mijn hoofd.','uit','in|van|met','Me sé mi número BSN de memoria.','uit je hoofd = de memoria'],
 ['Ik weet ___ ervaring dat de verhuurder nooit snel reageert.','uit','voor|van|met','Sé por experiencia que el casero nunca responde rápido.','uit ervaring = por experiencia'],
 ['Ik vroeg het alleen ___ nieuwsgierigheid.','uit','van|om|tegen','Solo lo pregunté por curiosidad.','uit + motivo (uit nieuwsgierigheid)'],
 ['Mijn ontbijt bestaat meestal ___ yoghurt met muesli.','uit','van|in|met','Mi desayuno suele consistir en yogur con muesli.','bestaan uit = consistir en'],
 ['Je kunt kiezen ___ drie verschillende menu’s.','uit','van|in|over','Puedes elegir entre tres menús distintos.','kiezen uit = elegir entre (opciones)'],
 ['Pieter en Lotte zijn na vijf jaar ___ elkaar gegaan.','uit','van|aan|tegen','Pieter y Lotte lo han dejado después de cinco años.','uit elkaar gaan = separarse'],
 ['Het feestje liep helemaal ___ de hand.','uit','van|aan|in','La fiesta se desmadró por completo.','uit de hand lopen = descontrolarse'],
 ['Na de wedstrijd klimmen we ___ het zwembad.','uit','van|over|tegen','Después del partido salimos de la piscina.','uit = salir de dentro'],
 ['De fietser kwam ___ het niets.','uit','van|in|naar','El ciclista apareció de la nada.','uit het niets = de la nada'],
 ['Zullen we vrijdag ___ eten gaan?','uit','om|van|op','¿Salimos a cenar el viernes?','uit eten gaan = salir a cenar'],
 ['Veel woorden in het Nederlands komen ___ het Frans.','uit','in|naar|bij','Muchas palabras neerlandesas vienen del francés.','komen uit = venir de, proceder de'],
 ['Ze haalde een oude foto ___ haar portemonnee.','uit','van|in|op','Sacó una foto antigua de la cartera.','halen uit = sacar de'],
 ['Het boek is ___ het Engels vertaald.','uit','op|met|door','El libro está traducido del inglés.','vertalen uit = traducir de'],
 ['Mijn huisgenoot komt ___ een groot gezin met zes kinderen.','uit','in|bij|naar','Mi compañero de piso viene de una familia de seis hijos.','komen uit een gezin = venir de una familia'],
 ['Hij is ___ het team gezet omdat hij nooit op de training kwam.','uit','van|op|tegen','Lo han echado del equipo porque nunca iba a entrenar.','uit = fuera de'],
 ['Ik heb dit nieuws ___ de eerste hand.','uit','aan|in|met','Tengo esta noticia de primera mano.','uit de eerste hand = de primera mano'],
 ['Mijn vader las ons elke avond ___ een boek voor.','uit','van|in|tegen','Mi padre nos leía cada noche un libro en voz alta.','voorlezen uit een boek']
]);

/* ---- js/content/prep-7.js ---- */
/* Woorden · preposiciones en contexto (7): door, tegen, tot, na, tijdens, sinds y otras */
addPrep([
 /* door */
 ['We liepen ___ de oude binnenstad van Leiden.','door','voor|aan|op','Paseamos por el casco antiguo de Leiden.','door = a través de, por'],
 ['Het licht komt ___ een klein raam naar binnen.','door','over|uit|tegen','La luz entra por una ventana pequeña.','door = a través de'],
 ['We reden ___ de Maastunnel naar Rotterdam-Zuid.','door','over|op|tegen','Atravesamos en coche el Maastunnel hasta Róterdam Sur.','door = a través de'],
 ['Dit jacht is ontworpen ___ een bekende Italiaanse ontwerper.','door','van|met|uit','Este yate lo diseñó un conocido diseñador italiano.','door + agente (pasiva)'],
 ['Het feest wordt georganiseerd ___ de studentenvereniging.','door','van|naar|om','La fiesta la organiza la asociación de estudiantes.','door + agente (pasiva)'],
 ['Ik werd vannacht wakker ___ het lawaai van de buren.','door','met|om|naar','Anoche me despertó el ruido de los vecinos.','door = por (causa)'],
 ['De trein heeft vertraging ___ een storing.','door','voor|van|met','El tren lleva retraso por una avería.','door = por (causa)'],
 ['Hij heeft zijn Nederlands verbeterd ___ elke dag de krant te lezen.','door','van|bij|tegen','Ha mejorado su neerlandés leyendo el periódico cada día.','door + te + infinitivo = haciendo algo'],
 ['Ik kook ___ de week meestal iets simpels.','door','aan|met|over','Entre semana suelo cocinar algo sencillo.','door de week = entre semana'],
 ['Hij kon ___ ziekte niet meedoen aan het toernooi.','door','voor|om|tot','Por enfermedad no pudo participar en el torneo.','door = por (causa)'],
 ['Je krijgt een boete als je ___ rood fietst.','door','op|over|langs','Te multan si te saltas un semáforo en rojo con la bici.','door rood fietsen = saltarse el semáforo'],
 ['Na zijn studie reisde hij drie maanden ___ Zuid-Amerika.','door','voor|over|langs','Después de la carrera viajó tres meses por Sudamérica.','reizen door = viajar por'],
 ['Ik ben ___ een vriend aan deze kamer gekomen.','door','op|uit|tot','Conseguí esta habitación a través de un amigo.','door = a través de (alguien)'],

 /* tegen */
 ['Zet je fiets niet ___ het raam van de buren.','tegen','op|in|over','No dejes la bici apoyada en la ventana de los vecinos.','tegen = apoyado contra'],
 ['We moesten de hele weg ___ de wind in fietsen.','tegen','met|door|in','Tuvimos que pedalear todo el camino con viento de cara.','tegen de wind in = con viento en contra'],
 ['Zaterdag spelen we ___ de beste ploeg van de competitie.','tegen','aan|op|over','El sábado nos enfrentamos al mejor equipo de la liga.','spelen tegen = jugar contra'],
 ['De meeste bewoners zijn ___ het plan om de parkeerplaats weg te halen.','tegen','aan|met|over','La mayoría de los vecinos se opone al plan de quitar el aparcamiento.','tegen zijn = estar en contra'],
 ['Heb je iets ___ hoofdpijn?','tegen','van|op|uit','¿Tienes algo para el dolor de cabeza?','iets tegen hoofdpijn = algo para el dolor'],
 ['Mijn fiets is verzekerd ___ diefstal.','tegen','van|op|over','Mi bici está asegurada contra robo.','verzekerd tegen = asegurado contra'],
 ['Wat zei de huisbaas ___ je?','tegen','met|bij|naar','¿Qué te dijo el casero?','zeggen tegen iemand = decirle a alguien'],
 ['Waarom heb je ___ me gelogen?','tegen','met|bij|naar','¿Por qué me has mentido?','liegen tegen iemand = mentir a alguien'],
 ['Mijn oma praat de hele dag ___ haar kat.','tegen','bij|naar|op','Mi abuela se pasa el día hablándole a su gato.','praten tegen = hablarle a'],
 ['Je moet eerlijk ___ je begeleider zijn.','tegen','bij|op|voor','Tienes que ser sincero con tu tutor.','eerlijk zijn tegen iemand = ser sincero con'],
 ['Het eten is ___ zeven uur klaar.','tegen','op|in|aan','La cena estará lista hacia las siete.','tegen + hora = hacia, para (las siete)'],
 ['Ik kan niet ___ de hitte.','tegen','met|bij|over','No soporto el calor.','niet tegen iets kunnen = no soportar algo'],
 ['Hij reed ___ een paal en brak zijn arm.','tegen','met|aan|in','Se chocó con un poste y se rompió el brazo.','tegen iets rijden = chocar con algo'],

 /* tot */
 ['In de tentamenweek is de bibliotheek ___ middernacht open.','tot','op|over|aan','En la semana de exámenes la biblioteca abre hasta medianoche.','tot = hasta'],
 ['Doei, ___ morgen!','tot','om|op|voor','¡Adiós, hasta mañana!','tot morgen = hasta mañana'],
 ['Ik heb ___ nu toe geen problemen gehad met de huisbaas.','tot','van|sinds|op','Hasta ahora no he tenido problemas con el casero.','tot nu toe = hasta ahora'],
 ['Ik heb de hele nacht ___ vier uur ’s ochtends gestudeerd.','tot','om|sinds|na','Estuve estudiando toda la noche hasta las cuatro de la madrugada.','tot = hasta (hora)'],
 ['Je kunt met de auto ___ aan de haven rijden; daarna moet je lopen.','tot','naar|op|bij','Puedes ir en coche hasta el puerto; luego tienes que ir andando.','tot aan = hasta (lugar)'],
 ['Volgens mij behoort dit café ___ de gezelligste van Delft.','tot','van|op|ondanks','Para mí este café está entre los más acogedores de Delft.','behoren tot = estar entre, pertenecer a'],
 ['En ___ slot wil ik iedereen bedanken voor de hulp.','tot','op|aan|in','Y para terminar, quiero dar las gracias a todos por su ayuda.','tot slot = para terminar'],
 ['In de uitverkoop is alles ___ zeventig procent afgeprijsd.','tot','op|voor|over','En las rebajas todo está rebajado hasta un setenta por ciento.','tot = hasta (cantidad)'],
 ['We hebben gisteren ___ laat gewerkt aan de offerte.','tot','na|om|in','Ayer trabajamos hasta tarde en el presupuesto.','tot laat = hasta tarde'],
 ['Ik heb ___ dinsdag de tijd om te beslissen.','tot','aan|sinds|om','Tengo hasta el martes para decidirme.','tot = hasta (plazo)'],
 ['De korting geldt ___ en met zondag.','tot','van|op|om','El descuento es válido hasta el domingo inclusive.','tot en met = hasta … inclusive'],

 /* na */
 ['Ik bel je ___ de vergadering terug.','na','sinds|tot|om','Te devuelvo la llamada después de la reunión.','na = después de'],
 ['Wat ga je ___ je studie doen?','na','naar|over|tot','¿Qué vas a hacer después de la carrera?','na = después de'],
 ['Hij gaf het ___ een paar weken op.','na','over|sinds|tot','Lo dejó al cabo de unas semanas.','na + tiempo = al cabo de'],
 ['We gaan ___ afloop van de wedstrijd iets drinken.','na','op|tot|over','Al terminar el partido vamos a tomar algo.','na afloop = al terminar'],
 ['Je mag hier ___ tien uur ’s avonds geen lawaai meer maken.','na','tot|sinds|over','Aquí no se puede hacer ruido después de las diez de la noche.','na + hora = después de'],
 ['Pas ___ een uur wachten werden we geholpen.','na','over|sinds|tot','No nos atendieron hasta después de una hora de espera.','na = después de'],
 ['Daan werd de dag ___ zijn verjaardag ziek.','na','naar|sinds|tot','Daan se puso enfermo el día después de su cumpleaños.','de dag na = el día después de'],
 ['Wat doen de kinderen ___ school?','na','naar|tot|sinds','¿Qué hacen los niños después del colegio?','na school = después del colegio'],
 ['Ik kwam ___ hem aan op de werf.','na','naar|sinds|tot','Llegué al astillero después que él.','na iemand = después de alguien'],

 /* tijdens */
 ['Je mag ___ de wedstrijd niet zomaar uit het water.','tijdens','sinds|over|naast','Durante el partido no puedes salir del agua sin más.','tijdens = durante'],
 ['Mijn telefoon ging af ___ het sollicitatiegesprek.','tijdens','sinds|over|tot','Me sonó el móvil durante la entrevista de trabajo.','tijdens = durante'],
 ['Er werd ___ de proefvaart heel veel gemeten.','tijdens','over|om|tegen','Durante la prueba de mar se hicieron muchísimas mediciones.','tijdens = durante'],
 ['Niet praten ___ de film, alsjeblieft!','tijdens','sinds|tot|om','¡No habléis durante la película, por favor!','tijdens = durante'],
 ['Hij viel ___ de presentatie bijna in slaap.','tijdens','sinds|over|om','Casi se queda dormido durante la presentación.','tijdens = durante'],
 ['Ik werk ___ de zomervakantie in een strandtent in Scheveningen.','tijdens','over|tegen|naast','Durante las vacaciones de verano trabajo en un chiringuito de Scheveningen.','tijdens = durante'],
 ['Wat doe je ___ de pauze?','tijdens','sinds|over|naast','¿Qué haces durante el descanso?','tijdens = durante'],

 /* sinds */
 ['Ik speel ___ mijn twaalfde waterpolo.','sinds','over|om|tijdens','Juego al waterpolo desde los doce años.','sinds = desde (con presente)'],
 ['Wij wonen ___ september in dit huis.','sinds','over|op|om','Vivimos en esta casa desde septiembre.','sinds + momento = desde'],
 ['Ik heb ___ gisteren niets meer van hem gehoord.','sinds','over|aan|om','Desde ayer no he vuelto a saber nada de él.','sinds = desde'],
 ['Ze heeft ___ kort een nieuwe baan in Rotterdam.','sinds','over|tot|om','Desde hace poco tiene un trabajo nuevo en Róterdam.','sinds kort = desde hace poco'],
 ['Het regent al ___ vanochtend vroeg.','sinds','over|tot|tijdens','Llueve desde primera hora de la mañana.','sinds = desde'],
 ['Hij werkt ___ 2021 op de werf.','sinds','over|tijdens|om','Trabaja en el astillero desde 2021.','sinds + año = desde'],
 ['Ik heb ___ de verhuizing nog steeds geen internet.','sinds','over|om|tegen','Desde la mudanza todavía no tengo internet.','sinds = desde'],

 /* onder */
 ['Ik zing altijd ___ de douche.','onder','op|bij|achter','Siempre canto en la ducha.','onder de douche = en la ducha'],
 ['Kinderen ___ de twaalf jaar mogen hier gratis naar binnen.','onder','na|op|in','Los niños menores de doce años entran gratis.','onder = menos de (edad, cantidad)'],
 ['Het wordt vannacht vijf graden ___ nul.','onder','boven|tot|naar','Esta noche vamos a llegar a cinco grados bajo cero.','onder nul = bajo cero'],
 ['Ik spreek ___ andere Spaans, Engels en Galicisch.','onder','tussen|met|bij','Hablo, entre otros, español, inglés y gallego.','onder andere = entre otros'],

 /* boven */
 ['Onze buren wonen ___ ons; we horen ze elke avond lopen.','boven','onder|tussen|tegenover','Nuestros vecinos viven encima de nosotros; los oímos andar todas las noches.','boven = encima de (sin tocar)'],
 ['Er hangt een lamp ___ de eettafel.','boven','op|aan|onder','Sobre la mesa del comedor cuelga una lámpara.','boven = por encima de (sin tocar)'],
 ['Het wordt vandaag ___ de dertig graden.','boven','onder|na|op','Hoy vamos a pasar de los treinta grados.','boven = por encima de (temperatura)'],
 ['Die kamer is ver ___ mijn budget.','boven','uit|tegen|tussen','Esa habitación se sale mucho de mi presupuesto.','boven = por encima de'],

 /* naast */
 ['Wie zit er ___ je in de les?','naast','tussen|onder|boven','¿Quién se sienta a tu lado en clase?','naast = al lado de'],
 ['Ik werk ___ mijn studie twintig uur per week in een café.','naast','tussen|achter|tegen','Además de estudiar, trabajo veinte horas a la semana en un café.','naast = además de'],
 ['Mijn fiets staat ___ de jouwe.','naast','tussen|onder|tegenover','Mi bici está al lado de la tuya.','naast = al lado de'],
 ['In Nederland mag je ___ elkaar fietsen.','naast','tussen|onder|om','En Holanda se puede ir en bici uno al lado del otro.','naast elkaar = uno al lado del otro'],

 /* tussen */
 ['Je kunt me ___ twaalf en één uur bellen.','tussen','van|op|tot','Me puedes llamar entre las doce y la una.','tussen … en … = entre … y …'],
 ['Wat is het verschil ___ «lopen» en «wandelen»?','tussen','van|met|over','¿Qué diferencia hay entre «lopen» y «wandelen»?','het verschil tussen = la diferencia entre'],
 ['Dit blijft ___ ons, oké?','tussen','met|aan|naast','Esto queda entre nosotros, ¿vale?','tussen ons = entre nosotros'],
 ['Wat eet jij meestal ___ de middag?','tussen','om|aan|uit','¿Qué sueles comer a mediodía?','tussen de middag = a mediodía'],

 /* achter */
 ['Er is een klein park ___ ons studentenhuis.','achter','tussen|onder|boven','Hay un parque pequeño detrás de nuestra casa de estudiantes.','achter = detrás de'],
 ['Ik zit de hele dag ___ de computer.','achter','uit|in|met','Me paso el día delante del ordenador.','achter de computer zitten = estar al ordenador'],
 ['Ik heb drie dagen ___ elkaar tot laat gewerkt.','achter','naast|tussen|voor','He trabajado hasta tarde tres días seguidos.','achter elkaar = seguidos'],
 ['Gelukkig heb ik het examen nu ___ de rug.','achter','op|aan|in','Por suerte ya he dejado atrás el examen.','achter de rug hebben = haber pasado ya algo'],

 /* tegenover */
 ['Mijn beste vriend woont recht ___ me.','tegenover','naast|tussen|langs','Mi mejor amigo vive justo enfrente de mí.','tegenover = enfrente de'],
 ['In de trein zat een oude man ___ me die de hele reis praatte.','tegenover','naast|achter|tussen','En el tren, enfrente de mí, iba un señor mayor que habló todo el viaje.','tegenover = enfrente de'],
 ['De bushalte is ___ de ingang van het ziekenhuis.','tegenover','tussen|onder|boven','La parada del autobús está enfrente de la entrada del hospital.','tegenover = enfrente de'],
 ['Hoe sta jij ___ dat plan?','tegenover','tegen|voor|aan','¿Qué opinas de ese plan?','staan tegenover = tener una postura sobre'],

 /* langs */
 ['We fietsten ___ de kust van Zeeland.','langs','over|door|tussen','Fuimos en bici a lo largo de la costa de Zelanda.','langs = a lo largo de'],
 ['Kun je ___ de bakker gaan als je naar huis fietst?','langs','uit|aan|op','¿Puedes pasar por la panadería cuando vuelvas a casa en bici?','langs iets gaan = pasar por'],
 ['Ik loop elke ochtend ___ de molen naar de werf.','langs','door|tussen|over','Cada mañana paso por delante del molino de camino al astillero.','langs = pasando por delante de'],
 ['Er staan mooie oude bomen ___ de weg naar Den Haag.','langs','over|tussen|tegen','A lo largo de la carretera a La Haya hay árboles viejos preciosos.','langs = a lo largo de'],

 /* zonder */
 ['Ik drink mijn koffie altijd ___ suiker.','zonder','van|uit|na','Siempre tomo el café sin azúcar.','zonder = sin'],
 ['Hij vertrok ___ iets te zeggen.','zonder','van|met|tot','Se fue sin decir nada.','zonder + te + infinitivo = sin + infinitivo'],
 ['Je kunt in Nederland niet ___ zorgverzekering wonen.','zonder','van|voor|na','En Holanda no puedes vivir sin seguro médico.','zonder = sin'],
 ['Dat lukt me echt niet ___ jouw hulp.','zonder','van|op|bij','Sin tu ayuda no lo consigo, de verdad.','zonder = sin'],

 /* volgens */
 ['Het is ___ mij te laat om nog te bellen.','volgens','bij|van|tegen','Creo que ya es demasiado tarde para llamar.','volgens mij = creo que, en mi opinión'],
 ['Het gaat morgen ___ de weerman de hele dag regenen.','volgens','van|bij|door','Según el hombre del tiempo, mañana va a llover todo el día.','volgens = según'],
 ['We moeten ___ het rooster om half negen beginnen.','volgens','op|in|van','Según el horario, tenemos que empezar a las ocho y media.','volgens = según'],
 ['De film duurt ___ de website twee uur en tien minuten.','volgens','aan|in|van','Según la web, la película dura dos horas y diez minutos.','volgens = según'],

 /* ondanks */
 ['Ze zwemmen ___ de kou elke ochtend in zee.','ondanks','van|op|om','A pesar del frío nadan en el mar todas las mañanas.','ondanks = a pesar de'],
 ['Hij is ___ zijn blessure toch gaan spelen.','ondanks','van|aan|tot','A pesar de la lesión, jugó igualmente.','ondanks … toch = a pesar de … igualmente'],
 ['Het was ___ alles een geweldige dag.','ondanks','tot|van|op','A pesar de todo, fue un día genial.','ondanks alles = a pesar de todo'],
 ['Ik woon hier graag, ___ de hoge huur.','ondanks','van|naar|tot','Me gusta vivir aquí, a pesar del alquiler tan alto.','ondanks = a pesar de']
]);

/* ---- js/content/puz-1.js ---- */
/* Woorden · frases para montar (1): conversación básica, gustos, opinar y conectores */
addProper(['Lotte','Daan','Sanne','Ahmed','Pieter','Bram','Rotterdam']);

addPuz('basis',[
{s:'¿Con quién hablo? (al teléfono)',n:'Met wie spreek ik?',x:'wat',t:'Preposición + wie para personas: met wie, voor wie, van wie.'},
{s:'Este es mi compañero de piso, Pieter.',n:'Dit is mijn huisgenoot Pieter.',a:['dit is Pieter mijn huisgenoot'],x:'deze',t:'Para presentar se usa dit is, también con personas y con de-woorden.'},
{s:'¿Qué significa esta palabra?',n:'Wat betekent dit woord?',x:'die',t:'woord es het-woord: dit/dat woord. deze/die solo van con de-woorden y plurales.'},
{s:'Perdona, no te he entendido.',n:'Sorry, ik heb je niet verstaan.',a:['ik heb je niet verstaan sorry'],x:'geverstaan',t:'verstaan = entender lo que se oye. Con ver- el participio no lleva ge-: verstaan.'},
{s:'Mi hermano tiene dos hijos.',n:'Mijn broer heeft twee kinderen.',x:'kinden',t:'kind → kinderen (plural irregular). Hijos, en general, = kinderen.'},
{s:'Mis padres viven en Vigo.',n:'Mijn ouders wonen in Vigo.',a:['in Vigo wonen mijn ouders'],x:'leeft',t:'Vivir en un sitio = wonen (leven es estar vivo). ouders es plural: wonen.'},
{s:'¿Qué idiomas hablas?',n:'Welke talen spreek je?',x:'wat',t:'Qué + sustantivo = welke (de-woorden y plurales) o welk (het-woorden).'},
{s:'¿Tienes un momento?',n:'Heb je even tijd?',x:'heeft',t:'even = un momento. Con je detrás del verbo: heb je.'},
{s:'Estoy en el último año del máster.',n:'Ik zit in het laatste jaar van mijn master.',x:'laatst',t:'Tras het, el adjetivo lleva -e: het laatste jaar. Estar en un curso = in … zitten.'},
{s:'¿De qué parte de España eres?',n:'Uit welk deel van Spanje kom je?',x:'welke',t:'deel es het-woord: welk deel (sin -e). El origen va con uit.'},
{s:'Tengo una hermana mayor.',n:'Ik heb een oudere zus.',x:'ouder',t:'Hermana mayor = oudere zus: comparativo con -e delante del sustantivo.'},
{s:'¿Cómo se deletrea tu apellido?',n:'Hoe spel je je achternaam?',x:'spelt',t:'Con je detrás del verbo se quita la -t: spel je. El segundo je es «tu».'},
{s:'Llego unos minutos tarde.',n:'Ik ben een paar minuten te laat.',x:'heb',t:'Llegar tarde = te laat zijn, con zijn.'},
{s:'Comparto casa con otros tres estudiantes.',n:'Ik deel een huis met drie andere studenten.',a:['ik deel met drie andere studenten een huis','met drie andere studenten deel ik een huis'],x:'deelt',t:'delen = compartir: ik deel. Otros tres = drie andere (el número va primero).'}
]);

addPuz('gustos',[
{s:'¿Te gusta ver el fútbol?',n:'Kijk je graag naar voetbal?',x:'op',t:'Ver (la tele, un partido) = kijken naar. graag va tras el verbo y el sujeto: kijk je graag.'},
{s:'Mis compañeros holandeses prefieren cenar pronto.',n:'Mijn Nederlandse collega’s eten liever vroeg.',x:'eet',t:'Preferir = verbo + liever. collega’s es plural: eten.'},
{s:'Prefiero ir en bici que en tren.',n:'Ik ga liever met de fiets dan met de trein.',x:'als',t:'liever … dan: tras un comparativo va dan, no als.'},
{s:'A Daan no le gusta nada el queso.',n:'Daan houdt helemaal niet van kaas.',x:'hou',t:'helemaal niet = nada. niet va delante del complemento con preposición: niet van kaas.'},
{s:'¿Qué es lo que más te gusta comer?',n:'Wat eet je het liefst?',x:'liever',t:'graag → liever → het liefst: lo que más te gusta.'},
{s:'Disfruto del buen tiempo.',n:'Ik geniet van het mooie weer.',x:'mooi',t:'genieten van = disfrutar de. Tras het, adjetivo con -e: het mooie weer.'},
{s:'A mis compañeros de piso les encanta la comida española.',n:'Mijn huisgenoten zijn dol op Spaans eten.',x:'van',t:'Encantar = dol zijn op. Spaans eten: sin artículo y sin -e (eten es het-woord).'},
{s:'Prefiero no hablar de ello.',n:'Ik praat er liever niet over.',x:'geen',t:'praten over → er … over. liever niet = prefiero no.'},
{s:'¿Qué tipo de música te gusta?',n:'Wat voor muziek vind je leuk?',x:'welke',t:'Qué tipo de = wat voor. Gustar algo = iets leuk vinden.'},
{s:'Ahmed prefiere trabajar en casa que en la oficina.',n:'Ahmed werkt liever thuis dan op kantoor.',a:['thuis werkt Ahmed liever dan op kantoor'],x:'in',t:'En casa = thuis; en la oficina = op kantoor, sin artículo.'},
{s:'De pequeño me encantaba jugar al fútbol.',n:'Als kind voetbalde ik heel graag.',a:['ik voetbalde als kind heel graag','ik voetbalde heel graag als kind'],x:'voetbalt',t:'Costumbre del pasado: imperfecto (voetbalde). Als kind delante → voetbalde ik.'},
{s:'Pieter odia madrugar.',n:'Pieter heeft een hekel aan vroeg opstaan.',x:'op',t:'Odiar algo = een hekel hebben aan.'},
{s:'¿Te gusta tu nuevo trabajo?',n:'Vind je je nieuwe baan leuk?',x:'nieuw',t:'Tras un posesivo, el adjetivo lleva -e: je nieuwe baan.'}
]);

addPuz('opinar',[
{s:'Me da igual.',n:'Het maakt me niet uit.',x:'uitmaakt',t:'uitmaken es separable: maakt … uit, con niet delante de uit.'},
{s:'Me parece un buen plan.',n:'Dat lijkt me een goed plan.',x:'vind',t:'Me parece = het/dat lijkt me. plan es het-woord: een goed plan, sin -e.'},
{s:'No es para tanto.',n:'Dat valt wel mee.',x:'meevalt',t:'meevallen (ser menos malo de lo que parecía) es separable: valt … mee.'},
{s:'Eso no me lo esperaba.',n:'Dat had ik niet verwacht.',a:['ik had dat niet verwacht'],x:'geverwacht',t:'verwachten → verwacht, sin ge-. Con dat delante, inversión: had ik.'},
{s:'En eso estoy totalmente de acuerdo.',n:'Daar ben ik het helemaal mee eens.',a:['ik ben het daar helemaal mee eens'],x:'met',t:'het eens zijn met → daar … mee: met se convierte en mee.'},
{s:'Me temo que sí.',n:'Ik ben bang van wel.',x:'voor',t:'Me temo que sí = ik ben bang van wel; me temo que no = ik ben bang van niet.'},
{s:'¡No lo dirás en serio!',n:'Dat meen je niet!',x:'menen',t:'menen = decir algo en serio. Con je detrás del verbo: meen je.'},
{s:'No me importa.',n:'Ik vind het niet erg.',x:'ben',t:'No me importa = ik vind het niet erg (con vinden, no con zijn).'},
{s:'Creo que se equivoca.',n:'Volgens mij heeft hij het mis.',a:['hij heeft het volgens mij mis','hij heeft het mis volgens mij'],x:'is',t:'Equivocarse = het mis hebben. Volgens mij delante → inversión: heeft hij.'},
{s:'Eso no es del todo correcto.',n:'Dat klopt niet helemaal.',x:'geen',t:'niet helemaal = no del todo; helemaal niet = en absoluto.'},
{s:'¿Qué te parece el nuevo entrenador?',n:'Wat vind je van de nieuwe trainer?',x:'over',t:'¿Qué te parece…? = Wat vind je van …? (van, no over).'},
{s:'Sinceramente, me parece aburrido.',n:'Eerlijk gezegd vind ik het saai.',a:['ik vind het eerlijk gezegd saai','ik vind het saai eerlijk gezegd'],x:'denk',t:'Opinar sobre algo = vinden (no denken). Eerlijk gezegd delante → vind ik.'},
{s:'En eso tienes razón.',n:'Daar heb je een punt.',x:'heeft',t:'Daar delante → inversión: heb je (sin -t con je detrás).'}
]);

addPuz('conectores',[
{s:'Sanne coge el tren porque tiene la bici rota.',n:'Sanne neemt de trein, want haar fiets is kapot.',x:'kapotte',t:'Tras want, orden normal: want haar fiets is kapot (con omdat, el verbo iría al final).'},
{s:'Lotte tiene fiebre, así que se queda en casa.',n:'Lotte heeft koorts, dus ze blijft thuis.',a:['Lotte heeft koorts dus blijft ze thuis'],x:'blijf',t:'Tras dus valen las dos órdenes: dus ze blijft / dus blijft ze.'},
{s:'Primero hacemos la compra y luego cocinamos.',n:'Eerst doen we boodschappen en dan koken we.',a:['we doen eerst boodschappen en dan koken we'],x:'kook',t:'eerst y dan son adverbios: si van delante, inversión (dan koken we).'},
{s:'Date prisa o perderás el tren.',n:'Haast je, anders mis je de trein.',x:'omdat',t:'anders (si no) es un adverbio: inversión → anders mis je.'},
{s:'Desde que vivo en Delft, voy en bici todos los días.',n:'Sinds ik in Delft woon, fiets ik elke dag.',a:['ik fiets elke dag sinds ik in Delft woon'],x:'fietst',t:'sinds (desde que) manda el verbo al final; después, la principal empieza por el verbo.'},
{s:'Hablo despacio para que todos me entiendan.',n:'Ik praat langzaam zodat iedereen me begrijpt.',x:'begrijpen',t:'zodat = para que: verbo al final. iedereen va en singular: begrijpt.'},
{s:'No solo es barato, sino también práctico.',n:'Het is niet alleen goedkoop, maar ook praktisch.',x:'goedkope',t:'niet alleen …, maar ook … = no solo…, sino también…'},
{s:'Mientras Daan cocina, yo pongo la mesa.',n:'Terwijl Daan kookt, dek ik de tafel.',a:['ik dek de tafel terwijl Daan kookt'],x:'dekt',t:'terwijl + verbo al final. Poner la mesa = de tafel dekken.'},
{s:'Te llamo en cuanto llegue a casa.',n:'Ik bel je zodra ik thuis ben.',a:['zodra ik thuis ben bel ik je'],x:'bent',t:'zodra = en cuanto: verbo al final. En neerlandés basta el presente.'},
{s:'Se lo comió todo, aunque no tenía hambre.',n:'Hij at alles op, hoewel hij geen honger had.',a:['hoewel hij geen honger had at hij alles op'],x:'opat',t:'opeten: at … op. hoewel (aunque) manda el verbo al final.'},
{s:'Como estaba enfermo, no fue a clase.',n:'Omdat hij ziek was, ging hij niet naar de les.',a:['hij ging niet naar de les omdat hij ziek was'],x:'gingen',t:'omdat + verbo al final. Con la subordinada delante, la principal empieza por el verbo: ging hij.'},
{s:'Si tuviera dinero, me compraría un barco.',n:'Als ik geld had, zou ik een boot kopen.',a:['ik zou een boot kopen als ik geld had'],x:'te',t:'Condición irreal: als + pasado, y zou + infinitivo (sin te).'},
{s:'Por cierto, ¿has visto mis llaves?',n:'Trouwens, heb jij mijn sleutels gezien?',a:['heb jij trouwens mijn sleutels gezien','heb jij mijn sleutels trouwens gezien','heb jij mijn sleutels gezien trouwens'],x:'heeft',t:'trouwens = por cierto. Puede ir delante, dentro de la pregunta o al final.'}
]);

/* ---- js/content/puz-2.js ---- */
/* Woorden · frases para montar (2): separables, negación, reflexivos y orden */
addPuz('separ',[
{s:'¿Cuándo entregas la tesis?',n:'Wanneer lever je je scriptie in?',x:'inlever',t:'inleveren (entregar): lever … in. Con je detrás del verbo, sin -t.'},
{s:'¿Sabes a qué hora abre la tienda?',n:'Weet jij hoe laat de winkel opengaat?',x:'open',t:'En la subordinada el separable va junto, al final: opengaat.'},
{s:'No te olvides de apagar la luz.',n:'Vergeet niet het licht uit te doen.',a:['vergeet het licht niet uit te doen'],x:'uitdoen',t:'Con te, este va entre el prefijo y el verbo: uit te doen.'},
{s:'Esta noche se pasa por aquí.',n:'Hij komt vanavond langs.',a:['vanavond komt hij langs'],x:'langskomt',t:'langskomen (pasarse por casa de alguien): komt … langs.'},
{s:'Gasto demasiado dinero en comida.',n:'Ik geef te veel geld uit aan eten.',a:['ik geef te veel geld aan eten uit'],x:'uitgeef',t:'Gastar dinero = geld uitgeven (aan iets): geef … uit.'},
{s:'Al final la fiesta no se celebra.',n:'Het feest gaat toch niet door.',x:'doorgaat',t:'doorgaan (celebrarse): gaat … niet door. toch = al final, contra lo previsto.'},
{s:'¿Cuándo vuelves de España?',n:'Wanneer kom je terug uit Spanje?',a:['wanneer kom je uit Spanje terug'],x:'terugkom',t:'terugkomen: kom … terug. Volver de un país = terugkomen uit.'},
{s:'Me llevo un paraguas.',n:'Ik neem een paraplu mee.',x:'meeneem',t:'meenemen = llevarse algo: neem … mee.'},
{s:'Pieter todavía no ha llegado a casa.',n:'Pieter is nog niet thuisgekomen.',x:'heeft',t:'thuiskomen va con zijn, y ge- entre prefijo y verbo: thuisgekomen.'},
{s:'¿Cómo es tu nueva habitación?',n:'Hoe ziet je nieuwe kamer eruit?',x:'nieuw',t:'eruitzien (tener aspecto): ziet … eruit. Tras je, el adjetivo lleva -e.'},
{s:'La reunión se ha aplazado al lunes.',n:'De vergadering is uitgesteld tot maandag.',a:['de vergadering is tot maandag uitgesteld'],x:'geuitsteld',t:'uitstellen (aplazar) → uitgesteld: ge- va entre el prefijo y el verbo.'},
{s:'Tengo muchas ganas de que llegue el fin de semana.',n:'Ik kijk uit naar het weekend.',a:['ik kijk naar het weekend uit'],x:'op',t:'uitkijken naar = esperar con ganas: kijk … uit.'},
{s:'Espero que Bram se apunte esta noche.',n:'Ik hoop dat Bram vanavond meedoet.',x:'mee',t:'En la subordinada el separable va junto, al final: meedoet.'},
{s:'¿Has apagado la calefacción?',n:'Heb je de verwarming uitgezet?',x:'ben',t:'uitzetten → uitgezet, con hebben. ge- va entre el prefijo y el verbo.'}
]);

addPuz('neg',[
{s:'Hoy la piscina no está abierta.',n:'Het zwembad is vandaag niet open.',a:['vandaag is het zwembad niet open'],x:'geen',t:'niet va delante del adjetivo: niet open. geen solo va con sustantivos.'},
{s:'Todavía no tengo trabajo.',n:'Ik heb nog geen baan.',x:'niet',t:'Todavía no + sustantivo = nog geen.'},
{s:'Ya no nos queda leche.',n:'We hebben geen melk meer.',x:'niet',t:'Ya no + sustantivo = geen … meer.'},
{s:'No entiendo nada.',n:'Ik begrijp er niets van.',x:'niet',t:'Nada = niets. No entender nada de algo = er niets van begrijpen.'},
{s:'Mi compañero de piso nunca llega a tiempo.',n:'Mijn huisgenoot is nooit op tijd.',x:'in',t:'A tiempo = op tijd. nooit va donde iría niet: is nooit op tijd.'},
{s:'Esta no es mi bici, sino la de Lotte.',n:'Dit is niet mijn fiets, maar die van Lotte.',a:['dit is mijn fiets niet maar die van Lotte'],x:'geen',t:'Con posesivo se usa niet, nunca geen. La de Lotte = die van Lotte.'},
{s:'Todavía no han entregado el paquete.',n:'Het pakket is nog niet bezorgd.',x:'gebezorgd',t:'nog niet va delante del participio. bezorgen → bezorgd, sin ge-.'},
{s:'Eso no me gusta nada.',n:'Dat vind ik helemaal niet leuk.',a:['ik vind dat helemaal niet leuk'],x:'geen',t:'helemaal niet (nada en absoluto) va delante del adjetivo.'},
{s:'No hace falta que vengáis mañana.',n:'Jullie hoeven morgen niet te komen.',a:['morgen hoeven jullie niet te komen'],x:'moeten',t:'No hace falta = niet hoeven + te (lo contrario de moeten).'},
{s:'Yo tampoco lo sé.',n:'Ik weet het ook niet.',x:'geen',t:'Tampoco = ook niet.'},
{s:'No he dormido en toda la noche.',n:'Ik heb de hele nacht niet geslapen.',a:['de hele nacht heb ik niet geslapen'],x:'het',t:'niet va delante del participio. nacht es de-woord: de hele nacht.'},
{s:'No me ha contado nada.',n:'Hij heeft me niets verteld.',x:'geverteld',t:'Nada = niets. vertellen → verteld, sin ge-.'},
{s:'No tengo ningún problema con eso.',n:'Daar heb ik geen probleem mee.',a:['ik heb daar geen probleem mee'],x:'niet',t:'geen + sustantivo. Con eso = daar … mee (met se convierte en mee).'},
{s:'Ahmed ya no trabaja en el astillero.',n:'Ahmed werkt niet meer op de werf.',a:['op de werf werkt Ahmed niet meer'],x:'geen',t:'Ya no = niet meer, delante del complemento con preposición.'}
]);

addPuz('reflex',[
{s:'Me estoy preparando para el examen.',n:'Ik bereid me voor op het examen.',a:['ik bereid me op het examen voor'],x:'zich',t:'zich voorbereiden op: bereid me … voor (reflexivo y separable).'},
{s:'Mi hermano se mudó el mes pasado.',n:'Mijn broer is vorige maand verhuisd.',a:['vorige maand is mijn broer verhuisd'],x:'zich',t:'Mudarse = verhuizen: no es reflexivo y va con zijn.'},
{s:'¿Ya os habéis inscrito?',n:'Hebben jullie je al ingeschreven?',x:'zich',t:'Con jullie el reflexivo es je, no zich. Los reflexivos van con hebben.'},
{s:'Se presentó a sus nuevos compañeros.',n:'Ze stelde zich voor aan haar nieuwe collega’s.',a:['ze stelde zich aan haar nieuwe collega’s voor'],x:'nieuw',t:'zich voorstellen aan (presentarse a): stelde zich … voor.'},
{s:'Todavía tengo que acostumbrarme a la comida holandesa.',n:'Ik moet nog wennen aan het Nederlandse eten.',a:['ik moet nog aan het Nederlandse eten wennen'],x:'me',t:'Acostumbrarse = wennen aan: en neerlandés no es reflexivo.'},
{s:'No te metas en eso.',n:'Bemoei je er niet mee.',x:'met',t:'zich bemoeien met (meterse en): con er, met se convierte en mee.'},
{s:'Nos lo hemos pasado genial.',n:'We hebben ons prima vermaakt.',x:'zijn',t:'zich vermaken = pasarlo bien. Los reflexivos van con hebben: hebben ons vermaakt.'},
{s:'Se cambia de ropa para el partido.',n:'Hij kleedt zich om voor de wedstrijd.',a:['hij kleedt zich voor de wedstrijd om'],x:'omkleedt',t:'zich omkleden (cambiarse de ropa): kleedt zich … om.'},
{s:'Entonces me di cuenta de que tenía el pasaporte en casa.',n:'Toen realiseerde ik me dat mijn paspoort thuis lag.',a:['ik realiseerde me toen dat mijn paspoort thuis lag'],x:'zich',t:'Aquí toen = entonces (adverbio): inversión, realiseerde ik me.'},
{s:'Nos vemos en la estación.',n:'We zien elkaar op het station.',a:['op het station zien we elkaar'],x:'zich',t:'Recíproco (el uno al otro) = elkaar: we zien elkaar.'},
{s:'A Sanne le interesa mucho la política.',n:'Sanne interesseert zich erg voor politiek.',x:'in',t:'zich interesseren voor (no in).'},
{s:'Se me ha olvidado por completo.',n:'Ik ben het helemaal vergeten.',x:'me',t:'Olvidarse = vergeten, sin pronombre reflexivo.'},
{s:'Si no me encuentro bien, me quedo en casa.',n:'Als ik me niet lekker voel, blijf ik thuis.',a:['ik blijf thuis als ik me niet lekker voel'],x:'zich',t:'En la subordinada: als ik me … voel (pronombre tras el sujeto, verbo al final).'}
]);

addPuz('orden',[
{s:'Después del trabajo voy al gimnasio.',n:'Na het werk ga ik naar de sportschool.',a:['ik ga na het werk naar de sportschool'],x:'nadat',t:'Tiempo delante → verbo y después sujeto: na het werk ga ik. na + sustantivo; nadat + frase.'},
{s:'Normalmente ceno a las seis.',n:'Meestal eet ik om zes uur.',a:['ik eet meestal om zes uur','om zes uur eet ik meestal'],x:'uren',t:'meestal delante → inversión. La hora: om zes uur (uur, sin plural).'},
{s:'Este fin de semana vienen mis padres.',n:'Dit weekend komen mijn ouders.',a:['mijn ouders komen dit weekend'],x:'komt',t:'dit weekend delante → verbo y luego sujeto: komen mijn ouders.'},
{s:'Por desgracia, el tren lleva retraso.',n:'Helaas heeft de trein vertraging.',a:['de trein heeft helaas vertraging','de trein heeft vertraging helaas'],x:'is',t:'helaas delante → inversión. Llevar retraso = vertraging hebben.'},
{s:'Mañana por la mañana tengo una reunión con el cliente.',n:'Morgenochtend heb ik een afspraak met de klant.',a:['ik heb morgenochtend een afspraak met de klant'],x:'het',t:'morgenochtend delante → heb ik. klant es de-woord: de klant.'},
{s:'Desde mi ventana se ve el puerto.',n:'Vanuit mijn raam zie je de haven.',a:['de haven zie je vanuit mijn raam'],x:'zien',t:'Se ve = je ziet (je impersonal). Con inversión, sin -t: zie je.'},
{s:'En septiembre empiezo en el astillero.',n:'In september begin ik op de werf.',a:['ik begin in september op de werf','op de werf begin ik in september'],x:'begint',t:'Los meses van en minúscula. In september delante → begin ik.'},
{s:'Al final encontré una habitación.',n:'Uiteindelijk heb ik een kamer gevonden.',a:['ik heb uiteindelijk een kamer gevonden'],x:'ben',t:'uiteindelijk (al final) delante → inversión: heb ik … gevonden.'},
{s:'Mi jefe me ha dado un día libre.',n:'Mijn baas heeft me een vrije dag gegeven.',x:'gegeefd',t:'El pronombre va pegado al verbo: heeft me … gegeven.'},
{s:'Esa película ya la he visto.',n:'Die film heb ik al gezien.',a:['ik heb die film al gezien'],x:'dat',t:'Si el objeto va delante, el verbo sigue en 2.ª posición: die film heb ik…'},
{s:'El sábado por la mañana tengo entrenamiento.',n:'Zaterdagochtend heb ik training.',a:['ik heb zaterdagochtend training'],x:'hebt',t:'Días y partes del día, en minúscula y juntos: zaterdagochtend. Delante → heb ik.'},
{s:'En verano nadamos en el mar.',n:'In de zomer zwemmen we in zee.',a:['we zwemmen in de zomer in zee','in zee zwemmen we in de zomer'],x:'zwem',t:'Primero el tiempo, luego el lugar: in de zomer · in zee.'},
{s:'Durante la reunión nadie dijo nada.',n:'Tijdens de vergadering zei niemand iets.',a:['niemand zei iets tijdens de vergadering','niemand zei tijdens de vergadering iets'],x:'niets',t:'Nadie dijo nada = niemand zei iets: una sola negación.'}
]);

/* ---- js/content/puz-3.js ---- */
/* Woorden · frases para montar (3): subordinadas, tiempos y cuantificadores */
addPuz('subord',[
{s:'No sé a qué hora empieza la película.',n:'Ik weet niet hoe laat de film begint.',a:['hoe laat de film begint weet ik niet'],x:'begin',t:'Pregunta indirecta: el verbo va al final (hoe laat … begint).'},
{s:'¿Sabes si Ahmed viene mañana?',n:'Weet jij of Ahmed morgen komt?',x:'als',t:'«Si» de pregunta indirecta = of (nunca als), con el verbo al final.'},
{s:'Me ha contado que se ha comprado una casa.',n:'Ze heeft me verteld dat ze een huis heeft gekocht.',a:['ze heeft me verteld dat ze een huis gekocht heeft'],x:'gekoopt',t:'Tras dat, auxiliar y participio van al final (valen los dos órdenes). kopen → gekocht.'},
{s:'Espero que te mejores pronto.',n:'Ik hoop dat je snel beter wordt.',x:'word',t:'Mejorarse = beter worden. Tras dat, verbo al final: wordt.'},
{s:'¿Sabes cuánto cuesta un billete a París?',n:'Weet je hoeveel een kaartje naar Parijs kost?',x:'kosten',t:'Pregunta indirecta con hoeveel: el verbo va al final (… kost).'},
{s:'Creo que a Pieter se le ha olvidado.',n:'Ik denk dat Pieter het vergeten is.',a:['ik denk dat Pieter het is vergeten'],x:'gevergeten',t:'vergeten: participio sin ge-. Tras dat, los dos verbos al final.'},
{s:'Mi compañera dice que el yate estará listo en mayo.',n:'Mijn collega zegt dat het jacht in mei klaar is.',x:'klare',t:'Tras dat, verbo al final. Para el futuro basta el presente: klaar is.'},
{s:'No entiendo por qué está tan enfadado.',n:'Ik snap niet waarom hij zo boos is.',a:['waarom hij zo boos is snap ik niet'],x:'boze',t:'waarom + verbo al final. snappen = entender (coloquial).'},
{s:'Antes de que empiece el partido, tomamos algo.',n:'Voordat de wedstrijd begint, drinken we iets.',a:['we drinken iets voordat de wedstrijd begint'],x:'drink',t:'voordat + verbo al final; después, la principal empieza por el verbo.'},
{s:'Cuando era estudiante, trabajaba en un bar.',n:'Toen ik student was, werkte ik in een bar.',a:['ik werkte in een bar toen ik student was'],x:'ben',t:'toen (una vez o una época del pasado) + verbo al final: toen ik student was.'},
{s:'Mientras esperaba el autobús, empezó a llover.',n:'Terwijl ik op de bus wachtte, begon het te regenen.',a:['het begon te regenen terwijl ik op de bus wachtte'],x:'wacht',t:'terwijl + verbo al final. Empezar a = beginnen te.'},
{s:'El médico dice que tengo que descansar.',n:'De huisarts zegt dat ik moet rusten.',a:['de huisarts zegt dat ik rusten moet'],x:'te',t:'Tras dat, modal e infinitivo al final, sin te.'},
{s:'No me acuerdo de dónde he dejado la bici.',n:'Ik weet niet meer waar ik mijn fiets heb gezet.',a:['ik weet niet meer waar ik mijn fiets gezet heb','waar ik mijn fiets heb gezet weet ik niet meer','waar ik mijn fiets gezet heb weet ik niet meer'],x:'gezeten',t:'No acordarse = niet meer weten. zetten → gezet (zitten → gezeten).'},
{s:'Si quieres, te ayudo con la mudanza.',n:'Als je wilt, help ik je met de verhuizing.',a:['ik help je met de verhuizing als je wilt'],x:'helpt',t:'Subordinada delante → la principal empieza por el verbo: help ik je.'}
]);

addPuz('tiempos',[
{s:'¿Qué ha pasado?',n:'Wat is er gebeurd?',x:'heeft',t:'gebeuren (pasar, ocurrir) va con zijn: wat is er gebeurd?'},
{s:'Me he quedado en casa todo el fin de semana.',n:'Ik ben het hele weekend thuisgebleven.',a:['het hele weekend ben ik thuisgebleven'],x:'heb',t:'blijven va con zijn. weekend es het-woord: het hele weekend.'},
{s:'Me crié junto al mar.',n:'Ik ben aan zee opgegroeid.',a:['ik ben opgegroeid aan zee','aan zee ben ik opgegroeid'],x:'heb',t:'opgroeien (criarse) va con zijn: ben opgegroeid.'},
{s:'Ayer llegamos a casa muy tarde.',n:'Gisteren kwamen we heel laat thuis.',a:['we kwamen gisteren heel laat thuis'],x:'kwam',t:'Pasado de komen: kwam (singular), kwamen (plural). thuiskomen: kwamen … thuis.'},
{s:'Estaba durmiendo cuando sonó el teléfono.',n:'Ik lag te slapen toen de telefoon ging.',a:['toen de telefoon ging lag ik te slapen'],x:'was',t:'Estar durmiendo = liggen te slapen. Sonar el teléfono = de telefoon gaat.'},
{s:'Han cambiado el horario.',n:'Ze hebben het rooster veranderd.',x:'geveranderd',t:'veranderen → veranderd: los verbos con ver- no llevan ge-.'},
{s:'Lleva una hora esperando.',n:'Hij staat al een uur te wachten.',a:['al een uur staat hij te wachten'],x:'aan',t:'Llevar tiempo haciendo algo: staan/zitten + al … + te + infinitivo.'},
{s:'De repente se fue la luz.',n:'Plotseling viel de stroom uit.',a:['de stroom viel plotseling uit'],x:'uitviel',t:'Para narrar, imperfecto (viel … uit), no pluscuamperfecto.'},
{s:'Cuando entré, la película ya había empezado.',n:'Toen ik binnenkwam, was de film al begonnen.',a:['de film was al begonnen toen ik binnenkwam'],x:'had',t:'Pluscuamperfecto: algo anterior a otro pasado. beginnen va con zijn: was begonnen.'},
{s:'¿Has estado alguna vez en Japón?',n:'Ben je ooit in Japan geweest?',x:'heb',t:'zijn → geweest, con zijn. ooit = alguna vez.'},
{s:'La semana pasada me rompí el brazo.',n:'Vorige week heb ik mijn arm gebroken.',a:['ik heb vorige week mijn arm gebroken','ik heb mijn arm vorige week gebroken'],x:'gebreekt',t:'breken → gebroken (irregular). Partes del cuerpo con posesivo: mijn arm.'},
{s:'Antes fumaba, pero lo he dejado.',n:'Vroeger rookte ik, maar ik ben gestopt.',a:['ik rookte vroeger maar ik ben gestopt'],x:'rookten',t:'Costumbre pasada: imperfecto (rookte). Dejarlo = stoppen, con zijn.'},
{s:'Nos conocimos hace dos años.',n:'We hebben elkaar twee jaar geleden leren kennen.',a:['twee jaar geleden hebben we elkaar leren kennen'],x:'geleerd',t:'leren kennen (conocer): en perfecto queda en infinitivo: hebben … leren kennen.'},
{s:'Se lo he preguntado tres veces.',n:'Ik heb het hem drie keer gevraagd.',a:['drie keer heb ik het hem gevraagd'],x:'gevraagt',t:'vragen → gevraagd, con -d. Con dos pronombres, het va antes que hem.'}
]);

addPuz('cuant',[
{s:'Todos mis amigos viven en Madrid.',n:'Al mijn vrienden wonen in Madrid.',a:['in Madrid wonen al mijn vrienden'],x:'alle',t:'Todos + posesivo = al mijn (sin -e). alle va sin posesivo: alle vrienden.'},
{s:'Cada año vamos a Galicia.',n:'Elk jaar gaan we naar Galicië.',a:['we gaan elk jaar naar Galicië'],x:'elke',t:'jaar es het-woord: elk jaar. elke va con de-woorden: elke week.'},
{s:'Ninguno de mis padres habla neerlandés.',n:'Mijn ouders spreken allebei geen Nederlands.',x:'alle',t:'allebei geen = ninguno de los dos. allebei va detrás del verbo conjugado, como allemaal.'},
{s:'Hay comida para todos.',n:'Er is eten voor iedereen.',a:['er is voor iedereen eten','voor iedereen is er eten'],x:'iedere',t:'Todos (personas, sin sustantivo) = iedereen. iedere va con sustantivo: iedere dag.'},
{s:'Aquí la mayoría de la gente habla bien inglés.',n:'De meeste mensen hier spreken goed Engels.',a:['de meeste mensen spreken hier goed Engels','hier spreken de meeste mensen goed Engels'],x:'spreekt',t:'de meeste + plural → verbo en plural: spreken.'},
{s:'Alguien se ha dejado el paraguas.',n:'Iemand heeft zijn paraplu laten liggen.',x:'gelegen',t:'Dejarse algo = laten liggen. En perfecto, dos infinitivos: heeft … laten liggen.'},
{s:'No hay nada en la nevera.',n:'Er zit niets in de koelkast.',a:['in de koelkast zit er niets'],x:'geen',t:'Nada = niets. Para el contenido de algo se suele usar zitten: er zit niets in de koelkast.'},
{s:'Cada uno paga lo suyo.',n:'Iedereen betaalt voor zichzelf.',x:'betalen',t:'iedereen lleva el verbo en singular: iedereen betaalt.'},
{s:'¿Queda algo de tarta?',n:'Is er nog wat taart over?',x:'iets',t:'Quedar = over zijn: is er nog … over? wat = algo de.'},
{s:'Toda la casa huele a ajo.',n:'Het hele huis ruikt naar knoflook.',x:'de',t:'huis es het-woord: het hele huis. Oler a = ruiken naar.'},
{s:'Algunas tiendas abren los domingos.',n:'Sommige winkels zijn op zondag open.',a:['op zondag zijn sommige winkels open'],x:'sommigen',t:'sommige + sustantivo; sommigen (con -n) va solo y se refiere a personas.'},
{s:'Todos los jueves hay mercado.',n:'Elke donderdag is er markt.',a:['er is elke donderdag markt'],x:'elk',t:'donderdag es de-woord: elke donderdag. Delante → is er.'},
{s:'Ninguno de mis amigos tiene coche.',n:'Geen van mijn vrienden heeft een auto.',x:'niet',t:'Ninguno de = geen van, con el verbo en singular: heeft.'}
]);

/* ---- js/content/puz-4.js ---- */
/* Woorden · frases para montar (4): preguntas, verbos modales y futuro */
addPuz('preguntas',[
{s:'¿Cuántas veces por semana entrenáis?',n:'Hoe vaak trainen jullie per week?',a:['hoe vaak per week trainen jullie'],x:'train',t:'hoe vaak = cuántas veces. Pregunta: interrogativo + verbo + sujeto.'},
{s:'¿De quién es esta bici?',n:'Van wie is deze fiets?',x:'dit',t:'¿De quién? = van wie. fiets es de-woord: deze fiets.'},
{s:'¿A qué hora cierra el súper?',n:'Hoe laat gaat de supermarkt dicht?',x:'dichtgaat',t:'dichtgaan (cerrar) es separable: gaat … dicht.'},
{s:'¿Por qué no me has llamado?',n:'Waarom heb je me niet gebeld?',x:'hebt',t:'Interrogativo + verbo + sujeto, y el participio al final. Con je detrás: heb je.'},
{s:'¿Cuánto dura el viaje a Róterdam?',n:'Hoe lang duurt de reis naar Rotterdam?',x:'duren',t:'Durar = duren: hoe lang duurt…?'},
{s:'¿Adónde os vais de vacaciones?',n:'Waar gaan jullie op vakantie naartoe?',a:['waar gaan jullie naartoe op vakantie'],x:'gaat',t:'¿Adónde? = waar … naartoe: waar va delante y naartoe más adelante.'},
{s:'¿De qué trata el libro?',n:'Waar gaat het boek over?',x:'erover',t:'¿De qué trata? = waar gaat het over? waar delante y over al final.'},
{s:'¿No tienes frío?',n:'Heb je het niet koud?',x:'ben',t:'Tener frío = het koud hebben (ik ben koud ✗).'},
{s:'¿Cuánto tengo que pagar de alquiler?',n:'Hoeveel moet ik voor de huur betalen?',a:['hoeveel moet ik betalen voor de huur'],x:'te',t:'Modal en 2.ª posición e infinitivo al final, sin te.'},
{s:'¿Cuál de los dos te parece más bonito?',n:'Welke van de twee vind je mooier?',a:['welke vind je mooier van de twee'],x:'wat',t:'¿Cuál de…? = welke van… (no wat).'},
{s:'¿Cuánto hace que os conocéis?',n:'Hoe lang kennen jullie elkaar al?',x:'zich',t:'Llevar tiempo = presente + al. Conocerse = elkaar kennen.'},
{s:'¿Qué te ha dicho el médico?',n:'Wat heeft de dokter tegen je gezegd?',x:'aan',t:'Decir algo a alguien = iets tegen iemand zeggen.'},
{s:'¿Cuántas personas sois?',n:'Met hoeveel personen zijn jullie?',x:'bent',t:'¿Cuántos sois? = met hoeveel zijn jullie?'},
{s:'¿Qué pasa?',n:'Wat is er aan de hand?',x:'het',t:'Fórmula fija: wat is er aan de hand? = ¿qué pasa?'},
{s:'¿Para quién es el regalo?',n:'Voor wie is het cadeau?',x:'de',t:'¿Para quién? = voor wie. cadeau es het-woord.'},
{s:'¿Qué quieres decir con eso?',n:'Wat bedoel je daarmee?',x:'bedoelt',t:'Querer decir = bedoelen. Con je detrás del verbo, sin -t: bedoel je.'},
{s:'¿Ya has terminado?',n:'Ben je al klaar?',x:'heb',t:'Haber terminado = klaar zijn (con zijn).'}
],'Preguntas');

addPuz('modales',[
{s:'Aquí no se puede fumar.',n:'Je mag hier niet roken.',a:['hier mag je niet roken'],x:'mogen',t:'Prohibición = niet mogen. Modal + infinitivo al final, sin te.'},
{s:'¿Puedo abrir la ventana?',n:'Mag ik het raam opendoen?',x:'opendoet',t:'Pedir permiso: Mag ik …? El separable va entero al final: opendoen.'},
{s:'Tengo que entregar un informe el viernes.',n:'Ik moet vrijdag een verslag inleveren.',a:['vrijdag moet ik een verslag inleveren'],x:'te',t:'moeten + infinitivo al final, sin te: moet … inleveren.'},
{s:'No podía dormir por el calor.',n:'Ik kon niet slapen door de hitte.',a:['door de hitte kon ik niet slapen','ik kon door de hitte niet slapen'],x:'konden',t:'Pasado de kunnen: kon (singular), konden (plural). Por (causa) = door.'},
{s:'Deberías descansar más.',n:'Je zou meer moeten rusten.',x:'te',t:'Consejo: je zou … moeten + infinitivo, sin te.'},
{s:'¿Quieres venir a cenar el sábado?',n:'Wil je zaterdag komen eten?',x:'wilt',t:'Con je detrás: wil je. komen + infinitivo sin te: komen eten.'},
{s:'He tenido que esperar una hora.',n:'Ik heb een uur moeten wachten.',a:['een uur heb ik moeten wachten'],x:'gemoeten',t:'Modal en perfecto: infinitivo, no participio: heb … moeten wachten.'},
{s:'No hace falta que te quites los zapatos.',n:'Je hoeft je schoenen niet uit te doen.',x:'moet',t:'niet hoeven + te = no hace falta. te va entre prefijo y verbo: uit te doen.'},
{s:'Podemos quedar mañana si quieres.',n:'We kunnen morgen afspreken als je wilt.',a:['morgen kunnen we afspreken als je wilt','als je wilt kunnen we morgen afspreken'],x:'kan',t:'Modal en 2.ª posición; el separable va entero al final: afspreken.'},
{s:'¿Me podría decir dónde está la estación?',n:'Kunt u me zeggen waar het station is?',x:'zegt',t:'Con u: kunt u. Pregunta indirecta con el verbo al final: waar … is.'},
{s:'Javier sabe nadar muy bien.',n:'Javier kan heel goed zwemmen.',x:'weet',t:'Saber hacer algo = kunnen (no weten).'},
{s:'Antes, Lotte quería ser médica.',n:'Lotte wilde vroeger arts worden.',a:['vroeger wilde Lotte arts worden'],x:'wil',t:'Pasado de willen: wilde. Profesión sin artículo: arts worden.'},
{s:'¿Podrías ayudarme con el currículum?',n:'Zou je me kunnen helpen met mijn cv?',a:['zou je me met mijn cv kunnen helpen'],x:'kunt',t:'Petición cortés: zou je … kunnen + infinitivo.'},
{s:'Ahmed no ha podido venir.',n:'Ahmed heeft niet kunnen komen.',x:'gekund',t:'Perfecto de modal + infinitivo: dos infinitivos (heeft … kunnen komen), no gekund.'},
{s:'Tienes que rellenar este formulario.',n:'Je moet dit formulier invullen.',a:['dit formulier moet je invullen'],x:'deze',t:'formulier es het-woord: dit formulier. El separable va entero al final.'},
{s:'Mis compañeros de piso quieren comprar un sofá.',n:'Mijn huisgenoten willen een bank kopen.',x:'te',t:'willen + infinitivo al final, sin te. bank = sofá (y también banco).'},
{s:'Aquí se puede pagar con tarjeta.',n:'Hier kun je pinnen.',x:'kunnen',t:'pinnen = pagar con tarjeta. Con inversión, sin -t: kun je.'}
],'Verbos modales');

addPuz('futuro',[
{s:'Este verano voy a hacer un curso de vela.',n:'Deze zomer ga ik een zeilcursus doen.',a:['ik ga deze zomer een zeilcursus doen'],x:'gaan',t:'Planes: gaan + infinitivo al final, sin te.'},
{s:'Nunca lo olvidaré.',n:'Ik zal het nooit vergeten.',a:['nooit zal ik het vergeten'],x:'zullen',t:'Promesa o algo seguro: zal + infinitivo al final.'},
{s:'¿Pedimos una pizza?',n:'Zullen we een pizza bestellen?',x:'zal',t:'Para proponer algo: Zullen we …? (= ¿…-amos?).'},
{s:'Esta tarde va a llover.',n:'Het gaat vanmiddag regenen.',a:['vanmiddag gaat het regenen'],x:'te',t:'Ir a + infinitivo = gaan + infinitivo, sin te.'},
{s:'El año que viene me mudo a Róterdam.',n:'Volgend jaar verhuis ik naar Rotterdam.',a:['ik verhuis volgend jaar naar Rotterdam'],x:'volgende',t:'Con una expresión de futuro basta el presente. jaar es het-woord: volgend jaar.'},
{s:'¿Te ayudo con la maleta?',n:'Zal ik je helpen met je koffer?',a:['zal ik je met je koffer helpen'],x:'zul',t:'Ofrecer ayuda: Zal ik …? (= ¿Te ayudo?).'},
{s:'Creo que vamos a ganar.',n:'Ik denk dat we gaan winnen.',x:'gaat',t:'Tras dat: gaan + infinitivo al final (dat we gaan winnen).'},
{s:'Mañana te lo devuelvo.',n:'Ik geef het je morgen terug.',a:['morgen geef ik het je terug'],x:'teruggeef',t:'Futuro con presente + morgen. teruggeven: geef … terug. Pronombres: het je.'},
{s:'¿Qué vas a hacer cuando acabes la carrera?',n:'Wat ga je na je studie doen?',a:['wat ga je doen na je studie'],x:'gaat',t:'Planes: gaan + infinitivo al final. Con je detrás: ga je.'},
{s:'Todo saldrá bien.',n:'Het komt wel goed.',x:'zal',t:'Het komt (wel) goed = saldrá bien: presente con sentido de futuro.'},
{s:'Seguramente estará cansado.',n:'Hij zal wel moe zijn.',x:'zult',t:'Suposición: zal wel + infinitivo (= seguramente…).'},
{s:'Esta noche vamos a ver una película.',n:'Vanavond gaan we een film kijken.',a:['we gaan vanavond een film kijken'],x:'te',t:'vanavond delante → gaan we. gaan + infinitivo al final, sin te.'},
{s:'Mi hermana va a tener un bebé.',n:'Mijn zus krijgt een baby.',x:'krijg',t:'Tener un bebé = een baby krijgen. El presente basta para el futuro.'},
{s:'Después del máster voy a buscar trabajo.',n:'Na mijn master ga ik werk zoeken.',a:['ik ga na mijn master werk zoeken','ik ga werk zoeken na mijn master'],x:'zoek',t:'Na mijn master delante → ga ik. gaan + infinitivo al final.'},
{s:'Ya lo haré luego.',n:'Dat doe ik straks wel.',a:['ik doe dat straks wel','straks doe ik dat wel'],x:'doet',t:'Futuro cercano: presente + straks. wel = ya (lo haré).'},
{s:'Dentro de dos semanas empiezan las vacaciones.',n:'Over twee weken begint de vakantie.',a:['de vakantie begint over twee weken'],x:'beginnen',t:'Dentro de (en el futuro) = over: over twee weken. vakantie va en singular.'}
],'Futuro: gaan y zullen');

/* ---- js/content/puz-5.js ---- */
/* Woorden · frases para montar (5): relativas, er, imperativo y comparar */
addPuz('relativas',[
{s:'El chico que vive arriba toca la guitarra.',n:'De jongen die boven woont, speelt gitaar.',x:'dat',t:'jongen es de-woord → die. El verbo de la relativa va al final: die boven woont.'},
{s:'Este es el libro del que te hablé.',n:'Dit is het boek waar ik je over vertelde.',x:'die',t:'Cosa + preposición: waar … over (la preposición va justo antes del verbo).'},
{s:'Haz lo que quieras.',n:'Doe maar wat je wilt.',x:'die',t:'Lo que (sin antecedente) = wat. Verbo al final: wat je wilt.'},
{s:'La empresa donde hago las prácticas construye yates.',n:'Het bedrijf waar ik stage loop, bouwt jachten.',x:'dat',t:'Lugar = waar, aunque sea un het-woord. Verbo al final: waar ik stage loop.'},
{s:'Tengo un compañero que habla cinco idiomas.',n:'Ik heb een collega die vijf talen spreekt.',x:'wie',t:'Persona como sujeto de la relativa: die (no wie). Verbo al final.'},
{s:'El piso que alquilamos es muy luminoso.',n:'Het appartement dat we huren, is erg licht.',x:'die',t:'appartement es het-woord → dat. Verbo al final: dat we huren.'},
{s:'Pieter es el amigo en cuya casa me quedo.',n:'Pieter is de vriend bij wie ik logeer.',x:'die',t:'Preposición + persona: bij wie. logeren = quedarse a dormir en casa de alguien.'},
{s:'¿Has visto el mensaje que te mandé?',n:'Heb je het bericht gezien dat ik je stuurde?',a:['heb je het bericht dat ik je stuurde gezien'],x:'die',t:'bericht es het-woord → dat. La relativa suele ir detrás del participio.'},
{s:'Todo lo que necesitas está en el armario.',n:'Alles wat je nodig hebt, ligt in de kast.',a:['in de kast ligt alles wat je nodig hebt'],x:'die',t:'Tras alles, iets o niets: wat. Necesitar = nodig hebben.'},
{s:'Ese es el bar donde nos conocimos.',n:'Dat is de kroeg waar we elkaar hebben ontmoet.',a:['dat is de kroeg waar we elkaar ontmoet hebben'],x:'die',t:'Lugar = waar. Verbos al final: waar we elkaar hebben ontmoet.'},
{s:'Las fotos que hiciste son preciosas.',n:'De foto’s die je hebt gemaakt, zijn prachtig.',a:['de foto’s die je gemaakt hebt zijn prachtig'],x:'dat',t:'Plural → die. Hacer fotos = foto’s maken.'},
{s:'Es el yate más grande que hemos construido nunca.',n:'Het is het grootste jacht dat we ooit hebben gebouwd.',a:['het is het grootste jacht dat we ooit gebouwd hebben'],x:'die',t:'jacht es het-woord → dat. Tras un superlativo, nunca = ooit.'},
{s:'¿Conoces a alguien que tenga coche?',n:'Ken je iemand die een auto heeft?',x:'wie',t:'Tras iemand: die. Verbo al final: die een auto heeft.'},
{s:'Esa es la razón por la que me fui.',n:'Dat is de reden waarom ik ben vertrokken.',a:['dat is de reden waarom ik vertrokken ben'],x:'omdat',t:'La razón por la que = de reden waarom. Verbos al final.'},
{s:'El tren que cojo siempre va con retraso.',n:'De trein die ik neem, heeft altijd vertraging.',x:'dat',t:'trein es de-woord → die. Coger el tren = de trein nemen.'},
{s:'Eso es algo en lo que no había pensado.',n:'Dat is iets waar ik niet aan gedacht heb.',a:['dat is iets waar ik niet aan heb gedacht'],x:'die',t:'denken aan → waar … aan: la preposición va delante de los verbos.'}
],'Relativas: die, dat, waar');

addPuz('er',[
{s:'El lunes no hay trenes.',n:'Maandag rijden er geen treinen.',a:['er rijden maandag geen treinen'],x:'rijdt',t:'Hay + sujeto indefinido = er + verbo. Los días van en minúscula: maandag.'},
{s:'Hay un problema con la reserva.',n:'Er is een probleem met de reservering.',a:['met de reservering is er een probleem','er is met de reservering een probleem'],x:'zijn',t:'Hay + singular = er is. Para «hay» nunca se usa het is.'},
{s:'¿Hay algún supermercado por aquí cerca?',n:'Is er hier een supermarkt in de buurt?',a:['is er een supermarkt hier in de buurt','is er hier in de buurt een supermarkt'],x:'het',t:'¿Hay…? = Is er …? (verbo + er).'},
{s:'Ya estoy acostumbrado.',n:'Ik ben er al aan gewend.',x:'me',t:'gewend zijn aan → er … aan, con el adverbio en medio: er al aan.'},
{s:'Me arrepiento.',n:'Ik heb er spijt van.',x:'ben',t:'Arrepentirse = spijt hebben van → er spijt van hebben (no es reflexivo).'},
{s:'¿Fresas? Me he comido diez.',n:'Ik heb er tien gegeten.',x:'ze',t:'Con un número sin sustantivo hace falta er: ik heb er tien gegeten.'},
{s:'¿Ámsterdam? He estado dos veces.',n:'Ik ben er twee keer geweest.',a:['twee keer ben ik er geweest'],x:'heb',t:'er = allí (un lugar ya mencionado); va tras el verbo y el sujeto: ik ben er / ben ik er.'},
{s:'No tengo tiempo para eso.',n:'Ik heb er geen tijd voor.',x:'om',t:'tijd hebben voor → er … voor.'},
{s:'¿Qué pone en la carta?',n:'Wat staat er in de brief?',x:'zegt',t:'Lo que pone un texto: wat staat er (in)? Se usa staan.'},
{s:'¿Queda café?',n:'Is er nog koffie?',x:'heeft',t:'¿Queda…? = Is er nog …? «Hay» es er is, nunca heeft.'},
{s:'Está muy orgulloso de ello.',n:'Hij is er erg trots op.',x:'van',t:'trots zijn op → er … op.'},
{s:'Estoy muy contento con ello.',n:'Ik ben er heel blij mee.',x:'met',t:'blij zijn met → er … mee: met se convierte en mee.'},
{s:'No puedo hacer nada.',n:'Ik kan er niets aan doen.',x:'geen',t:'er niets aan kunnen doen = no poder hacer nada (al respecto).'},
{s:'Tienes que pensarlo bien.',n:'Je moet er goed over nadenken.',x:'erover',t:'nadenken over → er … over nadenken, con el adverbio en medio.'},
{s:'¿Tú sabes algo de eso?',n:'Weet jij er iets van?',x:'aan',t:'iets weten van → er iets van weten.'},
{s:'Hay demasiados turistas.',n:'Er zijn te veel toeristen.',x:'is',t:'Hay + plural = er zijn.'}
],'La palabra er');

addPuz('imperativo',[
{s:'Pasa y siéntate.',n:'Kom binnen en ga zitten.',x:'zit',t:'Imperativo = raíz del verbo, sin sujeto: kom, ga. Sentarse = gaan zitten.'},
{s:'¿Me cierras la puerta?',n:'Wil je de deur dichtdoen?',x:'te',t:'Petición amable: Wil je …? + infinitivo al final, sin te.'},
{s:'No te olvides las llaves.',n:'Vergeet je sleutels niet.',x:'geen',t:'Con un objeto definido, niet va al final: vergeet je sleutels niet.'},
{s:'Siéntese, por favor.',n:'Gaat u maar zitten.',x:'ga',t:'Imperativo con u: gaat u (con -t). maar suaviza la invitación.'},
{s:'Habla más alto, que no te oigo.',n:'Praat wat harder, ik versta je niet.',a:['ik versta je niet praat wat harder'],x:'hard',t:'Imperativo = raíz: praat. Más alto = harder (comparativo).'},
{s:'Vamos a tomar algo.',n:'Laten we iets gaan drinken.',x:'te',t:'¡Vamos a…! = Laten we + infinitivo al final.'},
{s:'¡Cuidado con los coches!',n:'Pas op voor de auto’s!',x:'oppas',t:'oppassen voor (tener cuidado con): pas op voor…'},
{s:'Cuéntame qué tal el viaje.',n:'Vertel eens hoe de reis was.',a:['vertel eens hoe was de reis'],x:'vertelt',t:'eens suaviza la petición. Pregunta indirecta: hoe de reis was (verbo al final).'},
{s:'No hagas tanto ruido.',n:'Maak niet zoveel lawaai.',x:'geen',t:'Imperativo negativo: verbo + niet. Tanto = zoveel.'},
{s:'¡Recoge tu habitación!',n:'Ruim je kamer op!',x:'opruim',t:'opruimen: ruim … op, con el prefijo al final.'},
{s:'¿Me pasas la sal?',n:'Kun je me het zout aangeven?',x:'aangeeft',t:'Pasar algo en la mesa = aangeven. Modal + infinitivo al final.'},
{s:'Mándame un mensaje cuando sepas algo.',n:'Stuur me een berichtje als je iets weet.',a:['als je iets weet stuur me een berichtje'],x:'weten',t:'Imperativo + als: en la subordinada, el verbo va al final.'},
{s:'No se lo digas a nadie.',n:'Zeg het tegen niemand.',x:'niet',t:'niemand ya es negativo: no se añade niet. Zeg het tegen niemand.'},
{s:'Ponte el abrigo, que hace frío.',n:'Doe je jas aan, het is koud.',a:['het is koud doe je jas aan'],x:'aandoet',t:'Ponerse ropa = aandoen: doe … aan.'},
{s:'Perdone, ¿me puede ayudar?',n:'Pardon, kunt u me helpen?',x:'kun',t:'Con u, lo normal es kunt u (con -t aunque haya inversión); con je: kun je.'},
{s:'Mira, ahí viene Lotte.',n:'Kijk, daar komt Lotte aan!',a:['kijk Lotte komt daar aan'],x:'aankomt',t:'aankomen: komt … aan. Tras daar, inversión: daar komt Lotte aan.'}
],'Imperativo y peticiones');

addPuz('comparar',[
{s:'Róterdam es más grande que Delft.',n:'Rotterdam is groter dan Delft.',x:'als',t:'Comparativo: adjetivo + -er + dan (no als).'},
{s:'Mi habitación es más pequeña que la tuya.',n:'Mijn kamer is kleiner dan die van jou.',x:'kleinere',t:'La tuya = die van jou (de-woord) o dat van jou (het-woord).'},
{s:'Este año hace más calor que el año pasado.',n:'Het is dit jaar warmer dan vorig jaar.',a:['dit jaar is het warmer dan vorig jaar'],x:'meer',t:'Más + adjetivo = adjetivo + -er: warmer (no meer warm).'},
{s:'Habla neerlandés mejor que yo.',n:'Hij spreekt beter Nederlands dan ik.',a:['hij spreekt Nederlands beter dan ik'],x:'goeder',t:'goed → beter → best (irregular). Tras dan: ik.'},
{s:'Es la mejor pizza que he comido nunca.',n:'Dit is de beste pizza die ik ooit heb gegeten.',a:['dit is de beste pizza die ik ooit gegeten heb'],x:'best',t:'Superlativo delante de un sustantivo, con -e: de beste pizza.'},
{s:'Cuanto antes, mejor.',n:'Hoe eerder, hoe beter.',x:'goed',t:'Cuanto más…, más… = hoe …, hoe … + comparativo.'},
{s:'Delft no es tan grande como Róterdam.',n:'Delft is niet zo groot als Rotterdam.',x:'dan',t:'niet zo … als = no tan … como (aquí als, no dan).'},
{s:'Necesito una habitación más grande.',n:'Ik heb een grotere kamer nodig.',x:'groter',t:'Comparativo delante de sustantivo, con -e: een grotere kamer.'},
{s:'Lo más importante es que estés sano.',n:'Het belangrijkste is dat je gezond bent.',a:['dat je gezond bent is het belangrijkste'],x:'meest',t:'Lo más + adjetivo = het + superlativo: het belangrijkste.'},
{s:'Aquí el vino es el doble de caro.',n:'De wijn is hier twee keer zo duur.',a:['hier is de wijn twee keer zo duur'],x:'duurder',t:'El doble de caro = twee keer zo duur (sin comparativo).'},
{s:'Ahmed es el que nada más rápido del equipo.',n:'Ahmed zwemt het snelst van het team.',a:['Ahmed zwemt van het team het snelst','van het team zwemt Ahmed het snelst'],x:'sneller',t:'Superlativo como adverbio: het + -st (het snelst).'},
{s:'Ahora gano menos que antes.',n:'Ik verdien nu minder dan vroeger.',a:['nu verdien ik minder dan vroeger'],x:'weiniger',t:'weinig → minder → minst (irregular).'},
{s:'Esta bici es más cara, pero mejor.',n:'Deze fiets is duurder, maar wel beter.',a:['deze fiets is beter maar wel duurder'],x:'duurer',t:'Adjetivos acabados en -r: comparativo con -der: duur → duurder.'},
{s:'Cuanto más practico, mejor hablo.',n:'Hoe meer ik oefen, hoe beter ik spreek.',x:'oefenen',t:'hoe …, hoe …: en las dos partes el verbo va al final.'},
{s:'El examen fue más fácil de lo que esperaba.',n:'Het examen was makkelijker dan ik had verwacht.',a:['het examen was makkelijker dan ik verwacht had'],x:'als',t:'Más … de lo que = -er dan: makkelijker dan ik had verwacht.'},
{s:'Mi padre tiene más paciencia que yo.',n:'Mijn vader heeft meer geduld dan ik.',x:'meest',t:'Más + sustantivo = meer: meer geduld dan ik.'}
],'Comparar');

/* ---- js/content/story-1.js ---- */
/* Woorden · historia «Mateo en la Zeemeeuw», temporada 1 · capítulos 1–7 (A2: presente, frases cortas) */

addStory({id:'c01', t:'De eerste dag', te:'El primer día', l:[
  ['Het is maandag, kwart voor acht. Mateo staat bij de poort van Werf Zeemeeuw.','Es lunes, las ocho menos cuarto. Mateo está en la entrada del astillero Zeemeeuw.',''],
  ['Hij draagt een nieuw pak en mooie schoenen. Hij is een beetje nerveus.','Lleva un traje nuevo y unos zapatos bonitos. Está un poco nervioso.',''],
  ['Een vrouw met een helm onder haar arm komt naar hem toe.','Una mujer con un casco bajo el brazo se acerca a él.',''],
  ['Jij bent vast Mateo. Ik ben Lotte, de projectmanager.','Tú debes de ser Mateo. Soy Lotte, la jefa de proyecto.','Lotte'],
  ['Een Spanjaard die te vroeg is. Dat zie ik niet vaak.','Un español que llega pronto. Eso no se ve mucho.','Lotte'],
  ['Mooi pak. Ga je trouwen?','Bonito traje. ¿Te casas o qué?','Lotte'],
  ['Hier draagt niemand een pak. Ook de baas niet.','Aquí nadie lleva traje. Ni siquiera el jefe.','Lotte'],
  ['Dan komt Pieter, de baas. Hij is lang en hij praat snel.','Entonces llega Pieter, el jefe. Es alto y habla rápido.',''],
  ['Welkom. Je Nederlands is niet goed. Maar je cv is heel goed.','Bienvenido. Tu neerlandés no es bueno. Pero tu currículum es muy bueno.','Pieter'],
  ['Rustig maar. Dat is een compliment, hoor.','Tranquilo, que eso es un cumplido.','Lotte'],
  ['In de grote hal staat een jacht van vijftig meter. Het is nog grijs, zonder verf.','En la gran nave hay un yate de cincuenta metros. Todavía está gris, sin pintar.',''],
  ['De naam is geheim. Wij zeggen gewoon: bouwnummer 31. In december gaat het naar zee.','El nombre es secreto. Nosotros decimos simplemente: construcción número 31. En diciembre sale al mar.','Pieter'],
  ['Om vijf uur krijgt Mateo een bericht van Sanne, zijn nieuwe huisgenote.','A las cinco, Mateo recibe un mensaje de Sanne, su nueva compañera de piso.',''],
  ['Je kamer is klaar. Maar er is één probleem…','Tu habitación está lista. Pero hay un problema…','Sanne']
], q:[
  ['Wat draagt Mateo op zijn eerste dag?','¿Qué lleva puesto Mateo su primer día?',['Werkkleding en een helm','Een nieuw pak','Een spijkerbroek en een trui'],1],
  ['Wat zegt Pieter tegen Mateo?','¿Qué le dice Pieter a Mateo?',['Zijn Nederlands is niet goed, maar zijn cv wel','Hij is te laat','Hij moet morgen een pak dragen'],0],
  ['Wat schrijft Sanne in haar bericht?','¿Qué escribe Sanne en su mensaje?',['De kamer is nog niet klaar','Ze komt om vijf uur','Er is één probleem'],2]
]});

addStory({id:'c02', t:'Het huis aan de gracht', te:'La casa del canal', l:[
  ['’s Avonds staat Mateo met twee koffers voor een smal huis aan een gracht in Delft.','Por la noche, Mateo está con dos maletas delante de una casa estrecha junto a un canal, en Delft.',''],
  ['Een jonge vrouw in een gele trui doet de deur open. Het is Sanne.','Una chica con un jersey amarillo abre la puerta. Es Sanne.',''],
  ['Hoi! Kom binnen. Pas op, de trap is steil.','¡Hola! Pasa. Cuidado, que la escalera es empinada.','Sanne'],
  ['De trap is niet steil. Hij is bijna een ladder.','La escalera no es empinada. Es casi una escalera de mano.',''],
  ['In de keuken zit Ahmed. Hij werkt in een ziekenhuis, vaak ’s nachts.','En la cocina está Ahmed. Trabaja en un hospital, muchas veces de noche.',''],
  ['Welkom, Mateo. Hou je jas maar aan. Het is koud hier.','Bienvenido, Mateo. Mejor no te quites el abrigo. Aquí hace frío.','Ahmed'],
  ['Dat is het probleem. De verwarming is kapot.','Ese es el problema. La calefacción está rota.','Sanne'],
  ['Henk, de huisbaas, zegt altijd: volgende week. Maar hij komt nooit.','Henk, el casero, siempre dice: la semana que viene. Pero nunca viene.','Ahmed'],
  ['Op de koelkast hangt een lijst met huisregels.','En la nevera hay una lista con las normas de la casa.',''],
  ['“Regel 1: afwassen doe je meteen. Regel 2: na tien uur is het stil.”','«Norma 1: los platos se friegan enseguida. Norma 2: a partir de las diez, silencio.»',''],
  ['Na tien uur? In Spanje eten we om tien uur!','¿A partir de las diez? ¡En España cenamos a las diez!','Mateo'],
  ['Hier eten we om zes uur. En deze week maak jij de keuken schoon.','Aquí cenamos a las seis. Y esta semana te toca limpiar la cocina.','Sanne'],
  ['Nog één vraag: heb je een fiets?','Una pregunta más: ¿tienes bici?','Sanne'],
  ['Mateo schudt zijn hoofd. Sanne en Ahmed kijken elkaar aan.','Mateo niega con la cabeza. Sanne y Ahmed se miran.','']
], q:[
  ['Wat is het probleem in het huis?','¿Cuál es el problema de la casa?',['De trap is kapot','Er is geen keuken','De verwarming doet het niet'],2],
  ['Hoe laat eet Sanne meestal?','¿A qué hora suele cenar Sanne?',['Om tien uur','Om zes uur','Om twaalf uur'],1],
  ['Wat moet Mateo deze week schoonmaken?','¿Qué tiene que limpiar Mateo esta semana?',['De keuken','De badkamer','De trap'],0]
]});

addStory({id:'c03', t:'Een fiets en veel regen', te:'Una bici y mucha lluvia', l:[
  ['Op zaterdag koopt Mateo samen met Sanne een oude fiets. Hij kost zeventig euro.','El sábado, Mateo se compra una bici vieja con Sanne. Cuesta setenta euros.',''],
  ['Let op: deze fiets heeft een terugtraprem. Je trapt naar achteren en dan stop je.','Ojo: esta bici tiene freno de contrapedal. Pedaleas hacia atrás y te paras.','Sanne'],
  ['Mateo probeert het. Hij valt bijna in de gracht.','Mateo lo prueba. Casi se cae al canal.',''],
  ['Op maandag regent het hard. Mateo fietst naar de werf en kijkt steeds op zijn telefoon.','El lunes llueve mucho. Mateo va en bici al astillero y no para de mirar el móvil.',''],
  ['Na een half uur staat hij bij een weiland met koeien. Waar is de werf?','Después de media hora está junto a un prado con vacas. ¿Dónde está el astillero?',''],
  ['Een oude man wijst hem de weg: rechtdoor, en bij de brug linksaf.','Un señor mayor le indica el camino: todo recto y, en el puente, a la izquierda.',''],
  ['Om half negen komt Mateo binnen. Hij is helemaal nat.','A las ocho y media, Mateo entra por la puerta. Está empapado.',''],
  ['Je bent te laat.','Llegas tarde.','Pieter'],
  ['Hier, een handdoek. In Nederland regent het horizontaal.','Toma, una toalla. En los Países Bajos llueve en horizontal.','Lotte'],
  ['Die middag kijkt Pieter naar een tekening van Mateo.','Esa tarde, Pieter mira un plano de Mateo.',''],
  ['Niet slecht.','No está mal.','Pieter'],
  ['Niet slecht? Dat is bij Pieter het hoogste compliment.','¿«No está mal»? Viniendo de Pieter, es el mayor cumplido.','Lotte'],
  ['O ja. Heb je al een BSN? Zonder BSN krijg je geen salaris.','Ah, por cierto. ¿Ya tienes el BSN? Sin BSN no cobras.','Pieter'],
  ['Morgen heb ik een afspraak bij de gemeente. Hoe moeilijk kan dat zijn?','Mañana tengo cita en el ayuntamiento. ¿Tan difícil puede ser?','Mateo']
], q:[
  ['Hoe rem je op de fiets van Mateo?','¿Cómo se frena en la bici de Mateo?',['Met de remmen aan het stuur','Met een knop op het stuur','Door naar achteren te trappen'],2],
  ['Waarom komt Mateo te laat op zijn werk?','¿Por qué llega tarde Mateo al trabajo?',['Hij fietst de verkeerde kant op','Zijn fiets is kapot','Hij slaapt te lang'],0],
  ['Wat betekent ‘niet slecht’ bij Pieter?','¿Qué significa «no está mal» en boca de Pieter?',['Dat het werk slecht is','Dat het een groot compliment is','Dat Mateo te laat is'],1]
]});

addStory({id:'c04', t:'Bij de gemeente', te:'En el ayuntamiento', l:[
  ['Om negen uur zit Mateo bij de gemeente, met zijn paspoort en een map vol papieren.','A las nueve, Mateo está en el ayuntamiento, con su pasaporte y una carpeta llena de papeles.',''],
  ['De vrouw achter de balie heet Ilse.','La mujer de la ventanilla se llama Ilse.',''],
  ['Goedemorgen. Uw paspoort, alstublieft. En uw huurcontract.','Buenos días. Su pasaporte, por favor. Y su contrato de alquiler.','Ilse'],
  ['Mateo geeft haar zijn paspoort en een mail van Henk, de huisbaas.','Mateo le da su pasaporte y un correo de Henk, el casero.',''],
  ['Dit is een mail, meneer. Geen contract.','Esto es un correo, señor. No es un contrato.','Ilse'],
  ['Maar ik woon daar echt! Kijk, hier staat mijn adres.','¡Pero si vivo allí de verdad! Mire, aquí pone mi dirección.','Mateo'],
  ['Dat geloof ik. Maar ik heb een echt contract nodig, met een handtekening.','Le creo. Pero necesito un contrato de verdad, con firma.','Ilse'],
  ['Zonder contract geen inschrijving. En zonder inschrijving geen BSN.','Sin contrato no hay empadronamiento. Y sin empadronamiento no hay BSN.','Ilse'],
  ['Buiten belt Mateo meteen Henk.','Fuera, Mateo llama enseguida a Henk.',''],
  ['Met Henk. Ik ben er niet. Spreek maar iets in na de piep.','Soy Henk. Ahora no estoy. Deja un mensaje después de la señal.','Henk'],
  ['Hallo Henk, met Mateo. Ik heb een huurcontract nodig. Wilt u mij terugbellen?','Hola, Henk, soy Mateo. Necesito un contrato de alquiler. ¿Me puede devolver la llamada?','Mateo'],
  ['Het regent weer. Mateo fietst nat en moe naar huis.','Otra vez llueve. Mateo vuelve a casa en bici, mojado y cansado.',''],
  ['In de keuken hangt een briefje op de koelkast: “Van wie is deze vieze pan?! – S.”','En la cocina hay una nota en la nevera: «¡¿De quién es esta sartén sucia?! – S.»',''],
  ['Mateo kijkt naar de pan in de gootsteen. Het is zijn pan.','Mateo mira la sartén que hay en el fregadero. Es la suya.','']
], q:[
  ['Waarom krijgt Mateo geen BSN?','¿Por qué no le dan el BSN a Mateo?',['Hij heeft geen paspoort','Hij heeft geen echt huurcontract','Hij is te laat bij de gemeente'],1],
  ['Mateo belt Henk. Wat gebeurt er?','Mateo llama a Henk. ¿Qué pasa?',['Henk neemt niet op','Henk komt meteen','Henk wordt boos'],0],
  ['Van wie is de vieze pan?','¿De quién es la sartén sucia?',['Van Sanne','Van Ahmed','Van Mateo'],2]
]});

addStory({id:'c05', t:'De huisvergadering', te:'La reunión de piso', l:[
  ['Om acht uur zitten Sanne, Ahmed en Mateo aan de keukentafel. Het is huisvergadering.','A las ocho, Sanne, Ahmed y Mateo están sentados a la mesa de la cocina. Hay reunión de piso.',''],
  ['Ik zeg het gewoon eerlijk: ik vind het vervelend. De pan staat er al twee dagen.','Lo digo tal cual: me molesta. La sartén lleva dos días ahí.','Sanne'],
  ['Maar hij is niet vies! Hij staat in de week. Dat doen we in Spanje ook.','¡Pero si no está sucia! Está en remojo. En España también lo hacemos.','Mateo'],
  ['Twee dagen? Dan is het geen pan meer, maar een aquarium.','¿Dos días? Entonces ya no es una sartén, es un acuario.','Sanne'],
  ['Ahmed lacht, maar dan wordt hij serieus.','Ahmed se ríe, pero luego se pone serio.',''],
  ['En de geur van vis om elf uur ’s avonds… Die ruik ik tot in mijn bed.','Y el olor a pescado a las once de la noche… Lo huelo hasta en la cama.','Ahmed'],
  ['Mateo wil boos worden. Maar hij weet: ze hebben gelijk.','Mateo quiere enfadarse. Pero sabe que tienen razón.',''],
  ['Oké. Vanaf nu was ik de pan meteen af.','Vale. A partir de ahora friego la sartén enseguida.','Mateo'],
  ['Maar ik wil één ding: op vrijdag kook ik voor jullie. Spaans eten.','Pero quiero una cosa: los viernes cocino para vosotros. Comida española.','Mateo'],
  ['Leuk! Om zes uur?','¡Qué bien! ¿A las seis?','Sanne'],
  ['Om zes uur? In Spanje is dat nog middag!','¿A las seis? ¡En España eso todavía es media tarde!','Mateo'],
  ['Dan maken we er acht uur van. Precies in het midden.','Pues lo dejamos en las ocho. Justo en el medio.','Ahmed'],
  ['Sanne schrijft op de lijst: “Regel 7: op vrijdag om acht uur eten we Spaans.”','Sanne escribe en la lista: «Norma 7: los viernes a las ocho cenamos comida española.»',''],
  ['O, Mateo, jij speelt toch waterpolo? Een collega van mij zoekt nieuwe spelers voor haar club.','Oye, Mateo, tú juegas al waterpolo, ¿no? Una compañera mía busca jugadores nuevos para su club.','Ahmed']
], q:[
  ['Waarom staat de pan er nog?','¿Por qué sigue ahí la sartén?',['Mateo heeft geen tijd','De pan staat in de week','Sanne wil hem afwassen'],1],
  ['Wat vindt Ahmed vervelend?','¿Qué le molesta a Ahmed?',['De geur van vis laat op de avond','De muziek van Sanne','De fiets in de gang'],0],
  ['Hoe laat eten ze op vrijdag samen?','¿A qué hora cenan juntos los viernes?',['Om zes uur','Om tien uur','Om acht uur'],2]
]});

addStory({id:'c06', t:'Een rode badmuts', te:'Un gorro rojo', l:[
  ['Donderdag om tien uur ’s avonds heeft Mateo zijn eerste training. Eindelijk een Spaanse tijd!','El jueves a las diez de la noche, Mateo tiene su primer entrenamiento. ¡Por fin un horario español!',''],
  ['Bij het bad staat een vrouw met een rode badmuts: Emma, de collega van Ahmed.','Junto a la piscina hay una mujer con un gorro rojo: Emma, la compañera de Ahmed.',''],
  ['Hoi, ik ben Emma. Ik ben de keeper. Laat maar zien wat je kunt.','Hola, soy Emma. Soy la portera. A ver qué sabes hacer.','Emma'],
  ['Mateo zwemt snel en gooit hard. Hij scoort drie keer.','Mateo nada rápido y lanza fuerte. Marca tres goles.',''],
  ['Bij de vierde bal probeert hij een lob. Emma pakt hem met één hand.','En el cuarto balón intenta una vaselina. Emma la para con una mano.',''],
  ['Mooie poging. Maar die ken ik al.','Buen intento. Pero esa ya me la sé.','Emma'],
  ['Jij bent wel heel direct.','Tú eres muy directa, ¿eh?','Mateo'],
  ['Dank je. Dat is hier een compliment.','Gracias. Aquí eso es un cumplido.','Emma'],
  ['Na de training drinken ze iets in de kantine van de club.','Después del entrenamiento toman algo en el bar del club.',''],
  ['Zaterdag hebben we een wedstrijd. Jij speelt mee.','El sábado tenemos partido. Tú juegas.','Emma'],
  ['Is dat een vraag?','¿Eso es una pregunta?','Mateo'],
  ['Nee. En waar werk jij eigenlijk?','No. ¿Y tú dónde trabajas, por cierto?','Emma'],
  ['Bij Werf Zeemeeuw, bij Rotterdam. Ik ben ingenieur.','En el astillero Zeemeeuw, cerca de Róterdam. Soy ingeniero.','Mateo'],
  ['Emma kijkt hem even aan. Dan lacht ze, maar ze zegt niets.','Emma lo mira un momento. Luego se ríe, pero no dice nada.','']
], q:[
  ['Wat doet Emma in het team?','¿Qué hace Emma en el equipo?',['Ze is de keeper','Ze is de trainer','Ze is de scheidsrechter'],0],
  ['Wat gebeurt er met de lob van Mateo?','¿Qué pasa con la vaselina de Mateo?',['Hij scoort','De bal gaat naast het doel','Emma pakt de bal'],2],
  ['Wat doet Emma aan het eind?','¿Qué hace Emma al final?',['Ze wordt boos','Ze lacht, maar zegt niets','Ze stelt veel vragen'],1]
]});

addStory({id:'c07', t:'Henk komt langs', te:'Henk se pasa por casa', l:[
  ['Zaterdagochtend gaat de bel. Voor de deur staat een oude man met een gereedschapskist.','El sábado por la mañana suena el timbre. En la puerta hay un señor mayor con una caja de herramientas.',''],
  ['Ik ben Henk. Ik kom voor de verwarming.','Soy Henk. Vengo por lo de la calefacción.','Henk'],
  ['Henk kijkt een kwartier naar de ketel. Dan zucht hij.','Henk se pasa un cuarto de hora mirando la caldera. Luego suspira.',''],
  ['Die is kapot. Maandag bel ik een monteur.','Está rota. El lunes llamo a un técnico.','Henk'],
  ['Mateo kijkt ook. Op de ketel zit een drukmeter. De naald staat bijna op nul.','Mateo también mira. En la caldera hay un manómetro. La aguja está casi a cero.',''],
  ['Hij is niet kapot. De druk is te laag. Er moet water bij.','No está rota. La presión está demasiado baja. Le falta agua.','Mateo'],
  ['Hij draait een kraantje open en vult water bij. Tien minuten later zijn de radiatoren warm.','Abre un grifito y le echa agua. Diez minutos después, los radiadores están calientes.',''],
  ['Zo. Jij bent handig, jongen.','Vaya. Eres un manitas, chaval.','Henk'],
  ['Ik ben ingenieur. Ik werk met schepen.','Soy ingeniero. Trabajo con barcos.','Mateo'],
  ['Een huis is net een schip. Zeg, kan ik iets voor je doen?','Una casa es como un barco. Oye, ¿puedo hacer algo por ti?','Henk'],
  ['Ja. Ik heb een huurcontract nodig. Voor de gemeente.','Sí. Necesito un contrato de alquiler. Para el ayuntamiento.','Mateo'],
  ['Henk heeft altijd contracten in zijn gereedschapskist. Hij tekent er meteen een.','Henk siempre lleva contratos en la caja de herramientas. Firma uno en el acto.',''],
  ['Dan trilt de telefoon van Mateo. Een bericht van Lotte.','Entonces vibra el móvil de Mateo. Un mensaje de Lotte.',''],
  ['Maandag komt Victor. Hij werkt voor de eigenaar van het jacht. Trek je pak maar weer aan.','El lunes viene Victor. Trabaja para el propietario del yate. Ya puedes volver a ponerte el traje.','Lotte']
], q:[
  ['Wat is het probleem met de ketel?','¿Qué problema tiene la caldera?',['Hij is helemaal kapot','Er zit te weinig water in','Er is geen gas'],1],
  ['Wat doet Henk na de reparatie?','¿Qué hace Henk después de la reparación?',['Hij tekent een huurcontract','Hij belt een monteur','Hij gaat boos weg'],0],
  ['Wie komt er maandag naar de werf?','¿Quién va al astillero el lunes?',['Henk','Sanne','Victor'],2]
]});

/* ---- js/content/story-2.js ---- */
/* Woorden · historia «Mateo en la Zeemeeuw», temporada 1 · capítulos 8–14 (A2+: perfecto, dat/omdat/als, verbos separables) */

addStory({id:'c08', t:'Een man in pak', te:'Un hombre de traje', l:[
  ['Zaterdag heeft Mateo zijn eerste wedstrijd gespeeld. Hij heeft twee keer gescoord.','El sábado, Mateo jugó su primer partido. Marcó dos goles.',''],
  ['Goed gespeeld. Maar je hebt de hele wedstrijd tegen de scheidsrechter gepraat. In het Spaans.','Has jugado bien. Pero te has pasado todo el partido hablando con el árbitro. En español.','Emma'],
  ['Daarna zijn ze samen naar huis gefietst. Emma heeft de hele weg zijn Nederlands verbeterd.','Después volvieron juntos a casa en bici. Emma le estuvo corrigiendo el neerlandés todo el camino.',''],
  ['Maandagochtend is Mateo met het contract van Henk naar de gemeente gegaan.','El lunes a primera hora, Mateo ha ido al ayuntamiento con el contrato de Henk.',''],
  ['Nu heeft hij eindelijk een BSN. Ilse heeft zelfs gelachen.','Ahora por fin tiene BSN. Ilse incluso se ha reído.',''],
  ['Als hij op de werf aankomt, staat er een man in een grijs pak bij het jacht.','Cuando llega al astillero, hay un hombre con traje gris junto al yate.',''],
  ['Kijk, toch nog iemand in pak. Dat is Victor. Hij controleert alles voor de eigenaar.','Mira, al final sí hay alguien de traje. Es Victor. Lo controla todo para el propietario.','Lotte'],
  ['Victor loopt met een zaklamp door het jacht en schrijft alles op in een boekje.','Victor recorre el yate con una linterna y lo apunta todo en una libreta.',''],
  ['Deze deur gaat niet goed dicht. En hier zit een kras van twee millimeter.','Esta puerta no cierra bien. Y aquí hay un arañazo de dos milímetros.','Victor'],
  ['U bent de nieuwe ingenieur? Ik wil een nieuwe tekening van de pompen in de motorkamer.','¿Usted es el ingeniero nuevo? Quiero un plano nuevo de las bombas de la sala de máquinas.','Victor'],
  ['Graag voor het einde van volgende week. Ik heb gehoord dat u goed bent. We zullen zien.','Para finales de la semana que viene, por favor. He oído que es usted bueno. Ya veremos.','Victor'],
  ['Hij kijkt Mateo nog even aan, schrijft iets op en loopt weg.','Mira a Mateo un momento más, apunta algo y se va.',''],
  ['Lotte, wat heeft hij over mij opgeschreven?','Lotte, ¿qué ha apuntado sobre mí?','Mateo'],
  ['Geen idee. Maar vorig jaar heeft hij twee ingenieurs laten huilen.','Ni idea. Pero el año pasado hizo llorar a dos ingenieros.','Lotte']
], q:[
  ['Hoe heeft Mateo eindelijk een BSN gekregen?','¿Cómo ha conseguido Mateo por fin el BSN?',['Ilse heeft een uitzondering gemaakt','Hij heeft het contract van Henk laten zien','Pieter heeft de gemeente gebeld'],1],
  ['Wat doet Victor op de werf?','¿Qué hace Victor en el astillero?',['Hij repareert een deur','Hij zoekt een nieuwe baan','Hij controleert het jacht voor de eigenaar'],2],
  ['Wat wil Victor van Mateo?','¿Qué quiere Victor de Mateo?',['Een nieuwe tekening van de pompen','Een nieuw pak','Een verslag over de deur'],0]
]});

addStory({id:'c09', t:'Klaar of duidelijk?', te:'¿Listo o claro?', l:[
  ['Mateo werkt de hele week aan de tekening voor Victor. Het is veel werk.','Mateo trabaja toda la semana en el plano para Victor. Es mucho trabajo.',''],
  ['Op woensdagmiddag loopt Pieter langs zijn bureau. Hij heeft haast, zoals altijd.','El miércoles por la tarde, Pieter pasa junto a su mesa. Tiene prisa, como siempre.',''],
  ['Mateo, de tekening voor Victor. Is die klaar?','Mateo, el plano para Victor. ¿Está listo?','Pieter'],
  ['Mateo hoort ‘klaar’ en denkt aan het Spaanse woord ‘claro’.','Mateo oye «klaar» y piensa en la palabra española «claro».',''],
  ['Hij denkt dat Pieter vraagt of alles duidelijk is.','Cree que Pieter le pregunta si está todo claro.',''],
  ['Ja, hij is klaar!','¡Sí, está listo! (Él quiere decir: «¡Sí, está claro!»)','Mateo'],
  ['Nu al? Top! Dan bel ik Victor meteen.','¿Ya? ¡Genial! Pues llamo a Victor ahora mismo.','Pieter'],
  ['Mateo begrijpt niet waarom Pieter zo blij is, maar hij vraagt niets.','Mateo no entiende por qué Pieter está tan contento, pero no pregunta nada.',''],
  ['Hij werkt rustig verder, omdat hij denkt dat hij nog een week heeft.','Sigue trabajando tranquilo, porque cree que todavía tiene una semana.',''],
  ['De volgende ochtend om acht uur staat Victor naast zijn bureau.','A la mañana siguiente, a las ocho, Victor está junto a su mesa.',''],
  ['Pieter staat achter hem, met een grote glimlach.','Pieter está detrás de él, con una gran sonrisa.',''],
  ['Goedemorgen. Pieter heeft me gisteren gebeld.','Buenos días. Pieter me llamó ayer.','Victor'],
  ['Hij zegt dat de tekening al klaar is. Mag ik hem zien?','Dice que el plano ya está listo. ¿Puedo verlo?','Victor']
], q:[
  ['Wat vraagt Pieter aan Mateo?','¿Qué le pregunta Pieter a Mateo?',['Of Mateo koffie wil','Of de tekening klaar is','Of Mateo Victor wil bellen'],1],
  ['Wat denkt Mateo dat Pieter vraagt?','¿Qué cree Mateo que le pregunta Pieter?',['Of alles duidelijk is','Of hij moe is','Of hij morgen kan komen'],0],
  ['Wie staat er de volgende ochtend bij het bureau van Mateo?','¿Quién está a la mañana siguiente junto a la mesa de Mateo?',['Lotte en Emma','Alleen Lotte','Victor en Pieter'],2]
]});

addStory({id:'c10', t:'Nog niet klaar', te:'Todavía no está listo', l:[
  ['Mateo kijkt naar zijn scherm. De tekening is nog maar half af.','Mateo mira su pantalla. El plano solo está a medias.',''],
  ['Klaar? Nee… hij is nog niet klaar.','¿Listo? No… todavía no está listo.','Mateo'],
  ['Het wordt heel stil. Pieter wordt rood.','Se hace un silencio total. Pieter se pone rojo.',''],
  ['Ik kom vrijdag terug. Dan wil ik een tekening zien die echt klaar is.','Volveré el viernes. Entonces quiero ver un plano que esté listo de verdad.','Victor'],
  ['Als Victor weg is, kijkt Pieter Mateo aan.','Cuando Victor se va, Pieter mira a Mateo.',''],
  ['Wat is hier gebeurd? Je hebt gisteren gezegd dat hij klaar was!','¿Qué ha pasado aquí? ¡Ayer me dijiste que estaba listo!','Pieter'],
  ['Ik dacht dat je vroeg of het duidelijk was. In het Spaans betekent ‘claro’ duidelijk.','Creía que me preguntabas si estaba claro. En español, «claro» significa «duidelijk».','Mateo'],
  ['Lotte probeert niet te lachen, maar dat lukt haar niet.','Lotte intenta no reírse, pero no lo consigue.',''],
  ['‘Klaar’ betekent bij ons: af, gedaan. Als iets duidelijk is, zeg je gewoon: duidelijk.','Para nosotros, «klaar» significa «terminado, hecho». Si algo está claro, se dice simplemente «duidelijk».','Lotte'],
  ['Het spijt me, Pieter. Het is mijn fout. Ik heb het verkeerd begrepen.','Lo siento, Pieter. Es culpa mía. Lo entendí mal.','Mateo'],
  ['Goed dat je het meteen zegt. Maar als je iets niet begrijpt, vraag je het. Duidelijk?','Bien que lo digas enseguida. Pero si no entiendes algo, lo preguntas. ¿Claro?','Pieter'],
  ['Duidelijk!','¡Clarísimo!','Mateo'],
  ['Die dag werkt Mateo door tot middernacht. Daarna loopt hij nog even door het stille jacht.','Ese día, Mateo trabaja hasta medianoche. Después da una vuelta por el yate en silencio.',''],
  ['In de hut van de eigenaar staat een glas water. Het water trilt, maar het schip ligt stil.','En el camarote del propietario hay un vaso de agua. El agua tiembla, pero el barco está quieto.','']
], q:[
  ['Is de tekening klaar als Victor hem wil zien?','¿Está listo el plano cuando Victor quiere verlo?',['Ja, helemaal','Nee, hij is nog maar half af','Mateo is nog niet begonnen'],1],
  ['Wat betekent ‘klaar’ volgens Lotte?','¿Qué significa «klaar» según Lotte?',['Af, gedaan','Duidelijk','Rustig'],0],
  ['Wat ziet Mateo in de hut van de eigenaar?','¿Qué ve Mateo en el camarote del propietario?',['Een open raam','Een kapotte lamp','Water dat trilt in een glas'],2]
]});

addStory({id:'c11', t:'Het trillende glas', te:'El vaso que tiembla', l:[
  ['De volgende ochtend vertelt Mateo meteen aan Pieter wat hij heeft gezien.','A la mañana siguiente, Mateo le cuenta enseguida a Pieter lo que ha visto.',''],
  ['Een glas dat trilt? Laat zien.','¿Un vaso que tiembla? Enséñamelo.','Pieter'],
  ['Ze zetten de generatoren weer aan, net als vannacht, en gaan met Lotte naar de hut.','Vuelven a encender los generadores, igual que anoche, y van con Lotte al camarote.',''],
  ['Het water in het glas maakt kleine kringetjes. En er is een laag, zacht gezoem.','El agua del vaso hace circulitos. Y se oye un zumbido grave y suave.',''],
  ['Dit is niet goed.','Esto no está bien.','Pieter'],
  ['De eigenaar slaapt hier. Hij betaalt niet voor een bed dat zoemt.','El propietario duerme aquí. No paga por una cama que zumba.','Lotte'],
  ['We moeten het Victor vandaag nog vertellen.','Tenemos que decírselo a Victor hoy mismo.','Pieter'],
  ['Vandaag al? Kunnen we het niet eerst oplossen?','¿Ya hoy? ¿No podemos solucionarlo primero?','Mateo'],
  ['Nee. Als er een probleem is, zeg je het meteen. Dat heb je deze week zelf geleerd.','No. Si hay un problema, se dice enseguida. Eso lo has aprendido tú mismo esta semana.','Pieter'],
  ['’s Middags komt Victor. Hij kijkt lang naar het glas, maar hij zegt eerst niets.','Por la tarde viene Victor. Mira el vaso un buen rato, pero al principio no dice nada.',''],
  ['Over vier weken is de proefvaart. Als het jacht dan nog zoemt, accepteert de eigenaar het niet.','Dentro de cuatro semanas es la prueba de mar. Si para entonces el yate sigue zumbando, el propietario no lo acepta.','Victor'],
  ['Mateo, jij gaat het geluid zoeken. Lotte helpt je.','Mateo, tú vas a buscar el ruido. Lotte te ayuda.','Pieter'],
  ['En Mateo: zegt u pas dat het klaar is als het echt klaar is.','Y, Mateo: no diga que está listo hasta que esté listo de verdad.','Victor'],
  ['Mateo knikt. Hij heeft vier weken, en hij heeft geen idee waar hij moet beginnen.','Mateo asiente. Tiene cuatro semanas y no tiene ni idea de por dónde empezar.','']
], q:[
  ['Wat horen ze in de hut van de eigenaar?','¿Qué oyen en el camarote del propietario?',['Muziek','Water dat druppelt','Een zacht gezoem'],2],
  ['Waarom wil Pieter het meteen aan Victor vertellen?','¿Por qué quiere Pieter contárselo enseguida a Victor?',['Omdat Victor het al weet','Omdat je een probleem meteen moet zeggen','Omdat Lotte dat wil'],1],
  ['Wat moet Mateo doen?','¿Qué tiene que hacer Mateo?',['Het geluid zoeken','Een nieuw glas kopen','Met de eigenaar praten'],0]
]});

addStory({id:'c12', t:'Een uitnodiging', te:'Una invitación', l:[
  ['Een week lang hebben Mateo en Lotte naar het geluid gezocht.','Mateo y Lotte se han pasado una semana buscando el ruido.',''],
  ['Ze hebben pijpen gecontroleerd en schroeven vastgedraaid, maar het glas trilt nog steeds.','Han revisado tuberías y apretado tornillos, pero el vaso sigue temblando.',''],
  ['Bij de training op donderdag vangt Mateo geen enkele bal.','En el entrenamiento del jueves, Mateo no coge ni un balón.',''],
  ['Wat is er met jou? Je bent er helemaal niet met je hoofd bij.','¿Qué te pasa? Tienes la cabeza en otra parte.','Emma'],
  ['Problemen op mijn werk. Er is een geluid dat we niet kunnen vinden.','Problemas en el trabajo. Hay un ruido que no conseguimos encontrar.','Mateo'],
  ['Weet je wat jij nodig hebt? Een feestje. Zondag ben ik jarig.','¿Sabes lo que necesitas? Una fiesta. El domingo es mi cumpleaños.','Emma'],
  ['Kom je ook? Het is bij mijn ouders thuis. Een echte Nederlandse verjaardag, met een kring.','¿Te vienes? Es en casa de mis padres. Un cumpleaños holandés de verdad, en círculo.','Emma'],
  ['Een kring? Wat is dat?','¿En círculo? ¿Qué es eso?','Mateo'],
  ['Dat zie je wel.','Ya lo verás.','Emma'],
  ['Op zondagmiddag fietst Mateo met een bos bloemen naar een dorp bij Rotterdam.','El domingo por la tarde, Mateo va en bici con un ramo de flores a un pueblo cerca de Róterdam.',''],
  ['Hij belt aan bij een huis met een klein zeilbootje in de tuin.','Llama al timbre de una casa con un pequeño velero en el jardín.',''],
  ['De deur gaat open. Er staat een lange man op sloffen.','Se abre la puerta. Aparece un hombre alto en zapatillas de estar por casa.',''],
  ['Het is Pieter.','Es Pieter.','']
], q:[
  ['Waarom speelt Mateo slecht bij de training?','¿Por qué juega mal Mateo en el entrenamiento?',['Hij denkt aan het probleem op zijn werk','Hij is ziek','Hij heeft geen badmuts'],0],
  ['Waarom geeft Emma een feestje?','¿Por qué da Emma una fiesta?',['Ze heeft een nieuwe baan','Haar team heeft gewonnen','Ze is jarig'],2],
  ['Wie doet de deur open?','¿Quién abre la puerta?',['Emma','Pieter','Lotte'],1]
]});

addStory({id:'c13', t:'De kring', te:'El círculo', l:[
  ['Mateo? Wat doe jij hier?','¿Mateo? ¿Qué haces tú aquí?','Pieter'],
  ['Verrassing! Papa, dit is Mateo van waterpolo.','¡Sorpresa! Papá, este es Mateo, del waterpolo.','Emma'],
  ['Jij bent de dochter van Pieter? Waarom heb je dat niet verteld?','¿Tú eres la hija de Pieter? ¿Por qué no me lo dijiste?','Mateo'],
  ['Omdat ik je gezicht wilde zien. En dat was de moeite waard.','Porque quería ver la cara que ponías. Y ha merecido la pena.','Emma'],
  ['In de kamer staan twaalf stoelen in een grote kring. Iedereen drinkt koffie met taart.','En el salón hay doce sillas formando un gran círculo. Todo el mundo toma café con tarta.',''],
  ['Mateo geeft iedereen een hand en zegt twaalf keer: “Gefeliciteerd met Emma.”','Mateo le da la mano a todo el mundo y dice doce veces: «Felicidades por Emma».',''],
  ['Zo, Emma. Is dit je vriend?','Vaya, Emma. ¿Este es tu novio?','Ria'],
  ['Een vriend, tante Ria. Niet míjn vriend.','Un amigo, tía Ria. No mi novio.','Emma'],
  ['Jammer. En wat verdien je, jongen?','Qué pena. ¿Y cuánto ganas, chico?','Ria'],
  ['Genoeg, Ria. Dat weet ik toevallig heel goed.','Suficiente, Ria. Y eso, casualmente, lo sé muy bien.','Pieter'],
  ['Later neemt Pieter hem mee naar zolder. Daar staan tientallen kleine schepen.','Más tarde, Pieter se lo lleva al desván. Allí hay decenas de barcos pequeños.',''],
  ['Die heb ik allemaal zelf gebouwd. Mijn eerste baas zei altijd: een schip vertelt je alles.','Todos esos los he construido yo. Mi primer jefe siempre decía: un barco te lo cuenta todo.','Pieter'],
  ['Je moet alleen goed luisteren.','Solo tienes que escuchar bien.','Pieter'],
  ['Mateo kijkt naar de kleine schepen. Luisteren… Opeens heeft hij een idee.','Mateo mira los barquitos. Escuchar… De repente tiene una idea.','']
], q:[
  ['Waarom heeft Emma niet verteld dat Pieter haar vader is?','¿Por qué no le había dicho Emma que Pieter es su padre?',['Ze wilde het gezicht van Mateo zien','Ze was het vergeten','Pieter wilde het niet'],0],
  ['Wat zegt Mateo tegen alle mensen in de kring?','¿Qué les dice Mateo a todas las personas del círculo?',['Goedemiddag','Gefeliciteerd met Emma','Lang zal ze leven'],1],
  ['Wat zei de eerste baas van Pieter altijd?','¿Qué decía siempre el primer jefe de Pieter?',['Werk nooit in het weekend','Een goed schip is een stil schip','Een schip vertelt je alles als je goed luistert'],2]
]});

addStory({id:'c14', t:'Eén voor één', te:'Uno por uno', l:[
  ['Op maandagochtend zetten ze in de motorkamer alle machines uit.','El lunes por la mañana apagan todos los equipos de la sala de máquinas.',''],
  ['Daarna zetten ze de machines één voor één weer aan. Lotte staat in de hut, naast het glas.','Luego los vuelven a encender uno por uno. Lotte está en el camarote, junto al vaso.',''],
  ['Nu de koelwaterpomp van generator twee.','Ahora la bomba de agua de refrigeración del generador dos.','Mateo'],
  ['Ja! Nu trilt het water!','¡Sí! ¡Ahora tiembla el agua!','Lotte'],
  ['Dus het is die pomp. Eindelijk weten we waar het geluid begint.','O sea que es esa bomba. Por fin sabemos dónde empieza el ruido.','Mateo'],
  ['Ze hebben de hele dinsdag gewerkt en nieuwe trillingsdempers onder de pomp gezet.','Se han pasado todo el martes trabajando y han puesto soportes antivibratorios nuevos bajo la bomba.',''],
  ['Op woensdag testen ze opnieuw. Het water trilt nog steeds.','El miércoles vuelven a probar. El agua sigue temblando.',''],
  ['Dan belt Victor. Als het vrijdag niet stil is, gaat de proefvaart niet door.','Entonces llama Victor. Si el viernes no hay silencio, no habrá prueba de mar.',''],
  ['’s Avonds zit Mateo moe aan de keukentafel als Ahmed thuiskomt van zijn werk.','Por la noche, Mateo está sentado a la mesa de la cocina, agotado, cuando Ahmed vuelve del trabajo.',''],
  ['Je ziet er slecht uit. Wat is er aan de hand?','Tienes mala cara. ¿Qué pasa?','Ahmed'],
  ['We weten waar het geluid begint, maar niet hoe het in de hut komt.','Sabemos dónde empieza el ruido, pero no cómo llega al camarote.','Mateo'],
  ['Ahmed haalt iets uit zijn tas: zijn stethoscoop.','Ahmed saca algo de su bolsa: su fonendoscopio.',''],
  ['Bij een patiënt luister ik altijd eerst heel goed. Hiermee.','Con un paciente, yo siempre escucho primero con mucha atención. Con esto.','Ahmed'],
  ['Ahmed… mag ik die morgen lenen?','Ahmed… ¿me lo prestas mañana?','Mateo']
], q:[
  ['Wanneer begint het water te trillen?','¿Cuándo empieza a temblar el agua?',['Als Lotte de deur dichtdoet','Als de koelwaterpomp aangaat','Als alle machines uit staan'],1],
  ['Helpen de nieuwe trillingsdempers?','¿Sirven de algo los soportes antivibratorios nuevos?',['Nee, het water trilt nog steeds','Ja, het is nu stil','Dat weten ze nog niet'],0],
  ['Wat wil Mateo van Ahmed lenen?','¿Qué quiere Mateo que le preste Ahmed?',['Zijn fiets','Zijn telefoon','Zijn stethoscoop'],2]
]});

/* ---- js/content/story-3.js ---- */
/* Woorden · historia «Mateo en la Zeemeeuw», temporada 1 · capítulos 15–21 (B1: imperfecto en la narración, conectores, modismos) */

addStory({id:'c15', t:'Luisteren naar het schip', te:'Escuchar al barco', l:[
  ['Mateo had die nacht bijna niet geslapen.','Mateo apenas había dormido esa noche.',''],
  ['Om half zes ’s ochtends was de werf nog donker en helemaal stil.','A las cinco y media de la mañana, el astillero todavía estaba a oscuras y en completo silencio.',''],
  ['Hij zette de koelwaterpomp aan en drukte de stethoscoop van Ahmed tegen de pijp.','Encendió la bomba de refrigeración y apoyó el fonendo de Ahmed contra la tubería.',''],
  ['Het jacht had kilometers aan pijpen en kabels. Het was zoeken naar een speld in een hooiberg.','El yate tenía kilómetros de tuberías y cables. Era como buscar una aguja en un pajar.',''],
  ['Toch gaf hij niet op. Centimeter voor centimeter volgde hij de pijp naar boven.','Aun así, no se rindió. Centímetro a centímetro, siguió la tubería hacia arriba.',''],
  ['Hoe dichter hij bij de hut van de eigenaar kwam, hoe harder het zoemen werd.','Cuanto más se acercaba al camarote del propietario, más fuerte se oía el zumbido.',''],
  ['Achter een wand van donker notenhout was het geluid het sterkst.','Detrás de un panel de nogal oscuro, el ruido era más fuerte que en ningún otro sitio.',''],
  ['Mateo begreep meteen wat dat betekende, en hij werd er niet vrolijk van.','Mateo entendió enseguida lo que eso significaba, y no le hizo ninguna gracia.',''],
  ['Die wand was met de hand gemaakt en had een fortuin gekost. Victor had het hout zelf uitgekozen.','Ese panel estaba hecho a mano y había costado una fortuna. Victor había elegido la madera en persona.',''],
  ['Om te zien wat erachter zat, moest de wand eruit.','Para ver qué había detrás, había que quitar el panel.',''],
  ['Maar dat kon alleen als Victor ermee akkoord ging.','Pero eso solo podía hacerse si Victor daba su visto bueno.',''],
  ['Terwijl hij daar op de vloer lag na te denken, hoorde hij voetstappen op de trap.','Mientras estaba allí tumbado en el suelo, pensando, oyó pasos en la escalera.',''],
  ['Goedemorgen. Mag ik vragen wat u om zes uur ’s ochtends op de vloer doet?','Buenos días. ¿Puedo preguntarle qué hace tumbado en el suelo a las seis de la mañana?','Victor']
], q:[
  ['Waarom was het zoeken naar een speld in een hooiberg?','¿Por qué era como buscar una aguja en un pajar?',['Omdat Ahmed niet wilde helpen','Omdat het jacht kilometers aan pijpen en kabels had','Omdat Mateo zijn bril kwijt was'],1],
  ['Waar was het geluid het sterkst?','¿Dónde era más fuerte el ruido?',['Achter een houten wand in de hut van de eigenaar','In de keuken van het jacht','Op de trap'],0],
  ['Waarom kon Mateo de wand niet zomaar weghalen?','¿Por qué no podía Mateo quitar el panel sin más?',['Omdat hij geen gereedschap had','Omdat Lotte het had verboden','Omdat Victor eerst akkoord moest gaan'],2]
]});

addStory({id:'c16', t:'Negentig procent', te:'Noventa por ciento', l:[
  ['Ik denk dat het geluid achter deze wand zit. Om het zeker te weten, moet hij eruit.','Creo que el ruido está detrás de este panel. Para saberlo con seguridad, hay que quitarlo.','Mateo'],
  ['Weet u het zeker?','¿Está seguro?','Victor'],
  ['Een paar weken eerder had Mateo misschien ‘ja, klaar’ gezegd. Nu niet.','Unas semanas antes, Mateo quizá habría dicho «sí, claro». Ahora no.',''],
  ['Nee, niet helemaal. Ik ben er voor negentig procent zeker van.','No, del todo no. Estoy seguro al noventa por ciento.','Mateo'],
  ['Victor keek hem lang aan. Toen gebeurde er iets wat niemand ooit had gezien: hij glimlachte.','Victor lo miró largo rato. Entonces pasó algo que nadie había visto nunca: sonrió.',''],
  ['Negentig procent, en eerlijk. Dat hoor ik niet vaak. Haal de wand er maar uit.','Noventa por ciento, y con sinceridad. Eso no lo oigo a menudo. Adelante, quiten el panel.','Victor'],
  ['Om negen uur haalde de timmerman voorzichtig de wand weg. Iedereen hield zijn adem in.','A las nueve, el carpintero quitó el panel con mucho cuidado. Todos contuvieron la respiración.',''],
  ['Daar zat het: een metalen beugel om de pijp, zonder rubber. Staal tegen staal.','Ahí estaba: una abrazadera metálica alrededor de la tubería, sin goma. Acero contra acero.',''],
  ['Zo ging elke trilling van de pomp via de pijp naar de wand. En dus naar het bed van de eigenaar.','Así, cada vibración de la bomba pasaba por la tubería hasta el panel. Y, por tanto, hasta la cama del propietario.','Mateo'],
  ['Nadat ze rubber in de beugel hadden gedaan, zetten ze de pomp weer aan.','Después de poner goma en la abrazadera, volvieron a encender la bomba.',''],
  ['Het water in het glas stond stil. Er was geen enkel geluid meer.','El agua del vaso estaba quieta. Ya no se oía nada de nada.',''],
  ['Niet slecht. Dat is echt een pak van mijn hart.','No está mal. Me quito un peso de encima, de verdad.','Pieter'],
  ['Mooi. Dan is er nu eindelijk tijd voor het belangrijkste werk van het jaar: Sinterklaas.','Bien. Así por fin hay tiempo para el trabajo más importante del año: San Nicolás.','Lotte']
], q:[
  ['Wat antwoordde Mateo toen Victor vroeg of hij het zeker wist?','¿Qué contestó Mateo cuando Victor le preguntó si estaba seguro?',['Dat hij het helemaal zeker wist','Dat Lotte het beter wist','Dat hij het voor negentig procent zeker wist'],2],
  ['Wat zat er achter de wand?','¿Qué había detrás del panel?',['Een kapotte pomp','Een beugel zonder rubber','Een gat in de pijp'],1],
  ['Waarom glimlachte Victor?','¿Por qué sonrió Victor?',['Omdat Mateo eerlijk was','Omdat het jacht klaar was','Omdat hij de wand lelijk vond'],0]
]});

addStory({id:'c17', t:'Lootjes trekken', te:'El amigo invisible', l:[
  ['Op maandag hing er een briefje in de kantine: “Sinterklaas op de werf! Volgende week vrijdag, drie uur.”','El lunes había una nota en el comedor: «¡San Nicolás en el astillero! El viernes de la semana que viene, a las tres».',''],
  ['Sinterklaas komt uit Spanje, dus jij kent hem vast wel.','San Nicolás viene de España, así que seguro que lo conoces.','Lotte'],
  ['Vreemd. In Spanje heb ik hem nog nooit gezien.','Qué raro. En España no lo he visto nunca.','Mateo'],
  ['Iedereen trekt een lootje. Voor die persoon maak je een surprise: een cadeautje in een gekke verpakking.','Cada uno saca un papelito. Para esa persona haces una sorpresa: un regalito en un envoltorio original.','Lotte'],
  ['Je schrijft er ook een gedicht bij. Daarin mag je iemand een beetje plagen.','También le escribes un poema. En él puedes tomarle un poco el pelo.','Lotte'],
  ['En niemand mag weten dat het van jou komt. Je zet er alleen ‘Sint’ onder.','Y nadie puede saber que es tuyo. Solo firmas «San Nicolás».','Lotte'],
  ['Grappige gedichten over je collega’s? Dat doen we in Cádiz ook, met carnaval.','¿Poemas graciosos sobre los compañeros? Eso también lo hacemos en Cádiz, en carnaval.','Mateo'],
  ['De lootjes zaten in een oude bouwhelm. Mateo vouwde zijn papiertje open en las: Pieter.','Los papelitos estaban en un casco de obra viejo. Mateo desdobló el suyo y leyó: Pieter.',''],
  ['Aan je gezicht te zien heb je Pieter getrokken.','Por la cara que pones, te ha tocado Pieter.','Lotte'],
  ['Hoe weet je dat? Het is toch geheim?','¿Cómo lo sabes? ¿No era secreto?','Mateo'],
  ['Iedereen die Pieter trekt, kijkt precies zo.','Todo el que saca a Pieter pone esa misma cara.','Lotte'],
  ['Pieter viel altijd met de deur in huis: hij zei meteen wat hij dacht.','Pieter siempre iba al grano: decía enseguida lo que pensaba.',''],
  ['Toch vertelde hij nooit iets over zichzelf. Wat moest Mateo dan in een gedicht zetten?','Sin embargo, de sí mismo nunca contaba nada. ¿Qué iba a poner Mateo en un poema?',''],
  ['Toen wist hij het. Hij pakte zijn telefoon en stuurde Emma een bericht.','Entonces lo supo. Cogió el móvil y le mandó un mensaje a Emma.','']
], q:[
  ['Wat maak je voor de persoon op je lootje?','¿Qué haces para la persona de tu papelito?',['Een taart en een kaart','Een tekening van een schip','Een surprise en een gedicht'],2],
  ['Welke naam trok Mateo?','¿Qué nombre le tocó a Mateo?',['Pieter','Lotte','Victor'],0],
  ['Waarom stuurde Mateo Emma een bericht?','¿Por qué le mandó Mateo un mensaje a Emma?',['Hij wilde met haar naar carnaval','Hij had informatie over Pieter nodig','Hij wilde weten hoe laat de training was'],1]
]});

addStory({id:'c18', t:'De surprise', te:'La sorpresa', l:[
  ['Op donderdagavond lag de keukentafel vol karton, lijm en verf.','El jueves por la noche, la mesa de la cocina estaba llena de cartón, pegamento y pintura.',''],
  ['Sanne had een plan bedacht: een kartonnen jacht, met het cadeau verstopt in de motorkamer.','Sanne había ideado un plan: un yate de cartón, con el regalo escondido en la sala de máquinas.',''],
  ['Ik studeer niet voor niets industrieel ontwerpen.','Por algo estudio diseño industrial.','Sanne'],
  ['Om acht uur kwam Emma binnen, met pepernoten en een hoop informatie over haar vader.','A las ocho llegó Emma, con galletitas de especias y un montón de información sobre su padre.',''],
  ['Hij zingt elke ochtend in de auto. Heel hard en heel vals.','Canta todas las mañanas en el coche. Muy alto y desafinando muchísimo.','Emma'],
  ['En toen hij twaalf was, is zijn zeilbootje gezonken. In een plas van één meter diep.','Y cuando tenía doce años, se le hundió el velero. En una charca de un metro de profundidad.','Emma'],
  ['Perfect! Maar ik heb nog nooit een gedicht in het Nederlands geschreven. Waar begin ik?','¡Perfecto! Pero nunca he escrito un poema en neerlandés. ¿Por dónde empiezo?','Mateo'],
  ['Gewoon beginnen. Je moet de koe bij de horens vatten.','Tú empieza y ya está. Hay que coger la vaca por los cuernos.','Ahmed'],
  ['De koe? In Spanje pakken we de stier bij de horens!','¿La vaca? ¡En España cogemos al toro por los cuernos!','Mateo'],
  ['Hier houden we het rustig. Een koe is al spannend genoeg.','Aquí somos más tranquilos. Con una vaca ya tenemos emoción de sobra.','Ahmed'],
  ['Om middernacht waren de surprise en het gedicht af. Echt af, dit keer.','A medianoche, la sorpresa y el poema estaban terminados. Terminados de verdad, esta vez.',''],
  ['Nog één ding. Mijn vader vroeg mij gisteren óók om hulp.','Una cosa más. Ayer mi padre también me pidió ayuda.','Emma'],
  ['Voor een gedicht over een Spanjaard.','Para un poema sobre un español.','Emma'],
  ['Mateo liet het kartonnen jacht bijna uit zijn handen vallen.','A Mateo casi se le cae de las manos el yate de cartón.','']
], q:[
  ['Hoe zag de surprise eruit?','¿Cómo era la sorpresa?',['Als een kartonnen jacht','Als een grote mok','Als een fiets'],0],
  ['Wat vertelde Emma over haar vader?','¿Qué contó Emma de su padre?',['Dat hij bang is voor water','Dat hij vals zingt in de auto','Dat hij nooit koffie drinkt'],1],
  ['Waarom schrok Mateo aan het eind?','¿Por qué se sobresaltó Mateo al final?',['De lijm was op','Het gedicht was weg','Pieter schreef ook een gedicht over hem'],2]
]});

addStory({id:'c19', t:'Twee gedichten', te:'Dos poemas', l:[
  ['Vrijdagmiddag zat de hele werf in de kantine, tussen de pepernoten en de chocoladeletters.','El viernes por la tarde, todo el astillero estaba en el comedor, entre galletitas de especias y letras de chocolate.',''],
  ['Pieter kreeg het kartonnen jacht. Zoals de traditie het wil, las hij eerst het gedicht hardop voor.','A Pieter le tocó el yate de cartón. Como manda la tradición, primero leyó el poema en voz alta.',''],
  ['Sint zat te denken: wat krijgt Pieter dit jaar? Hij zingt in de auto, heel hard en vals, echt waar!','San Nicolás se puso a pensar: ¿qué le regalo este año a Pieter? Canta en el coche, muy alto y desafinando, ¡de verdad!','Pieter'],
  ['Als jongen zonk zijn bootje in een plas van één meter. Nu bouwt hij jachten, en die drijven gelukkig beter.','De niño, su barquito se hundió en una charca de un metro. Ahora construye yates, y por suerte flotan mejor.','Pieter'],
  ['Daarom krijgt hij een mok met wat hij altijd zegt, als iets eigenlijk geweldig is: ‘niet slecht’.','Por eso le toca una taza con lo que siempre dice cuando algo, en realidad, es genial: «no está mal».','Pieter'],
  ['De hele kantine lag dubbel van het lachen. Zelfs Pieter lachte mee, met een rood hoofd.','Todo el comedor se partía de risa. Hasta Pieter se reía, con la cara roja.',''],
  ['Sint weet wel heel veel over mij. Ik vraag me af van wie hij dat heeft.','San Nicolás sabe muchísimo de mí. Me pregunto quién se lo habrá contado.','Pieter'],
  ['Toen was Mateo aan de beurt. Een beetje nerveus las hij zijn gedicht voor.','Luego le tocó a Mateo. Algo nervioso, leyó su poema en voz alta.',''],
  ['Op zijn eerste dag kwam hij in pak naar de werf, zo netjes en schoon, nog zonder olie en verf.','El primer día vino de traje al astillero, tan limpio y arreglado, todavía sin aceite ni pintura.','Mateo'],
  ['Hij zei een keer ‘klaar’, maar dat was niet waar. Nu weet hij het: ‘duidelijk’ is duidelijk, en ‘klaar’ is klaar.','Una vez dijo «klaar», pero no era verdad. Ahora ya lo sabe: «duidelijk» es claro, y «klaar» es listo.','Mateo'],
  ['Zijn Nederlands is nog niet goed, dat zegt de Sint direct. Maar dankzij hem is het jacht nu stil, en dat is bijna perfect.','Su neerlandés todavía no es bueno, San Nicolás lo dice sin rodeos. Pero gracias a él el yate ya está en silencio, y eso es casi perfecto.','Mateo'],
  ['In zijn pakje zat een regenponcho. Iedereen klapte.','En su paquete había un chubasquero. Todos aplaudieron.',''],
  ['Mateo keek naar Pieter, maar die keek ineens heel geïnteresseerd naar zijn mok.','Mateo miró a Pieter, pero él, de repente, miraba con muchísimo interés su taza.',''],
  ['Die avond stuurde Victor een bericht: “Maandag proefvaart. Windkracht zes. Om zes uur aan boord.”','Esa noche Victor mandó un mensaje: «Lunes, prueba de mar. Viento de fuerza seis. A las seis a bordo».','']
], q:[
  ['Wat zat er in de surprise voor Pieter?','¿Qué había en la sorpresa para Pieter?',['Een regenponcho','Een boek over schepen','Een mok'],2],
  ['Hoe reageerde Pieter op zijn gedicht?','¿Cómo reaccionó Pieter a su poema?',['Hij werd boos en ging weg','Hij lachte mee, met een rood hoofd','Hij zei niets en ging weer werken'],1],
  ['Wie heeft waarschijnlijk het gedicht voor Mateo geschreven?','¿Quién escribió seguramente el poema para Mateo?',['Pieter','Lotte','Victor'],0]
]});

addStory({id:'c20', t:'De proefvaart', te:'La prueba de mar', l:[
  ['Op maandag om zes uur voer het jacht voor het eerst de rivier af, richting zee.','El lunes a las seis, el yate bajó por primera vez por el río, rumbo al mar.',''],
  ['Aan boord waren de kapitein, Pieter, Lotte, Victor, Mateo en een stuk of tien monteurs.','A bordo iban el capitán, Pieter, Lotte, Victor, Mateo y una decena de mecánicos.',''],
  ['Op de Noordzee stond een stevige wind. De golven waren hoog en grijs, en Mateo werd een beetje groen.','En el mar del Norte soplaba un viento fuerte. Las olas eran altas y grises, y Mateo se puso un poco verde.',''],
  ['Een ingenieur uit Cádiz die zeeziek wordt? Ik vertel het aan niemand. Nou ja, bijna niemand.','¿Un ingeniero de Cádiz que se marea? No se lo contaré a nadie. Bueno, a casi nadie.','Lotte'],
  ['In Cádiz is de zee blauw en vriendelijk. Deze zee is gewoon boos.','En Cádiz el mar es azul y amable. Este mar está enfadado, sin más.','Mateo'],
  ['De hele dag testten ze alles: de snelheid, het sturen, de stabilisatoren en de motoren.','Durante todo el día lo probaron todo: la velocidad, la maniobra, los estabilizadores y los motores.',''],
  ['Victor schreef alles op, maar zei bijna niets. Hij keek de kat uit de boom.','Victor lo apuntaba todo, pero apenas decía nada. Veía los toros desde la barrera.',''],
  ['Om vier uur kwam de belangrijkste test: alle machines op vol vermogen, en iedereen in de hut van de eigenaar.','A las cuatro llegó la prueba más importante: todas las máquinas a plena potencia, y todos en el camarote del propietario.',''],
  ['Op het nachtkastje stond weer een glas water. Niemand zei iets.','En la mesilla había otra vez un vaso de agua. Nadie decía nada.',''],
  ['Het water bewoog alleen een beetje mee met de golven. Verder was het stil.','El agua solo se movía un poco con las olas. Por lo demás, silencio.',''],
  ['Ik hoor niets. Helemaal niets.','No oigo nada. Absolutamente nada.','Victor'],
  ['Pieter sloeg Mateo zo hard op de schouder dat die bijna omviel.','Pieter le dio a Mateo una palmada en el hombro tan fuerte que casi lo tira al suelo.',''],
  ['Op de terugweg brak de zon door de wolken. Victor kwam naast Mateo aan de reling staan.','En el viaje de vuelta, el sol asomó entre las nubes. Victor se puso junto a Mateo en la borda.',''],
  ['Mateo, heb je morgen even tijd? Ik wil je graag onder vier ogen spreken.','Mateo, ¿tienes un momento mañana? Me gustaría hablar contigo a solas.','Victor']
], q:[
  ['Hoe voelde Mateo zich op de Noordzee?','¿Cómo se sentía Mateo en el mar del Norte?',['Een beetje zeeziek','Heel blij en rustig','Moe en boos op Lotte'],0],
  ['Wat was de belangrijkste test?','¿Cuál era la prueba más importante?',['De snelheid van het jacht','De test in de hut van de eigenaar','De test van de stabilisatoren'],1],
  ['Wat vroeg Victor op de terugweg?','¿Qué preguntó Victor en el viaje de vuelta?',['Of Mateo zeeziek was','Of het glas nog trilde','Of hij Mateo alleen kon spreken'],2]
]});

addStory({id:'c21', t:'Klare taal', te:'Hablar claro', l:[
  ['De volgende ochtend wachtte Victor in een café aan de Markt in Delft.','A la mañana siguiente, Victor esperaba en un café de la plaza del Mercado, en Delft.',''],
  ['Ik val maar met de deur in huis. De eigenaar laat een tweede jacht bouwen, weer bij Werf Zeemeeuw.','Voy al grano. El propietario va a encargar un segundo yate, otra vez al astillero Zeemeeuw.','Victor'],
  ['Ik zoek iemand voor mijn team. Iemand die klare taal spreekt, ook als het nieuws slecht is.','Busco a alguien para mi equipo. Alguien que hable claro, también cuando las noticias son malas.','Victor'],
  ['Bedoelt u… mij?','¿Se refiere… a mí?','Mateo'],
  ['Zeg maar je. En ja, ik bedoel jou.','Puedes tutearme. Y sí, me refiero a ti.','Victor'],
  ['Mateo wist niet wat hij moest zeggen. Dit was precies het werk waarvan hij altijd had gedroomd.','Mateo no sabía qué decir. Era justo el trabajo con el que siempre había soñado.',''],
  ['Maar dan zou hij aan de andere kant van de tafel zitten, tegenover Pieter en Lotte.','Pero entonces estaría al otro lado de la mesa, frente a Pieter y Lotte.',''],
  ['Denk er rustig over na. In januari wil ik het weten.','Piénsatelo con calma. Quiero saberlo en enero.','Victor'],
  ['Die avond kookte Mateo voor iedereen: Sanne, Ahmed, Emma en Lotte. Om acht uur precies, natuurlijk.','Esa noche Mateo cocinó para todos: Sanne, Ahmed, Emma y Lotte. A las ocho en punto, por supuesto.',''],
  ['Weet je wat ik op je eerste dag dacht? Die Spanjaard in pak houdt het hier geen maand vol.','¿Sabes qué pensé tu primer día? Ese español de traje no aguanta aquí ni un mes.','Lotte'],
  ['Pieter dacht van wel. We hebben er tien euro om gewed, en ik heb verloren.','Pieter pensaba que sí. Nos apostamos diez euros, y perdí.','Lotte'],
  ['Later fietste Mateo langs de gracht naar huis. Het begon weer te regenen, maar dat vond hij niet erg meer.','Más tarde, Mateo volvió a casa en bici junto al canal. Empezó a llover otra vez, pero ya no le importaba.',''],
  ['Toen trilde zijn telefoon. Een bericht van Pieter: “Victor heeft me gebeld. Maandag, acht uur, mijn kantoor.”','Entonces le vibró el móvil. Un mensaje de Pieter: «Me ha llamado Victor. El lunes, a las ocho, en mi despacho».',''],
  ['Mateo stopte op een brug en keek naar het donkere water. Wordt vervolgd…','Mateo se paró en un puente y miró el agua oscura. Continuará…','']
], q:[
  ['Wat bood Victor Mateo aan?','¿Qué le ofreció Victor a Mateo?',['Een reis naar Cádiz','Een plek in zijn team voor het nieuwe jacht','Een baan op een werf in Spanje'],1],
  ['Waarom twijfelde Mateo?','¿Por qué dudaba Mateo?',['Omdat hij terug wilde naar Spanje','Omdat het salaris te laag was','Omdat hij dan tegenover Pieter en Lotte zou zitten'],2],
  ['Waar hadden Lotte en Pieter om gewed?','¿Qué se habían apostado Lotte y Pieter?',['Of Mateo het een maand zou volhouden','Of het tijdens de proefvaart zou stormen','Of Victor ooit zou glimlachen'],0]
]});

/* ---- js/content/vocab-1.js ---- */
/* Woorden · vocabulario nuevo (1): profesiones, cocina, tiendas y fiestas. Formato: `neerlandés=español; …` · alternativas con | */

addVocab('beroepen','Profesiones',1,`het beroep=la profesión; de arts=el médico; de dokter=el doctor; de apotheker=el farmacéutico;
de advocaat=el abogado; de politieagent|de agent=el policía (agente); de brandweerman=el bombero; de kok=el cocinero;
de ober=el camarero; de serveerster=la camarera; de bakker=el panadero; de boer=el granjero; de visser=el pescador;
de timmerman=el carpintero; de loodgieter=el fontanero; de elektricien=el electricista; de monteur=el mecánico;
de bouwvakker=el obrero de la construcción; de schoonmaker=el limpiador (personal de limpieza); de architect=el arquitecto;
de programmeur=el programador; de ontwerper=el diseñador; de wetenschapper=el científico; de onderzoeker=el investigador;
de journalist=el periodista; de kunstenaar=el artista; de zanger=el cantante; de acteur=el actor; de schrijver=el escritor;
de vertaler=el traductor; de secretaresse=la secretaria; de manager=el gerente; de directeur=el director;
de ondernemer=el empresario; de zzp’er=el autónomo; de verkoper=el vendedor; de caissière=la cajera; de postbode=el cartero;
de bezorger=el repartidor; de chauffeur=el conductor (profesional); de piloot=el piloto; de conducteur=el revisor (de tren);
de juf=la maestra (de primaria); de oppas=la canguro (cuida niños); de stagiair=el becario; de vrijwilliger=el voluntario`);

addVocab('keuken','Cocina y utensilios',1,`het theezakje=la bolsita de té; de steelpan=el cazo; de waterkoker=el hervidor de agua;
de kookplaat=la placa de cocina (vitro o inducción); de afzuigkap=la campana extractora; de vriezer=el congelador;
het aanrecht=la encimera; de gootsteen=el fregadero; het kopje=la taza; de mok=la taza grande (tazón); de kom=el cuenco;
de schaal=la fuente (para servir); het dienblad=la bandeja; de theepot=la tetera; het koffiezetapparaat=la cafetera;
de theelepel=la cucharilla; de pollepel=el cucharón; de garde=el batidor de varillas; de rasp=el rallador;
het vergiet=el escurridor; de zeef=el colador; de snijplank=la tabla de cortar; de kurkentrekker=el sacacorchos;
de flesopener=el abrebotellas; de blikopener=el abrelatas; het blik=la lata; de pot=el tarro; het deksel|de deksel=la tapa (de una olla);
de mixer=la batidora; de broodrooster=la tostadora; het servet=la servilleta; het tafelkleed=el mantel;
het bestek=la cubertería (los cubiertos); de theedoek=el paño de cocina; het afwasmiddel=el jabón para fregar los platos;
de prullenbak=el cubo de la basura; de vuilniszak=la bolsa de basura; de weegschaal=la báscula`);

addVocab('winkels','Tiendas y servicios',1,`de drogist=la droguería (higiene y parafarmacia); de boekwinkel=la librería;
de kledingwinkel=la tienda de ropa; de schoenenwinkel=la zapatería; de slagerij=la carnicería; de viswinkel=la pescadería;
de groenteboer=la frutería (el frutero); de kaaswinkel=la quesería; de bloemist=la floristería (el florista);
de juwelier=la joyería (el joyero); de opticien=la óptica (el óptico); de bouwmarkt=la tienda de bricolaje;
het tuincentrum=el centro de jardinería; het warenhuis=los grandes almacenes; het winkelcentrum=el centro comercial;
de stomerij=la tintorería; de garage=el taller mecánico; het tankstation=la gasolinera;
de pinautomaat|de geldautomaat=el cajero automático; de klantenservice=la atención al cliente; de etalage=el escaparate;
het schap=el estante (de una tienda); het mandje=la cesta de la compra; het tasje=la bolsa (de la tienda);
de rij=la cola (fila de gente); het filiaal=la sucursal; het statiegeld=el depósito por envase (te lo devuelven);
de webwinkel=la tienda online; de kapsalon=la peluquería; de speelgoedwinkel=la juguetería;
de snackbar=el puesto de comida rápida (patatas, croquetas); het reisbureau=la agencia de viajes; de marktkraam=el puesto del mercado`);

addVocab('feestdagen','Sinterklaas y fiestas',1,`Sinterklaas=San Nicolás; de pakjesavond=la noche de los regalos (5 de diciembre);
de surprise=el regalo sorpresa camuflado (Sinterklaas); de pepernoot=la galletita especiada (Sinterklaas);
de chocoladeletter=la letra de chocolate; het marsepein|de marsepein=el mazapán; de stoomboot=el barco de vapor;
de intocht=la llegada solemne (de Sinterklaas); de kerst|Kerstmis=la Navidad; de kerstboom=el árbol de Navidad;
de kerstman=Papá Noel; het kerstdiner=la cena de Navidad; de kerstvakantie=las vacaciones de Navidad;
het kerstpakket=la cesta de Navidad (de la empresa); eerste kerstdag=el día de Navidad (25 de diciembre);
tweede kerstdag=el 26 de diciembre (segundo día de Navidad); oudejaarsavond=la Nochevieja;
Oud en Nieuw=Nochevieja y Año Nuevo; de oliebol=el buñuelo (típico de Nochevieja); het vuurwerk=los fuegos artificiales;
het voornemen=el propósito; Koningsdag=el Día del Rey (27 de abril); de vrijmarkt=el mercadillo libre (el Día del Rey);
Pasen=la Pascua (Domingo de Resurrección); het paasei=el huevo de Pascua; Bevrijdingsdag=el Día de la Liberación (5 de mayo);
de jarige=el cumpleañero; de slinger=la guirnalda; de ballon=el globo; de kaars=la vela (de cera);
de felicitatie=la felicitación; het inpakpapier=el papel de regalo; de verrassing=la sorpresa; de wens=el deseo`);

/* ---- js/content/vocab-2.js ---- */
/* Woorden · vocabulario nuevo (2): tecnología, herramientas y oficina, adverbios, noticias y sociedad. */

addVocab('technologie','Tecnología e internet',2,`de telefoon=el teléfono; de mobiel=el móvil; de laptop=el portátil; de oplader=el cargador;
de batterij=la batería (o la pila); de kabel=el cable; de stekker=la clavija (del cable); het apparaat=el aparato;
de knop=el botón (de un aparato); de app=la aplicación (del móvil); het appje=el wasap (mensaje); het bericht=el mensaje;
het nummer=el número (de teléfono, de una casa); het internet=internet; de wifi=el wifi; het bereik=la cobertura (del móvil);
het netwerk=la red (de ordenadores o de contactos); de website=la página web; de link=el enlace; de zoekmachine=el buscador;
de browser=el navegador; het bestand=el archivo (informático); het account|de account=la cuenta de usuario;
de gebruikersnaam=el nombre de usuario; het programma=el programa; de update=la actualización;
de storing=la avería (fallo técnico); de schermafbeelding=la captura de pantalla; de camera=la cámara; de video=el vídeo;
het filmpje=el vídeo corto; het videogesprek=la videollamada; de koptelefoon=los cascos (auriculares);
de luidspreker=el altavoz; de usb-stick=el pendrive; de sociale media=las redes sociales (plural); de pincode=el código PIN;
digitaal=digital; online=en línea (por internet); draadloos=inalámbrico`);

addVocab('gereedschap','Herramientas y oficina',2,`de hamer=el martillo; de spijker=el clavo; de schroevendraaier=el destornillador;
de moer=la tuerca; de boormachine=el taladro; de boor=la broca; de zaag=la sierra; de tang=los alicates;
de moersleutel=la llave de tuercas; de rolmaat=el flexómetro (metro de cinta); de waterpas=el nivel de burbuja;
de ladder=la escalera de mano; de kwast=la brocha; het schuurpapier=la lija; de kit=la silicona (para sellar juntas);
de slijptol=la radial (amoladora); de gereedschapskist=la caja de herramientas; de zaklamp=la linterna;
de stekkerdoos=la regleta; het verlengsnoer=el alargador; de draad=el hilo, el alambre; het plakband=el celo (cinta adhesiva);
de lijm=el pegamento; de schaar=las tijeras; het breekmes=el cúter; de nietmachine=la grapadora; de punaise=la chincheta;
de map=la carpeta; de ordner=el archivador; het notitieblok=el bloc de notas; de stift=el rotulador;
de liniaal=la regla (para medir); de envelop=el sobre; de postzegel=el sello (de correos);
het kopieerapparaat=la fotocopiadora; de veiligheidsbril=las gafas de protección`);

addVocab('bijwoorden','Adverbios útiles',2,`hier=aquí; daar=allí; er=ahí (átono), también para decir «hay» (con is o zijn); binnen=dentro;
buiten=fuera (al aire libre); boven=arriba; beneden=abajo; thuis=en casa; weg=ido, desaparecido (ya no está);
terug=de vuelta; omhoog=hacia arriba; omlaag=hacia abajo; graag=con gusto (con un verbo: me gusta hacerlo);
liever=preferiblemente (con un verbo: prefiero hacerlo); gewoon=simplemente (también: normal, corriente);
helemaal=del todo, completamente; pas=no hasta (no antes de), solo; best=bastante (coloquial);
hartstikke=súper, muy (coloquial); alvast=de antemano, ya (adelantándose); nog steeds=todavía (sigue igual);
steeds=cada vez (más), constantemente; weer=otra vez, de nuevo; opeens=de golpe, de pronto;
voortaan=de ahora en adelante; sindsdien=desde entonces; inmiddels=ya (a estas alturas), entretanto;
allang=hace tiempo que (ya); nauwelijks=apenas; wel=sí (enfático, frente a niet);
niet=no (con verbos y adjetivos, pero ante un sustantivo con een o sin artículo se usa geen); ook niet=tampoco; sowieso=de todas formas;
toevallig=por casualidad; expres=a propósito, adrede; per ongeluk=sin querer, por accidente;
eventueel=si acaso, posiblemente; blijkbaar=por lo visto; precies=exactamente; hardop=en voz alta;
van tevoren=con antelación; overdag=de día; ’s ochtends=por la mañana (por las mañanas);
’s middags=por la tarde (por las tardes); ’s avonds=por la noche (antes de acostarse);
’s nachts=de noche, de madrugada (mientras se duerme); weleens=alguna que otra vez; eerder=antes (más pronto), más bien;
vandaar=de ahí (que); daardoor=debido a eso`);

addVocab('maatschappij','Noticias y sociedad',3,`de politiek=la política; de politicus=el político; de regering=el gobierno;
het kabinet=el gabinete (consejo de ministros); de minister=el ministro; de minister-president=el primer ministro;
de Tweede Kamer=el Congreso (cámara baja holandesa); de partij=el partido político; de verkiezingen=las elecciones (plural);
de stem=la voz, el voto; de koning=el rey; de burgemeester=el alcalde; het land=el país; de samenleving=la sociedad;
de bevolking=la población; de immigrant=el inmigrante; de vluchteling=el refugiado; de integratie=la integración;
de economie=la economía; de inflatie=la inflación; de werkloosheid=el paro (desempleo); de armoede=la pobreza;
de staking=la huelga; de demonstratie=la manifestación; de oorlog=la guerra; de vrede=la paz; de diefstal=el robo;
de inbraak=el robo en una vivienda; het ongeluk=el accidente; de brand=el incendio; de overstroming=la inundación;
de klimaatverandering=el cambio climático; duurzaam=sostenible; de woningnood=la escasez de vivienda;
het onderwijs=la enseñanza; de zorg=la asistencia sanitaria (y el cuidado); het journaal=el telediario;
de reclame=la publicidad; de discussie=el debate (discusión de ideas); het standpunt=la postura (punto de vista);
de maatregel=la medida (decisión oficial); de subsidie=la subvención; de uitkering=la prestación social (paro, ayuda);
de vergunning=el permiso oficial (licencia); de vrijheid=la libertad; de vervuiling=la contaminación`);

/* ---- js/content/vocab-3.js ---- */
/* Woorden · vocabulario nuevo (3): más adjetivos y ampliación de comida, casa, naturaleza, cuerpo, salud y viajes. */

addVocab('adj',null,2,`goed=bueno, bien; slecht=malo, mal; mogelijk=posible; onmogelijk=imposible; normaal=normal;
fout=equivocado, incorrecto; klaar=listo, terminado; bereid=dispuesto; beschikbaar=disponible;
bezet=ocupado (asiento, baño, línea); aanwezig=presente; afwezig=ausente; onzeker=inseguro; gevaarlijk=peligroso;
veilig=seguro (sin peligro); sterk=fuerte; zwak=débil; rijk=rico (con dinero); arm=pobre; heet=muy caliente (que quema);
koel=fresco (de temperatura); ruim=amplio, espacioso; krap=justo, apretado (de espacio, tiempo o dinero);
stil=callado, silencioso; helder=nítido, despejado; prachtig=precioso; heerlijk=delicioso, maravilloso; fijn=agradable, grato;
bijzonder=especial; vreemd=extraño; ouderwets=anticuado; eenvoudig=sencillo; ingewikkeld=complejo, enrevesado;
vorig=anterior, pasado (el año pasado); volgend=siguiente, próximo; laatste=último;
dicht=cerrado (coloquial), denso (niebla); kapot=estropeado, roto (no funciona); gek=loco; dronken=borracho; wakker=despierto;
slaperig=con sueño, somnoliento; dood=muerto; levend=vivo; benieuwd=con ganas de saber (intrigado); geschikt=adecuado, apto;
nuttig=útil; waardevol=valioso; oneerlijk=injusto; lief=cariñoso, encantador; gemeen=malo (con mala intención), mezquino;
stom=estúpido (coloquial); knap=guapo, hábil; sportief=deportista, deportivo; actief=activo; persoonlijk=personal;
privé=privado; openbaar=público (abierto a todos); algemeen=general; gemiddeld=medio, de media;
tijdelijk=temporal (provisional); vast=fijo (también: seguro que); gelijk=igual (con hebben: tener razón);
zelfstandig=independiente; afhankelijk=dependiente; noodzakelijk=imprescindible; onduidelijk=poco claro; logisch=lógico;
eng=que da miedo, siniestro; spannend=emocionante (con suspense); los=suelto; zuinig=ahorrador, que gasta poco;
hevig=intenso, fuerte (lluvia, dolor); ernstig=grave; dringend=urgente; voorzichtig=prudente, con cuidado;
zorgvuldig=cuidadoso, minucioso; slordig=descuidado, desordenado; netjes=ordenado, pulcro; ongezond=poco saludable`);

addVocab('eten',null,1,`het kippenvlees=la carne de pollo; het gehakt=la carne picada; de biefstuk=el filete de ternera; de zalm=el salmón;
de tonijn=el atún; de haring=el arenque; de kroket=la croqueta; de bitterbal=la croqueta redonda (de aperitivo);
de stroopwafel=el gofre de caramelo; de vla=las natillas; de slagroom=la nata montada;
het beleg=lo que se pone en el pan (queso, embutido); de boterham=la rebanada de pan (con algo encima);
de spinazie=las espinacas; de bloemkool=la coliflor; de maïs=el maíz; de spruitjes=las coles de Bruselas (plural);
de kers=la cereza; de ananas=la piña; het deeg=la masa; het toetje|het nagerecht=el postre; het voorgerecht=el entrante;
het hoofdgerecht=el plato principal; het hapje=el picoteo, la tapa; de chips=las patatas fritas de bolsa (plural);
de pinda=el cacahuete; de olijf=la aceituna; het stuk=el trozo, la pieza; de plak=la loncha, la rodaja;
gaar=hecho (bien cocinado); zout=salado; vegetarisch=vegetariano; biologisch=ecológico (bio)`);

addVocab('huis',null,1,`de kamer=la habitación; de woning=la vivienda; het appartement=el piso (apartamento);
het rijtjeshuis=la casa adosada; de voordeur=la puerta de la calle; de brievenbus=el buzón; de klok=el reloj (de pared);
de wekker=el despertador; de televisie|de tv=la televisión; het strijkijzer=la plancha (de ropa);
de was=la colada (ropa para lavar); de bezem=la escoba; de dweil=la bayeta del suelo; de emmer=el cubo;
het schoonmaakmiddel=el producto de limpieza; de vlek=la mancha; het stof=el polvo (suciedad); de schimmel=el moho;
de lekkage=la gotera (fuga de agua); de cv-ketel=la caldera; het licht=la luz; de schakelaar=el interruptor;
het matras|de matras=el colchón; de berging=el trastero`);

addVocab('natuur',null,2,`de bliksem=el rayo; de donder=el trueno; het weerbericht=el parte meteorológico; de hittegolf=la ola de calor;
de droogte=la sequía; de motregen=la llovizna; de ijzel=la lluvia helada (que congela el suelo); de waterval=la cascada;
het dal=el valle; het landschap=el paisaje; de omgeving=el entorno, los alrededores; het weiland=el prado; de tak=la rama;
de tulp=el tulipán; de paddenstoel=la seta; de zonsopgang=el amanecer; de zonsondergang=la puesta de sol;
het noorden=el norte; het zuiden=el sur; het oosten=el este; het westen=el oeste; de zeespiegel=el nivel del mar;
benauwd=bochornoso, agobiante; winderig=ventoso; regenachtig=lluvioso`);

addVocab('lichaam',null,1,`de nagel=la uña; de snor=el bigote; de lever=el hígado; de nier=el riñón; de dij=el muslo;
de kuit=la pantorrilla; de bil=la nalga; het gewricht=la articulación; de pees=el tendón; de zenuw=el nervio;
de rib=la costilla; de ruggengraat=la columna vertebral; de adem=el aliento, la respiración; het zweet=el sudor;
de traan=la lágrima; het litteken=la cicatriz; de kies=la muela; de kaak=la mandíbula`);

addVocab('gezondheid',null,2,`de ziekte=la enfermedad; de patiënt=el paciente; de specialist=el especialista (médico);
de verwijzing=el volante (para el especialista); het spreekuur=el horario de consulta;
de huisartsenpost=las urgencias de atención primaria (fuera de horario); de verloskundige=la matrona;
de keelpijn=el dolor de garganta; de rugpijn=el dolor de espalda; de verkoudheid=el resfriado; het virus=el virus;
de ontsteking=la inflamación; de bloeddruk=la tensión arterial; de pijnstiller=el analgésico; de verstuiking=el esguince;
de breuk=la fractura; de hersenschudding=la conmoción cerebral; het gips=la escayola; allergisch=alérgico;
besmettelijk=contagioso`);

addVocab('reizen',null,2,`de ov-chipkaart=la tarjeta de transporte público; het openbaar vervoer=el transporte público;
de dienstregeling=el horario (de trenes y autobuses); de spits=la hora punta; het verkeer=el tráfico;
de instapkaart=la tarjeta de embarque; de handbagage=el equipaje de mano; de tent=la tienda de campaña;
het verblijf=la estancia; de rondleiding=la visita guiada; de bezienswaardigheid=el lugar de interés turístico;
de plattegrond=el plano (de una ciudad); de route=la ruta; de afstand=la distancia; de fietspomp=la bomba de la bici;
de e-bike=la bici eléctrica; de parkeergarage=el parking (cubierto); de omleiding=el desvío; de zitplaats=el asiento;
de intercity=el tren rápido (interurbano); de sprinter=el tren de cercanías; de rondvaart=el paseo en barco (por los canales);
linksaf=girando a la izquierda; rechtsaf=girando a la derecha; vertraagd=retrasado (tren, vuelo)`);

/* ---- js/content/vocab-4.js ---- */
/* Woorden · vocabulario nuevo (4): ampliación de deporte (waterpolo), trabajo, astillero, estudios, dinero, cultura y carácter. */

addVocab('sport',null,2,`de uitsluiting=la exclusión (expulsión temporal, waterpolo); de vrije worp=el tiro libre;
het schot=el tiro, el disparo; de paal=el poste; de lat=el larguero; het net=la red (de la portería);
de midvoor=el boya (delantero centro de waterpolo); de time-out=el tiempo muerto; de schotklok=el reloj de posesión;
de pass=el pase; de aanval=el ataque; de verdediging=la defensa; de schoolslag=la braza; de borstcrawl=el crol;
de rugslag=el estilo espalda; de zwembaan=la calle (de la piscina); de fluit=el silbato; de warming-up=el calentamiento;
de stand=el marcador (cómo va el partido); de finale=la final; het lid=el socio, el miembro; de contributie=la cuota (de socio);
de vereniging=el club, la asociación; het punt=el punto; de voorsprong=la ventaja (en el marcador); de reservebank=el banquillo`);

addVocab('werk',null,3,`de medewerker=el miembro del personal; het personeel=el personal (la plantilla);
de directie=la dirección (de la empresa); de projectleider=el jefe de proyecto; de werkdag=la jornada laboral;
de werktijden=el horario de trabajo (plural); het uitzendbureau=la ETT (agencia de trabajo temporal);
de overuren=las horas extra (plural); de proeftijd=el periodo de prueba; de opzegtermijn=el plazo de preaviso;
het ontslag=el despido (también: la dimisión); de promotie=el ascenso; de loonsverhoging=la subida de sueldo;
de vakbond=el sindicato; de presentatie=la presentación; het agendapunt=el punto del orden del día;
de notulen=el acta (plural); de werkplek=el puesto de trabajo (el sitio); de carrière=la carrera profesional;
de pauze=la pausa; de vergoeding=la compensación, el reembolso; werkloos=en paro; parttime=a tiempo parcial;
fulltime=a jornada completa`);

addVocab('jachtbouw',null,3,`het casco=el casco desnudo (sin equipar); het spant=la cuaderna; het zonnedek=la cubierta solar;
het zwemplatform=la plataforma de baño; de patrijspoort=el ojo de buey; het luik=la escotilla; de lier=el chigre, el winche;
de stabilisator=el estabilizador; de boegschroef=la hélice de proa; de schroefas=el eje de la hélice;
de bekabeling=el cableado; de leiding=la tubería (también: la dirección, el mando); het hout=la madera;
het teakhout=la madera de teca; de glasvezel=la fibra de vidrio; het bouwnummer=el número de construcción (del casco);
de kade=el muelle; de waterlijn=la línea de flotación; de waterverplaatsing=el desplazamiento;
de stootwil=la defensa (del costado del barco); de nieuwbouw=la obra nueva (construcción nueva); de refit=la reforma (de un yate);
het onderhoud=el mantenimiento; de reparatie=la reparación`);

addVocab('studie',null,2,`de opleiding=la formación (los estudios); de studie=la carrera universitaria; de hoogleraar=el catedrático;
de begeleider=el tutor (de tesis, de prácticas); het studiepunt=el crédito (ECTS); de collegezaal=el aula (de la universidad);
het rooster=el horario (de clases, de turnos); het collegegeld=la matrícula (tasas universitarias); de beurs=la beca;
de herkansing=la recuperación (examen de repesca); de voldoende=el aprobado; de onvoldoende=el suspenso;
het proefschrift=la tesis doctoral; de wiskunde=las matemáticas; de techniek=la técnica, la tecnología;
de praktijk=la práctica; de berekening=el cálculo; de conclusie=la conclusión; de inleiding=la introducción;
de bron=la fuente (de información)`);

addVocab('geld',null,2,`de euro=el euro; de cent=el céntimo; het bankbiljet=el billete (de banco); de portemonnee=el monedero, la cartera;
de kosten=los gastos, el coste (plural); het vakantiegeld=la paga extra de vacaciones; het saldo=el saldo;
de overboeking=la transferencia; de spaarrekening=la cuenta de ahorro; de waarde=el valor; de btw=el IVA;
het budget=el presupuesto (dinero disponible)`);

addVocab('cultuur',null,2,`het gedicht=el poema; de roman=la novela; het festival=el festival; het podium=el escenario;
het publiek=el público (los espectadores); de borrel=la reunión para tomar algo (copas); het bordspel=el juego de mesa;
het beeld=la imagen, la estatua; het kasteel=el castillo; de sfeer=el ambiente; de humor=el sentido del humor;
de stijl=el estilo; het sprookje=el cuento de hadas; de herinnering=el recuerdo; de indruk=la impresión;
het avontuur=la aventura; de gebeurtenis=el acontecimiento; het evenement=el evento`);

addVocab('karakter',null,2,`de woede=la rabia, la ira; de vreugde=la alegría; het verdriet=la tristeza, la pena; de schaamte=la vergüenza;
de trots=el orgullo; de eigenschap=la cualidad (rasgo); het karakter=el carácter; het humeur=el humor (estado de ánimo);
ambitieus=ambicioso; creatief=creativo; sociaal=sociable (también: social); gevoelig=sensible; trouw=leal, fiel;
verwend=mimado; gestrest=estresado`);

/* ---- js/content/vocab-pos.js ---- */
/* Woorden · clase de palabra de las palabras sin artículo, para navegar por adjetivos, adverbios y palabras útiles.
   adj = adjetivo (también participios usados como adjetivo) · adv = adverbio (también los conectores que provocan inversión: daarom, toch…)
   util = conjunciones (en, want, omdat…), preposiciones, pronombres, cuantificadores, interrogativos, numerales, interjecciones.
   Días y meses son sustantivos sin artículo: van en util (listas fijas, como los numerales). hardlopen y scoren son verbos: sin clasificar. */

/* ---------- palabras que ya existían ---------- */
setPos({
/* comida, familia, trabajo, tiempo */
'zoet':'adj','zuur':'adj','bitter':'adj','pittig':'adj','vers':'adj','rauw':'adj',
'getrouwd':'adj','gescheiden':'adj','vrijgezel':'adj','zwanger':'adj','verantwoordelijk':'adj',
'vandaag':'adv','morgen':'adv','gisteren':'adv','overmorgen':'adv','warm':'adj','koud':'adj',
/* días y meses */
'maandag':'util','dinsdag':'util','woensdag':'util','donderdag':'util','vrijdag':'util','zaterdag':'util','zondag':'util',
'januari':'util','februari':'util','maart':'util','april':'util','mei':'util','juni':'util','juli':'util','augustus':'util',
'september':'util','oktober':'util','november':'util','december':'util',
/* adjetivos */
'belangrijk':'adj','interessant':'adj','nieuwsgierig':'adj','moeilijk':'adj','makkelijk':'adj','leuk':'adj','saai':'adj',
'druk':'adj','rustig':'adj','moe':'adj','blij':'adj','boos':'adj','verdrietig':'adj','bang':'adj','ziek':'adj','gezond':'adj',
'duur':'adj','goedkoop':'adj','snel':'adj','langzaam':'adj','groot':'adj','klein':'adj','oud':'adj','jong':'adj','nieuw':'adj',
'mooi':'adj','lelijk':'adj','lekker':'adj','vies':'adj','schoon':'adj','vuil':'adj','eerlijk':'adj','aardig':'adj','raar':'adj',
'handig':'adj','nodig':'adj','duidelijk':'adj','zeker':'adj','trots':'adj','zenuwachtig':'adj','slim':'adj','dom':'adj',
'grappig':'adj','lui':'adj','jaloers':'adj','beleefd':'adj','bezig':'adj','vrij':'adj','gezellig':'adj','lastig':'adj',
'geweldig':'adj','verschrikkelijk':'adj','tevreden':'adj',
/* interrogativos */
'wie':'util','wat':'util','waar':'util','waar vandaan':'util','wanneer':'util','waarom':'util','hoe':'util','hoeveel':'util',
'hoe laat':'util','hoe lang':'util','hoe vaak':'util','hoe oud':'util','welke':'util','welk':'util','wat voor':'util',
/* conectores: conjunciones y preposiciones → util; los que provocan inversión → adv */
'en':'util','maar':'util','of':'util','want':'util','omdat':'util','dus':'util','als':'util','toen':'util','hoewel':'util',
'terwijl':'util','daarom':'adv','bovendien':'adv','toch':'adv','eigenlijk':'adv','misschien':'adv','ook':'adv','nog':'adv',
'al':'adv','meestal':'adv','soms':'adv','altijd':'adv','nooit':'adv','vaak':'adv',
'zodat':'util','doordat':'util','nadat':'util','voordat':'util','totdat':'util','zodra':'util','tenzij':'util','alsof':'util',
'zolang':'util','ondanks':'util','dankzij':'util','vanwege':'util','volgens':'util','behalve':'util','in plaats van':'util',
'bijvoorbeeld':'adv','namelijk':'adv','trouwens':'adv','echter':'adv','daarentegen':'adv','daarnaast':'adv',
'ten eerste':'adv','ten slotte':'adv','kortom':'adv','in elk geval':'adv','hopelijk':'adv','helaas':'adv',
'waarschijnlijk':'adv','natuurlijk':'adv','inderdaad':'adv','zelfs':'adv','vooral':'adv','nogal':'adv','erg':'adv',
'heel':'adv','te':'adv','zo':'adv','even':'adv','juist':'adv','anders':'adv','verder':'adv','normaal gesproken':'adv',
'eerlijk gezegd':'adv','met andere woorden':'adv','aan de ene kant':'adv','aan de andere kant':'adv','wat mij betreft':'adv',
'zoals':'util','net als':'util','dat wil zeggen':'util','over het algemeen':'adv',
/* colores, formas y medidas */
'rood':'adj','blauw':'adj','groen':'adj','geel':'adj','zwart':'adj','wit':'adj','grijs':'adj','bruin':'adj','oranje':'adj',
'roze':'adj','paars':'adj','licht':'adj','donker':'adj','rond':'adj','vierkant':'adj','recht':'adj','krom':'adj','lang':'adj',
'kort':'adj','breed':'adj','smal':'adj','hoog':'adj','laag':'adj','dik':'adj','dun':'adj','zwaar':'adj','vol':'adj',
'leeg':'adj','hard':'adj','zacht':'adj','scherp':'adj','plat':'adj','diep':'adj','ver':'adv','dichtbij':'adv',
/* naturaleza, carácter, salud */
'bewolkt':'adj','zonnig':'adj','nat':'adj','droog':'adj','glad':'adj',
'gelukkig':'adj','eenzaam':'adj','verliefd':'adj','teleurgesteld':'adj','verbaasd':'adj','opgelucht':'adj','bezorgd':'adj',
'geïrriteerd':'adj','ontspannen':'adj','enthousiast':'adj','dankbaar':'adj','verlegen':'adj','brutaal':'adj','gul':'adj',
'gierig':'adj','geduldig':'adj','ongeduldig':'adj','betrouwbaar':'adj','eigenwijs':'adj','streng':'adj','direct':'adj',
'bescheiden':'adj','zelfverzekerd':'adj','nuchter':'adj','behulpzaam':'adj','serieus':'adj','vrolijk':'adj','chagrijnig':'adj',
'hectisch':'adj','betrokken':'adj','bekend':'adj','onbekend':'adj','beroemd':'adj','onvergetelijk':'adj','vervelend':'adj',
'beperkt':'adj','vriendelijk':'adj','onbeleefd':'adj',
'verkouden':'adj','gebroken':'adj','misselijk':'adj','duizelig':'adj','gewond':'adj','uitgeput':'adj','fit':'adj',
/* viajes, dinero, estudios */
'links':'adv','rechts':'adv','rechtdoor':'adv','lek':'adj','onderweg':'adv','verdwaald':'adj',
'contant':'adv','gratis':'adv','waard':'adj','tweedehands':'adj','uitverkocht':'adj','gesloten':'adj','open':'adj',
'vloeiend':'adv',
/* cantidades */
'alles':'util','alle':'util','allemaal':'util','iedereen':'util','niemand':'util','niets':'util','niks':'util','iets':'util',
'iemand':'util','ergens':'adv','nergens':'adv','overal':'adv','veel':'util','weinig':'util','genoeg':'util','te veel':'util',
'een paar':'util','een beetje':'util','sommige':'util','allebei':'util','elke':'util','elk':'util','geen enkele':'util',
'bijna':'adv','bijna niemand':'util','bijna alles':'util','ongeveer':'adv','minstens':'adv','hoogstens':'adv','dubbel':'adj',
'samen':'adv','alleen':'adv','ander':'util','hetzelfde':'util','dezelfde':'util','verschillend':'adj','zoveel':'util',
'meer':'util','minder':'util','nog een':'util',
/* momento */
'nu':'adv','straks':'adv','meteen':'adv','net':'adv','vroeg':'adv','laat':'adv','vroeger':'adv','later':'adv','daarna':'adv',
'eerst':'adv','dan':'adv','binnenkort':'adv','onlangs':'adv','tegenwoordig':'adv','ooit':'adv','zelden':'adv',
'regelmatig':'adv','af en toe':'adv','dagelijks':'adv','wekelijks':'adv','vanavond':'adv','vanochtend':'adv',
'vanmiddag':'adv','vannacht':'adv','volgende week':'adv','vorige week':'adv','een week geleden':'adv','over een week':'adv',
'sinds':'util','tijdens':'util','tot':'util','op tijd':'adv','te laat':'adv','eindelijk':'adv','plotseling':'adv',
'ondertussen':'adv','tot nu toe':'adv','voorlopig':'adv','uiteindelijk':'adv','nog niet':'adv','niet meer':'adv',
/* astillero y papeleo */
'stuurboord':'adv','bakboord':'adv','geldig':'adj','verlopen':'adj','verplicht':'adj'
});

/* ---------- palabras nuevas (vocab-1…4) ---------- */
setPos({
/* tecnología, sociedad, comida, naturaleza, salud, viajes, trabajo, carácter */
'digitaal':'adj','online':'adv','draadloos':'adj','duurzaam':'adj',
'gaar':'adj','zout':'adj','vegetarisch':'adj','biologisch':'adj',
'benauwd':'adj','winderig':'adj','regenachtig':'adj','allergisch':'adj','besmettelijk':'adj',
'linksaf':'adv','rechtsaf':'adv','vertraagd':'adj','werkloos':'adj','parttime':'adv','fulltime':'adv',
'ambitieus':'adj','creatief':'adj','sociaal':'adj','gevoelig':'adj','trouw':'adj','verwend':'adj','gestrest':'adj',
/* adverbios útiles */
'hier':'adv','daar':'adv','er':'adv','binnen':'adv','buiten':'adv','boven':'adv','beneden':'adv','thuis':'adv','weg':'adv',
'terug':'adv','omhoog':'adv','omlaag':'adv','graag':'adv','liever':'adv','gewoon':'adv','helemaal':'adv','pas':'adv',
'best':'adv','hartstikke':'adv','alvast':'adv','nog steeds':'adv','steeds':'adv','weer':'adv','opeens':'adv',
'voortaan':'adv','sindsdien':'adv','inmiddels':'adv','allang':'adv','nauwelijks':'adv','wel':'adv','niet':'adv',
'ook niet':'adv','sowieso':'adv','toevallig':'adv','expres':'adv','per ongeluk':'adv','eventueel':'adv','blijkbaar':'adv',
'precies':'adv','hardop':'adv','van tevoren':'adv','overdag':'adv','’s ochtends':'adv','’s middags':'adv','’s avonds':'adv',
'’s nachts':'adv','weleens':'adv','eerder':'adv','vandaar':'adv','daardoor':'adv',
/* adjetivos nuevos del tema adj */
'goed':'adj','slecht':'adj','mogelijk':'adj','onmogelijk':'adj','normaal':'adj','fout':'adj','klaar':'adj','bereid':'adj',
'beschikbaar':'adj','bezet':'adj','aanwezig':'adj','afwezig':'adj','onzeker':'adj','gevaarlijk':'adj','veilig':'adj',
'sterk':'adj','zwak':'adj','rijk':'adj','arm':'adj','heet':'adj','koel':'adj','ruim':'adj','krap':'adj','stil':'adj',
'helder':'adj','prachtig':'adj','heerlijk':'adj','fijn':'adj','bijzonder':'adj','vreemd':'adj','ouderwets':'adj',
'eenvoudig':'adj','ingewikkeld':'adj','vorig':'adj','volgend':'adj','laatste':'adj','dicht':'adj','kapot':'adj','gek':'adj',
'dronken':'adj','wakker':'adj','slaperig':'adj','dood':'adj','levend':'adj','benieuwd':'adj','geschikt':'adj','nuttig':'adj',
'waardevol':'adj','oneerlijk':'adj','lief':'adj','gemeen':'adj','stom':'adj','knap':'adj','sportief':'adj','actief':'adj',
'persoonlijk':'adj','privé':'adj','openbaar':'adj','algemeen':'adj','gemiddeld':'adj','tijdelijk':'adj','vast':'adj',
'gelijk':'adj','zelfstandig':'adj','afhankelijk':'adj','noodzakelijk':'adj','onduidelijk':'adj','logisch':'adj','eng':'adj',
'spannend':'adj','los':'adj','zuinig':'adj','hevig':'adj','ernstig':'adj','dringend':'adj','voorzichtig':'adj',
'zorgvuldig':'adj','slordig':'adj','netjes':'adj','ongezond':'adj'
});

/* ---- js/content/vocab-verbs.js ---- */
/* Woorden · verbos nuevos: [infinitivo, español, pasado sg, pasado pl, participio, auxiliar]. Separables: pasado en dos palabras. */

addVerbs([
['volgen','seguir (también: hacer un curso)','volgde','volgden','gevolgd','hebben'],['hoeven','no tener que (con niet o geen)','hoefde','hoefden','gehoeven|gehoefd','hebben'],
['durven','atreverse','durfde','durfden','gedurfd','hebben'],['pakken','coger, agarrar','pakte','pakten','gepakt','hebben'],
['draaien','girar, dar vueltas','draaide','draaiden','gedraaid','hebben'],['vullen','llenar','vulde','vulden','gevuld','hebben'],
['groeien','crecer','groeide','groeiden','gegroeid','zijn'],['eindigen','terminar (llegar a su fin)','eindigde','eindigden','geëindigd','hebben / zijn'],
['ophouden','cesar, dejar de (con met)','hield op','hielden op','opgehouden','hebben / zijn'],['verlaten','abandonar, salir de (un lugar)','verliet','verlieten','verlaten','hebben'],
['bereiken','alcanzar, lograr','bereikte','bereikten','bereikt','hebben'],['verbeteren','mejorar, corregir','verbeterde','verbeterden','verbeterd','hebben / zijn'],
['ontwikkelen','desarrollar','ontwikkelde','ontwikkelden','ontwikkeld','hebben'],['veroorzaken','causar, provocar','veroorzaakte','veroorzaakten','veroorzaakt','hebben'],
['ontbreken','faltar','ontbrak','ontbraken','ontbroken','hebben'],['vermijden','evitar','vermeed','vermeden','vermeden','hebben'],
['herkennen','reconocer','herkende','herkenden','herkend','hebben'],['snappen','pillar (entender)','snapte','snapten','gesnapt','hebben'],
['twijfelen','dudar','twijfelde','twijfelden','getwijfeld','hebben'],['dromen','soñar (dormido o despierto)','droomde','droomden','gedroomd','hebben'],
['wensen','desear','wenste','wensten','gewenst','hebben'],['vergeven','perdonar','vergaf','vergaven','vergeven','hebben'],
['klagen','quejarse','klaagde','klaagden','geklaagd','hebben'],['schreeuwen','gritar','schreeuwde','schreeuwden','geschreeuwd','hebben'],
['roepen','llamar (en voz alta)','riep','riepen','geroepen','hebben'],['groeten','saludar','groette','groetten','gegroet','hebben'],
['redden','salvar, rescatar (también: arreglárselas)','redde','redden','gered','hebben'],['kwijtraken','perder (extraviar)','raakte kwijt','raakten kwijt','kwijtgeraakt','zijn'],
['bewaren','guardar, conservar','bewaarde','bewaarden','bewaard','hebben'],['aanraken','tocar (con la mano)','raakte aan','raakten aan','aangeraakt','hebben'],
['wisselen','cambiar (dinero, de jugador)','wisselde','wisselden','gewisseld','hebben'],['opgroeien','criarse','groeide op','groeiden op','opgegroeid','zijn'],
['overlijden','fallecer','overleed','overleden','overleden','zijn'],['langskomen','pasarse (por casa de alguien)','kwam langs','kwamen langs','langsgekomen','zijn'],
['meegaan','ir con, acompañar','ging mee','gingen mee','meegegaan','zijn'],['thuiskomen','llegar a casa','kwam thuis','kwamen thuis','thuisgekomen','zijn'],
['logeren','quedarse a dormir (en casa de alguien)','logeerde','logeerden','gelogeerd','hebben'],['oversteken','cruzar (la calle)','stak over','staken over','overgestoken','hebben / zijn'],
['afslaan','girar (en un cruce), rechazar (una oferta)','sloeg af','sloegen af','afgeslagen','hebben / zijn'],['parkeren','aparcar','parkeerde','parkeerden','geparkeerd','hebben'],
['landen','aterrizar','landde','landden','geland','zijn'],['dekken','poner (la mesa), cubrir','dekte','dekten','gedekt','hebben'],
['stofzuigen','pasar la aspiradora','stofzuigde','stofzuigden','gestofzuigd','hebben'],['strijken','planchar','streek','streken','gestreken','hebben'],
['drogen','secar, secarse','droogde','droogden','gedroogd','hebben / zijn'],['opwarmen','calentar (comida o antes del deporte)','warmde op','warmden op','opgewarmd','hebben'],
['smaken','saber (tener sabor)','smaakte','smaakten','gesmaakt','hebben'],['lusten','gustar (una comida)','lustte','lustten','gelust','hebben'],
['opendoen','abrir la puerta (a quien llama), abrir (coloquial)','deed open','deden open','opengedaan','hebben'],['ophangen','colgar (el teléfono, un cuadro)','hing op','hingen op','opgehangen','hebben'],
['verhuren','alquilar (dar en alquiler)','verhuurde','verhuurden','verhuurd','hebben'],['scheiden','separar (la basura), divorciarse','scheidde','scheidden','gescheiden','hebben / zijn'],
['ademen','respirar','ademde','ademden','geademd','hebben'],['overgeven','vomitar','gaf over','gaven over','overgegeven','hebben'],
['genezen','curar, curarse','genas','genazen','genezen','hebben / zijn'],['behandelen','tratar (a alguien, a un paciente)','behandelde','behandelden','behandeld','hebben'],
['sporten','hacer deporte','sportte','sportten','gesport','hebben'],['schaatsen','patinar sobre hielo','schaatste','schaatsten','geschaatst','hebben / zijn'],
['verdedigen','defender','verdedigde','verdedigden','verdedigd','hebben'],['aanvallen','atacar','viel aan','vielen aan','aangevallen','hebben'],
['vergaderen','estar reunido (tener una reunión)','vergaderde','vergaderden','vergaderd','hebben'],['bespreken','hablar de (en una reunión), comentar','besprak','bespraken','besproken','hebben'],
['bevestigen','confirmar, fijar','bevestigde','bevestigden','bevestigd','hebben'],['annuleren','anular (una reserva, un pedido)','annuleerde','annuleerden','geannuleerd','hebben'],
['uitstellen','aplazar, posponer','stelde uit','stelden uit','uitgesteld','hebben'],['afronden','finalizar, rematar (y redondear)','rondde af','rondden af','afgerond','hebben'],
['aanpassen','adaptar, ajustar','paste aan','pasten aan','aangepast','hebben'],['toevoegen','añadir','voegde toe','voegden toe','toegevoegd','hebben'],
['verwijderen','eliminar, borrar','verwijderde','verwijderden','verwijderd','hebben'],['opslaan','guardar (un archivo), almacenar','sloeg op','sloegen op','opgeslagen','hebben'],
['inloggen','iniciar sesión','logde in','logden in','ingelogd','hebben'],['appen','mandar un wasap','appte','appten','geappt','hebben'],
['opladen','cargar (la batería)','laadde op','laadden op','opgeladen','hebben'],['printen','imprimir','printte','printten','geprint','hebben'],
['leiden','dirigir, liderar','leidde','leidden','geleid','hebben'],['onderhandelen','negociar','onderhandelde','onderhandelden','onderhandeld','hebben'],
['vervangen','sustituir, reemplazar','verving','vervingen','vervangen','hebben'],['uitvoeren','llevar a cabo, ejecutar','voerde uit','voerden uit','uitgevoerd','hebben'],
['waarschuwen','avisar, advertir','waarschuwde','waarschuwden','gewaarschuwd','hebben'],['weigeren','negarse, rechazar','weigerde','weigerden','geweigerd','hebben'],
['toestaan','permitir','stond toe','stonden toe','toegestaan','hebben'],['oplossen','resolver, disolver','loste op','losten op','opgelost','hebben'],
['uitzoeken','averiguar, escoger','zocht uit','zochten uit','uitgezocht','hebben'],['opschrijven','apuntar (por escrito)','schreef op','schreven op','opgeschreven','hebben'],
['inleveren','entregar (un trabajo, una llave)','leverde in','leverden in','ingeleverd','hebben'],['vertalen','traducir','vertaalde','vertaalden','vertaald','hebben'],
['uitspreken','pronunciar','sprak uit','spraken uit','uitgesproken','hebben'],['afstuderen','terminar la carrera, graduarse','studeerde af','studeerden af','afgestudeerd','zijn'],
['aanvragen','solicitar (un permiso, un documento)','vroeg aan','vroegen aan','aangevraagd','hebben'],['opsturen','enviar por correo','stuurde op','stuurden op','opgestuurd','hebben'],
['verlengen','prorrogar, renovar','verlengde','verlengden','verlengd','hebben'],['overmaken','transferir (dinero)','maakte over','maakten over','overgemaakt','hebben'],
['trakteren','invitar (pagar o llevar algo para todos)','trakteerde','trakteerden','getrakteerd','hebben'],['thuiswerken','trabajar desde casa','werkte thuis','werkten thuis','thuisgewerkt','hebben'],
['sneeuwen','nevar','sneeuwde','sneeuwden','gesneeuwd','hebben'],['waaien','soplar (el viento)','waaide|woei','waaiden|woeien','gewaaid','hebben']
]);
