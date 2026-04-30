"use client";

import { useRef, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const videos = [
  { src: "/videos/nodeself-v1.mp4", label: "Check-in" },
  { src: "/videos/nodeself-v2.mp4", label: "Graph" },
  { src: "/videos/nodeself-v3.mp4", label: "Simulate" },
];

function PhoneVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 2;
    const onPlay = () => { video.playbackRate = 2; };
    video.addEventListener("play", onPlay);
    return () => video.removeEventListener("play", onPlay);
  }, []);

  return (
    <div style={{ flex: 1, minWidth: 0, flexShrink: 0 }}>
      <div
        style={{
          borderRadius: 28,
          overflow: "hidden",
          border: "1px solid #2a2a3e",
          background: "#0d0d1a",
          boxShadow: "0 32px 64px rgba(0,0,0,0.7), 0 0 32px var(--color-electric-glow)",
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
            (e.currentTarget as HTMLVideoElement).playbackRate = 2;
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(7,7,14,0.06) 0%, transparent 12%, transparent 88%, rgba(7,7,14,0.25) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Label badge */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "5px 14px",
            borderRadius: 9999,
            background: "rgba(7,7,14,0.75)",
            border: "1px solid rgba(139,92,246,0.25)",
            backdropFilter: "blur(10px)",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontFamily: "var(--font-mono)",
              color: "var(--color-electric-light)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
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
  const headerRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      phonesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%",
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
      {/* Top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "5%",
          right: "5%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, var(--color-electric-muted), transparent)",
        }}
      />

      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{ marginBottom: 56, display: "flex", flexDirection: "column", gap: 14, opacity: 0 }}
        >
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
          <p
            style={{
              fontSize: 17,
              color: "var(--color-gray-300)",
              lineHeight: 1.7,
              maxWidth: 580,
            }}
          >
            Write naturally about your day, your habits, or your state of mind.
            Nodeself extracts signals, builds connections, and reveals the structure behind the
            patterns you live with.
          </p>
        </div>

        {/* Phone trio — straight horizontal, full width */}
        <div
          ref={phonesRef}
          style={{
            display: "flex",
            gap: 20,
            alignItems: "stretch",
            opacity: 0,
            position: "relative",
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              inset: "-10% 10%",
              background:
                "radial-gradient(ellipse at 50% 60%, var(--color-electric-glow) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {videos.map((v) => (
            <PhoneVideo key={v.src} src={v.src} label={v.label} />
          ))}
        </div>

      </div>
    </section>
  );
}
