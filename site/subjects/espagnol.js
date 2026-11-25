/* Espagnol (niveau 2, BA S3). Final exam (35%): all the course content.
   Built from the course material in sources/espagnol/: the 2026-27 programme (Vitamina A2 units 7 and 8,
   plus a "Socios" review unit) and the "Cuadernillo" (Vitamina A2 workbook pages 50–63, "Fuera del entorno
   laboral: Las compras", Socios unit 3 pages 37–45, "Ejercicios para comprobar el nivel"). No answer key exists:
   every answer is given by the site and explained. Topics: t7 (Tema 7), t8 (Tema 8), t9 (Repaso).
   Ids: q… quiz, c… cards, x-t<n>-… exercises. Never renumber ids. */
(function(){
const {T,F,EX,TRAP,NOTE,esc}=Rev.h;

/* ---------- verb forms (one source for the sheets, the exercises and the verb drill) ---------- */
const P=['yo','tú','él / ella / usted','nosotros/as','vosotros/as','ellos / ellas / ustedes'];
const sp=s=>s.split(s.includes('|')?'|':' ');
const reg=(inf,ends)=>ends.map(e=>inf.slice(0,-2)+e);
const IMP_AR=['aba','abas','aba','ábamos','abais','aban'],IMP_ER=['ía','ías','ía','íamos','íais','ían'];
const IMP_IRR={ser:sp('era eras era éramos erais eran'),ir:sp('iba ibas iba íbamos ibais iban'),ver:sp('veía veías veía veíamos veíais veían')};
const imperf=v=>IMP_IRR[v]||reg(v,v.endsWith('ar')?IMP_AR:IMP_ER);
const IND_AR=['é','aste','ó','amos','asteis','aron'],IND_ER=['í','iste','ió','imos','isteis','ieron'];
const strong=(st,j)=>[st+'e',st+'iste',st+'o',st+'imos',st+'isteis',st+(j?'eron':'ieron')];
const IND_IRR={ser:sp('fui fuiste fue fuimos fuisteis fueron'),ir:sp('fui fuiste fue fuimos fuisteis fueron'),
  tener:strong('tuv'),estar:strong('estuv'),poder:strong('pud'),poner:strong('pus'),saber:strong('sup'),querer:strong('quis'),venir:strong('vin'),
  hacer:sp('hice hiciste hizo hicimos hicisteis hicieron'),decir:strong('dij',1),traer:strong('traj',1),
  dar:sp('di diste dio dimos disteis dieron'),ver:sp('vi viste vio vimos visteis vieron'),leer:sp('leí leíste leyó leímos leísteis leyeron'),
  pedir:sp('pedí pediste pidió pedimos pedisteis pidieron'),dormir:sp('dormí dormiste durmió dormimos dormisteis durmieron'),
  jugar:sp('jugué jugaste jugó jugamos jugasteis jugaron'),llegar:sp('llegué llegaste llegó llegamos llegasteis llegaron'),
  buscar:sp('busqué buscaste buscó buscamos buscasteis buscaron'),empezar:sp('empecé empezaste empezó empezamos empezasteis empezaron')};
const indef=v=>IND_IRR[v]||reg(v,v.endsWith('ar')?IND_AR:IND_ER);
const PRES={costar:'cuesto cuestas cuesta costamos costáis cuestan',probar:'pruebo pruebas prueba probamos probáis prueban',
  encontrar:'encuentro encuentras encuentra encontramos encontráis encuentran',devolver:'devuelvo devuelves devuelve devolvemos devolvéis devuelven',
  envolver:'envuelvo envuelves envuelve envolvemos envolvéis envuelven',poder:'puedo puedes puede podemos podéis pueden',
  querer:'quiero quieres quiere queremos queréis quieren',preferir:'prefiero prefieres prefiere preferimos preferís prefieren',
  tener:'tengo tienes tiene tenemos tenéis tienen',valer:'valgo vales vale valemos valéis valen',pedir:'pido pides pide pedimos pedís piden',
  vestirse:'me visto|te vistes|se viste|nos vestimos|os vestís|se visten',probarse:'me pruebo|te pruebas|se prueba|nos probamos|os probáis|se prueban',
  hacer:'hago haces hace hacemos hacéis hacen',poner:'pongo pones pone ponemos ponéis ponen',ir:'voy vas va vamos vais van',dar:'doy das da damos dais dan',
  conocer:'conozco conoces conoce conocemos conocéis conocen',soler:'suelo sueles suele solemos soléis suelen',seguir:'sigo sigues sigue seguimos seguís siguen',
  empezar:'empiezo empiezas empieza empezamos empezáis empiezan'};
const pres=v=>sp(PRES[v]);
// affirmative imperative, [vosotros, ustedes] (the two persons of "En la maleta", workbook p. 55)
const IMPV={llevar:['llevad','lleven'],probar:['probad','prueben'],beber:['bebed','beban'],descubrir:['descubrid','descubran'],hacer:['haced','hagan'],
  ir:['id','vayan'],relajarse:['relajaos','relájense'],comprar:['comprad','compren'],reservar:['reservad','reserven'],visitar:['visitad','visiten'],
  poner:['poned','pongan'],ponerse:['poneos','pónganse'],acordarse:['acordaos','acuérdense'],venir:['venid','vengan'],pedir:['pedid','pidan'],
  volver:['volved','vuelvan'],salir:['salid','salgan'],decir:['decid','digan'],tener:['tened','tengan'],escribir:['escribid','escriban']};
const GER={trabajar:'trabajando',comprar:'comprando',estudiar:'estudiando',comer:'comiendo',hacer:'haciendo',ver:'viendo',vivir:'viviendo',escribir:'escribiendo',
  leer:'leyendo',traer:'trayendo',oír:'oyendo',ir:'yendo',dormir:'durmiendo',pedir:'pidiendo',decir:'diciendo',venir:'viniendo',seguir:'siguiendo',vestir:'vistiendo'};
const IMP_VERBS=['hablar','trabajar','jugar','escuchar','estudiar','llevar','viajar','estar','comer','beber','tener','querer','hacer','saber','poder','leer','volver','vivir','salir','escribir','ser','ir','ver'];
const IND_VERBS=['comprar','viajar','terminar','cocinar','trabajar','comer','beber','volver','conocer','vivir','escribir','salir','abrir'].concat(Object.keys(IND_IRR).filter(v=>v!=='ir'));
const conjTable=(verbs,fn)=>T(['Persona'].concat(verbs.map(v=>`<i>${v}</i>`)),P.map((p,i)=>[p].concat(verbs.map(v=>fn(v)[i]))));

/* gap text: "[[answer/variant|hint]]" → numbered blank + one short-answer part per blank */
const GAP=(intro,text)=>{let n=0;const parts=[];
  const html=text.replace(/\[\[(.+?)\|(.*?)\]\]/g,(m,ans,hint)=>{n++;parts.push({label:`(${n})${hint?' '+hint:''}`,accept:ans.split('/')});return `<b>(${n})</b> ________${hint?` <i>(${hint})</i>`:''}`});
  return {q:(intro?`<p>${intro}</p>`:'')+`<p>${html}</p>`,parts}};

/* ---------- topic sheets ---------- */
const SHEETS={};
SHEETS.t7=`
<div class="eyebrow">Tema 7 · Vitamina A2</div><h2>De compras</h2>
<p class="lede">Goal: talk about presents, compare people and things, shop for clothes and shoes politely, give recommendations, and use the indirect object pronouns <b>le / les</b>. Programme: “Hablar de regalos · Hacer comparaciones · Pedir información en una tienda · Hacer recomendaciones · Pronombres de OI (le y les) · Comparativos: tan y tanto/a/os/as · Fórmulas de cortesía: Quería… · Léxico de ropa y accesorios”.</p>

<h3>1. Indirect object pronouns (pronombres de objeto indirecto)</h3>
<p>The indirect object is the person who <b>receives</b> something (to whom? for whom?).</p>
${T(['Persona','Pronombre OI','Ejemplo'],[['yo','me','¿Y a mí qué <b>me</b> vas a regalar?'],['tú','te','A ti <b>te</b> voy a hacer el mejor regalo.'],['él / ella / usted','le','A mamá <b>le</b> podemos regalar una entrada.'],['nosotros/as','nos','Ellos a nosotros tampoco <b>nos</b> regalan nunca nada.'],['vosotros/as','os','¿Qué <b>os</b> regalan vuestros padres?'],['ellos / ellas / ustedes','les','A ellas también <b>les</b> gusta el fútbol.']])}
<ul><li><b>Recuerda</b> (workbook p. 50): the indirect object is often <b>repeated</b>: <i><u>A Ignacio</u> <b>le</b> regalamos una entrada para la ópera.</i> The pronoun is compulsory; “a Ignacio” is added for clarity or emphasis.</li>
<li><b>Position</b>: before the conjugated verb (<i>Le podemos regalar…</i>) or attached to the infinitive (<i>Podemos regalarle…</i>). Both are correct.</li>
<li><b>gustar, encantar, interesar, quedar</b> work with the indirect object: <i>A Larissa <b>le</b> encanta la moda. ¿Qué tal <b>le</b> quedan? <b>Les</b> interesa la jardinería.</i></li>
<li><b>le</b> = also <b>usted</b> (polite form): <i>¿En qué puedo ayudar<b>le</b>?</i></li></ul>
${TRAP('<b>le</b> (singular) vs <b>les</b> (plural) follows the person who receives, not the thing: <i>A la familia <b>le</b> regalamos…</i> (la familia is singular); <i>A Tita y a Juan, ¿qué <b>les</b> vamos a comprar?</i>')}
${EX('Workbook p. 50, ex. 1: Luis y Clara','worked example',`<p>Answers in order: (1) <b>le</b> (a la familia) · (2) <b>le</b> (a mamá) · (3) <b>me</b> gusta la idea (Luis himself; <b>le</b> gusta, “mamá will like it”, also makes sense) · (4) <b>le</b> (a papá) · (5) <b>le</b> (a Rosana) · (6) <b>les</b> (a ellas) · (7) <b>les</b> (a Tita y a Juan) · (8) <b>nos</b> (a nosotros) · (9) <b>me</b> (a mí) · (10) <b>te</b> (a ti).</p>`)}

<h3>2. Comparisons (comparativos)</h3>
${T(['Type','Structure','Example (workbook p. 51)'],[
['Equality + adjective / adverb','<b>tan</b> + adj. / adv. + <b>como</b>','María es <b>tan</b> alta <b>como</b> tú.'],
['Equality + noun','<b>tanto / tanta / tantos / tantas</b> + noun + <b>como</b>','No tengo <b>tanto</b> tiempo <b>como</b> antes.'],
['Equality + verb','verb + <b>tanto como</b>','Trabajo <b>tanto como</b> Jimena.'],
['Inequality + adj. / adv. / noun','<b>más / menos</b> + … + <b>que</b>','Hay <b>más</b> libros <b>que</b> cuadernos.'],
['Inequality + verb','verb + <b>más / menos que</b>','Leo <b>más que</b> tú.']])}
<ul><li><b>tanto</b> agrees with the noun: <i>tant<b>os</b> regalos, tant<b>a</b> paciencia, tant<b>as</b> personas, tant<b>o</b> dinero</i>.</li>
<li>Before an adjective, even with a noun after it, use <b>tan</b>: <i>no saca <b>tan</b> buenas notas como ella</i>.</li></ul>
${NOTE('<b>Outside the workbook:</b> the irregular comparatives <b>mejor</b> (más bueno), <b>peor</b> (más malo), <b>mayor</b> (older), <b>menor</b> (younger). Needed for ex. 4 (David, 29, is <b>mayor que</b> Julián, 25).')}
${TRAP('Equality uses <b>como</b>, inequality uses <b>que</b>. <i>✗ tan alto que</i> · <i>✗ más alto como</i>.')}
${EX('Workbook p. 50–51, ex. 3 and 4','worked example',`<p><b>Ex. 3</b>: 1 <b>tantos</b> regalos · 2 <b>tan</b> interesante · 3 <b>tanta</b> paciencia · 4 <b>tantas</b> personas · 5 estudia <b>tanto</b> como Isabel, pero no saca <b>tan</b> buenas notas · 6 <b>tanto</b> dinero · 7 no gasto <b>tanto</b> como antes · 8 <b>tan</b> rápido como pudimos.</p>
<p><b>Ex. 4</b> (David / Julián): 1 David tiene <b>tantos hermanos como</b> Julián. 2 David es <b>mayor que</b> Julián (Julián es <b>menor que</b> David). 3 David es <b>tan alto como</b> Julián. 4 David duerme <b>más (horas) que</b> Julián. 5 Julián bebe <b>más café que</b> David.</p>`)}

<h3>3. In a shop (en una tienda): fórmulas de cortesía</h3>
${T(['Dependiente/a','Cliente'],[
['Buenas tardes, ¿en qué puedo ayudarle? / ¿qué quería?','<b>Quería</b> unos pantalones de pana. (polite imperfect = “I would like”)'],
['¿De qué talla? / ¿Qué talla tiene? (clothes)','De la talla 42. / La 48, creo.'],
['¿Qué número tiene? (shoes)','El 39. / ¿Tienen el número 39?'],
['¿De qué color?','Azul o marrón.'],
['¿Quiere probárselos? Pase al probador.','¿Puedo probármelos?'],
['¿Qué tal le quedan?','Me quedan bien / grandes / pequeños / un poco estrechos. ¿Tiene una talla más?'],
['Esta vale 14 euros. / Estos cuestan 79 euros.','¿Cuánto cuesta? / ¿Cuánto cuestan? / ¿Cuánto vale?'],
['¿Cómo va a pagar, en efectivo o con tarjeta?','Con tarjeta. / En efectivo.'],
['Por supuesto.','¿Me lo envuelve para regalo, por favor?'],
['Sí, en un plazo de quince días puede devolverlo.','Lo devuelvo presentando este tique, ¿verdad?'],
['—','De acuerdo. <b>Me lo / la / los / las llevo.</b>']])}
${TRAP('<b>Me los llevo</b> agrees with the object: los zapatos → <i>me <b>los</b> llevo</i>; la novela → <i>me <b>la</b> llevo</i>. Clothes have a <b>talla</b>, shoes a <b>número</b>.')}
<p><b>Present tense of shop verbs</b> (workbook p. 9, “Vamos de compras”): many are stem-changing (o → ue, e → i) and <i>valer</i> has <i>valgo</i>.</p>
${conjTable(['costar','valer','devolver','envolver','probarse','vestirse'],pres)}
${EX('Workbook p. 52, ex. 7: dialogue in a fashion shop (order)','worked example',`<p>a Buenas tardes, ¿en qué puedo ayudarlo? → f Pues… estoy buscando unos pantalones grises. → d Muy bien, tenemos muchos pantalones grises esta temporada. ¿Qué le parecen estos? → h Son muy bonitos. → b ¿Qué talla tiene? → j La 48, creo. → g Aquí tiene. → c ¿Qué tal le quedan? → i Uy, pues me quedan un poco estrechos. ¿Tiene una talla más? → e Sí, mire, aquí tiene. → k Ah, estos me quedan muy bien. ¡Me los llevo!</p>`)}
${EX('Workbook p. 9, ex. 1: Vamos de compras (presente)','worked example',`<p>a. ¿Cuánto <b>cuesta</b> este televisor? · ¿Este? <b>Vale</b> 1200 euros. · ¿<b>Tienen</b> otros más baratos? · Sí, <b>tenemos</b> estos otros de aquí que <b>valen</b> entre 600 y 800 euros.<br>b. Ya veo, <b>es</b> una marca buena y <b>veo</b> que su precio no <b>es</b> muy caro. ¿Me lo <b>envuelve</b> para regalo? · Si mi amiga prefiere otro modelo, lo <b>devuelvo</b> presentando este tique, ¿verdad? · Sí, en un plazo de quince días <b>puede</b> devolverlo.</p>`)}

<h3>4. Recommendations: the imperative (vosotros / ustedes)</h3>
<p>Workbook p. 55, “En la maleta”: travel tips for London and Cairo, written with the affirmative imperative.</p>
<ul><li><b>vosotros/as</b>: infinitive, <b>-r → -d</b>: llevar → <b>llevad</b>, beber → <b>bebed</b>, ir → <b>id</b>. Reflexive verbs drop the <i>d</i>: relajar(se) → <b>relajaos</b>, acordarse → <b>acordaos</b>.</li>
<li><b>ustedes</b>: the vowel swaps (-ar → <b>-en</b>, -er/-ir → <b>-an</b>), built on the <i>yo</i> form of the present: llevo → <b>lleven</b>, hago → <b>hagan</b>, pongo → <b>pongan</b>, pruebo → <b>prueben</b>; ir → <b>vayan</b>.</li>
<li>Pronouns are attached to the affirmative imperative, with a written accent when needed: <b>relájense</b>, <b>pónganse</b>, <b>acuérdense</b>.</li></ul>
${T(['Infinitivo','vosotros/as','ustedes'],Object.keys(IMPV).slice(0,14).map(v=>[v].concat(IMPV[v])))}
${NOTE('<b>Outside the workbook:</b> the negative imperative uses other forms (<i>no llevéis, no lleven</i>); it is not practised in the course material.')}
${EX('Workbook p. 55, ex. 2 and 4: London or Cairo, vosotros ↔ ustedes','worked example',`<p><b>Ex. 2</b>: chaqueta por la noche (temperatures drop) <b>EC</b> · excursión al desierto <b>EC</b> · comida callejera india, coreana, peruana <b>L</b> · el zoco <b>EC</b> · cientos de museos <b>L</b> · beber mucha agua para no deshidrataros <b>EC</b> · relajarse en los verdes parques <b>L</b>.</p>
<p><b>Ex. 4</b>: 1 Si <b>quieren</b> probar la paella, <b>vayan</b> al restaurante Malvarrosa. 2 Para no tener que esperar colas, <b>comprad</b> las entradas con antelación. 3 Si <b>van</b> a la montaña en verano, <b>lleven</b> una chaqueta. 4 Si <b>os</b> interesa visitar la Galería Nacional, <b>reservad</b> las entradas en la web. 5 <b>Pongan</b> siempre protector solar si <b>van</b> a la playa. 6 <b>Acuérdense</b> de llevar el pasaporte si <b>viajan</b> al extranjero. 7 <b>Poneos</b> guantes y bufanda si <b>vais</b> a caminar por la nieve. 8 Si <b>venís</b> a Ciudad de México, <b>visitad</b> la casa museo de Frida Kahlo.</p>`)}

<h3>5. Shops (tiendas)</h3>
<p>Most shop names add <b>-ería</b> to the product (workbook p. 53, ex. 10a): zapato → <b>zapatería</b>, joya → <b>joyería</b>, pan → <b>panadería</b>, libro → <b>librería</b>, fruta → <b>frutería</b>, pastel → <b>pastelería</b>, papel → <b>papelería</b>. Exceptions: <b>la óptica</b> (gafas), <b>el supermercado</b>, <b>el centro comercial</b>.</p>
${TRAP('<b>la librería</b> = bookshop (you buy books); <b>la biblioteca</b> = library (you borrow them). French speakers: “librairie” = librería.')}

<h3>6. Vocabulary: clothes and accessories (léxico, workbook p. 8)</h3>
${T(['Group','Spanish','English'],[
['Ropa','el abrigo, el anorak, la blusa, la camisa, la chaqueta, el chaleco, la falda, los pantalones, el traje, el vestido, el pijama, la ropa interior (las bragas, los calzoncillos)','coat, anorak, blouse, shirt, jacket, waistcoat, skirt, trousers, suit, dress, pyjamas, underwear (knickers, boxers)'],
['Calzado','las botas, los zapatos, las zapatillas (de deporte), el tacón, los calcetines','boots, shoes, slippers / trainers, heel, socks'],
['Accesorios','el bolso, la bufanda, el cinturón, la corbata, el gorro, el sombrero, los guantes, el pañuelo, las gafas, el collar, los pendientes, la pulsera','handbag, scarf, belt, tie, woolly hat, hat, gloves, (head)scarf / handkerchief, glasses, necklace, earrings, bracelet'],
['Partes y lugares','el bolsillo, la manga, el probador, el escaparate, la tienda de ropa, el centro comercial','pocket, sleeve, fitting room, shop window, clothes shop, shopping centre'],
['Personas','el/la cliente/a, el/la comprador/a, el/la dependiente/a, el/la vendedor/a','customer, buyer, shop assistant, seller'],
['Verbos','acortar ≠ alargar, calzarse, comprar, costar, devolver, envolver, ir de compras / de tiendas, llevar, pagar, ponerse ≠ quitarse, probarse, quedar, regalar, vestirse','shorten ≠ lengthen, put on shoes, buy, cost, return, wrap, go shopping, wear, pay, put on ≠ take off, try on, fit, give (a present), get dressed'],
['Adjetivos','ancho ≠ estrecho, largo ≠ corto, claro ≠ oscuro, bonito ≠ feo, ceñido ≠ suelto, clásico ≠ moderno, formal ≠ informal, deportivo, elegante','wide ≠ tight, long ≠ short, light ≠ dark, pretty ≠ ugly, tight-fitting ≠ loose, classic ≠ modern, formal ≠ casual, sporty, elegant'],
['Otros','de algodón, de lana, de pana, de piel, de seda, de rayas, de cuadros; en efectivo, con tarjeta','cotton, wool, corduroy, leather, silk, striped, checked; in cash, by card']])}
${NOTE('<b>Outside the workbook:</b> the English translations are the site’s (the lexicon page leaves them blank for the student).')}

<h3>7. Reading: presents without consumerism (workbook p. 51–52)</h3>
<p>Article adapted from <i>elpais.com</i>: presents are a way to show appreciation, but avoid consumerism. Ideas: 1 set limits (number of presents, money, handmade only; the “amigo invisible” draw); 2 not everything has to be bought (a drawing, a homemade sweet, something second-hand, a handmade calendar); 3 intangible presents (theatre or concert tickets, a massage); 4 food and drink (fair-trade, local organic baskets); 5 give a vegetable garden; 6 for children, give time and attention, simple toys made of natural materials.</p>
${EX('Ex. 5c: what the pronouns refer to','worked example',`<p>cuidar<b>nos</b>: nosotros · evitar<b>lo</b>: el consumismo · consumir<b>la</b>: la comida o bebida · regalar<b>le</b>: a (algún) amigo · regalar<b>les</b>, dar<b>les</b>: a los niños · escuchar<b>los</b>, llevar<b>los</b>: a los niños · encontrar<b>los</b>: los regalos.</p>`)}
`;

SHEETS.t8=`
<div class="eyebrow">Tema 8 · Vitamina A2</div><h2>Otras épocas</h2>
<p class="lede">Goal: describe how things and people were and what they used to do, contrast past and present with <b>todavía / ya no</b>, and replace both objects with pronouns (<b>se lo</b>). Programme: “Pretérito imperfecto · Marcadores temporales: de pequeño/a… · Marcadores para situar acciones en el presente y en el pasado · Todavía / Ya no · Pronunciación y ortografía: percepción de las pausas obligatorias · Exponentes para debatir · Pronombres de objeto indirecto y directo”.</p>

<h3>1. Pretérito imperfecto: forms</h3>
${T(['Persona','-ar (hablar)','-er (comer)','-ir (vivir)'],P.map((p,i)=>[p,imperf('hablar')[i],imperf('comer')[i],imperf('vivir')[i]]))}
<p>Only <b>three irregular verbs</b>: <b>ser</b>, <b>ir</b>, <b>ver</b>.</p>
${conjTable(['ser','ir','ver','estar','volver','salir'],imperf)}
${TRAP('Accents: <b>-ábamos</b> (nosotros of -ar verbs: hablábamos, estábamos) and every <b>-ía</b> form of -er/-ir verbs (comía, salíamos, teníais). Also <b>éramos</b>, <b>íbamos</b>, <b>veía</b>. <i>había</i> (haber) never takes a plural: <i>✗ habían dinosaurios</i>.','Accent trap')}

<h3>2. When to use the imperfecto</h3>
<ul><li><b>Habits and repeated actions in the past</b>: <i>De pequeño, mi madre me <b>leía</b> cuentos antes de dormir.</i></li>
<li><b>Descriptions</b> of people, things, places and situations in the past: <i>Nuestro primer gato <b>era</b> blanco y <b>tenía</b> manchas marrones.</i></li>
<li><b>Contrast past / present</b>: <i>Antes no <b>podías</b> escuchar música en tu teléfono móvil; ahora sí.</i></li>
<li>Politeness: <i><b>Quería</b> unos pantalones</i> (Tema 7).</li></ul>
${T(['Situate in the past (imperfecto)','Situate in the present (presente)'],[['de pequeño/a, de niño/a, de joven','ahora'],['cuando era pequeño/a, cuando tenía 10 años','hoy en día'],['antes','actualmente, en la actualidad'],['en aquella época, en aquellos tiempos, entonces','todavía (+ presente)'],['en los años 50, hace 60 años','ya no (+ presente)']])}
${EX('Workbook p. 60, ex. 7a: El discman and El VHS','worked example',`<p><b>El discman</b>: (1) <b>podías</b> (2) <b>tenías</b> (3) <b>se utilizaba</b> (4) <b>grababa</b> (5) <b>podías</b> (6) <b>era</b> (7) <b>elegías</b> (8) <b>podías</b> (9) <b>ocupaba</b> (10) <b>era</b> (11) <b>escuchabas</b>.</p>
<p><b>El VHS</b>: (1) <b>había</b> (2) <b>veías</b> (3) <b>era</b> (4) <b>querías</b> (5) <b>querías</b> (6) <b>estabas</b> (7) <b>podías</b> (8) <b>era</b> (9) <b>grababas</b> (10) <b>ocupaban</b>.</p>`)}
${EX('Workbook p. 58, ex. 3: sentences in the imperfecto','worked example',`<p>1 <b>éramos</b>, no <b>nos peleábamos</b>, <b>teníamos</b> · 2 <b>quería</b>, <b>leía</b>, <b>encantaba</b> · 3 <b>erais</b>, <b>teníais</b>, <b>escuchaba</b>, <b>se llamaba</b> · 4 <b>hablaba</b>, <b>decía</b> · 5 <b>eras</b>, <b>había</b> · 6 <b>gustaba</b>, <b>íbamos</b>, <b>era</b> · 7 <b>eras</b>, <b>participabas</b>, <b>corría</b>, <b>hacía</b>, <b>participaba</b> · 8 <b>era</b>, <b>tenía</b>, <b>traía</b>, <b>gustaba</b>.</p>`)}

<h3>3. Todavía / ya no</h3>
<p><b>Recuerda</b> (workbook p. 61): “Usamos <b>todavía</b> para hablar de algo que no ha cambiado y es como en el pasado. Usamos <b>ya no</b> para hablar de algo que ha cambiado con respecto al pasado.”</p>
${T(['','Meaning','Example'],[['<b>todavía</b> + presente','still (no change)','De niño Samuel llevaba gafas. Hoy en día <b>todavía</b> lleva gafas.'],['<b>ya no</b> + presente','no longer (change)','<b>Ya no</b> tengo cámara de fotos, ahora utilizo la del móvil.']])}
${EX('Workbook p. 61, ex. 9','worked example',`<p>1 Ramón <b>ya no</b> vive con sus padres (but visits them) · 2 <b>todavía</b> me gusta el pan con chocolate · 3 Paloma <b>ya no</b> trabaja (retired) · 4 Carlos <b>todavía</b> escucha vinilos · 5 <b>todavía</b> tengo relación con mis compañeros (we meet once a year) · 6 <b>Ya no</b> tengo cámara · 7 Carmen <b>ya no</b> juega al fútbol (no time now) · 8 Mi abuela <b>todavía</b> tiene una televisión en blanco y negro.</p>`)}

<h3>4. Direct and indirect object pronouns together</h3>
${T(['','yo','tú','él / ella / usted','nosotros/as','vosotros/as','ellos / ellas / ustedes'],[['Objeto indirecto (to whom?)','me','te','le → <b>se</b>','nos','os','les → <b>se</b>'],['Objeto directo (what?)','me','te','lo / la','nos','os','los / las']])}
<ul><li><b>Order</b>: indirect before direct. <b>¡Fíjate!</b> (workbook p. 63): “Generalmente el objeto directo va antes del objeto indirecto, pero cuando usamos los pronombres, el objeto indirecto va antes del objeto directo”: <i>Lucas le trae <u>las gafas</u> <u>a Marta</u>. → Lucas <b>se las</b> trae.</i></li>
<li><b>le / les + lo / la / los / las → se lo / se la / se los / se las</b>. Never <i>✗ le lo</i>, <i>✗ les las</i>.</li>
<li><b>Position</b>: before the conjugated verb (<i>me la canceló</i>), or attached to an infinitive or a gerund, which then takes a written accent: <i>quiero quitár<b>melo</b></i>, <i>están probándo<b>selas</b></i>, <i>voy a dár<b>selo</b></i>.</li>
<li>Pronominal verbs with body parts use the reflexive pronoun as indirect object: <i>El pelo → me <b>lo</b> lavo · La cara → me <b>la</b> maquillo · Las gafas → me <b>las</b> pongo · Los tatuajes → me <b>los</b> hago.</i></li></ul>
${TRAP('Agreement of the direct pronoun with the <b>thing</b>: las gafas → <b>las</b>; el periódico → <b>lo</b>; una cita → <b>la</b>. And <b>se</b> hides le/les: <i>se lo envié</i> may mean to him, to her, to you (usted) or to them.')}
${EX('Workbook p. 63, ex. 15 and 18','worked example',`<p><b>Ex. 15</b>: 1 <b>me la</b> canceló (la cita) · 2 Yo <b>te lo</b> traigo (el periódico) · 3 quiero <b>quitármelo</b> (el tatuaje) · 4 siempre <b>se las</b> preparo (las comidas, a Jorge) · 5 ¿<b>Me las</b> das? (las gafas) · 6 están <b>probándoselas</b> (las faldas).</p>
<p><b>Ex. 18</b>: 1 <b>Me lo</b> puse. 2 Eduardo <b>se la</b> dijo. 3 <b>Se la</b> prepararon. 4 <b>Se lo</b> busqué. 5 <b>Te los</b> regalé. 6 María <b>nos los</b> dejaba. 7 <b>Te la</b> compró. 8 Ayer <b>se la</b> prestamos. 9 Mi hermano <b>me las</b> trajo. 10 Mis amigas y yo <b>nos lo</b> hicimos en el pie.</p>`)}

<h3>5. Debating (exponentes para debatir) and pauses</h3>
<p>Listed in the programme for Tema 8; the workbook pages on the course platform have no exercise on them.</p>
${T(['Function','Expressions'],[['Give your opinion','Yo creo que… · Pienso que… · En mi opinión… · Para mí…'],['Agree','Estoy de acuerdo (contigo). · Tienes razón. · Es verdad. · Claro.'],['Disagree','No estoy de acuerdo. · No es verdad. · Yo no lo veo así.'],['Nuance','Depende. · Sí, pero… · Es verdad, pero…'],['Compare then and now','Antes…, pero ahora… · En aquella época…, hoy en día…']])}
${NOTE('<b>Outside the workbook:</b> this list of debate expressions is the site’s (standard A2 expressions); the Vitamina A2 student’s book page is not on the course platform. The pronunciation point (“percepción de las pausas obligatorias”) is oral only: pause where a comma or full stop is written.')}
`;

SHEETS.t9=`
<div class="eyebrow">Repaso · Socios, unidad 3</div><h2>Productos de ayer y hoy</h2>
<p class="lede">Goal: tell the history of a product or a company with the <b>pretérito indefinido</b>, describe the background with the imperfecto, and talk about change with <b>empezar a, soler, seguir + gerundio, todavía, ya</b>. Programme: “Usos y algunas formas irregulares del pretérito indefinido · Contrastar situaciones pasadas y actuales · Empezar a + infinitivo · Soler + infinitivo · Seguir + gerundio · Todavía + presente · Refuerzo del uso del pretérito imperfecto y de los pronombres de objeto indirecto y directo”.</p>

<h3>1. Pretérito indefinido: regular forms</h3>
${T(['Persona','-ar (comprar)','-er (comer)','-ir (vivir)'],P.map((p,i)=>[p,indef('comprar')[i],indef('comer')[i],indef('vivir')[i]]))}
${TRAP('The accent changes the tense: compr<b>ó</b> (he bought) ≠ compr<b>o</b> (I buy); compr<b>é</b> (I bought) ≠ compre. <b>nosotros</b> of -ar and -ir verbs is the same in present and indefinido (compramos, vivimos): the time marker decides.','Accent trap')}

<h3>2. Irregular indefinido</h3>
<ul><li><b>ser</b> and <b>ir</b> share the same forms: fui, fuiste, fue, fuimos, fuisteis, fueron.</li>
<li><b>Strong stems</b> with endings -e, -iste, -o, -imos, -isteis, -ieron and <b>no accent</b>: tener → <b>tuv</b>-, estar → <b>estuv</b>-, poder → <b>pud</b>-, poner → <b>pus</b>-, saber → <b>sup</b>-, querer → <b>quis</b>-, venir → <b>vin</b>-, hacer → <b>hic</b>- (<b>hizo</b>). With -j-: decir → <b>dij</b>-, traer → <b>traj</b>- (ellos <b>dijeron, trajeron</b>).</li>
<li><b>dar, ver</b>: di, dio / vi, vio (no accent). <b>leer</b>: leyó, leyeron. <b>pedir, dormir</b> change in the 3rd persons: pidió, pidieron / durmió, durmieron.</li>
<li>Spelling, <i>yo</i> only: jugar → jug<b>ué</b>, llegar → lleg<b>ué</b>, buscar → bus<b>qué</b>, empezar → empe<b>cé</b>.</li></ul>
${conjTable(['ser / ir','tener','hacer','decir','dar','leer'],v=>indef(v==='ser / ir'?'ser':v))}
${conjTable(['estar','poder','poner','venir','pedir','dormir'],indef)}
${NOTE('<b>Outside the workbook:</b> the workbook pages ask to “consult page 44 of the Libro del alumno” for irregular verbs; that page is not on the course platform. The lists above are the standard A2 irregular forms named by the programme (“algunas formas irregulares”).')}

<h3>3. Indefinido or imperfecto?</h3>
${T(['Pretérito indefinido','Pretérito imperfecto'],[
['A completed action or event, at a precise moment: <i>En 1946, Marcel Bich <b>compró</b> un taller.</i>','A habit or repeated action: <i>La punta <b>se rompía</b> con frecuencia.</i>'],
['A sequence of events (the story moves on): <i><b>Compró</b> una patente, la <b>perfeccionó</b> y <b>creó</b> su marca.</i>','A description, the background: <i>En aquella época la gente <b>escribía</b> con pluma, <b>era</b> un instrumento incómodo.</i>'],
['Markers: ayer, anoche, el lunes, la semana pasada, el año pasado, en 1958, hace dos años, al poco tiempo','Markers: antes, de pequeño, cuando era…, en aquella época, normalmente, siempre, con frecuencia']])}
${EX('Socios p. 37, ex. 5: the Chocolate Águila advert (años 40)','worked example',`<p>“Moctezuma II, emperador de México (1502–1519 aproximadamente), <b>tomaba</b> siempre xocolatl después de comer y lo <b>bebía</b> en copas de oro… El chocolate <b>era</b> la bebida de los dioses y solo lo <b>consumían</b> las personas de alta posición social. <b>Era</b> tan importante el valor del cacao que sus semillas <b>se utilizaban</b> como monedas y algunos pueblos… <b>pagaban</b> sus tributos al emperador en esa moneda.”</p>
<p>B. All the past verbs are in the <b>pretérito imperfecto</b>: they describe <b>habits and situations</b> of that time, not single events. C. tomar → tomaba, tomabas, tomaba, tomábamos, tomabais, tomaban; beber → bebía…; consumir → consumía… D. Irregular: <b>era</b> (ser).</p>`)}
${EX('Socios p. 43, ex. 14: the history of the Bic pen','worked example',`<p>En 1946, Marcel Bich <b>compró</b> un taller… En aquella época la gente <b>escribía</b> con pluma, <b>era</b> un instrumento incómodo y caro. La punta <b>se rompía</b> con frecuencia y los papeles <b>se ensuciaban</b> con facilidad. En 1951, Bich <b>compró</b> una patente, la <b>perfeccionó</b> y <b>creó</b> su propia marca; para ello le <b>quitó</b> la “h” a su apellido. Al poco tiempo, el barón <b>popularizó</b> el bolígrafo y <b>automatizó</b> la fabricación. El producto <b>empezó</b> a conocerse en toda Francia y muy pronto <b>abrió</b> mercados en toda Europa… En 1958 <b>inició</b> su aventura al otro lado del Atlántico y <b>adquirió</b> una participación mayoritaria de Waterman, que le <b>sirvió</b> de base para fundar Bic Corporation. La implantación del bolígrafo <b>modificó</b> el sistema de escritura e <b>influyó</b> en las costumbres sociales. El Bic <b>se convirtió</b> en el instrumento de escritura más utilizado.</p>`)}

<h3>4. Periphrases: empezar a, soler, seguir + gerundio</h3>
${T(['Structure','Meaning','Example'],[['<b>empezar a</b> + infinitivo','start doing','La empresa <b>empezó a</b> tener éxito a partir de 1957.'],['<b>soler</b> + infinitivo','usually do (habit)','Los domingos <b>solemos</b> comer en casa de mis abuelos. In the past: <b>solía</b> + inf.'],['<b>seguir</b> + gerundio','still be doing (no change)','No hemos cambiado de asesor, <b>seguimos trabajando</b> con el señor Martínez.'],['<b>todavía</b> + presente','still','<b>Todavía</b> vivo en la casa de siempre.']])}
<p><b>Gerundio</b>: -ar → <b>-ando</b>, -er/-ir → <b>-iendo</b>. Irregular: leer → <b>leyendo</b>, ir → <b>yendo</b>, traer → <b>trayendo</b>, dormir → <b>durmiendo</b>, pedir → <b>pidiendo</b>, decir → <b>diciendo</b>, venir → <b>viniendo</b>, seguir → <b>siguiendo</b>. <b>soler</b> and <b>seguir</b> are stem-changing: suelo, suelen / sigo, sigue.</p>

<h3>5. Ya, todavía no, ya no, todavía</h3>
<p>Socios p. 43, ex. 15A (each sentence matches one situation):</p>
${T(['Sentence','Situation'],[['Ya he escrito el informe.','He terminado el informe que estaban esperando.'],['Todavía no he escrito el informe.','No he terminado el informe pero voy a terminarlo pronto.'],['Ya no escribo informes.','Antes escribía informes en mi trabajo, ahora hago otras cosas.'],['Todavía escribo informes.','Antes escribía informes y ahora también.']])}
${EX('Ex. 15B: rewrite with ya, ya no, todavía, todavía no','worked example',`<p>1 <b>Todavía no</b> he terminado (la cena). 2 <b>Ya</b> he vendido todos los productos. 3 <b>Ya no</b> trabajo en una fábrica. 4 <b>Todavía</b> vivo en la Avenida de América. 5 <b>Ya no</b> enviamos faxes. 6 <b>Todavía</b> trabajamos con el señor Martínez.</p>`)}

<h3>6. Pronoun review (Socios p. 45)</h3>
<p>C. 1 Todavía no <u>nos</u> lo han entregado → <b>a nosotros</b> · 2 <u>Te</u> las daré mañana → <b>a ti</b> · 3 <u>Os</u> la ha regalado mi hermano → <b>a vosotros</b> · 4 <u>Se</u> los envió ayer → <b>a ellos</b>. D. tú → <b>te</b>, nosotros → <b>nos</b>, vosotros → <b>os</b>. E. “Cuando se combinan los pronombres de OI le o les con lo, la, los, las, los primeros se transforman en <b>se</b>. Es decir, nunca se dice le/les lo/los/la/las sino <b>se</b> lo/los/la/las.”</p>
${EX('Ex. 18: complete with the missing pronouns','worked example',`<p>1 Sí, <b>se</b> lo envié ayer. 2 Sí, <b>nos lo</b> dieron ayer. 3 <b>Me</b> lo regalaron para mi cumpleaños. 4 Todavía no <b>les</b> hemos entregado los billetes (the direct object is still written). 5 Sr. García, la agenda <b>se</b> la enviamos ayer. 6 ¿Cuándo <b>le</b> disteis los documentos a Marta? <b>Se los</b> dimos la semana pasada.</p>`)}

<h3>7. Reading texts of the unit</h3>
${EX('Seat, el coche (Socios p. 38, ex. 7): one summary per decade','reading',`${T(['Decade','Summary'],[['Años 50','Seat nació el 9 de mayo de 1950 (capital: 600 millones de pesetas del INI, bancos y Fiat). El primer coche salió de la fábrica de Barcelona en noviembre de 1953. Antonio Barrios entró como mecánico en julio de 1954: trabajaban 48 horas a la semana, ganaba 4,70 pesetas a la hora. En 1957 llegó el 600 y la empresa empezó a tener éxito.'],['Años 60','El 600 fue el símbolo del desarrollo de España. La producción pasó de 400 a 30 000 coches al año. Siguieron el 1500, el 850, el 127 y el 124 (mayo de 1968).'],['Años 70','El 600 dejó de fabricarse en 1973 (800 000 unidades vendidas). A finales de los 70, por los cambios políticos, la empresa dejó de dar beneficios y Fiat abandonó el capital.'],['Años 80','En 1983 Seat empezó a buscar un socio; en 1986 Volkswagen se hizo cargo de Seat.'],['Años 90','La producción aumentó: 500 000 coches en 1999 (2 000 en 1954). Antonio Barrios se jubiló en 1996 tras 42 años, como director de producción.'],['Hoy','2 240 coches al día (antes 4), 14 500 empleados (antes 925); modelos Ibiza, Córdoba, Arosa; una de las mayores empresas de España.']])}`)}
${EX('Almacenes La Perla (Socios, test p. 2): key words','reading',`<p>1 la <b>sección</b> de caballeros · 2 <b>responsable</b> de la importación · 3 <b>adquirió</b> una pequeña tienda · 4 se dedicaban a <b>atender</b> a los clientes · 5 tres <b>empleados</b> en el taller · 6 <b>inauguró</b> otra tienda · 7 <b>una estructura</b> departamental · 8 los directivos de <b>la cadena</b> · 9 más de 50 <b>sucursales</b> · 10 la Fundación y sus accionistas <b>administran</b> el Grupo.</p>`)}
`;

SHEETS.cheat=`
<div class="eyebrow">One page</div><h2>Cheat sheet</h2>
<h3>Verb endings</h3>
${T(['Tense','-ar','-er / -ir','Irregular to know'],[
['Imperfecto','-aba, -abas, -aba, <b>-ábamos</b>, -abais, -aban','-ía, -ías, -ía, -íamos, -íais, -ían','ser era · ir iba · ver veía (only three)'],
['Indefinido','-é, -aste, -ó, -amos, -asteis, -aron','-í, -iste, -ió, -imos, -isteis, -ieron','fui (ser/ir), tuve, estuve, pude, puse, supe, quise, vine, hice/hizo, dije/dijeron, traje/trajeron, di, vi, leyó, pidió, durmió, jugué, busqué, empecé'],
['Imperativo vosotros','-ad (llevad)','-ed / -id (bebed, descubrid)','id · relajaos · poneos · acordaos'],
['Imperativo ustedes','-en (lleven)','-an (beban)','hagan, pongan, vengan, vayan, prueben, pónganse, acuérdense'],
['Gerundio','-ando','-iendo','leyendo, yendo, trayendo, durmiendo, pidiendo, diciendo, viniendo, siguiendo']])}
<h3>Rules</h3>
${T(['Point','Rule'],[
['OI pronouns','me, te, le, nos, os, les · A Ignacio <b>le</b> regalamos… (repetition)'],
['OI + OD','indirect first: me lo, te la, nos los… · <b>le/les + lo/la/los/las → se lo / se la / se los / se las</b>'],
['Position','before the conjugated verb, or attached to infinitive / gerund / affirmative imperative (+ accent: quitármelo, probándoselas, pónganse)'],
['Equality','tan + adj./adv. + como · tanto/a/os/as + noun + como · verb + tanto como'],
['Inequality','más / menos + … + que · mejor, peor, mayor, menor'],
['todavía / ya no','todavía = no change (still) · ya no = change (no longer)'],
['ya / todavía no','ya = done · todavía no = not yet'],
['Imperfecto vs indefinido','background, habit, description ↔ completed event with a date, sequence of events'],
['Periphrases','empezar a + inf. · soler + inf. (solía in the past) · seguir + gerundio'],
['Shop','Quería… · ¿Qué talla / número tiene? · ¿Qué tal le quedan? · Me quedan estrechos · ¿Cuánto cuesta(n)? · Me lo/la/los/las llevo · en efectivo / con tarjeta']])}
<h3>Exam checklist</h3>
<ol><li>Find the time marker first: <i>antes, de pequeño, en aquella época</i> → imperfecto; <i>ayer, en 1953, el año pasado</i> → indefinido; <i>ahora, hoy en día, todavía</i> → presente.</li>
<li>Find the subject of every verb (often in brackets: <i>(poder, tú)</i>) and conjugate for that person.</li>
<li>Write every accent: hablábamos, había, compró, compré, leyó, pónganse, quitármelo, tan / tanto, más.</li>
<li>Pronouns: what is the thing (lo/la/los/las, agreeing in gender and number)? who receives it (me/te/le/nos/os/les)? le/les + lo → se lo.</li>
<li>Written text: use the imperfecto for “how it was”, the indefinido for “what happened”, compare with “antes…, ahora…”, and add 2–3 connectors (pero, porque, además, por eso, en cambio).</li></ol>
`;

/* ---------- quiz ---------- */
const Q=(id,topic,src,q,o,e)=>({id,topic,src,q,o,a:0,e});
const QUIZ=[
Q('q0','t7','course','Luis: “Ya pronto es Navidad. ¿Qué ___ regalamos a la familia?”',['le','les','lo','la'],'“la familia” is one group, grammatically singular: <b>le</b>. (Workbook p. 50, ex. 1.)'),
Q('q1','t7','course','Clara: “¿Y a Marina y a Natalia? A ellas también ___ gusta el fútbol, ¿no?”',['les','le','las','se'],'Two people receive (a ellas): <b>les</b>. gustar takes an indirect object pronoun, never <i>las</i>.'),
Q('q2','t7','course','Luis: “¡Nada! ¡Ellos a nosotros tampoco ___ regalan nunca nada!”',['nos','les','os','se'],'“a nosotros” → <b>nos</b>.'),
Q('q3','t7','course','Clara: “Tienes razón. ¿Y a mí qué ___ vas a regalar?”',['me','te','le','mi'],'“a mí” → <b>me</b>. <i>mí</i> is used only after a preposition.'),
Q('q4','t7','course','Luis: “Claro que sí. A ti ___ voy a hacer el mejor regalo.”',['te','ti','le','me'],'“a ti” → <b>te</b>.'),
Q('q5','t7','course','Ana va a recibir ___ regalos como Priscila.',['tantos','tan','tantas','tanto'],'Before a noun: tanto, agreeing with it. regalos is masculine plural: <b>tantos</b>.'),
Q('q6','t7','course','Luis es ___ interesante como pensé.',['tan','tanto','tanta','más'],'Before an adjective: <b>tan</b> … como.'),
Q('q7','t7','course','¿Conoces a alguien con ___ paciencia como Miguel? ¡Yo no!',['tanta','tan','tanto','tantas'],'paciencia is feminine singular: <b>tanta</b>.'),
Q('q8','t7','course','En Hamburgo viven ___ personas como en Budapest.',['tantas','tantos','tan','tanta'],'personas is feminine plural: <b>tantas</b>.'),
Q('q9','t7','course','Juana estudia ___ como Isabel, pero no saca ___ buenas notas como ella.',['tanto … tan','tan … tantas','tanto … tantas','tan … tan'],'After a verb: <b>tanto como</b>. Before an adjective (buenas), even followed by a noun: <b>tan</b>.'),
Q('q10','t7','course','En Navidad ya no gasto ___ como antes.',['tanto','tan','tantos','tanta'],'verb + <b>tanto como</b> (invariable).'),
Q('q11','t7','course','Preparamos todo ___ rápido como pudimos.',['tan','tanto','tanta','más'],'rápido is an adverb here: <b>tan</b> … como.'),
Q('q12','t7','course','David tiene 29 años y Julián tiene 25 años.',['David es mayor que Julián.','David es menor que Julián.','David es tan mayor como Julián.','David es más joven que Julián.'],'Inequality: <b>mayor que</b> (older than). mayor is the irregular comparative used for age.'),
Q('q13','t7','course','David mide 1,85 m y Julián mide 1,85 m.',['David es tan alto como Julián.','David es tanto alto como Julián.','David es más alto que Julián.','David es tan alto que Julián.'],'Equality with an adjective: <b>tan</b> alto <b>como</b>.'),
Q('q14','t7','course','David tiene tres hermanos y Julián tiene tres hermanos.',['David tiene tantos hermanos como Julián.','David tiene tan hermanos como Julián.','David tiene tantas hermanos como Julián.','David tiene tantos hermanos que Julián.'],'Equality with a noun: <b>tantos</b> (hermanos, m. pl.) … <b>como</b>.'),
Q('q15','t7','course','In the fashion shop dialogue (workbook p. 52, ex. 7), after the customer says “Son muy bonitos”, the shop assistant asks:',['¿Qué talla tiene?','¿Qué tal le quedan?','Aquí tiene.','La 48, creo.'],'Order: … d (¿Qué le parecen estos?) → h (Son muy bonitos) → <b>b ¿Qué talla tiene?</b> → j La 48, creo → g Aquí tiene → c ¿Qué tal le quedan?'),
Q('q16','t7','course','“Uy, pues me quedan un poco estrechos. ¿Tiene una talla más?” means:',['They are a bit tight: do you have a bigger size?','They are a bit long: do you have a smaller size?','They are a bit expensive: do you have cheaper ones?','They fit well: I will take them.'],'quedar = to fit; estrecho = narrow, tight; una talla más = one size up.'),
Q('q17','t7','course','Voy a la playa, llevo… Which item does not belong?',['guantes','crema solar','una toalla','un bañador'],'Gloves are for the cold, not the beach. (Workbook p. 55, ex. 1.)'),
Q('q18','t7','course','Vamos a la montaña, llevamos… Which item does not belong?',['chanclas','una mochila','una chaqueta','gafas de sol'],'Flip-flops (chanclas) are not for hiking.'),
Q('q19','t7','course','Voy al desierto, tengo que llevar… Which item does not belong?',['una bufanda','gafas de sol','un botiquín','un pañuelo'],'A (wool) scarf is a cold-weather item; the pañuelo protects from sun and sand. No answer key: this is the site’s answer.'),
Q('q20','t7','course','Para ir a una casa rural, llevamos… Which item does not belong?',['un traje','una mochila','un botiquín','botas de montaña'],'A suit is for formal occasions, not a country house.'),
Q('q21','t7','course','Imperative of <i>ir</i> for <b>ustedes</b> (workbook p. 55, ex. 3):',['vayan','id','van','vayáis'],'ustedes → <b>vayan</b>. <i>id</i> is vosotros, <i>van</i> is the present.'),
Q('q22','t7','course','Imperative of <i>relajarse</i> for <b>vosotros</b>:',['relajaos','relajados','relajad','relajarse'],'Reflexive verbs drop the -d before -os: relajad + os → <b>relajaos</b>. (ustedes: relájense.)'),
Q('q23','t7','course','Compramos libros en la ___.',['librería','biblioteca','papelería','librairía'],'Shop = product + -ería: <b>librería</b>. La biblioteca is a library (you borrow books).'),
Q('q24','t7','practice','“Buenas tardes, quería unos pantalones de pana.” Here <i>quería</i> expresses:',['a polite request (I would like)','a habit in the past','a completed past action','a description of the past'],'Fórmula de cortesía (Tema 7): the imperfect of querer softens the request.'),
Q('q25','t7','practice','In a shoe shop the assistant asks your size:',['¿Qué número tiene?','¿Qué tamaño tiene?','¿Qué medida tiene?','¿Cuántos pies tiene?'],'Shoes: <b>número</b> (“¿tienen el número 39?”). Clothes: talla.'),
Q('q26','t7','practice','Me gustan mucho estos zapatos. ___ llevo.',['Me los','Me lo','Los me','Me las'],'zapatos = masculine plural → <b>los</b>; reflexive me before the direct pronoun: <b>Me los</b> llevo.'),
Q('q27','t7','practice','—¿Cómo va a pagar? —___',['Con tarjeta.','Por tarjeta.','En tarjeta.','De tarjeta.'],'<b>con tarjeta</b> / <b>en efectivo</b> (workbook p. 8–9).'),
Q('q28','t7','practice','A mis padres ___ encanta el chocolate.',['les','le','los','se'],'a mis padres (plural) → <b>les</b> encanta.'),
Q('q29','t7','practice','Julián bebe tres tazas de café al día; David no bebe café. Julián bebe ___ café ___ David.',['más … que','más … como','tanto … que','tan … como'],'Inequality: <b>más</b> + noun + <b>que</b>.'),
Q('q30','t7','practice','Esta camisa es ___ que aquella: me la llevo.',['mejor','más buena','más bien','tan buena'],'<b>mejor</b> is the comparative of bueno (outside the workbook pages, standard A2).'),
Q('q31','t7','practice','Imperative of <i>hacer</i> for <b>ustedes</b>:',['hagan','hacen','haced','hagáis'],'From the yo form hago → <b>hagan</b>.'),
Q('q32','t7','practice','Imperative of <i>probar</i> for <b>vosotros</b>:',['probad','probáis','prueben','probar'],'Infinitive -r → -d: <b>probad</b> (no stem change in the vosotros form).'),
Q('q33','t7','course','“Relájense en alguno de los verdes parques de la ciudad.” (workbook p. 55, ex. 2) This tip is about:',['Londres','El Cairo','both cities','neither city'],'Green parks, hundreds of museums and street food: <b>London</b>. Desert, souk, cold nights and lots of water: Cairo.'),
Q('q34','t8','course','Imperfecto of <i>ser</i>, nosotros:',['éramos','eramos','fuimos','seríamos'],'<b>éramos</b>, with an accent. fuimos is the indefinido.'),
Q('q35','t8','course','Imperfecto of <i>ir</i>, tú:',['ibas','iabas','fuiste','ías'],'ir: iba, <b>ibas</b>, iba, íbamos, ibais, iban.'),
Q('q36','t8','course','Imperfecto of <i>ver</i>, yo:',['veía','vía','veo','vi'],'ver keeps the e: <b>veía</b>.'),
Q('q37','t8','course','De pequeño, nunca ___ (querer) ir a la cama por la noche.',['quería','quise','quiero','querría'],'Habit in childhood (de pequeño, nunca): imperfecto <b>quería</b>.'),
Q('q38','t8','course','Abuela, cuando tú eras pequeña, ¿___ (haber) dinosaurios?',['había','hubo','habían','hay'],'haber (there is / there are) has one form: <b>había</b>, even with a plural noun.'),
Q('q39','t8','course','Cuando vosotros erais pequeños, ¿___ (tener) un grupo de música favorito?',['teníais','tuvisteis','teníamos','tenéis'],'vosotros, imperfecto: <b>teníais</b>.'),
Q('q40','t8','course','Ramón ___ vive en casa de sus padres, pero los visita con mucha frecuencia.',['ya no','todavía'],'He visits them, so he does not live there any more: <b>ya no</b>.'),
Q('q41','t8','course','Sé que no es muy sano, pero ___ me gusta comer pan con chocolate, ¡me recuerda mucho a mi infancia!',['todavía','ya no'],'Same as in childhood: <b>todavía</b>.'),
Q('q42','t8','course','Paloma ___ trabaja porque está jubilada desde hace un par de años.',['ya no','todavía'],'Retired: <b>ya no</b> trabaja.'),
Q('q43','t8','course','Carlos ___ escucha música en discos de vinilo. Dice que él es muy clásico.',['todavía','ya no'],'He is “very classic”: <b>todavía</b>.'),
Q('q44','t8','course','Terminé el instituto hace más de 30 años y ___ tengo relación con mis antiguos compañeros. Nos vemos una vez al año.',['todavía','ya no'],'They still meet once a year: <b>todavía</b>.'),
Q('q45','t8','course','___ tengo cámara de fotos, ahora utilizo la cámara del teléfono móvil.',['Ya no','Todavía'],'Change: <b>Ya no</b>.'),
Q('q46','t8','course','Carmen ___ juega al fútbol. De pequeña le encantaba, pero ahora no tiene tiempo.',['ya no','todavía'],'“ahora no tiene tiempo”: <b>ya no</b>.'),
Q('q47','t8','course','Mi abuela ___ tiene una televisión en blanco y negro. Es muy grande y vieja, y no funciona.',['todavía','ya no'],'She still has it (it does not work, but she keeps it): <b>todavía</b>.'),
Q('q48','t8','course','Concerté una cita con mi peluquero, pero en el último momento ___ canceló.',['me la','me los','nos lo','se la'],'la cita (f. sg.) → la; to me → me: <b>me la</b>. (Workbook p. 63, ex. 15.)'),
Q('q49','t8','course','¿Quieres leer el periódico, abuela? Yo ___ traigo.',['te lo','me lo','se la','te la'],'el periódico → lo; to you (abuela, tú) → te: <b>te lo</b>.'),
Q('q50','t8','course','Tengo un tatuaje con el nombre de mi ex y quiero ___.',['quitármelo','quitárselo','quitármelos','quitarmelo'],'un tatuaje → lo; on myself → me; attached to the infinitive with an accent: <b>quitármelo</b>.'),
Q('q51','t8','course','A Jorge le encantan las comidas caseras. Yo siempre ___ preparo cuando viene.',['se las','se la','se los','le las'],'las comidas → las; a Jorge → le → <b>se</b>: <b>se las</b>.'),
Q('q52','t8','course','Necesito mis gafas para ir al cine. ¿___ das, por favor, Julio? Están en mi bolso.',['Me las','Me la','Me los','Las me'],'las gafas → las; to me → me: <b>Me las</b>.'),
Q('q53','t8','course','Las chicas encontraron unas faldas y están ___.',['probándoselas','probándonoslas','probándonosla','probandoselas'],'They try them on themselves: se + las, attached to the gerund with an accent: <b>probándoselas</b>.'),
Q('q54','t8','practice','Lucas le trae las gafas a Marta. →',['Lucas se las trae.','Lucas le las trae.','Lucas las le trae.','Lucas se la trae.'],'le + las → <b>se las</b> (¡Fíjate!, workbook p. 63).'),
Q('q55','t8','practice','The imperfecto is used to:',['describe a habit or a situation in the past','tell a single completed action with a precise date','talk about the future','give an order'],'Habits and descriptions of the past (“¿Cómo eran estas cosas hace 60 años?”).'),
Q('q56','t8','practice','Which marker goes with the imperfecto?',['De pequeño','Ayer','El 9 de mayo de 1950','La semana pasada'],'<b>De pequeño/a</b> introduces habits of childhood. The others date a completed event (indefinido).'),
Q('q57','t8','course','Yo en clase ___ (hablar) mucho con mis compañeras y mi profesora, doña Nati, siempre me decía: “¡Sara, trabaja!”.',['hablaba','hablé','hablo','hablabe'],'Repeated action (siempre): <b>hablaba</b>.'),
Q('q58','t8','course','El discman: “Antes no ___ (poder, tú) escuchar música en tu teléfono móvil.”',['podías','pudiste','puedes','podrías'],'Situation of the past (antes): <b>podías</b>.'),
Q('q59','t8','course','El VHS: “En aquellos tiempos no ___ (haber) televisión a través de internet.”',['había','habían','hubo','hay'],'<b>había</b>: invariable, description of the past.'),
Q('q60','t8','practice','Which expression shows disagreement in a debate?',['No estoy de acuerdo contigo.','Tienes razón.','Estoy de acuerdo.','Es verdad.'],'Exponentes para debatir (Tema 8). Outside the workbook pages: standard A2 expressions.'),
Q('q61','t9','course','In the Chocolate Águila advert, the verbs <i>tomaba, bebía, consumían, se utilizaban, pagaban</i> are in the:',['pretérito imperfecto, because they describe habits and situations of that time','pretérito indefinido, because the dates are given','presente histórico','pretérito perfecto'],'Socios p. 37, ex. 5B: habits (siempre tomaba…) and descriptions → <b>imperfecto</b>.'),
Q('q62','t9','course','Which verb of the Chocolate Águila text is irregular?',['era (ser)','tomaba (tomar)','bebía (beber)','pagaban (pagar)'],'Only three verbs are irregular in the imperfecto: ser (<b>era</b>), ir, ver.'),
Q('q63','t9','course','Seat, el coche: when was Seat born?',['El 9 de mayo de 1950','En noviembre de 1953','En 1957','En 1986'],'“Seat… nació el 9 de mayo de 1950.” Nov. 1953 is the first car; 1957 the 600; 1986 Volkswagen.'),
Q('q64','t9','course','Seat: which car became “el símbolo del desarrollo en la España de los años sesenta”?',['El 600','El 124','El Ibiza','El 1500'],'The <b>600</b>, launched in 1957; 800 000 units sold, produced until 1973.'),
Q('q65','t9','course','Seat: what happened in 1986?',['Volkswagen se hizo cargo de Seat.','Fiat compró Seat.','Seat empezó a buscar un socio.','El 600 dejó de fabricarse.'],'1983: Seat looks for a partner; <b>1986: Volkswagen takes over</b>.'),
Q('q66','t9','course','La Perla (1): “…su hermano era el encargado de ___ de caballeros.”',['la sección','la distribución','la correspondencia'],'In a department store, menswear is a <b>sección</b>.'),
Q('q67','t9','course','La Perla (2): “…una empresa de tejidos donde era ___ de la importación.”',['responsable','operador','candidato'],'<b>responsable de</b> = in charge of.'),
Q('q68','t9','course','La Perla (3): “En 1935 volvió a España y en Madrid ___ una pequeña tienda de ropa.”',['adquirió','encargó','convirtió'],'<b>adquirió</b> = bought (adquirir, indefinido).'),
Q('q69','t9','course','La Perla (4): “Contaba con solo cinco dependientes que se dedicaban a ___ a los clientes.”',['atender','probar','formar'],'Shop assistants <b>atienden</b> a los clientes.'),
Q('q70','t9','course','La Perla (5): “…y tres ___ que trabajaban en el taller de confección.”',['empleados','puestos','contratos'],'People who work: <b>empleados</b>.'),
Q('q71','t9','course','La Perla (6): “Después de la Guerra Civil, en 1940, ___ otra tienda en Madrid.”',['inauguró','invirtió','presentó'],'Open a new shop: <b>inaugurar</b>.'),
Q('q72','t9','course','La Perla (7): “…los establecimientos comenzaron a funcionar con ___ departamental: niños, señora, caballero, hogar…”',['una estructura','un requisito','un sector'],'<b>una estructura departamental</b>.'),
Q('q73','t9','course','La Perla (8): “Poco a poco los directivos de ___ se convirtieron en accionistas.”',['la cadena','la producción','la expectativa'],'A chain of stores: <b>la cadena</b>.'),
Q('q74','t9','course','La Perla (9): “En los años sesenta La Perla tenía más de 50 ___ en España.”',['sucursales','lugares','novedades'],'Branches: <b>sucursales</b>.'),
Q('q75','t9','course','La Perla (10): “Actualmente, la Fundación y sus accionistas ___ el Grupo La Perla.”',['administran','clausuran','suministran'],'They run (<b>administran</b>) the group.'),
Q('q76','t9','course','Bic: “En aquella época la gente ___ (escribir) con pluma.”',['escribía','escribió','escribe','escriba'],'“En aquella época” + description of how people did things: imperfecto <b>escribía</b>.'),
Q('q77','t9','course','Bic: “En 1951, Bich ___ (comprar) una patente.”',['compró','compraba','compra','compré'],'Completed event with a date: indefinido, él → <b>compró</b> (compré = yo).'),
Q('q78','t9','course','“Ya he escrito el informe.” corresponds to:',['He terminado el informe que estaban esperando.','No he terminado el informe pero voy a terminarlo pronto.','Antes escribía informes y ahora también.','Antes escribía informes en mi trabajo, ahora hago otras cosas.'],'<b>ya</b> = it is done. (Socios p. 43, ex. 15A.)'),
Q('q79','t9','course','“Todavía no he escrito el informe.” corresponds to:',['No he terminado el informe pero voy a terminarlo pronto.','He terminado el informe que estaban esperando.','Antes escribía informes y ahora también.','Antes escribía informes en mi trabajo, ahora hago otras cosas.'],'<b>todavía no</b> = not yet.'),
Q('q80','t9','course','“No hemos cambiado de asesor, seguimos trabajando con el señor Martínez.” =',['Todavía trabajamos con el señor Martínez.','Ya no trabajamos con el señor Martínez.','Todavía no trabajamos con el señor Martínez.','Ya trabajamos con el señor Martínez.'],'seguir + gerundio = <b>todavía</b> + presente (no change).'),
Q('q81','t9','course','“Todavía no <u>nos</u> lo han entregado.” <i>nos</i> refers to:',['a nosotros','a vosotros','a ellos','a ti'],'nos = a nosotros. (Socios p. 45, ex. C.)'),
Q('q82','t9','course','“<u>Os</u> la ha regalado mi hermano.” <i>os</i> refers to:',['a vosotros','a nosotros','a ellos','a ti'],'os = a vosotros.'),
Q('q83','t9','course','—¿Has enviado el pedido a aquel cliente? —Sí, ___ lo envié ayer.',['se','le','lo','les'],'le (a aquel cliente) + lo (el pedido) → <b>se</b> lo.'),
Q('q84','t9','course','Mañana se van de viaje y todavía no ___ hemos entregado los billetes de avión.',['les','se','los','le'],'The direct object (los billetes) is still written, so only the indirect pronoun: a ellos → <b>les</b>.'),
Q('q85','t9','practice','Ahora, los domingos ___ (soler, nosotros) comer en casa de mis abuelos.',['solemos','soleamos','suelemos','sueles'],'soler is o → ue except nosotros and vosotros: <b>solemos</b>.'),
Q('q86','t9','practice','Hace diez años que vive en Madrid y ___ trabajando en la misma empresa.',['sigue','sige','seguí','sigo'],'seguir + gerundio, él: <b>sigue</b> (e → i, gu before e).'),
Q('q87','t9','practice','El producto empezó ___ conocerse en toda Francia.',['a','de','por','en'],'<b>empezar a</b> + infinitivo.'),
Q('q88','t9','practice','Indefinido of <i>hacer</i>, él:',['hizo','hació','hice','hacía'],'hacer: hice, hiciste, <b>hizo</b> (c → z), hicimos…'),
Q('q89','t9','practice','Ayer ___ (ir, yo) al cine con mis amigos.',['fui','iba','fue','voy'],'Completed action (ayer), yo: <b>fui</b>. (Ejercicios para comprobar el nivel, ex. 6.)'),
Q('q90','t9','practice','Cuando ___ quince años, emigró a Buenos Aires. (La Perla)',['tenía','tuvo','tiene','tenga'],'Age as background of an event: imperfecto <b>tenía</b>; the event (emigró) is in the indefinido.'),
Q('q91','t9','practice','Indefinido of <i>leer</i>, ellos:',['leyeron','leeron','leieron','leían'],'Between two vowels the i becomes y: <b>leyeron</b>, leyó.'),
Q('q92','t9','practice','Indefinido of <i>dormir</i>, él:',['durmió','dormió','durmío','dormía'],'o → u in the 3rd persons: <b>durmió</b>, durmieron.'),
Q('q93','t9','practice','Indefinido of <i>traer</i>, ellos:',['trajeron','trajieron','traeron','traían'],'j-stems take <b>-eron</b>: trajeron, dijeron.')];

/* ---------- exercises ---------- */
const STRICT={accents:'strict'};
const EXERCISES=[
// Tema 7
{id:'x-t7-regalos',topic:'t7',type:'text',src:'course',title:'Luis y Clara: los regalos de Navidad',...GAP('Workbook p. 50, ex. 1. Complete the dialogue with indirect object pronouns.',
 'Luis: Ya pronto es Navidad. ¿Qué [[le|]] regalamos a la familia? Clara: No sé… A mamá [[le|]] podemos regalar una entrada para un concierto de música clásica. Luis: ¡Sí! [[me/le|]] gusta la idea. Y a papá [[le|]] podemos comprar un delantal de cocina, ¿no? Clara: … ¿Y a los primos? Luis: Bueno, creo que a Rosana [[le|]] podemos comprar una entrada para un partido de fútbol. Clara: ¿Y a Marina y a Natalia? A ellas también [[les|]] gusta el fútbol, ¿no? … Clara: Oye, ¿y a Tita y a Juan, qué [[les|]] vamos a comprar? Luis: ¡Nada! ¡Ellos a nosotros tampoco [[nos|]] regalan nunca nada! Clara: Tienes razón. ¿Y a mí qué [[me|]] vas a regalar? Luis: Claro que sí. A ti [[te|]] voy a hacer el mejor regalo.'),
 e:'The pronoun agrees with the person who receives: a mamá → le, a ellas → les, a nosotros → nos, a mí → me, a ti → te. (3) <i>me gusta</i> (Luis likes the idea) or <i>le gusta</i> (mamá will like it): both accepted, no answer key.'},
{id:'x-t7-tan',topic:'t7',type:'text',src:'course',title:'tan o tanto/a/os/as',...GAP('Workbook p. 50, ex. 3. Complete with <i>tan</i> or <i>tanto/a/os/as</i>.',
 '1 Ana va a recibir [[tantos|]] regalos como Priscila. 2 Luis es [[tan|]] interesante como pensé. 3 ¿Conoces a alguien con [[tanta|]] paciencia como Miguel? 4 En Hamburgo viven [[tantas|]] personas como en Budapest. 5 Juana estudia [[tanto|]] como Isabel, pero no saca [[tan|]] buenas notas como ella. 6 No vamos a necesitar para la fiesta [[tanto|]] dinero como planeamos. 7 En Navidad ya no gasto [[tanto|]] como antes. 8 Preparamos todo [[tan|]] rápido como pudimos.'),
 e:'tan + adjective / adverb; tanto agreeing with the noun; verb + tanto como (invariable).'},
{id:'x-t7-comparar',topic:'t7',type:'text',src:'practice',title:'Comparisons (new data)',
 gen:u=>{const n=['Ana','Luis','Marta','Pablo','Elena','Jorge'];const a=u.pick(n),b=u.pick(n.filter(x=>x!==a));
  const kind=u.pick(['noun','noun','adj','verb','ineq']);
  if(kind==='noun'){const [noun,g]=u.pick([['hermanos','os'],['amigas','as'],['paciencia','a'],['dinero','o'],['libros','os'],['horas libres','as'],['tiempo','o'],['ropa','a']]);
   return {s:`${a} y ${b} tienen la misma cantidad de ${noun}.`,gap:`${a} tiene ___ ${noun} ___ ${b}.`,ans:['tant'+g+' como'],why:`Equality with a noun: tant${g} (agrees with “${noun}”) … como.`}}
  if(kind==='adj'){const h=u.pick(['1,65','1,72','1,80','1,85']);const fem=['Ana','Marta','Elena'].includes(a);
   return {s:`${a} mide ${h} m y ${b} también mide ${h} m.`,gap:`${a} es ___ ${fem?'alta':'alto'} ___ ${b}.`,ans:['tan como'],why:'Equality with an adjective: tan … como.'}}
  if(kind==='verb'){const [v,obj]=u.pick([['trabaja','8 horas al día'],['estudia','3 horas al día'],['gasta','50 euros a la semana'],['duerme','7 horas']]);
   return {s:`${a} ${v} ${obj} y ${b} también ${v} ${obj}.`,gap:`${a} ${v} ___ ${b}.`,ans:['tanto como'],why:'Equality with a verb: verb + tanto como.'}}
  const x=u.int(1,4),y=x+u.int(1,3);const more=u.pick([true,false]);
  return {s:`${a} bebe ${more?y:x} tazas de café al día y ${b} bebe ${more?x:y}.`,gap:`${a} bebe ___ café ___ ${b}.`,ans:[(more?'más':'menos')+' que'],why:`Inequality: ${more?'más':'menos'} + noun + que.`}},
 q:v=>`<p>${v.s}</p><p>Complete: <b>${v.gap}</b> Write the two missing words, e.g. “tan como”.</p>`,
 accept:v=>v.ans,accents:'strict',solution:v=>`<p>${v.why}</p>`},
{id:'x-t7-david',topic:'t7',type:'case',src:'course',title:'David y Julián',q:'<p>Workbook p. 51, ex. 4. David: tres hermanos, 29 años, mide 1,85 m, duerme ocho horas, no bebe café. Julián: tres hermanos, 25 años, mide 1,85 m, duerme seis horas, bebe tres tazas al día.</p>',
 parts:[{type:'text',q:'1. David tiene ___ hermanos ___ Julián. (two words)',accept:['tantos como']},
  {type:'text',q:'2. David es ___ que Julián. (one word, age)',accept:['mayor']},
  {type:'text',q:'3. David es ___ alto ___ Julián. (two words)',accept:['tan como']},
  {type:'text',q:'4. David duerme ___ que Julián. (one word)',accept:['más','más horas']},
  {type:'text',q:'5. Julián bebe ___ café ___ David. (two words)',accept:['más que']}],
 solution:'<p>1 tantos … como · 2 mayor (or: Julián es menor que David) · 3 tan … como · 4 más (horas) · 5 más … que.</p>'},
{id:'x-t7-vamos',topic:'t7',type:'text',src:'course',...STRICT,title:'Vamos de compras (presente)',...GAP('Workbook p. 9, ex. 1. Write the verb in the present indicative.',
 'a. —¿Cuánto [[cuesta|costar]] este televisor? —¿Este? [[vale|valer]] 1200 euros. —¡Uf! Es muy caro, ¿[[tienen|ustedes, tener]] otros más baratos? —Sí, [[tenemos|nosotros, tener]] estos otros de aquí que [[valen|valer]] entre 600 y 800 euros. b. —Quería comprar un teléfono móvil. —Aquel de allí, del escaparate, es el último modelo. —Ya veo, [[es|ser]] una marca buena y [[veo|ver]] que su precio no [[es|ser]] muy caro. ¿Me lo [[envuelve|envolver]] para regalo, por favor? —Por supuesto. —Si mi amiga prefiere otro modelo, lo [[devuelvo|devolver]] presentando este tique, ¿verdad? —Sí, en un plazo de quince días [[puede|poder]] devolverlo y cambiarlo por otro.'),
 e:'costar and devolver/envolver/poder are o → ue (cuesta, devuelvo, envuelve, puede); valer → vale(n); tener → tienen / tenemos.'},
{id:'x-t7-pres',topic:'t7',type:'text',src:'practice',...STRICT,title:'Present of shop verbs (new verb)',
 gen:u=>{const v=u.pick(['costar','probar','encontrar','devolver','envolver','poder','querer','preferir','tener','valer','pedir','vestirse','probarse']);const i=u.int(0,5);return {v,i,a:pres(v)[i]}},
 q:v=>`<p>Present tense of <b>${v.v}</b>, person <b>${P[v.i]}</b>.</p>`,accept:v=>[v.a],
 solution:v=>conjTable([v.v],pres)},
{id:'x-t7-dialogo',topic:'t7',type:'order',src:'course',title:'En una tienda de moda',q:'Workbook p. 52, ex. 7. Put the dialogue in order (the first line is given in the book: a).',
 items:['Buenas tardes, ¿en qué puedo ayudarlo?','Pues… estoy buscando unos pantalones grises.','Muy bien, tenemos muchos pantalones grises esta temporada. ¿Qué le parecen estos?','Son muy bonitos.','¿Qué talla tiene?','La 48, creo.','Aquí tiene.','¿Qué tal le quedan?','Uy, pues me quedan un poco estrechos. ¿Tiene una talla más?','Sí, mire, aquí tiene.','Ah, estos me quedan muy bien. ¡Me los llevo!'],
 e:'Greeting → what you look for → proposal → opinion → size → try on → fit problem → new size → decision.'},
{id:'x-t7-zapateria',topic:'t7',type:'case',src:'course',title:'En una zapatería (self-assessed)',
 q:'<p>Workbook p. 53, ex. 9. Complete the dialogue with the instructions in brackets, then compare with the model.</p><p>Dependiente: ¡Hola! ¿En qué puedo ayudarlo/a? Tú: (1) … <i>(zapatos marrones)</i> · D: Muy bien. ¿Cómo los quiere: clásicos o deportivos? Tú: (2) … <i>(clásicos – celebración en el trabajo)</i> · D: Estos son de muy buena calidad. ¿Le gustan? Tú: (3) … <i>(muy bonitos)</i> · D: ¿Y qué número tiene? Tú: (4) … <i>(40)</i> · D: Aquí tiene. ¿Qué tal le quedan? Tú: (5) … <i>(pequeños – ¿número más?)</i> · D: Sí, claro, tome. ¿Qué tal estos? Tú: (6) … <i>(muy cómodos – ¿precio?)</i> · D: Pues estos cuestan… 150 €. Tú: (7) … <i>(caros – pensar)</i></p>',
 solution:'<p>Model answers (other correct wordings are fine): (1) Hola, buenos días. Quería unos zapatos marrones. (2) Clásicos, por favor; son para una celebración en el trabajo. (3) Sí, son muy bonitos. (4) El 40. / Tengo el 40. (5) Me quedan un poco pequeños. ¿Tiene un número más? (6) Estos son muy cómodos. ¿Cuánto cuestan? (7) Uf, son un poco caros. Voy a pensarlo. / Lo voy a pensar, gracias.</p>'},
{id:'x-t7-tiendas',topic:'t7',type:'text',src:'course',title:'¿Dónde lo compramos?',q:'<p>Workbook p. 53, ex. 10a (the photos are replaced by products). Write the shop with its article.</p>',
 parts:[{label:'Pan',accept:['la panadería','panadería']},{label:'Libros',accept:['la librería','librería']},{label:'Fruta',accept:['la frutería','frutería']},{label:'Pasteles',accept:['la pastelería','pastelería']},
  {label:'Cuadernos y lápices',accept:['la papelería','papelería']},{label:'Gafas',accept:['la óptica','óptica']},{label:'Comida y productos de limpieza, con un carro',accept:['el supermercado','supermercado']},{label:'Muchas tiendas en un mismo edificio',accept:['el centro comercial','centro comercial']},
  {label:'Joyas',accept:['la joyería','joyería']},{label:'Zapatos',accept:['la zapatería','zapatería']}],
 e:'Product + -ería, except la óptica, el supermercado and el centro comercial (“el nombre de las tres últimas no se forma con el sufijo -ería”).'},
{id:'x-t7-maleta',topic:'t7',type:'text',src:'course',...STRICT,title:'Imperative: vosotros and ustedes',q:'<p>Workbook p. 55, ex. 3. Complete the table of affirmative imperative forms.</p>',
 parts:['llevar','probar','beber','descubrir','hacer','ir','relajarse'].flatMap(v=>[{label:`${v} · vosotros/as`,accept:[IMPV[v][0]]},{label:`${v} · ustedes`,accept:[IMPV[v][1]]}]),
 e:'vosotros: -r → -d (id; reflexive: relajaos). ustedes: swap the vowel on the yo stem (pruebo → prueben, hago → hagan; ir → vayan; relájense with an accent).'},
{id:'x-t7-londres',topic:'t7',type:'match',src:'course',title:'¿Londres o El Cairo?',q:'Workbook p. 55, ex. 2. Which city does each tip refer to?',
 pairs:[['Por las noches las temperaturas bajan, así que llevad una chaqueta en la maleta.','El Cairo'],['Por supuesto, haced una excursión al desierto.','El Cairo'],['Prueben la comida callejera: hay comida india, coreana, peruana…','Londres'],['Descubrid el zoco y sus maravillas: alfombras, lámparas, jabones…','El Cairo'],['Vayan a alguno de los museos de la ciudad, ¡hay cientos!','Londres'],['Bebed mucha agua para no deshidrataros.','El Cairo'],['Relájense en alguno de los verdes parques de la ciudad.','Londres']],
 e:'Desert, souk, heat and cold nights: Cairo. Street food from everywhere, hundreds of museums, green parks: London. (Answers by the site; the first words of each tip are cut off in the scan.)'},
{id:'x-t7-transforma',topic:'t7',type:'text',src:'course',...STRICT,title:'vosotros ↔ ustedes',q:'<p>Workbook p. 55, ex. 4. Transform: vosotros sentences into ustedes, and ustedes sentences into vosotros. Write only the missing verbs, separated by a space.</p>',
 parts:[{label:'1. (vosotros → ustedes) Si queréis probar la auténtica paella, id al restaurante Malvarrosa. → Si ___ probar…, ___ al restaurante.',accept:['quieren vayan']},
  {label:'2. (ustedes → vosotros) Para no esperar colas, compren las entradas con antelación. → … ___ las entradas.',accept:['comprad']},
  {label:'3. (vosotros → ustedes) Si vais a la montaña en verano, llevad una chaqueta. → Si ___ …, ___ una chaqueta.',accept:['van lleven']},
  {label:'4. (ustedes → vosotros) Si les interesa visitar la Galería Nacional, reserven las entradas. → Si ___ interesa…, ___ las entradas.',accept:['os reservad']},
  {label:'5. (vosotros → ustedes) Poned siempre protector solar si vais a la playa. → ___ … si ___ a la playa.',accept:['pongan van']},
  {label:'6. (vosotros → ustedes) Acordaos de llevar el pasaporte si viajáis. → ___ de llevar… si ___.',accept:['acuérdense viajan']},
  {label:'7. (ustedes → vosotros) Pónganse guantes y bufanda si van a caminar por la nieve. → ___ guantes… si ___ a caminar.',accept:['poneos vais']},
  {label:'8. (ustedes → vosotros) Si vienen a Ciudad de México, visiten la casa museo de Frida Kahlo. → Si ___ …, ___ la casa museo.',accept:['venís visitad']}],
 e:'Change both the imperative and the verb of the si-clause (queréis → quieren, vais → van, os interesa ↔ les interesa).'},
{id:'x-t7-ropa',topic:'t7',type:'match',src:'course',title:'Léxico: ropa y accesorios',q:'Workbook p. 8 (léxico). Match each word with its English meaning.',
 pairs:[['el abrigo','coat'],['la bufanda','scarf'],['los guantes','gloves'],['el gorro','woolly hat'],['el cinturón','belt'],['la corbata','tie'],['el chaleco','waistcoat'],['la falda','skirt'],['los calcetines','socks'],['el bolsillo','pocket']],extra:['sleeve','handbag']},
{id:'x-t7-tienda-lex',topic:'t7',type:'match',src:'course',title:'Léxico: en la tienda',q:'Workbook p. 8. Match each word with its meaning.',
 pairs:[['el probador','fitting room'],['el escaparate','shop window'],['el/la dependiente/a','shop assistant'],['el tacón','heel'],['en efectivo','in cash'],['envolver','to wrap'],['devolver','to return (an item)'],['acortar','to shorten'],['probarse','to try on'],['quedar (bien / mal)','to fit (well / badly)']],extra:['to lengthen','receipt']},
{id:'x-t7-adj',topic:'t7',type:'match',src:'course',title:'Adjetivos y materiales',q:'Workbook p. 8. Match each adjective with its opposite, and each material or pattern with its meaning.',
 pairs:[['ancho','estrecho'],['largo','corto'],['claro','oscuro'],['ceñido','suelto'],['formal','informal'],['de pana','corduroy'],['de piel','leather'],['de seda','silk'],['de rayas','striped'],['de cuadros','checked']],extra:['bonito','wool']},
{id:'x-t7-5c',topic:'t7',type:'text',src:'course',title:'¿A qué se refieren los pronombres?',q:'<p>Workbook p. 52, ex. 5c, on the article about presents (sheet, section 7). Example: cuidar<b>nos</b> → nosotros.</p>',
 parts:[{label:'evitarlo',accept:['el consumismo','consumismo']},{label:'consumirla',accept:['la comida o bebida','la comida','la comida o la bebida','la comida y la bebida']},{label:'regalarle',accept:['a un amigo','a algún amigo','al amigo','a tu amigo','un amigo','amigo']},
  {label:'regalarles, darles',accept:['a los niños','los niños','niños']},{label:'escucharlos, llevarlos',accept:['a los niños','los niños','niños']},{label:'encontrarlos',accept:['los regalos','regalos']}],
 e:'lo/la/los replace things (consumismo, comida, regalos) or people as direct object (escucharlos = a los niños); le/les replace who receives (regalarle a un amigo, darles a los niños).'},
{id:'x-t7-regalos-w',topic:'t7',type:'case',src:'course',title:'¿Regalas algo en estas ocasiones? (self-assessed)',
 q:'<p>Workbook p. 50, ex. 2. Write one sentence for each occasion: Día de San Valentín, Navidad, aniversario, cumpleaños, Día de la madre, Día del padre. Use <b>me, te, le, nos, les</b>. Example: <i>Normalmente no le regalo nada a mi novio el día de San Valentín, pero a veces él me regala bombones porque me encanta el chocolate.</i></p>',
 solution:'<p>Model: <i>En Navidad les regalo libros a mis padres y ellos me regalan ropa. En el aniversario de mis padres les regalamos una cena en un restaurante. Para mi cumpleaños mis amigos me hacen una fiesta. El Día de la madre le regalo flores a mi madre. El Día del padre le compramos un delantal de cocina a mi padre.</i></p><p>Check: the pronoun agrees with who receives (le / les), and it is repeated with “a + person”.</p>'},
// Tema 8
{id:'x-t8-tabla1',topic:'t8',type:'text',src:'course',...STRICT,title:'Imperfecto: estar, volver, salir',q:'<p>Workbook p. 58, ex. 2. Complete the missing forms.</p>',
 parts:[['estar',[1,2,3,4]],['volver',[0,2,3,5]],['salir',[0,1,4,5]]].flatMap(([v,ix])=>ix.map(i=>({label:`${v} · ${P[i]}`,accept:[imperf(v)[i]]}))),
 e:'Regular: -aba… (estábamos with an accent), -ía… (every -ía form has an accent).'},
{id:'x-t8-tabla2',topic:'t8',type:'text',src:'course',...STRICT,title:'Imperfecto: ser, ir, ver',q:'<p>Workbook p. 58, ex. 2. Complete the missing forms of the three irregular verbs.</p>',
 parts:[['ser',[0,1,4,5]],['ir',[0,2,3,5]],['ver',[1,2,3,4]]].flatMap(([v,ix])=>ix.map(i=>({label:`${v} · ${P[i]}`,accept:[imperf(v)[i]]}))),
 e:'ser: era, eras, era, éramos, erais, eran · ir: iba, ibas, iba, íbamos, ibais, iban · ver: veía, veías, veía, veíamos, veíais, veían.'},
{id:'x-t8-frases1',topic:'t8',type:'text',src:'course',...STRICT,title:'Imperfecto in context (1–4)',...GAP('Workbook p. 58, ex. 3. Complete with the imperfecto.',
 '1 Mi hermana y yo, cuando [[éramos|ser]] pequeños, no [[nos peleábamos|pelearse]]. ¡[[teníamos|tener]] una relación muy buena! 2 De pequeño, nunca [[quería|querer]] ir a la cama por la noche, pero mi madre me [[leía|leer]] cuentos antes de dormir ¡y eso me [[encantaba|encantar]]! 3 —Cuando vosotros [[erais|ser]] pequeños, ¿[[teníais|tener]] un grupo de música favorito? —¡Sí! Yo [[escuchaba|escuchar]] un grupo mexicano que [[se llamaba|llamarse]] La Onda Vaselina. 4 Yo en clase [[hablaba|hablar]] mucho con mis compañeras y mi profesora, doña Nati, siempre me [[decía|decir]]: “¡Sara, trabaja!”.'),
 e:'Habits and descriptions of childhood. Watch the accents: éramos, peleábamos, teníamos, leía, teníais, decía.'},
{id:'x-t8-frases2',topic:'t8',type:'text',src:'course',...STRICT,title:'Imperfecto in context (5–8)',...GAP('Workbook p. 58, ex. 3. Complete with the imperfecto.',
 '5 Abuela, cuando tú [[eras|ser]] pequeña, ¿[[había|haber]] dinosaurios? 6 De jóvenes, a mi amigo Francisco Javier y a mí nos [[gustaba|gustar]] mucho ir a conciertos de música independiente. Normalmente [[íbamos|ir]] con su hermano, que [[era|ser]] un poco mayor que nosotros. 7 —Rosana, tú de joven [[eras|ser]] muy deportista, ¿no? ¿Es verdad que [[participabas|participar]] en maratones? —¡Uy, no! [[corría|correr]] mucho y [[hacía|hacer]] tours en bicicleta bastante largos, pero no [[participaba|participar]] en competiciones. 8 Nuestro primer gato [[era|ser]] blanco y [[tenía|tener]] manchas marrones. A veces nos [[traía|traer]] un ratón como muestra de simpatía, pero eso a mí no me [[gustaba|gustar]] mucho.'),
 e:'había is invariable; in 6 the subject of ir is “we” (íbamos); gustar agrees with “ir a conciertos” (singular).'},
{id:'x-t8-discman',topic:'t8',type:'text',src:'course',...STRICT,title:'El discman',...GAP('Workbook p. 60, ex. 7a. Complete the text about an object from the past.',
 'Antes no [[podías|poder, tú]] escuchar música en tu teléfono móvil y [[tenías|tener, tú]] que llevar este reproductor. Solo [[se utilizaba|utilizarse, él]] para escuchar música, no [[grababa|grabar, él]] canciones. Comparado con el walkman, en el que no [[podías|poder, tú]] seleccionar la canción, el discman [[era|ser, él]] muy moderno porque [[elegías|elegir, tú]] directamente la canción, [[podías|poder, tú]] pararlo, etc. El problema es que [[ocupaba|ocupar, él]] mucho espacio y [[era|ser, él]] difícil correr o caminar mientras [[escuchabas|escuchar, tú]] música.'),
 e:'Description of an object of the past and of what you could do with it: imperfecto throughout.'},
{id:'x-t8-vhs',topic:'t8',type:'text',src:'course',...STRICT,title:'El VHS',...GAP('Workbook p. 60, ex. 7a.',
 'En aquellos tiempos no [[había|haber, él]] televisión a través de internet y solo [[veías|ver, tú]] los programas que estaban en la tele, [[era|ser, él]] imposible seleccionar lo que [[querías|querer, tú]] ver. Si [[querías|querer, tú]] ver tu programa favorito pero no [[estabas|estar, tú]] en casa, [[podías|poder, tú]] grabarlo con una cinta de vídeo o VHS. La parte negativa es que la duración de las cintas [[era|ser, ella]] muy limitada…, ¡a veces [[grababas|grabar, tú]] el principio del programa pero no el final! Otro problema es que [[ocupaban|ocupar, ellas]] mucho espacio.'),
 e:'había (invariable), veías (ver keeps the e), the rest regular.'},
{id:'x-t8-ej3',topic:'t8',type:'text',src:'course',...STRICT,title:'Ya no / todavía: comprobar el nivel 3',...GAP('Ejercicios para comprobar el nivel, ex. 3. Complete with the verb (and <i>ya no</i> or <i>todavía</i> where needed).',
 '1 Cuando era niño, yo [[iba|ir]] al colegio a las ocho, pero después de mudarnos, [[ya no iba|ir]] a esa escuela. 2 Antes, mis abuelos [[vivían|vivir]] en el campo, pero ahora [[viven|vivir]] en la ciudad. 3 Durante la adolescencia, mis amigos [[jugaban|jugar]] fútbol todos los fines de semana, y yo [[participaba/también participaba|participar]] también. 4 Cuando éramos pequeños, mi hermano [[no sabía/todavía no sabía|saber]] nadar, pero ahora [[sabe|saber]] muy bien. 5 Antes, mis padres [[tenían|tener]] un perro, y yo [[quería|querer]] mucho a ese perro.'),
 e:'The instruction asks for the imperfecto, but “ahora” calls for the present (viven, sabe): the site gives the present there. Sentence 4 only makes sense with a negation (no sabía nadar, pero ahora sabe).'},
{id:'x-t8-ej1',topic:'t8',type:'text',src:'course',...STRICT,title:'Ya no / todavía: comprobar el nivel 1',...GAP('Ejercicios para comprobar el nivel, ex. 1. Complete with the verb and <i>ya no</i> or <i>todavía</i>.',
 '1 Cuando éramos niños, yo [[veía|ver]] dibujos animados todas las tardes, pero después de la secundaria, [[ya no veía/no veía|ver]] tan seguido. 2 Antes, mis amigos [[vivían|vivir]] cerca de mi casa, pero ahora [[ya no viven|vivir]] allí. 3 Durante la infancia, mi hermana [[tenía|tener]] miedo a la oscuridad, pero ya [[no tenía/no tiene|tener]] miedo. 4 Antes, nosotros [[comíamos|comer]] muchas verduras, y todavía [[le gustan/le gustaban|gustar]] a mi hermano.'),
 e:'Change → ya no; no change → todavía. In 3, “ya” is already printed: write “no tenía” (or “no tiene” if you read it as now). In 4 gustar needs the indirect pronoun le (a mi hermano) and agrees with “verduras”: le gustan.'},
{id:'x-t8-ej4',topic:'t8',type:'text',src:'course',title:'COD o COI',...GAP('Ejercicios para comprobar el nivel, ex. 4. Replace the object by the right pronoun.',
 '1 Yo leo el libro todos los días. → Yo [[lo|]] leo todos los días. 2 María da un regalo a su hermano. → María [[le|]] da un regalo. 3 Nosotros vemos la película en el cine. → Nosotros [[la|]] vemos en el cine. 4 Pedro explica la lección a nosotros. → Pedro [[nos|]] explica la lección. 5 Tú compras una flor para tu madre. → Tú [[la|]] compras para tu madre.'),
 e:'Direct object (what?): lo, la. Indirect object (to whom?): le, nos.'},
{id:'x-t8-ej5',topic:'t8',type:'text',src:'course',title:'COD + COI juntos (1)',...GAP('Ejercicios para comprobar el nivel, ex. 5. Write both pronouns.',
 '1 Juan da el libro a María. → Juan [[se lo|]] da. 2 Yo escribo una carta a mis abuelos. → Yo [[se la|]] escribo. 3 Ellos venden las entradas a los turistas. → Ellos [[se las|]] venden. 4 Nosotros mostramos la foto a nuestros amigos. → Nosotros [[se la|]] mostramos. 5 Tú compras los regalos para tus padres. → Tú [[se los|]] compras.'),
 e:'le/les + lo/la/los/las → se lo, se la, se los, se las.'},
{id:'x-t8-ej7',topic:'t8',type:'text',src:'course',title:'COD + COI juntos (2)',...GAP('Ejercicios para comprobar el nivel, ex. 7.',
 '1 Yo doy el libro a mi hermano. → Yo [[se lo|]] doy. 2 Tú compras una camiseta para tu amiga. → Tú [[se la|]] compras. 3 Nosotros enviamos las invitaciones a nuestros primos. → [[se las|]] enviamos. 4 Ellos explican la lección a los estudiantes. → [[se la|]] explican. 5 Juan trae las flores a su madre. → [[se las|]] trae. 6 Yo escribo una carta a mis abuelos. → [[se la|]] escribo. 7 María prepara la comida para su familia. → [[se la|]] prepara. 8 Vosotros contáis el cuento a los niños. → [[se lo|]] contáis. 9 Ellas muestran las fotos a sus amigos. → [[se las|]] muestran. 10 Tú das el regalo a tu profesor. → [[se lo|]] das.'),
 e:'Every indirect object here is 3rd person (le / les), so it always becomes se.'},
{id:'x-t8-18',topic:'t8',type:'text',src:'course',...STRICT,title:'Replace the direct object (p. 63, ex. 18)',q:'<p>Workbook p. 63, ex. 18. Rewrite each sentence, replacing the direct object with a pronoun.</p>',
 parts:[{label:'1. Me puse un piercing.',accept:['me lo puse']},{label:'2. Eduardo les dijo la verdad.',accept:['eduardo se la dijo','se la dijo']},{label:'3. Les prepararon una sorpresa a sus padres.',accept:['se la prepararon']},
  {label:'4. Le busqué un peluquero a mi amiga.',accept:['se lo busqué']},{label:'5. Te regalé los pendientes que querías.',accept:['te los regalé']},{label:'6. María nos dejaba los libros.',accept:['maría nos los dejaba','nos los dejaba']},
  {label:'7. Te compró la chaqueta.',accept:['te la compró']},{label:'8. Ayer le prestamos la bicicleta a Elena.',accept:['ayer se la prestamos','se la prestamos']},{label:'9. Mi hermano me trajo muchas fotos viejas de la familia.',accept:['mi hermano me las trajo','me las trajo']},
  {label:'10. Mis amigas y yo nos hicimos el mismo tatuaje en el pie.',accept:['mis amigas y yo nos lo hicimos en el pie','nos lo hicimos en el pie','nos lo hicimos']}],
 e:'Indirect pronoun first; les/le + la → se la; the “a + person” is dropped once the pronoun says it.'},
{id:'x-t8-16',topic:'t8',type:'text',src:'course',title:'¿Qué haces con estas cosas?',q:'<p>Workbook p. 63, ex. 16. Use a pronominal verb (lavarse, hacerse, teñirse, peinarse, quitarse, ponerse, maquillarse, cambiarse, cortarse, probarse) with the right pronouns. Example: El pelo → <i>me lo lavo</i>.</p>',
 parts:[{label:'La cara',accept:['me la lavo','me la maquillo']},{label:'Las gafas',accept:['me las pongo','me las quito','me las cambio','me las pruebo']},{label:'Los tatuajes',accept:['me los hago','me los quito']}],
 e:'me (myself, indirect) + lo/la/los/las agreeing with the thing.'},
{id:'x-t8-combo',topic:'t8',type:'text',src:'practice',...STRICT,title:'se lo, se la… (new sentence)',
 gen:u=>{const S=[['Juan','da','dar'],['María','envía','enviar'],['Mi hermano','trae','traer'],['La profesora','explica','explicar'],['Elena','regala','regalar'],['Pedro','presta','prestar'],['Mi abuela','muestra','mostrar'],['Lucía','compra','comprar']];
  const O=[['el libro','lo'],['la carta','la'],['los regalos','los'],['las flores','las'],['la chaqueta','la'],['el pedido','lo'],['las entradas','las'],['los documentos','los'],['la lección','la'],['el periódico','lo']];
  const I=['a María','a sus padres','a los turistas','a su madre','a sus abuelos','a Elena','a su profesor','a los niños'];
  const [su,v,inf]=u.pick(S),[ob,pr]=u.pick(O),io=u.pick(I),inf2=u.pick([false,true]);
  const acc={dar:'dár',enviar:'enviár',traer:'traér',explicar:'explicár',regalar:'regalár',prestar:'prestár',mostrar:'mostrár',comprar:'comprár'}[inf];
  return inf2?{s:`${su} quiere ${inf} ${ob} ${io}.`,frame:`${su} quiere ___.`,a:[`${acc}se${pr}`,`se ${pr} quiere ${inf}`],full:`${su} quiere ${acc}se${pr}. (or: ${su} se ${pr} quiere ${inf}.)`}
   :{s:`${su} ${v} ${ob} ${io}.`,frame:`${su} ___ ${v}.`,a:[`se ${pr}`],full:`${su} se ${pr} ${v}.`}},
 q:v=>`<p>Replace both objects with pronouns.</p><p><b>${v.s}</b></p><p>${v.frame} (write the missing part)</p>`,accept:v=>v.a,
 solution:v=>`<p>${v.full}</p><p>${'le/les + lo/la/los/las → se lo/la/los/las. With an infinitive, the pronouns can be attached (with an accent on the stressed vowel) or go before quiere.'}</p>`},
{id:'x-t8-60',topic:'t8',type:'case',src:'course',title:'¿Cómo eran estas cosas hace 60 años? (self-assessed)',
 q:'<p>Workbook p. 60, ex. 8. Write two sentences in the imperfecto for each theme: <b>la educación</b> (los profesores, los libros de texto, las clases), <b>la familia</b> (los padres, las madres, la relación entre padres e hijos), <b>los viajes</b> (los aviones, el tren, las vacaciones). Compare with today using <i>ahora / hoy en día</i>, <i>todavía</i>, <i>ya no</i>.</p>',
 solution:'<p>Model: <i>Hace 60 años los profesores eran muy estrictos y los alumnos no hablaban en clase. Los libros de texto tenían pocas imágenes. Las madres normalmente no trabajaban fuera de casa y los padres pasaban poco tiempo con los hijos; la relación era más distante. Viajar en avión era muy caro y la gente viajaba en tren, que era lento. Las vacaciones eran en el pueblo de los abuelos. Hoy en día los profesores ya no son tan estrictos y mucha gente viaja en avión.</i></p><p>Check: imperfecto for every past description; era / eran, iba / iban, había spelled right; at least one comparison with today.</p>'},
{id:'x-t8-10',topic:'t8',type:'case',src:'course',title:'Antes, ahora todavía / ya no (self-assessed)',
 q:'<p>Workbook p. 61, ex. 10. Complete with your own information: 1 Yo antes … y ahora todavía … 2 Antes … y ahora ya no … 3 Cuando era pequeño/a … y ahora …</p>',
 solution:'<p>Model: <i>1 Yo antes jugaba al tenis y ahora todavía juego los domingos. 2 Antes vivía con mis padres y ahora ya no vivo con ellos. 3 Cuando era pequeña quería ser astronauta y ahora quiero trabajar en marketing.</i></p><p>Check: imperfecto after antes / cuando era pequeño, present after ahora.</p>'},
// Repaso
{id:'x-t9-bic',topic:'t9',type:'text',src:'course',...STRICT,title:'La historia del bolígrafo Bic',...GAP('Socios p. 43, ex. 14. Complete the history of the Bic pen with the missing past verbs.',
 'En 1946, Marcel Bich, barón de Bich, nacido en Turín (Italia), [[compró|comprar]] un taller de fabricación de plumas estilográficas en París. En aquella época la gente [[escribía|escribir]] con pluma, [[era|ser]] un instrumento incómodo y caro. La punta [[se rompía|romperse]] con frecuencia y los papeles [[se ensuciaban|ensuciarse]] con facilidad. En 1951, Bich [[compró|comprar]] una patente, la [[perfeccionó|perfeccionar]] y [[creó|crear]] su propia marca, para ello le [[quitó|quitar]] la “h” a su apellido: Bic. Al poco tiempo, el barón [[popularizó|popularizar]] el bolígrafo y para lograr sus objetivos, [[automatizó|automatizar]] la fabricación. A través de la publicidad, el producto [[empezó|empezar]] a conocerse en toda Francia y muy pronto [[abrió|abrir]] mercados en toda Europa. En 1958 [[inició|iniciar]] su aventura al otro lado del Atlántico y [[adquirió|adquirir]] una participación mayoritaria de la sociedad americana Waterman, que le [[sirvió|servir]] de base para fundar la compañía Bic Corporation. La masiva implantación del bolígrafo [[modificó|modificar]] radicalmente el sistema de escritura de la época e [[influyó|influir]] en las costumbres sociales. El Bic [[se convirtió|convertirse]] en el instrumento de escritura más utilizado.'),
 e:'Dated events and the sequence of the story: indefinido (compró, perfeccionó, creó…). How things were “en aquella época”: imperfecto (escribía, era, se rompía, se ensuciaban). servir → sirvió, influir → influyó.'},
{id:'x-t9-ej6',topic:'t9',type:'text',src:'course',...STRICT,title:'Pretérito indefinido: comprobar el nivel 6',...GAP('Ejercicios para comprobar el nivel, ex. 6. Complete with the pretérito indefinido.',
 '1 Ayer, yo [[fui|ir]] al cine con mis amigos. 2 La semana pasada, Marta [[compró|comprar]] un vestido nuevo. 3 El año pasado, nosotros [[viajamos|viajar]] a España. 4 Juan [[terminó|terminar]] su proyecto el lunes. 5 Ellos [[vieron|ver]] una película de terror el viernes. 6 Tú [[escribiste|escribir]] un correo a tu profesor ayer. 7 Mis padres [[cocinaron|cocinar]] una cena especial el sábado. 8 Los niños [[jugaron|jugar]] en el parque toda la tarde. 9 Yo [[leí|leer]] un libro muy interesante la semana pasada. 10 María y yo [[conocimos|conocer]] a nuestros vecinos nuevos el mes pasado.'),
 e:'Markers ayer, la semana pasada, el año pasado, el lunes: indefinido. Irregular: fui (ir), vieron (no accent), leí.'},
{id:'x-t9-indef',topic:'t9',type:'text',src:'practice',...STRICT,title:'Pretérito indefinido (new verb)',
 gen:u=>{const v=u.pick(IND_VERBS);const i=u.int(0,5);return {v,i,a:indef(v)[i]}},
 q:v=>`<p>Pretérito indefinido of <b>${v.v}</b>, person <b>${P[v.i]}</b>.</p>`,accept:v=>[v.a],solution:v=>conjTable([v.v],indef)},
{id:'x-t9-imperf',topic:'t9',type:'text',src:'practice',...STRICT,title:'Imperfecto or indefinido? (new sentence)',
 gen:u=>{const S=[
  ['Cuando era pequeño, yo ___ (jugar) al fútbol todos los días.','jugaba','habit in childhood'],
  ['En 1953 el primer Seat ___ (salir) de la fábrica de Barcelona.','salió','event with a date'],
  ['En aquella época la gente ___ (escribir) con pluma.','escribía','description of the period'],
  ['El año pasado nosotros ___ (viajar) a México.','viajamos','completed event, marker “el año pasado”'],
  ['Mi abuelo ___ (ser) muy alto y ___ (tener) el pelo negro.','era tenía','description of a person'],
  ['Ayer Marta ___ (comprar) unas botas de piel.','compró','completed event, marker “ayer”'],
  ['De joven, Rosana ___ (hacer) tours en bicicleta.','hacía','habit when young'],
  ['En 1986 Volkswagen ___ (hacerse) cargo de Seat.','se hizo','event with a date'],
  ['Antes no ___ (haber) internet en las casas.','había','situation of the past'],
  ['La semana pasada mis amigos me ___ (dar) una sorpresa.','dieron','completed event'],
  ['Cuando ___ (tener) 15 años, emigró a Buenos Aires.','tenía','age as background'],
  ['El 600 ___ (dejar) de fabricarse en 1973.','dejó','event with a date']];
  const [s,a,why]=u.pick(S);return {s,a,why}},
 q:v=>`<p>${v.s}</p><p>Write the verb(s) in the right past tense${/___.*___/.test(v.s)?' (two verbs, separated by a space)':''}.</p>`,accept:v=>[v.a],solution:v=>`<p><b>${v.a}</b>: ${v.why}.</p>`},
{id:'x-t9-chocolate',topic:'t9',type:'case',src:'course',title:'Historia del chocolate (anuncio de los años 40)',
 q:'<p>Socios p. 37, ex. 5. “Moctezuma II, emperador de México (1502–1519 aproximadamente), tomaba siempre ‘xocolatl’ o chocolate después de comer y lo bebía en copas de oro o de nácar. El chocolate era la bebida de los dioses y solo lo consumían las personas de alta posición social. Era tan importante el valor del cacao que sus semillas se utilizaban como monedas y algunos de los pueblos sometidos al Imperio Azteca pagaban sus tributos al emperador en esa moneda.”</p>',
 parts:[{type:'mcq',q:'B. In which tense are the past verbs, and why?',o:['Pretérito imperfecto: they describe habits and situations of that time','Pretérito indefinido: the dates 1502–1519 are given','Presente: the advert is from the 1940s','Pretérito perfecto: the action is recent'],a:0},
  {type:'text',q:'C. tomar, nosotros (same tense)',accept:['tomábamos']},{type:'text',q:'C. beber, vosotros',accept:['bebíais']},{type:'text',q:'C. consumir, yo',accept:['consumía']},
  {type:'text',q:'D. The irregular verb of the text (infinitive)',accept:['ser','era']}],
 solution:'<p>B. Imperfecto: habits (tomaba siempre, lo bebía) and descriptions (era la bebida de los dioses). C. tomaba, tomabas, tomaba, tomábamos, tomabais, tomaban · bebía… bebíais… · consumía… D. <b>era</b> (ser): ser, ir and ver are the only irregular verbs in the imperfecto.</p>',...STRICT},
{id:'x-t9-seat',topic:'t9',type:'case',src:'course',title:'Seat, el coche: the figures',
 q:'<p>Socios p. 38, ex. 7: the text is summarised in the Repaso sheet (section 7). Answer with numbers.</p>',
 parts:[{type:'numeric',q:'Year Seat was born',answer:1950,tol:0},{type:'numeric',q:'Hours worked per week by Antonio Barrios in 1954',answer:48,tol:0},{type:'numeric',q:'His first hourly wage (pesetas)',answer:4.7},
  {type:'numeric',q:'Cars produced per year after the 600 (up from 400)',answer:30000,tol:0},{type:'numeric',q:'Units of the 600 sold in total',answer:800000,tol:0},{type:'numeric',q:'Year Volkswagen took over Seat',answer:1986,tol:0},
  {type:'numeric',q:'Cars produced per day today',answer:2240,tol:0},{type:'numeric',q:'Employees today',answer:14500,tol:0},{type:'numeric',q:'Years Antonio Barrios worked at Seat',answer:42,tol:0}],
 solution:'<p>1950 · 48 h · 4,70 pesetas (then 5,20) · 30 000 cars a year · 800 000 units · 1986 · 2 240 a day (vs 4) · 14 500 (vs 925) · 42 years (retired in 1996).</p>'},
{id:'x-t9-seat-orden',topic:'t9',type:'order',src:'course',title:'Seat: put the history in order',q:'Socios p. 38, ex. 7. Put the events in chronological order.',
 items:['Seat nació con un capital de 600 millones de pesetas.','El primer coche salió de la fábrica de Barcelona.','Antonio Barrios entró a trabajar como mecánico.','La empresa empezó a tener éxito con el lanzamiento del 600.','El 124 salió de la cadena de montaje.','El 600 dejó de fabricarse.','Fiat abandonó el capital de Seat.','Seat empezó a buscar un socio tecnológico y financiero.','Volkswagen se hizo cargo de Seat.','Antonio Barrios se jubiló.'],
 e:'1950 → 1953 → 1954 → 1957 → 1968 → 1973 → end of the 70s → 1983 → 1986 → 1996.'},
{id:'x-t9-15a',topic:'t9',type:'match',src:'course',title:'Ya, todavía no, ya no, todavía',q:'Socios p. 43, ex. 15A. All the sentences are correct: which situation matches each one?',
 pairs:[['Ya he escrito el informe.','He terminado el informe que estaban esperando.'],['Todavía no he escrito el informe.','No he terminado el informe pero voy a terminarlo pronto.'],['Ya no escribo informes.','Antes escribía informes en mi trabajo, ahora hago otras cosas.'],['Todavía escribo informes.','Antes escribía informes y ahora también.']]},
{id:'x-t9-15b',topic:'t9',type:'text',src:'course',title:'Rewrite with ya, ya no, todavía, todavía no',q:'<p>Socios p. 43, ex. 15B. Rewrite each sentence.</p>',
 parts:[{label:'1. Estoy preparando la cena. Terminaré dentro de media hora.',accept:['todavía no he terminado la cena','todavía no he terminado','todavía no he preparado la cena','todavía no he hecho la cena','todavía no he terminado de preparar la cena']},
  {label:'2. He vendido todos los productos que tenía que vender este año.',accept:['ya he vendido todos los productos','ya he vendido todos los productos que tenía que vender este año','ya los he vendido todos']},
  {label:'3. Ahora trabajo en una oficina y antes trabajaba en una fábrica.',accept:['ya no trabajo en una fábrica','ahora ya no trabajo en una fábrica']},
  {label:'4. No he cambiado de casa. Vivo en la casa de siempre, en la Avenida de América.',accept:['todavía vivo en la avenida de américa','todavía vivo en la casa de siempre','todavía vivo en la misma casa']},
  {label:'5. Antes enviábamos faxes, ahora solo correos electrónicos.',accept:['ya no enviamos faxes','ahora ya no enviamos faxes']},
  {label:'6. No hemos cambiado de asesor, seguimos trabajando con el señor Martínez.',accept:['todavía trabajamos con el señor martínez','todavía trabajamos con el mismo asesor']}],
 e:'todavía no = not yet; ya = already done; ya no = no longer; todavía = still.'},
{id:'x-t9-45c',topic:'t9',type:'match',src:'course',title:'¿A quién se refieren?',q:'Socios p. 45, ex. C. Who do the underlined pronouns refer to?',
 pairs:[['Todavía no <u>nos</u> lo han entregado.','a nosotros'],['<u>Te</u> las daré mañana.','a ti'],['<u>Os</u> la ha regalado mi hermano.','a vosotros'],['<u>Se</u> los envió ayer y hoy los han recibido.','a ellos']]},
{id:'x-t9-45e',topic:'t9',type:'text',src:'course',title:'Pronouns: the table and the rule',q:'<p>Socios p. 45, ex. D and E. Complete.</p>',
 parts:[{label:'D. tú →',accept:['te']},{label:'D. nosotros/as →',accept:['nos']},{label:'D. vosotros/as →',accept:['os']},
  {label:'E. Cuando se combinan le o les con lo, la, los, las, los primeros se transforman en…',accept:['se']},{label:'E. Nunca se dice le/les lo/los/la/las sino ___ lo/los/la/las.',accept:['se']}],
 e:'me, te, le, nos, os, les; le/les → se before lo, la, los, las.'},
{id:'x-t9-18',topic:'t9',type:'text',src:'course',title:'Complete with the missing pronouns',...GAP('Socios p. 45, ex. 18.',
 '1 —¿Has enviado el pedido a aquel cliente? —Sí, [[se|]] lo envié ayer. 2 —¿Os han dado el permiso de exportación? —Sí, [[nos lo|]] dieron ayer. 3 —Me gusta mucho tu traje. —Sí, a mí también. [[me|]] lo regalaron para mi cumpleaños. 4 Mañana se van de viaje y todavía no [[les|]] hemos entregado los billetes de avión. 5 Sr. García, la agenda [[se|]] la enviamos ayer. 6 —¿Cuándo [[le|]] disteis los documentos a Marta? —[[se los|]] dimos la semana pasada.'),
 e:'4 and 6a: the direct object is still written, so only the indirect pronoun (les, le). 5: usted → le → se.'},
{id:'x-t9-perifrasis',topic:'t9',type:'text',src:'practice',...STRICT,title:'empezar a, soler, seguir + gerundio',...GAP('Complete (programme: Repaso).',
 '1 Normalmente, nosotros [[solemos|soler]] comer a las dos. 2 De pequeña, mi abuela [[solía|soler, imperfecto]] hacer galletas los domingos. 3 No hemos cambiado de asesor: [[seguimos|seguir, nosotros]] trabajando con el señor Martínez. 4 Mi hermano sigue [[viviendo|vivir]] en la casa de siempre. 5 A través de la publicidad, el producto [[empezó|empezar, indefinido]] a conocerse en toda Francia. 6 Mi padre todavía está [[leyendo|leer]] el periódico. 7 Seat empezó [[a|]] dejar de dar beneficios a finales de los años 70.'),
 e:'soler + infinitive (suelo… solemos; past habit solía); seguir + gerund (sigo, seguimos); empezar a + infinitive; leer → leyendo.'},
{id:'x-t9-perla',topic:'t9',type:'text',src:'course',...STRICT,title:'Don Manuel Belver: imperfecto or indefinido',...GAP('Based on the La Perla text (Socios). Conjugate the verbs.',
 'Don Manuel Belver Vara [[nació|nacer]] el 18 de octubre de 1905 en Samir, un pueblecito de la provincia de Zamora. Cuando [[tenía|tener]] 15 años [[emigró|emigrar]] a Buenos Aires. Allí [[comenzó|comenzar]] a trabajar como aprendiz en los Almacenes La Plata, donde su hermano [[era|ser]] el encargado de la sección de caballeros. En 1935 [[volvió|volver]] a España. La tienda [[contaba|contar]] con solo cinco dependientes que se [[dedicaban|dedicar]] a atender a los clientes. En los años sesenta La Perla [[tenía|tener]] más de 50 sucursales. En 1980, un año antes de morir, [[creó|crear]] la Fundación Manuel Belver.'),
 e:'Dated events (nació, emigró, volvió, creó) → indefinido; age, job of his brother, size of the shop, number of branches (background) → imperfecto.'},
{id:'x-t9-abuelos',topic:'t9',type:'case',src:'practice',title:'La vida de nuestros abuelos en los años 50 (self-assessed)',
 q:'<p>Topic of the CC2 oral (programme): write 120–150 words on life in the 1950s compared with today: games and toys, school, work, food habits, medicine, leisure. Use the imperfecto for habits, and <i>antes / ahora, todavía, ya no, tan / tanto … como</i>.</p>',
 solution:'<p>Model: <i>En los años 50 la vida de nuestros abuelos era muy diferente. Los niños jugaban en la calle con juguetes sencillos, de madera o de tela, y no tenían tantos juguetes como ahora. En la escuela los profesores eran muy estrictos y los alumnos escribían con pluma. Muchas personas trabajaban en el campo o en fábricas, seis días a la semana. La gente comía productos del mercado y casi no había comida preparada. Los médicos venían a casa, pero no había tantos medicamentos como hoy. Por la noche, las familias escuchaban la radio; la televisión llegó a España en 1956 y era un lujo. Hoy en día ya no jugamos tanto en la calle, pero todavía nos gusta reunirnos en familia.</i></p><p>Check: imperfecto for habits and descriptions, one indefinido for a dated event (llegó en 1956), two comparisons, había (not habían).</p>'},
{id:'x-t9-objeto',topic:'t9',type:'case',src:'course',title:'Un objeto del pasado (self-assessed)',
 q:'<p>Workbook p. 60, ex. 7b. Think of another object from the past (the typewriter, the cassette, the phone box, the fax…) and write a short description like the discman and VHS texts: what it was like, what you could do with it, its problems, what we use now.</p>',
 solution:'<p>Model: <i>La máquina de escribir. Antes no había ordenadores y la gente escribía las cartas con una máquina de escribir. Era pesada y hacía mucho ruido. Si te equivocabas, tenías que empezar la página otra vez o usar un líquido corrector. No podías guardar ni enviar los textos. Ahora ya no se usa: escribimos con el ordenador o el móvil, pero todavía hay gente que las guarda como recuerdo.</i></p>'}];

/* ---------- flashcards ---------- */
const C=(id,topic,f,b)=>({id,topic,f,b});
const CARDS=[
C('c0','t7','el abrigo · el anorak','coat · anorak'),C('c1','t7','la bufanda · los guantes','scarf · gloves'),C('c2','t7','el gorro · el sombrero','woolly hat · hat (with a brim)'),
C('c3','t7','el cinturón · la corbata','belt · tie'),C('c4','t7','el chaleco · la falda · la blusa','waistcoat · skirt · blouse'),C('c5','t7','los calcetines · el calzado · el tacón','socks · footwear · heel'),
C('c6','t7','el bolso · el bolsillo · la manga','handbag · pocket · sleeve'),C('c7','t7','el probador · el escaparate','fitting room · shop window'),C('c8','t7','el/la dependiente/a','shop assistant'),
C('c9','t7','de pana · de piel · de seda · de lana · de algodón','corduroy · leather · silk · wool · cotton'),C('c10','t7','de rayas · de cuadros','striped · checked'),
C('c11','t7','ancho ≠ … · ceñido ≠ … · claro ≠ …','ancho ≠ estrecho · ceñido ≠ suelto · claro ≠ oscuro'),C('c12','t7','acortar ≠ … · ponerse ≠ …','acortar ≠ alargar · ponerse ≠ quitarse'),
C('c13','t7','envolver · devolver (presente, yo)','envuelvo (to wrap) · devuelvo (to return an item)'),C('c14','t7','¿Cómo va a pagar?','En efectivo. / Con tarjeta.'),
C('c15','t7','Polite way to ask for something in a shop','Quería… (imperfecto de cortesía): Quería unos pantalones de pana.'),
C('c16','t7','Size: clothes vs shoes','clothes: la talla (¿Qué talla tiene? La 42) · shoes: el número (¿Qué número tiene? El 39)'),
C('c17','t7','¿Qué tal le quedan?','Me quedan bien / grandes / pequeños / un poco estrechos. ¿Tiene una talla más?'),
C('c18','t7','I’ll take them (los zapatos / la novela)','Me los llevo. / Me la llevo.'),C('c19','t7','Indirect object pronouns','me, te, le, nos, os, les'),
C('c20','t7','A Ignacio ___ regalamos una entrada.','le: the indirect object is repeated (a Ignacio + le).'),
C('c21','t7','Equality with an adjective / a noun / a verb','tan alta como · tanto tiempo como (tanta, tantos, tantas) · trabajo tanto como'),
C('c22','t7','Inequality','más / menos + adj. / noun + que · verb + más / menos que · mejor, peor, mayor, menor'),
C('c23','t7','Imperative vosotros: llevar, ir, relajarse','llevad · id · relajaos'),C('c24','t7','Imperative ustedes: llevar, hacer, ir, ponerse','lleven · hagan · vayan · pónganse'),
C('c25','t7','Shops not ending in -ería','la óptica · el supermercado · el centro comercial'),C('c26','t7','la librería ≠ la biblioteca','bookshop (buy) ≠ library (borrow)'),
C('c27','t8','Imperfecto endings -ar','-aba, -abas, -aba, -ábamos, -abais, -aban'),C('c28','t8','Imperfecto endings -er / -ir','-ía, -ías, -ía, -íamos, -íais, -ían'),
C('c29','t8','The three irregular imperfectos','ser: era… éramos · ir: iba… íbamos · ver: veía…'),C('c30','t8','haber in the imperfecto','había (invariable: había dinosaurios)'),
C('c31','t8','When the imperfecto?','habits of the past · descriptions of people, things, places · how things were (antes / ahora) · polite quería'),
C('c32','t8','Imperfecto markers','de pequeño/a, de niño, de joven, cuando era…, antes, en aquella época, entonces, en los años 50, hace 60 años'),
C('c33','t8','todavía vs ya no','todavía = no change (still) · ya no = change (no longer)'),C('c34','t8','Direct object pronouns','me, te, lo / la, nos, os, los / las'),
C('c35','t8','le / les + lo / la / los / las','se lo, se la, se los, se las (never le lo): Lucas se las trae.'),
C('c36','t8','Order of two pronouns','indirect first, then direct: me lo, te la, nos los, se las'),
C('c37','t8','Pronouns with an infinitive or a gerund','attached, with an accent: quitármelo, probándoselas, dárselo (or before the conjugated verb: se lo quiero dar)'),
C('c38','t8','El pelo → ___ lavo','me lo lavo (las gafas → me las pongo)'),
C('c39','t9','Indefinido endings -ar','-é, -aste, -ó, -amos, -asteis, -aron'),C('c40','t9','Indefinido endings -er / -ir','-í, -iste, -ió, -imos, -isteis, -ieron'),
C('c41','t9','ser / ir in the indefinido','fui, fuiste, fue, fuimos, fuisteis, fueron'),
C('c42','t9','Strong indefinidos (yo / él)','tuve/tuvo · estuve/estuvo · pude/pudo · puse/puso · supe/supo · quise/quiso · vine/vino · hice/hizo (no accent)'),
C('c43','t9','decir, traer: ellos','dijeron, trajeron (no i)'),C('c44','t9','leer, pedir, dormir: él','leyó · pidió · durmió'),C('c45','t9','jugar, buscar, empezar: yo','jugué · busqué · empecé'),
C('c46','t9','Indefinido or imperfecto?','completed event with a date, sequence (compró, creó) ↔ background, habit, description (escribía, era)'),
C('c47','t9','soler + infinitive','usually do: suelo, sueles, suele, solemos, soléis, suelen · past habit: solía'),
C('c48','t9','seguir + gerundio','still doing: Seguimos trabajando con el señor Martínez.'),C('c49','t9','empezar a + infinitivo','El producto empezó a conocerse en toda Francia.'),
C('c50','t9','ya · todavía no','ya = already done · todavía no = not yet'),C('c51','t9','Gerundio irregular: leer, ir, dormir, decir','leyendo · yendo · durmiendo · diciendo'),
C('c52','t9','Seat: key dates','1950 nace · 1953 primer coche · 1957 el 600 · 1973 fin del 600 · 1986 Volkswagen'),
C('c53','t9','la sucursal · el/la accionista · inaugurar','branch · shareholder · to open (a shop)')];

/* ---------- verb drill module ---------- */
/* ---------- v2 (24/11/2026): layered sheets, tense tree, role-play, glossary, generators (CONVENTIONS.md section 16) ---------- */
const {LAYERED,DIALOG}=Rev.h;
const OUT='<b>Outside the workbook:</b>';
const PER=['yo','tú','él / ella / usted','nosotros/as','vosotros/as','ellos / ellas / ustedes'];

/* ---------- v2: role-play in a shop (Spanish) ---------- */
const DL_SHOP={id:'dl-tienda',topic:'t7',title:'En una zapatería: el cliente eres tú',who:'Dependienta',start:'a',
 intro:'<p>Role-play in Spanish with the fórmulas de cortesía of Tema 7. Choose your reply; each choice is commented. Dialogue written by the site.</p>',
 nodes:{
  a:{say:'Buenas tardes, ¿en qué puedo ayudarle?',o:[
   {t:'Quiero zapatos.',to:'b',q:1,fb:'Understandable but blunt: use the polite imperfect <i>quería</i>.'},
   {t:'Quería ver unos zapatos negros, por favor.',to:'b',q:2,fb:'<i>Quería</i> = polite “I would like” (Tema 7).'},
   {t:'Dame zapatos.',to:'b',q:0,fb:'A tú imperative to a shop assistant you do not know: rude.'}]},
  b:{say:'Muy bien. ¿Qué número tiene?',o:[
   {t:'Tengo 39 años.',to:'c',q:0,fb:'That is your age! Shoes have a <i>número</i>: “El 39”.'},
   {t:'El 39.',to:'c',q:2,fb:'Shoes: <i>número</i>; clothes: <i>talla</i>.'},
   {t:'La talla 39.',to:'c',q:1,fb:'For shoes say <i>número</i>, not <i>talla</i>.'}]},
  c:{say:'Aquí tiene. ¿Quiere probárselos?',o:[
   {t:'Sí, ¿puedo probármelos aquí?',to:'d',q:2,fb:'<i>me</i> + <i>los</i> (los zapatos), attached to the infinitive.'},
   {t:'Sí, ¿puedo probármelo?',to:'d',q:0,fb:'<i>los zapatos</i> is masculine plural: <i>probármelos</i>.'},
   {t:'Sí, gracias.',to:'d',q:1,fb:'Correct, but practise the pronouns: <i>¿Puedo probármelos?</i>'}]},
  d:{say:'¿Qué tal le quedan?',o:[
   {t:'Me quedan un poco pequeños. ¿Los tiene en un número más?',to:'e',q:2,fb:'<i>quedar</i> + indirect pronoun, agreement <i>pequeños</i>, and <i>los</i> for the shoes.'},
   {t:'Me queda pequeño.',to:'e',q:0,fb:'The subject is <i>los zapatos</i>: <i>me quedan pequeños</i>.'},
   {t:'Son pequeños.',to:'e',q:1,fb:'Understandable; the course formula is <i>me quedan pequeños</i>.'}]},
  e:{say:'Sí, mire, el 40. Estos cuestan 79 euros.',o:[
   {t:'Perfecto, me los llevo.',to:'f',q:2,fb:'<i>Me los llevo</i>: the pronoun agrees with <i>los zapatos</i>.'},
   {t:'Perfecto, me lo llevo.',to:'f',q:0,fb:'Plural masculine object: <i>me los llevo</i>.'},
   {t:'¿Cuánto cuestan los otros?',to:'f',q:1,fb:'A natural question (<i>cuestan</i>, plural), but she asked whether you take them.'}]},
  f:{say:'¿Cómo va a pagar, en efectivo o con tarjeta?',o:[
   {t:'En tarjeta.',to:'g',q:0,fb:'The formula is <i>con tarjeta</i> / <i>en efectivo</i>.'},
   {t:'Con tarjeta, por favor. ¿Me los envuelve para regalo?',to:'g',q:2,fb:'<i>con tarjeta</i>, and <i>me los envuelve</i> (envolver: o → ue).'},
   {t:'Con efectivo.',to:'g',q:0,fb:'<i>en efectivo</i>, but <i>con tarjeta</i>.'},
   {t:'Con tarjeta.',to:'g',q:1,fb:'Right. You could also ask for gift wrapping: <i>¿Me los envuelve para regalo?</i>'}]},
  g:{say:'Claro. Aquí tiene. Si no le quedan bien, puede devolverlos en un plazo de quince días.',o:[
   {t:'Vale. Los devuelvo presentando este tique, ¿verdad?',to:'z',q:2,fb:'<i>devolver</i> (o → ue): <i>los devuelvo</i>; workbook formula.'},
   {t:'Vale. Lo devolvo con el tique.',to:'z',q:0,fb:'Two mistakes: <i>los</i> (plural) and <i>devuelvo</i> (stem change).'},
   {t:'Muchas gracias, adiós.',to:'z',q:1,fb:'Polite; checking the return conditions was the point of this line.'}]},
  z:{say:'Exacto. ¡Muchas gracias y hasta luego!',end:true,verdict:'Formulas, pronoun agreement (me los llevo, probármelos, me los envuelve) and stem-changing verbs (cuestan, envuelve, devuelvo): the shop language of Tema 7.'}}};

/* ---------- v2: layered sheets ---------- */
const K={keep:true};
SHEETS.t7=LAYERED(SHEETS.t7,[
 {id:'t7-oi',ess:'<p>Indirect object = who <b>receives</b>: me, te, le, nos, os, les. It is often repeated (<i>A Ignacio le regalamos…</i>); before the conjugated verb or attached to the infinitive. <i>gustar, encantar, quedar</i> use it.</p>',
  tryit:{q:'A mis padres ___ voy a regalar un viaje.',accept:['les'],e:'a mis padres = plural → <b>les</b>.'}},
 {id:'t7-comp',ess:'<p>Equality: <b>tan</b> + adjective/adverb + <b>como</b>; <b>tanto/a/os/as</b> + noun + <b>como</b>; verb + <b>tanto como</b>. Inequality: <b>más / menos … que</b>.</p>',
  tryit:{q:'No tengo ___ paciencia como tú.',accept:['tanta'],e:'paciencia is feminine singular → <b>tanta</b>.'}},
 {id:'t7-shop',ess:'<p>In a shop: <i>¿Qué quería?</i> → <b>Quería…</b> (polite); <b>talla</b> for clothes, <b>número</b> for shoes; <i>¿Qué tal le quedan?</i>; <i>¿Cuánto cuesta(n)?</i>; <i>en efectivo / con tarjeta</i>; <b>me lo/la/los/las llevo</b>.</p>',extra:DIALOG(DL_SHOP),
  tryit:{q:'Las botas me gustan mucho: me ___ llevo.',accept:['las'],e:'las botas = feminine plural → <b>me las llevo</b>.'}},
 {id:'t7-impv',ess:'<p>Affirmative imperative. <b>vosotros</b>: -r → -d (llevad, bebed, id; reflexive: relajaos). <b>ustedes</b>: vowel swap on the <i>yo</i> stem (lleven, hagan, pongan, vayan), pronouns attached (relájense).</p>',
  tryit:{q:'Imperative of hacer for ustedes?',accept:['hagan'],e:'yo hago → <b>hagan</b>.'}},
 {id:'t7-tiendas',ess:'<p>Shops are named with <b>-ería</b>: zapatería (shoes), librería (books), panadería (bread), frutería, joyería, perfumería, papelería; plus el quiosco, el estanco, el supermercado.</p>',
  tryit:{q:'Where do you buy a novel?',o:['en la librería','en la biblioteca','en la papelería'],a:0,e:'A <i>biblioteca</i> lends books; a <i>librería</i> sells them.'}},
 {id:'t7-lex',ess:'<p>Clothes and accessories of the workbook (p. 8): la camisa, la falda, los pantalones, la chaqueta, el abrigo, la bufanda, el pañuelo, los zapatos, las botas, el bolso, las gafas…; <i>de pana, de lana, de cuero, de rayas</i>.</p>',
  tryit:{q:'“Unos pantalones ___ pana” (corduroy trousers)',accept:['de'],e:'Material: <b>de</b> + material.'}},K]);
SHEETS.t8=LAYERED(SHEETS.t8,[
 {id:'t8-forms',ess:'<p>Imperfecto: <b>-aba</b> (-ar) and <b>-ía</b> (-er/-ir) for all persons (hablaba, comía, vivía). Only three irregulars: <b>ser</b> (era), <b>ir</b> (iba), <b>ver</b> (veía). Accent on nosotros -ábamos.</p>',
  tryit:{q:'Imperfecto of ir, nosotros?',accept:['íbamos'],e:'ir is irregular: iba, ibas, iba, <b>íbamos</b>, ibais, iban.'}},
 {id:'t8-uses',ess:'<p>Imperfecto for <b>habits</b> (de pequeño, siempre, antes), <b>descriptions</b> (era, tenía, había), the <b>contrast past/present</b>, and politeness (<i>quería</i>).</p>',
  tryit:{q:'De niño, mi abuela me ___ (leer) cuentos todas las noches.',accept:['leía'],e:'A habit in the past → imperfecto <b>leía</b>.'}},
 {id:'t8-ya',ess:'<p><b>todavía</b> + presente = still (no change); <b>ya no</b> + presente = no longer (change).</p>',
  tryit:{q:'Paloma se jubiló: ___ trabaja.',accept:['ya no'],e:'A change → <b>ya no</b>.'}},
 {id:'t8-pron',ess:'<p>Two pronouns: <b>indirect before direct</b> (me lo, te la, nos los). <b>le/les + lo/la/los/las → se</b>: <i>Lucas le trae las gafas a Marta → se las trae.</i></p>',
  tryit:{q:'¿Le das el libro a Ana? — Sí, ___ doy.',accept:['se lo'],e:'le + lo → <b>se lo</b>.'}},
 {id:'t8-debate',ess:'<p>Debating: give your opinion (<i>creo que, para mí, en mi opinión</i>), agree / disagree (<i>estoy de acuerdo, no estoy de acuerdo, tienes razón</i>), and fill pauses naturally (<i>pues, bueno, a ver</i>).</p>',
  tryit:{q:'Which expression shows disagreement?',o:['No estoy de acuerdo contigo.','Tienes razón.','Creo que sí.'],a:0,e:'Exponentes para debatir.'}}]);
SHEETS.t9=LAYERED(SHEETS.t9,[
 {id:'t9-reg',ess:'<p>Indefinido regular: -ar <b>é, aste, ó, amos, asteis, aron</b>; -er/-ir <b>í, iste, ió, imos, isteis, ieron</b>. Accents on yo and él.</p>',
  tryit:{q:'Indefinido of comprar, él?',accept:['compró'],e:'-ar, él → <b>compró</b> (accent!).'}},
 {id:'t9-irr',ess:'<p>Irregular stems with <b>-e, -iste, -o, -imos, -isteis, -ieron</b> and no accents: tuv-, estuv-, pud-, pus-, sup-, quis-, vin-, hic- (hizo), dij-/traj- (-eron). <b>ser = ir</b>: fui, fuiste, fue…</p>',
  tryit:{q:'Indefinido of hacer, él?',accept:['hizo'],e:'hic- → <b>hizo</b> (c → z before o).'}},
 {id:'t9-choice',ess:'<p><b>Indefinido</b>: completed events at a precise moment, the story moving on (ayer, en 1946, el año pasado). <b>Imperfecto</b>: habits, descriptions, background (antes, siempre, en aquella época).</p>',
  tryit:{q:'En 1951, Bich ___ (comprar) una patente.',accept:['compró'],e:'A completed event with a date → indefinido.'}},
 {id:'t9-peri',ess:'<p><b>empezar a</b> + infinitive (start), <b>soler</b> + infinitive (usually), <b>seguir</b> + gerundio (still / keep on): <i>sigo estudiando</i>.</p>',
  tryit:{q:'Gerundio of leer?',accept:['leyendo'],e:'Irregular spelling: <b>leyendo</b>.'}},
 {id:'t9-ya',ess:'<p><b>ya</b> (already), <b>todavía no</b> (not yet), <b>ya no</b> (no longer), <b>todavía</b> (still).</p>',
  tryit:{q:'¿Has terminado? — No, ___ (not yet).',accept:['todavía no'],e:'<b>todavía no</b> = not yet.'}},
 {id:'t9-prons',ess:'<p>Pronoun review (Socios p. 45): direct lo/la/los/las, indirect le/les, both together with <b>se</b>; position before the verb or attached to the infinitive or gerund.</p>',
  tryit:{q:'Voy a comprar las flores para mi madre → Voy a comprár___.',accept:['selas'],e:'le + las → se las, attached: <b>comprárselas</b>.'}},K]);

/* ---------- v2: glossary ---------- */
const GLOSS=[
['Pretérito imperfecto','Past tense for habits, descriptions and background: hablaba, comía.','t8',['imperfecto']],
['Pretérito indefinido','Past tense for completed events at a precise moment: hablé, comí.','t9',['indefinido']],
['Objeto indirecto','Who receives: me, te, le, nos, os, les.','t7',['indirect object']],
['Objeto directo','What is affected: lo, la, los, las.','t8',['direct object']],
['Comparativo','Comparison: tan/tanto… como, más/menos… que.','t7',['comparisons']],
['Imperativo','Command form: llevad (vosotros), lleven (ustedes).','t7',['imperative']],
['Gerundio','-ando / -iendo form: trabajando, comiendo, leyendo.','t9'],
['Perífrasis','Verb + infinitive or gerund expressing an aspect: empezar a, soler, seguir + gerundio.','t9',['periphrases']],
['Fórmulas de cortesía','Polite shop phrases: ¿qué quería?, quería…, ¿cuánto cuesta?','t7'],
['Talla','Clothes size: la talla 42.','t7'],
['Número','Shoe size: el número 39.','t7'],
['Probador','Fitting room.','t7'],
['En efectivo','In cash (but con tarjeta: by card).','t7'],
['Envolver para regalo','To gift-wrap: ¿Me lo envuelve para regalo?','t7'],
['Tique','Receipt: lo devuelvo presentando este tique.','t7'],
['Devolver','To return (o → ue): devuelvo.','t7'],
['Quedar (bien/mal)','To fit: me quedan pequeños.','t7'],
['Zapatería','Shoe shop.','t7'],['Librería','Bookshop (not a library: biblioteca).','t7'],['Panadería','Bakery.','t7'],['Joyería','Jeweller’s.','t7'],['Estanco','Tobacconist’s (stamps too).','t7'],
['Todavía','Still (no change); todavía no = not yet.','t8'],['Ya no','No longer (change).','t8'],
['De pequeño','When I was little: an imperfecto marker.','t8',['de niño']],['En aquella época','At that time: an imperfecto marker.','t8'],
['Hace dos años','Two years ago: an indefinido marker.','t9'],['Al poco tiempo','Shortly after: an indefinido marker.','t9']
].map(([t,d,topic,alias])=>({t,d,topic,alias}));

/* ---------- v2: generators ---------- */
// [sentence with ___, verb, person index, tense 0 imperfecto / 1 indefinido, reason]
const CTX=[['De pequeño, yo ___ (jugar) al fútbol todos los días.','jugar',0,0,'habit (de pequeño, todos los días)'],['Ayer nosotros ___ (comprar) unos zapatos.','comprar',3,1,'completed event (ayer)'],['En aquella época la gente ___ (escribir) con pluma.','escribir',5,0,'background, a situation of that time'],['En 1946, Marcel Bich ___ (comprar) un taller.','comprar',2,1,'completed event with a date'],
 ['Nuestro primer gato ___ (ser) blanco.','ser',2,0,'description'],['El año pasado vosotros ___ (ir) a Londres.','ir',4,1,'completed event (el año pasado)'],['Antes tú no ___ (poder) escuchar música en el móvil.','poder',1,0,'contrast past / present (antes)'],['Anoche ellos ___ (ver) una película.','ver',5,1,'completed event (anoche)'],
 ['Cuando tenía diez años, mi madre me ___ (leer) cuentos.','leer',2,0,'habit in the past'],['La semana pasada yo ___ (hacer) los deberes en una hora.','hacer',0,1,'completed event (la semana pasada)'],['Moctezuma ___ (tomar) siempre chocolate después de comer.','tomar',2,0,'habit (siempre)'],['Hace dos años nosotros ___ (tener) un accidente.','tener',3,1,'event at a precise moment (hace dos años)'],
 ['En los años 50 mis abuelos ___ (vivir) en el campo.','vivir',5,0,'situation in the past (en los años 50)'],['El lunes tú ___ (estar) enfermo todo el día.','estar',1,1,'a closed period (el lunes, todo el día)']];
// [question, IO person: 0 me 1 te 2 le 3 nos 4 os 5 les, object gender/number: 0 lo 1 la 2 los 3 las, verb in yo/…, answer]
const DOBJ=['lo','la','los','las'],IOP=['me','te','se','nos','os','se'];
const PRONB=[['¿Le das el libro a Ana?',2,0,'doy'],['¿Les compras las flores a tus padres?',2,3,'compro'],['¿Me prestas los apuntes?',1,2,'presto'],['¿Te regalan la bicicleta?',0,1,'regalan'],['¿Nos enseñas las fotos?',4,3,'enseño'],['¿Le envuelve el regalo a la señora?',2,0,'envuelvo'],['¿Os devuelven el dinero?',3,0,'devuelven'],['¿Les traes los zapatos a tus hermanos?',2,2,'traigo']];
const GENS=[
{kind:'gen',id:'g-t8-imperf',topic:'t8',title:'Imperfecto: conjugate',blurb:'-aba / -ía, and ser, ir, ver',levels:['Regular verbs','With ser, ir, ver'],
 gen:(u,lv)=>{const v=lv?u.pick(['ser','ir','ver','hablar','comer','vivir']):u.pick(IMP_VERBS.filter(x=>!['ser','ir','ver'].includes(x))),p=u.int(0,5);return {v,p,f:imperf(v)[p]}},
 q:v=>`<p>Imperfecto of <b>${v.v}</b>, <b>${PER[v.p]}</b>.</p>`,parts:[{label:'Form (accents count)',type:'text',strict:true,accept:v=>[v.f]}],
 steps:v=>[IMP_IRR[v.v]?`<b>${v.v}</b> is one of the three irregular verbs: ${imperf(v.v).join(', ')}.`:`${v.v.endsWith('ar')?'-ar → -aba, -abas, -aba, -ábamos, -abais, -aban':'-er/-ir → -ía, -ías, -ía, -íamos, -íais, -ían'}: stem <b>${v.v.slice(0,-2)}</b>-.`,`${PER[v.p]} → <b>${v.f}</b>.`]},
{kind:'gen',id:'g-t9-indef',topic:'t9',title:'Indefinido: conjugate',blurb:'Regular endings and irregular stems',levels:['Regular verbs','Irregular verbs'],
 gen:(u,lv)=>{const v=lv?u.pick(Object.keys(IND_IRR)):u.pick(['comprar','viajar','terminar','cocinar','trabajar','comer','beber','volver','conocer','vivir','escribir','salir','abrir']),p=u.int(0,5);return {v,p,f:indef(v)[p]}},
 q:v=>`<p>Indefinido of <b>${v.v}</b>, <b>${PER[v.p]}</b>.</p>`,parts:[{label:'Form (accents count)',type:'text',strict:true,accept:v=>[v.f]}],
 steps:v=>[IND_IRR[v.v]?`<b>${v.v}</b> is irregular: ${indef(v.v).join(', ')}.`:`${v.v.endsWith('ar')?'-ar → -é, -aste, -ó, -amos, -asteis, -aron':'-er/-ir → -í, -iste, -ió, -imos, -isteis, -ieron'}: stem <b>${v.v.slice(0,-2)}</b>-.`,`${PER[v.p]} → <b>${v.f}</b>.`]},
{kind:'gen',id:'g-t9-tense',topic:'t9',title:'Imperfecto or indefinido? In context',blurb:'Choose the tense from the marker, then conjugate',
 gen:u=>{const c=u.pick(CTX);return {c,f:(c[3]?indef:imperf)(c[1])[c[2]]}},
 q:v=>`<p>${v.c[0]}</p>`,parts:[{label:'Tense',type:'choice',o:['Pretérito imperfecto','Pretérito indefinido'],a:v=>v.c[3]},{label:'Verb form (accents count)',type:'text',strict:true,accept:v=>[v.f]}],
 steps:v=>[`Marker / meaning: ${v.c[4]} → <b>${v.c[3]?'indefinido':'imperfecto'}</b>.`,`${v.c[1]}, ${PER[v.c[2]]} → <b>${v.f}</b>.`]},
{kind:'gen',id:'g-t8-pron',topic:'t8',title:'Two pronouns together',blurb:'Indirect + direct, le/les → se',
 gen:u=>({b:u.pick(PRONB)}),q:v=>`<p>${v.b[0]} — Sí, ___ ${v.b[3]}.</p>`,parts:[{label:'The two pronouns',type:'text',accept:v=>[`${IOP[v.b[1]]} ${DOBJ[v.b[2]]}`]}],
 steps:v=>[`Indirect object first: ${['me','te','le','nos','os','les'][v.b[1]]}${v.b[1]===2||v.b[1]===5?' → <b>se</b> (le/les become se before lo/la/los/las)':''}.`,`Direct object agrees with the thing: <b>${DOBJ[v.b[2]]}</b>. → <b>${IOP[v.b[1]]} ${DOBJ[v.b[2]]} ${v.b[3]}</b>.`]},
{kind:'gen',id:'g-t7-comp',topic:'t7',title:'Comparisons: tan, tanto, más, menos',blurb:'Equality and inequality with adjectives, nouns and verbs',
 gen:u=>{const k=u.int(0,3);const items=[[['alta','alto'],'Marta es ___ alta ___ su hermana.','tan','como','tan + adjective + como'],[['paciencia'],'No tengo ___ paciencia ___ tú.','tanta','como','tanta (feminine singular noun) + como'],[['libros'],'Hay ___ libros ___ cuadernos (more).','más','que','más + noun + que'],[['trabajar'],'Jimena trabaja ___ ___ yo (equality with a verb).','tanto','como','verb + tanto como'],[['regalos'],'No recibo ___ regalos ___ antes.','tantos','como','tantos (masculine plural) + como'],[['personas'],'Había ___ personas ___ ayer (fewer).','menos','que','menos + noun + que']];return {it:u.pick(items)}},
 q:v=>`<p>${v.it[1]}</p>`,parts:[{label:'First blank',type:'text',accept:v=>[v.it[2]]},{label:'Second blank',type:'text',accept:v=>[v.it[3]]}],
 steps:v=>[`Structure: <b>${v.it[4]}</b>.`,`Equality uses <b>como</b>; inequality uses <b>que</b>. <b>tanto</b> agrees with the noun; before an adjective use <b>tan</b>.`]}
];

/* ---------- v2: tools ---------- */
const TOOLS=[
Object.assign({kind:'dialog',blurb:'Shoes, sizes, pronouns, payment, returns'},DL_SHOP),
{kind:'tree',id:'tr-t9-tense',topic:'t9',title:'Imperfecto or indefinido?',blurb:'Decide from the meaning and the time marker',start:'q1',
 nodes:{q1:{q:'Is it a completed action or event at a precise moment (ayer, en 1946, el año pasado), or a step that moves the story on?',o:[{l:'Yes',to:'r_ind'},{l:'No',to:'q2'}]},
  q2:{q:'Is it a habit or a repeated action in the past (siempre, todos los días, de pequeño, antes)?',o:[{l:'Yes',to:'r_hab'},{l:'No',to:'q3'}]},
  q3:{q:'Is it a description of people, things, places or circumstances (era, tenía, había, hacía frío)?',o:[{l:'Yes',to:'r_desc'},{l:'No: a background action interrupted by another',to:'r_back'}]},
  r_ind:{end:'Pretérito indefinido'},r_hab:{end:'Pretérito imperfecto (habit, or past contrasted with now)'},r_desc:{end:'Pretérito imperfecto (description)'},r_back:{end:'Imperfecto for the background, indefinido for the interrupting event'}},
 gen:u=>{const c=u.pick(CTX);return {text:c[0].replace('___','…'),path:c[3]?{q1:0}:/habit|siempre|todos|de pequeño|antes/.test(c[4])?{q1:1,q2:0}:{q1:1,q2:1,q3:0},why:c[4]}}}
];

/* ---------- v2: sorting exercises, quiz questions, flashcards ---------- */
EXERCISES.push(
{id:'x-t9-sortmark',topic:'t9',type:'sort',src:'course',title:'Time markers: imperfecto or indefinido?',q:'Sort each marker.',cats:['Imperfecto','Indefinido'],
 items:[['de pequeño','Imperfecto'],['antes','Imperfecto'],['en aquella época','Imperfecto'],['siempre','Imperfecto'],['normalmente','Imperfecto'],['ayer','Indefinido'],['anoche','Indefinido'],['el año pasado','Indefinido'],['en 1958','Indefinido'],['hace dos años','Indefinido']],pick:8},
{id:'x-t7-sortshop',topic:'t7',type:'sort',src:'course',title:'Where do you buy it?',q:'Sort each product.',cats:['zapatería','librería','panadería','joyería','perfumería'],
 items:[['unas botas','zapatería'],['unas sandalias','zapatería'],['una novela','librería'],['un diccionario','librería'],['una barra de pan','panadería'],['unos cruasanes','panadería'],['un anillo','joyería'],['unos pendientes','joyería'],['una colonia','perfumería']]},
{id:'x-t7-sorttan',topic:'t7',type:'sort',src:'course',title:'tan, tanto, tanta, tantos or tantas?',q:'Which word fills the blank before each word?',cats:['tan','tanto','tanta','tantos','tantas'],
 items:[['___ alto','tan'],['___ rápido','tan'],['___ dinero','tanto'],['___ tiempo','tanto'],['___ paciencia','tanta'],['___ gente','tanta'],['___ regalos','tantos'],['___ libros','tantos'],['___ personas','tantas'],['___ cosas','tantas']],pick:8}
);
QUIZ.push(
Q('q94','t8','practice','Why do we say “se lo doy” and not “le lo doy”?',['le/les become se before lo, la, los, las','se is more polite','lo needs a reflexive pronoun','le is only for usted'],'Workbook p. 63.'),
Q('q95','t9','practice','“Cuando era pequeño, iba al colegio en bici.” Why imperfecto?',['It is a habit in the past','It is a completed event','It has a precise date','It is a command'],'De pequeño / cuando era… = habit or description.'),
Q('q96','t9','practice','“En 1951 Bich compró una patente.” Why indefinido?',['A completed event at a precise moment','A habit','A description','Politeness'],'The date marks a closed event.'),
Q('q97','t7','practice','In a shop, “Quería unos pantalones” means…',['I would like some trousers (polite)','I wanted trousers yesterday','I will want trousers','I am wearing trousers'],'Polite imperfect.'),
Q('q98','t7','practice','Clothes have a ___, shoes have a ___.',['talla / número','número / talla','medida / pie','tamaño / talla'],'Tema 7 formulas.'),
Q('q99','t7','practice','Which is correct?',['No gasto tanto como antes.','No gasto tan como antes.','No gasto tanto que antes.','No gasto más como antes.'],'Verb + tanto como.'),
Q('q100','t9','practice','Indefinido of decir, ellos?',['dijeron','dijieron','decieron','dicieron'],'dij- stems take -eron (like traer: trajeron).'),
Q('q101','t8','practice','How many irregular verbs does the imperfecto have?',['Three: ser, ir, ver','None','Ten','All -er verbs'],'era, iba, veía.')
);
CARDS.push(
C('c54','t9','Imperfecto or indefinido?','event at a precise moment → indefinido · habit / description / background → imperfecto'),
C('c55','t8','se lo / se la','le/les + lo/la/los/las → se: se lo doy, se las trae'),
C('c56','t7','tan vs tanto','tan + adjective/adverb · tanto/a/os/as + noun · verb + tanto como'),
C('c57','t7','Shop: me lo llevo','agrees with the object: me los llevo (zapatos), me la llevo (novela)'),
C('c58','t9','Irregular indefinido stems','tuv-, estuv-, pud-, pus-, sup-, quis-, vin-, hic-/hiz-, dij-, traj- (no accents)'),
C('c59','t8','Imperfecto irregulars','ser: era · ir: iba · ver: veía')
);

const DRILL={
  pres:{label:'Presente',topic:'t7',items:()=>Object.keys(PRES).flatMap(v=>pres(v).map((a,i)=>({v,p:P[i],a,all:pres(v).map((f,k)=>[P[k],f])})))},
  impv:{label:'Imperativo',topic:'t7',items:()=>Object.keys(IMPV).flatMap(v=>IMPV[v].map((a,i)=>({v,p:['vosotros/as','ustedes'][i],a,all:[['vosotros/as',IMPV[v][0]],['ustedes',IMPV[v][1]]]})))},
  imp:{label:'Imperfecto',topic:'t8',items:()=>IMP_VERBS.flatMap(v=>imperf(v).map((a,i)=>({v,p:P[i],a,all:imperf(v).map((f,k)=>[P[k],f])})))},
  ind:{label:'Indefinido',topic:'t9',items:()=>IND_VERBS.flatMap(v=>indef(v).map((a,i)=>({v,p:P[i],a,all:indef(v).map((f,k)=>[P[k],f])})))},
  ger:{label:'Gerundio',topic:'t9',items:()=>Object.keys(GER).map(v=>({v,p:'gerundio',a:GER[v],all:[['gerundio',GER[v]]]}))}};
const DRILL_TARGET=30;
const SUBJ=/^(yo|tú|tu|él|el|ella|usted|nosotros|nosotras|vosotros|vosotras|ellos|ellas|ustedes)\s+/;
const drillModule={tab:'verbs',label:'Verb drill',
  css:'.vd-card{border:1px solid var(--rule-strong);border-radius:10px;background:var(--surface);padding:18px;margin:14px 0}.vd-verb{font-family:var(--f-display);font-size:1.6rem;font-weight:700}.vd-p{color:var(--muted);margin:4px 0 12px}.vd-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.vd-row input{flex:1 1 180px;min-width:0}.vd-msg{margin-top:10px;min-height:1.4em}.vd-msg.ok{color:var(--ok)}.vd-msg.bad{color:var(--bad)}.vd-msg.warn{color:var(--warn)}',
  card:ctx=>({eyebrow:'Tool',title:'Verb drill',text:'Endless conjugation practice: presente, imperativo, imperfecto, indefinido, gerundio. Accents count.'}),
  stats:ctx=>Object.keys(DRILL).map(k=>{const s=(ctx.state[k]||{});return {topic:DRILL[k].topic,label:`Verb drill · ${DRILL[k].label} (right answers, target ${DRILL_TARGET})`,done:Math.min(s.ok||0,DRILL_TARGET),total:DRILL_TARGET,tried:s.n||0}}),
  render(ctx,main){
    const m=ctx.mem;m.t=m.t||'all';
    const pool=()=>(m.t==='all'?Object.keys(DRILL):[m.t]).flatMap(k=>DRILL[k].items().map(x=>Object.assign({k},x)));
    const next=()=>{m.cur=ctx.u.pick(pool());m.done=false};
    if(!m.cur||(m.t!=='all'&&m.cur.k!==m.t))next();
    const draw=()=>{const c=m.cur,s=k=>ctx.state[k]||{ok:0,n:0};
      main.innerHTML=`<div class="eyebrow">Practice · all topics</div><h2>Verb drill</h2>
      <p class="lede">Conjugate the verb for the person shown. Accents count, as in the exam: “hablabamos” is marked wrong. You may type the subject pronoun or not.</p>
      <div class="filters" role="group" aria-label="Tense">${ctx.h.chips([['all','All tenses']].concat(Object.keys(DRILL).map(k=>[k,DRILL[k].label])),m.t,'t')}</div>
      <div class="vd-card"><div class="eyebrow">${DRILL[c.k].label}</div><div class="vd-verb">${esc(c.v)}</div><div class="vd-p">${esc(c.p)}</div>
      <div class="vd-row"><label for="vd-in" class="sr-only">Your answer</label><input type="text" class="txt" id="vd-in" autocomplete="off" autocapitalize="off" spellcheck="false">
      <button type="button" class="btn" id="vd-check">Check</button><button type="button" class="btn ghost" id="vd-next">Next verb</button></div>
      <div class="vd-msg" id="vd-msg" aria-live="polite"></div><div id="vd-table"></div></div>
      ${T(['Tense','Right','Tried'],Object.keys(DRILL).map(k=>[DRILL[k].label,s(k).ok,s(k).n]),[1,2])}
      <p class="hint">Each tense counts in the Progress tab once you reach ${DRILL_TARGET} right answers.</p>`;
      main.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{m.t=b.dataset.t;next();draw()});
      const inp=main.querySelector('#vd-in'),msg=main.querySelector('#vd-msg');
      const check=()=>{if(m.done){next();draw();return}
        const raw=ctx.u.norm(inp.value).replace(SUBJ,'');if(!raw)return;
        const right=ctx.u.norm(c.a);let cls='bad',txt;
        if(raw===right){cls='ok';txt='Right.'}
        else if(ctx.u.noAccents(raw)===ctx.u.noAccents(right))txt=`Right verb, wrong accents: <b>${esc(c.a)}</b>.`;
        else txt=`The answer is <b>${esc(c.a)}</b>.`;
        const st=ctx.state[c.k]=ctx.state[c.k]||{ok:0,n:0};st.n++;if(cls==='ok')st.ok++;ctx.save();m.done=true;
        msg.className='vd-msg '+cls;msg.innerHTML=txt;inp.classList.toggle('good',cls==='ok');inp.classList.toggle('bad',cls!=='ok');inp.readOnly=true;
        main.querySelector('#vd-table').innerHTML=T(['Persona',esc(c.v)],c.all.map(([p,f])=>[p,f===c.a?`<b>${f}</b>`:f]));
        main.querySelector('#vd-check').textContent='Next verb';};
      main.querySelector('#vd-check').onclick=check;
      main.querySelector('#vd-next').onclick=()=>{next();draw()};
      inp.onkeydown=e=>{if(e.key==='Enter')check()};
      try{inp.focus({preventScroll:true})}catch(e){}
    };
    draw();
  }};

/* ---------- mock exams ---------- */
const RUBRIC=(task)=>[{c:`Task done: ${task}`,pts:1},{c:'Past tenses right: imperfecto for habits and descriptions, indefinido for dated events (at most 2 errors)',pts:1},{c:'Vocabulary of the course and 3 connectors (pero, porque, además, en cambio, por eso…)',pts:0.5},{c:'Length respected, accents and agreement mostly right',pts:0.5}];
const MOCKS=[
{id:'m1',title:'Mock exam 1 · Nivel 1',exam:'final',scope:'Temas 7, 8 + Repaso',duration:90,total:20,calculator:'No dictionary, no notes',
 summary:'Grammar of the three units, shop vocabulary, a reading text and a short written text. Closest to the workbook exercises.',
 intro:'<p>Answer every question. Accents count. Part D is marked with the grid after you hand in.</p>',
 sections:[
 {title:'Parte A · Gramática (10 puntos)',items:[
  {id:'a1',topic:'t8',type:'text',pts:2,...STRICT,title:'A1. Pretérito imperfecto',...GAP('Completa con el pretérito imperfecto.',
   'Cuando mi abuelo [[era|ser]] joven, [[vivía|vivir]] en un pueblo pequeño. Todos los días [[iba|ir]] a pie a la escuela, que [[estaba|estar]] a tres kilómetros. Sus padres [[tenían|tener]] una tienda de ropa y los sábados él [[ayudaba|ayudar]] en la tienda. Por la noche, la familia [[veía|ver]] la televisión en casa de los vecinos.'),
   solution:'<p>era, vivía, iba, estaba, tenían, ayudaba, veía: habits and descriptions of the past.</p>'},
  {id:'a2',topic:'t9',type:'text',pts:2,...STRICT,title:'A2. Pretérito indefinido',...GAP('Completa con el pretérito indefinido.',
   'El sábado pasado [[fui|ir, yo]] de compras con mi hermana. Primero [[entramos|entrar, nosotras]] en una zapatería y mi hermana [[se probó|probarse]] unas botas. Después [[comimos|comer, nosotras]] en un restaurante italiano. Por la tarde yo [[compré|comprar]] una bufanda de lana y [[volvimos|volver, nosotras]] a casa a las ocho.'),
   solution:'<p>fui, entramos, se probó, comimos, compré, volvimos: completed events (el sábado pasado).</p>'},
  {id:'a3',topic:'t9',type:'text',pts:2,...STRICT,title:'A3. ¿Imperfecto o indefinido?',q:'<p>Conjuga el verbo en el tiempo adecuado.</p>',
   parts:[{label:'1. Cuando era pequeño, yo ___ (jugar) al fútbol todos los días.',accept:['jugaba']},{label:'2. En 1953 el primer Seat ___ (salir) de la fábrica de Barcelona.',accept:['salió']},
    {label:'3. Mi madre ___ (cocinar) cuando mi padre llegó a casa.',accept:['cocinaba']},{label:'4. El año pasado nosotros ___ (viajar) a México.',accept:['viajamos']}],
   solution:'<p>1 jugaba (habit) · 2 salió (date) · 3 cocinaba (action in progress, background of “llegó”) · 4 viajamos (el año pasado).</p>'},
  {id:'a4',topic:'t8',type:'text',pts:2,title:'A4. Pronombres',q:'<p>Completa con los pronombres adecuados.</p>',
   parts:[{label:'1. —¿Le has dado el regalo a tu madre? —Sí, ___ di ayer.',accept:['se lo']},{label:'2. —¿Me prestas tu chaqueta? —Sí, claro, ___ presto.',accept:['te la']},
    {label:'3. A mis abuelos ___ encanta ir al teatro.',accept:['les']},{label:'4. Estos pantalones me quedan muy bien: ___ llevo.',accept:['me los']}],
   solution:'<p>1 se lo (le + lo) · 2 te la (la chaqueta, a ti) · 3 les (a mis abuelos) · 4 me los (los pantalones).</p>'},
  {id:'a5',topic:'t7',type:'case',pts:2,title:'A5. Elige la opción correcta',q:'',
   parts:[{type:'mcq',pts:0.5,q:'Mi hermana es ___ alta ___ yo: medimos 1,70 las dos.',o:['tan … como','tanto … como','más … que','tan … que'],a:0},
    {type:'mcq',pts:0.5,topic:'t8',q:'Carlos ___ trabaja: está jubilado desde 2020.',o:['ya no','todavía','ya','todavía no'],a:0},
    {type:'mcq',pts:0.5,q:'Para no esperar colas, (ustedes) ___ las entradas con antelación.',o:['compren','comprad','compran','compráis'],a:0},
    {type:'mcq',pts:0.5,q:'Ana tiene ___ amigas como Sofía.',o:['tantas','tantos','tan','tanta'],a:0}],
   solution:'<p>tan … como · ya no · compren (ustedes) · tantas (amigas).</p>'}]},
 {title:'Parte B · Léxico y comunicación (4 puntos)',items:[
  {id:'b1',topic:'t7',type:'match',pts:2,title:'B1. Relaciona cada palabra con su definición',q:'',
   pairs:[['los guantes','Se llevan en las manos cuando hace frío.'],['la bufanda','Se lleva alrededor del cuello.'],['el probador','Lugar de la tienda donde te pruebas la ropa.'],['el escaparate','Ventana donde la tienda muestra sus productos.'],['el cinturón','Sirve para sujetar los pantalones.'],['el/la dependiente/a','Persona que atiende a los clientes.'],['los calcetines','Se llevan en los pies, debajo de los zapatos.'],['el bolsillo','Parte de la chaqueta donde guardas cosas pequeñas.']],
   extra:['Sirven para proteger los ojos del sol.']},
  {id:'b2',topic:'t7',type:'order',pts:2,title:'B2. Ordena el diálogo en la zapatería',q:'',
   items:['Buenos días, ¿en qué puedo ayudarle?','Quería unas botas negras, como las del escaparate.','¿Qué número tiene?','El 39.','Aquí tiene. ¿Qué tal le quedan?','Me quedan un poco pequeñas. ¿Tiene un número más?','Sí, tome, el 40.','Perfectas. ¿Cuánto cuestan?','89 euros. ¿Cómo va a pagar?','Con tarjeta.']}]},
 {title:'Parte C · Comprensión lectora (3 puntos)',intro:`<p><b>Las compras de mi abuela</b></p><p>Mi abuela Carmen nació en 1950 en un pueblo de Zamora. Cuando era pequeña, no había supermercados en el pueblo: su madre compraba el pan en la panadería de la plaza y la fruta en el mercado de los jueves. La ropa no se compraba en tiendas: una vecina, que era costurera, hacía los vestidos de toda la familia. Los niños solo recibían regalos el 6 de enero, el día de Reyes, y normalmente eran cosas pequeñas: una muñeca, unos calcetines de lana o unos caramelos.</p><p>En 1968 Carmen se fue a vivir a Madrid y allí conoció los grandes almacenes. «Fue increíble: había escaleras mecánicas y escaparates enormes», recuerda. Hoy, con 76 años, mi abuela todavía prefiere las tiendas de barrio, pero ya no va al mercado: hace la compra por internet y se la traen a casa.</p>`,items:[
  {id:'c1',topic:'t8',type:'case',pts:3,title:'C. Lee el texto y contesta',q:'',
   parts:[{type:'mcq',pts:0.5,q:'¿Dónde compraba el pan la familia de Carmen?',o:['En la panadería de la plaza','En el supermercado del pueblo','En el mercado de los jueves','Se lo traían a casa'],a:0},
    {type:'mcq',pts:0.5,q:'¿Quién hacía la ropa de la familia?',o:['Una vecina costurera','La madre de Carmen','Una tienda de ropa del pueblo','Los grandes almacenes'],a:0},
    {type:'mcq',pts:0.5,q:'¿Cuándo recibían regalos los niños?',o:['El día de Reyes','En su cumpleaños','En Navidad y en su cumpleaños','Todos los jueves'],a:0},
    {type:'mcq',pts:0.5,topic:'t9',q:'¿Qué descubrió Carmen en Madrid en 1968?',o:['Los grandes almacenes','Los supermercados','La compra por internet','Las tiendas de barrio'],a:0},
    {type:'mcq',pts:0.5,q:'«Todavía prefiere las tiendas de barrio» significa que…',o:['antes las prefería y ahora también','antes las prefería, pero ahora no','nunca le gustaron','las va a preferir en el futuro'],a:0},
    {type:'mcq',pts:0.5,q:'En «se la traen a casa», <i>la</i> se refiere a…',o:['la compra','la fruta','la abuela','la tienda'],a:0}],
   solution:'<p>All the answers are in the text. Last question: hace <b>la compra</b> por internet y <b>se la</b> traen (le + la → se la).</p>'}]},
 {title:'Parte D · Expresión escrita (3 puntos)',items:[
  {id:'d1',topic:'t8',type:'written',pts:3,title:'D. Antes y ahora',lines:10,
   q:'<p>Describe en 100–120 palabras cómo era la vida de tus abuelos cuando eran jóvenes (la escuela, el trabajo, el tiempo libre) y compárala con tu vida de hoy.</p>',
   rubric:RUBRIC('describes the grandparents’ life (3 themes) and compares with today'),
   solution:'<p>Model: <i>Cuando mis abuelos eran jóvenes, vivían en un pueblo cerca de Lyon. Mi abuelo iba a la escuela a pie y los profesores eran muy estrictos. A los quince años empezó a trabajar en una fábrica, porque su familia necesitaba dinero. Mi abuela ayudaba a su madre en casa y por la tarde cosía vestidos. En su tiempo libre escuchaban la radio o paseaban por la plaza los domingos. En 1962 se casaron y se fueron a vivir a la ciudad. Hoy en día mi vida es muy diferente: yo estudio en la universidad y no trabajo tanto como ellos. Además, ya no escuchamos la radio: vemos series en el móvil. Pero todavía nos gusta pasear los domingos.</i></p>'}]}]},
{id:'m2',title:'Mock exam 2 · Nivel 2',exam:'final',scope:'Temas 7, 8 + Repaso',duration:90,total:20,calculator:'No dictionary, no notes',
 summary:'More irregular verbs, two pronouns together, imperative, a reading text on the walkman and a letter.',
 intro:'<p>Answer every question. Accents count. Part D is marked with the grid after you hand in.</p>',
 sections:[
 {title:'Parte A · Gramática (10 puntos)',items:[
  {id:'a1',topic:'t8',type:'text',pts:2,...STRICT,title:'A1. Pretérito imperfecto',...GAP('Completa con el pretérito imperfecto.',
   'En los años 90 no [[había|haber]] teléfonos inteligentes. Para hablar con un amigo, [[llamábamos|llamar, nosotros]] a su casa y a veces [[hablábamos|hablar, nosotros]] con sus padres. Las fotos se [[hacían|hacer]] con una cámara y [[tenías|tener, tú]] que esperar una semana para verlas. Mis padres [[escuchaban|escuchar]] música en casetes y yo [[era|ser]] fan de los discos compactos. Los viernes, mi hermano y yo [[íbamos|ir]] al videoclub.'),
   solution:'<p>había, llamábamos, hablábamos, hacían, tenías, escuchaban, era, íbamos.</p>'},
  {id:'a2',topic:'t9',type:'text',pts:2,...STRICT,title:'A2. Pretérito indefinido (irregulares)',...GAP('Completa con el pretérito indefinido.',
   'El año pasado mis amigos [[hicieron|hacer]] una fiesta sorpresa para mi cumpleaños. Mi novio [[trajo|traer]] un pastel enorme y mis padres me [[dieron|dar]] una bicicleta. Yo no [[supe|saber]] nada hasta el último momento. Al final [[estuvimos|estar, nosotros]] bailando hasta las tres. Mi hermano también [[pudo|poder]] venir, aunque [[tuvo|tener]] que trabajar al día siguiente.'),
   solution:'<p>hicieron, trajo, dieron, supe, estuvimos, pudo, tuvo: strong stems without accents.</p>'},
  {id:'a3',topic:'t9',type:'text',pts:2,...STRICT,title:'A3. ¿Imperfecto o indefinido?',q:'<p>Conjuga los verbos.</p>',
   parts:[{label:'1. En 1946, Marcel Bich ___ (comprar) un taller en París.',accept:['compró']},{label:'2. En aquella época la gente ___ (escribir) con pluma.',accept:['escribía']},
    {label:'3. Cuando ___ (tener, ella) 20 años, se fue a vivir a Madrid.',accept:['tenía']},{label:'4. Ayer no ___ (ir, yo) a clase…',accept:['fui']},{label:'5. … porque ___ (estar, yo) enfermo.',accept:['estaba']}],
   solution:'<p>compró (date) · escribía (description of the period) · tenía (age, background) · fui (ayer) · estaba (state, cause).</p>'},
  {id:'a4',topic:'t8',type:'text',pts:2,...STRICT,title:'A4. Sustituye los objetos por pronombres',q:'',
   parts:[{label:'1. Mi hermano me trajo las fotos. → Mi hermano ___ trajo.',accept:['me las']},{label:'2. Les preparamos una sorpresa a nuestros padres. → ___ preparamos.',accept:['se la']},
    {label:'3. Quiero regalar este libro a Pablo. → Quiero ___.',accept:['regalárselo']},{label:'4. —¿Os han dado el permiso? —Sí, ___ dieron ayer.',accept:['nos lo']}],
   solution:'<p>me las · se la · regalárselo (accent on the stressed a) · nos lo.</p>'},
  {id:'a5',topic:'t7',type:'case',pts:2,title:'A5. Elige la opción correcta',q:'',
   parts:[{type:'mcq',pts:0.5,topic:'t8',q:'Mi abuela ___ tiene su televisión en blanco y negro: la guarda como recuerdo.',o:['todavía','ya no','todavía no','ya'],a:0},
    {type:'mcq',pts:0.5,q:'Ahora no gasto ___ dinero ___ antes.',o:['tanto … como','tan … como','tanto … que','más … como'],a:0},
    {type:'mcq',pts:0.5,q:'Si vais a la playa, ___ protector solar.',o:['llevad','lleven','lleváis','llevar'],a:0},
    {type:'mcq',pts:0.5,topic:'t9',q:'Los lunes, mi hermana y yo ___ ir al gimnasio. (habitualmente)',o:['solemos','solíamos','suelemos','soleamos'],a:0}],
   solution:'<p>todavía · tanto … como · llevad (vosotros) · solemos (present habit).</p>'}]},
 {title:'Parte B · Léxico y comunicación (4 puntos)',items:[
  {id:'b1',topic:'t7',type:'match',pts:2,title:'B1. ¿Dónde lo compras?',q:'',
   pairs:[['el pan','la panadería'],['unas gafas','la óptica'],['un collar','la joyería'],['unos cuadernos','la papelería'],['una tarta','la pastelería'],['una novela','la librería'],['unas botas','la zapatería'],['unas manzanas','la frutería']],extra:['la biblioteca']},
  {id:'b2',topic:'t7',type:'match',pts:2,title:'B2. ¿Qué dices en la tienda?',q:'',
   pairs:[['Quieres saber el precio.','¿Cuánto cuesta?'],['Quieres probarte unos pantalones.','¿Puedo probármelos?'],['Los pantalones son demasiado pequeños.','Me quedan estrechos.'],['Decides comprar los zapatos.','Me los llevo.'],['Quieres pagar con dinero.','En efectivo.'],['El libro es para un amigo.','¿Me lo envuelve para regalo?']],extra:['¿Qué talla tiene?']}]},
 {title:'Parte C · Comprensión lectora (3 puntos)',intro:`<p><b>El walkman, historia de un objeto</b></p><p>En 1979 la empresa japonesa Sony presentó el walkman, un pequeño reproductor de casetes. Antes, para escuchar música fuera de casa, la gente tenía que llevar un radiocasete grande y pesado. Con el walkman, por primera vez, cada persona podía escuchar su música en la calle, en el autobús o mientras corría. Al principio muchos en la empresa dudaban del producto, pero en pocos meses se vendieron miles de unidades.</p><p>En los años 80 los jóvenes llevaban el walkman a todas partes y grababan sus canciones favoritas de la radio. El problema era que no se podía elegir directamente una canción: había que rebobinar la cinta. Después llegaron el discman, el mp3 y el teléfono móvil. Sony dejó de fabricar el walkman de casete en 2010, pero todavía hay coleccionistas que lo guardan como recuerdo.</p>`,items:[
  {id:'c1',topic:'t9',type:'case',pts:3,title:'C. Lee el texto y contesta',q:'',
   parts:[{type:'mcq',pts:0.5,q:'¿Qué presentó Sony en 1979?',o:['Un pequeño reproductor de casetes','Un radiocasete grande','El primer discman','Un teléfono móvil'],a:0},
    {type:'mcq',pts:0.5,topic:'t8',q:'Antes del walkman, para escuchar música fuera de casa…',o:['había que llevar un aparato grande y pesado','se usaba el teléfono móvil','no se podía escuchar música','se grababan canciones de la radio'],a:0},
    {type:'mcq',pts:0.5,topic:'t8',q:'¿Qué hacían los jóvenes de los años 80?',o:['Grababan sus canciones favoritas de la radio','Compraban discos compactos','Escuchaban música en el móvil','No salían sin su radiocasete'],a:0},
    {type:'mcq',pts:0.5,topic:'t8',q:'¿Cuál era el problema del walkman?',o:['No se podía elegir directamente una canción','Era muy caro','Era muy pesado','No funcionaba en el autobús'],a:0},
    {type:'mcq',pts:0.5,q:'«Sony dejó de fabricar el walkman» significa que Sony…',o:['ya no lo fabrica','todavía lo fabrica','empezó a fabricarlo','lo fabricaba mal'],a:0},
    {type:'mcq',pts:0.5,q:'¿Por qué «presentó» está en pretérito indefinido?',o:['Es una acción terminada en un momento preciso (1979)','Es una costumbre del pasado','Describe el objeto','Es una acción del presente'],a:0}],
   solution:'<p>dejar de + infinitive = stop doing (ya no). presentó: completed event with a date → indefinido; tenía, podía, llevaban, grababan: descriptions and habits → imperfecto.</p>'}]},
 {title:'Parte D · Expresión escrita (3 puntos)',items:[
  {id:'d1',topic:'t9',type:'written',pts:3,title:'D. Un correo a un amigo',lines:10,
   q:'<p>Escribe un correo a un amigo español (100–120 palabras). Cuéntale qué regalos hiciste y recibiste en la última Navidad y explícale cómo eran las Navidades cuando eras pequeño/a.</p>',
   rubric:RUBRIC('tells last Christmas (indefinido) and childhood Christmases (imperfecto), with pronouns for presents'),
   solution:'<p>Model: <i>¡Hola, Pablo! ¿Qué tal? Te cuento mis Navidades. Este año le regalé un libro de cocina a mi madre y a mi padre le compré una bufanda de lana. Mis hermanos me regalaron unas zapatillas de deporte: ¡me encantan! El 24 cenamos en casa de mis abuelos y el 25 fuimos al cine. Cuando era pequeña, las Navidades eran diferentes: toda la familia se reunía en el pueblo, mi abuela preparaba un pavo enorme y los niños abríamos los regalos por la mañana. Ya no vamos al pueblo, pero todavía cenamos juntos. ¿Y tú, qué hiciste? Un abrazo, Léa.</i></p>'}]}]},
{id:'m3',title:'Mock exam 3 · Nivel 3',exam:'final',scope:'Temas 7, 8 + Repaso',duration:90,total:20,calculator:'No dictionary, no notes',
 summary:'An integrated company history (like Seat, Bic, La Perla): mixed past tenses, periphrases, pronouns with infinitives and gerunds, a debate text.',
 intro:'<p>Answer every question. Accents count. Part D is marked with the grid after you hand in.</p>',
 sections:[
 {title:'Parte A · Gramática (10 puntos)',items:[
  {id:'a1',topic:'t9',type:'text',pts:4,...STRICT,title:'A1. La historia de Calzados Ribera',...GAP('Completa con el pretérito imperfecto o el pretérito indefinido.',
   'Calzados Ribera [[nació|nacer]] en 1952 en Elche, cuando Tomás Ribera, que [[tenía|tener]] solo 22 años, [[abrió|abrir]] un pequeño taller en el garaje de sus padres. Al principio [[trabajaban|trabajar]] allí cuatro personas y [[fabricaban|fabricar]] unos veinte pares al día, todos a mano. En aquella época los zapatos [[eran|ser]] caros y la gente los [[llevaba|llevar]] durante años. En 1965 la empresa [[compró|comprar]] sus primeras máquinas y [[empezó|empezar]] a vender en toda España. En 1993 [[tuvo|tener]] problemas económicos y [[cerró|cerrar]] la mitad de sus tiendas. Hoy Lucía, la nieta de Tomás, [[sigue|seguir]] dirigiendo la empresa.'),
   solution:'<p>Events with a date (nació, abrió, compró, empezó, tuvo, cerró) → indefinido. Age, how many people worked, what they made each day, how shoes were (tenía, trabajaban, fabricaban, eran, llevaba) → imperfecto. sigue dirigiendo: seguir + gerundio, present.</p>'},
  {id:'a2',topic:'t8',type:'text',pts:2,...STRICT,title:'A2. Pronombres',q:'<p>Sustituye las palabras subrayadas por pronombres.</p>',
   parts:[{label:'1. Las chicas se están probando <u>las faldas</u>. → Las chicas están ___. (gerundio)',accept:['probándoselas']},{label:'2. Voy a dar <u>las llaves</u> <u>a mi vecino</u>. → Voy a ___.',accept:['dárselas']},
    {label:'3. Ayer le prestamos <u>la bicicleta</u> a Elena. → Ayer ___ prestamos.',accept:['se la']},{label:'4. ¿Me traes <u>el periódico</u>? → ¿___ traes?',accept:['me lo']}],
   solution:'<p>probándoselas · dárselas · se la · Me lo. With an infinitive or gerund the pronouns are attached and the stressed vowel takes an accent.</p>'},
  {id:'a3',topic:'t7',type:'text',pts:2,...STRICT,title:'A3. Imperativo: recomendaciones',q:'<p>Unos amigos (vosotros) y unos clientes (ustedes) visitan Sevilla. Escribe el imperativo afirmativo.</p>',
   parts:[{label:'1. (ir, vosotros) ___ al barrio de Santa Cruz.',accept:['id']},{label:'2. (probar, ustedes) ___ el gazpacho.',accept:['prueben']},{label:'3. (ponerse, ustedes) ___ crema solar.',accept:['pónganse']},{label:'4. (relajarse, vosotros) ___ en el parque de María Luisa.',accept:['relajaos']}],
   solution:'<p>id · prueben · pónganse · relajaos.</p>'},
  {id:'a4',topic:'t7',type:'case',pts:2,title:'A4. Elige la opción correcta',q:'',
   parts:[{type:'mcq',pts:0.5,q:'Juana estudia ___ como Isabel, pero no saca ___ buenas notas como ella.',o:['tanto … tan','tan … tantas','tanto … tantas','tan … tan'],a:0},
    {type:'mcq',pts:0.5,topic:'t9',q:'—¿Has terminado el informe? —No, ___ lo he terminado.',o:['todavía no','ya no','ya','todavía'],a:0},
    {type:'mcq',pts:0.5,topic:'t9',q:'De pequeño, mi padre ___ pasar los veranos en el pueblo.',o:['solía','suele','soló','solió'],a:0},
    {type:'mcq',pts:0.5,topic:'t9',q:'Indefinido de <i>pedir</i>, ellos:',o:['pidieron','pedieron','pidiaron','pedían'],a:0}],
   solution:'<p>tanto … tan · todavía no · solía (past habit) · pidieron.</p>'}]},
 {title:'Parte B · Léxico y comunicación (4 puntos)',items:[
  {id:'b1',topic:'t7',type:'match',pts:2,title:'B1. Contrarios y materiales',q:'',
   pairs:[['ancho','estrecho'],['largo','corto'],['ceñido','suelto'],['claro','oscuro'],['ponerse','quitarse'],['acortar','alargar'],['de seda','tejido muy fino y brillante'],['de pana','tejido grueso con rayas en relieve']],extra:['de cuadros']},
  {id:'b2',topic:'t8',type:'case',pts:2,title:'B2. Para debatir',q:'<p>Elige la expresión adecuada.</p>',
   parts:[{type:'mcq',pts:0.5,q:'Quieres dar tu opinión:',o:['En mi opinión…','Tienes razón.','¿Qué tal le quedan?','Me los llevo.'],a:0},
    {type:'mcq',pts:0.5,q:'Estás de acuerdo con tu compañero:',o:['Tienes razón.','No es verdad.','Yo no lo veo así.','Depende.'],a:0},
    {type:'mcq',pts:0.5,q:'No estás de acuerdo:',o:['Yo no lo veo así.','Es verdad.','Claro.','Para mí también.'],a:0},
    {type:'mcq',pts:0.5,q:'Comparas el pasado y el presente:',o:['Antes…, pero ahora…','Ya he…','Me quedan bien.','¿Me lo envuelve?'],a:0}],
   solution:'<p>Exponentes para debatir (Tema 8).</p>'}]},
 {title:'Parte C · Comprensión lectora (3 puntos)',intro:`<p><b>¿Tiendas de barrio o compras por internet?</b></p><p>Hace cuarenta años, en España la gente compraba casi todo en las tiendas de su barrio. El dependiente conocía a los clientes por su nombre y muchas veces les guardaba los productos que les gustaban. En los años 80 llegaron los grandes centros comerciales y muchas pequeñas tiendas cerraron. Hoy, una gran parte de los jóvenes compra la ropa por internet: es más rápido y, a veces, más barato.</p><p>Sin embargo, no todo el mundo está de acuerdo. «Yo todavía prefiero probarme la ropa antes de comprarla», dice Marta, de 23 años. «Por internet, muchas veces los pantalones me quedan estrechos y tengo que devolverlos.» Su abuelo, en cambio, se ha convertido en un experto en compras online: «Antes iba a la tienda cada día; ahora ya no salgo tanto y me lo traen todo a casa».</p>`,items:[
  {id:'c1',topic:'t9',type:'case',pts:3,title:'C. Lee el texto y contesta',q:'',
   parts:[{type:'mcq',pts:0.5,topic:'t8',q:'Hace cuarenta años, el dependiente…',o:['conocía a los clientes por su nombre','vendía por internet','trabajaba en un centro comercial','no guardaba nada a los clientes'],a:0},
    {type:'mcq',pts:0.5,q:'¿Qué pasó en los años 80?',o:['Llegaron los centros comerciales y cerraron muchas tiendas pequeñas','Abrieron muchas tiendas de barrio','Empezaron las compras por internet','Los jóvenes compraban ropa por internet'],a:0},
    {type:'mcq',pts:0.5,topic:'t7',q:'¿Por qué prefiere Marta las tiendas?',o:['Quiere probarse la ropa antes de comprarla','Es más barato','Conoce al dependiente','No tiene internet'],a:0},
    {type:'mcq',pts:0.5,topic:'t7',q:'En «tengo que devolverlos», <i>los</i> se refiere a…',o:['los pantalones','los clientes','los productos de la tienda','los jóvenes'],a:0},
    {type:'mcq',pts:0.5,topic:'t8',q:'«Ahora ya no salgo tanto» significa que el abuelo…',o:['sale menos que antes','sale tanto como antes','sale más que antes','nunca salía'],a:0},
    {type:'mcq',pts:0.5,q:'¿Qué opinión es la de Marta?',o:['Comprar ropa por internet no siempre es práctico','Las tiendas de barrio son más baratas','Los centros comerciales son mejores','Internet es siempre más rápido'],a:0}],
   solution:'<p>All the answers are in the text. guardaba, conocía: habits of the past (imperfecto); llegaron, cerraron: events (indefinido); ya no salgo tanto: change + comparison.</p>'}]},
 {title:'Parte D · Expresión escrita (3 puntos)',items:[
  {id:'d1',topic:'t9',type:'written',pts:3,title:'D. Opinión',lines:10,
   q:'<p>¿Cómo han cambiado las compras? En 100–120 palabras, compara cómo compraban tus padres o tus abuelos cuando eran jóvenes y cómo compras tú hoy. Da tu opinión con exponentes para debatir.</p>',
   rubric:[{c:'Task done: past (imperfecto) vs today (presente), with a clear personal opinion',pts:1},{c:'Past tenses right and one periphrasis or todavía / ya no used correctly',pts:1},{c:'Debate expressions (en mi opinión, yo creo que, no estoy de acuerdo…) and connectors',pts:0.5},{c:'Length respected, accents and agreement mostly right',pts:0.5}],
   solution:'<p>Model: <i>Cuando mis abuelos eran jóvenes, compraban la comida en el mercado y la ropa en las tiendas del barrio. Conocían a todos los dependientes y solían ir de compras los sábados. En los años 90 mis padres empezaron a ir al centro comercial: allí había más tiendas y era más cómodo. Yo, en cambio, compro casi toda mi ropa por internet porque es más rápido. Sin embargo, en mi opinión las tiendas de barrio todavía son importantes: puedes probarte la ropa y el dependiente te ayuda. Yo creo que comprar por internet no es tan ecológico como parece, por eso intento comprar menos y mejor.</i></p>'}]}]}];

// The engine shows MCQ options in the order given: shuffle them once, deterministically (seeded by the id), so the answer is not always "a".
const seed=s=>{let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const mix=(x,key)=>{if(!x||x.type&&x.type!=='mcq'||!Array.isArray(x.o))return;let r=seed(key);const rnd=()=>{r=(Math.imul(r,1103515245)+12345)>>>0;return r/4294967296};
  const idx=x.o.map((_,i)=>i);for(let i=idx.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}
  const pos=i=>idx.indexOf(i);x.a=Array.isArray(x.a)?x.a.map(pos).sort((p,q)=>p-q):pos(x.a);x.o=idx.map(i=>x.o[i])};
QUIZ.forEach(q=>mix(q,q.id));
EXERCISES.forEach(x=>{mix(x,x.id);(x.parts||[]).forEach((p,i)=>mix(p,x.id+'-'+i))});
MOCKS.forEach(m=>m.sections.forEach(s=>s.items.forEach(x=>{mix(x,m.id+x.id);(x.parts||[]).forEach((p,i)=>mix(p,m.id+x.id+'-'+i))})));

registerSubject({
  slug:'espagnol',
  name:'Espagnol',
  short:'Español',
  tagline:'Bachelor 2 · Nivel 2 (A2) · Final exam: Temas 7, 8 + Repaso',
  status:'Temas 7, 8 + Repaso done · verb drill · 5 generators · shop role-play · 3 mock exams',
  sources:{course:'Cuadernillo exercise',practice:'Practice'},
  exams:[{id:'final',label:'Final exam',scope:'Temas 7, 8 + Repaso'}],
  topics:[
    {id:'t7',label:'Tema 7',title:'De compras',short:'T7 Compras',exam:'final',summary:'Regalos, le / les, tan / tanto, en la tienda, imperativo, ropa',sheet:SHEETS.t7},
    {id:'t8',label:'Tema 8',title:'Otras épocas',short:'T8 Épocas',exam:'final',summary:'Pretérito imperfecto, marcadores, todavía / ya no, se lo, debatir',sheet:SHEETS.t8},
    {id:'t9',label:'Repaso',title:'Productos de ayer y hoy',short:'Repaso',exam:'final',summary:'Pretérito indefinido, imperfecto vs indefinido, soler, seguir + gerundio, ya / todavía no',sheet:SHEETS.t9}],
  cheatsheet:SHEETS.cheat,
  glossary:GLOSS,
  overview:{
    eyebrow:'Espagnol · Nivel 2',
    title:'Temas 7, 8 and the Repaso unit, on one site',
    lede:'Built only from the course material of ESPAGNOL (NIVEAU 2_BA S3): the 2026-27 programme and the Cuadernillo. Read a sheet, then practise: quiz, gap-fill texts from the workbook, an endless verb drill where accents count, flashcards and mock exams. Your progress is saved in this browser.',
    blurbs:{cheat:'Verb endings, pronouns, comparisons and the exam checklist',exercises:'Every gap-fill of the Cuadernillo, plus new sentences on demand',cards:'Clothes vocabulary, shop phrases and grammar rules',mocks:'1 h 30 · grammar, vocabulary, reading, writing · out of 20'},
    html:`<h3>The course and the final exam</h3>
  <ul><li>Method: <b>Vitamina A2</b>, units <b>7 (De compras)</b> and <b>8 (Otras épocas)</b>, plus a review unit from <b>Socios</b> (“Productos de ayer y hoy”). The programme states: <b>“Todo el contenido del curso podrá ser evaluado en el examen final.”</b></li>
  <li>Grading (programme 2026-27): CC1 25% (oral “Reunión entre antiguos compañeros 20 años después” 15% + written expression 10%), CC2 25% (group oral “La vida de nuestros abuelos en los años 50” 15% + audio comprehension with open questions 10%), digital project 15% (group oral on images or quotes), <b>final exam 35%</b>.</li>
  <li>The programme gives <b>no format, length or past paper for the final exam</b>, and the course platform has none (no announcement either).</li></ul>
  <h3>The three mock exams: format chosen</h3>
  <ul><li><b>Chosen for this site</b>: 1 h 30, 20 points. <b>Parte A</b> grammar (10 pts: imperfecto, indefinido, the contrast, pronouns, comparisons, todavía / ya no, imperative), <b>Parte B</b> vocabulary and shop language (4 pts), <b>Parte C</b> a reading text with questions (3 pts), <b>Parte D</b> a short written text marked with a grid (3 pts). This mirrors the exercise types of the Cuadernillo and its “Ejercicios para comprobar el nivel”. If your teacher announces another format, trust the teacher.</li>
  <li>Not simulated: listening (the course audio tracks are not on the course platform) and speaking.</li>
  <li>Difficulty rises from Mock 1 (workbook-style sentences) to Mock 3 (a full company history mixing both past tenses, pronouns attached to infinitives and gerunds).</li></ul>
  <h3>How to use it before the exam</h3>
  <ol><li>Read the three sheets; learn the verb tables (imperfecto, indefinido) by heart.</li>
  <li>Do the <b>Verb drill</b> until each tense reaches 30 right answers: accents count, as in the exam.</li>
  <li>Exercises: redo every gap-fill text of the Cuadernillo (discman, VHS, Bic, Vamos de compras…) until all blanks are right first time.</li>
  <li>Take the mocks with the timer, then mark your written text honestly with the grid.</li></ol>
  <h3>Sources and limits</h3>
  <ul><li><b>Cuadernillo</b> (21 pages): Vitamina A2 Cuaderno de ejercicios pp. 50–55 (Tema 7) and 58–63 (Tema 8); “Fuera del entorno laboral: Las compras” (lexicon, dialogues, ex. 1); Socios unit 3 pp. 37–45 (Chocolate Águila, Seat, office of the past, Bic, ya / todavía, pronouns) and the La Perla test; “Ejercicios para comprobar el nivel” (7 exercises). It says the Vitamina A2 workbook must be bought: this site only covers the pages on the course platform.</li>
  <li><b>No answer key exists</b> for any exercise: every answer is the site’s, explained. Sentences that are ambiguous in the Cuadernillo are flagged in the exercise (e.g. “Ejercicios para comprobar el nivel” 1 and 3 ask for the imperfecto where “ahora” calls for the present).</li>
  <li><b>Not on the course platform</b>: the Vitamina A2 student’s book (e.g. p. 70 for the workbook ex. 1 p. 58, p. 44 of the Libro del alumno for irregular verbs), the audio tracks (workbook ex. 8 p. 53 and ex. 17 p. 63 are left out), and the photo exercises (5a, 6, 11, the office of ex. 8). The section “Preguntas vídeo CA” is not available to students.</li>
  <li><span class="pill">Outside the workbook</span> notes mark what the site adds: the English translations, the irregular comparatives (mejor, mayor…), the debate expressions, the full list of irregular indefinidos.</li></ul>`},
  quiz:QUIZ,
  exercises:EXERCISES,
  flashcards:CARDS,
  modules:[drillModule,
    {use:'lab',tab:'generators',label:'Generators',data:{items:GENS,intro:'Conjugate the imperfecto and the indefinido, choose the tense in context, put two pronouns together and build comparisons: new item every time, explanation step by step. Accents count for verb forms.'}},
    {use:'lab',tab:'tools',label:'Tools',data:{items:TOOLS,blurb:'Shop role-play and the imperfecto / indefinido tree',intro:'Play a conversation in a shoe shop with the fórmulas de cortesía, and practise choosing between imperfecto and indefinido with a decision tree.'}}],
  mocks:MOCKS,
  mocksNote:NOTE('<b>Where the format comes from.</b> The programme only says the final exam counts for 35% and covers all the course content. The 1 h 30 duration, the four parts and the points are <b>chosen for this site</b>, based on the exercise types of the Cuadernillo: details in the <a href="#espagnol">Overview</a>.')
});
})();
