"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  speed?: number;
  type?: "octahedron" | "torus" | "icosahedron";
}

function FloatingShape({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  speed = 1,
  type = "octahedron",
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x =
      rotation[0] + state.clock.elapsedTime * 0.2 * speed;
    meshRef.current.rotation.y =
      rotation[1] + state.clock.elapsedTime * 0.3 * speed;
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {type === "octahedron" && <octahedronGeometry args={[1, 0]} />}
      {type === "torus" && <torusGeometry args={[1, 0.3, 8, 16]} />}
      {type === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
      <meshBasicMaterial color="#0066FF" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      <FloatingShape
        position={[-5, 2, -3]}
        scale={0.6}
        speed={0.8}
        type="octahedron"
      />
      <FloatingShape
        position={[5, -1, -4]}
        scale={0.4}
        speed={1.2}
        type="torus"
      />
      <FloatingShape
        position={[-3, -2, -5]}
        scale={0.5}
        speed={0.6}
        type="icosahedron"
      />
      <FloatingShape
        position={[4, 3, -6]}
        scale={0.3}
        speed={1}
        type="octahedron"
      />
    </group>
  );
}
