"use client";

import { Badge } from "@/components/atoms/badge";
import { useLanguage } from "@/context/language-context";

export function ContactPageHero() {
  const { t } = useLanguage();
  const cp = t.contactPage;

  return (
    <section style={{ paddingTop: 160, paddingBottom: 60 }}>
      <div className="px-6 md:px-8" style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
          <Badge>{cp.badge}</Badge>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "white",
            }}
          >
            {cp.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-electric-light) 0%, var(--color-cyan) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {cp.titleAccent}
            </span>
          </h1>
          <p
            style={{
              maxWidth: 580,
              fontSize: "clamp(16px, 1.8vw, 18px)",
              lineHeight: 1.75,
              color: "var(--color-gray-300)",
            }}
          >
            {cp.body}
          </p>
        </div>
      </div>
    </section>
  );
}
