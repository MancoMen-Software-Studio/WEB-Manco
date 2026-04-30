"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Badge } from "@/components/atoms/badge";
import { methodology } from "@/data/company";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const glyphs = ["⟳", "◫", "⊗", "▷"];
const accents = [
  "var(--color-cyan)",
  "var(--color-electric-light)",
  "var(--color-cyan)",
  "var(--color-electric-light)",
];

export function MethodologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !stepsRef.current) return;

    gsap.fromTo(
      stepsRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
    <section ref={sectionRef} style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center", marginBottom: 64 }}>
          <Badge>How Nodeself Works</Badge>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              color: "white",
            }}
          >
            How we work
          </h2>
        </div>

        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{
            background: "rgba(30,30,56,0.3)",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(30,30,56,0.6)",
          }}
        >
          {methodology.map((step, i) => (
            <div
              key={step.number}
              style={{
                padding: "40px 36px",
                background: "var(--color-black-rich)",
                display: "flex",
                flexDirection: "column",
                gap: 18,
                opacity: 0,
                transition: "background 0.35s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--color-black-soft)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "var(--color-black-rich)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    fontSize: 24,
                    lineHeight: 1,
                    color: accents[i],
                    filter: `drop-shadow(0 0 10px ${accents[i]})`,
                    flexShrink: 0,
                  }}
                >
                  {glyphs[i]}
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: accents[i],
                      letterSpacing: "0.15em",
                      opacity: 0.8,
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-display"
                    style={{ fontSize: 17, fontWeight: 600, color: "white", letterSpacing: "-0.01em", lineHeight: 1.2 }}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: 16, color: "var(--color-gray-300)", lineHeight: 1.72 }}>
                {step.description}
              </p>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: `linear-gradient(90deg, ${accents[i]}30, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
