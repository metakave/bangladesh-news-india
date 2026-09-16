import crypto from 'crypto';
import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.zoho.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_SECURE = process.env.SMTP_SECURE !== 'false';
const SMTP_USER = process.env.SMTP_USER || 'hello@sadiqalam.com';
const SMTP_PASS = process.env.SMTP_PASS || 'yp9AiD51NNwm';
const SMTP_FROM = process.env.SMTP_FROM || `"Narrative Compass" <${SMTP_USER}>`;
const AUTH_SECRET = process.env.AUTH_SECRET || 'narrative_compass_secret_key_2026_secure';

// Create Nodemailer Transporter
export function getMailerTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export interface VerificationPayload {
  email: string;
  name: string;
  designation?: string;
  company?: string;
  timestamp: number;
}

// Generate a cryptographically signed HMAC token (valid for 24h)
export function createVerificationToken(payload: VerificationPayload): string {
  const data = JSON.stringify(payload);
  const dataB64 = Buffer.from(data, 'utf-8').toString('base64url');
  const signature = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(dataB64)
    .digest('base64url');
  return `${dataB64}.${signature}`;
}

// Verify HMAC token
export function verifyVerificationToken(token: string): VerificationPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) return null;
    const [dataB64, signature] = parts;
    const expectedSignature = crypto
      .createHmac('sha256', AUTH_SECRET)
      .update(dataB64)
      .digest('base64url');

    if (signature !== expectedSignature) {
      return null;
    }

    const data = Buffer.from(dataB64, 'base64url').toString('utf-8');
    const payload: VerificationPayload = JSON.parse(data);

    // Check expiration: 24 hours (86,400,000 ms)
    const now = Date.now();
    if (now - payload.timestamp > 24 * 60 * 60 * 1000) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

// Send HTML Verification Email
export async function sendVerificationEmail({
  to,
  name,
  designation,
  company,
  verificationUrl,
}: {
  to: string;
  name: string;
  designation?: string;
  company?: string;
  verificationUrl: string;
}): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transporter = getMailerTransporter();

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Your Access - Narrative Compass</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .email-container { max-width: 580px; margin: 30px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 24px; text-align: center; }
    .header h1 { margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0; color: #94a3b8; font-size: 14px; }
    .content { padding: 32px 28px; color: #334155; line-height: 1.6; }
    .content h2 { margin-top: 0; color: #0f172a; font-size: 19px; }
    .meta-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; margin: 20px 0; font-size: 14px; color: #475569; }
    .meta-box div { margin-bottom: 4px; }
    .meta-box div:last-child { margin-bottom: 0; }
    .btn-container { text-align: center; margin: 30px 0; }
    .btn { display: inline-block; background: #2563eb; color: #ffffff !important; text-decoration: none; padding: 14px 32px; font-size: 16px; font-weight: 600; border-radius: 8px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3); }
    .btn:hover { background: #1d4ed8; }
    .link-fallback { font-size: 12px; color: #64748b; word-break: break-all; margin-top: 24px; }
    .footer { background: #f8fafc; padding: 20px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>🧭 Narrative Compass</h1>
      <p>ন্যারেটিভ কম্পাস &bull; Bangladesh in Indian News Media Intelligence</p>
    </div>
    <div class="content">
      <h2>Hello ${name || 'Visitor'},</h2>
      <p>Thank you for visiting <strong>Narrative Compass (ন্যারেটিভ কম্পাস)</strong> — the automated platform analyzing Bangladesh-related narratives across Indian news outlets.</p>
      
      <p>To verify your access and continue browsing without restriction, please confirm your email address by clicking the button below:</p>
      
      <div class="meta-box">
        <div><strong>Name:</strong> ${name}</div>
        ${designation ? `<div><strong>Designation:</strong> ${designation}</div>` : ''}
        ${company ? `<div><strong>Company / Organization:</strong> ${company}</div>` : ''}
        <div><strong>Email:</strong> ${to}</div>
      </div>

      <div class="btn-container">
        <a href="${verificationUrl}" target="_blank" class="btn">Verify Access & Continue</a>
      </div>

      <p style="font-size: 13px; color: #64748b;">This verification link will remain valid for <strong>24 hours</strong>. Once verified, you will have uninterrupted access on all your devices.</p>

      <div class="link-fallback">
        If the button doesn't work, copy and paste this link into your browser:<br>
        <a href="${verificationUrl}" style="color: #2563eb;">${verificationUrl}</a>
      </div>
    </div>
    <div class="footer">
      &copy; 2026 Narrative Compass (ন্যারেটিভ কম্পাস). All rights reserved.<br>
      Head of Idea: Sadiq M. Alam | <a href="mailto:hello@sadiqalam.com" style="color: #64748b;">hello@sadiqalam.com</a>
    </div>
  </div>
</body>
</html>
    `;

    const info = await transporter.sendMail({
      from: SMTP_FROM,
      to,
      subject: 'Verify Your Access to Narrative Compass (ন্যারেটিভ কম্পাস)',
      html: htmlContent,
      text: `Hello ${name},\n\nPlease verify your access to Narrative Compass by visiting this link: ${verificationUrl}\n\nThank you,\nNarrative Compass Team`,
    });

    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('Error sending verification email:', error);
    return { success: false, error: error?.message || 'Failed to send email' };
  }
}

export interface CorrectionReportData {
  name: string;
  email: string;
  articleUrl: string;
  issueType: string;
  description: string;
  userAgent?: string;
  ip?: string;
}

// Send Correction & Clarification Report Email via SMTP
export async function sendCorrectionReportEmail(data: CorrectionReportData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const transporter = getMailerTransporter();

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Correction & Clarification Report</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; color: #1e293b; padding: 20px; }
    .card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; border: 1px solid #e2e8f0; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px; }
    .header h2 { margin: 0; color: #0f172a; font-size: 20px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 700; font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0f172a; word-break: break-word; }
    .box { background: #f1f5f9; border-left: 4px solid #2563eb; padding: 12px 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
    .footer { font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; margin-top: 24px; padding-top: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>🧭 Narrative Compass — New Reader Correction Report</h2>
    </div>
    
    <div class="field">
      <div class="label">Reporter Name</div>
      <div class="value">${data.name}</div>
    </div>

    <div class="field">
      <div class="label">Reporter Email</div>
      <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
    </div>

    <div class="field">
      <div class="label">Reported Article Link / Headline</div>
      <div class="value">${data.articleUrl}</div>
    </div>

    <div class="field">
      <div class="label">Issue Classification</div>
      <div class="value" style="font-weight: 700; color: #dc2626;">${data.issueType}</div>
    </div>

    <div class="field">
      <div class="label">Detailed Description</div>
      <div class="box">${data.description}</div>
    </div>

    ${data.ip ? `<div class="field"><div class="label">IP Address</div><div class="value">${data.ip}</div></div>` : ''}

    <div class="footer">
      This notification was automatically sent from the Narrative Compass platform form.<br>
      SLA Response Commitment: Please allow 24 to 48 hours to review and respond.
    </div>
  </div>
</body>
</html>
    `;

    const info = await transporter.sendMail({
      from: SMTP_FROM,
      to: 'hello@sadiqalam.com',
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `[Narrative Compass Report] ${data.issueType}: ${data.name}`,
      html: htmlContent,
      text: `New Correction Report from ${data.name} (${data.email}):\n\nArticle: ${data.articleUrl}\nIssue Type: ${data.issueType}\n\nDescription:\n${data.description}`,
    });

    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error('Error sending correction report email:', error);
    return { success: false, error: error?.message || 'Failed to send report email' };
  }
}

