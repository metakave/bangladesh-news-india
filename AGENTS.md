# Local News Ingestion & Scanning Rules

## Always Process News Updates Locally via Antigravity

1. **Local Antigravity Ingestion**:
   - When requested to scan, pull, or update daily news for Narrative Compass, run the feed candidate scanner locally (e.g., `node scripts/daily-news-scanner.mjs --mode=all --dump-candidates`).
   - Do NOT attempt to query DeepSeek API or search for external paid AI APIs.
   - Antigravity (the AI agent) will perform editorial analysis, translation, sentiment evaluation, and JSON structuring directly from the candidate items in `scratch/candidates.json`.

2. **Data Pipeline (`src/data/news-data.ts`)**:
   - Synthesize authentic news items following the exact `NewsItem` schema.
   - Target **10–12 distinct synthesized articles per daily scan run**, covering regional bureaus (Delhi, Kolkata, Mumbai, Tripura, Assam, Siliguri) and media formats (RSS press & YouTube video dispatches).
   - Ensure ALL news items strictly originate from verified Indian media outlets and strictly exclude domestic Bangladeshi YouTube or news channels.
   - Enforce **Strict Zero Duplication on Home Page**: Ensure every news story renders at most ONCE on the home page across HeroGrid columns and downstream category hubs (`diplomacy`, `trade`, `border`, `sports/culture`).
   - **Direct Canonical URL & Source-Link Integrity**:
     - `originalUrl` MUST ALWAYS be resolved to the direct canonical publisher article URL (e.g., `https://timesofindia.indiatimes.com/...`, `https://www.thehindu.com/...`, `https://www.anandabazar.com/...`, `https://assamtribune.com/...`, `https://tripuratimes.com/...`).
     - NEVER store raw opaque Google News wrapper URLs (`https://news.google.com/rss/articles/...`). Decode them into the direct destination publisher URL.
     - Ensure strict consistency between `source.name` and the hostname in `originalUrl` (e.g., Times of India must point to `timesofindia.indiatimes.com`, Anandabazar to `anandabazar.com`, The Wall to `thewall.in`). Never assign a candidate article from one outlet to a different media brand.
     - NEVER use generic domain roots like `https://www.youtube.com` or `https://www.instagram.com` without the specific video ID or post slug.
   - For **YouTube Sourced News**: ALWAYS extract and set the YouTube video thumbnail (`https://i.ytimg.com/vi/<VIDEO_ID>/hqdefault.jpg`) as the feature image `imageUrl` whenever `originalUrl` contains a YouTube video ID.
   - **Image Selection Safeguards**: ALWAYS avoid using Barack Obama or unrelated foreign political portraits (`photo-1541872703-74c5e44368f9`). For Delhi/political news, use verified New Delhi landmarks (India Gate: `photo-1587474260584-136574528ed5`, Rashtrapati Bhavan/South Block: `photo-1570168007204-dfb528c6958f`, Red Fort: `photo-1599661046289-e31897846e41`).
   - Append new items to `SCANNED_NEWS_ITEMS`, update `BREAKING_NEWS_ALERTS`, and update `SCANNER_STATS` inside [`src/data/news-data.ts`](file:///Users/sadiq/antigravity/bangladesh-news-india/src/data/news-data.ts).

3. **Build, Validation & Git Workflow**:
   - Always run `node scripts/validate-news-integrity.mjs` (or `npm test`) to verify 100% link resolution and source-domain integrity.
   - Always run `npm run build` locally to verify static page generation before committing.
   - Once verified, commit the updated files and push to `origin main`.
