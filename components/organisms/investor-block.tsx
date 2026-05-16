"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Button } from "@/components/atoms/button";
import { ROUTES, CONTACT } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useLanguage } from "@/context/language-context";

export function InvestorBlock() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  useGSAP(() => {
    if (reducedMotion || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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

  const ib = t.investorBlock;

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: 120, paddingBottom: 120, position: "relative", overflow: "hidden" }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top separator */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "8%",
          right: "8%",
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--color-electric-muted), var(--color-cyan-muted), transparent)",
        }}
      />

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          ref={contentRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
          }}
        >
          {/* Header */}
          <div style={{ opacity: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-electric)",
                  boxShadow: "0 0 10px var(--color-electric-glow)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-electric-light)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {ib.label}
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "white",
                lineHeight: 1.1,
                maxWidth: 680,
                marginBottom: 20,
              }}
            >
              {ib.title}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {ib.titleAccent}
              </span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--color-gray-300)", lineHeight: 1.75, maxWidth: 600 }}>
              {ib.body1}
            </p>
            <p style={{ fontSize: 16, color: "var(--color-gray-400)", lineHeight: 1.7, maxWidth: 600, marginTop: 16 }}>
              {ib.body2}
            </p>
          </div>

          {/* Points + CTA */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              opacity: 0,
            }}
          >
            {/* Key points */}
            <div
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1px solid rgba(139,92,246,0.15)",
                background: "rgba(139,92,246,0.03)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {ib.points.map((item) => (
                <div key={item.glyph} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span style={{ color: "var(--color-electric-light)", fontSize: 13, flexShrink: 0, paddingTop: 1 }}>
                    {item.glyph}
                  </span>
                  <span style={{ fontSize: 16, color: "var(--color-gray-300)", lineHeight: 1.5 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA block */}
            <div
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1px solid #1e1e2e",
                background: "linear-gradient(135deg, #0d0d1a 0%, #13131f 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <div>
                <p
                  className="font-display"
                  style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 8, letterSpacing: "-0.01em" }}
                >
                  {ib.ctaTitle}
                </p>
                <p style={{ fontSize: 15, color: "var(--color-gray-300)", lineHeight: 1.6 }}>
                  {ib.ctaBody}
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Button href={`${ROUTES.contact}?intent=investor-deck`} size="large">
                  {ib.ctaDeck}
                </Button>
                <Button href={`${ROUTES.contact}?intent=investor-conversation`} variant="secondary">
                  {ib.ctaConversation}
                </Button>
              </div>
              <p style={{ fontSize: 11, color: "#404040", fontFamily: "var(--font-mono)" }}>
                {CONTACT.email} · Bogotá, Colombia
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
