"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesBackgroundProps {
  count?: number;
  mouse?: { x: number; y: number };
}

function createParticleData(count: number) {
  const pos = new Float32Array(count * 3);
  const vel = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    vel[i * 3] = (Math.random() - 0.5) * 0.002;
    vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
  }
  return { positions: pos, velocities: vel };
}

export default function ParticlesBackground({
  count = 500,
  mouse = { x: 0, y: 0 },
}: ParticlesBackgroundProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const dataRef = useRef<{ positions: Float32Array; velocities: Float32Array } | null>(null);

  if (!dataRef.current) {
    dataRef.current = createParticleData(count);
  }

  const { positions, velocities } = dataRef.current;

  useFrame(() => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < count; i++) {
      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      for (let j = 0; j < 3; j++) {
        if (Math.abs(posArray[i * 3 + j]) > 10) {
          velocities[j + i * 3] = -velocities[j + i * 3];
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += 0.0003;
    pointsRef.current.rotation.x = mouse.y * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#0066FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
