import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ProjectsShowcase } from "@/components/organisms/projects-showcase";
import { NexusVideos } from "@/components/organisms/nexus-videos";
import { CTASection } from "@/components/organisms/cta-section";
import { Badge } from "@/components/atoms/badge";

export const metadata = genMeta({
  title: "Nexus",
  description:
    "Nexus — behavioral modeling platform by MancoMen Software Studio. AI journaling, living graph, decay engine, forward simulation. Currently seeking investment.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ paddingTop: 160, paddingBottom: 72 }}>
          <div className="px-6 md:px-8" style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
              <Badge>Flagship Product</Badge>
              <h1
                className="font-display"
                style={{
                  fontSize: "clamp(40px, 6.5vw, 88px)",
                  fontWeight: 700,
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  color: "white",
                }}
              >
                Nexus —{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  the behavioral graph
                </span>
              </h1>
              <p
                style={{
                  maxWidth: 600,
                  fontSize: "clamp(15px, 1.6vw, 17px)",
                  lineHeight: 1.75,
                  color: "var(--color-gray-500)",
                }}
              >
                A mobile-first platform that maps your personal change as a living graph.
                Write in natural language. The AI extracts structure. The graph evolves, decays,
                and simulates — showing you what you couldn&apos;t see about yourself.
              </p>

              {/* Status pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 18px",
                  borderRadius: 9999,
                  border: "1px solid rgba(16,185,129,0.2)",
                  background: "rgba(16,185,129,0.06)",
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#10b981", letterSpacing: "0.08em" }}>
                  Core engine complete · App Store launch 2026
                </span>
              </div>
            </div>
          </div>
        </section>
        <ProjectsShowcase />
        <NexusVideos />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
