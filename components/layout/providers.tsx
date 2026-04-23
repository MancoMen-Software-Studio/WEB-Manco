"use client";

import { SmoothScroll } from "./smooth-scroll";
import { NodeNetwork } from "@/components/canvas/node-network";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
