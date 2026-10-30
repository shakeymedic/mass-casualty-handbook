# Mass Casualty Handbook

A single-page teaching and training site on mass casualty incidents, for UK emergency department staff, with pre-hospital content included.

> **For training only. This is not a clinical protocol.** Check every dose and piece of doctrine against current local and national sources (including JRCALC, TOXBASE, the BNF and your trust's major incident plan) before relying on it. Doses on this site have not been verified against JRCALC or TOXBASE.

## The three sections

The site is organised into three sections. Each has its own colour and icon, a landing page with a short purpose statement and links to its pages, and its name in the breadcrumb, the menu and search results.

- **Research** (`#research`, blue): evidence from real incidents.
  - Incident database: 10 UK and 7 European incidents, with a region filter (`#incidents`).
  - European lessons (`#europe-lessons`).
  - Registry and case-series figures, including the Manchester Arena series and the TARN triage studies (`#registry`).
  - Sources and verification (`#sources`).
- **Planning for incidents** (`#incident-planning`, amber): preparing a hospital and its pre-hospital interface.
  - Hospital SOPs, draft (`#sops`).
  - Pre-hospital doctrine: METHANE, JESIP, CSCATTT, STEP 1-2-3 Plus and Remove-Remove-Remove (`#prehospital`).
  - Clinical guides (`#clinical`).
  - Planning tools: illustrative surge calculator and training needs analysis (`#planning`).
  - Links to the printable quick-reference cards, which live in Training and practice.
- **Training and practice** (`#training`, green): learning and rehearsing the skills.
  - Learning pathway: 8 modules with objectives and sourced knowledge checks (`#learn`).
  - Triage: TST and MITT (`#triage`).
  - Triage trainer, timed surge exercise and casualty drill (`#trainer`, `#surge`, `#drill`).
  - Facilitator guide: session plans, fictional tabletop injects and a debrief template (`#teach`).
  - Printables (`#printables`).

The glossary (`#glossary`) sits outside the three sections. The home page leads with three large section cards, then the disclaimer, role routes and progress summary.

Every hash used before the three-section layout still works. A few friendly aliases (for example `#practise` and `#planning-for-incidents`) redirect to the matching landing page.

All visible text is in British English. The tests scan every page for common American spellings.

Every factual claim is taken from the verification notes in `docs/verification/`. Anything that could not be verified is labelled on the site.

## Structure

- `index.html` is the built site (self-contained; only Google Fonts load externally).
- `src/` holds the source: `template.html` plus data files (`suite_data.js`, `learn_data.js`, `europe_data.js`).
- `docs/verification/` holds the claim, verdict and source tables the content is built from.

## Editing

```sh
python3 src/build.py                                   # rebuilds index.html
NODE_PATH=/path/to/global/node_modules node src/test.js # Playwright checks (needs playwright + Chromium); set SHOTS_DIR for screenshots
```

## Hosting

Netlify serves the repository root as-is (`netlify.toml`, no build step).
