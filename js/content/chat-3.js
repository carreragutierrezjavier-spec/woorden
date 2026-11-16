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
 ['Nog niet, pas in twee weken.',0,'«Dentro de dos semanas» es over twee weken.']],
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
 ['Nee, nog nooit, maar ik wil graag er heen.',0,'er va pronto, antes de graag: «ik wil er graag heen».'],
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
 ['Ja, we vertrekken een uur laat.',0,'«Una hora más tarde» es een uur later.'],
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
