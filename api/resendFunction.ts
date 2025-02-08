import { Resend } from "resend";

const resend = new Resend("re_WxJnTMGv_7evZRLLnYvyw2KhBbajHwYWY");

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
