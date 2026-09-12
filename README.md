# Bangladesh Media Monitor (India Watch)

A digital journalism and media intelligence scanner that monitors top Indian mainstream and vernacular publications across **Delhi** and **Kolkata** (English, Bengali, and Hindi), filtering specifically for **Bangladesh-related reporting** with 3-marker sentiment tracking.

![Bangladesh Media Monitor](https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop&q=80)

---

## 🌟 Core Features

- **Indian Media Source Tracking (Delhi & Kolkata Focus):**
  - **English (Delhi HQ):** *The Indian Express*, *The Hindu*, *Business Standard*, *Hindustan Times*
  - **Bengali (Kolkata Press Desks):** *Anandabazar Patrika (ABP)*, *Ei Samay*, *Sangbad Pratidin*
  - **Hindi (Delhi National Desks):** *Dainik Jagran*, *Amar Ujala*
- **3-Marker Sentiment & Narrative Tracking:**
  - 🟢 **`POSITIVE ON BD`** — Bilateral trade growth, energy grid accords, Teesta water data sharing, sports diplomacy.
  - 🔴 **`NEGATIVE ON BD`** — Border security/BSF infiltration alerts, hospital revenue drops from visa delays.
  - ⚪ **`NEUTRAL ON BD`** — Transit corridor negotiations, editorial foreign policy appraisals.
- **Concise Summaries & Outbound Verification:**
  - Short analytical summaries with key strategic bullet points.
  - Preserves original vernacular headlines in Bengali/Hindi with English translations.
  - Direct `Read Full on [Source]` outbound links to original Indian publications.
- **Live Sentiment Pulse & Multi-Tier Filters:**
  - Real-time aggregate narrative ratio bar (`% Positive | % Neutral | % Negative`).
  - Filter by sentiment, bureau location (Delhi / Kolkata), and publication language.
- **Instant Search Modal (`Cmd/Ctrl + K`):** Real-time client search across keywords, sources, and sentiments.
- **Dark & Light Mode:** Seamless day/night newspaper theme toggle.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router, Server Components & Static Site Generation)
- **Language:** TypeScript
- **Styling:** Modular Vanilla CSS with Design System Tokens & Editorial Typography
- **Icons:** Lucide Icons
- **Performance:** Optimized for zero-CLS, fast LCP, and AVIF/WebP responsive image delivery.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+ installed
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/metakave/bangladesh-news-india.git

# Navigate to directory
cd bangladesh-news-india

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Compile and build static production bundle
npm run build

# Start production server
npm run start
```

---

## 📜 License

MIT License © 2026 Bangladesh Watch / India Media Monitor.
