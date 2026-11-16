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
 ['Bijna, alleen de verwarming doet niet.',0,'«Funcionar» se dice het doen: «de verwarming doet het niet».'],
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
 ['Leg hem maar in de schuur achter het huis.',0,'Una bici se deja de pie: zetten; leggen es dejarla tumbada.'],
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
 ['Nee, ze zeggen altijd precies wat ze denken.',0,'«Nee» diría que no lo crees, y luego les das la razón.'],
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
