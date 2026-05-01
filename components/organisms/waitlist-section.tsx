"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useGSAP(() => {
    if (reducedMotion || !contentRef.current) return;
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading" || status === "success") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "8%",
          right: "8%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(0,229,255,0.15), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "8%",
          right: "8%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.12), transparent)",
        }}
      />

      <div
        className="px-6 md:px-8 lg:px-12"
        style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}
      >
        <div
          ref={contentRef}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
        >
          {/* Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 28,
              padding: "4px 14px",
              borderRadius: 9999,
              border: "1px solid rgba(0,229,255,0.18)",
              background: "rgba(0,229,255,0.04)",
              opacity: 0,
            }}
          >
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--color-cyan)",
                boxShadow: "0 0 8px rgba(0,229,255,0.6)",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "rgba(0,229,255,0.7)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Early Access
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 4.5vw, 54px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "white",
              marginBottom: 18,
              opacity: 0,
            }}
          >
            Be among the{" "}
            <span
              style={{
                background:
                  "linear-gradient(120deg, var(--color-cyan) 0%, var(--color-electric-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              first to use it.
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 17,
              color: "var(--color-gray-300)",
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 40,
              opacity: 0,
            }}
          >
            Nodeself launches on iOS and Android in 2026. Join the waitlist for early
            access, first-month pricing, and updates on the engine as it ships.
          </p>

          {/* Form */}
          <div style={{ width: "100%", maxWidth: 460, opacity: 0 }}>
            {status === "success" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  padding: "28px 32px",
                  borderRadius: 16,
                  border: "1px solid rgba(0,229,255,0.2)",
                  background: "rgba(0,229,255,0.04)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1.5px solid rgba(0,229,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-cyan)",
                    fontSize: 18,
                  }}
                >
                  ✓
                </div>
                <p
                  className="font-display"
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "white",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  You're on the list.
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--color-gray-400)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  We'll reach out when early access opens.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="your@email.com"
                    required
                    disabled={status === "loading"}
                    style={{
                      flex: "1 1 220px",
                      minWidth: 0,
                      padding: "14px 18px",
                      borderRadius: 10,
                      border: `1px solid ${status === "error" ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.1)"}`,
                      background: "rgba(255,255,255,0.04)",
                      color: "white",
                      fontSize: 15,
                      outline: "none",
                      fontFamily: "inherit",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,229,255,0.35)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        status === "error"
                          ? "rgba(239,68,68,0.4)"
                          : "rgba(255,255,255,0.1)";
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      flexShrink: 0,
                      padding: "14px 24px",
                      borderRadius: 10,
                      border: "1px solid rgba(139,92,246,0.35)",
                      background:
                        status === "loading"
                          ? "rgba(139,92,246,0.1)"
                          : "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.1) 100%)",
                      color: status === "loading" ? "var(--color-gray-400)" : "white",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      fontFamily: "inherit",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading") {
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0.2) 100%)";
                        e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.1) 100%)";
                      e.currentTarget.style.borderColor = "rgba(139,92,246,0.35)";
                    }}
                  >
                    {status === "loading" ? "Joining…" : "Join waitlist"}
                  </button>
                </div>

                {status === "error" && (
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 13,
                      color: "rgba(239,68,68,0.8)",
                      fontFamily: "var(--font-mono)",
                      textAlign: "center",
                    }}
                  >
                    {errorMsg}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Micro note */}
          <p
            style={{
              marginTop: 20,
              fontSize: 12,
              color: "#404040",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.04em",
              opacity: 0,
            }}
          >
            No spam. One email when it's ready.
          </p>
        </div>
      </div>
    </section>
  );
}
