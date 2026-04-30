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
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 })
      .fromTo(titleRef.current, { opacity: 0, y: 70 }, { opacity: 1, y: 0, duration: 1.3 }, "-=0.3")
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .fromTo(metaRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.3");
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
        paddingTop: 80, // clear fixed navbar
      }}
    >
      {/* 3D scene */}
      <SceneContainer className="z-0">
        <HeroScene />
      </SceneContainer>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "linear-gradient(to top, var(--color-black-rich), transparent)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

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
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 32,
            padding: "6px 16px 6px 10px",
            borderRadius: 9999,
            border: "1px solid rgba(139,92,246,0.2)",
            background: "rgba(139,92,246,0.05)",
            backdropFilter: "blur(12px)",
            opacity: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "2px 9px",
              borderRadius: 9999,
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.25)",
            }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--color-electric)",
                boxShadow: "0 0 8px var(--color-electric-glow)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span
              className="font-logo"
              style={{ fontSize: 9, letterSpacing: "0.3em", color: "var(--color-electric-light)" }}
            >
              MANCOMEN
            </span>
          </div>
          <span
            style={{
              fontSize: 12,
              color: "rgba(163,163,163,0.6)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.06em",
            }}
          >
            Software Studio · Bogotá, Colombia
          </span>
        </div>

        {/* Main heading — tighter spacing, less extreme size */}
        <h1
          ref={titleRef}
          className="font-display"
          style={{
            fontSize: "clamp(42px, 6.5vw, 88px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            opacity: 0,
            color: "white",
          }}
        >
          Not a tracker.
          <br />
          <span
            style={{
              background: "linear-gradient(120deg, var(--color-electric-light) 0%, var(--color-cyan) 60%, var(--color-electric-light) 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 5s linear infinite",
            }}
          >
            A behavioral mirror.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            maxWidth: 540,
            margin: "24px auto 0",
            fontSize: "clamp(15px, 1.6vw, 17px)",
            lineHeight: 1.75,
            color: "var(--color-gray-500)",
            opacity: 0,
          }}
        >
          Nodeself turns habits, emotions, and decisions into a{" "}
          <span style={{ color: "var(--color-gray-300)" }}>living graph</span>
          {" "}— so you can see what is shaping your behavior and what changes when one part of the system moves.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{
            marginTop: 44,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            opacity: 0,
          }}
        >
          <Button href={ROUTES.projects} size="large">
            See how it works
          </Button>
          <Button href={ROUTES.contact} variant="secondary" size="large">
            Get early access
          </Button>
        </div>

        {/* Micro line */}
        <p
          ref={metaRef}
          style={{
            marginTop: 20,
            fontSize: 12,
            color: "var(--color-gray-700)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.08em",
            opacity: 0,
          }}
        >
          A new way to understand personal change through structure, not streaks.
        </p>
      </div>
    

      <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <ScrollIndicator />
      </div>
    </section>
  );
}
