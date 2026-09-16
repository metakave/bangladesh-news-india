import { NextRequest, NextResponse } from 'next/server';
import { sendCorrectionReportEmail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, articleUrl, issueType, description } = body;

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    if (!articleUrl || typeof articleUrl !== 'string' || !articleUrl.trim()) {
      return NextResponse.json(
        { error: 'Article URL or title is required' },
        { status: 400 }
      );
    }

    if (!issueType || typeof issueType !== 'string' || !issueType.trim()) {
      return NextResponse.json(
        { error: 'Issue type selection is required' },
        { status: 400 }
      );
    }

    if (!description || typeof description !== 'string' || !description.trim()) {
      return NextResponse.json(
        { error: 'Detailed description is required' },
        { status: 400 }
      );
    }

    // Extract headers for tracking
    const userAgent = req.headers.get('user-agent') || '';
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    // Send notification email via SMTP to hello@sadiqalam.com
    const result = await sendCorrectionReportEmail({
      name: name.trim(),
      email: cleanEmail,
      articleUrl: articleUrl.trim(),
      issueType: issueType.trim(),
      description: description.trim(),
      userAgent,
      ip,
    });

    if (!result.success) {
      console.error('SMTP email dispatch failed:', result.error);
      return NextResponse.json(
        { error: result.error || 'Failed to send report email via SMTP.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Correction report submitted and delivered successfully via SMTP.',
      messageId: result.messageId,
    });
  } catch (err: any) {
    console.error('Error in corrections API route:', err);
    return NextResponse.json(
      { error: err?.message || 'Error processing report submission' },
      { status: 500 }
    );
  }
}
