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
