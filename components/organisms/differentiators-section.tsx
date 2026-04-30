"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const differentiators = [
  {
    glyph: "≠",
    title: "Not streaks. Structure.",
    body: "Nodeself does not count repetitions. It maps how behaviors shape one another — and what happens when one part of the system moves.",
    accent: "var(--color-electric-light)",
  },
  {
    glyph: "∅",
    title: "Silence is data.",
    body: "When something stops being reinforced, the graph changes. What fades matters as much as what grows.",
    accent: "var(--color-cyan)",
  },
  {
    glyph: "⊞",
    title: "A system, not a feed.",
    body: "This is not content, motivation, or noise. It is a model of how your change actually behaves over time.",
    accent: "var(--color-electric-light)",
  },
  {
    glyph: "◎",
    title: "Built for clarity.",
    body: "Nodeself reveals what is driving progress, resistance, relapse, or collapse — before you have to live the consequence.",
    accent: "var(--color-cyan)",
  },
];

export function DifferentiatorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current?.children ?? [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
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
          background: "linear-gradient(90deg, transparent, var(--color-electric-muted), transparent)",
        }}
      />

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div ref={titleRef} style={{ textAlign: "center", marginBottom: 72, opacity: 0 }}>
          <SectionHeader
            badge="Why it feels different"
            title="Why it feels different"
            description="Most behavioral tools count what you do. Nodeself models how everything connects."
            align="center"
          />
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{
            background: "rgba(30,30,56,0.4)",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(30,30,56,0.8)",
          }}
        >
          {differentiators.map((d) => (
            <div
              key={d.title}
              style={{
                padding: "44px 40px",
                background: "var(--color-black-rich)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                opacity: 0,
                position: "relative",
                transition: "background 0.4s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--color-black-soft)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--color-black-rich)";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    fontSize: 26,
                    lineHeight: 1,
                    color: d.accent,
                    filter: `drop-shadow(0 0 12px ${d.accent})`,
                    fontFamily: "monospace",
                    flexShrink: 0,
                    marginTop: 2,
                    width: 32,
                    textAlign: "center",
                  }}
                >
                  {d.glyph}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 19,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {d.title}
                </h3>
              </div>
              <p style={{ fontSize: 14, color: "var(--color-gray-500)", lineHeight: 1.75, maxWidth: 400 }}>
                {d.body}
              </p>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: `linear-gradient(90deg, ${d.accent}40, transparent)`,
                  opacity: 0.5,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
