# Mass Casualty Handbook

A single-page teaching and training site on mass casualty incidents, for UK emergency department staff, with pre-hospital content included.

> **For training only. This is not a clinical protocol.** Check every dose and piece of doctrine against current local and national sources (including JRCALC, TOXBASE, the BNF and your trust's major incident plan) before relying on it. Doses on this site have not been verified against JRCALC or TOXBASE.

## What's in it

- **Learn:** 8 modules with objectives and sourced knowledge checks.
- **Practise:** TST/MITT triage trainer, timed surge exercise, casualty drill.
- **Reference:** triage, hospital SOPs (draft), pre-hospital doctrine, clinical guides, incident database (10 UK and 7 European incidents), glossary, sources.
- **Teach:** session plans, fictional tabletop injects, debrief template, printables.

Every factual claim is taken from the verification notes in `docs/verification/`. Anything that could not be verified is labelled on the site.

## Structure

- `index.html` is the built site (self-contained; only Google Fonts load externally).
- `src/` holds the source: `template.html` plus data files (`suite_data.js`, `learn_data.js`, `europe_data.js`).
- `docs/verification/` holds the claim, verdict and source tables the content is built from.

## Editing

```sh
python3 src/build.py                                   # rebuilds index.html
NODE_PATH=/path/to/global/node_modules node src/test.js # Playwright checks (needs playwright + Chromium)
```

## Hosting

Netlify serves the repository root as-is (`netlify.toml`, no build step).
