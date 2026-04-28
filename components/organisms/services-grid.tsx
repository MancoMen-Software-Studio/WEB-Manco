"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const features = [
  {
    icon: "✦",
    title: "AI Check-In",
    description:
      "Write in natural language. The Claude API pipeline extracts behavioral nodes, causal connections, and structural patterns from your words — no forms, no templates.",
    color: "var(--color-electric)",
  },
  {
    icon: "◈",
    title: "Living Graph",
    description:
      "Every entry updates a personal graph of habits, decisions, states, and their relationships. Visualized in real time with React Native Skia and custom GLSL shaders.",
    color: "var(--color-cyan)",
  },
  {
    icon: "⊗",
    title: "Decay Engine",
    description:
      "Silence is data. Nodes decay exponentially when you stop reinforcing them. The graph shows you what's slipping before it's fully gone — time becomes a first-class dimension.",
    color: "var(--color-electric-light)",
  },
  {
    icon: "⟳",
    title: "Causal Analysis",
    description:
      "The AI audits your full graph and surfaces hidden patterns: cycles, bottlenecks, contradictions, and the connections you've been too close to see yourself.",
    color: "var(--color-cyan)",
  },
  {
    icon: "▷",
    title: "Forward Simulator",
    description:
      "Project your graph 30, 60, or 90 days forward under any scenario. Deterministic engine, AI-interpreted narrative. See the cost of a habit before you live it.",
    color: "var(--color-electric)",
  },
  {
    icon: "⬡",
    title: "Local-First Privacy",
    description:
      "Your behavioral data is the most sensitive data that exists. Everything lives in SQLite on your device. No persistent cloud storage of personal text. Ever.",
    color: "var(--color-electric-light)",
  },
];

export function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
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
    <section ref={sectionRef} className="section-spacing" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <SectionHeader
            badge="How Nexus Works"
            title="The architecture, piece by piece"
            description="Each layer of Nexus solves a problem that existing wellness apps structurally can't — because they weren't built on a behavioral model."
            align="center"
          />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{
            background: "#1e1e2e",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid #1e1e2e",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group"
              style={{
                padding: "40px 36px",
                background: "#08080f",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                opacity: 0,
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0d0d1a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#08080f";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    fontSize: 22,
                    color: feature.color,
                    filter: `drop-shadow(0 0 8px ${feature.color})`,
                    fontFamily: "monospace",
                    lineHeight: 1,
                  }}
                >
                  {feature.icon}
                </span>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "white",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {feature.title}
                </h3>
              </div>
              <p style={{ fontSize: 14, color: "#737373", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
