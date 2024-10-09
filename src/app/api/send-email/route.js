// import { sendEmail } from "@/utils/mailjet";

// export async function POST(request) {
//   const { to, subject, text } = await request.json();

//   try {
//     const response = await sendEmail(to, subject, text);
//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       {
//         status: 500,
//       }
//     );
//   }
// }

import nodemailer from "nodemailer";

export async function POST(req, res) {
  const body = await req.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "korzun.oleksandr@gmail.com", // Ваша Gmail адреса
      pass: "ynbf hzvj mrmn ldbf", // Пароль додатку (не основний пароль Gmail)
    },
  });
  const text = Object.entries(body).reduce(
    (acc, [key, value]) => (acc += `${key}: ${value}\n`),
    ""
  );
  const mailOptions = {
    from: "korzun.oleksandr@gmail.com",
    // to: "korzun.oleksandr@gmail.com", // Адреса отримувача
    to: "Mishchenko.andrew001@gmail.com", // Адреса отримувача
    subject: "New order from Black Lion Limo",
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    // res.status(200).json({ success: true });
    return true;
  } catch (error) {
    // res.status(500).json({ success: false, error });
    return false;
  }
}
