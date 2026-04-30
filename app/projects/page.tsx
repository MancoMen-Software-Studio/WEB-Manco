import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { ProjectsShowcase } from "@/components/organisms/projects-showcase";
import { NodeselfVideos } from "@/components/organisms/nodeself-videos";
import { CTASection } from "@/components/organisms/cta-section";
import { Badge } from "@/components/atoms/badge";

export const metadata = genMeta({
  title: "Nodeself",
  description:
    "Nodeself — behavioral modeling engine by MancoMen Software Studio. Causal graph, decay engine, forward simulation. The graph is the product. Currently seeking investment.",
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
                Nodeself —{" "}
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
                  maxWidth: 680,
                  fontSize: "clamp(16px, 1.8vw, 18px)",
                  lineHeight: 1.75,
                  color: "var(--color-gray-300)",
                }}
              >
                A mobile-first platform that maps your personal change as a living graph.
                Feed it data in natural language — Nodeself extracts the behavioral structure,
                builds a causal graph, and models what happens over time. The graph decays
                when you stop. It simulates your future when you ask.
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
        <NodeselfVideos />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
