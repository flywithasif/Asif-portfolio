const nodemailer = require("nodemailer");

const sendContactEmail = async ({
  name,
  mobile,
  email,
  subject,
  message,
}) => {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.CONTACT_RECEIVER_EMAIL
  ) {
    console.log(
      "Email notification skipped: SMTP configuration is missing."
    );

    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,

    replyTo: email,

    subject: `Portfolio Contact: ${subject}`,

    text: `
New contact message received.

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim(),

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Portfolio Contact</h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Mobile:</strong> ${mobile}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Subject:</strong> ${subject}
        </p>

        <hr />

        <p>
          <strong>Message:</strong>
        </p>

        <p>
          ${message.replace(/\n/g, "<br />")}
        </p>
      </div>
    `,
  });
};

module.exports = sendContactEmail;