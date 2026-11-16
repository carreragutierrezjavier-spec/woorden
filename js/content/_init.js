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
