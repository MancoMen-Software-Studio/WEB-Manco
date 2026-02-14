"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";
import { StatBlock } from "@/components/molecules/stat-block";
import { companyInfo } from "@/data/company";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CompanyIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -80 },
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
      rightRef.current,
      { opacity: 0, x: 80 },
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={leftRef} style={{ display: "flex", flexDirection: "column", gap: 24, opacity: 0 }}>
            <Badge>About Us</Badge>
            <Heading as="h2">
              Software consultancy for{" "}
              <span className="text-electric">ambitious businesses</span>
            </Heading>
            <Text style={{ maxWidth: 480 }}>
              {companyInfo.description}
            </Text>
          </div>

          <div ref={rightRef} style={{ opacity: 0 }}>
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              {companyInfo.stats.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
