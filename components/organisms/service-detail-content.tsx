"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Divider } from "@/components/atoms/divider";
import { TechBadgeGroup } from "@/components/molecules/tech-badge-group";
import type { ProcessStep } from "@/lib/types";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ServiceDetailContentProps {
  features: string[];
  technologies: string[];
  process: ProcessStep[];
}

export function ServiceDetailContent({
  features,
  technologies,
  process,
}: ServiceDetailContentProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    const sections = sectionRef.current.querySelectorAll("[data-animate]");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="px-5 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div
        data-animate
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-12 md:py-16 lg:py-24"
        style={{ opacity: 0 }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Heading as="h3">What we deliver</Heading>
          <ul style={{ display: "flex", flexDirection: "column", gap: 16, listStyle: "none", padding: 0, margin: 0 }}>
            {features.map((feature) => (
              <li
                key={feature}
                style={{ display: "flex", alignItems: "flex-start", gap: 12, color: "#a3a3a3" }}
              >
                <span
                  style={{
                    marginTop: 8,
                    width: 6,
                    height: 6,
                    flexShrink: 0,
                    borderRadius: 9999,
                    background: "#0066FF",
                  }}
                />
                <Text as="span">{feature}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <Heading as="h3">Technologies</Heading>
          <TechBadgeGroup technologies={technologies} />
        </div>
      </div>

      <Divider />

      <div data-animate className="py-12 md:py-16 lg:py-24" style={{ opacity: 0 }}>
        <div style={{ marginBottom: 48 }}>
          <Heading as="h2">Our Process</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {process.map((step, i) => (
            <div
              key={step.title}
              className="p-6 md:p-8"
              style={{
                display: "flex",
                gap: 24,
                borderRadius: 16,
                border: "1px solid #262626",
                background: "#1a1a1a",
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "rgba(0,102,255,0.2)", lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Heading as="h4">{step.title}</Heading>
                <Text>{step.description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
