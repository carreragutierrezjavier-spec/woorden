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
