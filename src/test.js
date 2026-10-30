// Playwright checks for the Mass Casualty Handbook.
// Run: NODE_PATH=/opt/node22/lib/node_modules node test.js   (Chromium from /opt/pw-browsers)
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const SP = process.env.SHOTS_DIR || path.join(__dirname, '..', 'screenshots');
fs.mkdirSync(SP, { recursive: true });
const FILE = path.join(__dirname, '..', 'index.html');
const URL = 'file://' + FILE;
const TABS = ['home','research','incidents','europe-lessons','registry','sources','incident-planning','sops','prehospital','clinical','training','learn','triage','trainer','surge','drill','teach','printables','glossary','planning'];
const LANDINGS = { research: { name: 'Research', pages: ['incidents','europe-lessons','registry','sources'] },
  'incident-planning': { name: 'Planning for incidents', pages: ['sops','prehospital','clinical','planning'] },
  training: { name: 'Training and practice', pages: ['learn','triage','trainer','surge','drill','teach','printables'] } };
// Hashes in use before the three-section layout, and the page each must still open.
const OLD_HASHES = { home:'home', learn:'learn', triage:'triage', prehospital:'prehospital', trainer:'trainer', surge:'surge', drill:'drill', sops:'sops', clinical:'clinical',
  incidents:'incidents', glossary:'glossary', sources:'sources', teach:'teach', printables:'printables', planning:'planning',
  europe:'incidents', 'uk-incidents':'incidents', 'europe-lessons':'europe-lessons', 'europe-not-found':'europe-lessons', registry:'registry',
  injects:'teach', hotdebrief:'teach', 'learn/m3':'learn', 'pr-tst':'printables' };
// Common American spellings that must not appear in visible text (British English throughout).
const US_WORDS = ['color','colors','colored','coloring','center','centers','centered','favor','favorite','behavior','behaviors','gray','defense','offense','catalog','license plate',
  'anemia','hemorrhage','hemorrhagic','hemostatic','hemostasis','hematoma','edema','esophagus','esophageal','pediatric','pediatrics','anesthesia','anesthetic','anesthetist','orthopedic','orthopedics',
  'ischemia','ischemic','hypoglycemia','hypovolemia','hypovolemic','hypoxemia','septicemia','fetal hemoglobin','hemoglobin','carboxyhemoglobin','oxyhemoglobin','liter','liters','milliliter','milliliters',
  'tumor','labor','honor','neighbor','fiber','maneuver','aluminum','traveled','traveling','labeled','labeling','modeling','modeled','canceled','toward','afterward','enrollment','fulfill','program','programs',
  'practiced','practicing','artifact','artifacts','acknowledgment','analog','dialog','catalogs','percent'];
const US_RE = new RegExp('\\b(' + US_WORDS.join('|') + '|\\w+(?<!s|pr|sei|cap|res)iz(?:e|es|ed|ing|ation|ations)|\\w+yz(?:e|es|ed|ing))\\b', 'gi');

(async () => {
  const browser = await chromium.launch();
  const results = [];
  const errors = [];
  const ok = (name, cond, extra='') => { results.push(`${cond ? 'PASS' : 'FAIL'} ${name}${extra ? ' — ' + extra : ''}`); };

  async function newPage(width, height, scheme, opts={}) {
    const ctx = await browser.newContext({ viewport: { width, height }, colorScheme: scheme || 'light' });
    if (opts.noStorage) await ctx.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', { get() { throw new Error('blocked'); } });
    });
    const page = await ctx.newPage();
    const tag = opts.tag || width;
    page.on('pageerror', e => errors.push(`[${tag}] pageerror: ${e.message}`));
    page.on('console', m => { if (m.type() === 'error') { const t = m.text(); if (!/fonts\.(googleapis|gstatic)|ERR_|net::/.test(t)) errors.push(`[${tag}] console: ${t}`); } });
    await page.route('**/*', r => r.request().url().startsWith('file://') ? r.continue() : r.abort());
    await page.goto(URL);
    return page;
  }
  const shot = (page, name, full=false) => page.screenshot({ path: path.join(SP, name), fullPage: full });

  // ---------- Static checks ----------
  const html = fs.readFileSync(FILE, 'utf8');
  const size = fs.statSync(FILE).size;
  ok('file under 1 MB', size < 1024 * 1024, `${size} bytes`);
  ok('no forbidden strings', !/OFFICIAL SENSITIVE|MTA Plan|\bv8\b/.test(html));
  ok('no external scripts', !/<script[^>]+src=/i.test(html));
  const ext = [...html.matchAll(/<link[^>]+href="(https?:[^"]+)"/g)].map(m => m[1]);
  ok('only Google Fonts loaded externally', ext.every(u => /fonts\.(googleapis|gstatic)\.com/.test(u)), ext.join(' '));
  ok('dark tokens defined in media query and data-theme', /@media \(prefers-color-scheme: dark\)\{\s*:root:not\(\[data-theme="light"\]\)/.test(html) && /:root\[data-theme="dark"\]\{/.test(html));

  // ---------- Desktop ----------
  const page = await newPage(1280, 900);
  for (const t of TABS) {
    await page.goto(URL + '#' + t);
    await page.waitForTimeout(80);
    const vis = await page.evaluate(id => { const s = document.getElementById('tab-' + id); return s && s.classList.contains('active') && s.offsetHeight > 100; }, t);
    ok(`desktop section #${t} visible`, vis);
  }
  ok('title', (await page.title()) === 'Mass Casualty Handbook');
  ok('nav groups Research/Planning for incidents/Training and practice/More', (await page.$$eval('#siteNav .nav-h', els => els.map(e => e.textContent).join(','))) === 'Research,Planning for incidents,Training and practice,More');
  ok('every page is in the navigation once', (await page.$$eval('#siteNav a[data-tab]', as => as.map(a => a.dataset.tab).sort().join(','))) === [...TABS].sort().join(','));
  ok('html lang is en-GB', (await page.getAttribute('html', 'lang')) === 'en-GB');
  ok('nav marks current page', (await page.getAttribute('#siteNav a[aria-current="page"]', 'data-tab')) === 'planning');

  // ---------- Three sections: landing pages, home cards, breadcrumb, old hashes ----------
  for (const [id, L] of Object.entries(LANDINGS)) {
    await page.goto(URL + '#' + id); await page.waitForTimeout(60);
    const info = await page.evaluate(id => { const s = document.getElementById('tab-' + id); return { active: s.classList.contains('active'), h1: s.querySelector('h1').textContent.trim(), purpose: (s.querySelector('.sec-hero .purpose') || {}).textContent || '',
      cards: [...s.querySelectorAll('.page-card')].map(c => c.dataset.page), hrefs: [...s.querySelectorAll('.page-card h3 a')].map(a => a.getAttribute('href')), sec: s.dataset.sec }; }, id);
    ok(`landing #${id}: shown with heading "${L.name}"`, info.active && info.h1 === L.name, info.h1);
    ok(`landing #${id}: one-paragraph purpose statement`, info.purpose.length > 150, String(info.purpose.length));
    ok(`landing #${id}: cards link to every page in the section`, info.cards.join(',') === L.pages.join(',') && info.hrefs.join(',') === L.pages.map(p => '#' + p).join(','), info.cards.join(','));
    ok(`landing #${id}: breadcrumb names the section`, (await page.textContent('#crumb')).startsWith(L.name));
    for (const p of L.pages) {
      await page.goto(URL + '#' + p); await page.waitForTimeout(40);
      const c = await page.evaluate(() => ({ crumb: document.getElementById('crumb').textContent, sec: document.querySelector('section.tab.active').dataset.sec, cur: (document.querySelector('#siteNav a[aria-current="page"]') || {}).dataset }));
      ok(`page #${p}: breadcrumb shows "${L.name}" and section colour`, c.crumb.startsWith(L.name + '›') && c.sec === info.sec && c.cur && c.cur.tab === p, c.crumb);
    }
    await page.goto(URL + '#' + id); await page.waitForTimeout(40);
    await page.click(`#tab-${id} .page-card h3 a >> nth=0`); await page.waitForTimeout(60);
    ok(`landing #${id}: first card navigates`, (await page.evaluate(() => document.querySelector('section.tab.active').id)) === 'tab-' + L.pages[0]);
  }
  ok('three sections have distinct colours', await page.evaluate(() => { const c = ['research','planning','training'].map(k => { const d = document.querySelector(`.nav-group[data-sec="${k}"] .sec-ico`); return getComputedStyle(d).backgroundColor; }); return new Set(c).size === 3; }));
  await page.goto(URL + '#home'); await page.waitForTimeout(60);
  const homeSecs = await page.$$eval('#homeSections .home-sec', els => els.map(e => ({ h: e.querySelector('h3').textContent.trim(), btn: e.querySelector('a.btn').getAttribute('href'), links: e.querySelectorAll('li a').length })));
  ok('home: three large section cards', homeSecs.length === 3 && homeSecs.map(s => s.h).join('|') === 'Research|Planning for incidents|Training and practice' && homeSecs.map(s => s.btn).join(',') === '#research,#incident-planning,#training' && homeSecs.every(s => s.links >= 4), JSON.stringify(homeSecs));
  ok('home: section cards come before the role routes', await page.evaluate(() => { const a = document.getElementById('homeSections'), r = document.querySelector('#tab-home .role-card'); return !!(a.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING); }));
  ok('home: disclaimer, progress and role routes kept', /For training only\. This is not a clinical protocol\./.test(await page.textContent('#tab-home')) && (await page.locator('#homeProgress .prog-row').count()) === 8 && (await page.locator('#tab-home .role-card').count()) === 3);
  ok('home: every role-route link is labelled with its section', await page.evaluate(() => [...document.querySelectorAll('#tab-home .role-card li')].every(li => li.querySelector('.sec-tag'))));
  await page.click('#homeSections .home-sec[data-sec="planning"] a.btn'); await page.waitForTimeout(60);
  ok('home: Planning card opens the Planning landing page', (await page.evaluate(() => document.querySelector('section.tab.active').id)) === 'tab-incident-planning');
  for (const [h, tab] of Object.entries(OLD_HASHES)) {
    await page.goto(URL + '#home'); await page.goto(URL + '#' + h); await page.waitForTimeout(40);
    const act = await page.evaluate(() => document.querySelector('section.tab.active').id);
    ok(`old hash #${h} still resolves`, act === 'tab-' + tab, act);
  }
  await page.goto(URL + '#home'); await page.goto(URL + '#practise'); await page.waitForTimeout(60);
  ok('alias #practise redirects to #training', (await page.evaluate(() => [document.querySelector('section.tab.active').id, location.hash].join(' '))) === 'tab-training #training');
  await page.goto(URL + '#planning-for-incidents'); await page.waitForTimeout(60);
  ok('alias #planning-for-incidents redirects to the Planning landing page', (await page.evaluate(() => location.hash)) === '#incident-planning');
  await page.goto(URL + '#pr-mitt'); await page.waitForTimeout(60);
  ok('Planning links to the quick-reference cards in Printables', (await page.locator('#tab-incident-planning a[href="#pr-tst"]').count()) === 1 && (await page.evaluate(() => document.querySelector('section.tab.active').id)) === 'tab-printables');

  // ---------- British English: visible text on every page ----------
  const usHits = [], titleHits = [];
  async function scanUS(where) {
    const r = await page.evaluate(src => {
      const re = new RegExp(src, 'gi');
      document.querySelectorAll('details').forEach(d => d.open = true);
      let body = document.body.innerText;
      // Cited titles (link text of sources) may keep their original spelling; check them separately.
      const cited = [...document.querySelectorAll('a.url')].map(a => a.innerText).filter(Boolean);
      cited.forEach(c => { body = body.split(c).join(' '); });
      const attrs = [...document.querySelectorAll('[aria-label],[title],[alt],[placeholder]')].map(e => ['aria-label','title','alt','placeholder'].map(a => e.getAttribute(a) || '').join(' ')).join(' ');
      const hit = s => [...s.matchAll(re)].map(m => m[0]);
      return { body: hit(body + ' ' + attrs + ' ' + document.title), cited: hit(cited.join(' ')) };
    }, US_RE.source);
    r.body.forEach(w => usHits.push(where + ':' + w)); r.cited.forEach(w => titleHits.push(where + ':' + w));
  }
  for (const t of TABS) { await page.goto(URL + '#' + t); await page.waitForTimeout(40); await scanUS('#' + t); }
  const modIds = await page.evaluate(() => MODULES.map(m => m.id));
  for (const id of modIds) for (const tb of ['mt-obj', 'mt-learn', 'mt-quiz']) {
    await page.goto(URL + '#learn/' + id); await page.waitForTimeout(30); await page.click('#' + tb); await scanUS(`#learn/${id}/${tb}`);
  }
  await page.goto(URL + '#drill'); await page.click('#cardPills button[data-i="0"]'); await page.click('#drillSubmit'); await scanUS('#drill feedback');
  await page.goto(URL + '#trainer'); await page.click('#trWhyBtn').catch(() => {}); await scanUS('#trainer');
  await page.goto(URL + '#home'); await page.reload(); // the scan opened every <details>; start the later checks from a fresh page
  ok('British English: no common American spellings in visible text on any page', usHits.length === 0, usHits.slice(0, 10).join(' '));
  ok('British English: cited titles checked separately (original spelling allowed)', true, titleHits.length ? 'kept as published: ' + [...new Set(titleHits.map(h => h.split(':').pop()))].join(', ') : 'none found');
  ok('British English: scan regex catches American spellings', ['colour-coded color', 'hemorrhage', 'organize', 'pediatric', 'analyze'].every(w => new RegExp(US_RE.source, 'i').test(w)) && !['colour','haemorrhage','organise','paediatric','analyse','size','programme','practice'].some(w => new RegExp(US_RE.source, 'i').test(w)));
  await page.goto(URL + '#home');
  await page.fill('#siteSearch', 'atropine'); await page.waitForTimeout(80);
  const secNames = await page.$$eval('#searchResults .r-sec .sec-tag', els => [...new Set(els.map(e => e.textContent))]);
  ok('search: results show the new section names', secNames.length > 0 && secNames.every(n => ['Research', 'Planning for incidents', 'Training and practice'].includes(n)), secNames.join(','));
  await page.keyboard.press('Escape');

  // Incident filter (existing)
  await page.goto(URL + '#incidents');
  const countAll = await page.locator('#incList article').count();
  ok('incidents: 10 cards initially', countAll === 10, String(countAll));
  await page.fill('#incSearch', 'Manchester');
  let n = await page.locator('#incList article').count();
  ok('incidents: search "Manchester" filters', n >= 1 && n < 10, String(n));
  const firstName = await page.locator('#incList article h3').first().textContent();
  ok('incidents: Manchester card shown', /Manchester/.test(firstName), firstName);
  await page.fill('#incSearch', '');
  await page.selectOption('#incType', 'ARCH_02');
  n = await page.locator('#incList article').count();
  ok('incidents: type filter ARCH_02', n === 6, String(n));
  await page.selectOption('#incType', '');
  await page.selectOption('#incYear', '2017');
  n = await page.locator('#incList article').count();
  ok('incidents: year 2017', n === 5, String(n));
  await page.selectOption('#incYear', '');
  await page.selectOption('#incVer', 'allok');
  n = await page.locator('#incList article').count();
  ok('incidents: only-confirmed filter', n >= 0 && n < 10, String(n));
  await page.selectOption('#incVer', '');
  await page.fill('#incSearch', 'zzzznomatch');
  ok('incidents: empty state', (await page.locator('#incList .empty').count()) === 1);
  await page.fill('#incSearch', '');
  ok('registry rows', (await page.locator('#regTable tbody tr').count()) > 20);

  // ---------- European incidents ----------
  const EU = await page.evaluate(() => ({ n: EUROPE_INCIDENTS.length, tp: EUROPE_TEACHING_POINTS.length, nf: EUROPE_NOT_FOUND.length, src: Object.keys(EU_SRC).length,
    paris: EUROPE_INCIDENTS.find(i => i.id === 'paris-2015') }));
  const vis = sel => page.evaluate(s => [...document.querySelectorAll(s)].filter(e => e.offsetParent !== null).length, sel);
  await page.goto(URL + '#incidents');
  ok('europe: data has 7 incidents', EU.n === 7, String(EU.n));
  ok('region All: 10 UK + 7 European cards', (await vis('#incList article')) === 10 && (await vis('#eurList article')) === EU.n);
  ok('region All: count text', /Showing 17 of 17 incidents \(UK 10 of 10, Europe 7 of 7\)/.test(await page.textContent('#incCount')), await page.textContent('#incCount'));
  await page.selectOption('#incRegion', 'uk');
  ok('region UK: 10 cards, European block hidden', (await vis('#tab-incidents article')) === 10 && await page.isHidden('#eurBlock') && /Showing 10 of 10 incidents \(UK\)/.test(await page.textContent('#incCount')));
  await page.selectOption('#incRegion', 'europe');
  ok('region Europe: 7 cards, UK block hidden', (await vis('#tab-incidents article')) === 7 && await page.isHidden('#ukBlock') && /Showing 7 of 7 incidents \(Europe\)/.test(await page.textContent('#incCount')));
  await page.selectOption('#incRegion', '');
  ok('region All again: 17 cards', (await vis('#tab-incidents article')) === 17);
  const pc = '#eurList article[data-inc="paris-2015"]';
  ok('europe card: Paris renders with confidence badge', /High confidence/.test(await page.textContent(pc + ' .inc-head')));
  const factLinks = await page.$$eval(pc + ' .eu-facts li', lis => lis.map(li => ({ badge: !!li.querySelector('.badge'), href: (li.querySelector('a.url') || {}).href || '' })));
  ok('europe card: every medical fact has a confidence badge and source link', factLinks.length === EU.paris.medicalFacts.length && factLinks.every(f => f.badge && /^https:\/\//.test(f.href)), String(factLinks.length));
  ok('europe card: fact links match data URLs', factLinks.every((f, k) => f.href === EU.paris.medicalFacts[k].url));
  ok('europe card: lessons with source links', (await page.locator(pc + ' .eu-list li a.url').count()) === EU.paris.lessons.length);
  ok('europe card: caveats shown', (await page.textContent(pc)).includes(EU.paris.caveats));
  ok('europe card: conflicting injured figures kept side by side', /352 \(EJCTS 2017\), 351 \(Ann Vasc Surg 2017\), 495/.test(await page.textContent(pc)) && /Sources disagree/.test(await page.textContent(pc + ' .eu-conflict')));
  ok('europe card: Nice death toll disagreement stated', /86 or 87/.test(await page.textContent('#eurList [data-inc="nice-2016"] .eu-conflict')));
  ok('europe card: Madrid has no disagreement callout', (await page.locator('#eurList [data-inc="madrid-2004"] .eu-conflict').count()) === 0);
  ok('europe card: Brussels shows low confidence', /Low confidence/.test(await page.textContent('#eurList [data-inc="brussels-2016"] .inc-head')));
  await page.fill('#incSearch', 'Bataclan');
  ok('incidents search "Bataclan" finds Paris only', (await vis('#eurList article')) === 1 && (await page.locator('#incList article').count()) === 0);
  await page.fill('#incSearch', '');
  await page.selectOption('#incType', 'eu:vehicle');
  ok('europe type filter: vehicle ramming = 3', (await vis('#eurList article')) === 3 && (await page.locator('#incList article').count()) === 0);
  await page.selectOption('#incType', '');
  await page.selectOption('#incVer', 'eu-low');
  ok('europe confidence filter: low = Brussels', (await vis('#eurList article')) === 1 && /Brussels/.test(await page.textContent('#eurList article h3')));
  await page.selectOption('#incVer', '');
  await page.selectOption('#incYear', '2004');
  ok('year filter includes European years (2004 = Madrid)', (await vis('#eurList article')) === 1 && (await page.locator('#incList article').count()) === 0);
  await page.selectOption('#incYear', '');
  ok('european lessons block from teaching points, each cited', (await page.locator('#eurLessons li').count()) === EU.tp && (await page.locator('#eurLessons li a.url').count()) === EU.tp);
  ok('european not-found list', (await page.locator('#eurNotFound li').count()) === EU.nf && /Vienna 2020/.test(await page.textContent('#eurNotFound')));
  await page.selectOption('#incRegion', 'europe');
  await page.evaluate(() => { document.getElementById('europe').scrollIntoView(); window.scrollBy(0, -80); });
  await shot(page, 'screenshot-desktop-europe.png');
  await page.selectOption('#incRegion', 'uk');
  await page.goto(URL + '#europe'); await page.waitForTimeout(80);
  ok('#europe link opens the European block even when filtered to UK', await page.isVisible('#europe') && (await page.inputValue('#incRegion')) === '');
  await page.goto(URL + '#sources');
  const euSrcCard = page.locator('#srcList .card', { hasText: 'European incident sources' });
  ok('sources: European group lists every source with a link', (await euSrcCard.locator('a.url').count()) === EU.src, String(await euSrcCard.locator('a.url').count()));
  ok('sources: European not-found items in unverified list', (await page.locator('#unvList li', { hasText: 'Europe:' }).count()) === EU.nf);
  await page.goto(URL + '#home');
  ok('home tile counts 17 incidents', /17Incidents in the database10 UK \(2016–2024\), 7 European \(2004–2017\)/.test(await page.textContent('#homeTiles')), await page.textContent('#homeTiles .tile'));
  ok('home quick link mentions European incidents', /Ten UK and seven European incidents/.test(await page.textContent('#tab-home')));
  await page.goto(URL + '#learn/m8'); await page.waitForTimeout(80);
  await page.click('#mt-learn');
  ok('module 8 links to European incidents', (await page.locator('#mp-learn a[href="#europe"]').count()) === 1);
  await page.click('#mp-learn a[href="#europe"]'); await page.waitForTimeout(80);
  ok('module 8 link navigates to European incidents', (await page.evaluate(() => document.querySelector('section.tab.active').id)) === 'tab-incidents' && await page.isVisible('#europe'));
  const euQ = await page.evaluate(() => {
    const facts = EUROPE_INCIDENTS.flatMap(i => i.medicalFacts);
    return MODULES.flatMap(m => m.quiz.filter(q => q.src.f === 'VE').map(q => ({ m: m.id, url: q.src.u, high: facts.some(f => f.url === q.src.u && f.confidence === 'high'), why: q.why })));
  });
  ok('european quiz questions cite a high-confidence source', euQ.length >= 3 && euQ.every(q => q.high), JSON.stringify(euQ.map(q => q.m)));

  // Drill (existing): all 10 cards with correct answers
  await page.goto(URL + '#drill');
  const cards = await page.evaluate(() => SIMULATION_CARDS.map(c => ({ id: c.id, tst: c.expectedTST, mitt: c.expectedMITT, groups: actionKey(c).groups })));
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    await page.click(`#cardPills button[data-i="${i}"]`);
    await page.check(`input[name="tst"][value="${c.tst}"]`, { force: true });
    await page.check(`input[name="mitt"][value="${c.mitt}"]`, { force: true });
    for (const g of c.groups) await page.click(`#actGrid button[data-k="${g[0]}"]`);
    await page.click('#drillSubmit');
    const cls = await page.getAttribute('#drillFeedback', 'class');
    ok(`drill ${c.id} correct answer → good feedback`, /good/.test(cls), cls);
  }
  ok('drill score TST 10/10', (await page.textContent('#scTST')) === '10/10', await page.textContent('#scTST'));
  ok('drill score MITT 10/10', (await page.textContent('#scMITT')) === '10/10');
  ok('drill score actions 10/10', (await page.textContent('#scACT')) === '10/10');
  await page.click('#cardPills button[data-i="9"]');
  await page.check('input[name="tst"][value="P1"]', { force: true });
  await page.click('#drillSubmit');
  const cls2 = await page.getAttribute('#drillFeedback', 'class');
  const fbText = await page.textContent('#drillFeedback');
  ok('drill wrong answer → bad feedback with rationale', /bad/.test(cls2) && /Rationale/.test(fbText) && /NOT BREATHING/.test(fbText));
  ok('drill TST now 10/11', (await page.textContent('#scTST')) === '10/11');
  await page.click('#cardPills button[data-i="8"]');
  await page.check('input[name="mitt"][value="P1"]', { force: true });
  await page.click('#drillSubmit');
  ok('drill SIM_09 shows dose warning', /Not verified against JRCALC or TOXBASE/.test(await page.textContent('#drillFeedback')));
  await page.click('#drillReset');
  ok('drill reset', (await page.textContent('#scTST')) === '0/0' && (await page.textContent('#scMITT')) === '0/0');
  await shot(page, 'screenshot-desktop-drill.png');

  // SOPs (existing)
  await page.goto(URL + '#sops');
  ok('SOPs: 7 collapsibles', (await page.locator('#sopList details').count()) === 7);
  await page.click('#sopToggle');
  ok('SOPs: expand all', await page.evaluate(() => [...document.querySelectorAll('#sopList details')].every(d => d.open)));
  ok('SOP 2: unsourced 8 P1/hr figure not used', /do not use the "8 P1 per hour per MTC" figure/.test(await page.textContent('#sopList')));

  // Surge model (existing)
  await page.goto(URL + '#planning');
  const before = await page.textContent('#surgeOut');
  await page.selectOption('#modArch', 'ARCH_04');
  await page.fill('#modCap', '5');
  await page.dispatchEvent('#modCap', 'input');
  const after = await page.textContent('#surgeOut');
  ok('surge model recalculates', before !== after && /your figure of 5/.test(after));
  ok('TNA tiers rendered', (await page.locator('#tnaList > details').count()) === 4);

  // Clinical (existing)
  await page.goto(URL + '#clinical');
  ok('clinical: 19 statements', (await page.locator('#clinList li').count()) === 19);
  ok('clinical: dose warnings present', (await page.locator('#clinList .dose-warn').count()) === 3);
  await page.goto(URL + '#triage');
  ok('triage: MITT heart-rate >100 vs ≥100 flag kept', /The published tool reads "100 or more". The EMJ 2022 text reads ">100"/.test(await page.textContent('#tab-triage')));

  // ---------- Learning pathway ----------
  await page.goto(URL + '#learn');
  ok('learn: 8 module cards', (await page.locator('#moduleGrid > li').count()) === 8);
  const quizCounts = await page.evaluate(() => MODULES.map(m => m.quiz.length));
  ok('learn: every module has 5–8 questions', quizCounts.every(c => c >= 5 && c <= 8), quizCounts.join(','));
  ok('learn: every question has rationale and source', await page.evaluate(() => MODULES.every(m => m.quiz.every(q => q.why && q.why.length > 20 && q.src && q.src.c && VFILE[q.src.f]))));
  ok('learn: every module has objectives and content', await page.evaluate(() => MODULES.every(m => m.objectives.length >= 3 && m.content.length > 200)));
  await page.goto(URL + '#learn/m2');
  await page.waitForTimeout(80);
  ok('module view opens', await page.isVisible('#moduleView') && /Ten Second Triage/.test(await page.textContent('#modTitle')));
  // keyboard: arrow keys move between module tabs
  await page.focus('#mt-obj');
  await page.keyboard.press('ArrowRight');
  ok('module tabs: ArrowRight selects Teaching', (await page.getAttribute('#mt-learn', 'aria-selected')) === 'true' && await page.isVisible('#mp-learn') && !(await page.isVisible('#mp-obj')));
  ok('module tabs: roving tabindex', (await page.getAttribute('#mt-obj', 'tabindex')) === '-1' && (await page.evaluate(() => document.activeElement.id)) === 'mt-learn');
  await page.click('#mt-quiz');
  const m2 = await page.evaluate(() => MODULES.find(m => m.id === 'm2').quiz.map(q => q.a));
  for (let i = 0; i < m2.length; i++) {
    await page.check(`input[name="m2-q${i}"][value="${m2[i]}"]`);
    await page.click(`#m2-q${i} [data-check]`);
  }
  ok('quiz: all answers give positive feedback', (await page.locator('#mp-quiz .qfb .feedback.good').count()) === m2.length);
  ok('quiz: feedback shows rationale and source', /Rationale\./.test(await page.textContent('#m2-q0-fb')) && /Source:/.test(await page.textContent('#m2-q0-fb')));
  ok('quiz: summary says passed', /Module passed/.test(await page.textContent('#quizSummary')));
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('mch-progress-v1')));
  ok('quiz: progress saved to localStorage', saved && saved.modules.m2 && saved.modules.m2.passed === true);
  await page.reload();
  await page.goto(URL + '#learn');
  await page.waitForTimeout(80);
  ok('progress persists after reload', /Passed/.test(await page.textContent('#moduleGrid > li:nth-child(2)')));
  await page.goto(URL + '#home');
  ok('home progress overview shows 1/8', /1\/8/.test(await page.textContent('#heroProgress')) && /Passed/.test(await page.textContent('#homeProgress')));
  // wrong answer feedback
  await page.goto(URL + '#learn/m6');
  await page.click('#mt-quiz');
  const m6a = await page.evaluate(() => MODULES.find(m => m.id === 'm6').quiz[5].a);
  await page.check(`input[name="m6-q5"][value="${(m6a + 1) % 4}"]`);
  await page.click('#m6-q5 [data-check]');
  const wrongFb = await page.textContent('#m6-q5-fb');
  ok('quiz: wrong answer shows correct answer, rationale, source and dose warning', /Not quite/.test(wrongFb) && /Rationale/.test(wrongFb) && /Source:/.test(wrongFb) && /Not verified against JRCALC or TOXBASE/.test(wrongFb));
  ok('quiz: options marked with text, not colour only', /Correct answer/.test(await page.textContent('#m6-q5')) && /Your answer/.test(await page.textContent('#m6-q5')));
  await page.click('#mt-obj');
  await shot(page, 'screenshot-desktop-module.png');
  await page.goto(URL + '#learn/m2'); await page.click('#mt-quiz'); await page.waitForTimeout(50);
  await shot(page, 'screenshot-desktop-quiz.png');

  // ---------- Triage trainer ----------
  await page.goto(URL + '#trainer');
  await page.selectOption('#trCard', '2'); // SIM_03, TST: No, No, Yes, Yes -> P1
  for (const a of ['0', '0', '1', '1']) await page.click(`#trFlow .current [data-ans="${a}"]`);
  ok('trainer: TST path walked to P1', /Your outcome/.test(await page.textContent('#trOutcome')) && /matches the expected TST/.test(await page.textContent('#trOutcome')));
  ok('trainer: path highlighted (4 visited nodes)', (await page.locator('#trFlow .tnode.visited').count()) === 4);
  await page.click('#trWhyBtn');
  ok('trainer: show me why explains the path', await page.isVisible('#trWhy') && /neck/.test(await page.textContent('#trWhy')) && (await page.getAttribute('#trWhyBtn', 'aria-expanded')) === 'true');
  await shot(page, 'screenshot-desktop-trainer.png', true);
  // wrong path is flagged
  await page.selectOption('#trCard', '0'); // SIM_01: walking Yes is wrong
  await page.click('#trFlow .current [data-ans="1"]');
  ok('trainer: wrong path flagged', /expected TST category/.test(await page.textContent('#trOutcome')));
  await page.click('#trWhyBtn');
  ok('trainer: divergence marked on flowchart', (await page.locator('#trFlow .tnode.diff').count()) === 1 && /Where your path differed/.test(await page.textContent('#trWhy')));
  // MITT via keyboard tab switch
  await page.focus('#trTab-TST');
  await page.keyboard.press('ArrowRight');
  ok('trainer: arrow key switches to MITT tab', (await page.getAttribute('#trTab-MITT', 'aria-selected')) === 'true');
  await page.selectOption('#trCard', '9'); // SIM_10 MITT: No, No, No -> DEAD
  for (const a of ['0', '0', '0']) await page.click(`#trFlow .current [data-ans="${a}"]`);
  ok('trainer: MITT path walked to DEAD', /DEAD/.test(await page.textContent('#trOutcome')) && /matches the expected MITT/.test(await page.textContent('#trOutcome')));
  await page.selectOption('#trCard', '2'); // SIM_03 MITT: HR step reached
  for (const a of ['0', '0', '1', '1', '0', '0', '1']) await page.click(`#trFlow .current [data-ans="${a}"]`);
  ok('trainer: MITT SIM_03 reaches P1 at heart-rate step', /matches the expected MITT/.test(await page.textContent('#trOutcome')));

  // ---------- Timed surge exercise ----------
  await page.goto(URL + '#surge');
  await page.check('input[name="sgMode"][value="MITT"]');
  await page.selectOption('#sgTime', '15');
  await page.selectOption('#sgCount', '10');
  await page.click('#sgStart');
  let madeOver = false, madeUnder = false;
  for (let i = 0; i < 10; i++) {
    await page.waitForSelector('#sgCats button:not([disabled])');
    const exp = await page.evaluate(() => SG.cards[SG.i].expectedMITT);
    let choice = exp;
    if (exp === 'DEAD' && !madeOver) { choice = 'P1'; madeOver = true; }
    else if (exp === 'P1' && !madeUnder) { choice = 'P3'; madeUnder = true; }
    if (i === 3) await shot(page, 'screenshot-desktop-surge-running.png');
    await page.click(`#sgCats [data-cat="${choice}"]`);
  }
  await page.waitForSelector('#sgDebrief:not([hidden])');
  ok('surge: debrief shown', await page.isVisible('#sgDebrief'));
  ok('surge: accuracy 80%', (await page.textContent('#sgAcc')) === '80%', await page.textContent('#sgAcc'));
  ok('surge: over-triage 1, under-triage 1', (await page.textContent('#sgOver')) === '1' && (await page.textContent('#sgUnder')) === '1');
  const dtext = await page.textContent('#sgDebrief');
  ok('surge: debrief lists wrong cards with rationale and time per decision', /Cards to review \(2\)/.test(dtext) && /Rationale/.test(dtext) && /Mean time per decision/.test(dtext));
  ok('surge: says training simulation', /training simulation/i.test(await page.textContent('#tab-surge')));
  ok('surge: run saved', await page.evaluate(() => JSON.parse(localStorage.getItem('mch-progress-v1')).surge.length >= 1));
  await shot(page, 'screenshot-desktop-surge-debrief.png');
  // timeout path: 15 s countdown expires
  await page.click('#sgSetupBtn');
  await page.check('input[name="sgMode"][value="TST"]');
  await page.selectOption('#sgTime', '15');
  await page.selectOption('#sgCount', '5');
  await page.click('#sgStart');
  await page.waitForSelector('#sgCats button:not([disabled])');
  await page.waitForFunction(() => SG && SG.results.length >= 1 && SG.results[0].cls === 'timeout', null, { timeout: 20000 });
  ok('surge: countdown expiry records no decision', true);
  await page.click('#sgStop');
  await page.waitForSelector('#sgDebrief:not([hidden])');

  // ---------- Teach, printables, glossary ----------
  await page.goto(URL + '#teach');
  ok('teach: 3 session plans', (await page.locator('#planList details').count()) === 3);
  await page.evaluate(() => document.querySelectorAll('#planList details').forEach(d => d.open = true));
  const teachText = await page.textContent('#tab-teach');
  ok('teach: plans have objectives, timings, materials, debrief', ['Objectives', 'Timings', 'Materials', 'Debrief questions'].every(w => teachText.includes(w)));
  ok('teach: injects marked fictional', (await page.locator('#injectList .inject').count()) === 8 && (await page.locator('#tab-teach .fict').count()) >= 9);
  ok('teach: hot-debrief template present', (await page.locator('#pr-debrief textarea').count()) === 7);
  ok('teach: placeholders, no invented phone numbers', /\[local number/.test(teachText) && !/\b0\d{3,4}[ -]?\d{3}[ -]?\d{3,4}\b/.test(teachText));
  await shot(page, 'screenshot-desktop-teach.png');
  const printIds = await page.$$eval('[data-print]', bs => bs.map(b => b.dataset.print));
  ok('print buttons exist for each printable', ['pr-tst', 'pr-mitt', 'pr-cards', 'pr-injects', 'pr-debrief', 'pr-plan-huddle', 'pr-plan-teach60', 'pr-plan-tabletop'].every(id => printIds.includes(id)), printIds.join(','));
  ok('every print button has a target', await page.evaluate(() => [...document.querySelectorAll('[data-print]')].every(b => document.getElementById(b.dataset.print))));
  await page.goto(URL + '#printables');
  ok('printables: 10 casualty cards', (await page.locator('#casCards .cas').count()) === 10);
  await page.evaluate(() => { window.__printed = 0; window.print = () => { window.__printed++; }; });
  await page.click('[data-print="pr-tst"]');
  ok('print: button calls print with only that card', (await page.evaluate(() => window.__printed)) === 1 && /Ten Second Triage/.test(await page.textContent('#printRoot')) && !/Major Incident Triage Tool/.test(await page.textContent('#printRoot')));
  await page.emulateMedia({ media: 'print' });
  const pv = await page.evaluate(() => ({ root: getComputedStyle(document.getElementById('printRoot')).display, head: getComputedStyle(document.querySelector('header.site')).display, main: getComputedStyle(document.querySelector('.shell')).display }));
  ok('print CSS: only the chosen item prints', pv.root === 'block' && pv.head === 'none' && pv.main === 'none', JSON.stringify(pv));
  await page.emulateMedia({ media: 'screen' });
  await page.evaluate(() => window.dispatchEvent(new Event('afterprint')));
  await shot(page, 'screenshot-desktop-printables.png');
  await page.goto(URL + '#glossary');
  const gl = await page.evaluate(() => GLOSSARY.length);
  ok('glossary: all terms listed', (await page.locator('#glossList .g').count()) === gl, String(gl));
  ok('glossary: general-knowledge expansions labelled', (await page.locator('#glossList').textContent()).includes('not in the verified files'));
  await page.fill('#glossFilter', 'MITT');
  const gf = await page.locator('#glossList .g').count();
  ok('glossary: filter works', gf > 0 && gf < gl, String(gf));
  await page.fill('#glossFilter', '');
  await shot(page, 'screenshot-desktop-glossary.png');

  // ---------- Search ----------
  await page.goto(URL + '#home');
  await page.fill('#siteSearch', 'Bataclan');
  await page.waitForTimeout(80);
  ok('search: results for "Bataclan"', (await page.locator('#searchResults a').count()) > 0);
  await page.click('#searchResults a >> nth=0');
  await page.waitForTimeout(80);
  ok('search: Bataclan result opens the European card', (await page.evaluate(() => document.querySelector('section.tab.active').id)) === 'tab-incidents' && await page.evaluate(() => !!document.activeElement.closest('[data-inc="paris-2015"]')));
  await page.goto(URL + '#incidents');
  await page.selectOption('#incRegion', 'uk');
  await page.goto(URL + '#home');
  await page.fill('#siteSearch', 'décollement');
  await page.waitForTimeout(80);
  const blr = await page.locator('#searchResults a', { hasText: 'décollement' }).count();
  ok('search: finds European facts while incidents are filtered to UK', blr > 0, String(blr));
  await page.click('#searchResults a >> nth=0'); await page.waitForTimeout(80);
  ok('search: filtered-out European card is revealed', await page.evaluate(() => { const c = document.activeElement.closest('[data-inc]'); return !!c && c.dataset.inc === 'berlin-2016' && c.offsetParent !== null; }));
  await page.goto(URL + '#incidents'); await page.selectOption('#incRegion', '');
  await page.goto(URL + '#home');
  await page.fill('#siteSearch', 'atropine');
  await page.waitForTimeout(80);
  const nres = await page.locator('#searchResults a').count();
  ok('search: results for "atropine"', nres > 0, String(nres));
  await page.click('#searchResults a >> nth=0');
  await page.waitForTimeout(80);
  const act = await page.evaluate(() => document.querySelector('section.tab.active').id);
  ok('search: result navigates to a section', act !== 'tab-home', act);
  await page.fill('#siteSearch', 'clipboard zone');
  await page.waitForTimeout(50);
  ok('search: finds module and reference content', (await page.locator('#searchResults a').count()) >= 2);
  await page.keyboard.press('Escape');
  ok('search: Escape closes results', await page.isHidden('#searchResults'));

  // ---------- Contrast (both themes) ----------
  const PAIRS = [['text','bg'],['text-muted','bg'],['text-muted','surface'],['text-muted','surface-2'],['accent-text','accent-soft'],['bg','accent'],['accent-text','surface'],['link','bg'],['link','surface'],['warn-text','warn-bg'],['danger-text','danger-bg'],['ok-text','ok-bg'],['unv-text','unv-bg'],['p1-fg','p1-bg'],['p2-fg','p2-bg'],['p3-fg','p3-bg'],['nb-fg','nb-bg'],['dead-fg','dead-bg'],['sec-r-text','sec-r-soft'],['sec-r-text','surface'],['sec-p-text','sec-p-soft'],['sec-p-text','surface'],['sec-t-text','sec-t-soft'],['sec-t-text','surface'],['bg','sec-r'],['bg','sec-p'],['bg','sec-t']];
  async function contrastFails(p) {
    return p.evaluate(pairs => {
      const lum = c => { const [r, g, b] = c.match(/\d+/g).slice(0, 3).map(Number).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
      const fails = [];
      for (const [f, b] of pairs) {
        const el = document.createElement('span'); el.style.color = `var(--${f})`; el.style.background = `var(--${b})`; document.body.appendChild(el);
        const cs = getComputedStyle(el); const L1 = lum(cs.color), L2 = lum(cs.backgroundColor); el.remove();
        const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
        if (ratio < 4.5) fails.push(`${f}/${b}=${ratio.toFixed(2)}`);
      }
      return fails;
    }, PAIRS);
  }
  await page.evaluate(() => document.documentElement.setAttribute('data-theme', 'light'));
  let cf = await contrastFails(page);
  ok('contrast ≥ 4.5:1 for token pairs (light)', cf.length === 0, cf.join(' '));

  // Theme toggle (existing)
  await page.evaluate(() => document.documentElement.removeAttribute('data-theme'));
  await page.click('#themeBtn');
  const theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  ok('theme toggle sets data-theme', theme === 'dark', theme);
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  ok('dark body background', bg === 'rgb(17, 22, 21)', bg);
  cf = await contrastFails(page);
  ok('contrast ≥ 4.5:1 for token pairs (dark)', cf.length === 0, cf.join(' '));
  for (const t of ['home', 'triage', 'incidents', 'trainer', 'learn']) {
    await page.goto(URL + '#' + t); await page.waitForTimeout(80);
    await shot(page, `screenshot-desktop-${t}-dark.png`);
  }
  for (const t of Object.keys(LANDINGS)) { await page.goto(URL + '#' + t); await page.waitForTimeout(80); await shot(page, `screenshot-desktop-${t}-dark.png`); }
  await page.click('#themeBtn');
  await page.goto(URL + '#home'); await page.waitForTimeout(80);
  await shot(page, 'screenshot-desktop-home.png');
  await shot(page, 'screenshot-desktop-home-full.png', true);
  for (const t of Object.keys(LANDINGS)) { await page.goto(URL + '#' + t); await page.waitForTimeout(80); await shot(page, `screenshot-desktop-${t}.png`, true); }
  await page.goto(URL + '#learn'); await page.waitForTimeout(80);
  await shot(page, 'screenshot-desktop-learn.png');
  await page.goto(URL + '#triage'); await page.waitForTimeout(80);
  await shot(page, 'screenshot-desktop-triage.png', true);
  await page.context().close();

  // ---------- Works without localStorage ----------
  const ns = await newPage(1280, 900, 'light', { noStorage: true, tag: 'nostorage' });
  await ns.goto(URL + '#learn/m1');
  await ns.click('#mt-quiz');
  const m1a = await ns.evaluate(() => MODULES[0].quiz[0].a);
  await ns.check(`input[name="m1-q0"][value="${m1a}"]`);
  await ns.click('#m1-q0 [data-check]');
  ok('no localStorage: quiz still works', /Correct/.test(await ns.textContent('#m1-q0-fb')));
  await ns.context().close();

  // ---------- Mobile 375 ----------
  async function overflow(m) { return m.evaluate(() => { document.querySelectorAll('details').forEach(d => d.open = true); return document.documentElement.scrollWidth; }); }
  for (const scheme of ['light', 'dark']) {
    const m = await newPage(375, 812, scheme, { tag: '375-' + scheme });
    for (const t of TABS) {
      await m.goto(URL + '#' + t);
      await m.waitForTimeout(60);
      const sw = await overflow(m);
      ok(`mobile(${scheme}) #${t} no horizontal overflow`, sw <= 375, `scrollWidth=${sw}`);
      if (scheme === 'light' && ['home', 'research', 'incident-planning', 'training', 'triage', 'drill', 'incidents', 'sops', 'trainer', 'teach', 'printables', 'glossary', 'learn'].includes(t)) {
        await m.evaluate(() => window.scrollTo(0, 0));
        await shot(m, `screenshot-mobile-${t}.png`);
      }
    }
    // European database view at 375 px
    await m.goto(URL + '#incidents');
    await m.selectOption('#incRegion', 'europe');
    ok(`mobile(${scheme}) European incidents view no horizontal overflow`, (await overflow(m)) <= 375);
    if (scheme === 'light') { await m.evaluate(() => { document.querySelectorAll('details').forEach(d => d.open = false); document.getElementById('europe').scrollIntoView(); window.scrollBy(0, -70); }); await shot(m, 'screenshot-mobile-europe.png'); }
    // gutters: main content starts 16px from the edge
    await m.goto(URL + '#home');
    const gut = await m.evaluate(() => { const r = document.querySelector('#tab-home .hero').getBoundingClientRect(); return [Math.round(r.left), Math.round(375 - r.right)]; });
    ok(`mobile(${scheme}) 16px side gutters`, gut[0] === 16 && gut[1] === 16, gut.join(','));
    // interactive states
    await m.goto(URL + '#learn/m3'); await m.click('#mt-quiz');
    ok(`mobile(${scheme}) module quiz no overflow`, (await overflow(m)) <= 375);
    if (scheme === 'light') await shot(m, 'screenshot-mobile-quiz.png');
    await m.goto(URL + '#trainer'); await m.selectOption('#trCard', '4');
    for (const a of ['0', '0', '0', '1']) await m.click(`#trFlow .current [data-ans="${a}"]`);
    await m.click('#trWhyBtn');
    ok(`mobile(${scheme}) trainer with explanation no overflow`, (await overflow(m)) <= 375);
    await m.goto(URL + '#surge');
    await m.selectOption('#sgCount', '5');
    await m.click('#sgStart');
    await m.waitForSelector('#sgCats button:not([disabled])');
    ok(`mobile(${scheme}) surge running no overflow`, (await overflow(m)) <= 375);
    if (scheme === 'light') { await m.evaluate(() => window.scrollTo(0, 0)); await shot(m, 'screenshot-mobile-surge-running.png'); }
    for (let i = 0; i < 5; i++) { await m.waitForSelector('#sgCats button:not([disabled])'); await m.click('#sgCats button >> nth=0'); }
    await m.waitForSelector('#sgDebrief:not([hidden])');
    ok(`mobile(${scheme}) surge debrief no overflow`, (await overflow(m)) <= 375);
    if (scheme === 'light') await shot(m, 'screenshot-mobile-surge-debrief.png');
    // drawer navigation
    await m.goto(URL + '#home');
    await m.click('#menuBtn');
    ok(`mobile(${scheme}) menu opens`, await m.isVisible('#siteNav') && (await m.getAttribute('#menuBtn', 'aria-expanded')) === 'true');
    ok(`mobile(${scheme}) open menu no overflow`, (await overflow(m)) <= 375);
    ok(`mobile(${scheme}) menu shows the three section names`, (await m.$$eval('#siteNav .nav-h', els => els.filter(e => e.offsetParent !== null).map(e => e.textContent).join(','))) === 'Research,Planning for incidents,Training and practice,More');
    if (scheme === 'light') await shot(m, 'screenshot-mobile-menu.png');
    await m.click('#siteNav a[data-tab="glossary"]');
    await m.waitForTimeout(80);
    if (scheme === 'light') { for (const t of ['home', ...Object.keys(LANDINGS)]) { await m.goto(URL + '#' + t); await m.waitForTimeout(60); await shot(m, `screenshot-mobile-${t}-full.png`, true); } await m.goto(URL + '#glossary'); await m.waitForTimeout(60); }
    ok(`mobile(${scheme}) menu link navigates and closes`, (await m.evaluate(() => document.querySelector('section.tab.active').id)) === 'tab-glossary' && !(await m.isVisible('#menuClose')));
    if (scheme === 'dark') { await m.goto(URL + '#sources'); await shot(m, 'screenshot-mobile-sources-dark.png'); await m.goto(URL + '#learn'); await shot(m, 'screenshot-mobile-learn-dark.png'); }
    await m.context().close();
  }

  ok('no console/page errors', errors.length === 0, errors.join(' | '));
  console.log(results.join('\n'));
  console.log(`\n${results.filter(r => r.startsWith('PASS')).length}/${results.length} passed`);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
