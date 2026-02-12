"use client";

import { useMagnetic } from "@/hooks/use-magnetic";

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
}

export function MagneticWrapper({
  children,
  strength = 0.3,
}: MagneticWrapperProps) {
  const ref = useMagnetic({ strength });

  return (
    <div ref={ref} style={{ display: "inline-block" }}>
      {children}
    </div>
  );
}
