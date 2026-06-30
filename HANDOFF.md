# QuickRank — Complete Handoff Document
Last Updated: 30 June 2026

## Project Overview
App Name: QuickRank (Free SEO + GMB + AI Visibility Tracker)
Live URL: https://teamtichyd-star.github.io/quickrank/
Repo: https://github.com/teamtichyd-star/quickrank
Dev Path: /Users/haritalla/Desktop/quickrank
Backups: /Users/haritalla/Desktop/quickrank_backups/
Owner: Hari Talla — Turnkey Interior Contractors, Hyderabad
Stack: Single index.html, Firebase Firestore, GitHub Pages, Google Places API, GSC OAuth, AI APIs

---

## Core Rules (NEVER break these)
1. Single index.html file ONLY — no separate JS/CSS files
2. Green theme: #0a5c36, #2ecc71, #d4f5e2
3. Always test on LIVE URL — Firebase blocks file://
4. Push via Mac terminal only
5. ALWAYS run grep diagnostics before making changes
6. ALWAYS backup before major changes: cp index.html /Users/haritalla/Desktop/quickrank_backups/index_backup_$(date +%Y%m%d)_desc.html
7. Use data-* attributes for onclick handlers — no inline string quotes
8. NO hardcoded business names, cities or keywords in AI prompts
9. All AI prompts must use dynamic company settings
10. Never use template literals with real newlines in python replacements
11. Never use spread operator inside JS strings built via python
12. AI keys stored in: users/{uid}/settings/aikeys
13. loadCompSettings() — only ONE instance must exist (currently at line ~3907)
14. getCurrentCompany() — only ONE instance, pulls from companies array

---

## Tech Stack
- Firebase Auth — Google Sign-in
- Firebase Firestore — database
- GitHub Pages — hosting
- Google Places API — GMB and Maps data
- GSC OAuth2 — Google Search Console
- Jina.ai — website content fetch via https://r.jina.ai/URL
- AI providers: Groq (free/fastest), OpenAI, Anthropic Claude, Gemini, Mistral, Cohere, Together
- Chart.js — charts
- jsPDF — PDF export

---

## Firebase Structure
users/{uid}/
  settings/
    aikeys     -> groq, openai, anthropic, gemini, mistral, cohere, together, aiChain
    gsc        -> accessToken, expiresAt, connectedAt, property
  companies/{companyId}/
    fields     -> name, website, industry, city, targetAreas, services,
                  gmbName, gmbAddress, gmbDescription, gmbPlaceId,
                  gmbLat, gmbLng, googlePlacesKey, gscProperty,
                  gmbReviews, gmbRating (auto-saved from Places API)
    keywords/  -> keyword, url, position, change, clicks, impressions, ctr, gscSynced
    locationKeywords/ -> keyword, currentRank, previousRank, lastUpdated
    gridCache/        -> keyword, size, label, results, cachedAt, top3, top10, found
    gridHistory/      -> same as gridCache, one entry per day per keyword
    aivisibility/     -> score, checkedAt, results

---

## Active Firebase Data
Active UID: aHpKtUM4ofRHQV0XXD04NeSKFyL2
Active Company ID: turnkey-interior-contractors
Company Name: Turnkey Interior Contractors
Website: https://turnkeyinteriorcontractors.com
GMB Name: TIC (TURNKEY INTERIOR CONTRACTORS)
GMB Place ID: ChIJxfKa-NuQyzsRZo3TiDBGjdw
GMB Lat: 17.4506074
GMB Lng: 78.3624082
GMB Rating: 4.5 stars, 17 reviews (auto-fetched from Places API)
Website Keywords: 18 unique keywords (5 duplicates removed 30 June)
GMB Location Keywords: 9 keywords (test interiors deleted 30 June)

---

## Current Sidebar Navigation
MAIN
  Dashboard (dashboard) — overall health score, actions, distribution
  Websites (ranktracker) — website keyword positions
  Locations (local) — GMB grid rank checker and overview
  Search Console (gsc) — GSC connected data
  Rank History (charts) — position history charts
TOOLS
  AI Visibility (aivisibility) — ChatGPT/Gemini/Perplexity checker
  Watchdog (watchdog) — daily action checklist
ACCOUNT
  Settings (settings) — company details, GSC, AI keys

---

## Key Functions Reference
callAI(provider, prompt, keys)       — calls any AI with fallback chain
loadAIKeys()                         — loads keys from Firestore aikeys doc
loadCompSettings()                   — loads current company settings (line ~3907)
getCurrentCompany()                  — returns active company object from companies array
getCurrentCompanyId()                — returns active company ID
switchCompany(id, name, event)       — switches active company
runAIVisibilityCheck()               — AI Visibility tab main function
analyzeGMBDescription()              — analyzes GMB description with AI
showPage(pageId, navEl)              — switches active page
connectGSC() / syncGSC()            — GSC OAuth and data sync
loadKeywords() / renderKeywords()    — website keyword management
updateRankTrackerStats(keywords)     — updates stat cards in Rank Tracker
getPosColor(pos)                     — returns color for position badge
openAiPanel(keyword, url)            — per-keyword AI analysis panel
buildGridResults(keyword, gridSize)  — builds GMB rank grid
renderGrid(results, size, kw, label) — renders grid on screen
saveGridCache() / loadGridCache()    — grid result caching
saveGridHistory() / loadGridHistory()— week-on-week grid comparison
renderGridComparison()               — shows improvement vs last check
findMyBusiness(results, name, co)    — matches business in Places API results
startBulkAudit()                     — bulk AI audit all keywords
loadDashboard()                      — loads dashboard data from all sources
updateOverallScore()                 — calculates overall health score
generateDashboardActions(settings)   — generates today priority actions
runGMBHealthCheck()                  — GMB Health tab main function
switchGMBTab(n)                      — switches GMB sub-tabs including health

---

## Page Structure (HTML order)
page-dashboard    — line ~407
page-ranktracker  — line ~512  ← MUST close before page-watchdog
page-watchdog     — line ~952
page-audit        — line ~990
page-local        — line ~996  (contains GMB tabs including gmb-health-tab)
page-gsc          — after local
page-charts       — after gsc
page-aivisibility — after charts
page-settings     — last

## GMB Tabs (inside page-local)
gmb-tab-overview   — Overview
gmb-tab-1          — Rank Grid
gmb-tab-3          — AI Push Strategy
gmb-tab-4          — Action Plan
gmb-health-tab     — GMB Health (class="gmb-tab-content")

---

## Completed Phases

Phase 11.5 — GMB Local Rank Tracker
Phase 11.6 — GMB Grid Fixes
Phase 12 — Business Settings Upgrade
Phase 13 — Dashboard ✅ DONE 29 June 2026
  Overall health score 0-100
  Today top 3 priority actions
  Position distribution chart
  Quick wins section
  Top keywords table
  4 score cards: Keywords / GMB / AI Visibility / GSC Clicks
  loadDashboard() / updateOverallScore() / generateDashboardActions()

Phase 14 — Rank Tracker Upgrade ✅ DONE 30 June 2026
  5 stat cards: Top 3 / Pos 4-10 / Pos 11-30 / Pos 30+ / Est Traffic
  Color coded position badges green/yellow/orange/red
  WIN badge on pos 4-20 keywords
  Easy Win Opportunities banner
  updateRankTrackerStats() / getPosColor() helpers

Phase 14E — Multi-AI Provider Manager ✅
Phase 15 — GMB Health Checker ✅ DONE 30 June 2026
  GMB Health Score 0-100
  Reviews + rating auto-fetched from Places API and saved to company doc
  Profile completeness 7-point checklist
  Activity recommendations
  Competitor comparison from Places API
  AI Fix Recommendations with copy buttons
  runGMBHealthCheck() — auto-runs when tab opened

Firebase Cleanup ✅ 30 June 2026
  Removed sbis-tic hardcoded default company creation
  Removed duplicate loadCompSettings() — one version at line ~3907
  Removed duplicate keywords — 18 unique remain
  Deleted test interiors location keyword
  Moved backup files to /Users/haritalla/Desktop/quickrank_backups/
  Fixed loadCompSettings to use currentCompanyId not limit(1)

---

## Current Rankings Data (30 June 2026)
Website Keywords (18 unique, GSC synced):
  tic — #2
  interior contractors in hyderabad — #7
  turnkey interior contractors — #8
  office interior designers in hyderabad — #12
  commercial interior designers in hyderabad — #16
  best interior designers in gachibowli — #76
  Most others — #6 (GSC average position)

GMB Location Keywords (9):
  turnkey interior contractors — #1
  turnkey interior design companies in hyderabad — #1
  turnkey — #1
  home interior contractors in hyderabad — #8
  interior — #12
  commercial interior contractors in hyderabad — #7
  office interior designers in hyderabad — #13
  interior fit out companies in hyderabad — #18
  interior contractors in hyderabad — #99

---

## Known Issues and Watch Out For
1. JS string corruption — never use template literals with real newlines in python
2. Spread operator — avoid inside regular arrays in JS strings built via python
3. Onclick handlers — always use data-* attributes not inline string quotes
4. page-ranktracker must close before page-watchdog — check nesting if pages disappear
5. gmb-health-tab must have class="gmb-tab-content" to be hidden by tab switcher
6. loadCompSettings — only ONE instance must exist
7. Firebase QUIC errors in console — harmless
8. Password field warnings — harmless DOM warning
9. New Gmail users — if no companies found, redirects to Settings to add first company
10. gmbReviews + gmbRating — auto-saved when Overview tab loads Places API data

---

## API Keys Info
Google Places API key — stored in company doc as googlePlacesKey
GSC Client ID — hardcoded in index.html (search: GSC_CLIENT_ID)
GSC Redirect URI — https://teamtichyd-star.github.io/quickrank/
AI keys — stored per user in Firebase NOT hardcoded
Google Ads developer token — obtained, MCC created, OAuth2 architecture planned

---

## Terminal Commands Reference

Backup before any changes:
cp /Users/haritalla/Desktop/quickrank/index.html /Users/haritalla/Desktop/quickrank_backups/index_backup_$(date +%Y%m%d)_desc.html

Push to live:
cd /Users/haritalla/Desktop/quickrank && git add -A && git commit -m "description" && git push

Check line count:
wc -l /Users/haritalla/Desktop/quickrank/index.html

Find function:
grep -n "functionName" /Users/haritalla/Desktop/quickrank/index.html

View lines:
sed -n '100,120p' /Users/haritalla/Desktop/quickrank/index.html

Check for duplicates:
grep -n "async function loadCompSettings" /Users/haritalla/Desktop/quickrank/index.html

---

## Pending Phases

Phase 16 — Content Planner
  Weekly blog topic suggestions based on keywords and rank gaps
  GMB post ideas copy-paste ready
  Best time to publish
  Done/pending tracker

Phase 17 — Watchdog Upgrade
  Pull real rank data automatically
  Rank movement since last check
  Today 3 specific actions not generic
  Weekly email via EmailJS

Phase 18 — AI Visibility Upgrade
  Per keyword AI appearance check
  Track score history week by week
  Show what changed since last check

Phase 19 — Keyword Research (when Google Ads API approved)
  Real search volume from Google Ads API
  Competition level
  CPC data
  Keyword suggestions

## Multi-Business Architecture
One Gmail login -> Multiple businesses (add/delete anytime)
Each business -> own keywords, GMB, GSC, AI scores
Different Gmail = different UID = completely separate data
New users with no companies -> redirected to Settings to add first company
