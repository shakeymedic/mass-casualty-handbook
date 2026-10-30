// ==== European (non-UK) terrorist mass casualty incidents ====
// Every figure is taken from verify_europe.md, where each source was opened and checked on 30 Oct 2026.
// Where sources disagree, both figures are given in the text. "Not found" means no source was located.
// Do not add figures here unless they are first added to verify_europe.md with a source.

const EU_SRC = {
  pHir:  { s: "Hirsch M, Carli P, et al. Lancet 2015;386:2535-8", u: "https://doi.org/10.1016/S0140-6736(15)01063-6" },
  pIcm:  { s: "Paris medical response by cause of injury. Intensive Care Med 2019", u: "https://doi.org/10.1007/s00134-019-05724-9" },
  pTri:  { s: "Paris mass casualty triage assessment. Eur J Emerg Med 2021", u: "https://doi.org/10.1097/MEJ.0000000000000771" },
  pTxf:  { s: "Paris 2015 blood product needs. J Trauma Acute Care Surg 2020", u: "https://doi.org/10.1097/TA.0000000000002729" },
  pThx:  { s: "Paris penetrating thoracic injuries. Eur J Cardiothorac Surg 2017", u: "https://doi.org/10.1093/ejcts/ezx036" },
  pVasc: { s: "Paris vascular trauma. Ann Vasc Surg 2017", u: "https://doi.org/10.1016/j.avsg.2016.09.011" },
  pBeg:  { s: "Bégin Military Teaching Hospital experience. J Trauma Acute Care Surg 2017", u: "https://doi.org/10.1097/TA.0000000000001461" },
  pBspp: { s: "Lesaffre X, et al. Paris Fire Brigade remote damage control. J Trauma Acute Care Surg 2017", u: "https://doi.org/10.1097/TA.0000000000001438" },
  pPsl:  { s: "Plan Blanc at Pitié-Salpêtrière. Disaster Med Public Health Prep 2016", u: "https://doi.org/10.1017/dmp.2016.21" },
  pRem:  { s: "Paris remote trauma centre. Eur J Emerg Med 2019", u: "https://doi.org/10.1097/MEJ.0000000000000555" },
  pVis:  { s: "Paris civilian trauma centre organisation. J Visc Surg 2017", u: "https://doi.org/10.1016/j.jviscsurg.2017.07.007" },
  bMoh:  { s: "Möhler A. Lessons from the Brussels terrorist attack. Prehosp Disaster Med 2019 (abstract)", u: "https://doi.org/10.1017/S1049023X19001900" },
  bBu:   { s: "Bruyninckx L, et al. Queen Astrid burn unit, 22 March 2016. Eur J Trauma Emerg Surg 2024", u: "https://doi.org/10.1007/s00068-024-02486-y" },
  bEnt:  { s: "Otologic outcomes after the Brussels bombings. Otol Neurotol 2018", u: "https://doi.org/10.1097/MAO.0000000000002012" },
  bMip:  { s: "Brussels multisite Medical Intervention Plans. Rev Med Brux 2017", u: "https://pubmed.ncbi.nlm.nih.gov/28525246/" },
  bLib:  { s: "La Libre Belgique, 25 Jul 2023 (news, death toll only)", u: "https://www.lalibre.be/belgique/judiciaire/2023/07/25/le-bilan-total-des-attentats-du-22-mars-2016-porte-a-36-morts-VANDN5DONFCY7EXHS6UCTFUP4A/" },
  nOrt:  { s: "Nice orthopaedic surgeons' experience. Orthop Traumatol Surg Res 2019", u: "https://doi.org/10.1016/j.otsr.2019.02.009" },
  nVis:  { s: "Nice general surgeons' experience. J Visc Surg 2018", u: "https://doi.org/10.1016/j.jviscsurg.2018.04.004" },
  nFor:  { s: "Forensic response, Nice 2016. Int J Legal Med 2018", u: "https://doi.org/10.1007/s00414-018-1833-5" },
  nPsy:  { s: "Early child psychiatric response, Nice. Front Psychiatry 2019", u: "https://doi.org/10.3389/fpsyt.2019.00065" },
  gFor:  { s: "Buschmann C, et al. Breitscheidplatz autopsy findings. Forensic Sci Med Pathol 2020", u: "https://doi.org/10.1007/s12024-020-00277-6" },
  gAek:  { s: "Poloczek S. Berliner Ärzte 2/2017, p.3", u: "https://www.aekb.de/fileadmin/mitgliederzeitschrift/2017/b1702.pdf" },
  gJems: { s: "Kohlen J, Runggaldier K. JEMS, 1 Jun 2018 (trade journal)", u: "https://www.jems.com/?p=63633" },
  cVal:  { s: "Valiño EM, et al. Emergencias 2026;38:131-9", u: "https://revistaemergencias.org/wp-content/uploads/2026/03/131-139.pdf" },
  cSal:  { s: "Sala Sanjaume J, et al. Emergencias 2017;29:301-2 (editorial)", u: "https://revistaemergencias.org/wp-content/uploads/2023/08/Emergencias-2017_29_5_301-302-302.pdf" },
  mEjt:  { s: "Turégano-Fuentes F, et al. Eur J Trauma Emerg Surg 2008;34:433", u: "https://doi.org/10.1007/s00068-008-8805-2" },
  mWjs:  { s: "Turégano-Fuentes F, et al. World J Surg 2008;32:1168-75", u: "https://doi.org/10.1007/s00268-008-9557-1" },
  mCcm:  { s: "Gutierrez de Ceballos JP, et al. Crit Care Med 2005;33:S107-12", u: "https://doi.org/10.1097/01.ccm.0000151072.17826.72" },
  mDis:  { s: "Carresi AL. Disasters 2008;32:41-65", u: "https://doi.org/10.1111/j.1467-7717.2007.01026.x" },
  oTc:   { s: "Norway trauma centre response. J Trauma Acute Care Surg 2012", u: "https://doi.org/10.1097/TA.0b013e31825a787f" },
  oRur:  { s: "Waage S, et al. Br J Surg 2013;100:1198-204", u: "https://doi.org/10.1002/bjs.9203" },
  oFrag: { s: "Jorgensen JJ, et al. Injury 2016;47:1951-4", u: "https://doi.org/10.1016/j.injury.2016.03.023" },
  oEms:  { s: "Sollid SJ, et al. Scand J Trauma Resusc Emerg Med 2012;20:3", u: "https://doi.org/10.1186/1757-7241-20-3" },
  oRad:  { s: "Norway ED radiology response. Eur Radiol 2016", u: "https://doi.org/10.1007/s00330-016-4677-8" },
  oPain: { s: "Chronic pain after 22 July 2011. Acta Anaesthesiol Scand 2019", u: "https://doi.org/10.1111/aas.13373" }
};

function euF(text, key, confidence) { return { text, source: EU_SRC[key].s, url: EU_SRC[key].u, confidence }; }
function euL(text, key) { return { text, source: EU_SRC[key].s, url: EU_SRC[key].u }; }

const EUROPE_INCIDENTS = [
  {
    id: "paris-2015",
    name: "Paris attacks (Stade de France, café terraces, Bataclan)",
    date: "2015-11-13",
    country: "France",
    city: "Paris and Saint-Denis",
    type: "mixed",
    deaths: "130 (Hirsch et al. report 129 dead at the scenes, plus 4 deaths among 302 AP-HP patients)",
    injured: "Sources disagree: 352 (EJCTS 2017), 351 (Ann Vasc Surg 2017), 495 (Paris Fire Brigade 2017), 'more than 300' (Lancet 2015). 337 were admitted alive to hospital within 24 h.",
    summary: "A coordinated multisite attack in about 40 minutes: suicide bombings at the Stade de France, shootings on café terraces, and a mass shooting with hostage-taking at the Bataclan concert hall. Paris hospitals activated Plan Blanc, and casualties were dominated by gunshot wounds.",
    medicalFacts: [
      euF("337 casualties were admitted alive within 24 h: 286 (85%) gunshot and 51 (15%) explosion.", "pIcm", "high"),
      euF("Emergency surgery was needed in 181 (54%), more often for gunshot than explosion (57% vs 35%). Orthopaedic surgery was commonest (107), and vascular surgery had the shortest median delay (53 min).", "pIcm", "high"),
      euF("AP-HP hospitals received 302 patients in the first 24 h: 76 absolute emergencies and 226 relative emergencies. Pitié-Salpêtrière took 53.", "pHir", "high"),
      euF("Plan Blanc was activated at 22:34. 45 SAMU and fire-brigade medical teams worked the sites, with 15 more held in reserve.", "pHir", "high"),
      euF("Prehospital triage undertriaged 36% (95% CI 27-47%) and overtriaged 8% (95% CI 4-13%) of casualties, compared with an expert panel.", "pTri", "high"),
      euF("68 of 337 were transfused. Massive transfusion was needed in 20 (6%), with a plasma:RBC ratio of 0.8. Median time from admission to first red cells was 57 min for MT patients.", "pTxf", "high"),
      euF("Demand for tourniquets was so high that mobile teams returned without their belts (improvised tourniquets). The number applied was not reported.", "pHir", "high"),
      euF("25 patients (7%) had penetrating thoracic injury (80% gunshot, mean ISS 26.8). 17 needed thoracic surgery, and postoperative mortality was 12%.", "pThx", "high"),
      euF("20 patients had non-thoracic vascular trauma, and 12 of them had prehospital CPR. There were no deaths or amputations at 6 months.", "pVasc", "high"),
      euF("At Bégin military hospital, 45 patients were triaged T1 8, T2 10 and T3 27 and managed on damage-control principles. 22 had emergency surgery.", "pBeg", "high"),
      euF("Paediatric casualty numbers: not found in the sources reviewed.", "pHir", "high")
    ],
    lessons: [
      euL("Unidirectional patient flow, with enough staff under a single medical director, prevents a trauma centre being overwhelmed.", "pVis"),
      euL("Pitié-Salpêtrière had run a Plan Blanc exercise on the morning of the attack. Later improvements were identified in activation, staff alerting, bed management and the emergency morgue.", "pPsl"),
      euL("Shorten the time to get blood products to the bedside rather than simply increasing stock.", "pTxf"),
      euL("A remote trauma centre took 53 victims in 4 h and diverted only 3, helped by a large rise in staff (8 ED physicians instead of 2).", "pRem"),
      euL("The rescue chain needs simpler, more robust organisation and better communication between operators.", "pBspp")
    ],
    verification: "high",
    caveats: "Injured totals vary with definition (physical only or including psychological). Death accounting differs slightly between sources."
  },
  {
    id: "brussels-2016",
    name: "Brussels bombings (Zaventem airport and Maelbeek metro)",
    date: "2016-03-22",
    country: "Belgium",
    city: "Brussels",
    type: "explosive",
    deaths: "32 commonly cited (16 airport, 16 metro); 35 recognised by the court in 2023 (news source only)",
    injured: "Not verified (no medical or official source opened). 313 victims were dispatched to 30 hospitals.",
    summary: "Suicide bombings in the airport departure hall and on a metro train at Maelbeek station. Brussels had written a multisite medical plan after Paris only days before.",
    medicalFacts: [
      euF("313 victims were dispatched to 30 hospitals, and 11 medical teams were sent to the scenes for triage and vital care.", "bMoh", "medium"),
      euF("The Queen Astrid Military Hospital burn unit admitted 23 casualties under damage-control resuscitation and surgery principles. There were no deaths during admission or at 1-year follow-up.", "bBu", "high"),
      euF("At one tertiary centre, 56 patients presented with otological symptoms: tinnitus in 45, subjective hearing loss in 32, sensorineural loss in 41% and tympanic membrane perforation in 3.", "bEnt", "high"),
      euF("Deaths: 32 immediate. The 2023 court verdict raised the toll to 35 (18 Zaventem, 17 Maelbeek). Headline figure from news only.", "bLib", "low")
    ],
    lessons: [
      euL("Familiarity between emergency workers from previous joint exercises was credited as the key factor in limiting casualties.", "bMoh"),
      euL("The airport plan had been built around plane crashes, not explosions in the terminal. A single communication channel and centrally managed evacuation were used.", "bMoh"),
      euL("A single-site peacetime mass casualty plan was inadequate, so a multisite plan was written after Paris and used within days.", "bMip"),
      euL("A burn unit can act as buffer capacity in a mass casualty incident if it follows damage-control principles.", "bBu")
    ],
    verification: "low",
    caveats: "Casualty totals rest on news and a conference abstract. No full hospital cohort or parliamentary inquiry text could be opened."
  },
  {
    id: "nice-2016",
    name: "Nice lorry attack (Promenade des Anglais)",
    date: "2016-07-14",
    country: "France",
    city: "Nice",
    type: "vehicle",
    deaths: "Sources disagree: 86 (J Visc Surg 2018; Int J Legal Med 2018) or 87 (Orthop Traumatol Surg Res 2019)",
    injured: "458",
    summary: "A 19-tonne lorry was driven into crowds watching the Bastille Day fireworks. The city's only adult trauma centre received 182 victims, most with road-traffic-type blunt injuries, and many children were affected.",
    medicalFacts: [
      euF("182 victims were admitted to the main trauma centre ED.", "nOrt", "high"),
      euF("32 were admitted with osteo-articular injuries (18 with ISS>15). There were 87 fractures: 45% lower limb and 25% open. Injuries resembled those of traffic accidents.", "nOrt", "high"),
      euF("19 patients had orthopaedic surgery (damage-control orthopaedics in 12, early total care in 7). All open fractures were treated within 6 h.", "nOrt", "high"),
      euF("11 had abdominal trauma (median ISS 34) and 8 underwent urgent surgery on damage-control principles.", "nVis", "high"),
      euF("All victims were identified within 4.5 days.", "nFor", "high"),
      euF("In the first 2 weeks, 365 children and adolescents (54.6% of 668 registered) attended the paediatric medico-psychological emergency unit.", "nPsy", "high"),
      euF("Paediatric physical-injury numbers: not found.", "nPsy", "high")
    ],
    lessons: [
      euL("Non-operative management of abdominal injuries was judged unsuitable during a mass influx. Surgical haemostasis is recommended for patients at risk of secondary bleeding.", "nVis"),
      euL("More prehospital use of pelvic binders may help in vehicle-ramming trauma.", "nVis"),
      euL("Early total care was feasible in 25% of orthopaedic cases without saturating the hospital.", "nOrt"),
      euL("A dedicated paediatric medico-psychological emergency unit was needed. It was staffed by 146 child and adolescent mental health professionals.", "nPsy")
    ],
    verification: "high",
    caveats: "The death toll differs by one between peer-reviewed sources, and the reason is not stated."
  },
  {
    id: "berlin-2016",
    name: "Berlin Christmas market attack (Breitscheidplatz)",
    date: "2016-12-19",
    country: "Germany",
    city: "Berlin",
    type: "vehicle",
    deaths: "12 (including the hijacked lorry's driver, who was shot, and 3 who died in hospital that night)",
    injured: "Sources disagree: 56 (Berliner Ärzte 2017) or 67 (JEMS 2018)",
    summary: "A hijacked 40-tonne semitrailer was driven into a crowded Christmas market. Its original driver had been shot. Patients went to 22 or 23 Berlin hospitals (sources differ).",
    medicalFacts: [
      euF("12 deaths: the lorry's driver (gunshot to the head) and 11 market victims, 3 of whom died in hospital the same night despite CPR and emergency surgery.", "gFor", "high"),
      euF("At autopsy the market victims had massive blunt torso, pelvic and limb trauma with Morel-Lavallée lesions, often with little external sign ('Casper's sign'). No preventable deaths were found.", "gFor", "high"),
      euF("Rescuers used tourniquets for bleeding from décollement injuries to the legs. The number was not reported.", "gFor", "high"),
      euF("The first call came at 20:04 and the mass casualty (MANV) alarm at 20:07. Patients went to 23 hospitals.", "gAek", "medium"),
      euF("The first category-1 transport left at 20:38, and all category 1 and 2 patients had been transported by 21:30. 22 hospitals received patients (this source).", "gJems", "medium")
    ],
    lessons: [
      euL("The first triage round counted about half the final number of patients: plan for double.", "gJems"),
      euL("Severe internal blunt injury may not be visible externally. Apparently well patients can deteriorate suddenly.", "gFor"),
      euL("Spare capacity, such as a free ICU bed, is a reserve for the unforeseen, not inefficiency. Exercises are the main route to preparedness.", "gAek")
    ],
    verification: "medium",
    caveats: "No peer-reviewed clinical cohort of survivors was found. Injured totals and hospital counts differ between sources."
  },
  {
    id: "barcelona-2017",
    name: "Barcelona (La Rambla) and Cambrils attacks",
    date: "2017-08-17",
    country: "Spain",
    city: "Barcelona and Cambrils",
    type: "vehicle",
    deaths: "Barcelona 14 (13 at scene, 1 later); Cambrils 1. Combined toll not verified.",
    injured: "Sources disagree: 139 injured plus 14 dead, 153 victims in all (Emergencias 2026), or 139 victims including the dead (Emergencias 2017). Cambrils: 6 victims.",
    summary: "A van was driven 550 m along La Rambla. A second attack at Cambrils followed early the next morning. There was no in-hospital mortality among the Barcelona injured.",
    medicalFacts: [
      euF("Real-time triage: 17 red, 32 yellow, 77 green, distributed to 10 hospitals and 7 urgent primary-care centres. Mortality was 0% at 24 h, 72 h and 7 days.", "cSal", "medium"),
      euF("Retrospective META triage of 123 injured: 30 red (24.4%), 30 yellow (24.4%), 63 green (51.2%). 13 red patients had surgical priority.", "cVal", "medium"),
      euF("The first red patient was transported 10 min after the alert. 23 centres were pre-alerted, 17 received patients, and only 2 secondary transfers were needed.", "cVal", "medium"),
      euF("The initial estimate of 20 affected people rose to a final count of 153.", "cVal", "medium"),
      euF("Head and thoraco-abdominal injuries predominated, and 56% had more than one injury.", "cVal", "medium"),
      euF("Paediatric numbers: not found.", "cVal", "medium")
    ],
    lessons: [
      euL("Use rapid life-saving triage in unsafe zones and full triage once in a safe area.", "cVal"),
      euL("Planning figures from this event: about 25% of injured red, 25% yellow and 50% green. Increase damage-control surgical capacity.", "cVal"),
      euL("Most injured were mildly hurt but had significant emotional impact, so psychological follow-up is needed.", "cVal")
    ],
    verification: "medium",
    caveats: "Both sources have internal inconsistencies in their totals. A combined death toll of 16 appears in news reports but was not verified."
  },
  {
    id: "madrid-2004",
    name: "Madrid train bombings (11-M)",
    date: "2004-03-11",
    country: "Spain",
    city: "Madrid",
    type: "explosive",
    deaths: "191 (177 immediate, 14 in hospital)",
    injured: "About 2,000",
    summary: "Ten bombs exploded almost simultaneously on four rush-hour commuter trains. Almost 60% of casualties went to the two closest hospitals. It remains the largest European blast-injury series.",
    medicalFacts: [
      euF("EMS response averaged 7 min and total evacuation 99 min across the four scenes.", "mEjt", "high"),
      euF("Almost 60% of casualties went to the two closest hospitals, with overtriage and uneven distribution.", "mEjt", "high"),
      euF("72 (14%) of 512 assessed casualties had ISS>15. Critical mortality was 19.5%.", "mWjs", "high"),
      euF("Almost 50% had tympanic membrane perforation (60% of them bilateral). There were 43 cases of blast lung, with 88.3% survival.", "mWjs", "high"),
      euF("124 major operations were performed on 82 victims in the first 24 h, half of them orthopaedic. 35% of laparotomies were negative or non-therapeutic.", "mEjt", "high"),
      euF("Ear-lobe amputation and upper thoracic (D1-6) spine fractures were markers of critical injury. Closed train doors increased immediate deaths.", "mWjs", "high"),
      euF("The closest hospital received 312 patients and admitted 91. Of 29 critical patients, 17 (63%) had blast lung, and critical mortality was 17.2%.", "mCcm", "high")
    ],
    lessons: [
      euL("Expect overtriage and overload at the nearest hospitals.", "mEjt"),
      euL("Many problems came from inappropriate planning rather than field decisions. Frontline initiative compensated for unclear command.", "mDis"),
      euL("The early hour and the size of the nearest hospitals were probably decisive in the adequacy of the response.", "mEjt")
    ],
    verification: "high",
    caveats: "Injured figure is approximate. One paper splits the later deaths as 9 early and 5 late."
  },
  {
    id: "norway-2011",
    name: "Oslo government quarter bombing and Utøya shooting",
    date: "2011-07-22",
    country: "Norway",
    city: "Oslo and Utøya",
    type: "mixed",
    deaths: "77 in total: Oslo 8; Utøya 69 (or 68 at the scene, per the trauma centre paper)",
    injured: "Oslo bomb: 98 casualties in all. Utøya: 60 injured (or 61, per the trauma centre paper).",
    summary: "A car bomb in central Oslo was followed by a mass shooting at a youth camp. Victims were largely adolescents, many with injuries from fragmenting rifle ammunition.",
    medicalFacts: [
      euF("The Oslo trauma centre treated 31 patients, 20 with ISS>15. 125 operations were done in 4 weeks, and critical mortality was 5% (1 death). Surge capacity was never exceeded.", "oTc", "high"),
      euF("A rural hospital (Ringerike) triaged 35 patients and admitted 18, including 22 within 1 h and 5 critical. There were no deaths.", "oRur", "high"),
      euF("18 Utøya patients had fragmenting-bullet injuries (median age 17, median ISS 21). There were 5 amputations within 9 days and 101 operations in 4 weeks, mostly repeated debridement.", "oFrag", "high"),
      euF("Minimum acceptable care restricted CT in the ED to suspected severe head injury. Radiology staff tripled.", "oRad", "high"),
      euF("48 people were hospitalised with physical injuries. At 3-4 years, 80% of 30 followed up reported injury-related chronic pain.", "oPain", "high")
    ],
    lessons: [
      euL("Protect the trauma centre from large numbers of walking wounded. A dual surgical command (ED triage plus treatment supervision with re-triage) worked well.", "oTc"),
      euL("Fragmenting ammunition causes progressive soft-tissue necrosis, so plan repeated debridements.", "oFrag"),
      euL("In a rural hospital, communications and radiology organisation were the most vulnerable points.", "oRur"),
      euL("Two separate incidents close together challenge triage, evacuation and helicopter coordination.", "oEms")
    ],
    verification: "high",
    caveats: "Utøya deaths and injured differ by one between sources."
  }
];

const EUROPE_TEACHING_POINTS = [
  euL("Firearm attacks used more surgical resource than blast: emergency surgery was needed in 57% of gunshot versus 35% of explosion casualties (Paris).", "pIcm"),
  euL("Expect prehospital undertriage, so re-triage at the front door: Paris undertriage was 36% and overtriage 8%.", "pTri"),
  euL("The closest hospitals will be overloaded: almost 60% of Madrid casualties went to the two nearest.", "mEjt"),
  euL("Blast: most deaths are immediate, about half of survivors had tympanic membrane perforation, and ear-lobe amputation and upper thoracic spine fractures flagged critical injury (Madrid).", "mWjs"),
  euL("Protect the trauma centre from walking wounded and use surgical command; Oslo's surge capacity was never exceeded.", "oTc"),
  euL("Minimum acceptable care in imaging: restrict ED CT to suspected severe head injury during the surge (Oslo).", "oRad"),
  euL("Vehicle ramming causes road-traffic-type polytrauma, and severe internal injury may not show externally (Berlin, 'Casper's sign').", "gFor"),
  euL("In a mass influx, surgical haemostasis may be preferable to non-operative management of abdominal injury (Nice).", "nVis"),
  euL("Bleeding control: tourniquet demand in Paris exhausted supplies (belts were used), and blood logistics should focus on time to the bedside.", "pHir"),
  euL("Fragmenting or high-energy rounds need planned, repeated debridement (Utøya).", "oFrag"),
  euL("Initial counts underestimate: Barcelona's estimate rose from 20 to 153 victims, and Berlin advises planning for double.", "cVal"),
  euL("Children and adolescents: 365 attended Nice's paediatric medico-psychological unit in 2 weeks, and the Utøya surgical cohort's median age was 17.", "nPsy"),
  euL("Rehearsal pays off: Pitié-Salpêtrière had drilled Plan Blanc that morning, and Brussels credited joint exercises.", "pPsl"),
  euL("Smaller or remote hospitals can cope with good planning and staff recall (Ringerike: 35 triaged, no deaths).", "oRur")
];

const EUROPE_NOT_FOUND = [
  "Brussels 2016: total injured, and system-wide surgery and ICU numbers.",
  "Berlin 2016: survivor injury severity, surgery and ICU numbers.",
  "Barcelona/Cambrils 2017: combined death toll (news reports give 16, not verified).",
  "Paediatric physical-injury counts for all incidents.",
  "Numbers of tourniquets applied (Paris, Berlin).",
  "Vienna 2020 and Stockholm 2017: no medical literature found, so they are excluded."
];

if (typeof module !== "undefined") module.exports = { EUROPE_INCIDENTS, EUROPE_TEACHING_POINTS, EUROPE_NOT_FOUND, EU_SRC };
