import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendWelcomeEmail(to: string, name: string) {
  const firstName = name.split(' ')[0];

  const text = `Hey ${firstName}!

Welcome to Blync — the place to sharpen your aptitude for Capgemini and Cognizant placements.

You're all set. Jump in and start playing:
https://www.cognitivegames.me/games/cognitive
`;

  await transporter.sendMail({
    from: `"Blync" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Welcome to Blync 👋',
    text,
  });
}
