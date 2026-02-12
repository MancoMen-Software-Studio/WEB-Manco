import Link from "next/link";
import { ROUTES, SITE, SOCIAL, CONTACT } from "@/lib/constants";
import { navigationItems } from "@/data/navigation";
import { Icon } from "@/components/atoms/icon";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #262626", background: "#0a0a0a" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Link
              href={ROUTES.home}
              style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
            >
              {/*
                LOGO: Replace the placeholder below with your PNG logo.
                1. Place your logo file at: public/images/logo/mancomen-logo.png
                2. Uncomment the <img> tag below and delete the placeholder <div>
              */}
              {/* <img src="/images/logo/mancomen-logo.png" alt="MancoMen" width={40} height={40} style={{ borderRadius: 8 }} /> */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  border: "1px solid #262626",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "white",
                  background: "#111",
                }}
              >
                M
              </div>
              <span className="font-logo" style={{ fontSize: 24, letterSpacing: 4, color: "white" }}>
                MANCOMEN
              </span>
            </Link>
            <p style={{ maxWidth: 400, fontSize: 15, lineHeight: 1.7, color: "#a3a3a3" }}>
              {SITE.tagline}. Enterprise software consultancy delivering scalable,
              production-grade systems for ambitious businesses.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { href: SOCIAL.linkedin, icon: "linkedin", label: "LinkedIn" },
                { href: SOCIAL.github, icon: "github", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:border-electric hover:text-electric"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 9999,
                    border: "1px solid #262626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                  }}
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h4 style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: "white" }}>
              Navigation
            </h4>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ fontSize: 14, color: "#a3a3a3", textDecoration: "none", transition: "color 0.3s" }}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h4 style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: "white" }}>
              Contact
            </h4>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{ fontSize: 14, color: "#a3a3a3", textDecoration: "none", transition: "color 0.3s" }}
              className="hover:text-white"
            >
              {CONTACT.email}
            </a>
            <span style={{ fontSize: 14, color: "#a3a3a3" }}>{CONTACT.address}</span>
          </div>
        </div>

        <div style={{ height: 1, background: "#262626", margin: "48px 0" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: "#404040" }}>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span style={{ fontSize: 13, color: "#404040" }}>
            Bogota, Colombia
          </span>
        </div>
      </div>
    </footer>
  );
}
