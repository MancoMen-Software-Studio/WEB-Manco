"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useLanguage } from "@/context/language-context";

export function StudioIdentity() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

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

  const si = t.studioIdentity;

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
              {si.label}
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
            {si.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {si.titleAccent}
            </span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--color-gray-300)", lineHeight: 1.75, maxWidth: 600, marginTop: 16 }}>
            {si.body}
          </p>
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
          {si.principles.map((p) => (
            <div
              key={p.glyph}
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

              {/* Bottom accent line */}
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
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
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
              {si.tagline}
            </span>
            <div style={{ height: 1, width: 40, background: "var(--color-gray-800)" }} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--color-electric-light)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            {si.quote}
          </span>
        </div>
      </div>
    </section>
  );
}
