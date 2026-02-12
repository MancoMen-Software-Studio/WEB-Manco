"use client";

import { useSplitTextAnimation } from "@/hooks/use-split-text-animation";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  animateBy?: "chars" | "words" | "lines";
  scrollTrigger?: boolean;
  stagger?: number;
}

export function RevealText({
  children,
  as: Tag = "p",
  className,
  animateBy = "chars",
  scrollTrigger = false,
  stagger,
}: RevealTextProps) {
  const ref = useSplitTextAnimation({
    type: animateBy,
    animateTarget: animateBy,
    scrollTrigger,
    stagger: stagger ?? (animateBy === "chars" ? 0.02 : animateBy === "words" ? 0.05 : 0.1),
  });

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>} className={cn("overflow-hidden", className)}>
      {children}
    </Tag>
  );
}
