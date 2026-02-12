"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-config";

interface UseParallaxOptions {
  speed?: number;
  direction?: "vertical" | "horizontal";
}

export function useParallax({ speed = 0.5, direction = "vertical" }: UseParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const prop = direction === "vertical" ? "y" : "x";
    const distance = 100 * speed;

    gsap.fromTo(
      ref.current,
      { [prop]: -distance },
      {
        [prop]: distance,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, { scope: ref });

  return ref;
}
