"use client";

import { Badge } from "@/components/atoms/badge";
import { useLanguage } from "@/context/language-context";

export function ProjectsPageHero() {
  const { t } = useLanguage();
  const pp = t.projectsPage;

  return (
    <section style={{ paddingTop: 160, paddingBottom: 72 }}>
      <div className="px-6 md:px-8" style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
          <Badge>{pp.badge}</Badge>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6.5vw, 88px)",
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: "white",
            }}
          >
            {pp.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {pp.titleAccent}
            </span>
          </h1>
          <p
            style={{
              maxWidth: 680,
              fontSize: "clamp(16px, 1.8vw, 18px)",
              lineHeight: 1.75,
              color: "var(--color-gray-300)",
            }}
          >
            {pp.body}
          </p>

          {/* Status pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 9999,
              border: "1px solid rgba(16,185,129,0.2)",
              background: "rgba(16,185,129,0.06)",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#10b981", letterSpacing: "0.08em" }}>
              {pp.status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
