"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";
import { Icon } from "@/components/atoms/icon";
import { companyValues } from "@/data/company";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !cardsRef.current) return;

    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 60 },
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
    <section ref={sectionRef} style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Badge>Values</Badge>
          <div style={{ marginTop: 20 }}>
            <Heading as="h2">What drives us</Heading>
          </div>
          <div style={{ marginTop: 16, maxWidth: 672, marginLeft: "auto", marginRight: "auto" }}>
            <Text>
              The principles that guide every decision, every line of code,
              and every client relationship.
            </Text>
          </div>
        </div>
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
          }}
        >
          {companyValues.map((value) => (
            <div
              key={value.title}
              className="hover:border-electric/30"
              style={{
                display: "flex",
                gap: 24,
                borderRadius: 16,
                border: "1px solid #262626",
                background: "#1a1a1a",
                padding: 32,
                opacity: 0,
                transition: "border-color 0.3s",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  background: "rgba(0,102,255,0.1)",
                  color: "#0066FF",
                }}
              >
                <Icon name={value.icon} size={24} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Heading as="h4">{value.title}</Heading>
                <Text>{value.description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
