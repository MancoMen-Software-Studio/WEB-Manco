"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const problems = [
  {
    stat: "$13B",
    label: "wellness market",
    description: "Flooded with apps that track but don't understand. Streaks, points, reminders — surface-level signals with no structural model underneath.",
  },
  {
    stat: "0",
    label: "behavioral graph platforms",
    description: "No existing product models behavior as a causal network. They count what you do — not why, not how one thing affects another.",
  },
  {
    stat: "∞",
    label: "failed habits",
    description: "Not from lack of motivation — from lack of visibility. People can't fix what they can't see. The architecture of their change is invisible to them.",
  },
];

export function CompanyIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      rightRef.current?.children ?? [],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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

  return (
    <section ref={sectionRef} className="section-spacing" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: The problem statement */}
          <div ref={leftRef} style={{ display: "flex", flexDirection: "column", gap: 28, opacity: 0 }}>
            <Badge>The Problem</Badge>
            <Heading as="h2">
              The wellness market has{" "}
              <span className="text-electric">never seen its own data</span>
            </Heading>
            <Text style={{ maxWidth: 480 }}>
              Hundreds of millions of people try to change every year. They download apps, set
              goals, build streaks. Most fail — not because they&apos;re weak, but because they&apos;re
              flying blind. No app shows them the structure of their own process.
            </Text>
            <Text style={{ maxWidth: 480 }}>
              Nodeself is the first product to model behavioral change as what it actually is:
              a network of habits, decisions, emotions, and states with real causal relationships
              between them. A graph that lives, grows, and decays in real time.
            </Text>
            <blockquote
              style={{
                borderLeft: "2px solid var(--color-electric)",
                paddingLeft: 20,
                margin: "8px 0 0",
                fontStyle: "italic",
                color: "#d4d4d4",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              &ldquo;Not an app of wellness. A mirror of your behavior that doesn&apos;t lie.&rdquo;
            </blockquote>
          </div>

          {/* Right: Problem stats */}
          <div ref={rightRef} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {problems.map((p) => (
              <div
                key={p.label}
                style={{
                  padding: "28px 32px",
                  borderRadius: 16,
                  border: "1px solid #1e1e2e",
                  background: "linear-gradient(135deg, #0d0d1a 0%, #13131f 100%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  opacity: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span
                    className="font-display"
                    style={{
                      fontSize: 44,
                      fontWeight: 400,
                      background: "linear-gradient(135deg, var(--color-electric-light), var(--color-cyan))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    {p.stat}
                  </span>
                  <span style={{ fontSize: 13, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>
                    {p.label}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "#737373", lineHeight: 1.6 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
