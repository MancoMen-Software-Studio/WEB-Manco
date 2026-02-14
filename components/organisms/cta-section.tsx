"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Button } from "@/components/atoms/button";
import { ROUTES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
    <section
      ref={sectionRef}
      className="py-[60px] md:py-[80px] lg:py-[100px]"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent, rgba(0,102,255,0.05), transparent)",
        }}
      />

      <div className="px-6 md:px-8" style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
        <div
          ref={contentRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            textAlign: "center",
          }}
        >
          <Heading as="h2" display className="opacity-0">
            Ready to build something{" "}
            <span className="text-electric">exceptional</span>?
          </Heading>
          <Text className="opacity-0" style={{ maxWidth: 600 }}>
            Let&apos;s discuss how we can help you design, build, and scale your next
            software system. No commitment, just a conversation.
          </Text>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", opacity: 0 }}>
            <Button href={ROUTES.contact} size="large">
              Start a Conversation
            </Button>
            <Button href={ROUTES.services} variant="secondary" size="large">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
