import { sendEmail } from "@/utils/mailjet";

export async function POST(request) {
  const { to, subject, text } = await request.json();

  try {
    const response = await sendEmail(to, subject, text);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
