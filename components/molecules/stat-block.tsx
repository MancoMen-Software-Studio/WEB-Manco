"use client";

import { AnimatedCounter } from "@/components/atoms/animated-counter";
import { Text } from "@/components/atoms/text";

interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <AnimatedCounter
        value={value}
        className="text-white"
        style={{ fontSize: "clamp(32px, 6vw, 48px)", fontWeight: 700 }}
      />
      <Text size="sm" color="secondary">
        {label}
      </Text>
    </div>
  );
}
