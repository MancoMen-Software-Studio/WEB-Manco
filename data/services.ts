import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "behavioral-graph",
    title: "Behavioral Graph",
    subtitle: "A causal map of who you're becoming.",
    description:
      "Unlike habit trackers that log streaks, Nodeself builds a personal graph of nodes and edges: habits, decisions, emotional states, and the causal connections between them. The graph is alive, grows with every check-in, and shows you patterns you couldn't see before.",
    icon: "eye",
    features: [
      "Automatic node extraction from natural language entries",
      "Causal and correlative edge detection via AI analysis",
      "Real-time graph visualization powered by React Native Skia",
      "Contradiction detection: when your behaviors conflict",
      "Node clustering by behavioral category",
      "Full local storage: your graph never leaves your device",
    ],
    technologies: [
      "React Native Skia",
      "GLSL",
      "SQLite",
      "Drizzle ORM",
      "Zustand",
      "TypeScript",
    ],
    process: [
      {
        title: "Natural Language Input",
        description:
          "Write freely. No templates, no check-boxes. Nodeself reads your words and extracts the behavioral structure hidden inside them.",
      },
      {
        title: "AI Analysis",
        description:
          "The model identifies nodes (habits, states, events, decisions) and the relationships between them: causal, correlative, temporal, or contradictory.",
      },
      {
        title: "Graph Construction",
        description:
          "Extracted nodes and edges are merged into your personal graph via deterministic algorithms. Each new entry refines the model.",
      },
      {
        title: "Insight Generation",
        description:
          "With enough history, the AI audits the full graph and surfaces non-obvious patterns: cycles, bottlenecks, and connections you've never consciously seen.",
      },
    ],
  },
  {
    slug: "decay-engine",
    title: "Decay Engine",
    subtitle: "Silence is data. Time changes everything.",
    description:
      "Most apps treat inactivity as zero data. Nodeself treats it as signal. The decay engine applies exponential decay to every node based on time elapsed since last reinforcement. The graph fades where you stop paying attention, making absence visible, not invisible.",
    icon: "code",
    features: [
      "Exponential decay per node based on elapsed time",
      "Visual decay reflected in real-time graph rendering",
      "Configurable half-life per behavior category",
      "Decay events trigger structural re-evaluation",
      "Recovery curves when a node is reinforced after dormancy",
      "Decay history as a longitudinal behavioral record",
    ],
    technologies: [
      "SQLite",
      "TypeScript",
      "Drizzle ORM",
      "React Native Skia",
      "Reanimated 4",
    ],
    process: [
      {
        title: "Time as a Dimension",
        description:
          "Every node has a half-life. The longer you go without reinforcing a behavior, the weaker it becomes in the graph, visually and structurally.",
      },
      {
        title: "Visual Fading",
        description:
          "Decayed nodes become translucent, edges soften. You see which behaviors are slipping before they've fully collapsed.",
      },
      {
        title: "Structural Re-evaluation",
        description:
          "When anchor nodes decay, the graph re-evaluates which behaviors were dependent on them. The ripple effect is visible.",
      },
      {
        title: "Reinforcement Recovery",
        description:
          "Returning to a behavior after absence produces a recovery curve, not just a reset. The system remembers the context of the gap.",
      },
    ],
  },
  {
    slug: "simulation",
    title: "Simulator",
    subtitle: "See your future before you live it",
    description:
      "Nodeself can project the state of your behavioral graph 30, 60, or 90 days into the future under different scenarios. Maintain this habit, drop that one, add a new one and watch how your graph evolves. The simulator is deterministic and audited by AI.",
    icon: "strategy",
    features: [
      "Deterministic forward simulation under user-defined scenarios",
      "30 / 60 / 90 day projection windows",
      "AI audit of simulation output: narrative interpretation",
      "Scenario comparison: maintain vs. abandon vs. add",
      "Burnout, recovery, and transition scenario templates",
      "Export simulation snapshots for journaling and reflection",
    ],
    technologies: [
      "TypeScript strict",
      "Claude API",
      "SQLite",
      "Zustand",
      "React Native",
      "Expo SDK 54",
    ],
    process: [
      {
        title: "Scenario Definition",
        description:
          "Choose what changes: which habits to maintain, which to drop, which new ones to introduce. The simulator takes your graph as the starting state.",
      },
      {
        title: "Deterministic Projection",
        description:
          "The simulation engine applies the behavioral model forward in time using historical patterns as the probabilistic baseline.",
      },
      {
        title: "AI Interpretation",
        description:
          "The Claude API audits the simulation output and translates the graph changes into human-readable insight: what collapses, what strengthens, what new patterns emerge.",
      },
      {
        title: "Scenario Comparison",
        description:
          "Run multiple scenarios side by side. See which path leads to the graph you want in 90 days and what it costs to get there.",
      },
    ],
  },
];
