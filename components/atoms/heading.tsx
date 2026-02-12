import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  display?: boolean;
}

const headingStyles: Record<HeadingLevel, { base: React.CSSProperties; display: React.CSSProperties }> = {
  h1: { base: { fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.1 }, display: { fontSize: "clamp(48px, 5vw, 72px)", fontWeight: 400, lineHeight: 1.1 } },
  h2: { base: { fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15 }, display: { fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.15 } },
  h3: { base: { fontSize: "clamp(20px, 2.5vw, 24px)", fontWeight: 600, lineHeight: 1.3 }, display: { fontSize: "clamp(20px, 2.5vw, 24px)", fontWeight: 400, lineHeight: 1.3 } },
  h4: { base: { fontSize: 18, fontWeight: 600, lineHeight: 1.3 }, display: { fontSize: 18, fontWeight: 400, lineHeight: 1.3 } },
};

export function Heading({
  as: Tag = "h2",
  children,
  className,
  display = false,
}: HeadingProps) {
  return (
    <Tag
      className={cn(display ? "font-display" : "font-sans", className)}
      style={{ ...(display ? headingStyles[Tag].display : headingStyles[Tag].base), margin: 0 }}
    >
      {children}
    </Tag>
  );
}
