import { NextRequest, NextResponse } from 'next/server';
import { createVerificationToken, sendVerificationEmail } from '@/lib/mailer';
import { saveOrUpdateLead } from '@/lib/lead-store';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, designation, company, email } = body;

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

    const cleanName = name.trim();
    const cleanDesignation = (designation || '').trim();
    const cleanCompany = (company || '').trim();

    // Extract headers for tracking
    const userAgent = req.headers.get('user-agent') || '';
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    // Store lead safely (never block email sending if I/O fails)
    try {
      saveOrUpdateLead({
        name: cleanName,
        designation: cleanDesignation,
        company: cleanCompany,
        email: cleanEmail,
        status: 'pending',
        userAgent,
        ip,
      });
    } catch (saveErr) {
      console.warn('Lead store warning (non-fatal):', saveErr);
    }

    // Generate signed token
    const token = createVerificationToken({
      email: cleanEmail,
      name: cleanName,
      designation: cleanDesignation,
      company: cleanCompany,
      timestamp: Date.now(),
    });

    // Dynamic base URL detection for Vercel / Production / Localhost
    const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'localhost:3002';
    const proto = req.headers.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
    const baseUrl = `${proto}://${host}`;

    const verificationUrl = `${baseUrl}/api/auth/verify?token=${encodeURIComponent(token)}`;

    // Send email via Gmail SMTP
    const mailResult = await sendVerificationEmail({
      to: cleanEmail,
      name: cleanName,
      designation: cleanDesignation,
      company: cleanCompany,
      verificationUrl,
    });

    if (!mailResult.success) {
      console.error('Mail sending failed:', mailResult.error);
      return NextResponse.json(
        { error: mailResult.error || 'Failed to send verification email. Please check your email address.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Verification link sent successfully',
      email: cleanEmail,
    });
  } catch (err: any) {
    console.error('Error in send-verification route:', err);
    return NextResponse.json(
      { error: err?.message || 'Error processing verification request' },
      { status: 500 }
    );
  }
}
