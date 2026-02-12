"use client";

import { gsap } from "@/lib/gsap-config";

export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  verySlow: 1.6,
} as const;

export const EASE = {
  expoOut: "expo.out",
  expoInOut: "expo.inOut",
  powerOut: "power3.out",
  powerInOut: "power3.inOut",
} as const;

export const fadeInUp = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: DURATION.normal,
      ease: EASE.expoOut,
      ...options,
    }
  );
};

export const fadeIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: DURATION.normal,
      ease: EASE.powerOut,
      ...options,
    }
  );
};

export const staggerFadeInUp = (
  elements: gsap.TweenTarget,
  staggerAmount = 0.15,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: DURATION.normal,
      ease: EASE.expoOut,
      stagger: staggerAmount,
      ...options,
    }
  );
};

export const slideInLeft = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: -80 },
    {
      opacity: 1,
      x: 0,
      duration: DURATION.slow,
      ease: EASE.expoOut,
      ...options,
    }
  );
};

export const slideInRight = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, x: 80 },
    {
      opacity: 1,
      x: 0,
      duration: DURATION.slow,
      ease: EASE.expoOut,
      ...options,
    }
  );
};

export const scaleIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: DURATION.slow,
      ease: EASE.expoOut,
      ...options,
    }
  );
};

export const createScrollTrigger = (
  trigger: string | Element,
  options?: ScrollTrigger.Vars
): ScrollTrigger.Vars => ({
  trigger,
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none none",
  ...options,
});
