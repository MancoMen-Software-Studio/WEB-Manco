"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { SectionHeader } from "@/components/molecules/section-header";
import { technologies } from "@/data/technologies";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function TechMarquee({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <div
        style={{
          display: "flex",
          gap: 16,
          animation: `marquee-${direction} 30s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="border-gray-800 bg-black-muted text-gray-400 hover:border-electric hover:text-electric"
            style={{
              flexShrink: 0,
              whiteSpace: "nowrap",
              borderRadius: 9999,
              border: "1px solid #262626",
              padding: "10px 20px",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 14,
              transition: "all 0.3s",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion || !headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  const row1 = technologies.slice(0, 12).map((t) => t.name);
  const row2 = technologies.slice(12).map((t) => t.name);

  return (
    <section ref={sectionRef} className="py-16 md:py-24" style={{ overflow: "hidden" }}>
      <div className="px-5 md:px-8 lg:px-12" style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div ref={headerRef} style={{ opacity: 0, marginBottom: 56 }}>
          <SectionHeader
            badge="Technology"
            title="Tools we master"
            description="We choose the right technology for the job, not the trendiest. Our stack spans the full spectrum of modern software engineering."
            align="center"
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <TechMarquee items={row1} direction="left" />
        <TechMarquee items={row2} direction="right" />
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
