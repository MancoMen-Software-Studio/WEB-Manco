"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { ProjectStat } from "@/lib/types";

interface ProjectDetailHeroProps {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  stats: ProjectStat[];
  color: string;
}

export function ProjectDetailHero({
  title,
  subtitle,
  description,
  category,
  stats,
  color,
}: ProjectDetailHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "expo.out",
        delay: 0.2,
      }
    );
  }, { scope: sectionRef });

  return (
    <section style={{ paddingTop: 160, paddingBottom: 48 }}>
      <div
        ref={sectionRef}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div style={{ opacity: 0 }}>
          <Badge>{category}</Badge>
        </div>
        <div style={{ maxWidth: 900, opacity: 0 }}>
          <Heading as="h1" display>{title}</Heading>
        </div>
        <div style={{ maxWidth: 672, opacity: 0 }}>
          <Text size="lg">{subtitle}</Text>
        </div>
        <div style={{ maxWidth: 672, opacity: 0 }}>
          <Text>{description}</Text>
        </div>
        <div
          style={{
            marginTop: 32,
            width: "100%",
            height: 384,
            borderRadius: 16,
            opacity: 0,
            background: `linear-gradient(135deg, ${color}20 0%, ${color}08 100%)`,
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            opacity: 0,
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                borderRadius: 12,
                border: "1px solid #262626",
                background: "#1a1a1a",
                padding: 20,
              }}
            >
              <span style={{ fontSize: 24, fontWeight: 700, color: "white" }}>{stat.value}</span>
              <span style={{ fontSize: 14, color: "#a3a3a3" }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
