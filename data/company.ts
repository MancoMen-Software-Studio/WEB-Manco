import type { CompanyValue, MethodologyStep } from "@/lib/types";

export const companyInfo = {
  name: "MancoMen Software Studio",
  legalName: "MancoMen Software Studio S.A.S.",
  tagline: "Software that reveals the structure of human behavior",
  description:
    "MancoMen is an independent software studio with a single clear mission: build products that reveal what people can't see about themselves. We don't consult. We don't build for others. We build our own products. Starting with Nodeself, the first behavioral modeling platform that maps personal change as a living graph.",
  shortDescription:
    "Independent software studio. Building Nodeself: behavioral modeling for personal transformation.",
  founded: "2024",
  location: "Bogotá, Colombia",
  teamSize: "3",
  stats: [
    { label: "Pre-Seed Target", value: "$150K–300K" },
    { label: "App Store Launch", value: "2026" },
    { label: "Target Price", value: "$9.99/mo" },
    { label: "Market Size", value: "$13B+" },
  ],
};

export const companyValues: CompanyValue[] = [
  {
    title: "Reveal, don't prescribe",
    description:
      "The best software doesn't tell you what to do. It shows you what you couldn't see. Nodeself doesn't coach. It maps, models, and mirrors.",
    icon: "eye",
  },
  {
    title: "Structure over noise",
    description:
      "Behavioral change isn't random. It has patterns, cycles, causal chains. Our job is to surface that structure, not to gamify it or flatten it.",
    icon: "code",
  },
  {
    title: "Privacy by design",
    description:
      "Your behavioral data is the most sensitive data that exists. Everything stays on your device. No persistent cloud storage of personal text. Ever.",
    icon: "shield",
  },
  {
    title: "Built to last",
    description:
      "Every architecture decision in Nodeself is made to endure. Strict TypeScript, SQLite-first, deterministic simulation engine. Not a prototype. A platform.",
    icon: "book",
  },
];

export const methodology: MethodologyStep[] = [
  {
    number: "01",
    title: "Check In",
    description:
      "Write in natural language. No templates, no forms. Nodeself extracts the behavioral structure hidden in your words: nodes, connections, causal relationships.",
  },
  {
    number: "02",
    title: "Graph Updates",
    description:
      "Every check-in strengthens or weakens nodes. Habits, decisions, emotional states: they're all connected. The graph evolves with you.",
  },
  {
    number: "03",
    title: "Decay Happens",
    description:
      "If you stop registering, nodes fade. Silence is data. The graph shows you what you've been ignoring, not just what you've been doing.",
  },
  {
    number: "04",
    title: "Simulate",
    description:
      "Run forward simulations. What happens to your graph if you maintain this habit for 30 days? What if you drop it? The model answers.",
  },
];
