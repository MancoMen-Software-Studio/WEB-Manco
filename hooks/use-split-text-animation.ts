"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap-config";

interface UseSplitTextOptions {
  type?: "chars" | "words" | "lines" | "chars,words" | "words,lines" | "chars,lines" | "chars,words,lines";
  animateTarget?: "chars" | "words" | "lines";
  duration?: number;
  stagger?: number;
  scrollTrigger?: boolean;
  start?: string;
}

export function useSplitTextAnimation({
  type = "chars",
  animateTarget = "chars",
  duration = 0.8,
  stagger = 0.02,
  scrollTrigger = false,
  start = "top 80%",
}: UseSplitTextOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const split = SplitText.create(ref.current, { type });
    const targets = split[animateTarget as keyof typeof split] as gsap.TweenTarget;

    if (!targets) return;

    gsap.fromTo(
      targets,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "expo.out",
        scrollTrigger: scrollTrigger
          ? { trigger: ref.current, start, toggleActions: "play none none none" }
          : undefined,
      }
    );

    return () => {
      split.revert();
    };
  }, { scope: ref });

  return ref;
}
