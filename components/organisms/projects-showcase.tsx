"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { ROUTES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const capabilities = [
  "Turn natural-language check-ins into connected behavioral graphs",
  "Reveal relationships between habits, emotions, and decisions",
  "Show visual decay when important nodes stop being reinforced",
  "Simulate possible outcomes under different behavioral scenarios",
  "Generate insights from the structure of your graph over time",
];

const modelPillars = [
  { glyph: "≈", label: "Habits fade", sub: "Without reinforcement, every pattern decays" },
  { glyph: "◈", label: "Everything connects", sub: "One behavior shifts the weight of everything around it" },
  { glyph: "→", label: "Your future is visible", sub: "Nodeself simulates where your graph is heading" },
];

export function ProjectsShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="section-spacing"
      style={{ paddingTop: 120, paddingBottom: 120, position: "relative", overflow: "hidden" }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--color-electric-muted) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <SectionHeader
            badge="The Product"
            title="Nodeself — built and already working"
            description="Nodeself is already a functional behavioral modeling system. It turns natural-language check-ins into connected graphs, reveals hidden relationships between habits and emotional states, and shows how behavior changes over time."
            align="center"
          />
          <p
            style={{
              marginTop: 16,
              fontSize: 13,
              color: "var(--color-gray-700)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.05em",
            }}
          >
            What you see here is not a concept or prototype. It is a real product built to make personal change visible as structure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: capabilities + model pillars */}
          <div ref={leftRef} style={{ display: "flex", flexDirection: "column", gap: 32, opacity: 0 }}>

            {/* Capability list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "14px 16px",
                    borderRadius: 10,
                    border: "1px solid #1e1e2e",
                    background: "linear-gradient(135deg, #0c0c1a 0%, #0f0f1e 100%)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-electric-light)",
                      fontSize: 12,
                      flexShrink: 0,
                      paddingTop: 2,
                      filter: "drop-shadow(0 0 6px var(--color-electric-glow))",
                    }}
                  >
                    ◈
                  </span>
                  <span style={{ fontSize: 13, color: "var(--color-gray-400)", lineHeight: 1.6 }}>
                    {cap}
                  </span>
                </div>
              ))}
            </div>

            {/* Model pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {modelPillars.map((p) => (
                <div
                  key={p.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "14px 16px",
                    borderRadius: 12,
                    border: "1px solid #1e1e2e",
                    background: "linear-gradient(135deg, #0c0c1a 0%, #0f0f1e 100%)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      lineHeight: 1,
                      color: "var(--color-electric-light)",
                      filter: "drop-shadow(0 0 8px var(--color-electric-glow))",
                      fontFamily: "monospace",
                      flexShrink: 0,
                      width: 28,
                      textAlign: "center",
                    }}
                  >
                    {p.glyph}
                  </span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "var(--color-gray-300)", marginBottom: 2 }}>
                      {p.label}
                    </p>
                    <p style={{ fontSize: 12, color: "#525252", lineHeight: 1.5 }}>
                      {p.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: App screenshots mockup */}
          <div
            ref={rightRef}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0,
              gap: 20,
            }}
          >
            {/* Glow behind phones */}
            <div
              style={{
                position: "absolute",
                width: "80%",
                height: "60%",
                background: "radial-gradient(ellipse, var(--color-electric-glow) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Phone mockups — three screenshots */}
            {["/screenshots/IMG_2786.jpg", "/screenshots/IMG_2793.jpg", "/screenshots/IMG_2799.jpg"].map((src, i) => (
              <div
                key={src}
                style={{
                  position: "relative",
                  zIndex: i === 1 ? 3 : 2,
                  transform: i === 0 ? "translateY(30px) rotate(-4deg)" : i === 2 ? "translateY(30px) rotate(4deg)" : "none",
                  width: i === 1 ? 180 : 145,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    borderRadius: 28,
                    overflow: "hidden",
                    border: "1px solid #2a2a3e",
                    background: "#0d0d1a",
                    boxShadow: i === 1
                      ? "0 40px 80px rgba(0,0,0,0.8), 0 0 40px var(--color-electric-glow)"
                      : "0 24px 48px rgba(0,0,0,0.6)",
                    aspectRatio: "9/19.5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="Nodeself app screenshot"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 28,
                    }}
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) {
                        parent.style.background = "#13131f";
                        parent.innerHTML = `<span style="color:#404040;font-size:12px;font-family:monospace;text-align:center;padding:16px;">Nodeself</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
