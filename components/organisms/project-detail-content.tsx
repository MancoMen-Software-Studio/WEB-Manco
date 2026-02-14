"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { TechBadgeGroup } from "@/components/molecules/tech-badge-group";
import { Divider } from "@/components/atoms/divider";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ProjectDetailContentProps {
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
}

export function ProjectDetailContent({
  challenge,
  solution,
  results,
  technologies,
}: ProjectDetailContentProps) {
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
    <div ref={sectionRef} className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-[48px] md:py-[64px] lg:py-[96px]">
        <div data-animate style={{ display: "flex", flexDirection: "column", gap: 16, opacity: 0 }}>
          <Heading as="h3">The Challenge</Heading>
          <Text>{challenge}</Text>
        </div>
        <div data-animate style={{ display: "flex", flexDirection: "column", gap: 16, opacity: 0 }}>
          <Heading as="h3">Our Solution</Heading>
          <Text>{solution}</Text>
        </div>
        <div data-animate style={{ display: "flex", flexDirection: "column", gap: 16, opacity: 0 }}>
          <Heading as="h3">The Results</Heading>
          <Text>{results}</Text>
        </div>
      </div>

      <Divider />

      <div data-animate className="py-[48px] md:py-[64px] lg:py-[96px]" style={{ opacity: 0 }}>
        <div style={{ marginBottom: 24 }}>
          <Heading as="h3">Technology Stack</Heading>
        </div>
        <TechBadgeGroup technologies={technologies} />
      </div>
    </div>
  );
}
