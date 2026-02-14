"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import { navigationItems } from "@/data/navigation";
import { NavLink } from "@/components/molecules/nav-link";
import { Button } from "@/components/atoms/button";
import { Icon } from "@/components/atoms/icon";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "border-b border-gray-800/50 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
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
        <Link
          href={ROUTES.home}
          className="relative z-[60]"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid #262626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              background: "#111",
            }}
          >
            M
          </div>
          <span className="font-logo" style={{ fontSize: 20, letterSpacing: 4, color: "white" }}>
            MANCOMEN
          </span>
        </Link>

        <div className="hidden md:flex" style={{ alignItems: "center", gap: 36 }}>
          {navigationItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <Button href={ROUTES.contact} magnetic>
            Get in Touch
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[60] md:hidden"
          style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <Icon name={isOpen ? "close" : "menu"} size={24} className="text-white" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-black md:hidden"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 32 }}>
              {navigationItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    style={{ fontSize: 28, fontWeight: 600, color: "white", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Button href={ROUTES.contact} onClick={closeMenu}>
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
