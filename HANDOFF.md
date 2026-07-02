# QuickRank — Handoff Note
Last Updated: 30 June 2026

## Quick Start For New Chat
Paste this entire file at the start of any new chat with Claude.

## Project
- App: QuickRank (Free SEO + GMB + AI Visibility Tracker)
- Live URL: https://teamtichyd-star.github.io/quickrank/
- Repo: https://github.com/teamtichyd-star/quickrank
- Dev Path: /Users/haritalla/Desktop/quickrank
- Backups: /Users/haritalla/Desktop/quickrank_backups/
- Owner: Hari Talla - Turnkey Interior Contractors, Hyderabad
- Stack: Single index.html, Firebase, GitHub Pages, Google Places API, GSC OAuth, AI APIs, Serper.dev

## Active User Data
- UID: aHpKtUM4ofRHQV0XXD04NeSKFyL2
- Email: teamtic.hyd@gmail.com
- Company ID: turnkey-interior-contractors
- Website: https://turnkeyinteriorcontractors.com
- GMB Place ID: ChIJxfKa-NuQyzsRZo3TiDBGjdw
- 17 reviews, 4.5 stars (auto-fetched from Places API)
- 18 website keywords (GSC synced + Serper enriched)
- 9 GMB location keywords

## Key APIs Configured
- Google Places API key (in Settings)
- Serper.dev: b957e064c924f6d647ce53b2dd73f400cfa7d32e (working, returns real top 10)
- Groq AI key (working)
- Gemini AI key (working)
- Cohere AI key (working)
- GSC OAuth connected

## Completed Phases (all working)
- Phase 11.5 - GMB Local Rank Tracker
- Phase 11.6 - GMB Grid Fixes
- Phase 12 - Business Settings Upgrade
- Phase 13 - Dashboard
- Phase 14 - Rank Tracker upgrade (color badges, stats, opportunities, WIN badge)
- Phase 14E - Multi-AI Provider Manager (7 providers + fallback chain)
- Phase 15 - GMB Health Checker (auto-fetch reviews + competitor table)
- Phase 20 - AI Engine Upgrade (dynamic prompts with company context)
- Phase 22 - Universal API Manager (6 providers: Places, Serper, DataForSEO, ValueSERP, ScrapingBee, OpenPageRank)
- Phase 23 - Dynamic AI Prompt Upgrade (live position + GMB context injected)
- Security cleanup, hardcoded sbis-tic removed, smart URL mapper added

## Phase 23 Details (COMPLETED)
### What Was Fixed
- AI was giving generic advice like "Claim your GMB" even though GMB was already set up
- AI was saying "ranking #1" when actual position was #8
- AI was inventing technical issues that did not exist

### How It Was Fixed
1. openAiPanelForKeyword() made async — fetches live position from Firebase
2. window._currentKwPosition stores the real position (#8 confirmed)
3. _bizCtx block injected into compData in runAI() with:
   - Live GSC position
   - GMB status (already set up with 17 reviews)
   - Business website for SERP matching
4. smartRules added to top of all AI mode prompts
5. Button passes pos to AI panel

### Test Result (Confirmed Working)
- Assessment correctly says "ranking at #8"
- Local SEO Actions no longer say "Claim GMB"
- Names real competitors: Leading Experts #1, Styile My Space #2, Vinod Interior #3
- Technical Issues correctly shows "None found"

## Where We Stopped (PICK UP HERE)
Just finished Phase 23. AI prompt is now accurate and trustworthy.

### Next Phase: Phase 24 — Real Rank Check Button
Both Website + GMB tabs need a live rank check button.

#### Website Tab
- Add "Check Live Rank" button per keyword
- Use Serper to search Google right now
- Find exact position of turnkeyinteriorcontractors.com
- Show: GSC Avg #8 | Live Today #6
- Show who is above you

#### Locations/GMB Tab
- Same Serper call returns local_results (map pack)
- Show GMB map pack position
- Show competitors above in map pack
- One Serper call = both organic + map pack results

#### Cost
- 1 Serper call per keyword check
- 2500 free calls/month
- Very affordable

## Key Functions Added In Phase 23
- openAiPanelForKeyword(keyword, fallbackUrl, kwPosition) — async, fetches position from Firebase
- window._currentKwPosition — stores live position for current AI session
- _bizCtx — verified business data block injected into every AI prompt
- smartRules — injected at top of general + local mode prompts

## Core Rules (NEVER break)
1. Single index.html only - no separate JS/CSS files
2. Green theme: #0a5c36, #2ecc71, #d4f5e2
3. Test on LIVE URL only (Firebase blocks file://)
4. Push via Mac terminal
5. ALWAYS backup before changes: cp index.html /Users/haritalla/Desktop/quickrank_backups/index_backup_DATE_desc.html
6. Use data-* attributes for onclick - no inline string quotes
7. NO hardcoded business names/cities in AI prompts
8. AI keys in: users/{uid}/settings/aikeys
9. API keys in: users/{uid}/settings/apis
10. loadCompSettings() - only ONE instance (line ~3912)
11. Watch for syntax errors with backticks/quotes inside JS strings built via Python
12. NEVER use Python multiline strings with triple quotes for JS code — use single line strings with \n escape only

## Python Script Rules (CRITICAL - learned from Phase 23)
- NEVER write JS code using Python triple-quoted multiline strings
- Always use single line string concatenation with explicit \n
- Always verify with sed -n before pushing
- Always check browser console for SyntaxError before testing AI
- If syntax error at line X — check 10 lines before and after X

## Firebase Structure
users/{uid}/
  settings/
    aikeys - AI provider keys + chain order
    apis - googlePlacesKey, serperKey, dataForSeoKey, etc
    gsc - GSC OAuth token
  companies/{id}/
    (company fields: name, website, gmbPlaceId, gmbReviews, etc)
    keywords/ - website keywords (position, change, clicks, impressions, url)
    locationKeywords/ - GMB grid keywords
    gridCache/, gridHistory/, aivisibility/
  usage/{YYYY-MM}/
    serperCalls (incremented per call)

## Key Functions
- getApiKey(keyName) - gets any API key from settings/apis
- fetchSERP(keyword, location) - Serper API call, returns top 10 + PAA + related + featured snippet + local_results
- loadCompSettings() - gets current company data
- buildPrompt(kw, url, pageData, mode, compSettings, competitorData) - builds AI prompt with all context
- runAI() - main AI call function, injects Serper data + verified business context
- renderUniversalApiCards() - renders API manager in Settings
- runGMBHealthCheck() - GMB health tab analysis
- loadDashboard() - dashboard data load
- openAiPanelForKeyword(keyword, fallbackUrl, kwPosition) - async, fetches live position

## Terminal Commands
Backup: cp /Users/haritalla/Desktop/quickrank/index.html /Users/haritalla/Desktop/quickrank_backups/index_backup_DATE_desc.html
Push: cd /Users/haritalla/Desktop/quickrank && git add -A && git commit -m "msg" && git push
Line count: wc -l /Users/haritalla/Desktop/quickrank/index.html
Find function: grep -n "functionName" /Users/haritalla/Desktop/quickrank/index.html

## Current Status
- File: 6200+ lines
- Last commit: Phase 23 complete - dynamic AI prompt working
- Everything working
- Ready for Phase 24

## Multi-User SaaS Plan (For Later)
1. Admin = teamtic.hyd@gmail.com only
2. New users request access (name, company, mobile, city, use case)
3. Admin approves - user gets 200 Serper/month
4. Future: paid tiers via Stripe
5. Each user brings own API keys for free tier

## Phase 24 — Live Rank Check (FINAL - COMPLETED 1 July 2026)
- Live button on every keyword row
- Uses Serper /search for organic position
- Uses Serper /maps for Google Maps position (separate API call)
- Shows GSC Avg vs Live Today vs Google Maps rank
- Shows competitors above you in organic
- Shows businesses above you in Google Maps
- Honest results - no fake data
- 2 Serper credits per keyword check

## Phase 25 — Keyword Sync (COMPLETED 2 Jul 2026)
- addKeyword() now auto-syncs to locationKeywords collection
- addSelectedKeywords() (Suggest modal) now saves to both Website + Locations
- Delete is independent - removing from one tab does not affect the other
- Both tabs refresh automatically after add

## Phase 27 — Intent + Opportunity Badges (COMPLETED 2 Jul 2026)
- Intent chips T/C/I added to every keyword (green/orange/yellow)
- Opportunity badges: 👑 Defend / 🔥 Quick Win / 🎯 Potential / 📉 Recover
- Rule-based intent detection (no AI cost)
- Badge logic: Recover (drop 3+), Defend (pos 1-3), Quick Win (pos 4-20), Potential (vol 100+)
- Clean table: Keyword sticky left, Actions sticky right, horizontal scroll
- Columns: Keyword | URL | Pos | Vol | Clicks | CTR | Actions | Type | Impr
- Removed: filter bar, Best Ever, Trend, Sparkline, Update button
- Compact icon-only action buttons

## Phase 27B — Collapsible Sidebar (COMPLETED 2 Jul 2026)
- Round toggle button on sidebar edge
- Collapses sidebar to icon-only mode (55px wide)
- Text hidden with font-size:0 + display:none rules
- State saved in localStorage (quickrank_sidebar_collapsed)
- Auto-restores collapsed state on page reload
- Main content margin adjusts automatically

## Phase 26 — Locations Live Rank (COMPLETED 2 Jul 2026)
- Added 🔴 Live button to every row in Locations keyword table
- Uses Serper /maps to check Google Maps position live
- Shows Saved Rank vs Live Maps Today
- Shows businesses above you with ratings

## Phase 27 — Intent + Opportunity Badges (COMPLETED 2 Jul 2026)
- Intent chips T/C/I on every keyword (green/orange/yellow)
- Opportunity badges: 👑 Defend / 🔥 Quick Win / 🎯 Potential / 📉 Recover
- Rule-based intent detection (no AI cost)
- Badge logic:
  - Recover = dropped 3+ positions
  - Defend = position 1-3
  - Quick Win = position 4-20
  - Potential = volume 100+ AND not top 3
- Clean table: Keyword sticky left, Actions sticky right, horizontal scroll
- Columns: Keyword | URL | Pos | Vol | Clicks | CTR | Actions | Type | Impr
- Removed: filter bar, Best Ever, Trend, Sparkline, Update button
- Compact icon-only action buttons

## Phase 27B — Collapsible Sidebar (COMPLETED 2 Jul 2026)
- Round toggle button on sidebar edge
- Collapses to icon-only mode (55px wide)
- State saved in localStorage (quickrank_sidebar_collapsed)
- Auto-restores on page reload
- Function: toggleSidebarCollapse()

## Phase 27C — Dashboard Baskets (COMPLETED 2 Jul 2026)
- Replaced Quick Wins + Top Keywords sections with 4 priority baskets:
  - 📉 Recover First (red border)
  - 👑 Defend Top 3 (purple border)
  - 🔥 Quick Wins (orange border)
  - 🎯 Potential High Demand (blue border)
- Each basket shows top 5 keywords with:
  - Position badge
  - Keyword + intent chip
  - Vol/Impr fallback
  - LIVE button (checks Serper immediately)
- Added Intent Breakdown widget (T/C/I count)
- Click keyword in basket → jumps to Rank Tracker + highlights row yellow 2s
- Function: jumpToKeyword(kw)

## Key Functions Added Phase 24-27C
- checkLiveRank(kw, gscPos, btn) — website live rank popup
- checkLocationLiveRank(kw, currentRank, btn) — maps live rank popup
- getKeywordIntent(kw) — returns T/C/I based on rules
- getIntentChip(intent) — returns colored HTML chip
- getOpportunityBadge(pos, change, volume) — returns {key, html} for badges
- getSparkline(history) — SVG sparkline (currently unused after cleanup)
- setKwFilter(type, val) — filter table (currently unused after cleanup)
- toggleSidebarCollapse() — desktop sidebar collapse
- jumpToKeyword(kw) — navigate to Rank Tracker + scroll to keyword row

## Current Status
- File: 6600+ lines
- Last commit: dashboard baskets + click-to-jump feature working
- Everything working
- Ready for Phase 28

## Next Phase Plan
### Phase 28A — Google Ads CSV Import (DO FIRST)
- Import CSV from Google Ads Keyword Planner
- Extract: keyword, monthly volume, competition, CPC
- Attach volume to matching keywords in Firebase
- Update Vol column in rank tracker with real data
- Update Potential basket to use real volume (not impressions fallback)

### Phase 28B — Page-Level AI (DO AFTER 28A)
- New "🧠 Page AI" button per URL
- Groups all keywords ranking on same URL
- Identifies primary keyword by volume + T intent
- Gives ONE unified recommendation covering all keywords
- Suggests NEW page URLs for high-volume keywords not fitting current page
- Example output: "office turnkey interiors (vol 301) needs its own page /services/office-turnkey/"

### Phase 28C — Optional Cleanups
- Locations table button style consistency
- Sidebar submenu behavior check when collapsed
- Mobile responsive testing

## Phase 28A — Google Ads CSV Import (COMPLETED 2 Jul 2026)
- Added Planner CSV import in Keyword Suggestions modal
- Supports Google Keyword Planner export CSV
- Fixed UTF-16 CSV parsing from Google exports
- Detects header row automatically even with title/date lines above
- Extracts:
  - keyword
  - avg. monthly searches
  - competition
  - top of page bid low/high
- Planner tab now shows imported keywords in list
- Added search box for fast filtering
- Added sortable headers:
  - Keyword
  - Volume
  - Competition
- Clicking column header toggles ascending / descending
- Add Selected now supports planner-imported keywords with volume
- Volume data can be synced into Firebase keyword docs
- Rank Tracker Vol column can now use real planner volume
- Potential basket can now use real volume instead of impressions fallback

## Key Functions Added Phase 28A
- parsePlannerCsv() — parses UTF-16 Google Keyword Planner CSV
- renderPlannerList(data) — renders planner keyword list with sort/search
- sortPlannerCol(col) — toggles asc/desc sort on header click
- filterPlannerList() — live search filter in planner tab
- syncPlannerVolumeToExisting() — updates existing Firebase keywords with planner volume/CPC data

## Current Status
- File: 7000+ lines
- Last commit: Phase 28A complete
- Everything working
- Ready for Phase 28B — Page-Level AI
