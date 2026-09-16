#!/bin/bash
# Daily local candidate news scanner for Narrative Compass
# Triggered at 12:00 PM and 4:00 PM BST everyday

export PATH="/opt/homebrew/bin:/usr/local/bin:/Users/sadiq/.local/bin:$PATH"
PROJECT_DIR="/Users/sadiq/antigravity/bangladesh-news-india"
LOG_FILE="$PROJECT_DIR/scratch/cron-scan.log"

cd "$PROJECT_DIR" || exit 1
mkdir -p "$PROJECT_DIR/scratch"

echo "====================================================" >> "$LOG_FILE"
echo "⏰ Local Cron Execution: $(date)" >> "$LOG_FILE"
echo "====================================================" >> "$LOG_FILE"

node "$PROJECT_DIR/scripts/daily-news-scanner.mjs" --mode=all --dump-candidates >> "$LOG_FILE" 2>&1

echo "✅ Candidate scan completed at $(date)" >> "$LOG_FILE"
