"use client";

interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span
        className="stat-number"
        style={{ fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1 }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 12,
          color: "var(--color-gray-500)",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}
