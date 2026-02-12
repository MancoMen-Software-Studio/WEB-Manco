import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg" | "xl";
  color?: "primary" | "secondary" | "muted";
  mono?: boolean;
  className?: string;
  as?: "p" | "span" | "div";
  style?: React.CSSProperties;
}

const sizeMap: Record<string, React.CSSProperties> = {
  sm: { fontSize: 14 },
  base: { fontSize: "clamp(16px, 1.5vw, 18px)" },
  lg: { fontSize: "clamp(18px, 1.8vw, 20px)" },
  xl: { fontSize: "clamp(20px, 2vw, 24px)" },
};

const colorMap: Record<string, string> = {
  primary: "#ffffff",
  secondary: "#a3a3a3",
  muted: "#404040",
};

export function Text({
  children,
  size = "base",
  color = "secondary",
  mono = false,
  className,
  as: Tag = "p",
  style,
}: TextProps) {
  return (
    <Tag
      className={cn(mono ? "font-mono" : "font-sans", className)}
      style={{
        ...sizeMap[size],
        color: colorMap[color],
        lineHeight: 1.7,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
