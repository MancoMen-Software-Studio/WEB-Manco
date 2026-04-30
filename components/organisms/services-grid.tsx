"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const steps = [
  {
    number: "01",
    icon: "✦",
    title: "Write",
    description: "Describe your day, habits, emotions, or decisions in natural language. No forms. No templates.",
    color: "var(--color-electric)",
  },
  {
    number: "02",
    icon: "◈",
    title: "Map",
    description: "Nodeself turns that input into a graph of connected behaviors, states, and patterns.",
    color: "var(--color-cyan)",
  },
  {
    number: "03",
    icon: "⊗",
    title: "Track change",
    description: "The graph evolves over time, showing what strengthens, what fades, and what influences what.",
    color: "var(--color-electric-light)",
  },
  {
    number: "04",
    icon: "▷",
    title: "Simulate",
    description: "Explore what may happen if a behavior improves, weakens, or disappears from the system.",
    color: "var(--color-cyan)",
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
      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <SectionHeader
            badge="How It Works"
            title="How Nodeself works"
            description="Write naturally. The system does the rest."
            align="center"
          />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{
            background: "#1e1e2e",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid #1e1e2e",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.title}
              style={{
                padding: "44px 40px",
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
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: step.color,
                    letterSpacing: "0.2em",
                    opacity: 0.6,
                  }}
                >
                  {step.number}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    color: step.color,
                    filter: `drop-shadow(0 0 8px ${step.color})`,
                    fontFamily: "monospace",
                    lineHeight: 1,
                  }}
                >
                  {step.icon}
                </span>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "white",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
              </div>
              <p style={{ fontSize: 16, color: "#a3a3a3", lineHeight: 1.7, maxWidth: 400 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
