import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const dynamic = "force-dynamic";

const waitlistSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("[Waitlist API] RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const result = waitlistSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const { email } = result.data;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_EMAIL || "macomenstudio@icloud.com";
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // Add to Resend audience if configured
    if (audienceId) {
      await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      }).catch((err: unknown) => {
        // Non-fatal: contact might already exist
        console.warn("[Waitlist API] Could not add to audience:", err);
      });
    }

    // Notify the team
    const { error } = await resend.emails.send({
      from: `Nodeself Waitlist <${fromEmail}>`,
      to: [toEmail],
      subject: `New waitlist signup — ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 500px; margin: 0 auto; background: #0a0a0f; padding: 32px; border-radius: 12px;">
          <div style="color: #8b5cf6; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 16px; font-family: monospace;">
            NODESELF · WAITLIST
          </div>
          <h2 style="color: white; font-size: 20px; margin: 0 0 24px; font-weight: 600;">
            New signup
          </h2>
          <p style="color: #a3a3a3; margin: 0 0 8px;">Email</p>
          <p style="color: white; font-size: 16px; margin: 0 0 32px;">
            <a href="mailto:${email}" style="color: #00e5ff;">${email}</a>
          </p>
          <p style="color: #404040; font-size: 11px; font-family: monospace; margin: 0;">
            mancomen.com/waitlist — ${new Date().toISOString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Waitlist API] Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to process signup." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Waitlist API] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
