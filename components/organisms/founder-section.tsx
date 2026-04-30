"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const team = [
  {
    name: "Juan Martinez",
    role: "Founder",
    photo: "/visuals/founder-photo.jpg",
    description: [
      "I believe deeply in the power of ideas and in their capacity to change lives when they become something real.",
      "I see technology as a tool for shaping profound ideas, building worlds with identity, and transforming the way we understand our own experience.",
      "MancoMen Studio is the space where that vision takes form. Nodeself is today its clearest and most ambitious manifestation, what I want to build and leave in the world.",
    ],
  },
  {
    name: "Andres Eraso",
    role: "Co-Founder",
    photo: "/visuals/andres-photo.jpg",
    description: [
      "I am convinced that exceeding expectations is the inevitable result when creative problem solving meets structured and methodical execution.",
      "Here we see improvement as an always open window of opportunity.",
    ],
  },
];

export function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      teamRef.current!.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: 120,
        paddingBottom: 160,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Huge background text for identity */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "15vw",
          fontWeight: 900,
          color: "var(--color-black-muted)",
          opacity: 0.15,
          userSelect: "none",
          zIndex: 0,
          whiteSpace: "nowrap",
          fontFamily: "var(--font-display)",
          pointerEvents: "none",
        }}
      >
        CONVICTION
      </div>

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Shared Section Header */}
        <div ref={headerRef} style={{ marginBottom: 100, maxWidth: 800, opacity: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span
              className="font-logo"
              style={{
                fontSize: 11,
                letterSpacing: "0.25em",
                color: "var(--color-electric-light)",
                textTransform: "uppercase",
              }}
            >
              MancoMen
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "linear-gradient(90deg, var(--color-electric-muted), transparent)",
              }}
            />
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "white",
            }}
          >
            Founded from conviction,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              built from scratch.
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div ref={teamRef} style={{ display: "flex", flexDirection: "column", gap: 140 }}>
          {team.map((member, idx) => (
            <div
              key={member.name}
              style={{
                display: "grid",
                gridTemplateColumns: idx % 2 === 0 ? "320px 1fr" : "1fr 320px",
                gap: 60,
                alignItems: "start",
                opacity: 0,
              }}
              className="flex flex-col lg:grid"
            >
              {/* Photo Box */}
              <div
                style={{
                  order: idx % 2 === 0 ? 0 : 1,
                  position: "relative",
                  width: 320,
                  height: 400,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid var(--color-gray-800)",
                  background: "var(--color-black-soft)",
                  boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(20%) brightness(0.9)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, var(--color-black-rich) 0%, transparent 50%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: 24, left: 24, zIndex: 10 }}>
                  <p
                    className="font-display"
                    style={{ fontSize: 20, fontWeight: 700, color: "white", marginBottom: 2 }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--color-electric-light)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {member.role}
                  </p>
                </div>

                {/* Decorative scanning line animation */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, var(--color-electric-light), transparent)",
                    boxShadow: "0 0 10px var(--color-electric-glow)",
                    zIndex: 5,
                    animation: "scan 4s linear infinite",
                  }}
                />
              </div>

              {/* Description Box */}
              <div
                style={{
                  paddingTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  position: "relative",
                }}
              >
                {/* Stylized big quote background */}
                <span
                  style={{
                    position: "absolute",
                    top: -40,
                    left: -20,
                    fontSize: 120,
                    fontFamily: "serif",
                    color: "var(--color-electric-muted)",
                    opacity: 0.1,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  &ldquo;
                </span>

                {member.description.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 17,
                      color: "var(--color-gray-300)",
                      lineHeight: 1.8,
                      maxWidth: 640,
                      position: "relative",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
    </section>
  );
}
