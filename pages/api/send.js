export default function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { yourName, email, message } = req.body;

    const msg = {
      to: email,
      from: process.env.SITE_EMAIL,
      subject: "Your message has sent to WebTech Note",
      text: `
      Thank you for getting in touch. I have received a message with the following information:\r\n
      Name: ${yourName}\r\n
      Email: ${email}\r\n
      Message: ${message}}\r\n
      I'll get back to you within 3 days. Have a good day!
      `,
      html: `
      <p>Thank you for getting in touch. <br>I have received your message with the following information:</p>
      <hr />
      <p>Your name: ${yourName}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      <hr />
      <p>I will get back to you within 3 days. Have a good day!</p>
      <p>Tatsuya | WebTech Note</p>
      <p>Site URL: <a href="https://webtech-note.com" rel="noopener noreferrer">https://webtech-note.com</a></p>
      `,
    };

    const msgToAdmin = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.SITE_EMAIL,
      subject: "New contact",
      text: `
      Thank you for getting in touch. I'll get back to you within 3 days. Have a good day!\r\n
      Name: ${yourName}\r\n
      Email: ${email}\r\n
      Message: ${message}
      `,
      html: `
      <p>Thank you for getting in touch. <br>I have received your message with the following information:</p>
      <hr />
      <p>Your name: ${yourName}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      <hr />
      <p>I will get back to you within 3 days. Have a good day!</p>
      <p><strong>Tatsuya | WebTech Note</strong></p>
      <p>Site URL: <a href="https://webtech-note.com" rel="noopener noreferrer">https://webtech-note.com</a></p>
      `,
    };

    (async () => {
      try {
        await sgMail.send(msg);
        await sgMail.send(msgToAdmin);
      } catch (error) {
        console.error(error);

        return res
          .status(error.statusCode || 500)
          .json({ error: error.message });
      }
    })();
  }

  return res.status(200).json({ error: "" });
}
