// ==== European (non-UK) terrorist mass casualty incidents ====
// Every figure is taken from verify_europe.md and verify_round2_europe.md (docs/verification), where each source was opened and checked on 30 Oct 2026.
// Where figures differ because they count different things, the text says what each counts. Where a difference is genuinely unresolved, both figures are given and the card says sources disagree. "Not found" means no source was located.
// Do not add figures here unless they are first added to a verification file with a source.

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
  oPain: { s: "Chronic pain after 22 July 2011. Acta Anaesthesiol Scand 2019", u: "https://doi.org/10.1111/aas.13373" },
  // Round 2 (verify_round2_europe.md): official, parliamentary and court sources, plus news where stated.
  pMea:  { s: "Méadel J (secrétaire d'État), hearing before the Assemblée nationale commission d'enquête, 16 June 2016 (single victim list: 130 dead, 493 injured, 1,124 'choquées')", u: "https://www.assemblee-nationale.fr/14/pdf/cr-cemoyter/15-16/c1516034.pdf" },
  pJus:  { s: "Ministère de la Justice: the 13 November 2015 trial (130 dead, more than 350 injured)", u: "https://www.justice.gouv.fr/node/326" },
  pAph:  { s: "AP-HP press page, November 2016 (130 dead, 413 injured admitted to hospital)", u: "https://www.aphp.fr/espace-medias/liste-ressources-presse/rfi-un-apres-les-attentats-du-13-novembre" },
  pSam:  { s: "SAMU de Paris and BSPP hearing, Assemblée nationale commission d'enquête, 16 March 2016", u: "https://www.assemblee-nationale.fr/14/pdf/cr-cemoyter/15-16/c1516009.pdf" },
  pSsa:  { s: "Service de santé des armées hearing, Assemblée nationale Défense committee, 24 November 2015", u: "https://www.assemblee-nationale.fr/14/pdf/cr-cdef/15-16/c1516020.pdf" },
  pRap:  { s: "Rapporteur's presentation, Assemblée nationale commission d'enquête, 5 July 2016", u: "https://www.assemblee-nationale.fr/14/pdf/cr-cemoyter/15-16/c1516035.pdf" },
  pJems: { s: "Ernouf C, Tourtier JP, et al. Prehospital rescue organization during the November 2015 Paris attacks. JEMS (trade journal)", u: "https://www.jems.com/ems-operations/rescue-operations/prehospital-rescue-organization-during-the-november-2015-paris-terrorist-attacks/" },
  nEly16:{ s: "Élysée: President Hollande, national tribute to the victims of the Nice attack, 15 October 2016 (86 victims; 15 under 18)", u: "https://www.elysee.fr/francois-hollande/2016/10/15/declaration-de-m-francois-hollande-president-de-la-republique-en-hommage-aux-victimes-de-lattentat-du-14-juillet-2016-a-nice-le-15-octobre-2016" },
  nEly26:{ s: "Élysée: President Macron, 10th anniversary of the Nice attack, 14 July 2026 (86 killed; 450 physically injured)", u: "https://www.elysee.fr/emmanuel-macron/2026/07/14/commemoration-des-10-ans-de-lattentat-de-nice" },
  nVil:  { s: "Ville de Nice: commemoration of the 14 July 2016 attack (86 dead)", u: "https://www.nice.fr/commemoration-des-10-ans-de-lattentat-du-14-juillet-2016/" },
  n360:  { s: "le360 (news): death of a man injured in the Nice attack brings the toll to 86, 19 August 2016", u: "https://fr.le360.ma/monde/deces-dun-homme-blesse-dans-lattentat-de-nice-le-bilan-porte-a-86-morts-84223/" },
  nLen1: { s: "Solla F, et al. Lenval children's hospital, Nice attack. Acad Pediatr 2018;18:361-3", u: "https://doi.org/10.1016/j.acap.2018.01.004" },
  nLen2: { s: "Solla F, et al. Severe casualties from the Bastille Day attack in Nice. Eur J Trauma Emerg Surg 2019;45:857-64", u: "https://doi.org/10.1007/s00068-018-0901-3" },
  gFw:   { s: "Berliner Feuerwehr, Jahresbericht 2016 (12 dead, 67 injured; all severely injured in hospital within 90 min)", u: "https://www.berliner-feuerwehr.de/fileadmin/bfw/dokumente/Publikationen/Jahresberichte/jahresbericht2016.pdf" },
  gBb:   { s: "Brandenburg State Chancellery press release, 18 December 2021 (13th death; at least 67 injured)", u: "https://www.brandenburg.de/media_fast/365/211218%20PM%20Gedenken%20Anschlag%20Breitscheidplatz.pdf" },
  gRbm:  { s: "Governing Mayor of Berlin, press release 19 December 2024 (13 killed)", u: "https://www.berlin.de/rbmskzl/aktuelles/pressemitteilungen/2024/pressemitteilung.1513397.php" },
  gSen:  { s: "Abgeordnetenhaus Berlin, Innenausschuss Wortprotokoll, 20 December 2016 (Senator Geisel: 12 dead, 53 injured, 14 very severely; alarm 20:04; all severely injured in hospital within 80 min)", u: "https://www.parlament-berlin.de/ados/18/InnSichO/protokoll/iso18-001-wp.pdf" },
  gTon:  { s: "t-online / dpa (news): 13th victim of the Breitscheidplatz attack died 5 October 2021", u: "https://www.t-online.de/-/91338972" },
  gAfp:  { s: "Deutsches Ärzteblatt / AFP (news), 20 December 2016: 52 admitted, 18 life-threatening", u: "https://www.aerzteblatt.de/news/0c6d4ce4-f136-43e4-aea8-91de9af07254" },
  c3cat: { s: "3Cat/CCMA (Catalan public broadcaster, news), 8th anniversary 2025: 16 dead; 345 recognised victims per the court judgment", u: "https://www.3cat.cat/324/homenatge-a-les-victimes-del-17a-en-el-vuite-aniversari-dels-atemptats-de-barcelona-i-cambrils/noticia/3366247/" },
  cAcn:  { s: "Catalan News Agency (news), 2021: 16 dead and 140 injured", u: "https://www.catalannews.com/society-science/item/sombre-memorial-for-victims-of-barcelona-terror-attack-four-years-on" },
  oNou:  { s: "NOU 2012:14, Rapport fra 22. juli-kommisjonen (chapters 1-2)", u: "https://www.sintef.no/globalassets/project/nexus/nou201220120014000dddpdfs.pdf" },
  oGov:  { s: "Government of Norway: 22 July terror attack (8 killed in Oslo, 69 at Utøya)", u: "https://www.regjeringen.no/en/aktuelt/22-july-terror-attack/id2979790/" },
  bCham: { s: "Belgian Chamber of Representatives: brochure on the parliamentary inquiry into the 22 March 2016 attacks (32 dead plus 3 bombers; 340 injured)", u: "https://www.dekamer.be/kvvcr/pdf_sections/publications/attentats/Brochure_Terrorists_Attacks.pdf" },
  bSpf1: { s: "SPF Santé publique press release, 28 March 2016 (about 340 injured; 96 in hospital, 55 in intensive care, 30 with burns, 29 hospital sites)", u: "https://news.belgium.be/fr/node/19267/pdf" },
  bSpf2: { s: "SPF Santé publique press release, 4 April 2016 (66 in hospital, 37 in intensive care, 26 in burns centres)", u: "https://news.belgium.be/fr/node/19277/pdf" },
  bSpf3: { s: "SPF Santé publique press release, 29 April 2016 (31 in hospital across 12 hospitals, 17 in intensive care, 11 in burns centres)", u: "https://news.belgium.be/fr/node/19364/pdf" },
  bDh:   { s: "DH / Belga (news), 30 March 2016: Crisis Centre final toll of 32 dead; 87 in hospital, 47 in intensive care", u: "https://www.dhnet.be/actu/belgique/2016/03/30/attentats-de-bruxelles-87-victimes-encore-hospitalisees-en-belgique-R3BMT577RVEAHKWQ37BYLIVZSY/" }
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
    deaths: "130 (official French figure: government victim list; Ministry of Justice). Hirsch et al. report 129 dead at the scenes plus 4 deaths among 302 AP-HP patients; Dr Pelloux told the inquiry 129 died at the scenes and one after transfer to hospital, which the sources do not reconcile.",
    injured: "The published totals count different things. About 350 physically injured was the figure used in the first days and in the clinical papers (352 EJCTS 2017; 351 Ann Vasc Surg 2017; 350 SAMU de Paris; 'more than 300' Lancet 2015). AP-HP counted 413 injured people admitted to hospital. By June 2016 the government's single victim list recorded 493 physically injured and a further 1,124 psychologically injured (1,747 victims in all); the Paris Fire Brigade's 495 is that list in early 2017. 337 were admitted alive to hospital within 24 h (Intensive Care Med 2019).",
    summary: "A coordinated multisite attack in about 40 minutes: suicide bombings at the Stade de France, shootings on café terraces, and a mass shooting with hostage-taking at the Bataclan concert hall. Paris hospitals activated Plan Blanc, and casualties were dominated by gunshot wounds.",
    medicalFacts: [
      euF("337 casualties were admitted alive within 24 h: 286 (85%) gunshot and 51 (15%) explosion.", "pIcm", "high"),
      euF("Emergency surgery was needed in 181 (54%), more often for gunshot than explosion (57% vs 35%). Orthopaedic surgery was commonest (107), and vascular surgery had the shortest median delay (53 min).", "pIcm", "high"),
      euF("AP-HP hospitals received 302 patients in the first 24 h: 76 absolute emergencies and 226 relative emergencies. Pitié-Salpêtrière took 53.", "pHir", "high"),
      euF("Plan Blanc was activated at 22:34. 45 SAMU and fire-brigade medical teams worked the sites, with 15 more held in reserve.", "pHir", "high"),
      euF("Prehospital triage undertriaged 36% (95% CI 27-47%) and overtriaged 8% (95% CI 4-13%) of casualties, compared with an expert panel.", "pTri", "high"),
      euF("68 of 337 were transfused. Massive transfusion was needed in 20 (6%), with a plasma:RBC ratio of 0.8. Median time from admission to first red cells was 57 min for MT patients.", "pTxf", "high"),
      euF("Demand for tourniquets was so high that mobile teams returned without their belts (improvised tourniquets). The number applied was not reported.", "pHir", "high"),
      euF("Each Paris Fire Brigade rescue vehicle carried a special-situations haemorrhage kit with two tactical tourniquets, enough to treat 4-5 victims with severe bleeding. The article does not report how many tourniquets were applied.", "pJems", "medium"),
      euF("Prehospital triage by the Paris Fire Brigade recorded about 100 'urgences absolues' (immediate) and 157 'urgences relatives' (delayed); 98 absolute emergencies were counted in the Île-de-France hospitals.", "pSam", "high"),
      euF("The government's single victim list (June 2016): 130 dead, 493 physically injured and 1,124 psychologically injured, 1,747 victims in all. AP-HP counted 413 injured admitted to hospital.", "pMea", "high"),
      euF("Hospital mortality was about 1.5% of the injured, and there were no inter-hospital transfers (inquiry rapporteur, July 2016).", "pRap", "high"),
      euF("The two military hospitals (Percy and Bégin) took 52 injured, 18 of them absolute emergencies; 13 were admitted to intensive care and 50 operations were performed in 48 hours.", "pSsa", "high"),
      euF("25 patients (7%) had penetrating thoracic injury (80% gunshot, mean ISS 26.8). 17 needed thoracic surgery, and postoperative mortality was 12%.", "pThx", "high"),
      euF("20 patients had non-thoracic vascular trauma, and 12 of them had prehospital CPR. There were no deaths or amputations at 6 months.", "pVasc", "high"),
      euF("At Bégin military hospital, 45 patients were triaged T1 8, T2 10 and T3 27 and managed on damage-control principles. 22 had emergency surgery.", "pBeg", "high"),
      euF("Paediatric physical-injury numbers: not found in the clinical papers, the inquiry hearings, the Ministry of Justice page or Santé publique France.", "pMea", "high")
    ],
    lessons: [
      euL("Unidirectional patient flow, with enough staff under a single medical director, prevents a trauma centre being overwhelmed.", "pVis"),
      euL("Pitié-Salpêtrière had run a Plan Blanc exercise on the morning of the attack. Later improvements were identified in activation, staff alerting, bed management and the emergency morgue.", "pPsl"),
      euL("Shorten the time to get blood products to the bedside rather than simply increasing stock.", "pTxf"),
      euL("A remote trauma centre took 53 victims in 4 h and diverted only 3, helped by a large rise in staff (8 ED physicians instead of 2).", "pRem"),
      euL("The rescue chain needs simpler, more robust organisation and better communication between operators.", "pBspp")
    ],
    verification: "high",
    caveats: "Injured totals differ because they count different things: the early physical-casualty count (about 350), hospital admissions (413, AP-HP) and the legal victim list (493 physically and 1,124 psychologically injured by June 2016). The accounting of in-hospital deaths differs slightly between witnesses (one versus four)."
  },
  {
    id: "brussels-2016",
    name: "Brussels bombings (Zaventem airport and Maelbeek metro)",
    date: "2016-03-22",
    country: "Belgium",
    city: "Brussels",
    type: "explosive",
    deaths: "32 victims killed (official Crisis Centre toll; the three suicide bombers are counted separately): 12 at Zaventem airport and 20 at Maelbeek on the day, rising with later deaths in hospital. In 2023 the assize court recognised 35 murder victims (18 Zaventem, 17 Maelbeek) after three injured people died later (news only).",
    injured: "About 340 (official: Belgian Chamber of Representatives; SPF Santé publique, 28 March 2016). A conference abstract gives 313 victims dispatched to 30 hospitals.",
    summary: "Suicide bombings in the airport departure hall and on a metro train at Maelbeek station. Brussels had written a multisite medical plan after Paris only days before.",
    medicalFacts: [
      euF("313 victims were dispatched to 30 hospitals, and 11 medical teams were sent to the scenes for triage and vital care.", "bMoh", "medium"),
      euF("The Queen Astrid Military Hospital burn unit admitted 23 casualties under damage-control resuscitation and surgery principles. There were no deaths during admission or at 1-year follow-up.", "bBu", "high"),
      euF("At one tertiary centre, 56 patients presented with otological symptoms: tinnitus in 45, subjective hearing loss in 32, sensorineural loss in 41% and tympanic membrane perforation in 3.", "bEnt", "high"),
      euF("A week after the attacks the toll was 32 dead (plus the three perpetrators), 17 Belgians and 15 foreigners, and the number of injured had climbed to 340.", "bCham", "high"),
      euF("Six days after the attack, 96 victims were still in hospital across 29 hospital sites, 55 of them in intensive care and 30 with burns (two in a French burns centre); four patients had died in hospital.", "bSpf1", "high"),
      euF("By 4 April, 66 remained in hospital (37 in intensive care, 26 in burns centres); by 29 April, 31 remained in 12 hospitals (17 in intensive care, 11 in burns centres).", "bSpf3", "high"),
      euF("The 2023 court verdict recognised 35 murder victims (18 Zaventem, 17 Maelbeek) because three injured people died later. News only.", "bLib", "low")
    ],
    lessons: [
      euL("Familiarity between emergency workers from previous joint exercises was credited as the key factor in limiting casualties.", "bMoh"),
      euL("The airport plan had been built around plane crashes, not explosions in the terminal. A single communication channel and centrally managed evacuation were used.", "bMoh"),
      euL("A single-site peacetime mass casualty plan was inadequate, so a multisite plan was written after Paris and used within days.", "bMip"),
      euL("A burn unit can act as buffer capacity in a mass casualty incident if it follows damage-control principles.", "bBu")
    ],
    verification: "medium",
    caveats: "Deaths and injured totals are now official (Chamber brochure, SPF Santé publique, Crisis Centre). The 35 figure is a court count from news. Intensive care and burns figures are official hospital-census snapshots, not a clinical cohort; no system-wide total of operations has been published, and the inquiry's medical chapter could not be read."
  },
  {
    id: "nice-2016",
    name: "Nice lorry attack (Promenade des Anglais)",
    date: "2016-07-14",
    country: "France",
    city: "Nice",
    type: "vehicle",
    deaths: "86 (official: Élysée, 2016 and 2026; Ville de Nice). The toll was 84 on the night and rose as two injured people died in hospital, the last on 18 August 2016. The 86 excludes the attacker, who was shot dead by police; the orthopaedic paper's 87 does not explain its figure and can only be 86 plus the attacker. Fifteen of the dead were under 18.",
    injured: "About 450 physically injured (Élysée 2026: 450; the clinical papers: 458; AFP: more than 450)",
    summary: "A 19-tonne lorry was driven into crowds watching the Bastille Day fireworks. The city's only adult trauma centre received 182 victims, most with road-traffic-type blunt injuries, and many children were affected.",
    medicalFacts: [
      euF("182 victims were admitted to the main trauma centre ED.", "nOrt", "high"),
      euF("32 were admitted with osteo-articular injuries (18 with ISS>15). There were 87 fractures: 45% lower limb and 25% open. Injuries resembled those of traffic accidents.", "nOrt", "high"),
      euF("19 patients had orthopaedic surgery (damage-control orthopaedics in 12, early total care in 7). All open fractures were treated within 6 h.", "nOrt", "high"),
      euF("11 had abdominal trauma (median ISS 34) and 8 underwent urgent surgery on damage-control principles.", "nVis", "high"),
      euF("All victims were identified within 4.5 days.", "nFor", "high"),
      euF("In the first 2 weeks, 365 children and adolescents (54.6% of 668 registered) attended the paediatric medico-psychological emergency unit.", "nPsy", "high"),
      euF("15 of the 86 people killed were under 18 (national tribute, October 2016).", "nEly16", "high"),
      euF("Lenval, the city's children's hospital, received 47 casualties, 12 of them adults (so 35 children).", "nLen1", "high"),
      euF("Of the Lenval casualties, 11 were severely injured (3 adults, 8 children): 6 children needed surgery, 7 patients went to paediatric intensive care and 5 died. 28 operations were performed. Injuries were pelvic disruption, lower-limb fractures, vascular injury and crush injury of the head and trunk, mostly arriving without prehospital care.", "nLen2", "high")
    ],
    lessons: [
      euL("Non-operative management of abdominal injuries was judged unsuitable during a mass influx. Surgical haemostasis is recommended for patients at risk of secondary bleeding.", "nVis"),
      euL("More prehospital use of pelvic binders may help in vehicle-ramming trauma.", "nVis"),
      euL("Early total care was feasible in 25% of orthopaedic cases without saturating the hospital.", "nOrt"),
      euL("A dedicated paediatric medico-psychological emergency unit was needed. It was staffed by 146 child and adolescent mental health professionals.", "nPsy")
    ],
    verification: "high",
    caveats: "The official toll is 86 victims; peer-reviewed sources giving 87 appear to include the attacker, though none says so. Injured totals range from 450 to 458 depending on the source."
  },
  {
    id: "berlin-2016",
    name: "Berlin Christmas market attack (Breitscheidplatz)",
    date: "2016-12-19",
    country: "Germany",
    city: "Berlin",
    type: "vehicle",
    deaths: "12 on the night (11 at the market, 3 of them in hospital that night, and the Polish driver of the hijacked lorry, who was shot); 13 officially since October 2021, when a 49-year-old man died of the late effects of a head injury (Brandenburg State Chancellery; Governing Mayor of Berlin; dpa).",
    injured: "67 (official: Berlin Fire Brigade annual report 2016; Brandenburg State Chancellery; Berlin Senate record). Early counts of 53 (Senator for the Interior, 20 December 2016) and 56 (Berliner Ärzte 2017) were provisional.",
    summary: "A hijacked 40-tonne semitrailer was driven into a crowded Christmas market. Its original driver had been shot. Patients went to 22 or 23 Berlin hospitals (trade sources differ; no official count found).",
    medicalFacts: [
      euF("12 deaths: the lorry's driver (gunshot to the head) and 11 market victims, 3 of whom died in hospital the same night despite CPR and emergency surgery.", "gFor", "high"),
      euF("At autopsy the market victims had massive blunt torso, pelvic and limb trauma with Morel-Lavallée lesions, often with little external sign ('Casper's sign'). No preventable deaths were found.", "gFor", "high"),
      euF("Rescuers used tourniquets for bleeding from décollement injuries to the legs. The number was not reported.", "gFor", "high"),
      euF("The first call came at 20:04 and the mass casualty (MANV) alarm at 20:07. Patients went to 23 hospitals.", "gAek", "medium"),
      euF("The first category-1 transport left at 20:38, and all category 1 and 2 patients had been transported by 21:30. 22 hospitals received patients (this source).", "gJems", "medium"),
      euF("Official count: 12 dead and 67 injured, some severely; all severely injured patients were in suitable hospitals within about 90 minutes.", "gFw", "high"),
      euF("The day after: 12 dead and 53 injured, 14 of them very severely; fire and police were alerted at 20:04, two minutes after the impact; all severely injured were in hospital within 80 minutes; Charité and Vivantes declared disaster alerts, each with about 1,000 medical staff deployed.", "gSen", "medium"),
      euF("AFP, the day after: 52 injured admitted to Berlin hospitals, 18 with life-threatening injuries (3 of whom died); the Charité took 13, 6 of them in intensive care. News only.", "gAfp", "low"),
      euF("A thirteenth victim died on 5 October 2021 of the late effects of a head injury and is officially counted among the dead.", "gBb", "high")
    ],
    lessons: [
      euL("The first triage round counted about half the final number of patients: plan for double.", "gJems"),
      euL("Severe internal blunt injury may not be visible externally. Apparently well patients can deteriorate suddenly.", "gFor"),
      euL("Spare capacity, such as a free ICU bed, is a reserve for the unforeseen, not inefficiency. Exercises are the main route to preparedness.", "gAek")
    ],
    verification: "medium",
    caveats: "No peer-reviewed clinical cohort of survivors exists (PubMed lists only the forensic series and responder mental-health studies), so survivor ISS, surgery and ICU totals are unknown. The number of receiving hospitals (22 or 23) rests on trade sources and is unresolved."
  },
  {
    id: "barcelona-2017",
    name: "Barcelona (La Rambla) and Cambrils attacks",
    date: "2017-08-17",
    country: "Spain",
    city: "Barcelona and Cambrils",
    type: "vehicle",
    deaths: "16 across the two attacks, the figure established by the Audiencia Nacional judgment of 27 May 2021: 14 in the La Rambla attack (13 at the scene, 1 later), 1 at Cambrils and 1 further victim. The 16 comes from news and the Catalan public broadcaster only (no official page could be opened), and its composition is not itemised in any source opened.",
    injured: "About 140 overall and 130 on La Rambla (news). The Barcelona response papers count differently: 153 people attended, meaning 14 dead plus 139 injured (Emergencias 2026), or 139 victims including the 14 dead (Emergencias 2017). Cambrils: 6 victims (Emergencias 2026); 1 dead and 4 injured (3Cat, news).",
    summary: "A van was driven 550 m along La Rambla. A second attack at Cambrils followed early the next morning. There was no in-hospital mortality among the Barcelona injured.",
    medicalFacts: [
      euF("Real-time triage: 17 red, 32 yellow, 77 green, distributed to 10 hospitals and 7 urgent primary-care centres. Mortality was 0% at 24 h, 72 h and 7 days.", "cSal", "medium"),
      euF("Retrospective META triage of 123 injured: 30 red (24.4%), 30 yellow (24.4%), 63 green (51.2%). 13 red patients had surgical priority.", "cVal", "medium"),
      euF("The first red patient was transported 10 min after the alert. 23 centres were pre-alerted, 17 received patients, and only 2 secondary transfers were needed.", "cVal", "medium"),
      euF("The initial estimate of 20 affected people rose to a final count of 153.", "cVal", "medium"),
      euF("Head and thoraco-abdominal injuries predominated, and 56% had more than one injury.", "cVal", "medium"),
      euF("16 people died across the two attacks and 345 were recognised as victims by the court judgment (public broadcaster, news only).", "c3cat", "low"),
      euF("Paediatric numbers: not found.", "cVal", "medium")
    ],
    lessons: [
      euL("Use rapid life-saving triage in unsafe zones and full triage once in a safe area.", "cVal"),
      euL("Planning figures from this event: about 25% of injured red, 25% yellow and 50% green. Increase damage-control surgical capacity.", "cVal"),
      euL("Most injured were mildly hurt but had significant emotional impact, so psychological follow-up is needed.", "cVal")
    ],
    verification: "medium",
    caveats: "The two papers' totals (153 and 139) are not a factual conflict: they count the dead differently. The triage sets are not comparable: 17/32/77 is the real-time prehospital tally and 30/30/63 a retrospective META reclassification of 123 injured. The combined toll of 16 rests on news reports attributing it to the court."
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
    deaths: "77 (22 July Commission, NOU 2012:14): 8 in the Oslo government quarter and 69 at Utøya. The trauma-centre paper's 68 dead at the scene and 61 injured count one casualty who died after evacuation as injured rather than dead.",
    injured: "Oslo bomb: 10 admitted to hospital with life-threatening or serious injuries and about 190 minor injuries treated at the Oslo emergency clinic in 24 h (NOU 2012:14); the trauma-centre paper counts 98 casualties in all. Utøya: 33 with life-threatening or serious physical injury (NOU 2012:14); the clinical papers give 60 or 61 injured in total.",
    summary: "A car bomb in central Oslo was followed by a mass shooting at a youth camp. Victims were largely adolescents, many with injuries from fragmenting rifle ammunition.",
    medicalFacts: [
      euF("The Oslo trauma centre treated 31 patients, 20 with ISS>15. 125 operations were done in 4 weeks, and critical mortality was 5% (1 death). Surge capacity was never exceeded.", "oTc", "high"),
      euF("A rural hospital (Ringerike) triaged 35 patients and admitted 18, including 22 within 1 h and 5 critical. There were no deaths.", "oRur", "high"),
      euF("18 Utøya patients had fragmenting-bullet injuries (median age 17, median ISS 21). There were 5 amputations within 9 days and 101 operations in 4 weeks, mostly repeated debridement.", "oFrag", "high"),
      euF("Minimum acceptable care restricted CT in the ED to suspected severe head injury. Radiology staff tripled.", "oRad", "high"),
      euF("48 people were hospitalised with physical injuries. At 3-4 years, 80% of 30 followed up reported injury-related chronic pain.", "oPain", "high"),
      euF("Official count: 77 killed. Government quarter: 8 killed instantly, 10 admitted with life-threatening or serious injuries, 10 sent directly to the Ullevål trauma centre and about 190 with lesser injuries treated at the Oslo emergency clinic in the first 24 h. Utøya: 69 killed, most of them young people, and a further 33 with life-threatening or serious physical injury.", "oNou", "high")
    ],
    lessons: [
      euL("Protect the trauma centre from large numbers of walking wounded. A dual surgical command (ED triage plus treatment supervision with re-triage) worked well.", "oTc"),
      euL("Fragmenting ammunition causes progressive soft-tissue necrosis, so plan repeated debridements.", "oFrag"),
      euL("In a rural hospital, communications and radiology organisation were the most vulnerable points.", "oRur"),
      euL("Two separate incidents close together challenge triage, evacuation and helicopter coordination.", "oEms")
    ],
    verification: "high",
    caveats: "The Commission's 69 dead at Utøya includes one person who was alive when evacuated and died later; the trauma-centre paper counts that person as injured (68 dead, 61 injured). The Commission gives no single injured total for Utøya."
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
  euL("Children will be among the severely injured: in Nice 15 of the 86 dead were under 18, and the children's hospital received 47 casualties (35 children), 11 of them severe, mostly arriving without prehospital care.", "nLen2"),
  euL("Rehearsal pays off: Pitié-Salpêtrière had drilled Plan Blanc that morning, and Brussels credited joint exercises.", "pPsl"),
  euL("Smaller or remote hospitals can cope with good planning and staff recall (Ringerike: 35 triaged, no deaths).", "oRur")
];

const EUROPE_NOT_FOUND = [
  "Berlin 2016: the number of receiving hospitals (22 or 23, trade sources only; no official count found); survivor injury severity, surgery and ICU totals (no published hospital cohort).",
  "Brussels 2016: a system-wide total of operations; the parliamentary inquiry's medical chapter (DOC 54 1752/006, pp. 92-98) could not be read. Injured (about 340) and deaths (32 plus 3 bombers) are now official.",
  "Barcelona/Cambrils 2017: no official Generalitat or court page could be opened (the 16 deaths are news reports attributing the figure to the Audiencia Nacional), and the composition of the 16 is not itemised in any source opened.",
  "Paediatric physical-injury counts for Paris, Brussels, Berlin, Barcelona and Utøya (found for Nice only: the Lenval series).",
  "Numbers of tourniquets applied (Paris, Berlin): no official or peer-reviewed source gives a count.",
  "Vienna 2020 and Stockholm 2017: no peer-reviewed clinical account found, so neither is included as a case study. What was found: Vienna (2 November 2020), four people killed and the attacker shot dead by police, 15 treated in hospital on the night (7 seriously) and later reports of more than 20 injured (wire services only); Stockholm (7 April 2017), 5 dead and 14 seriously injured in the Swedish Police Authority's evaluation, with Läkartidningen noting that patient numbers did not strain Stockholm's hospitals."
];

if (typeof module !== "undefined") module.exports = { EUROPE_INCIDENTS, EUROPE_TEACHING_POINTS, EUROPE_NOT_FOUND, EU_SRC };
