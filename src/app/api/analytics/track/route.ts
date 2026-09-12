import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const statsFilePath = path.join(process.cwd(), 'data', 'visitor-stats.json');

// Initialize base counts
function getStats() {
  try {
    if (fs.existsSync(statsFilePath)) {
      const data = fs.readFileSync(statsFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (e) {
    // fallback
  }
  return {
    totalVisits: 3840,
    uniqueVisitors: 1420,
    lastUpdated: new Date().toISOString()
  };
}

function saveStats(stats: { totalVisits: number; uniqueVisitors: number; lastUpdated: string }) {
  try {
    const dir = path.dirname(statsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(statsFilePath, JSON.stringify(stats, null, 2), 'utf8');
  } catch (e) {
    // Ignore filesystem write issues in serverless read-only contexts
  }
}

// In-memory cache for serverless environments
let memoryStats = getStats();

export async function GET() {
  return NextResponse.json(memoryStats);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const isNewUnique = Boolean(body.isNewUnique);

    memoryStats.totalVisits += 1;
    if (isNewUnique) {
      memoryStats.uniqueVisitors += 1;
    }
    memoryStats.lastUpdated = new Date().toISOString();

    saveStats(memoryStats);

    return NextResponse.json(memoryStats);
  } catch (error: any) {
    return NextResponse.json(memoryStats);
  }
}
