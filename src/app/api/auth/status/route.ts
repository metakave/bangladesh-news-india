import { NextRequest, NextResponse } from 'next/server';
import { getAllLeads } from '@/lib/lead-store';

export async function GET(req: NextRequest) {
  const verifiedCookie = req.cookies.get('visitor_verified')?.value;
  const emailQuery = req.nextUrl.searchParams.get('email');

  if (verifiedCookie === 'true') {
    return NextResponse.json({ verified: true });
  }

  // If email is passed, check if the lead was verified via another device/tab
  if (emailQuery) {
    const leads = getAllLeads();
    const lead = leads.find((l) => l.email.toLowerCase() === emailQuery.toLowerCase().trim());
    if (lead && lead.status === 'verified') {
      const response = NextResponse.json({ verified: true, email: lead.email });
      response.cookies.set({
        name: 'visitor_verified',
        value: 'true',
        maxAge: 365 * 24 * 60 * 60,
        path: '/',
        sameSite: 'lax',
      });
      return response;
    }
  }

  return NextResponse.json({ verified: false });
}
