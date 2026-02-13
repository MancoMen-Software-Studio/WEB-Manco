import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
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

    await resend.emails.send({
      from: `MancoMen Website <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.CONTACT_EMAIL || "mancomenstudio@gmail.com"],
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

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
