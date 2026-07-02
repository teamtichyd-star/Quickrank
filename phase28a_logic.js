
// Phase 28A: Google Ads CSV Parser & Firebase Sync
async function handleAdsCSV(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        const text = e.target.result;
        const lines = text.split('\n');
        if (lines.length < 2) return alert("CSV is empty");

        // Google Ads Planner CSV headers usually start around line 2 or 3
        // We find the header row that contains "Keyword"
        let headerIndex = lines.findIndex(l => l.toLowerCase().includes('keyword') && l.toLowerCase().includes('avg. monthly searches'));
        if (headerIndex === -1) {
            alert("Could not find 'Keyword' or 'Avg. monthly searches' headers. Please export a standard Keyword Planner CSV.");
            return;
        }

        const headers = lines[headerIndex].split('\t').map(h => h.replace(/"/g, '').trim());
        const dataRows = lines.slice(headerIndex + 1);
        
        const kwIdx = headers.indexOf("Keyword");
        const volIdx = headers.indexOf("Avg. monthly searches");
        const compIdx = headers.indexOf("Competition");
        const cpcLowIdx = headers.indexOf("Top of page bid (low range)");
        const cpcHighIdx = headers.indexOf("Top of page bid (high range)");

        const updates = [];
        let matchCount = 0;

        dataRows.forEach(row => {
            const cols = row.split('\t').map(c => c.replace(/"/g, '').trim());
            if (!cols[kwIdx]) return;

            const kwName = cols[kwIdx].toLowerCase();
            const vol = parseInt(cols[volIdx]) || 0;
            const comp = cols[compIdx] || "";
            const cpcL = cols[cpcLowIdx] || "";
            const cpcH = cols[cpcHighIdx] || "";

            // Find matching keyword in our global 'keywords' array
            const existing = keywords.find(k => k.keyword.toLowerCase() === kwName);
            if (existing) {
                updates.push({
                    id: existing.id,
                    volume: vol,
                    competition: comp,
                    cpcLow: cpcL,
                    cpcHigh: cpcH
                });
                matchCount++;
            }
        });

        if (updates.length === 0) {
            alert("No matching keywords found in your CSV. Make sure the keywords in the CSV match the ones in your Rank Tracker.");
            return;
        }

        if (confirm(`Found ${matchCount} matches. Update volume data in Firebase?`)) {
            const batch = db.batch();
            const companyRef = db.collection('users').doc(currentUser.uid).collection('companies').doc(currentCompanyId);
            
            updates.forEach(upd => {
                const ref = companyRef.collection('keywords').doc(upd.id);
                batch.update(ref, {
                    volume: upd.volume,
                    competition: upd.competition,
                    cpcLow: upd.cpcLow,
                    cpcHigh: upd.cpcHigh,
                    lastVolSync: firebase.firestore.FieldValue.serverTimestamp()
                });
            });

            await batch.commit();
            showToast(`Updated ${matchCount} keywords with Google Ads data!`);
            loadKeywords(); // Refresh UI
        }
    };
    reader.readAsText(file);
}
