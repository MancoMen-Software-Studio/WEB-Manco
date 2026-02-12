"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedCounter({ value, className, style }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/^(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = value.replace(/^\d+/, "");

  useGSAP(() => {
    if (!ref.current) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: numericValue,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        setDisplay(Math.round(obj.val).toString());
      },
    });
  }, { scope: ref });

  return (
    <span ref={ref} className={cn("tabular-nums", className)} style={style}>
      {display}
      {suffix}
    </span>
  );
}
