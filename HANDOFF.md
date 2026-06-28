# QuickRank — Complete Handoff Document
Last Updated: 28 June 2026

---

## Project Overview
**App Name:** QuickRank (Free SEO + GMB + AI Visibility Tracker)
**Live URL:** https://teamtichyd-star.github.io/quickrank/
**Repo:** https://github.com/teamtichyd-star/quickrank
**Dev Path:** /Users/haritalla/Desktop/quickrank
**Owner:** Hari Talla — Turnkey Interior Contractors, Hyderabad
**Stack:** Single index.html, Firebase Firestore, GitHub Pages, Google Places API, GSC OAuth, Claude/Groq/Gemini AI APIs

---

## Core Rules (NEVER break these)
- Single index.html file ONLY — no separate JS/CSS files
- Green theme: #0a5c36, #2ecc71, #d4f5e2
- Always test on LIVE URL (Firebase blocks file://)
- Push via Mac terminal only
- ALWAYS run grep diagnostics before making changes
- ALWAYS take backup before major changes
- Use data-* attributes for onclick handlers (no inline quotes)
- AI keys stored in: users/{uid}/settings/aikeys
- NO hardcoded business names, cities, or keywords anywhere in AI prompts
- All AI prompts must pull from company settings dynamically

---

## Tech Stack
- Firebase Auth (Google Sign-in)
- Firebase Firestore (database)
- GitHub Pages (hosting)
- Google Places API (GMB data)
- GSC OAuth2 (Google Search Console)
- Jina.ai (website content fetching — https://r.jina.ai/URL)
- AI: Groq (free/fastest), OpenAI, Anthropic Claude, Gemini, Mistral, Cohere, Together
- Chart.js (charts)
- jsPDF (PDF export)

---

## Firebase Structure
users/{uid}/
  settings/
    aikeys → {groq, openai, anthropic, gemini, mistral, cohere, together, aiChain}
    gsc    → {accessToken, expiresAt, connectedAt, property}
  companies/{companyId}/
    (fields)           → {name, website, industry, city, targetAreas, services, gmbName, gscProperty}
    keywords/{kwId}    → {keyword, url, currentRank, previousRank, bestPosition, clicks, impressions, ctr, gscSynced}
    aivisibility/      → {score, checkedAt, results}
    locationKeywords/  → {keyword, currentRank, previousRank, lastUpdated}
    gmbLocations/{id}  → {name, address, phone, placeId, city} [TO BUILD]

---

## Current Sidebar Structure
MAIN
  Rank Tracker (ranktracker) — website keyword positions
  Locations (local) — GMB grid rank checker
  Search Console (gsc) — GSC connected data
  Rank History (charts) — position history charts
TOOLS
  AI Visibility (aivisibility) — ChatGPT/Gemini/Perplexity checker
  Watchdog (watchdog) — daily action checklist
ACCOUNT
  Settings (settings) — company, GSC, AI keys

REMOVED (intentionally):
  AI Optimize — duplicate of per-keyword AI button
  Bulk AI Audit — was just redirect to Rank Tracker

---

## Key Functions
callAI(provider, prompt, keys)       — calls any AI provider with fallback chain
loadAIKeys()                         — loads keys from Firestore aikeys doc
loadCompSettings()                   — loads current company settings
getCurrentCompanyId()                — returns active company ID
switchCompany(id, name)              — switches active company
runAIVisibilityCheck()               — AI Visibility tab main function
showPage(pageId, navEl)              — switches active page
connectGSC() / syncGSC()            — GSC OAuth and data sync
loadKeywords() / renderKeywords()    — keyword management
openAiPanel(keyword, url)            — per-keyword AI analysis panel
startBulkAudit()                     — bulk AI audit

---

## Completed Phases
Phase 11.5  — GMB Local Rank Tracker (5 tabs, Places API, AI Strategy)
Phase 14E   — Multi-AI Provider Manager (7 providers, fallback chain, test buttons)
AI Visibility Tab — ChatGPT/Gemini/Perplexity checker with real website data via Jina.ai

---

## App Vision
QuickRank = Wincher + AI, unlimited, free

Wincher tracks your ranks.
QuickRank tells you HOW to rank higher — free, with AI.

QuickRank does what Wincher CANNOT:
- AI suggestions per keyword (exact copy-paste fixes)
- GMB health checker with competitor comparison
- AI Visibility (ChatGPT/Gemini/Perplexity presence)
- Content planner with ready-to-use posts
- Watchdog daily action list
- Completely free

QuickRank does NOT replace:
- Wincher rank tracking (use Wincher for daily rank data)
- Ahrefs/SEMrush backlink data (needs paid API)
- Automated daily rank crawling (costs money)

---

## Multi-Business Architecture (Like Wincher)
One Login
  Multiple Businesses (add/delete anytime)
    Business Name, Website URL, Industry, City, Target Areas, Services
    Multiple GMB Locations per business (add/delete anytime)
      Location Name, Address, Phone, Place ID (auto-fetched)

Key principle: Everything dynamic. No hardcoded business details anywhere in AI prompts.

---

## Pending Phases

### Phase 11.6 — GMB Grid Fixes (DO THIS FIRST)
1. Real Google Maps background on Competitor Grid tab
2. Fix GMB business name matching (Not Found issue)
3. Test AI Strategy with real data

### Phase 12 — Business Settings Upgrade
- Add fields: Industry, City, Target Areas, Services, GMB Name
- Multiple GMB locations per business (add/delete like Wincher)
- Make ALL AI prompts use these fields dynamically
- No hardcoded Hyderabad or office interiors anywhere

### Phase 13 — Dashboard
- Overall health score (Website + GMB + AI combined)
- Today top 3 priority actions
- Rank summary cards from GSC
- AI Visibility score card
- GMB health score card
- Position distribution chart (Top3 / 4-10 / 11-30 / 30+)

### Phase 14 — Rank Tracker Upgrade
- Position distribution chart (like Wincher)
- Opportunities section (keywords pos 4-20 = easy wins)
- Color code positions (green top3, yellow 4-10, red 30+)
- Estimated traffic per keyword
- Auto-sync from GSC daily

### Phase 15 — GMB Health Checker
- Reviews count vs top 3 competitors
- Last photo upload date
- Last GMB post date
- Description keyword check
- NAP consistency check
- AI gives specific GMB actions

### Phase 16 — Content Planner
- Weekly blog topic suggestions based on keywords + rank gaps
- GMB post ideas copy-paste ready
- Best time to publish
- Done/pending tracker

### Phase 17 — Watchdog Upgrade
- Pull data from all tabs
- Rank movement since last check
- Competitor activity this week
- Today 3 actions specific not generic
- Weekly email via EmailJS

### Phase 18 — AI Visibility Upgrade
- Use GSC top keywords instead of tracked keywords
- Per keyword AI appearance check
- Track score history week by week
- Show what changed since last check

---

## Known Issues / Watch Out For
1. JS string corruption — never use template literals with real newlines in python replacements
2. Spread operator (...) — avoid inside regular arrays in JS strings built via python
3. Single vs double quotes in onclick handlers — always use data-* attributes
4. Dark theme — individual CSS replacements broke JS strings. Use single CSS override block injected before </style> instead
5. Always backup before changes: cp index.html index_backup_$(date +%Y%m%d).html
6. loadCompSettings() — only one instance should exist (was duplicated, now fixed)

---

## API Keys Info
Google Places API key  — hardcoded in index.html (search: PLACES_API_KEY)
GSC Client ID          — hardcoded in index.html (search: GSC_CLIENT_ID)
GSC Redirect URI       — https://teamtichyd-star.github.io/quickrank/
AI keys                — stored per user in Firebase NOT hardcoded

---

## Terminal Commands

Backup:
cp index.html index_backup_$(date +%Y%m%d).html

Push to live:
cd /Users/haritalla/Desktop/quickrank && git add -A && git commit -m "description" && git push

Diagnostics:
wc -l index.html
grep -n "functionName" index.html
sed -n '100,120p' index.html
grep -n "let progress\|var progress" index.html
grep -n "async function" index.html | head -20

