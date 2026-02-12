"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import * as THREE from "three";

export default function GridPlane() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.z = (state.clock.elapsedTime * 0.3) % 1;
  });

  return (
    <group ref={groupRef} position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <Grid
        args={[40, 40]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#0066FF"
        sectionSize={2}
        sectionThickness={1}
        sectionColor="#0066FF"
        fadeDistance={25}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid
      />
    </group>
  );
}
