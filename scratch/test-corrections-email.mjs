import { sendCorrectionReportEmail } from '../src/lib/mailer.ts';

async function testReportEmail() {
  console.log('Sending test correction report email via Zoho SMTP...');
  const result = await sendCorrectionReportEmail({
    name: 'Sadiq Alam (Test User)',
    email: 'hello@sadiqalam.com',
    articleUrl: 'https://narrativecompass.bd/article/tripura-times-indian-citizen-detained-at-bangladesh-border-illegal-entry',
    issueType: 'Misrepresentation / Technical Glitch Test',
    description: 'This is a test submission verifying SMTP email dispatch to hello@sadiqalam.com via Zoho Mail (smtp.zoho.com:465).',
    ip: '127.0.0.1',
  });

  console.log('SMTP Email Result:', result);
}

testReportEmail();
