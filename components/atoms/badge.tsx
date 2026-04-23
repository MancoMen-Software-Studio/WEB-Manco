interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variantStyle: React.CSSProperties =
    variant === "accent"
      ? { background: "var(--color-cyan-muted)", color: "var(--color-cyan)", border: "1px solid rgba(34,211,238,0.2)" }
      : variant === "outline"
        ? { background: "transparent", color: "var(--color-gray-400)", border: "1px solid var(--color-gray-800)" }
        : { background: "var(--color-electric-muted)", color: "var(--color-electric-light)", border: "1px solid rgba(139,92,246,0.25)" };

  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <span
        className="font-logo"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          borderRadius: 9999,
          padding: "5px 14px",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          lineHeight: 1.4,
          ...variantStyle,
        }}
      >
        <span
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: variant === "accent" ? "var(--color-cyan)" : "var(--color-electric)",
            boxShadow: variant === "accent" ? "0 0 6px var(--color-cyan-glow)" : "0 0 6px var(--color-electric-glow)",
            flexShrink: 0,
          }}
        />
        {children}
      </span>
    </div>
  );
}
