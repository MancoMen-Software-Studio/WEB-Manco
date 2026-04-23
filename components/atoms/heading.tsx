import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  display?: boolean;
}

const headingStyles: Record<HeadingLevel, { base: React.CSSProperties; display: React.CSSProperties }> = {
  h1: {
    base: { fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em" },
    display: { fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em" },
  },
  h2: {
    base: { fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.02em" },
    display: { fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" },
  },
  h3: {
    base: { fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em" },
    display: { fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.015em" },
  },
  h4: {
    base: { fontSize: 17, fontWeight: 600, lineHeight: 1.35 },
    display: { fontSize: 18, fontWeight: 700, lineHeight: 1.3 },
  },
};

export function Heading({
  as: Tag = "h2",
  children,
  className,
  display = false,
}: HeadingProps) {
  return (
    <Tag
      className={cn("font-display", className)}
      style={{ ...(display ? headingStyles[Tag].display : headingStyles[Tag].base), margin: 0 }}
    >
      {children}
    </Tag>
  );
}
