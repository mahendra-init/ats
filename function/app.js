const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 5000;

const senderEmail = "sspatel120702@gmail.com";
const senderPassword = "gahqpmxhutusppbz";

function sendEmail() {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    const mail_configs = {
      from: senderEmail, // sender address
      to: "patelshivam.0212@gmail.com", // list of receivers
      subject: "Login Credentials for your ats account.", // Subject line
      text: "You've been verified successfully. Here's your ", // plain text body
      html: `
    Login: <strong> ${user_email} <br/>
    Password: <strong> ${password}<br/>

    Proceed with sign-in page: ${"http://localhost:/3000/login"}

    Thank You!
`, // html body
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: "An Error Occured" });
      }
      return resolve({ message: "Email sent succesfully" });
    });
  });
}

app.get("/", (req, res) => {
  console.log("Running Successfully");
});

app.get("/sendmail", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, (req, res) => {
  console.log(`backend is runniing on localhost://${port}`);
});
