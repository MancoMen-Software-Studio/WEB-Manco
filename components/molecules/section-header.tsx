import { Badge } from "@/components/atoms/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        ...(align === "center"
          ? { alignItems: "center", textAlign: "center" as const, margin: "0 auto" }
          : {}),
      }}
    >
      {badge && <Badge>{badge}</Badge>}
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(28px, 3.5vw, 52px)",
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
          color: "white",
          maxWidth: align === "center" ? 680 : undefined,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            maxWidth: 600,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            lineHeight: 1.7,
            color: "var(--color-gray-500)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
