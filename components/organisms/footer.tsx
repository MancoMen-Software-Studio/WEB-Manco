"use client";

import Link from "next/link";
import { ROUTES, SITE, SOCIAL, CONTACT } from "@/lib/constants";
import { navigationItems } from "@/data/navigation";
import { Icon } from "@/components/atoms/icon";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1e1e2e", background: "#08080f" }}>
      <div className="px-6 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto", paddingTop: 56, paddingBottom: 56 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          <div className="md:col-span-1" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Link
              href={ROUTES.home}
              style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  border: "1px solid #1e1e2e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: "var(--color-electric-light)",
                  background: "var(--color-electric-muted)",
                }}
              >
                M
              </div>
              <span className="font-logo" style={{ fontSize: 20, letterSpacing: 4, color: "white" }}>
                MANCOMEN
              </span>
            </Link>
            <p style={{ maxWidth: 400, fontSize: 14, lineHeight: 1.7, color: "#737373" }}>
              MancoMen is building the first behavioral modeling platform. Nodeself maps personal change as a living graph. Pre-seed, 2026.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: SOCIAL.linkedin, icon: "linkedin", label: "LinkedIn" },
                { href: SOCIAL.github, icon: "github", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 9999,
                    border: "1px solid #1e1e2e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#737373",
                    transition: "all 0.3s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--color-electric)";
                    el.style.color = "var(--color-electric-light)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "#1e1e2e";
                    el.style.color = "#737373";
                  }}
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#737373", fontFamily: "var(--font-mono)" }}>
              Navigation
            </h4>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontSize: 14, color: "#a3a3a3", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a3a3a3"; }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h4 style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "#737373", fontFamily: "var(--font-mono)" }}>
              Connect
            </h4>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{ fontSize: 14, color: "#a3a3a3", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#a3a3a3"; }}
            >
              {CONTACT.email}
            </a>
            <span style={{ fontSize: 14, color: "#737373" }}>{CONTACT.address}</span>
            <div
              style={{
                marginTop: 8,
                padding: "10px 16px",
                borderRadius: 8,
                border: "1px solid var(--color-electric-muted)",
                background: "var(--color-electric-muted)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-electric)",
                  boxShadow: "0 0 8px var(--color-electric)",
                }}
              />
              <span style={{ fontSize: 12, color: "var(--color-electric-light)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
                Seeking pre-seed
              </span>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "#1e1e2e", margin: "40px 0" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <span style={{ fontSize: 12, color: "#404040", fontFamily: "var(--font-mono)" }}>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: "#404040", fontFamily: "var(--font-mono)" }}>
            Bogotá, Colombia · MancoMen Software Studio
          </span>
        </div>
      </div>
    </footer>
  );
}
