"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useLanguage } from "@/context/language-context";

export function DifferentiatorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

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

  const d = t.differentiators;

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
            badge={d.badge}
            title={d.title}
            description={d.description}
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
          {d.items.map((item) => (
            <div
              key={item.glyph}
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
                    color: item.accent,
                    filter: `drop-shadow(0 0 12px ${item.accent})`,
                    fontFamily: "monospace",
                    flexShrink: 0,
                    marginTop: 2,
                    width: 32,
                    textAlign: "center",
                  }}
                >
                  {item.glyph}
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
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: 16, color: "var(--color-gray-300)", lineHeight: 1.75, maxWidth: 440 }}>
                {item.body}
              </p>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: `linear-gradient(90deg, ${item.accent}40, transparent)`,
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
