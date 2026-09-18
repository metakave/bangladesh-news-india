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
   - Ensure `originalUrl` ALWAYS preserves the candidate's specific article/video URL (e.g. `https://news.google.com/rss/articles/...` or direct post URL) and NEVER uses generic domain roots like `https://www.youtube.com` or `https://www.instagram.com`.
   - Append new items to `SCANNED_NEWS_ITEMS`, update `BREAKING_NEWS_ALERTS`, and update `SCANNER_STATS` inside [`src/data/news-data.ts`](file:///Users/sadiq/antigravity/bangladesh-news-india/src/data/news-data.ts).

3. **Build & Git Workflow**:
   - Always run `npm run build` locally to verify static page generation before committing.
   - Once verified, commit the updated files and push to `origin main`.
