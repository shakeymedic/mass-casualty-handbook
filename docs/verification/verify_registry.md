# Verification: registry, Manchester Arena case series, Vassallo triage studies, parameter table

Sources read:
- **[EMJ21]** Dark P, et al. Healthcare system impacts of the 2017 Manchester Arena bombing. *Emerg Med J* 2021;38(10):746–55. Full text read via PMC (PMC8461451). https://doi.org/10.1136/emermed-2019-208575
- **[ECM21]** Malik NS, et al. The BCD Triage Sieve outperforms all existing major incident triage tools. *EClinicalMedicine* 2021;36:100888. Only the PubMed abstract was read. https://pubmed.ncbi.nlm.nih.gov/34308306/ ; https://doi.org/10.1016/j.eclinm.2021.100888
- **[EMJ24]** Xu Y, Malik N, et al. (Vassallo J is a co-author). Triage in major incidents: development and external validation of novel machine learning-derived primary and secondary triage tools. *Emerg Med J* 2024;41(3):176–83. Full text read via PMC (PMC10894820). https://doi.org/10.1136/emermed-2022-212440
- **[MRX21]** Chernbumroong S, Vassallo J, et al. Paediatric major incident triage and the use of machine learning techniques… medRxiv 2021.12.10.21267587. Full text read. https://www.medrxiv.org/content/10.1101/2021.12.10.21267587v1.full
- **[MITT]** Vassallo J, Moran C, Cowburn P, Smith J. New NHS prehospital major incident triage tool: from MIMMS to MITT. *Emerg Med J* 2022;39(11):800. https://emj.bmj.com/content/39/11/800
- **[HIP]** Breeze J, et al. Injury modelling for strategic planning in protecting the national infrastructure from terrorist explosive events. *BMJ Mil Health* 2023;169:565–9. https://militaryhealth.bmj.com/content/169/6/565.full.pdf
- **[STAG]** Severn Trauma Adult Guideline (STAG) Manual, North Bristol NHS Trust. https://www.nbt.nhs.uk/sites/default/files/document/STAG%20Manual%20-%20Online%20Version_0.pdf
- **[GM]** Greater Manchester Major Trauma Network, Adult Patient Pathways and Transfer Policy. https://www.gmccmt.org.uk/wp-content/uploads/2024/09/Patient-Pathways-and-Transfer-Policy-.pdf
- **[CR]** London Code Red algorithm 2018 (C4TS/QMUL). https://www.c4ts.qmul.ac.uk/downloads/code-red-algorithm2018.pdf
- **[NHSE]** NHS England, National Major Trauma Registry page. https://www.england.nhs.uk/outcomes-and-registries-programme/nmtr/
- **[ITP]** ITPro, 30 June 2023, on the University of Manchester cyber incident. https://itpro.com/security/data-breaches/nhs-data-leak-raises-serious-questions-about-manchester-university-cyber-attack
- **[NOCA]** NOCA (Ireland), Major Trauma Audit National Report 2022. https://d7g406zpx7bgk.cloudfront.net/x/a077abe57d/major-trauma-audit-national-report-2022-final.pdf

---

## 1. Manchester Arena registry case series (report lines 16–27, 282–389)

| Claim | Verdict | What the source says | Source URL |
|---|---|---|---|
| 153 patients attended ED: 109 adults and 44 children | Confirmed | "153 patients (109 adults and 44 children)". In the paper, children means under 16 years. | https://doi.org/10.1136/emermed-2019-208575 |
| 71.2% adult / 28.8% paediatric | Confirmed (arithmetic) | Table 1 gives 109 (71%) and 44 (29%). | same |
| 138 patients (90.2%) received within 6 h by a network of 11 regional hospitals | Confirmed | "Within 6 hours, a network of 11 regional trauma care hospitals received a total of 138 patients (90%)". Table 1 lists 11 GMMTSN hospitals (3 MTC, P-MTC, 3 TU, 4 LEH). Note that 14 patients presented outside GMMTSN. | same |
| 75 patients (49.0%) presented to an MTC | Confirmed (with a caveat) | The abstract says 75 (49%). Table 1 uses MTC n=74, so the source is internally inconsistent. | same |
| NWAS conveyed 59 (21 P1, 24 P2, 14 P3); 35.6/40.7/23.7% | Confirmed | "59 patients were transported by NWAS … P1 (n=21); P2 (n=24) and P3 (n=14)". The percentages are correct arithmetic. | same |
| 95 self-presenters, "Categorised P3", "bypassed ambulance scene triage entirely", 62.1% | Partly correct | "An additional P3 patients (n=95) made their own way to hospitals … including 14 patients presenting outside of the GMMTSN". Note that 59 + 95 = 154, which is not 153; the scene count and the TARN count do not reconcile exactly. Table 1 mode of arrival: ambulance 59, car 57, walked <5, not recorded 33. | same |
| 93 admitted (60.8%) | Confirmed | "Ninety-three patients (61%) required hospital admission". | same |
| 24 critical care admissions (15.7%), 19 at MTCs | Confirmed | "19 of a total of 24 critical care admissions were for patients attending MTCs". | same |
| 21 (13.7%) needed emergency damage control surgery | Confirmed | "21 (14%) requiring emergency damage control surgery". | same |
| "Individual operations lasting up to 14 hours" | Could not verify | This is not in the EMJ paper. | same |
| "Majority of the 21 damage control surgeries" went directly to MTCs | Could not verify | The paper does not break down where the 21 operations were done. It says only that the most severely injured were "more likely provided by specialists at an MTC". | same |
| 5 interhospital transfers in the first 24 h (2 children, 3 adults), mainly MTC to MTC | Confirmed | "a small number (two children and three adults) … secondary interhospital transfer in the first 24 hours, predominantly between MTCs". | same |
| 150/153 (98%) survived to day 30; 3 deaths during early ED resuscitation | Confirmed | "Three fatalities occurred during early resuscitative treatment and 150 (98%) survived to day 30". | same |
| Whole cohort: median ISS 1 (IQR 1–10), NISS 2 (IQR 1–14) | Confirmed | Given verbatim in the abstract and Table 1. | same |
| MTC cohort: median ISS 7.5 (IQR 1–14), NISS 10 (IQR 3–22) | Confirmed | Given verbatim. Table 1 uses n=74. | same |
| "20 dying at the scene alongside the perpetrator, and 3 dying during early ED resuscitation" giving 22 victim deaths | **Incorrect** | "Twenty people died at scene, **including** the person that detonated the IED." That is 19 victims at the scene plus 3 in the ED, which gives 22. The report's wording also does not add up: 20 + 3 = 23. Later, "the 20 immediate on-scene victim deaths" repeats the error. | same |
| Presented as "the single most comprehensive, **prospectively validated** registry dataset" | Partly correct / overstated | The TARN registry was "deployed" after the event as an emergency response. ED vital signs had "high levels of missing recorded values", so triage categories could not be reviewed robustly. Scene triage data could not be linked to hospital records. Nothing in the paper describes the dataset as "validated". | same |
| "AIS > 3" used as the definition of severe / major life-threatening injury | Partly correct | The EMJ abstract does say "Abbreviated Injury Scale>3". However, the conventional definition of serious or major injury is AIS ≥3, and the paper's Table 1 header reads "AIS3", where the ≥ symbol has apparently been lost in rendering. AIS >3 would mean AIS 4–6 only. The report should use **AIS ≥3**, or state that it is copying the abstract's wording. | same |
| ISS definition: sum of squares of the highest AIS in each of the three most severely injured body regions. NISS: sum of squares of the three highest AIS scores regardless of region | Confirmed (standard definitions) | These are the standard definitions (Baker 1974; Osler 1997). One caveat: ISS uses 6 body regions and is set to 75 if any AIS is 6. The EMJ paper uses both scores but does not define them in its text. | same |
| "ISS systematically underestimates … NISS captures … far more accurately" | Partly correct / interpretive | NISS ≥ ISS for every patient by construction, so a higher median NISS shows nothing about accuracy. The EMJ paper makes no claim of better accuracy. | same |
| Inquiry figures (940 present, 337 in City Room, 237 injured, etc.) | Not checked (outside this scope) | — | — |

## 2. TARN/NMTR registry figures and the Vassallo-group studies (lines 513–570)

| Claim | Verdict | What the source says | Source URL |
|---|---|---|---|
| N=195,709 adults (≥16 y), 2008–2017; 22,144 (11.3%) P1 | Confirmed (abstract) | "195,709 patients were included … 22,144 (11·3%) patients fulfilled intervention-based criteria for P1". | https://pubmed.ncbi.nlm.nih.gov/34308306/ |
| P1 vs P2: mortality 12.8% vs 5.0%; ICU 52.4% vs 5.0%; median ISS 21 vs 9 | Confirmed (abstract) | Given verbatim. | same |
| Registry median ISS 9 (IQR 9–17); 97.0–97.1% blunt; mortality 5.7–7.0% | Confirmed | 2021: mortality 7.0%, ISS 9 (9–17), 97.1% blunt. 2024 training set: mortality 5.7%, 97.0% blunt, ISS 9 (9–16). The ranges in the report combine the two papers. | ECM21 abstract; https://doi.org/10.1136/emermed-2022-212440 |
| N=193,261 with 21,878 P1 (11.3%) in the 2024 ML study | Confirmed | "After exclusions, the sample consisted of 193 261 patients, of which 21 878 patients (11.3%) fulfilled P1 criteria." | https://doi.org/10.1136/emermed-2022-212440 |
| P1 defined by interventions "such as endotracheal intubation, tube thoracostomy, **massive blood transfusion**, or emergency damage control surgery" | Partly correct | The P1 criteria are: advanced airway; chest tube within 2 h; haemorrhage-controlling, neurological or vascular surgery to head, neck or torso within 4 h; limb-conserving surgery; escharotomy; IV vasopressors; arrival with uncontrolled haemorrhage; CPR. **Massive transfusion is not a criterion.** | EMJ24 Table 1 |
| 456 models, narrowed to 5 decision trees (primary) and 29 XGBoost (secondary) | Confirmed | Given verbatim. | EMJ24 |
| Training n=135,282, test n=57,979 | Confirmed | 70:30 split by date: training to 14 Jul 2016, test from 15 Jul 2016 to 31 Dec 2017. | EMJ24 |
| All 456 models beat existing tools on sensitivity and AUC | Confirmed (internal test set) | "Four hundred fifty-six models … demonstrated greater sensitivity and AUC than all existing tools." | EMJ24 |
| Models were "tested on n=57,979 internal TARN patients plus external JTTR military combat cohorts" | Partly correct | Only the **secondary** XGB tool was externally validated, on 5,956 JTTR patients (sensitivity 97.6%, overtriage 57.5%, AUC 0.778). The primary tool could **not** be validated because GCS subcomponents were missing. | EMJ24 |
| BCD Sieve 70.4% sensitivity in 16–64-year-olds | Confirmed (abstract) | 2021 paper: 70.4% sensitivity, overtriage **70.9%**, AUC 0.680 (printed as "0·068" in the abstract) [95% CI 0.676–0.684]. | ECM21 |
| BCD Sieve "68.0% sensitivity with 80.8% overtriage in the full adult test set" | Partly correct | The 2024 test set gives **68.2%** (66.9–69.4), overtriage 80.8%, AUC 0.688. The text in one place rounds this to "68%". | EMJ24 Table 3 |
| NARU Sieve: 44.9% sensitivity, 56.4% overtriage, AUC 0.666 (0.662–0.670) | Partly correct (misattributed) | The figures match the 2021 abstract, but there they are for **16–64-year-olds only**, not all adults. In the 2024 all-adult test set, NARU scored 43.0% sensitivity, 71.8% overtriage and AUC 0.657. Also, in the 16–64 group NARU had *lower* overtriage than BCD (56.4% vs 70.9%), so "substantially outperforming" applies only to sensitivity. | ECM21 abstract; EMJ24 |
| SHAP: breathing status first (mean \|SHAP\| 1.2), chest injury second, GCS Verbal third; 13 input variables | Confirmed | "By far, the most important variable was breathing status (mean Shapley value 1.2), followed by presence of a chest injury and GCS Verbal score." The paper uses 13 input variables. | EMJ24 |
| Age >65 negatively predictive of P1 | Confirmed | Given verbatim. The authors attribute this to confounding by low falls ("poor surrogate for elders injured in an MI"). | EMJ24 |
| Falls <2 m 56.3% (training) and 62.7% (test); median age 64.3 vs 70.9 | Confirmed (but misframed) | These are **training-set vs test-set** values (p<0.001), not a range across registries. | EMJ24 Table 2 |
| "Patients aged ≥65 constitute the majority of routine admissions due to low-level falls (56.3% … 62.7%)" | **Incorrect framing** | 56.3% and 62.7% are the share of **all adults** whose mechanism was a fall <2 m. They are not the share of over-65s, and they say nothing about over-65s being a majority. Patients aged ≥65 were 48.8% of the training set (not a majority) and 57.3% of the test set. | EMJ24 Table 2 |
| Lines 16–27: TARN cohorts have "median age 64.3 to 70.9" and falls "56.3% to 62.7% of all admissions" | Partly correct | Same issue as above. These are two time-split subsets of the 2008–2017 adult TARN data after exclusions for missing variables. They do not describe NMTR, and they do not describe all admissions. | EMJ24 |
| Elderly vs 16–64: sensitivity 5.8–14.6% lower, overtriage 11.5–33.2% higher | Confirmed | Given verbatim for existing tools in the 2024 test set. Strictly these are percentage points. | EMJ24 |
| Paediatric N=15,128 | **Incorrect (minor)** | "15133 patients aged under 16 met inclusion criteria". | https://www.medrxiv.org/content/10.1101/2021.12.10.21267587v1.full |
| n=4,962 complete (32.8%); 67.2% missing | Confirmed | "4962 (32·8%) patients had complete pre-hospital physiological data". 10,171 (67.2%) were missing. | MRX21 |
| Excluded vs included: median age 3.9 vs 11.9 y; mortality 3.1% vs 1.1% (p≤0.0001); median ISS identical (9) | Confirmed | Given verbatim. The paper says median ISS was "unchanged". The report's "3x higher mortality" is about 2.8×. | MRX21 |
| "Paramedics omit vital sign recording in the youngest, sickest" (missing not at random) | Interpretive | The paper shows those with missing data were younger and had higher mortality. The mechanism is the report's own inference. | MRX21 |
| LASSO M2 adds a lower age threshold; 88.8% sensitivity, 11.2% undertriage | Confirmed (preprint, not peer reviewed) | M2 is M1 plus "a lower age threshold (two years) as an automatic trigger for Priority One". Sensitivity 88.8% (85.5–91.5), undertriage 11.2%, overtriage 57.5%. This is a medRxiv preprint. | MRX21 |
| Line 517: parameters "derived from TARN and NMTR (N=193,261 to N=195,709 …; N=4,962 paediatric)" | Partly correct | All three cohorts are TARN 2008–2017. None of them uses NMTR data. | ECM21, EMJ24, MRX21 |

## 3. TARN to NMTR transition

| Claim | Verdict | What the source says | Source URL |
|---|---|---|---|
| University of Manchester cyberattack in June 2023 | Confirmed | ITPro (30 Jun 2023): the university disclosed "in early June" a cyber incident affecting trauma and terror-attack patient research data. The NOCA report's timeline says "JUNE 2023", although its text elsewhere also says July and April 2023. | https://itpro.com/security/data-breaches/nhs-data-leak-raises-serious-questions-about-manchester-university-cyber-attack ; NOCA |
| TARN became the NHS England NMTR in April 2024 | Confirmed | NHS England: development began in July 2023, the service launched in April 2024, and "Since April 2024, data has been submitted…". NOCA: "APRIL 2024 TARN migrated to NMTR platform". | https://www.england.nhs.uk/outcomes-and-registries-programme/nmtr/ |
| Transition happened "following" the cyberattack (implied causation) | Partly correct | NHS England says the university "took a strategic decision to transfer ownership", and its page does not mention the cyber incident. NOCA ties the suspension of data collection (until April 2024) to the cyberattack. The timing is right, but causation is not stated by NHS England. | NHSE; NOCA |
| "NHS England Digital National Major Trauma Registry" | Partly correct | The registry is run by NHS England's Outcomes and Registries Programme. "NHS England Digital" is not the name the source uses. | NHSE |

## 4. Parameter table (lines 572–646)

| Claim | Verdict | What the source says | Source URL |
|---|---|---|---|
| MITT thresholds RR <12 or ≥24 | Confirmed | "Respiratory Rate <12 or ≥ 24". | https://emj.bmj.com/content/39/11/800 |
| MITT HR ≥100 | **Incorrect (minor)** | "Heart Rate >100". | same |
| Labelled a "Secondary Triage" tool | **Incorrect** | MITT is "a rapid **primary** triage assessment", replacing both the NASMeD Sieve and the Triage Sort. | same |
| Thresholds "derived via logistic regression on TARN data" | Partly correct | The HR and RR thresholds came from MPTT-24 and an adult logistic-regression study. The EMJ piece cites TARN only for the under-2 rule. | same |
| "Applies uniformly to all adults and children aged >2 years, eliminating separate paediatric triage tape" | Partly correct | MITT uses "the same physiological thresholds in both adult and paediatric patients" across "the entire age range", with "automatic categorisation of those under 2 years as Priority One". It does replace the Paediatric Triage Tape, but at primary triage, not secondary. | same |
| SBP <110 mmHg in penetrating trauma means direct triage to MTC resus | Could not verify | Not found in the GM or Severn network documents. The GM policy uses SBP <110 only as a frailty or older-patient prompt; STAG uses SBP <90. The table cell is also garbled ("[span_312](start_span"). | GM PDF; STAG PDF |
| Dstl HIP "validated on 7/7 London & 2017 Manchester Arena" | Partly correct | The abstract says HIP "has been validated using clinical data from the '7/7'". Manchester is described as the first event against which it "could potentially be validated", and matching it required raising fragment velocity and number. Further validation is needed for other charge sizes and densities. | https://militaryhealth.bmj.com/content/169/6/565.full.pdf |
| HIP outputs triage states (P1/P2/P3) and "Depth of Penetration" | **Incorrect / unverified** | HIP produces region scores extrapolated from AIS and an overall severity score. It "does not currently" output triage categories; the authors recommend adding them, e.g. based on the NARU Sieve. The paper did not mention DoP. | same |
| 8 P1 patients/hour per MTC | Could not verify | Not in HIP, STAG, GM or NOCA. STAG gives *2-hour* P1 capacities (e.g. Southmead 20, BRI 10, BRHC 10), not an hourly cap. | STAG |
| Level 3 ICU at 200% (double) for ≥96 hours | Confirmed (regional guidance) | STAG: units should "surge to double their normal level 3 ventilated bed capacity and maintain this for a minimum period of 96 hours". This is the Severn network manual, not an evidence-derived parameter. | STAG |
| Code Red: 1:1 RBC:FFP in batches of 4, plus 1 pool platelets and 2 pools cryo; benchmark per case 6 RBC / 6 FFP / 2 cryo + TXA | Partly correct (conflated) | London Code Red 2018: **Pack A = 4 RBC + 4 FFP**, with no platelets or cryo. **Pack B = 6 RBC, 6 FFP, 2 cryo, 1 pool platelets**. TXA is 1 g over 10 min. The report wrongly attaches the platelets and cryo to the 4-unit batch, and presents Pack B's contents as an empirical "benchmark consumption per case". This is the London protocol; other networks differ. | https://www.c4ts.qmul.ac.uk/downloads/code-red-algorithm2018.pdf |

## 5. Use of the "Major Trauma Audit National Report 2022" (works cited no. 8)

| Claim | Verdict | What the source says | Source URL |
|---|---|---|---|
| Cited as a UK registry source | **Misattributed** | This is Ireland's **NOCA** Major Trauma Audit, not a UK (TARN/NMTR) report. It covers 3,323 Irish patients in 2022, median age 65, and 61% falls <2 m (66% "low falls" in the Executive Summary). The report has no inline citations, so it is unclear which claims depend on it. It is probably the source for the cyberattack and NMTR timeline, which it covers from an Irish perspective. None of the report's numeric UK parameters (64.3/70.9, 56.3/62.7, P1/hour, ICU surge) come from it. | https://d7g406zpx7bgk.cloudfront.net/x/a077abe57d/major-trauma-audit-national-report-2022-final.pdf |
