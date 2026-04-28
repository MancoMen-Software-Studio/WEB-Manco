import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "nexus",
    title: "Nexus",
    subtitle: "Behavioral Modeling Platform for Personal Transformation",
    description:
      "Nexus is a behavioral modeling engine. Feed it data in natural language — Nexus extracts behavioral nodes, builds a causal graph, and models what happens over time. The graph decays when you stop. It simulates your future when you ask.",
    category: "Behavioral Tech",
    technologies: [
      "React Native 0.81",
      "Expo SDK 54",
      "TypeScript strict",
      "React Native Skia",
      "GLSL Shaders",
      "Reanimated 4",
      "SQLite",
      "Drizzle ORM",
      "Zustand",
      "Claude API",
      "Expo Router",
    ],
    stats: [
      { label: "Architecture", value: "Graph Engine" },
      { label: "AI", value: "Claude API" },
      { label: "Storage", value: "Local-first" },
      { label: "Target", value: "App Store" },
    ],
    challenge:
      "The $13B personal wellness market is saturated with apps that track behavior but never model it. No product maps the causal structure of personal change — the connections between habits, decisions, emotions, and states that determine whether transformation sticks or collapses.",
    solution:
      "Nexus uses a graph-based behavioral model: every check-in feeds a parsing pipeline that extracts nodes and relationships from natural language entries. A custom decay engine makes time a first-class data dimension — silence is information. The simulation layer lets users project forward under different behavioral scenarios.",
    results:
      "The core engine is complete: graph construction, exponential decay, probabilistic simulation, AI causal analysis, and Skia-powered visualization all functional. Three features remain for App Store launch: cloud sync, user auth, and subscription system.",
    image: "/images/projects/nexus.jpg",
    color: "#8b5cf6",
  },
];
