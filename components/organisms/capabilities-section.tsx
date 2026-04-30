"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const capabilities = [
  "Turn natural-language check-ins into connected behavioral graphs",
  "Reveal relationships between habits, emotions, and decisions",
  "Show visual decay when important nodes stop being reinforced",
  "Simulate possible outcomes under different behavioral scenarios",
  "Generate insights from the structure of your graph over time",
];

const whatWorks = [
  "Natural-language check-in flow",
  "Graph generation and visualization",
  "Behavioral node relationships",
  "Decay and reinforcement logic",
  "Scenario simulation",
  "Structure-based insights",
  "Local-first data foundation",
];

const inProgress = [
  "Cloud sync",
  "User authentication",
  "Subscription system",
  "Launch infrastructure",
  "Distribution readiness",
];

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
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
      style={{ paddingTop: 120, paddingBottom: 120, position: "relative" }}
    >
      {/* Top separator */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "8%",
          right: "8%",
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--color-cyan-muted), transparent)",
        }}
      />

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={contentRef}>

          {/* Header */}
          <div style={{ marginBottom: 64, opacity: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-cyan)",
                  boxShadow: "0 0 10px var(--color-cyan-glow)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-cyan)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                What it can do today
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "white",
                lineHeight: 1.1,
                maxWidth: 600,
              }}
            >
              What Nodeself can already do
            </h2>
            <p style={{ fontSize: 15, color: "var(--color-gray-500)", lineHeight: 1.7, maxWidth: 520, marginTop: 16 }}>
              Nodeself is already functional as a real behavioral modeling system — not a concept or prototype.
            </p>
          </div>

          {/* Capabilities list */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
              marginBottom: 64,
              opacity: 0,
            }}
          >
            {capabilities.map((cap, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  padding: "18px 20px",
                  borderRadius: 12,
                  border: "1px solid #1e1e2e",
                  background: "linear-gradient(135deg, #0c0c1a 0%, #0f0f1e 100%)",
                }}
              >
                <span
                  style={{
                    color: "var(--color-cyan)",
                    fontSize: 14,
                    flexShrink: 0,
                    paddingTop: 1,
                    filter: "drop-shadow(0 0 6px var(--color-cyan-glow))",
                  }}
                >
                  ◈
                </span>
                <span style={{ fontSize: 14, color: "var(--color-gray-400)", lineHeight: 1.6 }}>
                  {cap}
                </span>
              </div>
            ))}
          </div>

          {/* Product state two-column */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
              opacity: 0,
            }}
          >
            {/* What works */}
            <div
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1px solid rgba(139,92,246,0.15)",
                background: "rgba(139,92,246,0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 6px #10b981",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#10b981",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  What works now
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {whatWorks.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 4,
                        background: "var(--color-electric)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 9,
                        color: "white",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ fontSize: 13, color: "var(--color-gray-400)", fontFamily: "var(--font-mono)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* In progress */}
            <div
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1px solid #1e1e2e",
                background: "linear-gradient(135deg, #0d0d1a 0%, #13131f 100%)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--color-cyan)",
                    boxShadow: "0 0 6px var(--color-cyan-glow)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--color-cyan)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Being finished
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {inProgress.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 4,
                        border: "1px solid #404040",
                        background: "transparent",
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 13, color: "#404040", fontFamily: "var(--font-mono)" }}>
                      {item}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        color: "var(--color-cyan)",
                        background: "var(--color-cyan-muted)",
                        borderRadius: 4,
                        padding: "2px 7px",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        flexShrink: 0,
                      }}
                    >
                      Soon
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
