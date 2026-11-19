"use strict";
/* ---------- Données du plan ---------- */
const PHASES=[
 {n:"Transition",s:"2026-11-09",e:"2026-11-15",goal:"Reprise propre : volume modéré, 0 plyo, relancer salle + natation."},
 {n:"Phase 1 · Base & seuil",s:"2026-11-16",e:"2026-12-13",goal:"Footings à FC < 140, seuil 4:22-4:28, VO2max 1000/800 m, volume 50-55 km, contrôle 5 km le 28 nov. Détaillé jusqu'au 29 nov ; la suite dépend de ton planning de travail."},
 {n:"À reconstruire",s:"2026-12-14",e:"2027-03-14",goal:"Proposition à valider : 10 km sous 40:00 en décembre-janvier, puis bloc marathon pour Rome (14 mars 2027). Plan détaillé une fois ton planning connu."}
];
const GYM={
 push:["Développé couché 4×6-8","Développé incliné haltères 3×8-10","Dips lestés 3×8","Élévations latérales 3×12-15","Triceps poulie 3×12"],
 pull:["Tractions 4×6-8","Rowing barre 4×8","Tirage horizontal 3×10","Face pull 3×15","Curl haltères 3×10-12"],
 legs:["Squat 4×5-6","Soulevé de terre roumain 3×8","Fentes marchées 3×10","Mollets debout 4×12","Gainage 3×45 s"]
};
const PLAN=[
 {d:"2026-11-16",k:"push",t:"Footing + Push",dur:"45' + 60'",d1:["Matin : footing facile 7 km à 6:00-6:15, FC < 140",...GYM.push],why:"Début de la Phase 1 : allures faciles, pas de zone 3. Pas de plyo."},
 {d:"2026-11-17",k:"run",t:"VO2max + Legs allégés",dur:"75' + 45'",d1:["Matin : échauffement 15' + gammes + 4 strides","5×1000 m à 3:52-3:57, récup 2' trot (stop à 4 reps si > 4:03)","Retour au calme 10'","Soir (≥ 6 h après) : Legs allégés — squat 3×5, RDL 3×6-8, hip thrust 3×8-10, mollets 3×12, préhab"],why:"Séance la plus dure quand tu es le plus frais."},
 {d:"2026-11-18",k:"pull",t:"Natation #1 + Pull",dur:"50' + 60'",d1:["Matin : natation 2 000 m (300 m échauffement, 6×50 éducatifs, 5×200 continu à 20 s de repos, 400 m souple)",...GYM.pull],why:"Journée tampon avant le seuil."},
 {d:"2026-11-19",k:"run",t:"Footing + Natation #2",dur:"55' + 45'",d1:["Matin : footing facile 8 km à 6:00-6:15, FC < 140 + 4 lignes droites × 20 s","Soir : natation 2 000 m aérobie facile"],why:"Veille du seuil : sommeil et glucides."},
 {d:"2026-11-20",k:"run",t:"Seuil 3×10'",dur:"75'",d1:["Échauffement 15' + gammes","3×10' à 4:24-4:28 (FC 172-178), récup 90 s trot","Retour au calme 10'","Soir (option) : Core + haut du corps léger 30'"],why:"Seuil à 48 h de la longue. Arrête à 2×10 si la 1re rep est à RPE 9."},
 {d:"2026-11-21",k:"mob",t:"Mobilité + footing",dur:"30' + 30'",d1:["Footing facile 5 km à 6:00-6:15, FC < 140","Mobilité 25-30' : hanches, chevilles, thoracique, fessiers","Dîner riche en glucides"],why:"Veille de sortie longue."},
 {d:"2026-11-22",k:"long",t:"Sortie longue 16 km",dur:"1h40",d1:["16 km à 6:00-6:15, zone 2 stricte, FC < 140","Sans finish rapide"],why:"Total de la semaine : ~55 km."},
 {d:"2026-11-23",k:"push",t:"Footing + Push",dur:"40' + 60'",d1:["Matin : footing facile 6 km à 6:00-6:15, FC < 140","Push : développé couché 4×6, incliné 3×8, dips lestés 3×8, élévations latérales 3×12-15, triceps 3×12"],why:"Semaine du contrôle : volume un peu réduit."},
 {d:"2026-11-24",k:"run",t:"VO2max + Legs allégés",dur:"70' + 45'",d1:["Matin : échauffement 15' + gammes + 4 strides","6×800 m à 3:50-3:55, récup 90 s trot (stop à 4 reps si > 4:00)","Retour au calme 10'","Soir (≥ 6 h après) : Legs allégés — squat 3×5, RDL 3×6-8, hip thrust 3×8-10, mollets 3×12, préhab"],why:"Dernière séance de vitesse avant le test."},
 {d:"2026-11-25",k:"pull",t:"Natation #1 + Pull",dur:"50' + 60'",d1:["Matin : natation 2 000 m (300 m échauffement, 6×50 éducatifs, 5×200 continu à 20 s de repos, 400 m souple)",...GYM.pull],why:"Journée tampon avant le seuil de jeudi."},
 {d:"2026-11-26",k:"run",t:"Seuil 3×12'",dur:"80'",d1:["Échauffement 15' + gammes","3×12' à 4:22-4:26, récup 90 s trot","Retour au calme 10'"],why:"Seuil à 48 h du test 5 km. Arrête à 2×12 si la 1re rep est à RPE 9."},
 {d:"2026-11-27",k:"swim",t:"Footing + Natation #2 + mobilité",dur:"35' + 40' + 25'",d1:["Matin : footing très facile 5 km à 6:15 + 4 lignes droites × 20 s","Mobilité 25' : hanches, chevilles, thoracique","Soir : natation 1 500 m facile"],why:"Veille du test : sommeil, hydratation, glucides au dîner."},
 {d:"2026-11-28",k:"run",t:"CONTRÔLE 5 km",dur:"75'",d1:["Échauffement 20' + gammes + 4 strides","5 km : 3:46-3:48 sur les 2 premiers km, puis tout donner (cible 18:40-18:50)","Retour au calme 10-15'"],why:"Contrôle : une heure de référence réelle pour valider le sub-40 sur 10 km et fixer l'allure marathon."},
 {d:"2026-11-29",k:"long",t:"Sortie longue 14 km",dur:"1h25",d1:["14 km à 6:00-6:15, FC < 140, très facile après le test"],why:"Dernier jour avant la reprise du travail (30 nov) : plan à recalibrer."}
];
const PKM={"2026-11-16":7,"2026-11-17":10,"2026-11-19":8,"2026-11-20":11,"2026-11-21":5,"2026-11-22":16,"2026-11-23":6,"2026-11-24":9,"2026-11-26":12,"2026-11-27":5,"2026-11-28":10,"2026-11-29":14};
/* séances de qualité : allure cible en s/km (lo-hi), limite d'arrêt ; m = longueur d'une répétition (m), t = durée (s) */
const QUAL={"2026-11-17":{n:"VO2max 5×1000 m",lo:232,hi:237,stop:243,m:1000},"2026-11-24":{n:"VO2max 6×800 m",lo:230,hi:235,stop:240,m:800},"2026-11-20":{n:"Seuil 3×10 min",lo:264,hi:268,stop:274,t:600},"2026-11-26":{n:"Seuil 3×12 min",lo:262,hi:266,stop:272,t:720},"2026-11-28":{n:"Contrôle 5 km",lo:218,hi:228,stop:236,solo:true}};
const FCMAX_EASY=140;
const KIND={mob:"Mobilité",push:"Push",pull:"Pull",legs:"Legs",fa:"Full body A",fb:"Full body B",run:"Course",long:"Sortie longue",swim:"Natation",pilates:"Pilates",climb:"Escalade",rest:"Repos"};
const ACT={run:"Course",swim:"Natation",gym:"Salle",pilates:"Pilates",mob:"Mobilité",climb:"Escalade",walk:"Marche",ride:"Vélo",autre:"Autre"};
const AVAIL=["Libre","Matin pris","Soir pris","Journée prise"];
const PROFILE0={labels:["Zone sensible 1","Zone sensible 2"],target:null};
const GOALS="10 km sous 40:00 (3:59/km) ; marathon de Rome le 14 mars 2027 (objectif 3:05-3:10 à confirmer après le contrôle 5 km et la tentative 10 km) ; swimrun plus tard, sans date ; PR semi mis de côté";
const ROME="2027-03-14";

/* ---------- État & stockage ---------- */
let S={checkins:{},journal:[],profile:{...PROFILE0},over:{},ign:{},ivl:null,base:{},avail:{},mob:{},tm:{}};
let tab="today",selDate=null,weekAnchor=null,coachPrefill="";
const LS="max-training-v3";
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pad=n=>String(n).padStart(2,"0");
const iso=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const parse=s=>{const[a,b,c]=s.split("-").map(Number);return new Date(a,b-1,c)};
let TODAY=iso(new Date());
const DOW=["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];
const fmtLong=s=>parse(s).toLocaleDateString("fr-BE",{weekday:"long",day:"numeric",month:"long"});
const fmtShort=s=>parse(s).toLocaleDateString("fr-BE",{day:"numeric",month:"short"});

function lsSave(){try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}}
function lsLoad(){try{const v=JSON.parse(localStorage.getItem(LS)||"null");if(v)S={...S,...v,profile:{...PROFILE0,...(v.profile||{})}};S.tm=S.tm||{}}catch(e){}}
async function put(){lsSave();return true}
async function del(){lsSave()}

/* ---------- Logique ---------- */
function planFor(date){const p=PLAN.find(x=>x.d===date);const o=S.over[date];
  if(o)return {...(p||{d:date,k:"run",t:"Séance ajustée",d1:[],dur:""}),t:o.t,d1:o.d1||[],why:"Ajusté avec le coach · "+(o.why||""),mod:true};
  return p||null}
function phaseFor(date){return PHASES.find(p=>date>=p.s&&date<=p.e)}
const ivlActs=()=>S.ivl?.acts||[];
const ivlWell=d=>(S.ivl?.well||[]).find(r=>r[0]===d);
function readiness(c){
  if(!c)return null;
  const L=S.profile.labels||[],n1=L[0]||"zone 1",n2=L[1]||"zone 2",b=S.base||{};
  let sc=100,why=[];
  if(c.rhr&&b.rhr){const rd=c.rhr-b.rhr;if(rd>=5){sc-=35;why.push("FC repos +"+rd+" bpm")}else if(rd>=3){sc-=15;why.push("FC repos +"+rd)}}
  if(c.hrv&&b.hrv&&c.hrv<b.hrv*.8){sc-=20;why.push("VFC basse")}
  if(c.sleep&&c.sleep<6.5){sc-=15;why.push("sommeil court")}
  if(c.sore>=4){sc-=15;why.push("courbatures fortes")}
  if(c.energy<=2){sc-=15;why.push("énergie basse")}
  if(c.p1>=3){sc-=50;why.push(n1+" "+c.p1+"/10")}else if(c.p1>=1){sc-=10;why.push(n1+" "+c.p1+"/10")}
  if(c.p2>=3){sc-=15;why.push(n2+" "+c.p2+"/10")}
  if(c.ill){sc-=60;why.push("signes de maladie")}
  sc=Math.max(0,sc);
  return {sc,col:sc>=75?"g":sc>=50?"o":"r",why,
    msg:sc>=75?"Feu vert : séance telle que prévue.":sc>=50?"Prudence : garde la séance mais réduis l'intensité de 10 %.":"Feu rouge : remplace par footing très facile, mobilité ou repos."}
}
function weekBounds(date){const d=parse(date);const m=(d.getDay()+6)%7;const a=new Date(d);a.setDate(d.getDate()-m);return [...Array(7)].map((_,i)=>{const x=new Date(a);x.setDate(a.getDate()+i);return iso(x)})}
function weekIndex(date){const ph=phaseFor(date);if(!ph)return null;const n=Math.floor((parse(date)-parse(ph.s))/6048e5)+1;const tot=Math.ceil((parse(ph.e)-parse(ph.s)+864e5)/6048e5);return {ph,n,tot}}
const daysTo=s=>Math.round((parse(s)-parse(TODAY))/864e5);
/* ---------- Plan 30 nov. 2026 → 14 mars 2027 (généré ; horaires libres, à recaler quand le planning de travail est connu) ---------- */
(function(){
const sec=p=>{const[a,b]=p.split(":").map(Number);return a*60+b};
const ad=(d,n)=>{const x=parse(d);x.setDate(x.getDate()+n);return iso(x)};
const EZ="6:00-6:15",AM="4:25-4:30";
GYM.A=["Squat 4×5 (RPE 7-8)","Développé couché ou incliné 3×6-8","Tractions (assistées si besoin) 3×6-8","Hip thrust 3×8","Rotations externes d'épaule 2×15","Pallof press 3×10 par côté","Mollets debout 3×12","Finisher bras : curl barre EZ 3×10 + extension triceps poulie 3×12 (superset)"];
GYM.B=["Soulevé de terre roumain 3×8","Fente arrière ou split squat bulgare 3×8 par côté","Leg extension lent (descente 3 s) 2×12-15","Développé militaire haltères 3×8","Rowing buste appuyé 3×10","Tirage vertical ou pull-over poulie 3×10","Mollets assis 3×12","Dead bug 3×10","Finisher bras : curl marteau 3×12 + barre au front ou dips banc 3×10 (superset)"];
const GYM_LIGHT=a=>a.map(x=>x.replace(/ (\d)×/," $1×")).slice(0,-1);
/* séances de qualité : [titre, lignes, km, durée, lo, hi, {m|t}] — lo/hi en m:ss/km */
const V={ // mardi
 1:["Fartlek 6×2'",["6×2' à 3:55-4:00 (allure 10 km), récup 2' trot"],11,"55'","3:55","4:00",{t:120}],
 2:["VO2max 5×1000 m",["5×1000 m à 3:52-3:57, récup 2' trot (stop à 4 reps si > 4:03)"],12,"65'","3:52","3:57",{m:1000}],
 3:["VO2max 6×800 m",["6×800 m à 3:50-3:55, récup 90 s trot (stop à 4 reps si > 4:00)"],11,"60'","3:50","3:55",{m:800}],
 4:["8×400 m",["8×400 m à 3:48-3:52, récup 60 s trot (semaine de fêtes : volume réduit)"],9,"50'","3:48","3:52",{m:400}],
 5:["VO2max 5×1000 m",["5×1000 m à 3:50-3:55, récup 2' trot (stop à 4 reps si > 4:01)"],12,"65'","3:50","3:55",{m:1000}],
 6:["10 km spé 5×1200 m",["5×1200 m à 3:55-3:58, récup 90 s trot"],13,"65'","3:55","3:58",{m:1200}],
 7:["10 km spé 4×1600 m",["4×1600 m à 3:57-4:00, récup 2' trot"],14,"70'","3:57","4:00",{m:1600}],
 8:["3×1000 m + lignes droites",["3×1000 m à 3:55-3:58, récup 2' trot","4 lignes droites × 20 s"],9,"50'","3:55","3:58",{m:1000}],
 9:["Seuil 3×2 km",["3×2 km à 4:22-4:26, récup 2' trot"],13,"65'","4:22","4:26",{m:2000}],
 10:["VO2max 5×1000 m",["5×1000 m à 3:52-3:57, récup 2' trot"],12,"65'","3:52","3:57",{m:1000}],
 11:["Seuil 3×15'",["3×15' à 4:22-4:26, récup 2' trot"],13,"75'","4:22","4:26",{t:900}],
 12:["Seuil 2×20'",["2×20' à 4:24-4:28, récup 3' trot"],12,"70'","4:24","4:28",{t:1200}],
 13:["Seuil 3×2 km",["3×2 km à 4:22-4:26, récup 2' trot"],12,"60'","4:22","4:26",{m:2000}],
 14:["4×1000 m",["4×1000 m à 3:55-3:58, récup 2' trot"],9,"50'","3:55","3:58",{m:1000}],
 15:["Rappel d'allure 3×1000 m",["3×1000 m à "+AM+", récup 90 s trot"],7,"40'","4:25","4:30",{m:1000}]
};
const F={ // vendredi
 1:["Seuil 2×12'",["2×12' à 4:24-4:28, récup 2' trot"],11,"60'","4:24","4:28",{t:720}],
 2:["Seuil 3×10'",["3×10' à 4:24-4:28, récup 90 s trot"],11,"65'","4:24","4:28",{t:600}],
 3:["Seuil 3×12'",["3×12' à 4:22-4:26, récup 90 s trot"],12,"70'","4:22","4:26",{t:720}],
 4:["Seuil 2×10'",["2×10' à 4:24-4:28, récup 90 s trot"],9,"55'","4:24","4:28",{t:600}],
 5:["Seuil 4×8'",["4×8' à 4:22-4:26, récup 60 s trot"],12,"65'","4:22","4:26",{t:480}],
 6:["Seuil 2×15'",["2×15' à 4:22-4:26, récup 2' trot"],12,"65'","4:22","4:26",{t:900}],
 7:["Seuil 3×12'",["3×12' à 4:22-4:26, récup 90 s trot","4 lignes droites × 20 s"],12,"70'","4:22","4:26",{t:720}],
 9:["Allure marathon 2×5 km",["2×5 km à "+AM+", récup 3' footing"],15,"80'","4:25","4:30",{m:5000}],
 10:["Allure marathon 2×7 km",["2×7 km à "+AM+", récup 3' footing"],17,"90'","4:25","4:30",{m:7000}],
 11:["Allure marathon 2×8 km",["2×8 km à "+AM+", récup 3' footing"],20,"105'","4:25","4:30",{m:8000}],
 12:["Allure marathon 10 km",["10 km continu à "+AM+""],14,"80'","4:25","4:30",{m:10000}],
 13:["Allure marathon 2×4 km",["2×4 km à "+AM+", récup 2' footing"],12,"65'","4:25","4:30",{m:4000}],
 14:["Allure marathon 3×3 km",["3×3 km à "+AM+", récup 2' footing"],12,"65'","4:25","4:30",{m:3000}]
};
const THU=[0,8,9,10,8,10,10,10,8,8,8,8,8,8,8,6];
const SAT=[0,5,5,5,5,5,5,5,4,4,4,4,4,5,5,3];
const LONG={1:16,2:18,3:20,4:14,5:18,6:20,7:22,9:22,10:24,11:26,12:32,13:20,14:16};
const SW={ // [total m Lun, principal m, texte, total Jeu]
 1:[2000,1000,"5×200 continu à 20 s de repos",2000],2:[2200,1200,"6×200 continu à 20 s de repos",2000],3:[2200,1200,"3×400 continu à 30 s de repos",2000],4:[2000,1000,"5×200 continu à 20 s de repos",2000],5:[2500,1600,"4×400 continu à 30 s de repos",2000],
 6:[2500,1600,"8×200 à 20 s de repos (allure un peu plus vive)",2200],7:[2500,1600,"4×400 continu à 30 s de repos",2200],8:[2000,1000,"5×200 continu à 20 s de repos",2000],
 9:[2500,1600,"4×400 continu à 30 s de repos",2200],10:[2500,1600,"8×200 à 20 s de repos",2200],11:[2500,1600,"4×400 continu à 30 s de repos",2200],12:[2500,1600,"8×200 à 20 s de repos",2200],
 13:[2200,1200,"6×200 à 20 s de repos",2000],14:[2000,1000,"5×200 à 20 s de repos",1800],15:[1500,0,"",0]
};
const swim1=w=>{const[t,m,txt]=SW[w];if(!m)return "Natation 1 500 m souple, sans chrono";return `Natation ${t} m (300 m échauffement, 6×50 éducatifs, ${txt}, ${t-600-m} m souple)`};
const swim2=w=>{const t=SW[w][3];return `Natation ${t} m aérobie facile (300 m échauffement, 6×50 techniques, reste à allure confortable, pull-buoy possible sur 4×200)`};
const WARM="Échauffement 15' + gammes",COOL="Retour au calme 10'";
const PH_LINES=["Phase 2 · Base & vitesse","Phase 3 · 10 km","Phase 4 · Marathon","Phase 5 · Affûtage"];
let km0=0;
for(let w=1;w<=15;w++){
  const mon=ad("2026-11-30",(w-1)*7),dm=i=>ad(mon,i);
  const add=(i,o)=>{PLAN.push({d:dm(i),...o})};
  const lt=w>=14&&w<=15,light13=w===13;
  const gA=w===15?["Full body léger : squat à vide ou goblet 2×8, tirage 2×10, développé haltères 2×10, gainage 2×30 s. Aucun échec."]:w===14?GYM.A.slice(0,7).map(x=>x.replace(/^(.*?) (\d)×/,"$1 2×")):light13?GYM.A.map(x=>x):GYM.A;
  const gB=w===13?GYM.B:GYM.B;
  // Lundi
  const mT=w===15?"Natation + Full body léger":w===14?"Natation + mobilité":"Natation #1 + Full body B";
  add(0,{k:w===14?"swim":"fb",t:mT,dur:w===15?"35' + 40'":w===14?"45' + 25'":"50' + 60'",d1:[(w===15?"Matin : ":"Matin : ")+swim1(w),...(w===15?gA:w===14?["Mobilité 25' : hanches, chevilles, thoracique, fessiers (pas de salle : on arrive frais)"]:["Salle (full body B) :",...gB])],why:w===14?"Dernière semaine avant l'affûtage final : on protège les jambes.":"Full body B : jambes modérées, haut du corps et finisher bras. Loin des séances de qualité."});
  // Mardi
  const v=V[w];add(1,{k:"run",t:v[0],dur:v[3],d1:[WARM,...v[1],COOL],why:w<=5?"Phase 2 : vitesse aérobie et seuil.":w<=8?"Phase 3 : préparation du 10 km sous 40:00 (3:59/km).":w<=12?"Phase 4 : qualité d'entretien + spécifique marathon.":"Affûtage : on garde l'intensité, on réduit le volume."});
  // Mercredi
  add(2,w===15?{k:"mob",t:"Mobilité + repos",dur:"30'",d1:["Mobilité 20-25' : hanches, chevilles, thoracique","Marche ou repos, glucides, sommeil"],why:"Semaine du marathon : on arrive frais."}:{k:"fa",t:w===14?"Full body A léger":"Full body A (jambes lourdes)",dur:"60'",d1:["Salle (full body A) :",...gA,...(w===14?["Charges à 80 %, 2 séries, aucun échec"]:[])],why:w>=13?"Maintien, pas de fatigue résiduelle avant la course.":"Séance jambes lourde, à 48 h de la qualité du vendredi."});
  // Jeudi
  const tk=THU[w];add(3,{k:"run",t:w===15?"Footing + lignes droites":"Footing + Natation #2",dur:w===15?"35'":"55' + 45'",d1:[`Matin : footing facile ${tk} km à ${EZ}, FC < 140 + 4 lignes droites × 20 s`,...(w===15?[]:["Soir : "+swim2(w)])],why:"Jour facile entre deux séances de qualité."});
  // Vendredi
  if(F[w]){const f=F[w];add(4,{k:"run",t:f[0],dur:f[3],d1:[WARM,...f[1],COOL],why:w<=7?"Seuil : endurance au rythme du 10 km.":"Allure marathon : apprendre à tenir 4:25-4:30 sur la durée."});}
  else add(4,{k:"mob",t:w===8?"Footing + lignes droites":"Repos actif",dur:w===8?"40'":"25'",d1:w===8?["Footing facile 6 km à "+EZ+" + 4 lignes droites × 20 s","Mobilité 15'"]:["Mobilité 20' ou 20' de trot très facile","Glucides, hydratation, sommeil"],why:w===8?"Veille de la tentative 10 km : fraîcheur avant tout.":"Veille du marathon : repos."});
  // Samedi
  const sk=SAT[w];add(5,{k:"mob",t:w===15?"Footing d'activation + mobilité":"Mobilité + footing",dur:w===15?"25' + 15'":"30' + 30'",d1:[`Footing facile ${sk} km à ${EZ}, FC < 140${w===15?" + 4 lignes droites":""}`,"Mobilité 25-30' : hanches, chevilles, thoracique, fessiers",...(w===15||w===8?["Dîner riche en glucides"]:[])],why:w===15?"Veille du marathon : dernière sortie, glucides et sommeil.":w===8?"Veille de la tentative 10 km.":"Veille de sortie longue."});
  // Dimanche
  if(w===8){add(6,{k:"run",t:"TENTATIVE 10 km",dur:"1h15",d1:["Échauffement 20' + gammes + 4 lignes droites","10 km : départ à 3:59-4:00, tenir régulier jusqu'au km 7, puis donner tout ce qui reste (objectif < 40:00)","Retour au calme 10-15'"],why:"Mesure ta forme avant le bloc marathon. Choisis un parcours plat et à l'abri du vent."})}
  else if(w===15){add(6,{k:"run",t:"MARATHON DE ROME 42,2 km",dur:"~3h10",d1:["Échauffement léger 10' + lignes droites","Km 1-10 : "+"4:30-4:35 volontairement prudent","Km 10-30 : allure marathon (≈"+AM+"), régulier","Km 30-42 : tenir, puis donner si les jambes répondent","Plan nutrition : gel toutes les 30-35 min, eau à chaque ravitaillement"],why:"Objectif 3:05-3:10 à confirmer après la tentative 10 km."})}
  else{const L=LONG[w];const fin=w===11?" Les 6 derniers km à "+AM+".":w===12?" Les 8 derniers km à "+AM+" (dernière grosse sortie, 3 semaines avant Rome).":w===13?" Les 8 derniers km à "+AM+".":"";
    add(6,{k:"long",t:"Sortie longue "+L+" km",dur:Math.floor(L*6.1/60)+"h"+pad(Math.round(L*6.1)%60),d1:[`${L} km à ${EZ}, FC < 140${w>=9&&w<=12?" (gel ou boisson dès 1 h)":""}.${fin}`],why:w===4?"Semaine de fêtes : volume réduit, plaisir.":w===14?"Dernière longue : on laisse le corps absorber.":"Base aérobie pour la distance."})}
  // distances
  const q1=v[2],q2=F[w]?F[w][2]:(w===8?6:0),sun=w===8?14:w===15?42.2:LONG[w];
  const wkm=q1+tk+q2+sk+sun;
  PKM[dm(1)]=q1;PKM[dm(3)]=tk;if(q2)PKM[dm(4)]=q2;PKM[dm(5)]=sk;PKM[dm(6)]=sun;
  // qualités suivies
  const reg=(d,n,o)=>{QUAL[d]=Object.assign({n,lo:sec(o[4]),hi:sec(o[5]),stop:sec(o[5])+6},o[6])};
  reg(dm(1),v[0],v);if(F[w])reg(dm(4),F[w][0],F[w]);
  if(w===8)QUAL[dm(6)]={n:"Tentative 10 km",lo:236,hi:240,stop:246,solo:true};
  if(w===15)QUAL[dm(6)]={n:"Marathon de Rome",lo:265,hi:270,stop:278,solo:true};
  PLAN.find(p=>p.d===dm(6)).why+=` · semaine ${w}/15 : ~${Math.round(wkm)} km`;
}
// Phases
const ph=PHASES;ph.length=0;
ph.push({n:"Transition",s:"2026-11-09",e:"2026-11-15",goal:"Reprise propre : volume modéré, 0 plyo, relancer salle + natation."},
 {n:"Phase 1 · Base & seuil",s:"2026-11-16",e:"2026-11-29",goal:"Footings à FC < 140, seuil 4:22-4:28, VO2max 1000/800 m, volume 50-55 km, contrôle 5 km le 28 nov (temps de référence)."},
 {n:"Phase 2 · Base & vitesse",s:"2026-11-30",e:"2027-01-03",goal:"VO2max et seuil, full body A/B (2 séances par semaine), natation 2×/semaine, volume 48-58 km. Semaine allégée pendant les fêtes."},
 {n:"Phase 3 · 10 km",s:"2027-01-04",e:"2027-01-24",goal:"Allure 10 km (3:57-4:00), seuil long, tentative 10 km sous 40:00 le 24 janvier."},
 {n:"Phase 4 · Marathon",s:"2027-01-25",e:"2027-02-21",goal:"Séances à allure marathon (≈4:25-4:30), sortie longue jusqu'à 32 km le 21 février."},
 {n:"Phase 5 · Affûtage",s:"2027-02-22",e:"2027-03-14",goal:"Volume en baisse sur 3 semaines, intensité maintenue, marathon de Rome le 14 mars 2027."});
})();

const fmtPace=sec=>Math.floor(sec/60)+":"+pad(Math.round(sec%60)).replace(/^60$/,"59");
const fmtDur=m=>m>=60?Math.floor(m/60)+" h "+pad(m%60):m+" min";

/* Bilan post-séance : règles simples sur les données de la montre ; détail des répétitions (S.ivl.bil[date].reps, en s/km) lu dans Intervals. */
function bilan(date){
  const acts=ivlActs().filter(a=>a[0]===date&&a[2]==="run"&&a[4]>0);
  if(!acts.length)return null;
  const tm=S.tm?.[date],tmSp=tm&&(tm.sp||[]).filter(v=>v>0),tmKm=tm&&tm.km>0?tm.km:0;
  const km=tmKm||acts.reduce((s,a)=>s+a[4],0),min=acts.reduce((s,a)=>s+(a[5]||0),0);
  const hr=min?acts.reduce((s,a)=>s+(a[6]||0)*(a[5]||0),0)/min:0;
  const rpe=Math.max(0,...acts.map(a=>a[7]||0));
  const pace=km?min*60/km:0,plan=PKM[date],q=QUAL[date],x=S.ivl?.bil?.[date];
  const L=[];let lv="g";const up=l=>{if(l==="r"||(l==="o"&&lv==="g"))lv=l};
  L.push(km.toFixed(1)+" km"+(plan?" (prévu "+plan+")":"")+(tmKm?" (tapis)":"")+" · "+fmtDur(Math.round(min))+" · allure moy. "+fmtPace(pace)+"/km"+(hr?" · FC moy. "+Math.round(hr):""));
  if(plan&&km<plan*.9){L.push("Volume en dessous du plan.");up("o")}
  if(plan&&km>plan*1.15){L.push("Volume au-dessus du plan : ne compense pas sur les jours suivants.");up("o")}
  if(q){
    const rs=tmSp&&tmSp.length?tmSp.map(v=>3600/v):(x&&x.reps&&x.reps.length?x.reps:null);
    if(rs){
      const r=rs,inT=r.filter(v=>v>=q.lo-3&&v<=q.hi+3).length,slow=r.filter(v=>v>q.stop).length;
      L.push((tmSp&&tmSp.length?"Allures du tapis : ":"Répétitions : ")+r.map(fmtPace).join(" · ")+" (cible "+fmtPace(q.lo)+"-"+fmtPace(q.hi)+")");
      if(slow){L.push(slow+" répétition(s) au-delà de la limite d'arrêt : la charge est trop haute pour l'instant.");up("r")}
      else if(inT<r.length){L.push(inT+"/"+r.length+" dans la cible.");up("o")}
      else L.push("Toutes les répétitions dans la cible.");
      if(r.length>1&&r[r.length-1]-r[0]>6){L.push("Dérive de "+Math.round(r[r.length-1]-r[0])+" s/km entre la 1re et la dernière : départ trop rapide ?");up("o")}
    }else if(!q.solo)L.push("Détail des répétitions indisponible (Intervals ne les a pas détectées).");
  }else{
    if(hr>FCMAX_EASY+5){L.push("FC moyenne au-dessus de "+FCMAX_EASY+" : ralentis de 10-15 s/km la prochaine fois.");up("r")}
    else if(hr>FCMAX_EASY){L.push("FC moyenne un peu haute (cible < "+FCMAX_EASY+").");up("o")}
    else if(hr)L.push("FC sous "+FCMAX_EASY+" : allure facile respectée.");
  }
  if(rpe>=(q?9:6)){L.push("RPE "+rpe+"/10 : plus dur que prévu pour cette séance.");up("o")}
  return {lv,L,km,min,hr,rpe,q:!!q,reps:q&&tmSp&&tmSp.length?tmSp.map(v=>3600/v):(q&&x&&x.reps&&x.reps.length?x.reps:null),qd:q||null};
}


/* ---------- Intervals.icu (appels directs depuis le téléphone) ---------- */
const BASE="https://intervals.icu/api/v1",KEYK="max-ivl-key";
const ckGet=()=>{const m=document.cookie.match(/(?:^|; )mxk=([^;]*)/);return m?decodeURIComponent(m[1]):""};
const getKey=()=>{let k="";try{k=localStorage.getItem(KEYK)||""}catch(e){}return k||ckGet()};
const setKey=k=>{try{k?localStorage.setItem(KEYK,k):localStorage.removeItem(KEYK)}catch(e){}
 try{document.cookie="mxk="+(k?encodeURIComponent(k):"")+"; max-age="+(k?31536000:0)+"; path=/; SameSite=Strict; Secure"}catch(e){}
 try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}};
async function api(path,opt={}){
  const h={"Authorization":"Basic "+btoa("API_KEY:"+getKey())};
  if(opt.body)h["Content-Type"]="application/json";
  const r=await fetch(BASE+path,{...opt,headers:h});
  if(!r.ok){let t="";try{t=await r.text()}catch(e){}throw new Error("HTTP "+r.status+" "+t.slice(0,100))}
  const t=await r.text();return t?JSON.parse(t):null;
}
const tmap=t=>/Run/.test(t||"")?"run":/Swim/.test(t||"")?"swim":/Weight|Strength|Workout/.test(t||"")?"gym":/Walk|Hike/.test(t||"")?"walk":/Ride|Bike/.test(t||"")?"ride":/Pilates|Yoga/.test(t||"")?"pilates":/Climb/.test(t||"")?"climb":"autre";
const median=a=>{a=a.filter(x=>x!=null&&x>0).sort((p,q)=>p-q);return a.length?a[Math.floor(a.length/2)]:null};
const dayShift=n=>{const d=new Date();d.setDate(d.getDate()+n);return iso(d)};
let syncing=false,syncMsg="",copyBuf="";

async function syncIntervals(){
  if(!getKey())throw new Error("no-key");
  const [acts,well,evs]=await Promise.all([
    api("/athlete/0/activities?oldest="+dayShift(-120)+"&newest="+dayShift(1)),
    api("/athlete/0/wellness?oldest="+dayShift(-60)+"&newest="+dayShift(0)),
    api("/athlete/0/events?oldest="+dayShift(-7)+"&newest="+dayShift(45))
  ]);
  /* doublons connus du 5 nov (séance importée en plusieurs morceaux) */
  const skip=a=>(a.start_date_local||"").slice(0,10)==="2026-11-05"&&(/Ride|Virtual/.test(a.type||"")||/Speed Track/.test(a.name||""));
  const A=(acts||[]).filter(a=>!skip(a)).map(a=>[(a.start_date_local||"").slice(0,10),(a.start_date_local||"").slice(11,16),tmap(a.type),a.name||"",(a.distance||0)/1000,Math.round((a.moving_time||0)/60),a.average_heartrate||null,a.icu_rpe||null,a.icu_training_load||0,a.id]).sort((p,q)=>(p[0]+p[1]).localeCompare(q[0]+q[1]));
  const W=(well||[]).map(w=>[w.id,w.ctl,w.atl,w.restingHR,w.hrv,w.sleepSecs?Math.round(w.sleepSecs/360)/10:null,w.sleepScore,w.vo2max,w.weight]).sort((p,q)=>p[0].localeCompare(q[0]));
  const E=(evs||[]).filter(e=>e.category==="WORKOUT").map(e=>({id:e.id,d:(e.start_date_local||"").slice(0,10),n:e.name||"",t:e.type||"",desc:e.description||""}));
  S.ivl={at:new Date().toISOString(),acts:A,well:W,ev:E,bil:(S.ivl&&S.ivl.bil)||{}};
  const last30=W.slice(-30);
  S.base={rhr:median(last30.map(r=>r[3])),hrv:median(last30.map(r=>r[4]))};
  await fetchBils();
  lsSave();
}
/* détail des répétitions des séances de qualité réalisées */
async function fetchBils(){
  const bil=S.ivl.bil||{};
  for(const d of Object.keys(QUAL)){
    const q=QUAL[d];if(q.solo)continue;
    const a=S.ivl.acts.filter(x=>x[0]===d&&x[2]==="run"&&x[9]).sort((p,r)=>r[4]-p[4])[0];
    if(!a||(bil[d]&&bil[d].id===a[9]))continue;
    try{
      const j=await api("/activity/"+a[9]+"?intervals=true");
      const iv=((j&&j.icu_intervals)||[]).filter(x=>x.distance>0&&x.moving_time>0);
      let reps=iv.filter(x=>x.type==="WORK");
      if(!reps.length&&q.m)reps=iv.filter(x=>Math.abs(x.distance-q.m)<=q.m*.15);
      if(!reps.length&&q.t)reps=iv.filter(x=>Math.abs(x.moving_time-q.t)<=q.t*.12);
      bil[d]={id:a[9],reps:reps.map(x=>Math.round(x.moving_time/x.distance*1000)),hr:reps.map(x=>Math.round(x.average_heartrate||0))};
    }catch(e){}
  }
  S.ivl.bil=bil;
}
const onWatch=d=>(S.ivl&&S.ivl.ev||[]).some(e=>e.d===d);
async function doSync(){
  if(syncing)return;
  syncing=true;syncMsg="";paintSync();
  try{await syncIntervals()}catch(e){syncMsg=e.message==="no-key"?"":"Synchro impossible ("+e.message+"). Vérifie ta connexion ou ta clé."}
  syncing=false;render();
}
function paintSync(){const b=$("#syncBtn");if(b)b.textContent=syncing?"…":"↻"}

/* ---------- Propositions d'adaptation (toujours soumises à ta validation) ---------- */
function repCount(desc){const m=/^(VO2max|Seuil) (\d+)x$/m.exec(desc||"");return m?+m[2]:0}
function trimProp(e,why){
  const n=repCount(e.desc);if(n<3)return null;
  return {kind:"trim",d:e.d,evId:e.id,
    name:e.n.replace(/(\d+)x/,(m,k)=>(k-1)+"x"),
    desc:e.desc.replace(/^(VO2max|Seuil) (\d+)x$/m,(m,a,k)=>a+" "+(k-1)+"x"),
    lines:["Une répétition en moins ("+(n-1)+" au lieu de "+n+"), mêmes allures et récupérations"],
    why};
}
function proposals(){
  const out=[],ev=(S.ivl&&S.ivl.ev)||[];
  if(!ev.length)return out;
  const add=p=>{if(p&&!S.ign[p.kind+":"+p.d]&&!S.over[p.d]&&!out.some(o=>o.d===p.d))out.push(p)};
  const ci=S.checkins[TODAY],iw=ivlWell(TODAY);
  const r=readiness(ci||(iw&&iw[3]?{rhr:iw[3],hrv:iw[4],sleep:iw[5],p1:0,p2:0,energy:3,sore:1}:null));
  const e0=ev.find(e=>e.d===TODAY&&e.t==="Run");
  const L=S.profile.labels||[];
  if(ci&&e0&&(ci.p1>=3||ci.p2>=3)){
    add({kind:"remove",d:TODAY,evId:e0.id,name:"Séance retirée",desc:"",lines:["Séance retirée de la montre : mobilité ou repos"],why:"Douleur ≥ 3/10 au check-in ("+((ci.p1>=3?L[0]||"zone 1":L[1]||"zone 2"))+"). On ne court pas dessus."});
  }
  if(r&&e0){
    if(r.sc<50)add({kind:"easy",d:TODAY,evId:e0.id,name:"Footing très facile · 30 min",desc:"Footing très facile FC sous 130\n- 30m 6:15-6:45/km Pace",lines:["Footing très facile 30 min à 6:15-6:45, FC < 130"],why:"Forme du jour "+r.sc+"/100 ("+r.why.join(", ")+"). La séance prévue ("+e0.n+") est remplacée."});
    else if(r.sc<75&&QUAL[TODAY])add(trimProp(e0,"Forme du jour "+r.sc+"/100 ("+r.why.join(", ")+")."));
  }
  /* après une séance de qualité trop dure, on allège la suivante */
  const prev=Object.keys(QUAL).filter(d=>d<=TODAY&&bilan(d)).sort().pop();
  if(prev){
    const b=bilan(prev);
    if(b&&b.lv==="r"){
      const nx=ev.filter(e=>e.d>TODAY&&e.d<=dayShift(10)&&QUAL[e.d]).sort((p,q)=>p.d.localeCompare(q.d))[0];
      if(nx)add(trimProp(nx,"La séance du "+fmtShort(prev)+" était trop dure ("+b.L.filter(l=>/limite|RPE/.test(l)).join(" ")+")"));
    }
  }
  return out;
}
async function applyProposal(p){
  if(p.kind==="remove")await api("/athlete/0/events/"+p.evId,{method:"DELETE"});
  else await api("/athlete/0/events/"+p.evId,{method:"PUT",body:JSON.stringify({name:p.name,description:p.desc})});
  S.over[p.d]={t:p.name,d1:p.lines,why:p.why};
  await put();
}


/* ---------- Rendu ---------- */
function setTab(t){tab=t;render();window.scrollTo(0,0)}
const NAVI={today:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',week:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',journal:'<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M9 9h6M9 13h6"/>',prog:'<path d="M3 20h18"/><path d="M6 16l4-5 4 3 5-8"/>',coach:'<path d="M4 5h16v11H9l-5 4z"/>'};
function renderNav(){
  const T=[["today","Auj."],["week","Semaine"],["journal","Journal"],["prog","Progrès"],["coach","Coach"]];
  $("#nav").innerHTML=T.map(([k,l])=>`<button class="${tab===k?"on":""}" data-t="${k}"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${NAVI[k]}</svg>${l}</button>`).join("");
  $("#nav").querySelectorAll("button").forEach(b=>b.onclick=()=>setTab(b.dataset.t));
}
function head(sub){return `<div class="top"><div><div class="hi">${esc(sub)}</div><h1>Max</h1></div><div class="row" style="gap:6px;flex-wrap:nowrap">${getKey()?`<button class="pill" id="syncBtn" aria-label="Actualiser">${syncing?"…":"↻"}</button>`:""}<button class="pill" id="themeBtn">Thème</button></div></div>${syncMsg?`<div class="note warn" style="margin:-6px 0 10px">${esc(syncMsg)}</div>`:""}`}
function wireHead(){const sb=$("#syncBtn");if(sb)sb.onclick=()=>doSync();const b=$("#themeBtn");if(b)b.onclick=()=>{const r=document.documentElement;const cur=r.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");r.dataset.theme=cur==="dark"?"light":"dark"}}
const seg=(id,vals,cur)=>`<div class="seg" data-seg="${id}">${vals.map(v=>`<button type="button" data-v="${v}" class="${String(cur)===String(v)?"on":""}">${v}</button>`).join("")}</div>`;
function wireSeg(){document.querySelectorAll("[data-seg]").forEach(g=>g.querySelectorAll("button").forEach(b=>b.onclick=()=>{g.querySelectorAll("button").forEach(x=>x.classList.remove("on"));b.classList.add("on")}))}
function actLine(a){
  const bits=[ACT[a[2]]||a[2]];
  if(a[4]>0)bits.push(a[4].toFixed(a[4]>=10?1:2).replace(/\.0+$/,"")+" km");
  if(a[5])bits.push(fmtDur(a[5]));
  if(a[6])bits.push("FC "+Math.round(a[6]));
  if(a[7])bits.push("RPE "+a[7]);
  return bits.join(" · ");
}


/* ---------- composants visuels ---------- */
function dotsFor(d){const p=planFor(d);if(!p)return "";const t=(p.t+" "+(p.d1||[]).join(" ")).toLowerCase();const o=[];
  if(/footing|course|vo2|seuil|sortie longue|test 5/.test(t))o.push("run");if(/natation/.test(t))o.push("swim");if(/push|pull|legs|salle|squat|full body/.test(t))o.push("gym");if(/mobilité/.test(t))o.push("mob");
  return o.map(k=>`<span class="dot ${k}"></span>`).join("")}
function ring(val,pct,color,label){const C=263.9,d=Math.round(Math.max(0,Math.min(1,pct))*C);
  return `<div class="ring"><div class="rg"><svg aria-hidden="true" width="74" height="74" viewBox="0 0 100 100" style="transform:rotate(-90deg)"><circle cx="50" cy="50" r="42" fill="none" stroke-width="10" style="stroke:var(--line)"/><circle cx="50" cy="50" r="42" fill="none" stroke-width="10" stroke-linecap="round" stroke-dasharray="${d} ${C}" style="stroke:${color}"/></svg><b>${val}</b></div><small>${label}</small></div>`}
function repsChart(q,reps){
  const top=q.lo-6,bot=q.stop+12,H=s=>Math.max(14,Math.min(76,14+(bot-s)/(bot-top)*62));
  const bandB=H(q.hi),bandH=Math.max(10,H(q.lo)-H(q.hi));
  const col=s=>s<=q.hi+3?"var(--lime)":s<=q.stop?"var(--warn)":"var(--bad)";
  return `<div class="reps"><div class="band" style="bottom:${bandB.toFixed(0)}px;height:${bandH.toFixed(0)}px"></div>${reps.map(s=>`<i style="height:${H(s).toFixed(0)}px;background:${col(s)}"></i>`).join("")}</div><div class="replab">${reps.map(s=>`<span>${fmtPace(s)}</span>`).join("")}</div><div class="note" style="margin-top:6px">Zone pointillée = allure cible ${fmtPace(q.lo)}-${fmtPace(q.hi)}</div>`}
/* illustrations : silhouettes filaires en SVG, sans image à télécharger */
const pl=p=>`<polyline points="${p}"/>`,hd=(x,y,r=5)=>`<circle class="hd" cx="${x}" cy="${y}" r="${r}"/>`;
const hl=(x,y,rx,ry)=>`<ellipse class="hl" cx="${x}" cy="${y}" rx="${rx}" ry="${ry}"/>`;
const arr=(p,h)=>`<polyline class="ar" points="${p}"/><polyline class="ar" points="${h}"/>`;
const pose=(inner,top)=>`<svg class="pose" viewBox="0 0 120 80" aria-hidden="true">${top?"":'<line class="gr" x1="4" y1="72" x2="116" y2="72"/>'}<g class="bd">${inner}</g></svg>`;
const POSES={
 ankle:pose(`<line class="wall" x1="108" y1="4" x2="108" y2="72"/>${hl(74,64,10,7)}${pl("64,70 88,70")}${pl("72,68 97,48")}${pl("97,48 80,32")}${pl("80,32 86,13")}${hd(88,7)}${pl("80,32 64,54 44,70")}${pl("86,15 106,17")}${arr("72,56 88,56","84,52 88,56 84,60")}`),
 flexor:pose(`${hl(56,57,9,8)}${pl("78,70 98,70")}${pl("88,68 84,50")}${pl("84,50 62,46")}${pl("62,46 50,68 26,70")}${pl("62,46 60,21")}${hd(60,13)}${pl("60,23 70,35 70,47")}${arr("44,50 56,50","52,46 56,50 52,54")}`),
 nn:pose(`${hl(60,46,9,9)}${pl("32,72 32,46 88,46 88,24")}${pl("60,22 60,46")}${pl("46,22 74,22")}${hd(60,12,6)}${arr("42,60 78,60","46,56 42,60 46,64")}${pl("74,56 78,60 74,64")}`,true),
 squat:pose(`${hl(44,58,9,8)}${pl("52,70 76,70")}${pl("62,67 74,44")}${pl("74,44 46,56")}${pl("46,56 54,28")}${hd(57,20)}${pl("54,30 71,43 62,34")}${arr("40,36 40,50","36,46 40,50 44,46")}`),
 fig4:pose(`${hl(54,63,9,7)}${pl("20,67 50,67")}${hd(12,65)}${pl("50,67 74,38 88,68")}${pl("50,67 92,52 76,40")}${pl("22,66 44,56 66,52")}${arr("40,48 56,48","52,44 56,48 52,52")}`),
 wgs:pose(`${hl(60,56,11,8)}${pl("82,70 100,70")}${pl("56,50 88,50 90,68")}${pl("56,50 10,68")}${pl("56,50 72,32")}${hd(78,27)}${pl("72,34 74,68")}${pl("72,34 66,6")}${arr("84,24 88,12","84,15 88,12 91,16")}`),
 cars:pose(`${hl(40,40,8,8)}${pl("80,40 80,68")}${pl("80,40 40,40")}${hd(89,36)}${pl("40,40 40,66 20,68")}${pl("40,40 24,38 14,52")}<circle class="ar" cx="24" cy="38" r="12" stroke-dasharray="4 4"/>`)
};
const ROUTINE=[
 {t:"1'",n:"Chevilles",p:"ankle",d:"Genou vers le mur, talon au sol · 10 par côté"},
 {t:"1'30",n:"Fléchisseurs de hanche",p:"flexor",d:"Demi-chevalier, fessier serré, bassin glissé sous soi · 45 s par côté"},
 {t:"1'30",n:"90/90",p:"nn",d:"Bascule lente d'un côté à l'autre, dos long · 8 allers-retours"},
 {t:"1'30",n:"Squat profond",p:"squat",d:"Talons au sol, coudes qui poussent les genoux, respire · 3 × 30 s"},
 {t:"1'30",n:"Figure 4",p:"fig4",d:"Sur le dos, cheville sur le genou opposé, tire vers toi · 45 s par côté"},
 {t:"1'30",n:"World's greatest stretch",p:"wgs",d:"Fente basse, rotation du buste vers le genou avant (bras au sol si gênant) · 4 par côté"},
 {t:"1'",n:"Rotations de hanche",p:"cars",d:"À quatre pattes, cercles du genou aussi grands que possible · 3 par côté"}
];
function mobCard(){
  const done=!!S.mob[selDate],n=weekBounds(selDate).filter(d=>S.mob[d]).length;
  return `<div class="card"><div class="row between"><span class="lab">Mobilité · 10 min · chaque jour</span><span class="note">${n}/7 cette semaine</span></div>
  <details class="mob"><summary><b style="font-family:Sora;font-size:18px">Routine hanches + chevilles</b><span class="note">Touche pour dérouler les 7 exercices</span></summary><ol>${ROUTINE.map(r=>`<li>${POSES[r.p]||""}<div><div class="row" style="gap:8px;flex-wrap:nowrap"><b>${esc(r.n)}</b><span class="k">${esc(r.t)}</span></div><div class="note">${esc(r.d)}</div></div></li>`).join("")}</ol><p class="note" style="margin:10px 0 0">Étire jusqu'à 5-6/10 de tension, jamais de douleur. Respire lentement. Les jours de qualité : à faire après la séance, pas avant.</p></details>
  <button class="btn ${done?"sec":""}" id="mobDone" style="margin-top:10px">${done?"Faite aujourd'hui ✓":"Marquer comme faite"}</button></div>`}

/* mode tapis : la vitesse affichée par le tapis remplace les allures de la montre */
const kmhPace=v=>v>0?fmtPace(3600/v)+"/km":"–";
function tmCard(){
  const q=QUAL[selDate];if(!q||q.solo||selDate>TODAY)return "";
  const N=+((q.n.match(/(\d+)\s*[×x]/)||[])[1])||5,t=S.tm[selDate]||{},sp=t.sp||[];
  const has=sp.some(v=>v>0);
  return `<details class="card tm" ${has?"open":""}><summary class="row between" style="cursor:pointer"><span class="lab">Séance sur tapis</span><span class="chip ${has?"lime":""}">${has?"vitesses saisies":"saisir"}</span></summary>
  <p class="note" style="margin:10px 0">La montre sous-estime fortement l'allure sur tapis. Entre la vitesse affichée par le tapis pour chaque répétition (laisse vide une répétition non faite) : l'app calcule les vraies allures.</p>
  <div class="grid2">${Array.from({length:N},(_,i)=>`<div><label>Rép. ${i+1} (km/h)</label><input class="tmsp" data-i="${i}" type="number" step="0.1" inputmode="decimal" value="${sp[i]||""}" placeholder="ex. 15.3"><div class="note tmp" data-i="${i}">${kmhPace(sp[i])}</div></div>`).join("")}
  <div><label>Distance tapis (km)</label><input id="tmKm" type="number" step="0.01" inputmode="decimal" value="${t.km||""}" placeholder="ex. 11.2"></div></div>
  <div class="note" style="margin-top:8px">Cible : ${fmtPace(q.lo)}-${fmtPace(q.hi)}/km = ${(3600/q.hi).toFixed(1)}-${(3600/q.lo).toFixed(1)} km/h · arrêt à ${fmtPace(q.stop)}/km (${(3600/q.stop).toFixed(1)} km/h). Pente conseillée : 1 %.</div>
  <div style="margin-top:12px"><button class="btn" id="tmSave">Enregistrer</button></div></details>`}
function viewToday(){
  selDate=selDate||TODAY;
  const wk=weekBounds(selDate);const ci=S.checkins[selDate];const p=planFor(selDate);const wi=weekIndex(selDate);
  const iw=ivlWell(selDate);
  const r=readiness(ci||(iw&&iw[3]?{rhr:iw[3],hrv:iw[4],sleep:iw[5],p1:0,p2:0,energy:3,sore:1}:null));
  const fromWatch=!ci&&r;
  const strip=`<div class="week">${wk.map(x=>{const dd=parse(x);return `<button class="day ${x===selDate?"sel":""} ${x===TODAY?"today":""}" data-d="${x}"><small>${DOW[dd.getDay()]}</small><b>${dd.getDate()}</b><span class="dots">${dotsFor(x)}</span></button>`}).join("")}</div><div class="legend"><span><i class="dot run"></i>course</span><span><i class="dot swim"></i>natation</span><span><i class="dot gym"></i>salle</span><span><i class="dot mob"></i>mobilité</span></div>`;
  const prog=wi?`<div class="card"><div class="row between"><span class="lab">${esc(wi.ph.n)}</span><span class="num" style="font-size:20px">Semaine ${wi.n} sur ${wi.tot}</span></div><div class="bar" style="margin:10px 0"><div style="width:${Math.round(wi.n/wi.tot*100)}%"></div></div><div class="note">${esc(wi.ph.goal)}</div></div>`:"";
  const Wl=(S.ivl&&S.ivl.well)||[],lw=iw||Wl[Wl.length-1]||null;
  const frs=lw&&lw[1]!=null&&lw[2]!=null?Math.round(lw[1]-lw[2]):null,sl=lw&&lw[6]!=null?Math.round(lw[6]):null,slh=lw&&lw[5]!=null?lw[5]:(ci&&ci.sleep)||null;
  const ready=`<div class="card"><div class="rings">${ring(r?r.sc:"–",r?r.sc/100:0,"var(--lime)","forme")}${ring(sl!=null?sl:"–",sl!=null?sl/100:0,"var(--cyan)","sommeil"+(slh?" · "+String(slh).replace(".",",")+" h":""))}${ring(frs!=null?(frs>0?"+":"")+frs:"–",frs!=null?(frs+30)/60:0,"var(--violet)","fraîcheur")}</div>${r?`<p style="margin:0"><i class="light ${r.col}"></i> <b>${esc(r.msg)}</b></p>${r.why.length?`<div class="note" style="margin-top:6px">Facteurs : ${esc(r.why.join(", "))}</div>`:""}${fromWatch?`<div class="note" style="margin-top:6px">Basé sur FC repos ${iw[3]}, VFC ${iw[4]??"–"}, sommeil ${iw[5]??"–"} h (Intervals). Ajoute ton ressenti ci-dessous pour affiner.</div>`:""}`:`<p class="note" style="margin:0">Remplis le check-in ci-dessous pour obtenir ton feu vert / orange / rouge.</p>`}</div>`;
  const sess=p?`<div class="card lime"><div class="row between"><span class="lab">${esc(KIND[p.k]||"Séance")} · ${esc(p.dur||"")}</span><span>${p.mod?`<span class="chip">ajusté</span> `:""}${onWatch(selDate)?`<span class="chip lime">⌚ sur la montre</span>`:""}</span></div><h2 style="font-size:40px;line-height:1;margin:6px 0 2px">${esc(p.t)}</h2><div style="font-size:13px;margin-bottom:6px">${esc(fmtLong(selDate))}</div>${p.run?`<div style="font-weight:600;margin:6px 0">+ ${esc(p.run)}</div>`:""}<ul class="ex">${p.d1.map((e,i)=>`<li><span class="k">${i+1}</span><span>${esc(e)}</span></li>`).join("")}</ul><p style="font-size:13px;margin:12px 0 0"><b>Pourquoi :</b> ${esc(p.why||"")}</p></div>`
   :`<div class="card"><span class="lab">${esc(fmtLong(selDate))}</span><h2 style="font-size:32px;margin-top:6px">Repos / libre</h2><p class="note">Aucune séance au plan. Mobilité 5-8 min conseillée.</p></div>`;
  const done=ivlActs().filter(a=>a[0]===selDate&&a[2]!=="walk"&&a[2]!=="ride");
  const doneCard=done.length?`<div class="card"><span class="lab">Réalisé · Intervals</span>${done.map(a=>`<div class="done">✓ ${esc(actLine(a))}</div>`).join("")}</div>`:"";
  const B=bilan(selDate);
  const bilanCard=B?`<div class="card"><div class="row between"><span class="lab">Bilan de séance</span><i class="light ${B.lv}"></i></div>${B.L.slice(0,1).map(l=>`<p style="margin:8px 0 0;font-size:14px">${esc(l)}</p>`).join("")}${B.reps?repsChart(B.qd,B.reps):""}${B.L.slice(1).map(l=>`<p style="margin:8px 0 0;font-size:14px">${esc(l)}</p>`).join("")}<div class="note" style="margin-top:10px">Constat automatique. Il ne change rien à ton plan : si une adaptation se justifie, elle apparaît dans l'onglet Coach et tu valides.</div><div style="margin-top:10px"><button class="btn sec" id="bilAsk" data-q="${esc("Fais le bilan de ma séance du "+selDate+" ("+B.L[0]+") et dis-moi si la suite doit être ajustée.")}">Copier le bilan pour Claude</button></div></div>`:"";
  const c0=ci||{};
  const c={...c0,rhr:c0.rhr??iw?.[3],hrv:c0.hrv??iw?.[4],sleep:c0.sleep??iw?.[5],w:c0.w??iw?.[8]};
  const form=`<div class="card"><h3 style="font-size:24px">Check-in du matin</h3>${!ci&&iw?`<div class="note">FC repos, VFC et sommeil pré-remplis depuis ta montre (Intervals).</div>`:""}
  <div class="grid2"><div><label>FC repos (bpm)</label><input id="f_rhr" type="number" inputmode="numeric" value="${c.rhr??""}" placeholder="bpm"></div><div><label>VFC (ms)</label><input id="f_hrv" type="number" inputmode="numeric" value="${c.hrv??""}" placeholder="ms"></div>
  <div><label>Sommeil (h)</label><input id="f_sleep" type="number" step="0.1" inputmode="decimal" value="${c.sleep??""}" placeholder="heures"></div><div><label>Poids (kg)</label><input id="f_w" type="number" step="0.1" inputmode="decimal" value="${c.w??""}" placeholder="kg"></div></div>
  <label>Énergie (1-5)</label>${seg("energy",[1,2,3,4,5],c.energy)}
  <label>Courbatures (1-5)</label>${seg("sore",[1,2,3,4,5],c.sore)}
  <label>${esc((S.profile.labels||[])[0]||"Zone sensible 1")} : douleur 0-10 (stop à 3)</label>${seg("p1",[0,1,2,3,4,5],c.p1)}
  <label>${esc((S.profile.labels||[])[1]||"Zone sensible 2")} : douleur 0-10</label>${seg("p2",[0,1,2,3,4,5],c.p2)}
  <label>Stress / humeur (1-5)</label>${seg("mood",[1,2,3,4,5],c.mood)}
  <div class="row" style="margin-top:12px"><label style="margin:0;display:flex;gap:8px;align-items:center"><input type="checkbox" id="f_ill" style="width:auto" ${c.ill?"checked":""}> Signes de maladie / toux</label><label style="margin:0;display:flex;gap:8px;align-items:center"><input type="checkbox" id="f_prot" style="width:auto" ${c.prot?"checked":""}> Protéines atteintes</label></div>
  <div style="margin-top:14px"><button class="btn" id="saveCi">Enregistrer le check-in</button></div><div class="note" id="ciMsg" style="margin-top:8px"></div></div>`;
  const conn=!getKey()?`<div class="card lime"><span class="lab">Première étape</span><h2 style="font-size:30px;margin:6px 0">Connecte Intervals</h2><p style="font-size:14px;margin:0 0 10px">Pour afficher ton sommeil, ta FC, tes séances réalisées et envoyer les adaptations vers ta montre.</p><button class="btn" style="background:#0a0a0a;color:#f4f4f0" id="goSet">Ouvrir les réglages</button></div>`:"";
  return head(fmtLong(TODAY))+conn+strip+ready+sess+doneCard+tmCard()+bilanCard+mobCard()+prog+form;
}
function wireToday(){
  document.querySelectorAll(".day").forEach(b=>b.onclick=()=>{selDate=b.dataset.d;render()});
  wireSeg();
  const ba=$("#bilAsk");if(ba)ba.onclick=()=>copyForClaude(ba.dataset.q);
  document.querySelectorAll(".tmsp").forEach(inp=>inp.oninput=()=>{const p=document.querySelector(`.tmp[data-i="${inp.dataset.i}"]`);if(p)p.textContent=kmhPace(+inp.value.replace(",","."))});
  const ts=$("#tmSave");if(ts)ts.onclick=()=>{
    const num=v=>{const n=parseFloat(String(v).replace(",","."));return n>0?n:0};
    const sp=[...document.querySelectorAll(".tmsp")].map(i=>num(i.value));
    S.tm[selDate]={sp,km:num($("#tmKm").value)};lsSave();render()};
  const md=$("#mobDone");if(md)md.onclick=()=>{S.mob[selDate]=!S.mob[selDate];lsSave();render()};
  const gs=$("#goSet");if(gs)gs.onclick=()=>setTab("coach");
  $("#saveCi").onclick=async()=>{
    const n=id=>{const v=$("#f_"+id).value;return v===""?null:+v};
    const sg=id=>{const b=document.querySelector(`[data-seg="${id}"] .on`);return b?+b.dataset.v:null};
    const data={rhr:n("rhr"),hrv:n("hrv"),sleep:n("sleep"),w:n("w"),energy:sg("energy"),sore:sg("sore"),p1:sg("p1")??0,p2:sg("p2")??0,mood:sg("mood"),ill:$("#f_ill").checked,prot:$("#f_prot").checked,at:Date.now()};
    S.checkins[selDate]=data;
    const ok=await put("checkins",selDate,data);
    render();
    const m=$("#ciMsg");if(m)m.textContent=ok?"Enregistré.":"Enregistré sur cet appareil.";
  };
}

function viewWeek(){
  const anchor=weekAnchor||TODAY,wk=weekBounds(anchor);
  const acts=ivlActs();
  let pk=0,dk=0,ps=0,ds=0,pg=0,dg=0;
  const rows=wk.map(d=>{
    const p=planFor(d);
    const done=acts.filter(a=>a[0]===d&&a[2]!=="walk"&&a[2]!=="ride");
    if(p){pk+=PKM[d]||0;if(/natation/i.test(p.t+" "+p.d1.join(" ")))ps++;if(/push|pull|legs|salle|full body/i.test(p.t))pg++}
    done.forEach(a=>{if(a[2]==="run")dk+=a[4];if(a[2]==="swim")ds++;if(a[2]==="gym")dg++});
    const av=S.avail[parse(d).getDay()];
    const missed=p&&d<TODAY&&!done.length&&S.ivl;
    return `<div class="ph dayrow" data-d="${d}"><div class="num" style="min-width:50px;font-size:18px">${DOW[parse(d).getDay()]} ${parse(d).getDate()}${d===TODAY?`<div class="note" style="color:var(--ok)">auj.</div>`:""}<div class="dots" style="justify-content:flex-start;margin-top:6px">${dotsFor(d)}</div></div><div style="min-width:0;flex:1">
    ${p?`<b style="font-size:19px">${esc(p.t)}</b><div class="note">${esc(KIND[p.k]||"")} · ${esc(p.dur||"")}${p.mod?" · ajusté":""}</div>`:`<span class="note">Pas de séance au plan</span>`}
    ${done.map(a=>`<div class="done">✓ ${esc(actLine(a))}</div>`).join("")}
    ${missed?`<div class="note warn">Rien enregistré pour cette séance</div>`:""}
    ${(av&&av!=="Libre")||onWatch(d)?`<div style="margin-top:4px">${onWatch(d)?`<span class="chip lime">⌚ montre</span> `:""}${av&&av!=="Libre"?`<span class="chip">${esc(av)}</span>`:""}</div>`:""}</div></div>`;
  }).join("");
  const chip=(l,d,p,u)=>`<div><div class="num" style="font-size:26px">${u?Math.round(d):d}<small style="font-size:14px;color:var(--mute)"> / ${p}${u||""}</small></div><div class="note">${l}</div></div>`;
  const hasData=!!S.ivl;
  const wi=weekIndex(wk[0]);
  const ph=PHASES.map(p=>{const cur=TODAY>=p.s&&TODAY<=p.e;return `<div class="ph"><div style="min-width:6px;border-radius:3px;background:${cur?"var(--lime)":"var(--line)"}"></div><div><b>${esc(p.n)}</b><div class="note">${esc(fmtShort(p.s))} → ${esc(fmtShort(p.e))}</div><div style="font-size:13.5px;margin-top:2px">${esc(p.goal)}</div></div></div>`}).join("");
  const j=daysTo(ROME);
  return head("Semaine")+`<div class="nav2"><button class="pill" id="wPrev">‹ Préc.</button><div style="text-align:center"><div class="num" style="font-size:22px">${esc(fmtShort(wk[0]))} → ${esc(fmtShort(wk[6]))}</div><div class="note">${wi?esc(wi.ph.n)+" · semaine "+wi.n:"Hors plan détaillé"}</div></div><button class="pill" id="wNext">Suiv. ›</button></div>
  <div class="card"><span class="lab">Prévu / réalisé</span><div class="grid2" style="grid-template-columns:repeat(3,1fr);margin-top:8px">${chip("Course (km)",Math.round(dk*10)/10,pk,"")}${chip("Natations",ds,ps,"")}${chip("Salle",dg,pg,"")}</div>
  <div class="note" style="margin-top:8px">${hasData?"Réalisé : données Intervals du "+esc(new Date(S.ivl.at).toLocaleDateString("fr-BE",{day:"numeric",month:"short"}))+(S.ivl.dropped?` (${S.ivl.dropped} doublons ignorés)`:""):"Aucune donnée Intervals pour l'instant."}</div></div>
  <div class="card">${rows}<div class="note" style="margin-top:8px">Touche un jour pour ouvrir sa séance.</div></div>
  <div class="card"><h3 style="font-size:24px">Mes disponibilités</h3><p class="note">Indique tes créneaux pris (travail, rendez-vous) pour chaque jour de la semaine. Tu peux copier le tout pour Claude, qui te propose de replacer les séances.</p>
  ${[1,2,3,4,5,6,0].map(d=>`<div class="row between" style="margin-top:8px"><span style="min-width:48px">${DOW[d]}</span><select data-av="${d}" style="width:auto;flex:1">${AVAIL.map(o=>`<option ${((S.avail[d]||"Libre")===o)?"selected":""}>${o}</option>`).join("")}</select></div>`).join("")}
  <div class="grid2" style="margin-top:12px"><button class="btn sec" id="avSave">Enregistrer</button><button class="btn" id="avAsk">Copier pour Claude</button></div><div class="note" id="avMsg" style="margin-top:8px"></div></div>
  <div class="card"><span class="lab">Objectifs</span><div class="grid2" style="margin-top:8px"><div><div class="num" style="font-size:34px">&lt; 40:00</div><div class="note">10 km · 3:59/km</div></div><div><div class="num" style="font-size:34px">J-${j}</div><div class="note">Marathon de Rome · 14 mars 2027</div></div></div><hr><div class="note">Règles clés : pas de jambes avant une séance qualité ; jambes ≥ 4-6 h après le VO2max ; plyo 0 → 40 → 60-80 contacts ; zones sensibles : stop à 3/10.</div></div>
  <div class="card"><span class="lab">Phases</span>${ph}</div>`;
}
function wireWeek(){
  const shift=n=>{const d=parse((weekAnchor||TODAY));d.setDate(d.getDate()+n);weekAnchor=iso(d);render()};
  $("#wPrev").onclick=()=>shift(-7);$("#wNext").onclick=()=>shift(7);
  document.querySelectorAll(".dayrow").forEach(r=>r.onclick=()=>{selDate=r.dataset.d;setTab("today")});
  const saveAv=async()=>{document.querySelectorAll("[data-av]").forEach(s=>S.avail[s.dataset.av]=s.value);return put("meta","avail",{map:S.avail,at:Date.now()})};
  $("#avSave").onclick=async()=>{await saveAv();$("#avMsg").textContent="Disponibilités enregistrées."};
  $("#avAsk").onclick=async()=>{await saveAv();copyForClaude("Replace les séances de la semaine à venir en tenant compte de mes disponibilités, sans toucher aux séances clés si possible.")};
}

function viewJournal(){
  const list=[...S.journal].sort((a,b)=>(b.date||"").localeCompare(a.date||"")).slice(0,30);
  return head("Journal")+`<div class="card"><h3 style="font-size:24px">Ajouter une séance</h3><p class="note">Les séances de la montre arrivent via Intervals. Utilise le journal pour la salle, les charges et tes notes.</p>
  <div class="grid2"><div><label>Date</label><input id="j_date" type="date" value="${TODAY}"></div><div><label>Type</label><select id="j_k">${Object.entries(KIND).filter(([k])=>k!=="rest").map(([k,v])=>`<option value="${k}">${v}</option>`).join("")}</select></div>
  <div><label>Distance (km)</label><input id="j_km" type="number" step="0.01" inputmode="decimal"></div><div><label>Durée (min)</label><input id="j_min" type="number" step="0.1" inputmode="decimal"></div></div>
  <label>RPE (1-10)</label><input id="j_rpe" type="range" min="1" max="10" value="6"><div class="note" id="rpeV">6 / 10</div>
  <label>Ressenti (1-5)</label><div class="seg" data-seg="feel">${[1,2,3,4,5].map(v=>`<button type="button" data-v="${v}" ${v===3?'class="on"':""}>${v}</button>`).join("")}</div>
  <label>Charges / notes</label><textarea id="j_note" placeholder="Squat 4×6 à 100 kg, RAS…"></textarea>
  <div style="margin-top:12px"><button class="btn" id="saveJ">Enregistrer</button></div><div class="note" id="jMsg" style="margin-top:8px"></div></div>
  <div class="card"><span class="lab">Dernières séances</span>${list.length?`<div class="scroll"><table><tr><th>Date</th><th>Type</th><th>km</th><th>min</th><th>RPE</th></tr>${list.map(j=>`<tr><td>${esc(j.date)}</td><td>${esc(KIND[j.k]||j.k)}</td><td>${j.km??"–"}</td><td>${j.min??"–"}</td><td>${j.rpe??"–"}</td></tr>`).join("")}</table></div>`:`<p class="note">Aucune séance enregistrée pour l'instant.</p>`}</div>`;
}
function wireJournal(){
  const r=$("#j_rpe");r.oninput=()=>$("#rpeV").textContent=r.value+" / 10";
  wireSeg();
  $("#saveJ").onclick=async()=>{
    const n=id=>{const v=$("#j_"+id).value;return v===""?null:+v};
    const e={date:$("#j_date").value||TODAY,k:$("#j_k").value,km:n("km"),min:n("min"),rpe:+$("#j_rpe").value,feel:+document.querySelector('[data-seg="feel"] .on').dataset.v,note:$("#j_note").value.slice(0,500),at:Date.now()};
    const id="j"+e.at;S.journal.push({id,...e});
    const ok=await put("journal",id,e);
    render();
    const m=$("#jMsg");if(m)m.textContent=ok?"Enregistré.":"Enregistré sur cet appareil.";
  };
}

function spark(pts,color,unit){
  pts=pts.filter(p=>p.v!=null);
  if(pts.length<2)return `<p class="note">Pas encore assez de points (il en faut 2).</p>`;
  const W=300,H=90,mn=Math.min(...pts.map(p=>p.v)),mx=Math.max(...pts.map(p=>p.v)),sp=(mx-mn)||1;
  const xy=pts.map((p,i)=>[i/(pts.length-1)*(W-20)+10,H-14-(p.v-mn)/sp*(H-30)]);
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img"><polyline fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" points="${xy.map(a=>a.join(",")).join(" ")}"/>${xy.length<=40?xy.map(a=>`<circle cx="${a[0]}" cy="${a[1]}" r="3" fill="${color}"/>`).join(""):""}<text x="4" y="10">${mx}${unit}</text><text x="4" y="${H-2}">${mn}${unit}</text></svg>`;
}
function viewProg(){
  const ck=Object.entries(S.checkins).sort((a,b)=>a[0].localeCompare(b[0]));
  const ser=k=>ck.map(([d,c])=>({d,v:c[k]??null}));
  const W=S.ivl?.well||[];
  const last=W.length?W[W.length-1]:null;
  const wk={};
  if(S.ivl){ivlActs().forEach(a=>{if(a[2]!=="run"||!a[4])return;const m=weekBounds(a[0])[0];wk[m]=(wk[m]||0)+a[4]})}
  else S.journal.forEach(j=>{if(!j.km)return;const m=weekBounds(j.date)[0];wk[m]=(wk[m]||0)+j.km});
  const wkEntries=Object.entries(wk).sort().slice(-8);
  const mxk=Math.max(1,...wkEntries.map(a=>a[1]));
  const vol=wkEntries.length?`<svg viewBox="0 0 300 100" width="100%">${wkEntries.map(([d,v],i)=>{const h=v/mxk*70;return `<rect x="${i*36+8}" y="${85-h}" width="26" height="${h}" rx="6" fill="var(--lime)"/><text x="${i*36+10}" y="98">${parse(d).getDate()}/${parse(d).getMonth()+1}</text><text x="${i*36+10}" y="${80-h}">${Math.round(v)}</text>`}).join("")}</svg>`:`<p class="note">Le volume hebdo apparaît dès que des courses sont enregistrées.</p>`;
  const form=last?Math.round(last[1]-last[2]):null;
  const frm=last?`<div class="card"><div class="row between"><span class="lab">Forme · Intervals</span><span class="note">${esc(last[0])}</span></div><div class="grid2" style="grid-template-columns:repeat(3,1fr);margin-top:8px"><div><div class="num" style="font-size:34px">${Math.round(last[1])}</div><div class="note">Fitness</div></div><div><div class="num" style="font-size:34px">${Math.round(last[2])}</div><div class="note">Fatigue</div></div><div><div class="num" style="font-size:34px">${form>0?"+":""}${form}</div><div class="note">Forme</div></div></div><div class="note" style="margin-top:8px">FC repos ${last[3]??"–"} · VFC ${last[4]??"–"} ms · sommeil ${last[5]??"–"} h (score ${last[6]??"–"}) · VO2max ${last[7]??"–"}</div></div>`:"";
  const wl=W.slice(-30);
  const w0=[...ser("w")].reverse().find(p=>p.v)?.v??[...W].reverse().find(r=>r[8])?.[8]??"–";
  return head("Progrès")+`<div class="grid2"><div class="card"><span class="lab">Poids</span><div class="num big" style="font-size:44px">${w0}<small style="font-size:16px"> kg</small></div><div class="note">${S.profile.target?"Objectif "+S.profile.target+" kg":"Dernière valeur connue"}</div></div><div class="card"><span class="lab">VO2max</span><div class="num" style="font-size:44px">${last?.[7]??"–"}</div><div class="note">Garmin via Intervals</div></div></div>
  ${frm}
  <div class="card"><span class="lab">Volume course / semaine (km)</span>${vol}</div>
  <div class="card"><span class="lab">FC repos · 30 jours (bpm)</span>${spark(wl.map(r=>({v:r[3]})),"var(--lime)"," ")}</div>
  <div class="card"><span class="lab">VFC · 30 jours (ms)</span>${spark(wl.map(r=>({v:r[4]})),"var(--lime)"," ")}</div>
  <div class="card"><span class="lab">Repères allure</span><div class="grid2" style="margin-top:8px"><div><div class="num" style="font-size:30px">18:28</div><div class="note">Prédiction Garmin 5 km (9 nov)</div></div><div><div class="num" style="font-size:30px">4:05</div><div class="note">Seuil Garmin (182 bpm)</div></div></div><hr><div class="note">Prédictions Garmin : 10 km 40:38 · semi 1:33:08. Cible 10 km : 3:59/km. Test 5 km le 28 nov.</div></div>
  <div class="card"><span class="lab">Source des données</span><p class="note" style="margin:6px 0 0">${S.ivl?`Intervals.icu (Garmin), dernière mise à jour ${esc(new Date(S.ivl.at).toLocaleString("fr-BE",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}))}. Actualisée à chaque ouverture et avec le bouton ↻.`:"Pas encore de données Intervals."}</p></div>`;
}


function coachContext(){
  const L=S.profile.labels||[];
  const ck=Object.entries(S.checkins).sort().slice(-7).map(([d,c])=>({d,fc_repos:c.rhr,vfc:c.hrv,sommeil_h:c.sleep,energie:c.energy,courbatures:c.sore,[L[0]||"zone1"]:c.p1,[L[1]||"zone2"]:c.p2,humeur:c.mood,maladie:!!c.ill}));
  const jr=[...S.journal].sort((a,b)=>(b.date||"").localeCompare(a.date||"")).slice(0,7).map(({date,k,km,min,rpe,feel,note})=>({date,k,km,min,rpe,feel,note}));
  const wk=weekBounds(TODAY).concat(weekBounds(dayShift(7))).map(d=>({d,plan:planFor(d)?.t||"repos",dispo:S.avail[parse(d).getDay()]||"Libre"}));
  const since=dayShift(-14);
  const recent=ivlActs().filter(a=>a[0]>=since&&a[2]!=="walk"&&a[2]!=="ride").map(a=>({d:a[0],type:a[2],km:Math.round(a[4]*10)/10,min:a[5],fc:a[6]&&Math.round(a[6]),rpe:a[7]}));
  const well=(S.ivl?.well||[]).slice(-7).map(r=>({d:r[0],fitness:r[1]&&Math.round(r[1]),fatigue:r[2]&&Math.round(r[2]),fc_repos:r[3],vfc:r[4],sommeil_h:r[5]}));
  const bil=[0,1,2,3,4,5,6].map(n=>dayShift(-n)).map(d=>{const b=bilan(d);return b?{d,niveau:b.lv,resume:b.L}:null}).filter(Boolean);
  return JSON.stringify({objectifs:GOALS,semaine:wk,checkins:ck,journal:jr,montre_14j:recent,forme_7j:well,bilans_auto:bil},null,1);
}
async function copyForClaude(q){
  const txt="Contexte de mon app Max Training :\n"+coachContext()+"\n\nQuestion : "+(q||"Fais le point sur ma semaine et propose des ajustements.")+"\n\nRappel : propose-moi les changements, ne modifie rien sans mon accord.";
  try{await navigator.clipboard.writeText(txt);toast("Copié : colle-le dans Claude.")}catch(e){copyBuf=txt;setTab("coach")}
}
function toast(m){const t=document.createElement("div");t.className="toast";t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}

function viewCoach(){
  const P=proposals(),L=S.profile.labels||[],key=getKey();
  const props=!key?`<div class="card"><span class="lab">Propositions</span><p class="note" style="margin:6px 0 0">Connecte Intervals (réglages ci-dessous) pour recevoir des propositions.</p></div>`
   :`<div class="card"><span class="lab">Propositions du coach</span>${P.length?P.map((p,i)=>`<div class="ph"><div style="min-width:0;flex:1"><b>${esc(fmtLong(p.d))}</b><div style="font-size:14px">${esc(p.name)}</div><div class="note">${esc(p.why)}</div><div class="grid2" style="margin-top:10px"><button class="btn" data-ok="${i}">Valider</button><button class="btn sec" data-no="${i}">Ignorer</button></div></div></div>`).join(""):`<p class="note" style="margin:6px 0 0">Rien à adapter pour l'instant. Les propositions apparaissent après un check-in difficile ou une séance de qualité trop dure. Rien n'est modifié sans ta validation, et la montre est mise à jour dès que tu valides.</p>`}<div class="note" id="pMsg" style="margin-top:8px"></div></div>`;
  const ask=`<div class="card"><h3 style="font-size:24px">Demander à Claude</h3><p class="note">Pour une vraie discussion de coaching : copie ton bilan complet, puis colle-le dans Claude.</p><label>Ta question (facultatif)</label><textarea id="cQ" placeholder="Je me sens lourd, que faire demain ?">${esc(coachPrefill)}</textarea><div style="margin-top:12px"><button class="btn" id="cCopy">Copier pour Claude</button></div>${copyBuf?`<label>Copie automatique impossible : sélectionne et copie ce texte</label><textarea id="cBuf" style="min-height:140px">${esc(copyBuf)}</textarea>`:""}</div>`;
  const set=`<div class="card"><h3 style="font-size:24px">Réglages</h3>
  <label>Clé API Intervals ${key?"(enregistrée sur ce téléphone)":""}</label><input id="kIn" type="password" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${key?"••••••••  (laisser vide pour la garder)":"coller la clé ici"}">
  <div class="grid2" style="margin-top:12px"><button class="btn" id="kSave">Enregistrer</button><button class="btn sec" id="kOut" ${key?"":"disabled"}>Déconnecter</button></div>
  <div class="note" style="margin-top:8px">${S.ivl?"Dernière synchro : "+esc(new Date(S.ivl.at).toLocaleString("fr-BE",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})):"Pas encore synchronisé."}. La clé reste sur ton téléphone et n'est envoyée qu'à intervals.icu.</div>
  <label>Noms des deux zones sensibles du check-in (restent sur ton téléphone)</label><div class="grid2"><input id="l1" value="${esc(L[0]||"")}" placeholder="Zone sensible 1"><input id="l2" value="${esc(L[1]||"")}" placeholder="Zone sensible 2"></div>
  <label>Poids cible (kg, facultatif)</label><input id="tg" type="number" step="0.1" inputmode="decimal" value="${S.profile.target??""}">
  <div class="grid2" style="margin-top:12px"><button class="btn sec" id="sSave">Enregistrer</button><button class="btn sec" id="sReset">Effacer les ajustements</button></div><div class="note" id="sMsg" style="margin-top:8px"></div></div>`;
  return head("Coach")+props+ask+set;
}
function wireCoach(){
  const msg=t=>{const m=$("#pMsg");if(m)m.textContent=t};
  const P=proposals();
  document.querySelectorAll("[data-ok]").forEach(b=>b.onclick=async()=>{
    const p=P[+b.dataset.ok];b.disabled=true;msg("Envoi vers Intervals…");
    try{await applyProposal(p);msg("Validé. La séance est mise à jour dans Intervals ; elle arrive sur la montre à la prochaine synchro Garmin.");await syncIntervals().catch(()=>{});render()}
    catch(e){msg("Échec : "+e.message+". Rien n'a été modifié côté montre.");b.disabled=false}
  });
  document.querySelectorAll("[data-no]").forEach(b=>b.onclick=async()=>{const p=P[+b.dataset.no];S.ign[p.kind+":"+p.d]=1;await put();render()});
  const cc=$("#cCopy");if(cc)cc.onclick=()=>{coachPrefill=($("#cQ").value||"").slice(0,400);copyBuf="";copyForClaude(coachPrefill)};
  const bf=$("#cBuf");if(bf){bf.focus();bf.select()}
  const ks=$("#kSave");if(ks)ks.onclick=async()=>{const v=$("#kIn").value.trim();if(v){setKey(v);doSync()}else $("#sMsg").textContent="Rien à enregistrer."};
  const ko=$("#kOut");if(ko)ko.onclick=()=>{setKey("");S.ivl=null;lsSave();render()};
  const ss=$("#sSave");if(ss)ss.onclick=async()=>{S.profile.labels=[$("#l1").value.trim()||"Zone sensible 1",$("#l2").value.trim()||"Zone sensible 2"];const t=$("#tg").value;S.profile.target=t===""?null:+t;await put();$("#sMsg").textContent="Enregistré."};
  const sr=$("#sReset");if(sr)sr.onclick=async()=>{S.over={};S.ign={};await put();render()};
}

function render(){
  renderNav();
  const V={today:viewToday,week:viewWeek,journal:viewJournal,prog:viewProg,coach:viewCoach}[tab];
  $("#app").innerHTML=V();wireHead();
  if(tab==="today")wireToday();if(tab==="week")wireWeek();if(tab==="journal")wireJournal();if(tab==="coach")wireCoach();
}

/* ---------- Démarrage ---------- */
lsLoad();render();
if(getKey())doSync();
document.addEventListener("visibilitychange",()=>{
  if(document.hidden)return;
  const t=iso(new Date());if(t!==TODAY){if(selDate===TODAY)selDate=t;if(weekAnchor===TODAY)weekAnchor=null;TODAY=t}
  const at=S.ivl&&S.ivl.at;
  if(getKey()&&(!at||Date.now()-new Date(at)>3e5))doSync();else render();
});
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
