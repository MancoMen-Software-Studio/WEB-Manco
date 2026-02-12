"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { ServiceCard } from "@/components/molecules/service-card";
import { services } from "@/data/services";
import { ROUTES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !cardsRef.current) return;

    const cards = cardsRef.current.children;

    gsap.fromTo(
      cards,
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
          <SectionHeader
            badge="Services"
            title="What we do"
            description="End-to-end software engineering services tailored for enterprises that demand quality, scalability, and reliability."
            align="center"
          />
        </div>
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {services.map((service) => (
            <div key={service.slug} style={{ opacity: 0 }}>
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                icon={service.icon}
                href={`${ROUTES.services}/${service.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
