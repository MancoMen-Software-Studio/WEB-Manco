"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";
import { Icon } from "@/components/atoms/icon";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export function ServiceDetailHero({
  title,
  subtitle,
  description,
  icon,
}: ServiceDetailHeroProps) {
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
        <div
          style={{
            width: 64,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 16,
            background: "rgba(0,102,255,0.1)",
            color: "#0066FF",
            opacity: 0,
          }}
        >
          <Icon name={icon} size={32} />
        </div>
        <div style={{ opacity: 0 }}>
          <Badge>{subtitle}</Badge>
        </div>
        <div style={{ maxWidth: 768, opacity: 0 }}>
          <Heading as="h1" display>
            {title}
          </Heading>
        </div>
        <div style={{ maxWidth: 672, opacity: 0 }}>
          <Text size="lg">{description}</Text>
        </div>
      </div>
    </section>
  );
}
