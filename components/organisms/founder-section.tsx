"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useLanguage } from "@/context/language-context";

const photos = [
  "/visuals/founder-photo.jpg",
  "/visuals/andres-photo.jpg",
  "/visuals/juan-pedraza.jpg",
];

export function FounderSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

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

  const fs = t.founderSection;

  return (
    <section
      ref={sectionRef}
      className="team-section"
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
          top: "15%",
          left: "5%",
          fontSize: "12vw",
          fontWeight: 900,
          color: "var(--color-black-muted)",
          opacity: 0.12,
          userSelect: "none",
          zIndex: 0,
          whiteSpace: "nowrap",
          fontFamily: "var(--font-display)",
          pointerEvents: "none",
        }}
      >
        {fs.backgroundWord}
      </div>

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Shared Section Header */}
        <div ref={headerRef} style={{ marginBottom: 60, maxWidth: 800, opacity: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
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
            {fs.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {fs.titleAccent}
            </span>
          </h2>
        </div>

        {/* Team Grid */}
        <div ref={teamRef} style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {fs.team.map((member, idx) => (
            <div
              key={member.name}
              className={`team-member ${idx % 2 === 0 ? "even" : "odd"}`}
              style={{ opacity: 0 }}
            >
              {/* Photo Box */}
              <div className="member-photo-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photos[idx]}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(10%) brightness(0.95)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, var(--color-black-rich) 0%, transparent 60%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: 20, left: 20, zIndex: 10 }}>
                  <p
                    className="font-display"
                    style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 2 }}
                  >
                    {member.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--color-electric-light)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Description Box */}
              <div className="member-description-box">
                {/* Scanning line */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.06) 50%, transparent 100%)",
                    animation: "scan-box 4s linear infinite",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                />

                {/* Pulse ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid var(--color-electric)",
                    opacity: 0.1,
                    borderRadius: 24,
                    animation: "pulse-box 3s ease-out infinite",
                    pointerEvents: "none",
                  }}
                />

                {/* Content */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  {member.description.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: 17,
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                        color: "var(--color-gray-200)",
                        lineHeight: 1.7,
                        marginBottom: i === member.description.length - 1 ? 0 : 20,
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* Name decoration */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 20,
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    color: "rgba(139,92,246,0.25)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {member.name.split(' ')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-member {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .member-photo-box {
          position: relative;
          width: 100%;
          max-width: 300px;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--color-gray-800);
          background: var(--color-black-soft);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5);
        }

        .member-description-box {
          padding: 32px 24px;
          border-radius: 24px;
          border: 1px solid rgba(139,92,246,0.15);
          background: rgba(139,92,246,0.02);
          backdrop-filter: blur(4px);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .team-member {
            display: grid;
            gap: 48px;
            align-items: center;
          }
          .team-member.even {
            grid-template-columns: 300px 1fr;
          }
          .team-member.odd {
            grid-template-columns: 1fr 300px;
          }
          .team-member.odd .member-photo-box {
            order: 1;
          }
          .member-description-box {
            padding: 40px 48px;
          }
        }

        @keyframes scan-box {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes pulse-box {
          0% { opacity: 0.2; transform: scale(1); }
          70% { opacity: 0; transform: scale(1.02); }
          100% { opacity: 0; transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
}
