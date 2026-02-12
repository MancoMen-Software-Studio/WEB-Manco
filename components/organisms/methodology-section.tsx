"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";
import { methodology } from "@/data/company";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MethodologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !stepsRef.current) return;

    gsap.fromTo(
      stepsRef.current.children,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Badge>Methodology</Badge>
          <div style={{ marginTop: 20 }}>
            <Heading as="h2">How we work</Heading>
          </div>
          <div style={{ marginTop: 16, maxWidth: 672, marginLeft: "auto", marginRight: "auto" }}>
            <Text>
              A structured, transparent process that turns complex requirements
              into production-ready software.
            </Text>
          </div>
        </div>
        <div
          ref={stepsRef}
          style={{ display: "flex", flexDirection: "column", gap: 32 }}
        >
          {methodology.map((step) => (
            <div
              key={step.number}
              className="hover:border-electric/30"
              style={{
                display: "flex",
                gap: 32,
                borderRadius: 16,
                border: "1px solid #262626",
                background: "#1a1a1a",
                padding: 40,
                opacity: 0,
                transition: "border-color 0.3s",
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: 60,
                  fontWeight: 400,
                  color: "rgba(0,102,255,0.1)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Heading as="h3">{step.title}</Heading>
                <div style={{ maxWidth: 672 }}>
                  <Text>{step.description}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
