# QuickRank — Project Handoff Document

**Last Updated:** June 2026  
**Owner:** Hari Talla, Hyderabad, India  
**Live URL:** https://teamtichyd-star.github.io/quickrank/  
**Repo:** https://github.com/teamtichyd-star/quickrank (Public)

---

## 📋 PROJECT OVERVIEW

**What is QuickRank?**  
A free unlimited keyword rank tracker — replaces Wincher (app.wincher.com). Built with HTML/CSS/JS + Firebase. Single file architecture for simplicity.

**Stack:**
- Frontend: Single `index.html` (vanilla HTML + CSS + JS, no framework)
- Hosting: GitHub Pages (free)
- Database: Firebase Firestore (asia-south1 Mumbai)
- Auth: Firebase Auth + Google OAuth
- AI: Multi-provider (Groq, Cerebras, Gemini, OpenRouter, OpenAI, Claude, Mistral)
- Live page scraping: CORS proxies (corsproxy.io, allorigins.win, codetabs.com)

**Design:**
- Green family color palette (#0a5c36, #1a7a4a, #2ecc71, #d4f5e2, #f0fdf6)
- Professional UI like Wincher
- Fully responsive (mobile, tablet, desktop)

---

## ✅ COMPLETED PHASES

### Phase 1 — Foundation ✅
- GitHub repo created (public)
- GitHub Pages enabled
- Firebase project: `quickrank-10647`
- Firestore database: asia-south1 (Mumbai)
- Authorized domains configured

### Phase 2 — Authentication ✅
- Google OAuth Sign-In working
- User profile (name, photo, email)
- Sign Out functionality
- Auth state persistence

### Phase 3 — Dashboard Shell ✅
- Topbar with logo + company switcher + user avatar
- Sidebar with 5 main sections:
  - Rank Tracker (2 tabs: Website Keywords + Local/GMB)
  - Landing Pages (3 tabs)
  - Keyword Research (3 tabs)
  - Competitors (3 tabs)
  - Notifications
  - Settings
- Mobile hamburger menu
- Toast notification system
- Loading spinner

### Phase 4 — Multi-Company Support ✅
- Auto-create default company on first login
- Company switcher dropdown
- Add new company modal
- All data scoped by companyId
- Settings save per company

### Phase 5 — Keywords CRUD ✅
- Add keyword (with URL + position)
- Delete keyword (with confirmation modal)
- Real-time updates (onSnapshot)
- Search/filter keywords
- Stats: Total, Top 3, Top 10, Avg Position
- Color-coded rank badges

### Phase 6 — Settings Page ✅
- Company settings (name, website, GSC property, GMB)
- AI Provider Keys (7 providers, encrypted in Firestore)
- SerpAPI key for map grid
- Notification preferences (drop/rise thresholds + email)
- Manage companies list
- Account info display

### Phase 7 — AI Optimize (Multi-Model) ✅
- AI panel opens per keyword
- 2 modes: General SEO + Local SEO
- Model selector dropdown with 7 providers:
  - ✅ Groq (Llama 3.3 70B) — Free, Fast — WORKING
  - ✅ Cerebras (GPT-OSS 120B) — Free, Quality — WORKING
  - ⚠️ Gemini 2.0 Flash — Free but quota issues
  - ⚠️ OpenRouter — Free but unstable model IDs
  - 💎 OpenAI — Paid
  - 🎯 Claude — Paid
  - 🔮 Mistral — Paid
- Auto-rotation logic ready
- Response time + model badge displayed

### Phase 8 — Live Page Fetcher ✅ (LATEST)
- Fetch actual page HTML via CORS proxy (3 fallbacks)
- Parse: title, meta description, H1, H2, H3, images, body text
- Preview card showing extracted content with char counts
- AI gets actual page content in prompt
- AI gives SPECIFIC recommendations (current vs proposed text)
- Detects: missing alt text, word count, missing tags
- "📄 Live page analyzed" badge on output

---

## 🔨 PENDING PHASES

### Phase 9 — Bulk AI Audit
- Audit all keywords at once
- Generate priority-sorted report
- Export as PDF
- Show issues count per page

### Phase 10 — Google Search Console Integration
- Auto-fetch real rank positions
- Auto-update clicks & impressions
- Trend graphs (7d, 30d, 90d)
- Note: Search Console API has 2-3 day data delay

### Phase 11 — Local GMB Map Grid
- Visual Hyderabad map with colored dots
- Grid points showing rank per location
- Requires SerpAPI key
- Color legend (green=top3, yellow=4-10, orange=11-20, red=20+)

### Phase 12 — Competitor Tracking
- Add competitor URLs
- Fetch their pages
- AI comparison (you vs competitor)
- Find content/keyword gaps
- Backlink gap analysis

### Phase 13 — Keyword Research Tool
- Seed keyword input
- AI-generated keyword ideas
- Volume estimates (free tools)
- Difficulty scores
- Topic clusters

### Phase 14 — Rank History Charts
- Daily snapshots stored in Firestore
- Line charts with Chart.js
- Compare keywords over time
- Export data as CSV

### Phase 15 — Notifications System
- Email alerts on rank changes
- Daily/weekly summary emails
- Browser push notifications
- In-app notification feed

### Phase 16 — Landing Pages Page
- Import from Search Console
- Track multiple pages per company
- Page-level SEO score
- SERP feature tracking

### Phase 17 — Custom Domain Setup
- Connect rank.turnkeyinteriorcontractors.com
- SSL certificate (auto by GitHub)
- DNS CNAME configuration

### Phase 18 — Mobile App Polish
- PWA installable
- Offline mode
- Push notifications
- App icon

---

## 🔑 IMPORTANT CONFIGURATION

### Firebase Config (in index.html)
\`\`\`
projectId: quickrank-10647
authDomain: quickrank-10647.firebaseapp.com
region: asia-south1 (Mumbai)
\`\`\`

### Authorized Domains
- localhost
- localhost:5000
- quickrank-10647.firebaseapp.com
- teamtichyd-star.github.io

### Firestore Structure
\`\`\`
users/{uid}/
  ├── companies/{companyId}
  │     ├── name, website, gscProperty, gmbName, gmbAddress
  │     └── keywords/{keywordId}
  │           └── keyword, url, position, change, clicks, impressions
  └── config/
        ├── ai_keys (encrypted: gemini, groq, openai, claude, mistral, cerebras, openrouter, serp)
        └── notifications (dropAlert, riseAlert, notifEmail)
\`\`\`

### AI Provider Endpoints
- Groq: `https://api.groq.com/openai/v1/chat/completions` → `llama-3.3-70b-versatile`
- Cerebras: `https://api.cerebras.ai/v1/chat/completions` → `gpt-oss-120b`
- Gemini: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent`
- OpenRouter: `https://openrouter.ai/api/v1/chat/completions` → `meta-llama/llama-3.2-3b-instruct:free`
- OpenAI: `https://api.openai.com/v1/chat/completions` → `gpt-3.5-turbo`
- Claude: `https://api.anthropic.com/v1/messages` → `claude-3-haiku-20240307`
- Mistral: `https://api.mistral.ai/v1/chat/completions` → `mistral-small-latest`

### CORS Proxies (for page fetcher)
1. `https://corsproxy.io/?{url}`
2. `https://api.allorigins.win/raw?url={url}`
3. `https://api.codetabs.com/v1/proxy?quest={url}`

---

## 🏢 BUSINESS CONTEXT

- **Owner:** Hari Talla
- **Email:** teamtic.hyd@gmail.com
- **Business:** SBIS (SB Interior Solutions) / TIC (Turnkey Interior Contractors)
- **Location:** Hyderabad, Telangana, India
- **Website:** turnkeyinteriorcontractors.com
- **GMB:** TIC (TURNKEY INTERIOR CONTRACTORS), 4 Jayabheri Enclave, Gachibowli, Hyderabad
- **Target keywords:**
  - interior contractors hyderabad
  - office interior designers hyderabad
  - commercial interior designers hyderabad
- **Replaces:** Wincher (currently using)

---

## 💻 DEVELOPER ENVIRONMENT

- **Computer:** MacBook Air
- **Editor:** VS Code
- **Git:** 2.39.5
- **Node.js:** NOT installed (not needed)
- **Repo path:** ~/Desktop/quickrank
- **No build process** — pure static HTML

---

## 🛠️ COMMON COMMANDS

### Push changes to live site:
\`\`\`bash
cd ~/Desktop/quickrank
git add .
git commit -m "Description of change"
git push origin main
\`\`\`

### Open project in VS Code:
\`\`\`bash
open -a "Visual Studio Code" ~/Desktop/quickrank
\`\`\`

### View live site:
https://teamtichyd-star.github.io/quickrank/

---

## ⚠️ KNOWN ISSUES / NOTES

1. **Search Console API requires Google verification** for sensitive scopes — currently using manual keyword entry
2. **Gemini key quota** — Free tier may hit limits, use Groq as primary
3. **OpenRouter free models** — IDs change frequently, may need updates
4. **GitHub Pages cache** — Hard refresh (Cmd+Shift+R) needed after deploys
5. **CORS proxies** — Free but may rate-limit; we use 3 fallbacks
6. **Single file architecture** — Easier to maintain, no build step

---

## 🎯 RULES & CONSTRAINTS

- ✅ Single `index.html` file only (no separate JS/CSS files)
- ✅ Green color family throughout
- ✅ Fully responsive on all devices
- ✅ No frameworks (vanilla JS only)
- ✅ No build commands (just git push)
- ✅ Push via terminal from Mac
- ✅ Professional, excellent UI quality
- ✅ All AI keys encrypted in Firestore (never in code/localStorage)
- ✅ All data scoped under users/{uid}/companies/{companyId}/

---

## 🚀 NEXT STEP RECOMMENDATION

**Phase 9 — Bulk AI Audit** would be the highest-value next addition:
- One-click audit of all keywords
- Priority-sorted action items
- Export as PDF report
- Massive time-saver for agency use

---

## 📞 HANDOFF NOTES FOR NEW AI ASSISTANT

If continuing this project in a new chat:

1. **Read this entire document first**
2. The user is **Hari Talla** — guide him step-by-step, he's not a developer
3. Use terminal commands (he uses Mac terminal)
4. Always give **complete single file** code, not snippets
5. Always confirm before major changes
6. Test on live URL after every push
7. Keep all design in **green family** (#0a5c36 etc.)
8. Maintain **single file architecture**
9. AI provider that works best: **Groq** (llama-3.3-70b-versatile)
10. Always include CORS proxy fallbacks for page fetching

---

**End of Handoff Document**
