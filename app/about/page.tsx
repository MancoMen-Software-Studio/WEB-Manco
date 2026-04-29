import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ValuesSection } from "@/components/organisms/values-section";
import { MethodologySection } from "@/components/organisms/methodology-section";
import { CTASection } from "@/components/organisms/cta-section";
import { Badge } from "@/components/atoms/badge";
import { FounderSection } from "@/components/organisms/founder-section";

export const metadata = genMeta({
  title: "Studio",
  description:
    "MancoMen Software Studio — independent product studio building Nodeself. Founded by Juan Martinez, Bogotá, Colombia.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ paddingTop: 160, paddingBottom: 80 }}>
          <div className="px-6 md:px-8" style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
              <Badge>The Studio</Badge>
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
                Not a consultancy.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  A product studio.
                </span>
              </h1>
              <p
                style={{
                  maxWidth: 580,
                  fontSize: "clamp(15px, 1.6vw, 17px)",
                  lineHeight: 1.75,
                  color: "var(--color-gray-500)",
                }}
              >
                MancoMen Software Studio was born as an enterprise consultancy.
                It pivoted. Today it has one mission: build software that reveals
                the structure of human behavior — starting with Nodeself.
              </p>
            </div>
          </div>
        </section>

        <FounderSection />

        <ValuesSection />
        <MethodologySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
