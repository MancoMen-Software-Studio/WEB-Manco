import { generateMetadata as genMeta } from "@/lib/metadata";
import { Navbar } from "@/components/organisms/navbar";
import { Footer } from "@/components/organisms/footer";
import { CTASection } from "@/components/organisms/cta-section";
import { SectionHeader } from "@/components/molecules/section-header";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";
import { services } from "@/data/services";

export const metadata = genMeta({
  title: "Nexus — How it works",
  description:
    "The three core systems inside Nexus: Behavioral Graph, Decay Engine, and Forward Simulator — a new category of software for personal transformation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-header" style={{ paddingTop: 160, paddingBottom: 80 }}>
          <div className="px-6 md:px-8" style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
              <Badge>How Nexus Works</Badge>
              <Heading as="h1" display>
                Three systems.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  One model.
                </span>
              </Heading>
              <Text size="lg" style={{ maxWidth: 600 }}>
                Nexus is built around three core engines that nobody else has built together.
                Each one solves a structural problem in how wellness apps understand behavior.
              </Text>
            </div>
          </div>
        </section>

        {/* Service detail sections */}
        <section style={{ paddingBottom: 120 }}>
          <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>
            {services.map((service, index) => (
              <div
                key={service.slug}
                style={{
                  paddingTop: 80,
                  paddingBottom: 80,
                  borderBottom: index < services.length - 1 ? "1px solid #1e1e2e" : "none",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <Badge>{`0${index + 1}`}</Badge>
                    <Heading as="h2">
                      {service.title}
                    </Heading>
                    <Text size="lg" style={{ color: "#a3a3a3" }}>
                      {service.subtitle}
                    </Text>
                    <Text>
                      {service.description}
                    </Text>

                    {/* How it works steps */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 8 }}>
                      {service.process.map((step, i) => (
                        <div
                          key={step.title}
                          style={{
                            display: "flex",
                            gap: 16,
                            padding: "20px 24px",
                            borderRadius: 12,
                            border: "1px solid #1e1e2e",
                            background: "#0d0d1a",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              color: "var(--color-electric-light)",
                              fontFamily: "var(--font-mono)",
                              fontWeight: 600,
                              flexShrink: 0,
                              paddingTop: 2,
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p style={{ fontSize: 14, fontWeight: 600, color: "white", marginBottom: 6 }}>
                              {step.title}
                            </p>
                            <p style={{ fontSize: 13, color: "#737373", lineHeight: 1.6 }}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div>
                      <p style={{ fontSize: 11, color: "#404040", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", marginBottom: 16 }}>
                        Capabilities
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 12,
                            }}
                          >
                            <div
                              style={{
                                width: 16,
                                height: 16,
                                borderRadius: 4,
                                background: "var(--color-electric)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                marginTop: 2,
                                fontSize: 9,
                                color: "white",
                              }}
                            >
                              ✓
                            </div>
                            <span style={{ fontSize: 14, color: "#a3a3a3", lineHeight: 1.5 }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p style={{ fontSize: 11, color: "#404040", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "var(--font-mono)", marginBottom: 12 }}>
                        Tech
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              fontSize: 12,
                              color: "#737373",
                              border: "1px solid #1e1e2e",
                              borderRadius: 9999,
                              padding: "4px 12px",
                              fontFamily: "var(--font-mono)",
                              background: "#0d0d1a",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
