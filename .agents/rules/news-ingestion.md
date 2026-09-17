# Local News Ingestion Rules

- Always process news updates locally through Antigravity without querying DeepSeek or external paid APIs.
- Dump candidates to `scratch/candidates.json`, synthesize articles locally into `src/data/news-data.ts`, test with `npm run build`, and push to `origin main`.
