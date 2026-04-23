"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import ParticlesBackground from "./particles-background";
import FloatingGeometry from "./floating-geometry";
import GridPlane from "./grid-plane";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useIsMobile } from "@/hooks/use-media-query";

export default function HeroScene() {
  const mouse = useMousePosition();
  const isMobile = useIsMobile();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.05} />
      <ParticlesBackground
        count={isMobile ? 150 : 350}
        mouse={{ x: mouse.normalizedX, y: mouse.normalizedY }}
      />
      <FloatingGeometry />
      <GridPlane />
      <Preload all />
    </Canvas>
  );
}
