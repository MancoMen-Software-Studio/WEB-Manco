"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import { navigationItems } from "@/data/navigation";
import { NavLink } from "@/components/molecules/nav-link";
import { Button } from "@/components/atoms/button";
import { getLenisInstance } from "@/lib/lenis";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const lenis = getLenisInstance();
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      const l = getLenisInstance();
      l?.start();
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full transition-all duration-500",
          isScrolled || isOpen ? "header-scrolled" : ""
        )}
        style={{
          zIndex: isOpen ? 60 : 50,
          background: isOpen
            ? "#07070e"
            : isScrolled
              ? "rgba(7,7,14,0.85)"
              : "transparent",
          backdropFilter: isScrolled && !isOpen ? "blur(20px)" : "none",
        }}
      >
        {/* Glow border at bottom */}
        <div className="header-glow-border" />

        <nav
          className="px-6 md:px-8 lg:px-12"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href={ROUTES.home}
            style={{ position: "relative", display: "flex", alignItems: "center", gap: 14 }}
          >
            {/* Logo mark */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  border: "1px solid rgba(139,92,246,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  background: "rgba(139,92,246,0.08)",
                  color: "var(--color-electric-light)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Founder avatar */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/visuals/founder-avatar.jpg"
                  alt="Juan Martinez"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    borderRadius: 9,
                  }}
                />
                {/* Scan line inside logo */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.15) 50%, transparent 100%)",
                    animation: "scan-logo 3s linear infinite",
                    zIndex: 1,
                  }}
                />
              </div>
              {/* Pulse ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -3,
                  borderRadius: 13,
                  border: "1px solid var(--color-electric)",
                  opacity: 0,
                  animation: "pulse-ring 3s ease-out infinite",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span
                className="font-logo"
                style={{
                  fontSize: 18,
                  letterSpacing: "0.25em",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                MANCOMEN
              </span>
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  color: "var(--color-electric-light)",
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  opacity: 0.7,
                }}
              >
                Software Studio
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 40 }}>
            {navigationItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <Button href={ROUTES.contact} magnetic>
              Build with us
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{
              position: "relative",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              border: "1px solid rgba(139,92,246,0.2)",
              background: isOpen ? "rgba(139,92,246,0.1)" : "transparent",
              transition: "all 0.3s",
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div style={{ width: 18, display: "flex", flexDirection: "column", gap: 4 }}>
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                style={{ display: "block", height: 1.5, background: "white", borderRadius: 9999 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                style={{ display: "block", height: 1.5, background: "white", borderRadius: 9999 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                style={{ display: "block", height: 1.5, background: "white", borderRadius: 9999 }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu — full screen cyberpunk overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 55,
              background: "#07070e",
              display: "flex",
              flexDirection: "column",
              padding: "100px 32px 48px",
              overflow: "hidden",
            }}
          >
            {/* Background decoration */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "600px",
                background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "300px",
                height: "300px",
                background: "radial-gradient(ellipse at top right, rgba(34,211,238,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Coordinate decorations (cyberpunk aesthetic) */}
            <div
              style={{
                position: "absolute",
                top: 88,
                right: 24,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "rgba(139,92,246,0.3)",
                letterSpacing: "0.1em",
                lineHeight: 1.8,
              }}
            >
              <div>SYS // NAV</div>
              <div>v2.4.1</div>
            </div>

            {/* Nav items */}
            <nav style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, justifyContent: "center" }}>
              {navigationItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 20,
                      padding: "20px 0",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(139,92,246,0.1)",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-electric-light)",
                        opacity: 0.5,
                        width: 24,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="font-display"
                      style={{
                        fontSize: "clamp(32px, 8vw, 48px)",
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        color: "var(--color-electric)",
                        fontSize: 20,
                        opacity: 0.4,
                      }}
                    >
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                paddingTop: 32,
              }}
            >
              <Button href={ROUTES.contact} onClick={closeMenu} size="large" fullWidth>
                Build with us
              </Button>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(163,163,163,0.4)",
                  fontFamily: "var(--font-mono)",
                  textAlign: "center",
                  letterSpacing: "0.1em",
                }}
              >
                MANCOMEN SOFTWARE STUDIO · PRE-SEED 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes scan-logo {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes pulse-ring {
          0% { opacity: 0.6; transform: scale(1); }
          70% { opacity: 0; transform: scale(1.4); }
          100% { opacity: 0; transform: scale(1.4); }
        }
      `}</style>
    </>
  );
}
