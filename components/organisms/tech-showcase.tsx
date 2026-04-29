"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const transmissions = [
  { id: "T-001", text: "Behavioral change is not linear. It is a network." },
  { id: "T-002", text: "Silence is data. The absence of a signal is a signal." },
  { id: "T-003", text: "Every habit has a half-life. We measure it." },
  { id: "T-004", text: "The user does not fail. The model fails the user." },
  { id: "T-005", text: "Causality, not correlation. Structure, not streaks." },
  { id: "T-006", text: "The graph knows what you forgot to track." },
  { id: "T-007", text: "Privacy is not a feature. It is the architecture." },
  { id: "T-008", text: "Nodeself simulates futures before you live them." },
];

function TypewriterText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    const cursorInterval = setInterval(() => setCursor(c => !c), 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span style={{ opacity: cursor ? 1 : 0, color: "var(--color-electric)" }}>▋</span>
    </span>
  );
}

export function TechShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          onEnter: () => setVisible(true),
        },
      }
    );
  }, { scope: sectionRef });

  // Auto-cycle transmissions
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % transmissions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [visible]);

  const active = transmissions[activeIndex];

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        opacity: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 0,
          }}
        >
          {/* Terminal header */}
          <div
            style={{
              padding: "12px 20px",
              background: "var(--color-black-soft)",
              borderRadius: "16px 16px 0 0",
              border: "1px solid var(--color-gray-800)",
              borderBottom: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", gap: 7 }}>
              {["#ff5f57", "#ffbd2e", "#28c840"].map(c => (
                <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.7 }} />
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-gray-500)",
                letterSpacing: "0.1em",
                marginLeft: 8,
              }}
            >
              nodeself_system · transmission_log · live
            </span>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#28c840", boxShadow: "0 0 6px #28c840" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#28c840" }}>LIVE</span>
            </div>
          </div>

          {/* Terminal body */}
          <div
            style={{
              padding: "40px 36px",
              background: "rgba(7,7,14,0.9)",
              border: "1px solid var(--color-gray-800)",
              borderRadius: "0 0 16px 16px",
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Log lines (previous) */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {transmissions.slice(Math.max(0, activeIndex - 2), activeIndex).map((t) => (
                <div
                  key={t.id}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "baseline",
                    opacity: 0.25,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-electric)", flexShrink: 0 }}>
                    {t.id}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-gray-500)" }}>
                    {t.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Active transmission */}
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                padding: "20px 24px",
                background: "rgba(139,92,246,0.05)",
                borderRadius: 12,
                border: "1px solid rgba(139,92,246,0.15)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--color-electric-light)",
                  flexShrink: 0,
                  paddingTop: 4,
                  letterSpacing: "0.05em",
                }}
              >
                {active.id}
              </span>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(18px, 2.5vw, 28px)",
                  fontWeight: 600,
                  color: "white",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                }}
              >
                {visible ? <TypewriterText key={activeIndex} text={active.text} speed={28} /> : active.text}
              </p>
            </div>

            {/* Selector dots */}
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              {transmissions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: i === activeIndex ? 24 : 6,
                    height: 6,
                    borderRadius: 9999,
                    background: i === activeIndex ? "var(--color-electric)" : "var(--color-gray-800)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
