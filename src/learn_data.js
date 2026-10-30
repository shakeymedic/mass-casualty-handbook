// ==== Teaching data for the Mass Casualty Handbook ====
// Every statement, question and rationale below is taken from the verification tables
// (verify_triage.md, verify_clinical.md "Safe-to-teach statements", verify_incidents.md,
// verify_registry.md) or from the WMAS 2018 aide-memoire (doc12.txt; triage section superseded).
// Each quiz question carries `src.f`, the verification file it was written from.

const VFILE = {
  VT:"Triage verification table (verify_triage.md)",
  VC:"Clinical verification, safe-to-teach statements (verify_clinical.md)",
  VI:"Incident verification table (verify_incidents.md)",
  VR:"Registry verification table (verify_registry.md)",
  D12:"WMAS Major Incident Response Aide-Memoire 2018 (public card)",
  SUITE:"Training suite data (archetype names)",
  VE:"European incident verification table (verify_europe.md)"
};
const U = {
  naru:"https://www.england.nhs.uk/wp-content/uploads/2018/12/naru-tst-non-clinical-responders-supplementary-information.pdf",
  tstpdf:"https://www.england.nhs.uk/wp-content/uploads/2023/04/PRN00365iv-ten-second-triage-tool-april-2023.pdf",
  letter:"https://www.england.nhs.uk/wp-content/uploads/2023/04/PRN00358ii-major-incident-triage-tools-letter-acute-trusts.pdf",
  mittpdf:"https://www.england.nhs.uk/wp-content/uploads/2023/04/PRN00365ii-nhs-major-incident-triage-tool-april-2023.pdf",
  emj22:"https://emj.bmj.com/content/39/11/800",
  park:"https://doi.org/10.1186/s13049-026-01588-3",
  stephens:"https://doi.org/10.1136/bmjopen-2025-108881",
  skry:"https://emj.bmj.com/content/38/10/756",
  dark:"https://doi.org/10.1136/emermed-2019-208575",
  emjArena:"https://emj.bmj.com/content/38/10/746",
  medrxiv:"https://www.medrxiv.org/content/10.1101/2021.12.10.21267587v1.full",
  stag:"https://www.nbt.nhs.uk/sites/default/files/document/STAG%20Manual%20-%20Online%20Version_0.pdf",
  codered:"https://www.c4ts.qmul.ac.uk/downloads/code-red-algorithm2018.pdf",
  fphc:"https://fphc.rcsed.ac.uk/media/2957/2020-09-20-burns-consensus.pdf",
  cyanokit:"https://www.medicines.org.uk/emc/product/4786/smpc",
  osler:"https://doi.org/10.1097/TA.0b013e3181c453b3",
  phe:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/738497/ED_briefing_note_nerve_agents.pdf",
  noga:"https://doi.org/10.1007/s00204-022-03437-5",
  bja:"https://doi.org/10.1016/j.bja.2021.10.008",
  raib:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/931905/R182017_201022_Sandilands_v2.2.pdf",
  nhse17:"https://www.england.nhs.uk/2017/06/london-attack-june-4-2017-nhs-england-update/",
  stgeorges:"https://www.stgeorges.nhs.uk/newsitem/statement-regarding-tram-incident-in-croydon-on-9-november-2016/",
  londonist:"https://londonist.com/london/news/50-hurt-in-croydon-tram-crash",
  southportWiki:"https://en.wikipedia.org/wiki/2024_Southport_stabbings",
  itvSouthport:"https://www.itv.com/news/granada/2024-07-30/six-children-remain-in-critical-condition-as-police-quiz-boy-over-knife-attack",
  westWiki:"https://en.wikipedia.org/wiki/2017_Westminster_attack",
  nmtr:"https://www.england.nhs.uk/outcomes-and-registries-programme/nmtr/",
  euTri:"https://doi.org/10.1097/MEJ.0000000000000771",
  euMadrid:"https://doi.org/10.1007/s00068-008-8805-2",
  euBerlin:"https://doi.org/10.1007/s12024-020-00277-6"
};
const S = (f,c,u) => ({f,c,u:u||""});
const AIDE = S("D12","WMAS Major Incident Response Aide-Memoire, 2018 v1 Edition 2");

// ---------------- Learning pathway ----------------
const MODULES = [
{
  id:"m1", n:1, title:"Major incident principles", short:"JESIP, METHANE and CSCATTT", mins:20,
  roles:["pre","ed","edu"],
  objectives:[
    "List the seven METHANE elements and use them to structure a report.",
    "Name the five JESIP principles for joint working.",
    "Put the CSCATTT priorities in order and explain why the 2018 card's triage entry is superseded.",
    "Describe the first-crew driver and attendant roles on the aide-memoire."
  ],
  content:`
<p>These frameworks come from the West Midlands Ambulance Service (WMAS) Major Incident Response Aide-Memoire, 2018 v1 Edition 2, a public card. It is WMAS-specific, so check your own service's current version.</p>
<h4>METHANE</h4>
<ul class="tight">
<li><b>M</b>ajor incident: call sign, standby or declared, and your time</li>
<li><b>E</b>xact location: grid reference, directions</li>
<li><b>T</b>ype of incident: rail, chemical etc.</li>
<li><b>H</b>azards: present and potential</li>
<li><b>A</b>ccess: direction of approach and egress, location of RVP</li>
<li><b>N</b>umber of casualties: severity and type</li>
<li><b>E</b>mergency services: present and required</li>
</ul>
<h4>JESIP</h4>
<p>Principles for joint working: <b>co-locate, communicate, co-ordinate, jointly understand risk, shared situational awareness</b>. The card's decision wheel runs: gather information and intelligence; assess risks and develop a working strategy; consider powers, policies and procedures; identify options and contingencies; take action and review what happened. At its centre: working together, saving lives, reducing harm.</p>
<h4>CSCATTT</h4>
<p>Command and control, Safety (self, scene, survivors), Communications, Assessment, Triage, Treatment (stabilise and package), Transport (appropriate hospital; casualty regulation).</p>
<div class="callout warn small"><p><strong>Superseded triage.</strong> The 2018 card lists "Sieve &amp; Sort". NHS England replaced the Triage Sieve, the Triage Sort and the Paediatric Triage Tape with TST and MITT from April 2023, with full NHS implementation by 30 June 2024.</p></div>
<h4>First crew on scene</h4>
<p><b>Driver:</b> park as near as safety permits, leave roof beacons on, send a windscreen report (press priority, give call sign, say what you see, follow up with METHANE). The vehicle becomes the ambulance command point until relieved. <b>Attendant:</b> assume the role of ambulance incident commander until relieved, carry out a rapid assessment and send METHANE reports, liaise with other services and identify the rendezvous point, access and egress, ambulance parking point and casualty clearing point.</p>`,
  links:[["prehospital","Pre-hospital doctrine (full tables)"],["triage","Triage: TST and MITT"]],
  quiz:[
    {q:"In a METHANE report, what does the \"A\" stand for?",o:["Assessment","Access","Ambulance","Area of operations"],a:1,
     why:"A is Access: direction of approach and egress, and the location of the RVP. Assessment is a CSCATTT priority, not a METHANE element.",src:AIDE},
    {q:"Which of these is NOT one of the JESIP principles for joint working on the aide-memoire?",o:["Co-locate","Jointly understand risk","Command","Shared situational awareness"],a:2,
     why:"The five principles listed are co-locate, communicate, co-ordinate, jointly understand risk and shared situational awareness. Command and control is the first CSCATTT priority, not a JESIP principle.",src:AIDE},
    {q:"What is the first priority in CSCATTT?",o:["Safety","Command and control","Communications","Triage"],a:1,
     why:"CSCATTT runs Command and control, Safety, Communications, Assessment, Triage, Treatment, Transport.",src:AIDE},
    {q:"The 2018 aide-memoire lists \"Sieve & Sort\" under Triage. What should be used now?",o:["Triage Sieve at the scene and Triage Sort at hospital","The Paediatric Triage Tape for children and Sieve for adults","TST and MITT","Any of these, by local preference"],a:2,
     why:"NHS England's April 2023 letter states that MITT replaces the Triage Sieve, the Triage Sort and the Paediatric Triage Tape, with full implementation across the NHS by 30 June 2024. TST is the tool for anyone at the scene.",src:S("VT","NHS England letter to acute trusts, 18 April 2023",U.letter)},
    {q:"According to the aide-memoire, who assumes the role of ambulance incident commander until relieved?",o:["The driver of the first crew","The attendant of the first crew","The first doctor on scene","The first police officer on scene"],a:1,
     why:"The attendant assumes the role of ambulance incident commander until relieved by a suitably trained officer. The driver stays with the vehicle, which becomes the ambulance command point.",src:AIDE},
    {q:"What does the first-crew driver send first?",o:["A windscreen report: press priority, give call sign, say what you see, then follow up with METHANE","A full casualty list","A request for hospital alert only","Nothing until the attendant has triaged everyone"],a:0,
     why:"The card tells the driver to send a windscreen report: press priority on the radio, give the call sign, say what you see, and follow up with METHANE.",src:AIDE},
    {q:"In METHANE, what does the \"N\" cover?",o:["Nearest hospital","Number of casualties, severity and type","NHS resources required","Notification time"],a:1,
     why:"N is the number of casualties, with their severity and type.",src:AIDE},
    {q:"Madrid train bombings, 2004: what share of casualties went to the two closest hospitals?",o:["About 10%","About 25%","Almost 60%","All of them"],a:2,
     why:"Almost 60% of casualties went to the two closest hospitals, with overtriage and uneven distribution. Expect overload at the nearest hospitals. (European incident, high confidence.)",src:S("VE","Turégano-Fuentes F, et al. Eur J Trauma Emerg Surg 2008;34:433",U.euMadrid)}
  ]
},
{
  id:"m2", n:2, title:"Ten Second Triage (TST)", short:"The tool for anyone at the scene", mins:20,
  roles:["pre","ed"],
  objectives:[
    "Apply the four TST questions in the correct order.",
    "Describe the deliberate search for penetrating injury and its body areas.",
    "Explain what a silver NOT BREATHING band means, and why TST has no DEAD category.",
    "State the additional rule for children under 2."
  ],
  content:`
<p>Published by NHS England and NARU, version 1.0, April 2023. TST "does not rely on any physiological measurements, including even minimal assessments such as palpation of the radial pulse".</p>
<ol class="tight">
<li><b>Walking?</b> Yes: <span class="tag p3">P3</span>. Uninjured people are directed to a place of relative safety; injured walking casualties go to a casualty collection point.</li>
<li><b>Severe bleeding?</b> Yes: Pressure / Tourniquet / Packing, then <span class="tag p1">P1</span>.</li>
<li><b>Talking?</b> Yes: a deliberate, targeted search for penetrating injury that "must include the neck, chest, armpits, back, abdomen, groin and buttocks" (front, back and sides). Found: <span class="tag p1">P1</span>. None: <span class="tag p2">P2</span>. Not talking: go to step 4.</li>
<li><b>Breathing?</b> Open the airway if able, then a 10-second look, listen and feel. Yes: recovery position, <span class="tag p1">P1</span>. No: recovery position, <span class="tag nb">NOT BREATHING</span>. CPR if resources allow; it must not detract from stopping external bleeding and opening airways.</li>
</ol>
<p><b>Additional rule:</b> any child under 2 is automatically <span class="tag p1">P1</span>.</p>
<p><b>Bands:</b> P1 white on red, P2 black on yellow, P3 white on green, NOT BREATHING black on silver. A white checked border identifies TST bands.</p>
<p><b>No DEAD category.</b> NOT BREATHING records the objective finding of the breathing check. Later, a healthcare practitioner with time reassesses the casualty as a viable resuscitation (P1) or ROLE/PLE (dead).</p>
<div class="callout small"><p><strong>One simulation study, not a standard.</strong> In a 37-casualty field simulation (Park, Vassallo et al. 2026), TST took a mean of 10.2 s per casualty with 80.3% accuracy, against 79.3% for MITT. These figures come from one exercise and are not competency standards.</p></div>`,
  links:[["triage","TST flowchart and comparison"],["trainer","Practise in the triage trainer"]],
  quiz:[
    {q:"What is the first question in TST?",o:["Severe bleeding?","Breathing?","Walking?","Talking?"],a:2,
     why:"TST starts with Walking? Anyone walking is P3. Severe bleeding is step 2.",src:S("VT","NARU, TST Non-Clinical Responders – Supplementary Information v1.0, April 2023",U.naru)},
    {q:"A casualty is not walking and has severe bleeding. What does TST say?",o:["Talk to them first, then treat","Pressure / Tourniquet / Packing, then P1","P2 until a clinician arrives","Check the radial pulse, then decide"],a:1,
     why:"Severe bleeding leads to Pressure / Tourniquet / Packing and P1. TST uses no physiological measurements, not even a radial pulse.",src:S("VT","NHS England TST tool PDF, April 2023",U.tstpdf)},
    {q:"For a talking casualty, which areas must the deliberate search for penetrating injury include?",o:["The front and back of the torso only","The chest and abdomen only","The neck, chest, armpits, back, abdomen, groin and buttocks, front, back and sides","The head and limbs"],a:2,
     why:"The NARU guidance says the search \"must include the neck, chest, armpits, back, abdomen, groin and buttocks, (front back and sides)\". Describing it as \"front or back of the torso\" was an error in the original report.",src:S("VT","NARU TST supplementary information v1.0",U.naru)},
    {q:"A casualty is not talking. After opening the airway, they are breathing. What next?",o:["Recovery position, P1","Recovery position, P2","Sit them up, P3","NOT BREATHING band"],a:0,
     why:"Not talking leads to the breathing check. Breathing: place in the recovery position, P1.",src:S("VT","NARU TST supplementary information v1.0",U.naru)},
    {q:"After the airway is opened and a 10-second check, a casualty is not breathing. Which statement is correct?",o:["Label them DEAD","Recovery position, silver NOT BREATHING band; CPR if resources allow","Start CPR before treating anyone else","Label them P3 and move on"],a:1,
     why:"TST does not have a DEAD category. The casualty goes in the recovery position with a NOT BREATHING band. CPR if resources allow, but it must not detract from stopping external bleeding and opening airways.",src:S("VT","NARU TST supplementary information; NHS England letter, April 2023",U.letter)},
    {q:"What is the TST additional rule for young children?",o:["Under 5s are automatically P2","Under 2s are automatically P1","Children use separate thresholds","There is no additional rule"],a:1,
     why:"\"Any child under 2 should be automatically triaged as a P1.\"",src:S("VT","NARU TST supplementary information v1.0",U.naru)},
    {q:"What colour is the TST NOT BREATHING band, and how are TST bands told apart from MITT cards?",o:["Black, with a red border","Black on silver; a white checked border identifies TST bands","White on grey; no difference from MITT","Purple, with no border"],a:1,
     why:"NOT BREATHING is black on silver. \"A white checked border is used to identify the TST bands\", which separates them from MITT triage cards.",src:S("VT","NARU TST supplementary information v1.0",U.naru)},
    {q:"Does TST use any physiological measurements?",o:["Yes, respiratory rate only","Yes, a radial pulse check","No, not even palpation of the radial pulse","Yes, respiratory rate and heart rate"],a:2,
     why:"TST \"does not rely on any physiological measurements, including even minimal assessments such as palpation of the radial pulse\" (Park et al. 2026). MITT is the tool that uses respiratory rate and heart rate.",src:S("VT","Park, Vassallo et al. Scand J Trauma Resusc Emerg Med 2026",U.park)}
  ]
},
{
  id:"m3", n:3, title:"NHS Major Incident Triage Tool (MITT)", short:"Clinical triage for NHS responders", mins:20,
  roles:["ed","pre"],
  objectives:[
    "Apply the MITT steps in order, including the physiological thresholds.",
    "Recognise the published discrepancy in the heart rate wording.",
    "Explain what MITT keeps (DEAD) and what it does not have (Pit Stop, Survivor Reception Centre).",
    "Apply MITT to children, including the under-2 rule and rescue breaths."
  ],
  content:`
<ol class="tight">
<li><b>Catastrophic bleeding?</b> <span class="tag p1">P1</span></li>
<li><b>Walking?</b> <span class="tag p3">P3</span></li>
<li><b>Breathing?</b> If not, open the airway. Still not breathing: <span class="tag dead">DEAD</span>. In children under 12, consider 5 rescue breaths after submersion, immersion or smoke inhalation.</li>
<li><b>Responds to voice?</b> If not: recovery position, <span class="tag p1">P1</span></li>
<li><b>Aged under 2?</b> <span class="tag p1">P1</span></li>
<li><b>Breathing rate outside 12–23</b> (below 12, or 24 and above)? <span class="tag p1">P1</span></li>
<li><b>Heart rate 100 or more?</b> <span class="tag p1">P1</span></li>
<li>Otherwise <span class="tag p2">P2</span></li>
</ol>
<div class="callout warn small"><p><strong>Heart rate wording differs between sources.</strong> The NHS England MITT tool reads "Heart Rate 100 or More". The EMJ 2022 text reads "&gt;100". Check your current local card.</p></div>
<ul class="tight">
<li>MITT uses the same physiological thresholds for adults and children across the entire age range, derived from MPTT-24.</li>
<li>MITT keeps a DEAD category. It has <b>no "Pit Stop" pathway</b>.</li>
<li>The Survivor Reception Centre route has been removed: all living people involved are at least P3.</li>
<li>EMJ 2022 describes MITT as "a rapid <b>primary</b> triage assessment", replacing the Sieve and the Triage Sort.</li>
</ul>`,
  links:[["triage","MITT flowchart and comparison"],["trainer","Practise MITT in the triage trainer"]],
  quiz:[
    {q:"What is the first step in MITT?",o:["Walking?","Catastrophic bleeding?","Responds to voice?","Breathing rate?"],a:1,
     why:"MITT starts with catastrophic bleeding (P1). Walking is the second step.",src:S("VT","NHS England MITT PDF, April 2023",U.mittpdf)},
    {q:"Which breathing rates make a casualty P1 on MITT (once they reach that step)?",o:["Below 10 or above 30","Below 12, or 24 and above (outside 12–23)","Above 20 only","Below 8 only"],a:1,
     why:"The tool gives \"Breathing Rate 12–23\"; outside that range is P1. EMJ 2022 states RR <12 or ≥24.",src:S("VT","NHS England MITT PDF; Vassallo et al. EMJ 2022",U.mittpdf)},
    {q:"An adult responds to voice, has a breathing rate of 18 and a heart rate of exactly 100. Using the wording on the published NHS England MITT tool, what category are they?",o:["P2","P1, because the tool reads \"Heart Rate 100 or More\"","P3","It cannot be decided"],a:1,
     why:"The published tool reads \"100 or more\", so 100 gives P1. The EMJ 2022 text reads \">100\", which would give P2. This discrepancy is flagged on this site: check your current local card.",src:S("VT","NHS England MITT PDF, April 2023; EMJ 2022 (\">100\", see verify_registry.md)",U.mittpdf)},
    {q:"Which of these is part of MITT?",o:["A \"Pit Stop\" pathway","A DEAD category","A Survivor Reception Centre route for the uninjured","Separate paediatric thresholds"],a:1,
     why:"MITT keeps a DEAD category. It contains no Pit Stop pathway, the Survivor Reception Centre route was removed, and the same thresholds apply at all ages.",src:S("VT","NHS England MITT long-read and PDF; EMJ 2022",U.emj22)},
    {q:"A 9-year-old has been pulled from water and is not breathing after the airway is opened. What does MITT say to consider?",o:["Nothing; categorise as DEAD immediately","5 rescue breaths","A heart rate check first","Walking test"],a:1,
     why:"In children under 12, consider 5 rescue breaths after submersion, immersion or smoke inhalation.",src:S("VT","NHS England MITT PDF, April 2023",U.mittpdf)},
    {q:"Under MITT, what is the lowest category any living person involved can receive?",o:["Uninjured, sent home","P3","Survivor Reception Centre","No category"],a:1,
     why:"The Survivor Reception Centre and the injury assessment were removed from MITT: \"all living individuals involved in a major incident should be categorised as minimum Priority Three\".",src:S("VT","Vassallo et al. From MIMMS to MITT, EMJ 2022",U.emj22)},
    {q:"How does EMJ 2022 describe MITT?",o:["A secondary triage tool","A rapid primary triage assessment","A scoring system for ICU admission","A tool for non-clinical responders only"],a:1,
     why:"MITT is \"a rapid primary triage assessment\", replacing both the Sieve and the Triage Sort. Calling it a secondary triage tool was an error in the original report.",src:S("VR","Vassallo et al. EMJ 2022",U.emj22)},
    {q:"How does MITT handle children aged over 2?",o:["A separate paediatric triage tape","The same physiological thresholds as adults","Higher heart rate thresholds","Children are always P1"],a:1,
     why:"MITT uses \"the same physiological thresholds in both adult and paediatric patients\" across the entire age range, with automatic P1 for those under 2.",src:S("VR","Vassallo et al. EMJ 2022",U.emj22)}
  ]
},
{
  id:"m4", n:4, title:"The hospital response", short:"Front door, surge and blood", mins:25,
  roles:["ed"],
  objectives:[
    "Explain why every arrival is re-triaged with MITT at the front door.",
    "Use the Manchester Arena case series to anticipate arrival patterns.",
    "Describe what a silver NOT BREATHING band means on arrival.",
    "Identify which surge and blood figures are sourced, and which must be local."
  ],
  content:`
<p>The draft hospital SOPs on this site are built only from verified content. They are drafts and need trust sign-off.</p>
<h4>What Manchester Arena showed (Dark et al., EMJ 2021)</h4>
<ul class="tight">
<li>153 patients reached EDs: 109 adults and 44 under-16s.</li>
<li>138 (90%) arrived within 6 hours across 11 hospitals; 75 (49%) attended an MTC.</li>
<li>NWAS conveyed 59 (21 P1, 24 P2, 14 P3). A further 95 made their own way to hospital as P3, 14 of them outside the local network. (59 + 95 = 154, not 153; the paper does not reconcile this.)</li>
<li>93 (61%) were admitted; 24 (16%) needed critical care, 19 of them at MTCs; 21 (14%) needed damage control surgery.</li>
</ul>
<h4>At the front door</h4>
<ul class="tight">
<li>Draft SOP 1: re-triage every arrival with MITT at a single triage point, including those tagged with TST at the scene and those who self-present.</li>
<li>A silver NOT BREATHING band is an observation, not a declaration of death: a healthcare practitioner reassesses for a viable resuscitation (P1) or ROLE/PLE.</li>
<li>Record respiratory rate, heart rate and the MITT category for every patient, including children. In TARN data, 67.2% of under-16s lacked complete pre-hospital physiology (preprint).</li>
</ul>
<h4>Surge and blood</h4>
<ul class="tight">
<li>Critical care surge: the Severn STAG manual (regional guidance) asks units to double Level 3 ventilated capacity for at least 96 hours. Use your own network's figure.</li>
<li>No validated national hourly P1 capacity per MTC was found. The "8 P1 per hour" figure has no source and has been removed. Use <span class="ph">[local figure]</span>.</li>
<li>London Code Red algorithm 2018: Pack A is 4 units red cells and 4 FFP; Pack B is 6 red cells, 6 FFP, 2 pools cryoprecipitate and 1 pool platelets. Other networks differ.</li>
<li>Inadequate psychological support for staff was a reported gap after the 2017 attacks (Skryabina et al.).</li>
</ul>`,
  links:[["sops","Draft hospital SOPs"],["planning","Illustrative surge calculator"],["surge","Timed surge exercise (MITT mode)"]],
  quiz:[
    {q:"At Manchester Arena, how many of the 153 patients who reached hospital made their own way there as P3?",o:["14","59","95","138"],a:2,
     why:"95 self-presented as P3, 14 of them outside the local network. 59 were conveyed by NWAS. The paper does not reconcile 59 + 95 = 154 with the cohort of 153.",src:S("VR","Dark et al. EMJ 2021",U.dark)},
    {q:"Within how many hours did 138 (90%) of the Manchester patients arrive?",o:["1 hour","6 hours","12 hours","24 hours"],a:1,
     why:"\"Within 6 hours, a network of 11 regional trauma care hospitals received a total of 138 patients (90%).\"",src:S("VR","Dark et al. EMJ 2021",U.dark)},
    {q:"A patient arrives at the ED with a silver NOT BREATHING band. What does the band mean?",o:["They have been confirmed dead at the scene","They were not breathing at the scene breathing check; a healthcare practitioner must reassess for viable resuscitation (P1) or ROLE/PLE","They are P3","They were contaminated"],a:1,
     why:"NOT BREATHING simply illustrates the objective finding of a breathing check. \"The tool does not triage casualties to dead but labels as not breathing.\"",src:S("VT","NARU TST guidance; NHS England letter, 18 April 2023",U.letter)},
    {q:"How many Manchester patients needed critical care, and how many of those were at MTCs?",o:["24, of whom 19 were at MTCs","21, of whom 5 were at MTCs","93, of whom 75 were at MTCs","11, all at MTCs"],a:0,
     why:"\"19 of a total of 24 critical care admissions were for patients attending MTCs.\" 21 needed damage control surgery and 93 were admitted.",src:S("VR","Dark et al. EMJ 2021",U.dark)},
    {q:"What is the status of the figure \"8 P1 patients per hour per MTC\"?",o:["A national NHS England standard","From the STAG manual","No source found; it has been removed","From the Manchester Arena case series"],a:2,
     why:"It was not in HIP, STAG, the Greater Manchester policy or NOCA. STAG gives 2-hour P1 capacities, not an hourly cap. Use a locally agreed figure.",src:S("VR","Registry verification, parameter table",U.stag)},
    {q:"What does the Severn STAG manual ask critical care units to do in a major incident?",o:["Surge to double Level 3 ventilated capacity and hold it for at least 96 hours","Add 8 beds per hour","Transfer all patients out","Nothing; it is a pre-hospital document"],a:0,
     why:"STAG: units should \"surge to double their normal level 3 ventilated bed capacity and maintain this for a minimum period of 96 hours\". It is regional guidance, not an evidence-derived parameter.",src:S("VR","Severn Trauma Adult Guideline (STAG) manual",U.stag)},
    {q:"In the London Code Red algorithm (2018), what is in Pack A?",o:["4 units red cells and 4 units FFP","6 red cells, 6 FFP, 2 cryo, 1 platelets","4 red cells plus 1 pool platelets and 2 pools cryo","2 units red cells only"],a:0,
     why:"Pack A is 4 RBC + 4 FFP with no platelets or cryo. Pack B is 6 RBC, 6 FFP, 2 cryo and 1 pool platelets. Other networks use different packs.",src:S("VR","London Code Red algorithm 2018",U.codered)},
    {q:"In the TARN under-16 cohort, what share lacked complete pre-hospital physiology?",o:["12.1%","32.8%","67.2%","90%"],a:2,
     why:"10,171 of 15,133 (67.2%) lacked complete pre-hospital physiology; 4,962 (32.8%) had it. Those missing it were younger and had higher mortality (preprint, not peer reviewed).",src:S("VR","Chernbumroong, Vassallo et al. medRxiv 2021 (preprint)",U.medrxiv)}
  ]
},
{
  id:"m5", n:5, title:"The pre-hospital and hospital interface", short:"Scene bands, walking wounded and handover", mins:20,
  roles:["pre","ed"],
  objectives:[
    "Explain why a correct P3 at the scene can become P1 at the ED.",
    "Describe where uninjured and injured walking casualties are directed under TST.",
    "Describe who uses TST, who endorsed it, and what the 30 June 2024 deadline covers.",
    "Summarise what responders reported about working in and around the hot zone."
  ],
  content:`
<ul class="tight">
<li><b>Scene and hospital tools.</b> TST is for anyone at the scene. MITT is the clinical tool for NHS responders. Receiving hospitals re-triage on arrival.</li>
<li><b>Walking does not mean well.</b> TST stops at step 1 for anyone walking. A casualty who walked at the scene can deteriorate later; re-triage with MITT at the ED. Drill cards SIM_02 and SIM_07 practise this.</li>
<li><b>Where walking casualties go.</b> Uninjured people are directed to a place of relative safety; injured walking casualties go to a casualty collection point (CCP).</li>
<li><b>Self-presenters bypass scene triage.</b> At Manchester Arena, 95 of 153 hospital patients made their own way to hospital as P3.</li>
<li><b>Who TST is for.</b> NHS implementation was due by 30 June 2024; for non-NHS bodies TST is "recommended". The NPCC and NFCC endorsed it; they did not co-develop it.</li>
<li><b>Scene geography.</b> With other services, the first attendant identifies the multi-agency rendezvous point, access and egress, the ambulance parking point and the casualty clearing point.</li>
</ul>
<h4>Responder experience (Stephens et al., BMJ Open 2026)</h4>
<p>26 armed and unarmed police, paramedics, doctors, fire officers and survivors from five UK attacks. Unarmed police were willing to help but under-prepared, with unsuitable first-aid kits. Armed officers described "a moral challenge of stepping over injured". Responders lacked shared mental models of what was "unsafe" because of zoning. The "clipboard zone" meant retreating into process and meetings.</p>`,
  links:[["prehospital","Pre-hospital doctrine"],["drill","Casualty drill (SIM_02, SIM_07)"]],
  quiz:[
    {q:"Card SIM_02 walked at the scene (TST P3). At ED triage he can no longer walk unaided, responds to voice, RR 25, HR 108, aged 38. What is his MITT category?",o:["P3, because he walked at the scene","P2","P1, because RR 25 is outside 12–23 (and HR 108 is 100 or more)","DEAD"],a:2,
     why:"Applying MITT at the ED: no catastrophic bleeding, not walking, breathing, responds to voice, not under 2, then RR 25 is outside 12–23, giving P1. Triage is dynamic: a correct P3 at the scene can become P1 later.",src:S("VT","NHS England MITT PDF (thresholds applied to fictional card SIM_02)",U.mittpdf)},
    {q:"Under TST, where are uninjured people directed?",o:["To the nearest ED","To a place of relative safety","To the casualty collection point","To the ambulance parking point"],a:1,
     why:"\"People who are uninjured should be directed to a relative place of safety\"; injured walking casualties go to a casualty collection point.",src:S("VT","NARU TST supplementary information v1.0",U.naru)},
    {q:"What was the role of the NPCC and NFCC in TST?",o:["They co-developed and co-launched it","They endorsed it","They opposed it","They have no connection with it"],a:1,
     why:"TST was developed by an NHS England working group. Park et al. 2026 refer to endorsement by the National Fire Chiefs' Council and the National Police Chiefs' Council. They did not co-develop or co-launch it.",src:S("VT","Park, Vassallo et al. 2026",U.park)},
    {q:"What does the 30 June 2024 deadline cover?",o:["Mandatory use of TST by all police and fire services","Full implementation and replacement of previous triage methods across the NHS","The end of MITT","Retirement of JESIP"],a:1,
     why:"The deadline is for \"full implementation and replacement of previous triage methodologies across the NHS\". For non-NHS bodies, TST is \"recommended\".",src:S("VT","NHS England letter, 18 April 2023",U.letter)},
    {q:"In Stephens et al. (BMJ Open 2026), what did the \"clipboard zone\" refer to?",o:["Ambiguity over whether a zone was hot or cold","Retreating from the casualties into process and meetings","The casualty clearing point","The hospital triage point"],a:1,
     why:"A prehospital physician described the alternative to following armed officers in as going \"into that clipboard zone and start having meetings\": a retreat into process, not a label for hot/cold ambiguity.",src:S("VT","Stephens et al. BMJ Open 2026",U.stephens)},
    {q:"At Manchester Arena, of the 59 patients NWAS conveyed, how many were P1?",o:["14","21","24","59"],a:1,
     why:"NWAS transported 59 patients: P1 21, P2 24 and P3 14.",src:S("VR","Dark et al. EMJ 2021",U.dark)},
    {q:"Which locations does the first attendant identify with other emergency services, according to the aide-memoire?",o:["Multi-agency rendezvous point, access and egress, ambulance parking point and casualty clearing point","Only the nearest hospital","The hospital triage point and resus","The Survivor Reception Centre"],a:0,
     why:"The card lists: Multi-Agency Rendezvous Point; access and egress to scene; ambulance parking point; casualty clearing point.",src:AIDE},
    {q:"Paris attacks, November 2015: compared with an expert panel, how much undertriage did prehospital triage show?",o:["Less than 5%","About 10%","36%","Over 60%"],a:2,
     why:"Prehospital triage undertriaged 36% (95% CI 27-47%) and overtriaged 8% (95% CI 4-13%) of casualties, compared with an expert panel. Expect undertriage, so re-triage at the front door. (European incident, high confidence.)",src:S("VE","Paris mass casualty triage assessment. Eur J Emerg Med 2021",U.euTri)}
  ]
},
{
  id:"m6", n:6, title:"CBRN and Remove-Remove-Remove", short:"STEP 1-2-3 Plus and nerve agents", mins:25,
  roles:["pre","ed"],
  objectives:[
    "Apply STEP 1-2-3 Plus as a safety trigger.",
    "List the three Remove steps and when dry decontamination is not used.",
    "Describe primary decontamination in hospital.",
    "State the PHE/NHS England atropine regimen, its endpoint and the key differential diagnosis."
  ],
  content:`
<h4>STEP 1-2-3 Plus (aide-memoire)</h4>
<ul class="tight">
<li>STEP 1: one person incapacitated with no obvious reason. Approach using standard protocols.</li>
<li>STEP 2: two people incapacitated with no obvious reason. Approach with caution.</li>
<li>STEP 3: three or more people in close proximity, incapacitated with no obvious reason. Use caution and follow Plus: the CBRN first responder flowchart.</li>
</ul>
<h4>Remove-Remove-Remove</h4>
<ol class="tight"><li>Remove the patient from the immediate area.</li><li>Remove outer clothing if affected.</li><li>Remove the substance from the skin: dry decontamination unless the skin is itchy, burning or painful.</li></ol>
<h4>In hospital: suspected nerve agent (PHE/NHS England ED briefing, July 2018)</h4>
<ul class="tight">
<li>Primary decontamination: remove and double-bag clothing; wash skin with soap or detergent and water where time allows.</li>
<li>The most important differential is opiate overdose: give a trial of naloxone initially.</li>
<li>Atropine IV/IM/IO: 4.0–4.2 mg for adults and children aged 12 or over (50–75 microgram/kg under 12), repeated every 5 minutes until secretions are minimal and the patient is atropinised (lungs clear, HR above 80/min, adequate BP). No maximum dose is stated. <b>Pupil size must not be used as an endpoint.</b><span class="dose-warn">Check JRCALC / TOXBASE / BNF and local formulary. Not verified against JRCALC or TOXBASE.</span></li>
<li>Novichok (A-series) agents inhibit acetylcholinesterase; the inhibited enzyme ages rapidly (2–4 min), so oxime reactivation is difficult. Current therapy is atropine, oximes and benzodiazepines with supportive care including ventilation.</li>
<li>Salisbury 2018: the Skripals plus three further critically ill patients were cared for in Salisbury District Hospital's ICU. Dawn Sturgess was the only fatality of the five people poisoned.</li>
</ul>`,
  links:[["prehospital","CBRN first responder flowchart"],["sops","SOP 6: suspected nerve agent casualties"],["clinical","Clinical guides"]],
  quiz:[
    {q:"Three people in close proximity are incapacitated with no obvious reason. What does STEP 1-2-3 Plus say?",o:["Approach using standard protocols","Approach with caution using standard protocols","Use caution and follow Plus: the CBRN first responder flowchart","Wait for police before reporting"],a:2,
     why:"STEP 3 is three or more people in close proximity, incapacitated with no obvious reason: use caution and follow Plus, the CBRN first responder flowchart.",src:AIDE},
    {q:"In Remove-Remove-Remove, when is dry decontamination NOT the default?",o:["When the skin is itchy, burning or painful","When the patient is a child","When it is raining","Never; it is always dry"],a:0,
     why:"Remove the substance from skin: dry decontamination unless the skin is itchy, burning or painful.",src:AIDE},
    {q:"What is primary decontamination in the PHE/NHS England ED briefing?",o:["Hosing down with high-pressure water","Removing and double-bagging clothing; washing skin with soap or detergent and water where time allows","Giving atropine before undressing","Bleach wipes"],a:1,
     why:"\"Primary decontamination of a patient is achieved by removal and double bagging of their clothing\", with washing where time allows.",src:S("VC","PHE/NHS England ED briefing, July 2018 (safe-to-teach 19)",U.phe)},
    {q:"In suspected Novichok poisoning, what is the most important differential diagnosis?",o:["Hypoglycaemia","Opiate overdose: give a trial of naloxone initially","Anaphylaxis","Carbon monoxide poisoning"],a:1,
     why:"\"The most important differential diagnosis is suspected opiate overdose, and a trial of naloxone should be given initially.\"",src:S("VC","PHE/NHS England ED briefing, July 2018 (safe-to-teach 18)",U.phe)},
    {q:"Which of these must NOT be used as an endpoint for atropinisation?",o:["Minimal secretions","Clear lungs","Heart rate above 80/min","Pupil size"],a:3,
     why:"Atropinised means secretions minimal, lungs clear, HR above 80/min and adequate blood pressure. Pupil size \"should not be used as an end point\". Dose check: verify against JRCALC / TOXBASE / BNF and local formulary.",src:S("VC","PHE/NHS England ED briefing, July 2018 (safe-to-teach 18)",U.phe)},
    {q:"What does the PHE/NHS England briefing give as the atropine dose for adults and children aged 12 or over?",o:["1.5–10 mg, up to a 20 mg ceiling","4.0–4.2 mg IV/IM/IO, repeated every 5 minutes until atropinised, with no stated maximum","5–10 mg once only","0.5 mg once"],a:1,
     why:"4.0–4.2 mg, repeated every 5 minutes until atropinised; no maximum is stated. The \"1.5–10 mg\", \"5–10 mg\" and \"20 mg ceiling\" figures in the original report are not safe to teach. Dose check: verify against JRCALC / TOXBASE / BNF and local formulary.",src:S("VC","PHE/NHS England ED briefing, July 2018 (safe-to-teach 18)",U.phe)},
    {q:"Why does oxime reactivation work poorly after Novichok exposure?",o:["Oximes are not licensed in the UK","Acetylcholinesterase inhibited by A-agents ages rapidly (half-time about 2–4 minutes)","Novichok does not affect acetylcholinesterase","Oximes are only given orally"],a:1,
     why:"AChE inhibited by A-agents ages rapidly (ageing half-time of A-230 comparable to soman, 2–4 min), making oxime reactivation difficult.",src:S("VC","Noga & Jurowski, Arch Toxicol 2022 (safe-to-teach 16)",U.noga)},
    {q:"How many patients were cared for in Salisbury District Hospital's ICU after the March 2018 poisoning?",o:["Two: the Skripals only","Four","Five: the Skripals plus three further critically ill patients","Six"],a:2,
     why:"The two casualties from the park bench, \"along with three further critically ill patients\", were cared for in the ICU. \"4 critical ICU admissions\" in the original report was wrong.",src:S("VC","Haslam et al. BJA 2022 (safe-to-teach 14)",U.bja)}
  ]
},
{
  id:"m7", n:7, title:"Clinical priorities", short:"Smoke, burns and haemorrhage", mins:25,
  roles:["ed","pre"],
  objectives:[
    "Explain why a normal SpO2 does not exclude carbon monoxide poisoning.",
    "State the indication and adult dose for hydroxocobalamin in smoke inhalation.",
    "Describe the surgical airway technique through a burnt neck.",
    "Apply the burns cooling, fluid and severity thresholds, and the revised Baux score correctly."
  ],
  content:`
<p>From the FPHC/BBA pre-hospital burns consensus (version 2, April 2020; graded C/D, consensus or expert opinion) unless another source is given.</p>
<ul class="tight">
<li>Standard pulse oximeters cannot tell carboxyhaemoglobin from oxyhaemoglobin: CO poisoning may be present with a normal SpO2. COHb above 30% indicates severe poisoning. In confirmed CO poisoning, give 100% oxygen until COHb is normal (below 3%).</li>
<li>High-flow oxygen via a non-rebreathing mask at 10–15 L/min; without CO poisoning, aim for SpO2 94–98%.</li>
<li>Cyanide antidote plus high-flow oxygen for suspected smoke inhalation with altered mental status and/or cardiovascular instability. Hydroxocobalamin: adults 5 g IV over 15 minutes (a second 5 g may follow; maximum total 10 g); children 70 mg/kg, not exceeding 5 g (Cyanokit SmPC).<span class="dose-warn">Check JRCALC / TOXBASE / BNF and local formulary. Not verified against JRCALC or TOXBASE.</span></li>
<li>Prophylactic large-bore tracheal intubation where airway compromise is suspected. Surgical airway through a burnt neck: a longitudinal skin incision, <b>then</b> a transverse incision into the cricothyroid membrane.</li>
<li>Cool running water for 20 minutes, ideally within 10 minutes and up to 3 hours from injury; water below 20°C; no ice water. Hydrogel only if running water is unavailable.</li>
<li>Warmed fluid resuscitation for adults and children with burns above 20% TBSA; 0.9% sodium chloride for children if available. Severity bands: below 20%, 20–50%, above 50%.</li>
<li>Revised Baux = age + %TBSA + 17 if inhalation injury. It predicts probability of death, not ICU need (Osler et al. 2010).</li>
<li>Bleeding: TST step 2 is Pressure / Tourniquet / Packing, then P1. For hospital packs, see SOP 3.</li>
</ul>`,
  links:[["clinical","All 19 safe-to-teach statements"],["sops","SOPs 3 to 5"]],
  quiz:[
    {q:"A smoke-exposed casualty has an SpO2 of 99% on a standard pulse oximeter. What can you conclude about carbon monoxide?",o:["CO poisoning is excluded","Nothing reassuring: standard oximeters cannot tell carboxyhaemoglobin from oxyhaemoglobin","CO poisoning is confirmed","The reading proves the cyanide level is low"],a:1,
     why:"Standard pulse oximeters cannot differentiate COHb from oxyhaemoglobin, so CO poisoning may be present despite a normal SpO2.",src:S("VC","FPHC/BBA burns consensus v2, 2020 (safe-to-teach 1)",U.fphc)},
    {q:"What COHb level indicates severe poisoning, and what is the oxygen endpoint in confirmed CO poisoning?",o:["Above 10%; SpO2 88–92%","Above 30%; 100% oxygen until COHb is normal (below 3%)","Above 50%; stop oxygen at 94%","Above 5%; room air"],a:1,
     why:"\"A level >30% indicates severe poisoning.\" In confirmed CO poisoning, the endpoint is 100% normobaric oxygen until COHb is below 3%, not an SpO2 target.",src:S("VC","FPHC/BBA burns consensus v2, 2020 (safe-to-teach 2)",U.fphc)},
    {q:"Which smoke-exposed casualty should receive a cyanide antidote, and what is the adult hydroxocobalamin dose?",o:["Every smoke-exposed casualty; 100 mg/kg","Suspected smoke inhalation with altered mental status and/or cardiovascular instability; 5 g IV over 15 minutes","Only those with a confirmed cyanide level; 1 g","Only children; 70 mg/kg with no maximum"],a:1,
     why:"The indication is suspected smoke inhalation with altered mental status and/or cardiovascular instability. Adult dose 5 g IV over 15 min (Cyanokit SmPC). Do not teach 100 mg/kg. Dose check: verify against JRCALC / TOXBASE / BNF and local formulary.",src:S("VC","FPHC/BBA 2020; Cyanokit SmPC (safe-to-teach 6)",U.cyanokit)},
    {q:"A surgical airway is needed through a burnt neck. What technique does the consensus recommend?",o:["A transverse skin incision only","A longitudinal skin incision only","A longitudinal skin incision to expose the anatomy, then a transverse incision into the cricothyroid membrane","Needle cricothyroidotomy only"],a:2,
     why:"The consensus requires the longitudinal skin incision followed by a transverse incision into the identified cricothyroid membrane. Teaching only the longitudinal step is misleading.",src:S("VC","FPHC/BBA burns consensus v2, 2020 (safe-to-teach 5)",U.fphc)},
    {q:"Above what burn size does the consensus recommend starting fluid resuscitation in children?",o:["10% TBSA","15% TBSA","20% TBSA, the same as adults","30% TBSA"],a:2,
     why:"Initiate fluid resuscitation for adult and paediatric burns above 20% TBSA; the paediatric threshold was aligned with adults.",src:S("VC","FPHC/BBA burns consensus v2, 2020 (safe-to-teach 7)",U.fphc)},
    {q:"Which cooling statement is correct?",o:["Ice water for 5 minutes","Cool running water for 20 minutes, ideally within 10 minutes and up to 3 hours from injury, water below 20°C","Hydrogel is preferred to running water","Cooling is only useful within 10 minutes"],a:1,
     why:"Cool running water for 20 minutes, ideally within 10 minutes, up to 3 hours; water below 20°C (optimum about 12°C); ice water is not recommended. Hydrogel only if running water is unavailable.",src:S("VC","FPHC/BBA burns consensus v2, 2020 (safe-to-teach 9 and 10)",U.fphc)},
    {q:"What does the revised Baux score predict?",o:["Need for intensive care","Probability of death","Fluid volume required","Need for intubation"],a:1,
     why:"Revised Baux (age + %TBSA + 17 if inhalation injury) was derived and validated for probability of death. Presenting it as a predictor of ICU need was an error.",src:S("VC","Osler et al. J Trauma 2010 (safe-to-teach 12)",U.osler)},
    {q:"What severity bands does the consensus use for burn size?",o:["Below 10%, 10–30%, above 30%","Below 20%, 20–50%, above 50%","Below 15%, 15–40%, above 40%","Minor, moderate, major only"],a:1,
     why:"Estimate burn severity in the bands below 20%, 20–50% and above 50% TBSA, using a Lund and Browder chart.",src:S("VC","FPHC/BBA burns consensus v2, 2020 (safe-to-teach 8)",U.fphc)}
  ]
},
{
  id:"m8", n:8, title:"Lessons from UK incidents", short:"What the verified record shows", mins:25,
  roles:["ed","pre","edu"],
  objectives:[
    "Use corrected figures from ten UK incidents and recognise the common errors.",
    "Recognise that early casualty figures are snapshots.",
    "Distinguish simulation results from real-incident data.",
    "Summarise what staff and responders reported after the 2017 attacks."
  ],
  content:`
<ul class="tight">
<li><b>Manchester Arena, 2017.</b> 22 victims died. The 20 who died at the scene include the bomber, so 19 victims died at the scene and 3 in hospital during early resuscitation. 150 of the 153 hospital patients survived to day 30.</li>
<li><b>London Bridge, 2017.</b> 48 people were taken to five London hospitals. King's admitted 14 (8 in critical care); the Royal London admitted 12 (6 critical). Calling all 26 "critical" was an error: 21 of the 36 still in hospital were critical.</li>
<li><b>Croydon, 2016.</b> LAS took 51 people to hospital: 31 to Croydon University Hospital and 20 to St George's. St George's said 4 of its 20 were seriously injured and 16 minor, so the MTC took many minor cases too.</li>
<li><b>Westminster, 2017.</b> Casualties went to St Thomas', King's, St Mary's, the Royal London and Chelsea and Westminster.</li>
<li><b>Southport, 2024.</b> Early reporting said 5 children and 2 adults were critical; later sources say 8 (6 children and both adults). Seven children went to Alder Hey.</li>
<li><b>Simulation is not incident data.</b> Timings of 40.5 s per casualty and 1,377 s come from one simulated exercise, not from any real attack.</li>
<li><b>European incidents.</b> Seven European attacks, from Madrid 2004 to Barcelona 2017, are in the incident database. Each has a confidence level, sources for every medical fact, and caveats where sources disagree. See the European lessons there.</li>
<li><b>Staff experience.</b> Skryabina et al. found gaps in blast-injury protocols, communication and psychological support among hospital staff.</li>
</ul>`,
  links:[["incidents","Incident database"],["europe","European incidents (Paris, Brussels, Nice, Berlin, Barcelona, Madrid, Oslo and Utøya)"],["europe-lessons","European lessons"],["sources","Review findings and corrections"]],
  quiz:[
    {q:"At Manchester Arena, \"20 died at the scene\". How many of those were victims?",o:["20","19: the 20 includes the person who detonated the device","22","23"],a:1,
     why:"\"Killed at scene: 20, including the person who detonated the device.\" 19 victims died at the scene and 3 in hospital, giving 22. \"20 + 3\" would wrongly give 23.",src:S("VI","Dark et al. EMJ 2021; Manchester Arena Inquiry Vol 2",U.emjArena)},
    {q:"After the 2017 London Bridge attack, King's College Hospital admitted 14 patients. How many were in critical care?",o:["14","12","8","6"],a:2,
     why:"NHS England (4 June 2017): King's admitted 14, 8 in critical care; the Royal London admitted 12, 6 critical.",src:S("VI","NHS England update, 4 June 2017",U.nhse17)},
    {q:"Croydon tram derailment, 2016: what did St George's (the MTC) report about its 20 patients?",o:["All 20 were critical P1s","4 were seriously injured and 16 had minor injuries","None were admitted","It received no patients"],a:1,
     why:"St George's said 4 of its 20 were seriously injured and 16 minor. An MTC can take a large share of minor cases too.",src:S("VI","St George's statement, November 2016",U.stgeorges)},
    {q:"Which hospitals received casualties after the 2017 Westminster attack?",o:["St Thomas' only","St Thomas' and King's only","St Thomas', King's, St Mary's, the Royal London, and Chelsea and Westminster","The Royal London only"],a:2,
     why:"The original report named only St Thomas' and King's. Five hospitals received casualties, so dispersal was wider than reported.",src:S("VI","Wikipedia (secondary); Southwark News",U.westWiki)},
    {q:"Southport, 2024: early reports said 5 children and 2 adults were critical, and later sources say 8. What is the teaching point?",o:["One of the sources must be fabricated","Early casualty figures are snapshots and change","Critical counts never change","Only the later figure should ever be reported"],a:1,
     why:"ITV on 30 July reported 5 children and 2 adults critical; Wikipedia (later) gives 8 critical (6 children and both adults). The verification table marks the early figure as a snapshot.",src:S("VI","ITV Granada, 30 July 2024; Wikipedia",U.itvSouthport)},
    {q:"The figures \"40.5 s per casualty\" and \"1,377 s\" for MITT were presented in the original report as real-incident data. Where do they come from?",o:["The Manchester Arena Inquiry","One simulated field exercise (Park, Vassallo et al. 2026)","London Bridge ambulance records","TARN"],a:1,
     why:"They come from a single simulated exercise at the NARU training area (one MITT run), not from Manchester, Westminster, London Bridge or Fishmongers' Hall.",src:S("VT","Park, Vassallo et al. Scand J Trauma Resusc Emerg Med 2026",U.park)},
    {q:"Skryabina et al. (EMJ 2021) surveyed hospital staff after a mass casualty terrorist incident. Which gaps did they find?",o:["Blast-injury protocols, communication and psychological support","Ballistic protocols and 36-hour shifts","Locked drug cabinets","No gaps"],a:0,
     why:"They found gaps in immediately available blast-injury protocols, communication and psychological support. \"Ballistic protocols\", \"36-hour shifts\" and \"locked drug cabinets\" could not be verified.",src:S("VT","Skryabina et al. EMJ 2021",U.skry)},
    {q:"Berlin Christmas market attack, 2016: what did the autopsies of the market victims show?",o:["Mainly penetrating injuries","Massive blunt torso, pelvic and limb trauma, often with little external sign","Mainly burns","Several preventable deaths"],a:1,
     why:"The market victims had massive blunt torso, pelvic and limb trauma with Morel-Lavallée lesions, often with little external sign (\"Casper's sign\"). No preventable deaths were found. Apparently well patients can deteriorate suddenly. (European incident, high confidence.)",src:S("VE","Buschmann C, et al. Breitscheidplatz autopsy findings. Forensic Sci Med Pathol 2020",U.euBerlin)}
  ]
}
];

// ---------------- Interactive triage trainer ----------------
// Nodes: yes/no lead to another node id or an outcome object.
const TRAINER_TOOLS = {
  TST:{name:"Ten Second Triage (TST)", note:"Additional rule: any child under 2 is automatically P1. No card here is under 2.",
    start:"walk",
    nodes:{
      walk:{q:"Walking?",d:"Uninjured: place of relative safety. Injured walking: casualty collection point.",yes:{out:"P3"},no:"bleed",
        rule:"TST step 1: anyone walking is P3."},
      bleed:{q:"Severe bleeding?",yes:{out:"P1",act:"Pressure / Tourniquet / Packing"},no:"talk",
        rule:"TST step 2: severe bleeding → Pressure / Tourniquet / Packing → P1."},
      talk:{q:"Talking?",yes:"pen",no:"breath",
        rule:"TST step 3: the response check is simply \"are they Talking?\"."},
      pen:{q:"Penetrating injury (front, back or sides)?",d:"Deliberate search: neck, chest, armpits, back, abdomen, groin and buttocks.",yes:{out:"P1"},no:{out:"P2"},
        rule:"Talking casualties get a deliberate search for penetrating injury. Found → P1; none → P2."},
      breath:{q:"Breathing?",d:"Open the airway if able, then a 10-second look, listen and feel.",yes:{out:"P1",act:"Recovery position"},no:{out:"SILVER",act:"Recovery position; CPR if resources allow"},
        rule:"TST step 4: breathing → recovery position → P1; not breathing → recovery position → NOT BREATHING."}
    },
    order:["walk","bleed","talk","pen","breath"],
    src:["NARU TST supplementary information v1.0; NHS England TST tool, April 2023",U.naru]},
  MITT:{name:"NHS Major Incident Triage Tool (MITT)", note:"Heart rate: the published tool reads \"100 or more\"; the EMJ 2022 text reads \">100\". Check your local card.",
    start:"cat",
    nodes:{
      cat:{q:"Catastrophic bleeding?",yes:{out:"P1"},no:"walk",rule:"MITT step 1: catastrophic bleeding → P1."},
      walk:{q:"Walking?",yes:{out:"P3"},no:"breathe",rule:"MITT step 2: walking → P3."},
      breathe:{q:"Breathing (after opening the airway if needed)?",d:"Children under 12 after submersion, immersion or smoke: consider 5 rescue breaths.",yes:"voice",no:{out:"DEAD"},
        rule:"Not breathing after airway opening → DEAD. MITT keeps a DEAD category."},
      voice:{q:"Responds to voice?",yes:"age",no:{out:"P1",act:"Recovery position"},rule:"No response to voice → recovery position → P1."},
      age:{q:"Aged under 2?",yes:{out:"P1"},no:"rr",rule:"Under 2 → P1."},
      rr:{q:"Breathing rate outside 12–23?",d:"Below 12, or 24 and above.",yes:{out:"P1"},no:"hr",rule:"Breathing rate outside 12–23 → P1."},
      hr:{q:"Heart rate 100 or more?",d:"Tool wording. EMJ 2022 reads \">100\".",yes:{out:"P1"},no:{out:"P2"},rule:"Heart rate 100 or more → P1; otherwise P2."}
    },
    order:["cat","walk","breathe","voice","age","rr","hr"],
    src:["NHS England MITT, April 2023; Vassallo et al. EMJ 2022",U.mittpdf]}
};
// Truth for each fictional card at each decision node, with the evidence from the card.
const TRAINER_FACTS = {
  SIM_01:{TST:{walk:[0,"Not walking: bilateral lower-limb fragment wounds."],bleed:[1,"Pulsatile right femoral bleeding."]},
          MITT:{cat:[1,"Pulsatile femoral bleeding is catastrophic bleeding."]}},
  SIM_02:{TST:{walk:[1,"At the scene he walked out of the venue."]},
          MITT:{cat:[0,"No bleeding."],walk:[0,"At ED triage he can no longer walk unaided."],breathe:[1,"Breathing (tachypnoeic)."],voice:[1,"Talking; GCS 15."],age:[0,"Aged 38."],rr:[1,"RR 25 is outside 12–23 (24 and above)."]}},
  SIM_03:{TST:{walk:[0,"Lying on the pavement."],bleed:[0,"Venous ooze; no catastrophic external bleeding."],talk:[1,"Talking quietly."],pen:[1,"Deep 4 cm wound to the left side of the neck. The neck is in the search area."]},
          MITT:{cat:[0,"Venous ooze; not catastrophic."],walk:[0,"Not walking."],breathe:[1,"Breathing."],voice:[1,"Talking; GCS 14."],age:[0,"Aged 29."],rr:[0,"RR 22 is within 12–23."],hr:[1,"HR 112 is 100 or more."]}},
  SIM_04:{TST:{walk:[0,"Not walking."],bleed:[1,"Heavy bleeding from the thigh."]},
          MITT:{cat:[1,"Heavy thigh bleeding is catastrophic bleeding."]}},
  SIM_05:{TST:{walk:[0,"Not walking."],bleed:[0,"Open fracture ooze; no catastrophic bleeding."],talk:[0,"Groaning only; not talking."],breath:[1,"Breathing on the 10-second check."]},
          MITT:{cat:[0,"No catastrophic bleeding."],walk:[0,"Not walking."],breathe:[1,"Breathing."],voice:[0,"Not responding to voice (GCS 9)."]}},
  SIM_06:{TST:{walk:[0,"Trapped; not walking."],bleed:[1,"Active bleeding from a forearm amputation."]},
          MITT:{cat:[1,"Active bleeding from a traumatic amputation."]}},
  SIM_07:{TST:{walk:[1,"At the scene he walked away from the overturned tram."]},
          MITT:{cat:[0,"No external bleeding."],walk:[0,"At ED he can no longer stand unaided."],breathe:[1,"Breathing, RR 26."],voice:[1,"Talking; GCS 15."],age:[0,"Aged 52."],rr:[1,"RR 26 is outside 12–23 (24 and above)."]}},
  SIM_08:{TST:{walk:[0,"Carried out; not walking."],bleed:[0,"No bleeding."],talk:[0,"Stridor; cannot speak."],breath:[1,"Breathing, with airway compromise."]},
          MITT:{cat:[0,"No bleeding."],walk:[0,"Not walking."],breathe:[1,"Breathing."],voice:[1,"Confused but eyes open to voice (E3). The card's answer reaches P1 at the breathing-rate step."],age:[0,"Aged 31."],rr:[1,"RR 30 is outside 12–23."]}},
  SIM_09:{TST:{walk:[0,"Collapsed."],bleed:[0,"No bleeding."],talk:[0,"Not talking."],breath:[1,"Breathing, but slow (RR 8)."]},
          MITT:{cat:[0,"No bleeding."],walk:[0,"Collapsed."],breathe:[1,"Breathing, slowly."],voice:[0,"Not responding to voice."]}},
  SIM_10:{TST:{walk:[0,"Not walking."],bleed:[0,"No visible external bleeding."],talk:[0,"Unresponsive."],breath:[0,"No breaths on a 10-second look, listen and feel after airway opening."]},
          MITT:{cat:[0,"No visible external bleeding."],walk:[0,"Not walking."],breathe:[0,"Not breathing after airway opening."]}}
};
// What the learner sees for each card in each tool (TST = at the scene; MITT = as in the drill context).
const PRESENTATION = {
  SIM_02:{TST:"8 m from an indoor IED. He walks out of the venue on his own, complaining of deafness, mild breathlessness and a 1 cm flank wound.",
          MITT:"Self-presented by taxi after walking out of the venue. At ED triage he sits down breathless and can no longer walk unaided. 1 cm flank fragment wound."},
  SIM_07:{TST:"Walks away from the overturned tram with other walking wounded.",
          MITT:"Travelled to hospital by bus with walking wounded. 45 minutes later in the ED waiting area he is pale and breathless with right-sided chest pain and can no longer stand unaided."}
};

// ---------------- Glossary ----------------
// x: expansion as given in the files; x:null means the expansion is not in the verified files ("check").
const GLOSSARY = [
  ["AChE","Acetylcholinesterase","The enzyme inhibited by nerve agents, including Novichok (A-series) agents. Enzyme inhibited by A-agents ages rapidly (2–4 min), so oxime reactivation is difficult.","VC"],
  ["AIS","Abbreviated Injury Scale","Injury severity scale used in the registry papers. The Manchester abstract writes \"AIS>3\"; the conventional serious-injury definition is AIS ≥3.","VR"],
  ["BRRT","Burn Rapid Response Team","WHO Emergency Medical Team construct: a small senior team deploying in 6–12 h to support first receiving hospitals; not expected to work on scene. Not a UK NHS structure.","VC"],
  ["BST","Burn Specialist Team","WHO Emergency Medical Team construct: arrives 48–72 h or later and stays up to about 6 weeks. Not a UK NHS structure.","VC"],
  ["CBRN","~Chemical, Biological, Radiological and Nuclear","Used for chemical incidents, including nerve agents. The \"Plus\" in STEP 1-2-3 Plus is the CBRN first responder flowchart.","D12"],
  ["CCP","Casualty Collection Point","Where injured walking casualties are directed under TST. The 2018 aide-memoire separately lists a \"Casualty Clearing Point\" among the locations the first attendant identifies.","VT"],
  ["COHb","Carboxyhaemoglobin","Standard pulse oximeters cannot distinguish it from oxyhaemoglobin. Above 30% indicates severe CO poisoning.","VC"],
  ["Code Red","London major haemorrhage algorithm (2018)","Pack A: 4 red cells + 4 FFP. Pack B: 6 red cells, 6 FFP, 2 cryo, 1 platelets. Other networks differ.","VR"],
  ["CSCATTT","Command and control, Safety, Communications, Assessment, Triage, Treatment, Transport","Order of priorities at the scene for the NHS. The 2018 card's \"Sieve & Sort\" triage entry is superseded by TST and MITT.","D12"],
  ["DEAD (MITT)","MITT category","Not breathing after airway opening. MITT keeps a DEAD category; TST does not.","VT"],
  ["HART","~Hazardous Area Response Team","Specialist ambulance asset named in the source material. Whether such teams carry hydroxocobalamin or atropine is service-specific.","VC"],
  ["ISS","~Injury Severity Score","Sum of squares of the highest AIS in each of the three most severely injured body regions (six regions; set to 75 if any AIS is 6).","VR"],
  ["JESIP","~Joint Emergency Services Interoperability Principles","Principles for joint working on the aide-memoire: co-locate, communicate, co-ordinate, jointly understand risk, shared situational awareness.","D12"],
  ["JRCALC","UK Ambulance Services Clinical Practice Guidelines","Subscription resource. Not accessed when this site was compiled, so no dose here is verified against it.","VC"],
  ["MERIT","~Medical Emergency Response Incident Team","Specialist pre-hospital asset named in the source material. Scope varies by service.","VC"],
  ["METHANE","Major incident, Exact location, Type of incident, Hazards, Access, Number of casualties, Emergency services","Structure for a major incident report.","D12"],
  ["MITT","NHS Major Incident Triage Tool","NHS responders' rapid primary triage tool (April 2023). Uses breathing rate and heart rate; same thresholds at all ages; keeps DEAD; no Pit Stop pathway.","VT"],
  ["MPTT-24","~Modified Physiological Triage Tool-24","The triage tool from which MITT's physiological thresholds were derived.","VT"],
  ["MTA","~Marauding Terrorist Attack","Used in the training suite's archetype names for sharp-force and vehicle attacks.","SUITE"],
  ["MTC","Major trauma centre","Hospital in a regional trauma network. Greater Manchester's network listed 3 MTCs alongside trauma units and local emergency hospitals; 75 (49%) of the 153 Manchester hospital patients attended an MTC.","VR"],
  ["NARU","~National Ambulance Resilience Unit","Publisher, with NHS England, of the TST supplementary information (v1.0, April 2023).","VT"],
  ["NISS","~New Injury Severity Score","Sum of squares of the three highest AIS scores regardless of body region. Always ≥ ISS by construction; a higher NISS says nothing about accuracy.","VR"],
  ["NMTR","National Major Trauma Registry","Run by NHS England's Outcomes and Registries Programme. Launched April 2024, taking over from TARN.","VR"],
  ["NOT BREATHING","TST band (black on silver)","Objective finding of the TST breathing check, not a declaration of death. A healthcare practitioner later reassesses for viable resuscitation (P1) or ROLE/PLE.","VT"],
  ["P1 / P2 / P3","Priority One / Two / Three","Triage priorities. TST bands: P1 white on red, P2 black on yellow, P3 white on green. All living people involved are at least P3 under MITT.","VT"],
  ["Remove-Remove-Remove","Initial actions for a contaminated casualty","Remove from the area; remove outer clothing if affected; remove the substance from skin (dry decontamination unless skin is itchy, burning or painful).","D12"],
  ["Revised Baux","Age + %TBSA + 17 if inhalation injury","Derived and validated to predict probability of death after burns, not ICU need.","VC"],
  ["ROLE / PLE","~Recognition of Life Extinct / Pronouncing Life Extinct","Outcome a healthcare practitioner may reach when reassessing a casualty with a NOT BREATHING band.","VT"],
  ["RVP","~Rendezvous Point","Location given under Access in METHANE. The aide-memoire also lists a \"Multi-Agency Rendezvous Point\".","D12"],
  ["SRC","Survivor Reception Centre","Former route for the uninjured, removed from MITT. All living people involved are at least P3.","VT"],
  ["STAG","Severn Trauma Adult Guideline","Severn network manual. Asks critical care units to double Level 3 ventilated capacity for at least 96 hours.","VR"],
  ["STEP 1-2-3 Plus","Safety triggers for responders","One person: standard approach. Two: caution. Three or more in close proximity with no obvious reason: caution and the CBRN flowchart.","D12"],
  ["TARN","~Trauma Audit and Research Network","Trauma registry whose 2008–2017 data underpin the triage studies cited here. It moved to the NHS England NMTR in April 2024.","VR"],
  ["TBSA","~Total Body Surface Area","Burn size measure. Fluid resuscitation above 20% for adults and children; severity bands below 20%, 20–50%, above 50%.","VC"],
  ["TOXBASE","~National Poisons Information Service online database (not an acronym)","Subscription toxicology resource. Not accessed when this site was compiled.","VC"],
  ["TST","Ten Second Triage","NHS England / NARU triage tool for anyone at the scene (v1.0, April 2023). Uses no physiological measurements.","VT"]
];

// ---------------- Facilitator materials ----------------
const SESSION_PLANS = [
  {id:"huddle", title:"15-minute huddle: TST and MITT refresher", mins:15, who:"Any ED or ambulance team at a shift handover",
   objectives:["Recall the TST questions and bands in order.","Recall the MITT steps, including the heart rate wording flag.","Know what a scene band means when it arrives at the ED."],
   timings:[["0–2 min","Introduce the session. Read out the training-only disclaimer."],["2–6 min","Walk through the TST quick-reference card."],["6–10 min","Walk through the MITT quick-reference card. Point out the heart rate wording discrepancy."],["10–14 min","Triage two casualty cards together: SIM_02 (walked at scene, deteriorates at ED) and SIM_10 (not breathing)."],["14–15 min","Close: where the trust major incident plan is kept <span class=\"ph\">[location]</span>."]],
   materials:["TST and MITT quick-reference cards (Printables)","Casualty cards SIM_02 and SIM_10","Trust major incident plan <span class=\"ph\">[location]</span>"],
   debrief:["What does a silver NOT BREATHING band mean when it arrives in the ED?","Why do we re-triage people who walked at the scene?","What does our local MITT card say about a heart rate of exactly 100?"]},
  {id:"teach60", title:"60-minute teaching session: mass casualty triage and the front door", mins:60, who:"ED doctors and nurses, paramedics, students",
   objectives:["Use METHANE and CSCATTT to structure an incident.","Apply TST and MITT correctly to fictional casualties.","Plan for self-presenters, re-triage and surge using the Manchester Arena case series."],
   timings:[["0–5 min","Welcome, objectives, training-only disclaimer, ground rules for a safe learning space."],["5–15 min","Module 1: METHANE, JESIP principles and CSCATTT."],["15–30 min","Modules 2 and 3: TST and MITT. Project the triage trainer and work two cards as a group."],["30–45 min","In pairs: the timed surge exercise (TST mode, then MITT mode). Compare debriefs."],["45–55 min","Module 4: what Manchester Arena showed about arrivals, self-presenters and critical care."],["55–60 min","Debrief questions. Ask learners to complete the module knowledge checks."]],
   materials:["Projector and this site","Printed TST and MITT quick-reference cards","Printed casualty cards (one set per pair)","Trust major incident plan <span class=\"ph\">[location]</span>"],
   debrief:["Which casualty did you find hardest to triage, and why?","Where did you over-triage or under-triage in the surge exercise?","How would our front door cope with a large self-presenting stream?","What one thing will you check in our local plan this week?"]},
  {id:"tabletop", title:"Tabletop exercise (about 90 minutes): Exercise Harbour Light", mins:90, who:"ED leadership, hospital command, critical care, theatres, blood bank, emergency preparedness",
   objectives:["Walk through the hospital response to a fictional mass casualty incident.","Test the front-door triage and re-triage process against the draft SOPs.","Identify local gaps, owners and actions."],
   timings:[["0–10 min","Briefing: fictional scenario, roles, rules, training-only disclaimer."],["10–70 min","Injects 1 to 8, about 7 minutes each, with discussion."],["70–85 min","Structured debrief against the objectives."],["85–90 min","Agree actions, owners and dates. Complete the hot-debrief template."]],
   materials:["Printed injects (Teach page)","Casualty cards","Draft SOPs 1 to 6","Trust major incident plan and action cards <span class=\"ph\">[location]</span>","A scribe and an action log"],
   debrief:["Did everyone arriving pass through a single triage point?","Who would have re-triaged the P3 area, and how often <span class=\"ph\">[local interval]</span>?","What did we not know about our own capacity?","Which actions need an owner before the next exercise?"]}
];
const INJECTS = [
  ["Inject 1 · T+0","A METHANE message arrives from the ambulance service: major incident declared; fictional indoor venue in the city centre; an explosion; hazards: possible secondary device, unconfirmed; numbers of casualties not yet known; police, fire and ambulance on scene.","Who receives this message and who is told next <span class=\"ph\">[local number / role]</span>? What does our plan say happens first?"],
  ["Inject 2 · T+10","People with minor injuries begin arriving at the ED by car and on foot before any ambulance.","Where do they go? Is there a single triage point yet? Teaching point: at Manchester Arena, 95 of 153 hospital patients made their own way to hospital."],
  ["Inject 3 · T+20","In the waiting area, a man who walked in sits down breathless and can no longer walk unaided (casualty card SIM_02).","Re-triage him with MITT. What category, and why? Who checks the P3 area, and how often?"],
  ["Inject 4 · T+30","The first ambulance brings a 14-year-old with a tourniquet on the right thigh (casualty card SIM_01).","Where do children go <span class=\"ph\">[paediatric area]</span>? Who makes the major haemorrhage call <span class=\"ph\">[local name]</span>, using which identifier?"],
  ["Inject 5 · T+40","A patient arrives with a silver NOT BREATHING band (casualty card SIM_10).","What does the band mean? Who reassesses, and where?"],
  ["Inject 6 · T+50","Blood bank calls hospital command: several major haemorrhage calls are running at once.","When is each call stood down? How often does blood bank report stock <span class=\"ph\">[interval]</span>? Who requests emergency stock?"],
  ["Inject 7 · T+60","Critical care asks how far it should surge.","What is our network's Level 3 surge figure <span class=\"ph\">[local figure]</span>? For comparison only, the Severn STAG manual asks units to double Level 3 ventilated capacity for at least 96 hours."],
  ["Inject 8 · T+70","A member of staff is visibly distressed after treating a child.","What support is available now and after stand-down <span class=\"ph\">[local support service]</span>? Teaching point: inadequate psychological support was a reported gap after the 2017 attacks (Skryabina et al.)."]
];
