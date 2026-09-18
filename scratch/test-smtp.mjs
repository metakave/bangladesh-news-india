import nodemailer from 'nodemailer';

async function testSMTP(host, port, secure) {
  console.log(`Testing ${host}:${port} (secure: ${secure})...`);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: 'hello@sadiqalam.com',
      pass: 'yp9AiD51NNwm',
    },
    connectTimeout: 10000,
  });

  try {
    const verified = await transporter.verify();
    console.log(`✅ SUCCESS on ${host}:${port}:`, verified);
    return true;
  } catch (err) {
    console.error(`❌ FAILED on ${host}:${port}:`, err.message);
    return false;
  }
}

async function main() {
  await testSMTP('smtppro.zoho.com', 465, true) ||
  await testSMTP('smtppro.zoho.com', 587, false) ||
  await testSMTP('smtp.zoho.com', 465, true) ||
  await testSMTP('smtp.zoho.com', 587, false);
}

main();
