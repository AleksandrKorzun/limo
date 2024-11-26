// import nodemailer from "nodemailer";

// export async function POST(req, res) {
//   const body = await req.json();
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "korzun.oleksandr@gmail.com", // Ваша Gmail адреса
//       pass: "ynbf hzvj mrmn ldbf", // Пароль додатку (не основний пароль Gmail)
//     },
//   });
//   const text = Object.entries(body).reduce(
//     (acc, [key, value]) => (acc += `${key}: ${value}\n`),
//     ""
//   );
//   console.log("body", body);
//   const mailOptions = {
//     from: "korzun.oleksandr@gmail.com",
//     to: "korzun.oleksandr@gmail.com",
//     // to: ["korzun.oleksandr@gmail.com", "Mishchenko.andrew001@gmail.com"], // Адреса отримувача
//     subject: "New order from Black Lion Limousine",
//     text: text,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ success: false, error: error.message }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
