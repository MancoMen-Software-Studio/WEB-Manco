"use client";

import { SmoothScroll } from "./smooth-scroll";
import { NodeNetwork } from "@/components/canvas/node-network";
import { LanguageProvider } from "@/context/language-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
    <SmoothScroll>
      {/* Global interactive graph background */}
      <NodeNetwork nodeCount={90} />

      {/* Ambient side glows */}
      <div className="ambient-glow-left" aria-hidden="true" />
      <div className="ambient-glow-right" aria-hidden="true" />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </SmoothScroll>
    </LanguageProvider>
  );
}
