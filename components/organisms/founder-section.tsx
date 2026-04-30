"use client";

export function FounderSection() {
  return (
    <section style={{ paddingTop: 40, paddingBottom: 80 }}>
      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: 300,
                height: 360,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--color-gray-800)",
                boxShadow: "0 0 60px rgba(139,92,246,0.12)",
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/visuals/founder-photo.jpg"
                alt="Juan Martinez, MancoMen Software Studio"
                width={300}
                height={360}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  position: "absolute",
                  inset: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(7,7,14,0.92) 0%, rgba(7,7,14,0.3) 40%, transparent 70%)",
                  zIndex: 1,
                }}
              />
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, zIndex: 2 }}>
                <p className="font-display" style={{ fontSize: 17, fontWeight: 600, color: "white", marginBottom: 4 }}>
                  Juan Martinez
                </p>
                <p style={{ fontSize: 12, color: "var(--color-electric-light)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
                  Founder · MancoMen Software Studio
                </p>
              </div>
              {/* Corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 120,
                  height: 120,
                  background: "radial-gradient(circle at top right, rgba(34,211,238,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
            </div>
          </div>

          {/* Story */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                className="font-logo"
                style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--color-electric-light)", textTransform: "uppercase" }}
              >
                MANCOMEN
              </span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--color-electric-muted), transparent)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-gray-500)" }}>FOUNDER</span>
            </div>

            <h2
              className="font-display"
              style={{
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "white",
              }}
            >
              Founded from conviction,{" "}
              <span className="text-gradient">built from scratch</span>
            </h2>

            <p style={{ fontSize: 17, color: "var(--color-gray-300)", lineHeight: 1.75 }}>
              I believe deeply in the power of ideas and in their capacity to change a life
              when they become something real. I see technology as a tool for shaping profound
              ideas, building worlds with identity, and transforming the way we understand our
              own experience.
            </p>
            <p style={{ fontSize: 17, color: "var(--color-gray-300)", lineHeight: 1.75 }}>
              MancoMen Studio is the space where that vision takes form. Nodeself is today its
              clearest and most ambitious manifestation, what I want to build and leave in
              the world.
            </p>

            {/* Link pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
              {[
                { label: "LinkedIn →", href: "https://www.linkedin.com/in/juansebastianmartinezmarin/" },
                { label: "contact@mancomen.com", href: "mailto:contact@mancomen.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="founder-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
