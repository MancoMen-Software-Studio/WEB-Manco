"use client";

import { motion } from "motion/react";

export function ScrollIndicator() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <span
        className="font-mono"
        style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "#a3a3a3" }}
      >
        Scroll
      </span>
      <div style={{ position: "relative", height: 48, width: 1, overflow: "hidden", background: "#262626" }}>
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "33%",
            width: "100%",
            background: "#0066FF",
          }}
          animate={{ y: ["-100%", "400%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
