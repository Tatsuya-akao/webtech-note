export default async (req, res) => {
  let response = null;

  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { yourName, email, message } = req.body;

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
      <p>Tatsuya | WebTech Note</p>
      <p>Site URL: <a href="https://webtech-note.com" rel="noopener noreferrer">https://webtech-note.com</a></p>
      `,
    };

    try {
      response = await sgMail.send(msgToAdmin);

      res.status(200);
      res.send(response);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }

      res.status(500);
    }
  }
};
