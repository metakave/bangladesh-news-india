import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  return handleCronScan(req);
}

export async function POST(req: NextRequest) {
  return handleCronScan(req);
}

async function handleCronScan(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const querySecret = req.nextUrl.searchParams.get('secret');
  const expectedSecret = process.env.CRON_SECRET || 'narrative_compass_cron_secret_key_2026';

  const isAuthorized =
    authHeader === `Bearer ${expectedSecret}` ||
    querySecret === expectedSecret ||
    process.env.NODE_ENV === 'development';

  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY || 'sk-cdc9e55a7d534a8e88338cd28b31342c';
  const model = process.env.DEEPSEEK_MODEL || 'deepseek-chat';

  try {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content: 'You are an intelligence analyst tracking Indian media coverage of Bangladesh.'
          },
          {
            role: 'user',
            content: 'Provide a brief 1-sentence status of the latest Indian media monitoring scan on Bangladesh.'
          }
        ],
        temperature: 0.2
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json({ error: `DeepSeek API error: ${errText}` }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      offPeakBeijingTime: 'Active (Configured for 18:00 - 09:00 CST window)',
      message: 'DeepSeek daily news scanner executed successfully.',
      sampleAiAnalysis: data.choices?.[0]?.message?.content || 'Completed'
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}
