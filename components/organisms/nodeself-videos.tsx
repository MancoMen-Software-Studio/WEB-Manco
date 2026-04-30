"use client";

import { useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const videos = [
  { src: "/videos/nodeself-v1.mov", label: "Check-in" },
  { src: "/videos/nodeself-v2.mov", label: "Graph" },
  { src: "/videos/nodeself-v3.mov", label: "Simulate" },
];

function PhoneVideo({ src, label, index }: { src: string; label: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 3;
  }, []);

  const isCenter = index === 1;

  return (
    <div
      style={{
        position: "relative",
        zIndex: isCenter ? 3 : 2,
        transform: index === 0
          ? "translateY(30px) rotate(-4deg)"
          : index === 2
            ? "translateY(30px) rotate(4deg)"
            : "none",
        width: isCenter ? 180 : 145,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          borderRadius: 28,
          overflow: "hidden",
          border: "1px solid #2a2a3e",
          background: "#0d0d1a",
          boxShadow: isCenter
            ? "0 40px 80px rgba(0,0,0,0.8), 0 0 40px var(--color-electric-glow)"
            : "0 24px 48px rgba(0,0,0,0.6)",
          aspectRatio: "9/19.5",
          position: "relative",
        }}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onLoadedMetadata={(e) => {
            (e.currentTarget as HTMLVideoElement).playbackRate = 3;
          }}
          onPlay={(e) => {
            (e.currentTarget as HTMLVideoElement).playbackRate = 3;
          }}
        />

        {/* Subtle gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(7,7,14,0.08) 0%, transparent 15%, transparent 85%, rgba(7,7,14,0.3) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Label badge */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "4px 10px",
            borderRadius: 9999,
            background: "rgba(7,7,14,0.7)",
            border: "1px solid rgba(139,92,246,0.2)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              fontSize: 9,
              fontFamily: "var(--font-mono)",
              color: "var(--color-electric-light)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export function NodeselfVideos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      phonesRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

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
        <div ref={contentRef} style={{ marginBottom: 64, display: "flex", flexDirection: "column", gap: 16, opacity: 0 }}>
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
            See your behavior take shape.
          </h2>
          <p style={{ fontSize: 15, color: "var(--color-gray-500)", lineHeight: 1.7, maxWidth: 520 }}>
            Write naturally about your day, your habits, or your state of mind.
            Nodeself extracts signals, builds connections, and reveals the structure behind the patterns you live with.
          </p>
        </div>

        {/* Phone trio */}
        <div
          ref={phonesRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 20,
            opacity: 0,
            position: "relative",
          }}
        >
          {/* Central glow */}
          <div
            style={{
              position: "absolute",
              width: "60%",
              height: "50%",
              background: "radial-gradient(ellipse, var(--color-electric-glow) 0%, transparent 70%)",
              pointerEvents: "none",
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          {videos.map((v, i) => (
            <PhoneVideo key={v.src} src={v.src} label={v.label} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
