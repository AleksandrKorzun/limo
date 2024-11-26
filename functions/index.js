// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");

// // Налаштування транспорту для Gmail
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "korzun.oleksandr@gmail.com", // Ваш Gmail
//     pass: "ynbf hzvj mrmn ldbf", // Пароль додатку
//   },
// });

// exports.sendEmailFunction = functions.https.onRequest(async (req, res) => {
//   try {
//     const { to, subject, text } = req.body;

//     const mailOptions = {
//       from: "korzun.oleksandr@gmail.com",
//       to: ["korzun.oleksandr@gmail.com", "Mishchenko.andrew001@gmail.com"],
//       subject: subject || "New order from Black Lion Limo",
//       text: text || "Порожнє повідомлення",
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).send({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).send({ success: false, error: error.message });
//   }
// });
