"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function NexusVideos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<0 | 1>(0);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  const videos = [
    {
      src: "/videos/nexus-demo.mov",
      label: "Graph Demo",
      description: "The living behavioral graph — nodes, edges, and decay in real time",
      available: true,
    },
    {
      src: "/videos/nexus-full.mp4",
      label: "Full Walkthrough",
      description: "Complete product demo: check-in → AI analysis → graph update → simulation",
      available: false, // hosted externally — too large for static deployment
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ paddingTop: 100, paddingBottom: 100, position: "relative", overflow: "hidden" }}
    >
      {/* Subtle top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "5%",
          right: "5%",
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--color-electric-muted), transparent)",
        }}
      />

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 48, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--color-electric)",
                boxShadow: "0 0 10px var(--color-electric-glow)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--color-electric-light)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Live Demo
            </span>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            See it working.
          </h2>
        </div>

        {/* Tab switcher */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {videos.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setActiveVideo(i as 0 | 1)}
              style={{
                padding: "8px 20px",
                borderRadius: 9999,
                border: `1px solid ${activeVideo === i ? "var(--color-electric)" : "var(--color-gray-800)"}`,
                background: activeVideo === i ? "var(--color-electric-muted)" : "transparent",
                color: activeVideo === i ? "var(--color-electric-light)" : "var(--color-gray-400)",
                fontSize: 13,
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                transition: "all 0.3s",
                letterSpacing: "0.05em",
              }}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Video */}
        <div
          ref={contentRef}
          style={{ opacity: 0 }}
        >
          <div
            className="video-glow"
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(139,92,246,0.15)",
              background: "#0c0c1a",
              aspectRatio: "16/9",
            }}
          >
            {/* Gradient overlay on top of video */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(7,7,14,0.1) 0%, transparent 20%, transparent 80%, rgba(7,7,14,0.4) 100%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {videos[activeVideo].available ? (
              <video
                key={videos[activeVideo].src}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              >
                <source src={videos[activeVideo].src} />
              </video>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  minHeight: 300,
                }}
              >
                <span style={{ fontSize: 32, color: "var(--color-electric)", filter: "drop-shadow(0 0 16px var(--color-electric-glow))" }}>▷</span>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-gray-500)", letterSpacing: "0.1em", textAlign: "center" }}>
                  Full walkthrough available on request
                </p>
                <a
                  href="mailto:macomenstudio@icloud.com"
                  style={{
                    fontSize: 12,
                    color: "var(--color-electric-light)",
                    fontFamily: "var(--font-mono)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(139,92,246,0.3)",
                    paddingBottom: 2,
                    letterSpacing: "0.08em",
                  }}
                >
                  macomenstudio@icloud.com →
                </a>
              </div>
            )}

            {/* Corner label */}
            <div
              style={{
                position: "absolute",
                bottom: 16,
                left: 16,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 9999,
                background: "rgba(7,7,14,0.8)",
                border: "1px solid rgba(139,92,246,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 6px #10b981",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-gray-400)",
                  letterSpacing: "0.1em",
                }}
              >
                NEXUS · LIVE BUILD
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              marginTop: 16,
              fontSize: 14,
              color: "var(--color-gray-500)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            {videos[activeVideo].description}
          </p>
        </div>
      </div>
    </section>
  );
}
