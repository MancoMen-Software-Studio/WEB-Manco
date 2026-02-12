"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

interface SceneContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SceneContainer({ children, className }: SceneContainerProps) {
  return (
    <div className={cn("absolute inset-0", className)}>
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}

export function createDynamicScene<P extends object>(
  importFn: () => Promise<{ default: React.ComponentType<P> }>
) {
  return dynamic(importFn, { ssr: false });
}
