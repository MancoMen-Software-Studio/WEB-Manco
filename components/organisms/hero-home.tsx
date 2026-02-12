"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SceneContainer, createDynamicScene } from "@/components/canvas/scene-container";
import { Button } from "@/components/atoms/button";
import { ScrollIndicator } from "@/components/molecules/scroll-indicator";
import { ROUTES } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HeroScene = createDynamicScene(
  () => import("@/components/canvas/hero-scene")
);

export function HeroHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <SceneContainer className="z-0">
        <HeroScene />
      </SceneContainer>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <h1
          ref={titleRef}
          className="font-display text-white"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            opacity: 0,
          }}
        >
          Built to Scale,
          <br />
          <span className="text-electric">Built to Last</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-gray-400"
          style={{
            maxWidth: 600,
            margin: "32px auto 0",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.6,
            opacity: 0,
          }}
        >
          Enterprise software consultancy delivering scalable, production-grade
          systems for ambitious businesses. From architecture to deployment.
        </p>
        <div
          ref={ctaRef}
          style={{
            marginTop: 48,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            opacity: 0,
          }}
        >
          <Button href={ROUTES.services} size="large">
            Our Services
          </Button>
          <Button href={ROUTES.projects} variant="secondary" size="large">
            View Projects
          </Button>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <ScrollIndicator />
      </div>
    </section>
  );
}
