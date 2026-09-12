import { NextRequest, NextResponse } from 'next/server';
import { verifyVerificationToken } from '@/lib/mailer';
import { markLeadVerifiedByEmail, saveOrUpdateLead } from '@/lib/lead-store';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  const host = req.headers.get('host') || 'localhost:3002';
  const proto = req.headers.get('x-forwarded-proto') || (host.includes('localhost') ? 'http' : 'https');
  const baseUrl = `${proto}://${host}`;

  if (!token) {
    return new NextResponse(
      `<html>
        <head><title>Invalid Verification Link</title><meta name="viewport" content="width=device-width, initial-scale=1"></head>
        <body style="font-family: system-ui; text-align: center; padding: 50px 20px; background: #f8fafc;">
          <div style="max-width: 480px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <div style="font-size: 48px; margin-bottom: 16px;">⚠️</div>
            <h2 style="color: #dc2626; margin-bottom: 8px;">Invalid Verification Link</h2>
            <p style="color: #64748b;">The verification link is missing or broken. Please submit your email again on Narrative Compass.</p>
            <a href="${baseUrl}" style="display: inline-block; margin-top: 16px; background: #2563eb; color: white; text-decoration: none; padding: 10px 24px; border-radius: 6px; font-weight: 600;">Return to Home</a>
          </div>
        </body>
      </html>`,
      { status: 400, headers: { 'content-type': 'text/html; charset=utf-8' } }
    );
  }

  const payload = verifyVerificationToken(token);
  if (!payload) {
    return new NextResponse(
      `<html>
        <head><title>Expired Verification Link</title><meta name="viewport" content="width=device-width, initial-scale=1"></head>
        <body style="font-family: system-ui; text-align: center; padding: 50px 20px; background: #f8fafc;">
          <div style="max-width: 480px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <div style="font-size: 48px; margin-bottom: 16px;">⏱️</div>
            <h2 style="color: #ea580c; margin-bottom: 8px;">Link Expired or Invalid</h2>
            <p style="color: #64748b;">This verification link has expired (links are valid for 24 hours). Please request a new verification link on Narrative Compass.</p>
            <a href="${baseUrl}" style="display: inline-block; margin-top: 16px; background: #2563eb; color: white; text-decoration: none; padding: 10px 24px; border-radius: 6px; font-weight: 600;">Return to Home</a>
          </div>
        </body>
      </html>`,
      { status: 400, headers: { 'content-type': 'text/html; charset=utf-8' } }
    );
  }

  // Mark lead verified
  markLeadVerifiedByEmail(payload.email);

  // Set cookie for 1 year
  const response = NextResponse.redirect(new URL('/?verified=1', baseUrl));
  
  // Set visitor_verified cookie
  response.cookies.set({
    name: 'visitor_verified',
    value: 'true',
    maxAge: 365 * 24 * 60 * 60, // 1 year in seconds
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  // Set email cookie for client recognition
  response.cookies.set({
    name: 'visitor_email',
    value: payload.email,
    maxAge: 365 * 24 * 60 * 60,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
