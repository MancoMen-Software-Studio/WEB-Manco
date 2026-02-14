import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("[Contact API] RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, company, message } = result.data;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_EMAIL || "mancomenstudio@gmail.com";

    const { data, error } = await resend.emails.send({
      from: `MancoMen Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New inquiry from ${name} — ${company}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066ff; border-bottom: 2px solid #0066ff; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #333; width: 100px;">Name</td>
              <td style="padding: 12px 0; color: #555;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #333;">Email</td>
              <td style="padding: 12px 0; color: #555;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: 600; color: #333;">Company</td>
              <td style="padding: 12px 0; color: #555;">${company}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: #f5f5f5; border-radius: 8px;">
            <h3 style="margin: 0 0 12px; color: #333;">Message</h3>
            <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 32px; font-size: 13px; color: #999;">
            Sent from mancomen.com contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Contact API] Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    console.log("[Contact API] Email sent successfully:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
