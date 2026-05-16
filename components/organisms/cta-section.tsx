"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { ROUTES, CONTACT } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useLanguage } from "@/context/language-context";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  useGSAP(() => {
    if (reducedMotion || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  const cta = t.cta;

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
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, var(--color-electric-muted) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--color-gray-800) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-gray-800) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.2,
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      <div className="px-6 md:px-8" style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
        <div
          ref={contentRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 28,
              padding: "6px 16px",
              borderRadius: 9999,
              border: "1px solid var(--color-electric-muted)",
              background: "var(--color-electric-muted)",
              opacity: 0,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--color-electric)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "var(--color-electric-light)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {cta.label}
            </span>
          </div>

          <div className="opacity-0" style={{ marginBottom: 24 }}>
            <Heading as="h2" display>
              {cta.title}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {cta.titleAccent}
              </span>
            </Heading>
          </div>

          <Text className="opacity-0" style={{ maxWidth: 580, marginBottom: 48 }}>
            {cta.body}
          </Text>

          <div
            className="opacity-0"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              width: "100%",
              maxWidth: 520,
              marginBottom: 44,
              padding: "28px 32px",
              border: "1px solid rgba(139,92,246,0.15)",
              borderRadius: 16,
              background: "rgba(139,92,246,0.04)",
            }}
          >
            {cta.points.map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <span style={{ color: "var(--color-electric-light)", fontSize: 14, flexShrink: 0, paddingTop: 1 }}>
                  {item.glyph}
                </span>
                <span style={{ fontSize: 16, color: "var(--color-gray-300)", lineHeight: 1.5 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="opacity-0" style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Button href={ROUTES.contact} size="large">
              {cta.cta1}
            </Button>
            <Button href={ROUTES.projects} variant="secondary" size="large">
              {cta.cta2}
            </Button>
          </div>

          <p
            className="opacity-0"
            style={{
              marginTop: 28,
              fontSize: 15,
              color: "var(--color-gray-500)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {CONTACT.email} · Bogotá, Colombia
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
