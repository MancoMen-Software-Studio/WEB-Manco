interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 9999,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 12,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  };

  const variantStyle: React.CSSProperties =
    variant === "default"
      ? { background: "rgba(0,102,255,0.1)", color: "#0066FF" }
      : { border: "1px solid #262626", color: "#a3a3a3" };

  return (
    <span className="font-mono" style={{ ...baseStyle, ...variantStyle }}>
      {children}
    </span>
  );
}
