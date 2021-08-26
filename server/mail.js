require("dotenv").config();
const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  secureConnection: true,
  port: 465,
  auth: {
    user: process.env.US_DOM,
    pass: process.env.PASSWORD,
  },
});

module.exports = SendUserEmail = (email, subject, text, name, cb) => {
  const mailOptions = {
    from: process.env.US_DOM,
    to: process.env.EMAIL_KEY,
    subject: "email zoho",
    html: `<b>Sender: ${name}</b>
    <b>Email: ${email}</b>
    <b>subject: ${subject}</b>
    <b>Message: ${text}</b> 
    `,
  };

  const emailReply = {
    from: process.env.US_DOM,
    to: email,
    subject: "Thank You",
    html: `<b>Dear ${name}</b/>
  <p> Thank You very much For Your Email I will get back to you as soon as I can 👋!</p>
  <p>Have a Fantastic day!</p>
  <p>Regards Karoly Kertesz</p>
  
  `,
  };

  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      cb(err, null);
    } else {
      transport.sendMail(emailReply, (err, info) => {
        if (err) {
          console.log(err);
        }
      });
      cb(null, info);
    }
  });
};
