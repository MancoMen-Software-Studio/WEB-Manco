"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { Button } from "@/components/atoms/button";
import { ROUTES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const buildStatus = [
  { label: "Graph Engine", done: true },
  { label: "Decay Engine", done: true },
  { label: "Check-In Pipeline", done: true },
  { label: "Skia Graph Visualization", done: true },
  { label: "Forward Simulator", done: true },
  { label: "Latent State Engine", done: true },
  { label: "Causal Analysis (AI)", done: true },
  { label: "Insight Engine", done: true },
  { label: "Cloud Sync", done: false },
  { label: "User Auth", done: false },
  { label: "Subscription System", done: false },
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
            title="Nodeself — built and functional"
            description="The core engine is complete. What you see below is not a concept — it's working software, built from scratch, with production-grade architecture."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Build status + info */}
          <div ref={leftRef} style={{ display: "flex", flexDirection: "column", gap: 32, opacity: 0 }}>

            {/* Progress header */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Build Progress
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-electric-light)",
                    fontWeight: 600,
                  }}
                >
                  {Math.round((buildStatus.filter(s => s.done).length / buildStatus.length) * 100)}%
                </span>
              </div>
              <div
                style={{
                  height: 3,
                  borderRadius: 9999,
                  background: "#1e1e2e",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${Math.round((buildStatus.filter(s => s.done).length / buildStatus.length) * 100)}%`,
                    background: "linear-gradient(90deg, var(--color-electric), var(--color-cyan))",
                    borderRadius: 9999,
                  }}
                />
              </div>
            </div>

            {/* Build checklist */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {buildStatus.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                      border: item.done ? "none" : "1px solid #404040",
                      background: item.done ? "var(--color-electric)" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: 10,
                      color: "white",
                    }}
                  >
                    {item.done && "✓"}
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      color: item.done ? "#d4d4d4" : "#404040",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {item.label}
                  </span>
                  {!item.done && (
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--color-cyan)",
                        background: "var(--color-cyan-muted)",
                        borderRadius: 4,
                        padding: "2px 8px",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      In Progress
                    </span>
                  )}
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

            <Button href={ROUTES.projects} size="large">
              Full Product Details
            </Button>
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
            {["/screenshots/IMG_2562.jpg", "/screenshots/IMG_2593.jpg", "/screenshots/IMG_2633.jpg"].map((src, i) => (
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
