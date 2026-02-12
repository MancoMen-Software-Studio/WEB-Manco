import { Badge } from "@/components/atoms/badge";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";

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
      <Heading as="h2">{title}</Heading>
      {description && (
        <div style={{ maxWidth: 672 }}>
          <Text>{description}</Text>
        </div>
      )}
    </div>
  );
}
