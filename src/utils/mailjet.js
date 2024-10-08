// lib/mailjet.js
import Mailjet from "node-mailjet";

const mailjetClient = new Mailjet({
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_EMAIL_API_KEY, // Set your Mailjet API key in .env
  apiSecret: process.env.NEXT_PUBLIC_REACT_APP_EMAIL_SECRET_KEY, // Set your Mailjet API secret in .env
});
export const sendEmail = async (to, subject, text) => {
  const request = mailjetClient.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "korzun.oleksandr@gmail.com",
          Name: "YOUR_NAME",
        },
        To: [
          {
            Email: "korzun.oleksandr@gmail.com",
          },
        ],
        Subject: subject,
        TextPart: text,
      },
    ],
  });

  try {
    const result = await request;
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
