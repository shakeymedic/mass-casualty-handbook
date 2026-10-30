// ==== Data reused verbatim from UK_Mass_Casualty_Training_Suite_corrected.html ====
        // 1. INCIDENT REGISTRY (2016–2024). Figures checked against sources on 16 October 2026.
        // Each incident carries `checks`: [status, note] pairs shown in the UI.
        // status: "ok" = confirmed in a source read; "partial" = partly correct / snapshot; "unverified" = could not verify.
        const INCIDENTS_MASTER = [
            {
                id: "INC_01",
                name: "Croydon Tram Derailment",
                date: "2016-11-09",
                location: "Sandilands Junction, Croydon, London",
                archetype: "ARCH_03",
                mechanism: "Tram overturned on a sharp curve. Bombardier CR4000 tram (three sections: two end vehicles and a central articulation unit) entered the 20 km/h curve at about 73 km/h; overturning would occur above about 49 km/h (RAIB). 80 km/h was the tram's maximum and the line speed before the tunnels, not its speed into the curve.",
                casualties: "69 passengers (70 on board including the driver). 7 passengers fatally injured (aged 19–63; six men, one woman); ejection was the main cause. RAIB: 19 serious and 43 minor injuries (para 6, includes the driver; para 64 says 42).",
                dispersal: "LAS: 51 taken to hospital in total — 31 to Croydon University Hospital (CUH) and 20 to St George's (MTC). St George's reported 4 of its 20 seriously injured and 16 minor. RAIB: the injured travelled 'by bus and ambulance'.",
                injuries: "High-energy blunt and crush trauma (injury pattern not individually verified). Tram drivers made the first opening in the windscreen and the fire service enlarged it; the last trapped passenger was freed at about 08:16.",
                checks: [
                    ["ok", "Date, CR4000 three-section tram, ~73 km/h into 20 km/h curve, 7 deaths, 19 serious injuries (RAIB report)."],
                    ["ok", "LAS: 31 to CUH, 20 to St George's (Londonist; St George's statement)."],
                    ["unverified", "Could not verify: CUH emptied its ED in 20 minutes; more than 60 staff called in via WhatsApp; one coach of 29 walking wounded; several upgraded on arrival (source article not retrievable)."],
                    ["unverified", "Could not verify: that CUH upgrades 'validated' the 2023 triage change."]
                ]
            },
            {
                id: "INC_02",
                name: "Westminster Bridge & Parliament Attack",
                date: "2017-03-22",
                location: "Westminster, London",
                archetype: "ARCH_02",
                mechanism: "Vehicle ramming on the Westminster Bridge pavement (hired Hyundai Tucson SUV), followed by a fatal knife attack at Carriage Gates.",
                casualties: "5 victims killed; attacker shot dead by a protection officer. Two pedestrians died on the day; Leslie Rhodes (75), also struck on the bridge, died at King's College Hospital the next day (23 March) when life support was withdrawn. Andreea Cristea, knocked into the Thames, died in hospital on 6 April 2017. PC Keith Palmer was fatally stabbed. About 40–50 injured.",
                dispersal: "Early reports: 12 seriously injured (some 'catastrophic') and 8 with less serious injuries treated at the scene. Receiving hospitals included St Thomas', King's College (admitted 8), St Mary's, the Royal London, and Chelsea and Westminster.",
                injuries: "Bimodal: blunt vehicle-impact injuries and a fatal stabbing; one victim recovered from the river (immersion).",
                checks: [
                    ["ok", "Vehicle was a Hyundai Tucson (not an i40)."],
                    ["ok", "Leslie Rhodes died the next day, not at the scene."],
                    ["partial", "Scene figures (12 serious, 8 minor) are attributed to Guardian reporting; no LAS primary source found."]
                ]
            },
            {
                id: "INC_03",
                name: "Manchester Arena Bombing",
                date: "2017-05-22",
                location: "City Room foyer, Manchester Arena",
                archetype: "ARCH_01",
                mechanism: "Suicide IED detonated in the City Room foyer.",
                casualties: "22 victims killed plus the bomber. 20 died at the scene including the bomber (so 19 victims); 3 victims died in hospital during early ED resuscitation. 940 surviving victims present (GMP 2019 estimate); 237 physically injured (MAI Vol 2). 153 ED presentations (109 adults, 44 under-16s); 150/153 (98%) survived to day 30.",
                dispersal: "138 (90%) received within 6 h by 11 GMMTSN hospitals; 75 (49%) at an MTC (abstract; Table 1 gives 74). NWAS conveyed 59 (21 P1, 24 P2, 14 P3); 95 self-presented as P3 (14 outside the GM network). Note: 59 + 95 = 154, not 153 — the source does not reconcile this. 93 (61%) admitted; 24 critical care admissions (19 at MTCs); 5 interhospital transfers in the first 24 h, predominantly between MTCs.",
                injuries: "Whole cohort median ISS 1 (IQR 1–10), NISS 2 (1–14); MTC cohort ISS 7.5 (1–14), NISS 10 (3–22). Limb and torso injuries predominated among serious injuries (AIS ≥3; the EMJ abstract prints 'AIS >3'). 21 (14%) needed emergency damage control surgery.",
                checks: [
                    ["ok", "Dark et al. EMJ 2021 (TARN case series) and Manchester Arena Inquiry Vol 2."],
                    ["partial", "The TARN dataset was deployed after the event; scene triage could not be linked to hospital records. It is not described as 'validated'."],
                    ["unverified", "Could not verify: individual operations lasting up to 14 hours."]
                ]
            },
            {
                id: "INC_04",
                name: "London Bridge & Borough Market Attack",
                date: "2017-06-03",
                location: "London Bridge & Borough Market, London",
                archetype: "ARCH_02",
                mechanism: "Van (white Renault Master) driven at high speed into pedestrians, followed by stabbings by three attackers.",
                casualties: "8 victims killed; 3 attackers shot dead 8 minutes after the first 999 call. 48 conveyed to hospital; on 4 June, 36 remained in London hospitals, 21 of them critical (a snapshot). All 48 who reached hospital reportedly survived (secondary report only).",
                dispersal: "5 hospitals (NHS England, 4 June 2017): King's College 14 admitted (8 critical); Royal London 12 (6 critical); St Thomas' 4 (4 critical); UCH 5 (2 critical); St Mary's 1 (1 critical).",
                injuries: "Predominantly penetrating stab injuries plus vehicle-impact injuries.",
                checks: [
                    ["ok", "Royal London 12 admitted / 6 critical; King's 14 admitted / 8 critical (NHS England update)."],
                    ["unverified", "Could not verify: van speed '~50 mph'; '~90% penetrating at King's'; 2–3 patients at King's before the 23:04 major incident declaration."],
                    ["unverified", "Removed: '56.3% Zone 2 neck injuries' — not linked to this attack in any source found."]
                ]
            },
            {
                id: "INC_05",
                name: "Grenfell Tower Fire",
                date: "2017-06-14",
                location: "North Kensington, London",
                archetype: "ARCH_04",
                mechanism: "High-rise residential fire spread by the external cladding system: Reynobond PE (polyethylene-core) ACM rainscreen panels with Celotex RS5000 PIR (polyisocyanurate) insulation; Kingspan K15 phenolic insulation also featured.",
                casualties: "72 deaths, all found avoidable by the Phase 2 report: 70 at the scene, 1 in hospital on 15 June 2017 and 1 in January 2018. NHS: 74 patients taken to 6 London hospitals, 20 in critical care.",
                dispersal: "Hospitals named in early reports: Chelsea and Westminster, King's College, Royal Free, St Thomas' and St Mary's. The Royal London was not among those named.",
                injuries: "Smoke inhalation; at least 3 survivors treated for cyanide poisoning (secondary source).",
                checks: [
                    ["ok", "72 deaths; NHS 74 patients / 20 critical care."],
                    ["unverified", "No source found for the earlier '70–140 casualties' range (removed)."],
                    ["unverified", "No source found that Grenfell 'catalysed' the hydroxocobalamin or surgical airway guidance (removed)."]
                ]
            },
            {
                id: "INC_06",
                name: "Finsbury Park Mosque Attack",
                date: "2017-06-19",
                location: "Seven Sisters Road, London",
                archetype: "ARCH_02",
                mechanism: "Vehicle ramming attack on pedestrians.",
                casualties: "1 death at the scene (Makram Ali, who had collapsed beforehand; post-mortem found multiple injuries). 10–11 injured: LAS took 8 (some reports say 9) to hospital and treated 2 at the scene.",
                dispersal: "Receiving hospitals: could not verify.",
                injuries: "Blunt vehicle-impact injuries (pattern not individually verified).",
                checks: [
                    ["ok", "Date, 1 death, 10–11 injured, LAS conveyed 8–9."],
                    ["unverified", "Could not verify: receiving hospitals (the earlier 'King's College and Royal London' claim is unsupported)."]
                ]
            },
            {
                id: "INC_07",
                name: "Salisbury & Amesbury Novichok Poisonings",
                date: "2018-03-04",
                location: "Salisbury (4 Mar 2018) & Amesbury (30 Jun 2018), Wiltshire",
                archetype: "ARCH_05",
                mechanism: "Exposure to a Soviet-era A-series (Novichok) organophosphorus nerve agent.",
                casualties: "5 people seriously poisoned (Sergei and Yulia Skripal, DS Nick Bailey, Dawn Sturgess, Charlie Rowley); 1 death — Dawn Sturgess, exposed 30 June, died 8 July 2018. The Skripals and Rowley were critical; DS Bailey was in ICU but described as 'serious' and was discharged on 22 March 2018. 21 emergency staff and members of the public were checked for symptoms in Salisbury.",
                dispersal: "Salisbury District Hospital ICU — BJA 2022: the Skripals 'along with three further critically ill patients' (five in ICU). Pre-COVID, the longest-running major incident in NHS history. Charlie Rowley was discharged on 20 July 2018 after about three weeks.",
                injuries: "Acetylcholinesterase inhibition causing muscarinic, nicotinic and CNS toxicity; miosis in all Novichok cases seen (PHE/NHSE briefing). AChE inhibited by A-agents ages rapidly, making oxime reactivation difficult. Therapy: atropine, oximes, benzodiazepines and supportive care including ventilation.",
                checks: [
                    ["ok", "5 poisoned, 1 death (Dawn Sturgess Inquiry; BJA 2022)."],
                    ["partial", "Sources differ on 'critical': BJA counts five critically ill in ICU; press reporting describes DS Bailey as 'serious'."],
                    ["unverified", "Removed: '6 investigated', '4 critical', atropine '1.5–20+ mg', magnesium sulfate, lipid emulsion, 'weeks of ventilation'."]
                ]
            },
            {
                id: "INC_08",
                name: "Fishmongers' Hall / London Bridge Attack",
                date: "2019-11-29",
                location: "Fishmongers' Hall and London Bridge, London",
                archetype: "ARCH_02",
                mechanism: "Lone-actor knife attack; attacker wore a fake suicide vest.",
                casualties: "2 killed (Jack Merritt, 25, and Saskia Jones, 23), both from a stab wound to the chest; 3 others injured. The attacker was shot dead by City of London Police on London Bridge. Jones was pronounced dead at the scene at 14:25; Merritt was moved to King William Street and pronounced dead at 15:14.",
                dispersal: "Receiving hospitals: could not verify.",
                injuries: "Fatal chest stab wounds; survivors' wound sites not verified.",
                checks: [
                    ["ok", "Deaths, cause, attacker shot, fake vest, 3 injured."],
                    ["unverified", "Could not verify: receiving hospitals; pre-hospital transfusion and damage control details."]
                ]
            },
            {
                id: "INC_09",
                name: "Forbury Gardens Attack",
                date: "2020-06-20",
                location: "Forbury Gardens, Reading, Berkshire",
                archetype: "ARCH_02",
                mechanism: "Lone-actor knife attack in a public park, lasting about half a minute.",
                casualties: "3 killed (James Furlong, David Wails, Joseph Ritchie-Bennett), each from a single stab wound; 3 injured (attempted murders), all taken to hospital and later discharged. Place of death not stated in the sources read.",
                dispersal: "Receiving hospital: could not verify.",
                injuries: "Furlong and Ritchie-Bennett: single stab wound to the neck. Wails: stabbed once in the back.",
                checks: [
                    ["ok", "Single stab wound each (police post-mortem release; sentencing reports); wound sites as stated."],
                    ["unverified", "Could not verify: deaths 'at the scene'; Royal Berkshire Hospital as receiving hospital."]
                ]
            },
            {
                id: "INC_10",
                name: "Southport Stabbings",
                date: "2024-07-29",
                location: "Hart Space, Hart Street, Southport",
                archetype: "ARCH_02",
                mechanism: "Knife attack at a holiday dance workshop for children in Years 2–6 (aged 6–11; 26 booked).",
                casualties: "3 girls killed (aged 6, 7 and 9): two died at the scene and one in hospital the next day. 10 injured (8 children, 2 adults). Critical: 7 (5 children, 2 adults) in early reports; 8 (6 children and both adults) in later reporting.",
                dispersal: "7 children to Alder Hey Children's Hospital; others to Aintree University Hospital, Ormskirk District General Hospital and Royal Manchester Children's Hospital.",
                injuries: "Penetrating stab injuries. One adult survivor (stabbed 5 times) was readmitted around 15 August with breathing problems and had lung surgery. The last injured child was discharged on 8 August 2024.",
                checks: [
                    ["ok", "Ages 6–11; 3 deaths; 10 injured; 8 critical per later reporting."],
                    ["unverified", "Could not verify: NWAS/HART/MERIT deployment detail (Inquiry Vol 1 NWAS section not retrieved); 'up to 8+ stab wounds per victim'."],
                    ["unverified", "Removed: '100% surgical survival' (one child died in hospital the next day)."]
                ]
            }
        ];

        const ARCHETYPES_MATRIX = [
            {
                id: "ARCH_01",
                name: "Confined-Space Explosive Blast (IED)",
                regions: "Limbs and torso (Manchester: limb and torso injuries predominated where AIS ≥3)",
                lsi: "TST; Pressure / Tourniquet / Packing for severe bleeding; airway opening and recovery position",
                hospital: "Damage control surgery and critical care (Manchester: 21/153 damage control surgery; 24 critical care admissions, 19 at MTCs)",
                pitfall: "Large self-presenting stream (Manchester: 95 self-presented as P3; 44 of 153 were under 16). NISS is always ≥ ISS by construction; a higher NISS does not by itself prove better accuracy."
            },
            {
                id: "ARCH_02",
                name: "Marauding Sharp-Force & Hybrid Vehicular MTA",
                regions: "Neck, chest, armpits, back, abdomen, groin, buttocks (the TST penetrating-injury search areas); limbs; pelvis (vehicle impact)",
                lsi: "Hot/warm zone extraction; Pressure / Tourniquet / Packing; clinician-led chest decompression within scope of practice",
                hospital: "Massive haemorrhage protocol (London Code Red 2018: Pack A = 4 RBC + 4 FFP; Pack B = 6 RBC + 6 FFP + 2 cryo + 1 platelets; TXA 1 g over 10 min); penetrating neck injury assessment per MTC protocol",
                pitfall: "Borsetto et al. 2019 (Queen Elizabeth Hospital Birmingham, 2012–2018 cohort): when CT angiography showed indirect signs alone, only 12.1% had significant vascular injury at exploration (PPV ≈ 12.1%)."
            },
            {
                id: "ARCH_03",
                name: "High-Energy Rail/Tram Derailment & Crush",
                regions: "Limbs, chest wall, pelvis (illustrative; not individually verified)",
                lsi: "Extrication (fire service / USAR / HART); tourniquet for catastrophic limb bleeding; analgesia",
                hospital: "Wound debridement and fracture fixation (illustrative)",
                pitfall: "Walking casualties can deteriorate later; reassess (see SIM_07). The Croydon coach-upgrade anecdote could not be verified."
            },
            {
                id: "ARCH_04",
                name: "High-Rise Structural Fire & Toxic Asphyxiants",
                regions: "Airway; carbon monoxide (COHb >30% = severe); cyanide; skin (%TBSA)",
                lsi: "High-flow O2 10–15 L/min via non-rebreathing mask (SpO2 94–98% if no CO poisoning; in confirmed CO poisoning 100% O2 until COHb is normal, <3%). Hydroxocobalamin for suspected smoke inhalation with altered mental status and/or cardiovascular instability: adult 5 g IV over 15 min; child 70 mg/kg, max 5 g. Prophylactic large-bore tracheal intubation if impending airway compromise. Surgical airway through a burned neck: longitudinal skin incision, then a transverse incision into the cricothyroid membrane. Cool running water for 20 min, ideally within 10 min and up to 3 h after injury (water <20 °C; no ice water).",
                hospital: "Fluids for adult and paediatric burns >20% TBSA (0.9% sodium chloride preferred in children); active warming. Revised Baux = age + %TBSA + 17 if inhalation injury — predicts probability of death (Osler et al. 2010). Note: BRRT/BST are WHO Emergency Medical Team constructs that support receiving hospitals; they are not UK structures and do not work on scene.",
                pitfall: "Standard pulse oximeters cannot distinguish carboxyhaemoglobin from oxyhaemoglobin: CO poisoning may be present with a normal SpO2."
            },
            {
                id: "ARCH_05",
                name: "Chemical Nerve Agent CBRN (Novichok)",
                regions: "Muscarinic, nicotinic and CNS (acetylcholinesterase inhibition)",
                lsi: "CBRN PPE; primary decontamination (remove and double-bag clothing; wash skin with soap/detergent and water where time allows); consider opiate overdose first — trial of naloxone; airway support; atropine (see hospital column)",
                hospital: "PHE/NHS England ED briefing (2018): atropine IV/IM/IO 4.0–4.2 mg for adults and children aged 12 or over; 50–75 microgram/kg under 12; repeat every 5 min until atropinised (minimal secretions, clear chest, HR >80/min, adequate BP). Pupil size is not an endpoint. Oximes, benzodiazepines, mechanical ventilation. ⚠ Verify against current TOXBASE/JRCALC and local CBRN SOP before teaching.",
                pitfall: "AChE inhibited by A-series agents ages rapidly (half-time about 2–4 min, similar to soman), making oxime reactivation difficult."
            }
        ];

        // Shared nerve-agent dose statement (PHE/NHSE ED briefing, July 2018)
        const ATROPINE_STATEMENT = "Atropine IV/IM/IO (PHE/NHS England ED briefing, 2018): 4.0–4.2 mg for adults and children aged 12 or over; 50–75 microgram/kg under 12; repeat every 5 min until atropinised (minimal secretions, clear chest, HR >80/min, adequate BP). Pupil size is not an endpoint. Consider opiate overdose first (trial of naloxone). ⚠ Verify against current TOXBASE/JRCALC and local CBRN SOP before teaching.";

        // 10 FICTIONAL SIMULATION CASUALTY CARDS (scenarios informed by published incidents; not real patients)
        const SIMULATION_CARDS = [
            {
                id: "SIM_01",
                archetype: "ARCH_01 (IED Blast)",
                incidentRef: "Blast scenario (informed by INC_03)",
                demo: "Female, 14 years (Paediatric)",
                narrative: "4 m from an indoor IED: bilateral lower-limb fragment wounds with pulsatile right femoral bleeding and an open left tibial fracture. Not walking; talking lucidly.",
                walking: "NO",
                bleeding: "YES (pulsatile femoral bleed)",
                talking: "YES",
                breathing: "YES",
                rr: 28,
                hr: 132,
                sbp: 88,
                gcs: "15 (E4V5M6)",
                note: "Paediatric blast casualty",
                expectedTST: "P1",
                expectedMITT: "P1",
                requiredLSIs: ["tourniquet", "packing"],
                iss: 16,
                niss: 29,
                rationale: "TST: P1 (red). Not walking; severe bleeding → Pressure / Tourniquet / Packing → P1. MITT: P1 (catastrophic bleeding is the first MITT step; RR 28 and HR 132 would also meet the physiological criteria). NISS (29) exceeds ISS (16) here because NISS counts several injuries in the same body region; NISS is always ≥ ISS by construction.",
                pathway: "Paediatric MTC; massive haemorrhage protocol; vascular and orthopaedic surgery."
            },
            {
                id: "SIM_02",
                archetype: "ARCH_01 (IED Blast Walk-In)",
                incidentRef: "Blast scenario (informed by INC_03)",
                demo: "Male, 38 years (Self-presenting)",
                narrative: "8 m from an indoor IED: walked out of the venue and took a taxi to the local ED (Manchester: 95 casualties self-presented). Complains of deafness, mild breathlessness and a 1 cm flank fragment wound. At ED triage he sits down breathless and can no longer walk unaided.",
                walking: "YES at scene → not walking at ED",
                bleeding: "NO",
                talking: "YES (1 cm flank wound)",
                breathing: "YES (tachypnoeic at ED)",
                rr: 25,
                hr: 108,
                sbp: 104,
                gcs: "15 (E4V5M6)",
                note: "Walked at scene; re-triage at ED",
                expectedTST: "P3",
                expectedMITT: "P1",
                requiredLSIs: ["ed_retriage_upgrade"],
                iss: 18,
                niss: 22,
                rationale: "TST at the scene: P3 (green). He walked, and TST stops at Step 1 — the penetrating-injury search applies only to casualties who are not walking but are talking. Required action: re-triage with MITT at the ED. MITT at ED: P1 — no catastrophic bleeding; no longer walking; breathing; responds to voice; RR 25 (≥24) and HR 108 (≥100) meet the physiological criteria. Triage is dynamic: a correct P3 at the scene can become P1 later.",
                pathway: "Upgrade from the ED walk-in stream to resus; assess for blast and penetrating torso injury."
            },
            {
                id: "SIM_03",
                archetype: "ARCH_02 (MTA Stabbing)",
                incidentRef: "Stabbing scenario (informed by INC_04)",
                demo: "Male, 29 years",
                narrative: "Stabbed: deep 4 cm wound to the left side of the neck, oozing dark venous blood (no catastrophic external bleeding). Lying on the pavement, not walking; talking quietly and mildly confused.",
                walking: "NO",
                bleeding: "NO catastrophic bleeding (venous ooze)",
                talking: "YES (quiet, mildly confused) → neck wound found",
                breathing: "YES",
                rr: 22,
                hr: 112,
                sbp: 96,
                gcs: "14 (E4V4M6)",
                note: "Penetrating neck injury",
                expectedTST: "P1",
                expectedMITT: "P1",
                requiredLSIs: ["packing"],
                iss: 16,
                niss: 25,
                rationale: "TST: P1 (red). Not walking; no catastrophic bleeding; talking → deliberate search for penetrating injury, which must include the neck, chest, armpits, back, abdomen, groin and buttocks (front, back and sides). The neck wound → P1. Apply direct pressure to the wound. MITT: P1 — not walking, breathing, responds to voice, RR 22 is within 12–23, but HR 112 meets the HR criterion.",
                pathway: "Adult MTC. Penetrating neck injury: Borsetto et al. 2019 (Queen Elizabeth Hospital Birmingham) found that when CT angiography showed indirect signs alone, only 12.1% had significant vascular injury at exploration. Manage per MTC protocol."
            },
            {
                id: "SIM_04",
                archetype: "ARCH_02 (Paediatric MTA)",
                incidentRef: "Stabbing scenario (informed by INC_10)",
                demo: "Female, 8 years (Paediatric)",
                narrative: "Indoor knife attack: stab wounds to the right back of the chest (sucking chest wound), left forearm and right inner thigh, with heavy bleeding from the thigh. Not walking; crying and distressed.",
                walking: "NO",
                bleeding: "YES (heavy thigh bleeding)",
                talking: "YES (distressed)",
                breathing: "YES (laboured)",
                rr: 34,
                hr: 145,
                sbp: 78,
                gcs: "12 (E3V4M5)",
                note: "Record full paediatric vital signs",
                expectedTST: "P1",
                expectedMITT: "P1",
                requiredLSIs: ["packing", "thoracostomy"],
                iss: 26,
                niss: 34,
                rationale: "TST: P1 (red). Not walking; severe bleeding → Pressure / Tourniquet / Packing → P1 (the back-of-chest wound would also give P1 at Step 3). MITT: P1 (catastrophic bleeding). Chest decompression is a clinician intervention within scope of practice. Record full vital signs: 67.2% of under-16s in TARN 2008–2017 lacked complete pre-hospital physiology (Chernbumroong et al., preprint).",
                pathway: "Paediatric MTC. Note: one adult Southport survivor was readmitted around day 17 with breathing problems and had lung surgery (secondary reporting)."
            },
            {
                id: "SIM_05",
                archetype: "ARCH_02 (Vehicular MTA)",
                incidentRef: "Vehicle ramming scenario (informed by INC_02)",
                demo: "Female, 71 years (older adult)",
                narrative: "Struck by a vehicle on a bridge pavement: head injury, open left femoral fracture and suspected pelvic injury. Not walking; groaning but not talking and not responding to voice. Takes daily beta-blockers.",
                walking: "NO",
                bleeding: "NO catastrophic bleeding (open fracture ooze)",
                talking: "NO (groaning only)",
                breathing: "YES (on 10 s check)",
                rr: 20,
                hr: 94,
                sbp: 102,
                gcs: "9 (E2V2M5)",
                note: "Older adult on beta-blockers",
                expectedTST: "P1",
                expectedMITT: "P1",
                requiredLSIs: ["airway_recovery", "pelvic_splint"],
                iss: 29,
                niss: 29,
                rationale: "TST: P1 (red). Not walking; no catastrophic bleeding; not talking → open the airway, 10-second breathing check: breathing → recovery position → P1. MITT: P1 because she does not respond to voice. Teaching point: RR 20 and HR 94 are both below the MITT physiological triggers (beta-blockers can blunt heart rate). Had she responded to voice, MITT physiology alone would have given P2. Existing triage tools had 5.8–14.6 percentage points lower sensitivity in older adults (Xu et al. EMJ 2024).",
                pathway: "MTC resus; pelvic binder and splintage; further management per MTC protocol."
            },
            {
                id: "SIM_06",
                archetype: "ARCH_03 (Rail Derailment Crush)",
                incidentRef: "Derailment scenario (informed by INC_01)",
                demo: "Male, 44 years",
                narrative: "Trapped under an overturned tram section: traumatic amputation of the left forearm with active bleeding and a crushed right thigh. Not walking; talking.",
                walking: "NO (trapped)",
                bleeding: "YES (forearm amputation)",
                talking: "YES",
                breathing: "YES",
                rr: 24,
                hr: 118,
                sbp: 92,
                gcs: "15 (E4V5M6)",
                note: "Entrapment",
                expectedTST: "P1",
                expectedMITT: "P1",
                requiredLSIs: ["tourniquet"],
                iss: 16,
                niss: 25,
                rationale: "TST: P1 (red). Not walking; severe bleeding → Pressure / Tourniquet / Packing → P1. Apply a tourniquet to the left arm. MITT: P1 (catastrophic bleeding; RR 24 and HR 118 also meet the criteria).",
                pathway: "Extrication by fire service / USAR / HART; MTC care (illustrative)."
            },
            {
                id: "SIM_07",
                archetype: "ARCH_03 (Derailment Walking Wounded)",
                incidentRef: "Derailment scenario (informed by INC_01)",
                demo: "Male, 52 years (walked at scene)",
                narrative: "Walked away from the overturned tram and travelled to hospital by bus with other walking wounded (RAIB: the injured went 'by bus and ambulance'). In the ED waiting area 45 minutes later he becomes pale and breathless with right-sided chest pain and can no longer stand unaided.",
                walking: "YES at scene → not walking at ED",
                bleeding: "NO external bleeding",
                talking: "YES (right chest pain)",
                breathing: "YES (RR 26)",
                rr: 26,
                hr: 114,
                sbp: 98,
                gcs: "15 (E4V5M6)",
                note: "Walked at scene; deteriorates in ED",
                expectedTST: "P3",
                expectedMITT: "P1",
                requiredLSIs: ["ed_retriage_upgrade", "thoracostomy"],
                iss: 20,
                niss: 20,
                rationale: "TST at the scene: P3 (green) — he walked, so TST stops at Step 1. Required action: re-triage with MITT at the ED. MITT at ED: P1 — no catastrophic bleeding; no longer walking; breathing; responds to voice; RR 26 (≥24) and HR 114 (≥100). MITT categorises all living casualties as at least P3; the separate Survivor Reception Centre route for the uninjured was removed.",
                pathway: "Move to resus; chest assessment and drainage by a clinician if indicated; transfer to an MTC if needed (illustrative)."
            },
            {
                id: "SIM_08",
                archetype: "ARCH_04 (High-Rise Fire)",
                incidentRef: "High-rise fire scenario (informed by INC_05)",
                demo: "Female, 31 years",
                narrative: "Carried out of a burning high-rise: full-thickness facial and front-of-neck burns (25% TBSA in total), soot in sputum, inspiratory stridor, confused and unable to speak.",
                walking: "NO (carried out)",
                bleeding: "NO",
                talking: "NO (stridor; cannot speak)",
                breathing: "YES (airway compromise)",
                rr: 30,
                hr: 128,
                sbp: 84,
                gcs: "11 (E3V3M5)",
                note: "SpO2 99% (falsely reassuring; COHb 38%)",
                expectedTST: "P1",
                expectedMITT: "P1",
                requiredLSIs: ["hydroxocobalamin_crico"],
                iss: 25,
                niss: 25,
                rationale: "TST: P1 (red). Not walking; no bleeding; not talking → open airway, breathing → recovery position → P1. MITT: P1 (RR 30). Standard pulse oximeters cannot distinguish carboxyhaemoglobin from oxyhaemoglobin; COHb >30% indicates severe poisoning — give 100% oxygen until COHb is normal. Suspected smoke inhalation with altered mental status and cardiovascular instability → hydroxocobalamin 5 g IV over 15 min (adult). Prophylactic large-bore tracheal intubation for impending airway compromise; if a surgical airway is needed through the burned neck: longitudinal skin incision, then a transverse incision into the cricothyroid membrane.",
                pathway: "Revised Baux = 31 + 25 + 17 = 73 (predicts probability of death; Osler et al. 2010). Fluids (>20% TBSA; 25% sits in the 20–50% band), active warming, burns centre referral via the regional burns network."
            },
            {
                id: "SIM_09",
                archetype: "ARCH_05 (CBRN Nerve Agent)",
                incidentRef: "Nerve agent scenario (informed by INC_07; fictional patient)",
                demo: "Male, 41 years (responder)",
                narrative: "Collapses some hours after touching a contaminated surface: profuse frothy secretions, wheeze, pinpoint pupils, muscle fasciculations and sweating. Not responding to voice.",
                walking: "NO (collapsed)",
                bleeding: "NO",
                talking: "NO",
                breathing: "YES but slow (RR 8)",
                rr: 8,
                hr: 42,
                sbp: 80,
                gcs: "6 (E1V1M4)",
                note: "Cholinergic crisis",
                expectedTST: "P1",
                expectedMITT: "P1",
                requiredLSIs: ["cbrn_atropine", "airway_recovery"],
                iss: 0,
                niss: 0,
                rationale: "TST: P1 (red). Not walking; no bleeding; not talking → open airway, breathing → recovery position → P1. MITT: P1 (does not respond to voice; RR 8 is below 12). Nerve agents inhibit acetylcholinesterase, causing muscarinic effects (secretions, bronchospasm, slow heart rate), nicotinic effects (fasciculations, respiratory muscle weakness) and CNS depression. Pupil size must not be used as the atropine endpoint.",
                pathway: "CBRN PPE; primary decontamination (remove and double-bag clothing). " + ATROPINE_STATEMENT + " Oximes, benzodiazepines and ventilatory support."
            },
            {
                id: "SIM_10",
                archetype: "ARCH_02 (Warm-Zone, Not Breathing)",
                incidentRef: "Stabbing scenario (fictional)",
                demo: "Male, 26 years",
                narrative: "Found lying on his back in the warm zone with a single central chest stab wound. Unresponsive, no visible external bleeding, and not breathing after the airway is opened.",
                walking: "NO",
                bleeding: "NO",
                talking: "NO (unresponsive)",
                breathing: "NO (no breaths on 10 s Look, Listen, Feel)",
                rr: 0,
                hr: 0,
                sbp: 0,
                gcs: "3 (E1V1M1)",
                note: "Silver NOT BREATHING band",
                expectedTST: "SILVER",
                expectedMITT: "DEAD",
                requiredLSIs: ["airway_recovery"],
                iss: 75,
                niss: 75,
                rationale: "TST: Silver NOT BREATHING. Not walking; no severe bleeding; not talking → open the airway if able, 10-second breathing check: not breathing → recovery position → Silver band; CPR if resources allow, but this must not detract from stopping external bleeding and opening airways for others. TST has no DEAD category: 'Not Breathing' records the objective finding of the breathing check. MITT (which keeps a DEAD category) would categorise him as DEAD if still not breathing after airway opening.",
                pathway: "A healthcare practitioner with appropriate time reassesses and decides whether this is a viable resuscitation (P1) or ROLE/PLE (DEAD)."
            }
        ];

        // 4-TIER TRAINING NEEDS ANALYSIS (TNA). `unsourced` lists items removed because no source was found.
        const TNA_CURRICULUM = [
            {
                tier: "Tier 1: Non-Clinical First Responders",
                personnel: "Unarmed and armed police, fire and rescue, venue security and stewards",
                gaps: "Unarmed police were willing to help but felt under-prepared (e.g. for an explosion) and first-aid kits were unsuitable; armed officers described the moral challenge of walking past the injured until the threat was neutralised; one prehospital physician described the alternative to following armed officers in as retreating to the 'clipboard zone' of process and meetings (Stephens et al. BMJ Open 2026).",
                mandate: [
                    "Ten Second Triage (NHS England / NARU v1.0, April 2023): Walking → P3; Severe bleeding → Pressure / Tourniquet / Packing → P1; Talking → search for penetrating injury (neck, chest, armpits, back, abdomen, groin, buttocks; front, back and sides) → P1, else P2; Breathing check",
                    "Any child under 2 = P1",
                    "Bands: P1 white on red; P2 black on yellow; P3 white on green; Not Breathing black on silver (white checked border)",
                    "Airway opening, 10-second breathing check, recovery position; CPR if resources allow",
                    "METHANE structured major incident reporting"
                ],
                benchmark: "Simulation reference, not a published standard: in one simulation study (Park, Vassallo et al. 2026; 37 casualties) TST took a mean 10.2 s per casualty with 80.3% accuracy. Local targets of ≤10 s and ≥80% are derived from that single study.",
                unsourced: ["'Amputation' trauma as a reported gap", "1,377 s 'legacy triage' LSI delay presented as real-incident data (it came from one simulated MITT run)"]
            },
            {
                tier: "Tier 2: Pre-Hospital Clinical Teams",
                personnel: "Paramedics, EMTs, HART, MERIT, HEMS / air ambulance",
                gaps: "67.2% of under-16s in TARN 2008–2017 lacked complete pre-hospital physiology (Chernbumroong et al., preprint); poor shared mental models with armed police (Stephens et al. 2026); Manchester Arena Inquiry Vol 2 noted a paucity of analgesia within the inner cordon.",
                mandate: [
                    "NHS MITT (primary clinical triage for NHS responders): catastrophic bleeding → P1; walking → P3; breathing? open airway, still not breathing → DEAD; does not respond to voice → P1; under 2 → P1; RR <12 or ≥24 → P1; HR ≥100 → P1 (check current NHS England card; EMJ 2022 text reads >100); otherwise P2",
                    "Complete paediatric vital signs wherever possible",
                    "Inner-cordon analgesia provision",
                    "Hydroxocobalamin 5 g IV (adult) / 70 mg/kg, max 5 g (child) and atropine per the PHE/NHSE 2018 briefing — scope of practice varies by service; verify against current JRCALC/TOXBASE and local SOP"
                ],
                benchmark: "Simulation reference, not a standard: in the same study, MITT applied after TST took 25.9 s per casualty (960 s), against 40.5 s (1,500 s) for a single MITT-alone run (Park, Vassallo et al. 2026). A ≤26 s target is derived from that study.",
                unsourced: ["Delayed analgesia due to locked vehicle drug cabinets", ">90% physiological documentation benchmark in children under 5", "'55.1% missed P1s with legacy Sieve'", "MITT 'Pit Stop' pathway (not part of MITT)"]
            },
            {
                tier: "Tier 3: Hospital ED & Trauma Team Leaders",
                personnel: "Emergency medicine consultants and registrars, senior ED nurses, hospital commanders (MTCs and trauma units)",
                gaps: "Manchester: 95 casualties self-presented as P3 (Dark et al. 2021). Hospital staff reported a lack of immediately available blast-injury protocols, communication gaps and inadequate psychological support (Skryabina et al. EMJ 2021).",
                mandate: [
                    "Rapid ED decanting on declaration (no published time standard found)",
                    "Re-triage walking and self-presenting P3 casualties with MITT",
                    "Massive haemorrhage protocol (London Code Red 2018: Pack A = 4 RBC + 4 FFP; Pack B = 6 RBC + 6 FFP + 2 cryo + 1 platelets; TXA 1 g over 10 min — other networks differ)",
                    "Shift rotation and rest planning",
                    "Psychological support for staff"
                ],
                benchmark: "No published benchmark found. Suggested exercise: a Manchester-scale self-presenting P3 stream (95 of 153) while detecting casualties who deteriorate; set P1 throughput targets locally.",
                unsourced: ["Staff '36-hour shifts'", "Exercise benchmark '≥8 P1/hour alongside 90+ P3 over 6 hours'", "ED decanting 'within 20 minutes' (Croydon anecdote, unverified)", "'Hospital ballistic protocols' (the study found a lack of blast-injury protocols)"]
            },
            {
                tier: "Tier 4: Specialist Surgical, Anaesthetic & ICU Teams",
                personnel: "Trauma, vascular, ENT, orthopaedic, paediatric and burns surgeons; anaesthetists; intensivists",
                gaps: "Penetrating neck injury: indirect CT angiography signs alone had a 12.1% rate of significant vascular injury at exploration (Borsetto et al. 2019, Queen Elizabeth Hospital Birmingham). Prolonged ICU care after nerve agent poisoning (Salisbury: five critically ill patients in ICU, BJA 2022).",
                mandate: [
                    "Damage control surgery for blast injury",
                    "Penetrating neck injury assessment (interpret indirect CT angiography signs with caution)",
                    "Paediatric chest injury management",
                    "Surgical airway through a burned neck: longitudinal skin incision, then a transverse incision into the cricothyroid membrane (FPHC/BBA 2020, Grade D)",
                    "Level 3 ICU surge: the Severn Trauma Adult Guideline asks units to double Level 3 ventilated capacity and maintain it for at least 96 hours (regional guidance; no national source found)"
                ],
                benchmark: "No published benchmark found.",
                unsourced: ["Zone 2 vascular control within 15 min of incision", "Cricothyroidotomy through eschar in under 90 s", "Zone 2 neck figures 56.3%, 84.4%, 67.2%, 50.8%, 42% (could not verify)", "Limited out-of-hours ENT/vascular exposure (no source)"]
            }
        ];

        // SURGE MODEL RATES. Only ARCH_01 rates are derived from a source (Dark et al. EMJ 2021, Manchester Arena, n=153).
        // All other archetype rates, the 65% first-hour share and the default MTC cap are ILLUSTRATIVE ASSUMPTIONS.
        const SURGE_RATES = {
            ARCH_01: { p1: 21 / 153, walkin: 95 / 153, surgery: 21 / 153, icu: 24 / 153, sourced: true,
                basis: "Manchester Arena (Dark et al. EMJ 2021): P1 = 21 NWAS-assigned P1 ÷ 153 ED presentations; self-presented 95/153; damage control surgery 21/153; critical care 24/153; 138/153 within 6 h." },
            ARCH_02: { p1: 0.437, walkin: 0.25, surgery: 0.38, icu: 0.35, sourced: false, basis: "Illustrative assumption — not derived from incident data." },
            ARCH_03: { p1: 0.306, walkin: 0.468, surgery: 0.22, icu: 0.18, sourced: false, basis: "Illustrative assumption — not derived from incident data (the Croydon coach figure is unverified)." },
            ARCH_04: { p1: 0.28, walkin: 0.40, surgery: 0.15, icu: 0.26, sourced: false, basis: "Illustrative assumption — not derived from incident data." },
            ARCH_05: { p1: 0.667, walkin: 0.15, surgery: 0.05, icu: 0.667, sourced: false, basis: "Illustrative assumption — not derived from incident data." }
        };
        const ARRIVAL_6H_SHARE = 138 / 153;      // Manchester: 138 of 153 within 6 h (sourced for ARCH_01 only)
        const FIRST_HOUR_P1_SHARE = 0.65;        // ILLUSTRATIVE ASSUMPTION — no source
        const ELDERLY_UNCALIBRATED_FACTOR = 0.88; // ILLUSTRATIVE ASSUMPTION — no source

        // London Code Red algorithm 2018 (C4TS/QMUL). Pack contents, not consumption benchmarks.
        const CODE_RED = { packA: { rbc: 4, ffp: 4 }, packB: { rbc: 6, ffp: 6, cryo: 2, plt: 1 } };
        // ILLUSTRATIVE ASSUMPTION for the stock forecast: one Pack A plus one Pack B per haemorrhage case.
        const ILLUSTRATIVE_PER_CASE = {
            rbc: CODE_RED.packA.rbc + CODE_RED.packB.rbc,
            ffp: CODE_RED.packA.ffp + CODE_RED.packB.ffp,
            cryo: CODE_RED.packB.cryo,
            plt: CODE_RED.packB.plt
        };

        
        const SYNTHETIC_P1_RATE = 21 / 153;
        const SYNTHETIC_P1_RATE_BASIS = "21 NWAS-assigned P1 / 153 ED presentations, Manchester Arena (Dark et al. EMJ 2021)";
// ==== End of reused data ====
