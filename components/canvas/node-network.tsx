"use client";

import { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  colorType: 0 | 1 | 2; // 0=violet, 1=cyan, 2=dim
  pulseOffset: number;
}

interface NodeNetworkProps {
  nodeCount?: number;
  className?: string;
}

const VIOLET = { r: 139, g: 92, b: 246 };
const CYAN = { r: 34, g: 211, b: 238 };
const DIM = { r: 80, g: 80, b: 120 };

function lerpColor(a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }, t: number) {
  return {
    r: a.r + (b.r - a.r) * t,
    g: a.g + (b.g - a.g) * t,
    b: a.b + (b.b - a.b) * t,
  };
}

export function NodeNetwork({ nodeCount = 80, className }: NodeNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize nodes
    const count = window.innerWidth < 768 ? Math.floor(nodeCount * 0.5) : nodeCount;
    nodesRef.current = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      colorType: (i % 5 === 0 ? 1 : i % 3 === 0 ? 0 : 2) as 0 | 1 | 2,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const CONNECT_DIST = 160;
    const MOUSE_REPEL_DIST = 140;
    const MOUSE_STRENGTH = 1.2;

    const draw = (timestamp: number) => {
      const dt = Math.min((timestamp - timeRef.current) / 16, 3);
      timeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const t = timestamp * 0.001;

      // Update positions
      for (const node of nodes) {
        // Mouse repulsion
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          const force = (1 - dist / MOUSE_REPEL_DIST) * MOUSE_STRENGTH;
          node.vx += (dx / dist) * force * 0.1;
          node.vy += (dy / dist) * force * 0.1;
        }

        // Damping
        node.vx *= 0.98;
        node.vy *= 0.98;

        // Clamp velocity
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 0.8) {
          node.vx = (node.vx / speed) * 0.8;
          node.vy = (node.vy / speed) * 0.8;
        }

        node.x += node.vx * dt;
        node.y += node.vy * dt;

        // Wrap around edges (softer)
        if (node.x < -20) node.x = canvas.width + 20;
        if (node.x > canvas.width + 20) node.x = -20;
        if (node.y < -20) node.y = canvas.height + 20;
        if (node.y > canvas.height + 20) node.y = -20;
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.35;
            // Color based on node types
            let c: { r: number; g: number; b: number };
            if (a.colorType === 1 || b.colorType === 1) {
              c = lerpColor(DIM, CYAN, (1 - dist / CONNECT_DIST) * 0.8);
            } else if (a.colorType === 0 || b.colorType === 0) {
              c = lerpColor(DIM, VIOLET, (1 - dist / CONNECT_DIST) * 0.8);
            } else {
              c = DIM;
            }

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(t * 1.5 + node.pulseOffset) * 0.3 + 0.7;
        const baseOpacity = node.opacity * pulse;

        let color: { r: number; g: number; b: number };
        if (node.colorType === 0) color = VIOLET;
        else if (node.colorType === 1) color = CYAN;
        else color = DIM;

        // Outer glow
        if (node.colorType !== 2) {
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
          gradient.addColorStop(0, `rgba(${color.r},${color.g},${color.b},${baseOpacity * 0.4})`);
          gradient.addColorStop(1, `rgba(${color.r},${color.g},${color.b},0)`);
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},${baseOpacity * 0.9})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [nodeCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.75,
      }}
    />
  );
}
