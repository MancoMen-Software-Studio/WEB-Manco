import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ContactForm } from "@/components/organisms/contact-form";
import { Badge } from "@/components/atoms/badge";

export const metadata = genMeta({
  title: "Contact",
  description:
    "Get in touch with MancoMen Software Studio — discuss Nexus, early access, or investment opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingTop: 160, paddingBottom: 60 }}>
          <div className="px-6 md:px-8" style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
              <Badge>Contact</Badge>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(40px, 6vw, 80px)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "white",
                }}
              >
                Start a{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  conversation.
                </span>
              </h1>
              <p
                style={{
                  maxWidth: 520,
                  fontSize: "clamp(15px, 1.6vw, 17px)",
                  lineHeight: 1.7,
                  color: "var(--color-gray-500)",
                }}
              >
                Whether you&apos;re interested in Nexus early access, a conversation about
                investing in MancoMen, or just want to say hello — Juan reads every message.
              </p>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
