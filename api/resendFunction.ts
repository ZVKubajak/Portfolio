import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  const { email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: `${email}@resend.dev`,
      to: "zvkubajak@gmail.com",
      subject: "Message From Portfolio",
      html: `<p>${message}</p>`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Server Error" });
  }
}
