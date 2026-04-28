"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const principles = [
  {
    glyph: "⬡",
    label: "Architecture first",
    body: "We don't prototype to validate ideas. We build the real thing from day one — correct data models, deterministic algorithms, production-grade structure.",
    accent: "var(--color-electric-light)",
  },
  {
    glyph: "◈",
    label: "Model the invisible",
    body: "The most valuable software doesn't manage tasks or track streaks — it reveals structure that exists but cannot be seen with the naked eye.",
    accent: "var(--color-cyan)",
  },
  {
    glyph: "∿",
    label: "Behavior has physics",
    body: "Habits decay. Patterns compound. Contradictions create instability. We build software that respects the laws of behavioral dynamics.",
    accent: "var(--color-electric-light)",
  },
  {
    glyph: "⊕",
    label: "Privacy is a design decision",
    body: "Behavioral data is the most sensitive data that exists. Local-first, no persistent cloud storage of personal text. Not a feature — a commitment.",
    accent: "var(--color-cyan)",
  },
];

export function StudioIdentity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
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
      gridRef.current?.children ?? [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: {
          trigger: gridRef.current,
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
      {/* Horizontal rule with glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--color-electric-glow), var(--color-cyan-muted), transparent)",
        }}
      />

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Title block */}
        <div
          ref={titleRef}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginBottom: 80,
            opacity: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              className="font-logo"
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                color: "var(--color-electric-light)",
                textTransform: "uppercase",
              }}
            >
              MANCOMEN
            </span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--color-electric-muted), transparent)" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--color-gray-500)",
                letterSpacing: "0.1em",
              }}
            >
              STUDIO PRINCIPLES
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 700,
              color: "white",
            }}
          >
            We don&apos;t build{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              features.
            </span>
            <br />
            We build{" "}
            <em style={{ fontStyle: "normal", color: "var(--color-gray-300)" }}>
              models.
            </em>
          </h2>
        </div>

        {/* Principles grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{
            background: "rgba(30,30,56,0.4)",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(30,30,56,0.8)",
          }}
        >
          {principles.map((p) => (
            <div
              key={p.label}
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
              {/* Corner glyph */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    fontSize: 28,
                    lineHeight: 1,
                    color: p.accent,
                    filter: `drop-shadow(0 0 12px ${p.accent})`,
                    fontFamily: "monospace",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {p.glyph}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {p.label}
                </h3>
              </div>
              <p style={{ fontSize: 15, color: "var(--color-gray-500)", lineHeight: 1.7, maxWidth: 420 }}>
                {p.body}
              </p>

              {/* Bottom accent line on hover */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: `linear-gradient(90deg, ${p.accent}40, transparent)`,
                  opacity: 0.5,
                }}
              />
            </div>
          ))}
        </div>

        {/* Studio tagline below */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <div style={{ height: 1, width: 40, background: "var(--color-gray-800)" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--color-gray-500)",
              letterSpacing: "0.15em",
              textAlign: "center",
            }}
          >
            BOGOTÁ, COLOMBIA · FOUNDED 2024 · PRE-SEED 2026
          </span>
          <div style={{ height: 1, width: 40, background: "var(--color-gray-800)" }} />
        </div>
      </div>
    </section>
  );
}
