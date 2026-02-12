import type { CompanyValue, MethodologyStep } from "@/lib/types";

export const companyInfo = {
  name: "MancoMen Software Studio",
  legalName: "MancoMen Software Studio S.A.S.",
  tagline: "Built to Scale, Built to Last",
  description:
    "We are a Bogota-based enterprise software consultancy that bridges the gap between large system integrators and independent freelancers. Our senior engineering teams deliver production-grade systems with the agility of a startup and the rigor of an enterprise.",
  shortDescription:
    "Enterprise software consultancy delivering scalable, production-grade systems for ambitious businesses.",
  founded: "2024",
  location: "Bogota, Colombia",
  teamSize: "10-25",
  stats: [
    { label: "Projects Delivered", value: "30+" },
    { label: "Client Retention", value: "95%" },
    { label: "Years Combined Experience", value: "50+" },
    { label: "Countries Served", value: "8" },
  ],
};

export const companyValues: CompanyValue[] = [
  {
    title: "Engineering Excellence",
    description:
      "We write code that other engineers enjoy maintaining. Clean architecture, comprehensive testing, and thoughtful documentation are non-negotiable.",
    icon: "code",
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes. Clients have full visibility into our process, codebase, and decision-making. We explain the trade-offs, not just the solution.",
    icon: "eye",
  },
  {
    title: "Ownership Mentality",
    description:
      "We treat every project as if it were our own product. This means proactive communication, thoughtful architecture, and a genuine stake in outcomes.",
    icon: "shield",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves fast. We invest in our team's growth, staying current with industry best practices and bringing that knowledge to every engagement.",
    icon: "book",
  },
];

export const methodology: MethodologyStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business deeply — goals, constraints, users, and existing systems. This phase produces a clear technical specification and architectural blueprint.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architecture decisions are made upfront with rigor. We design systems for the requirements of today and the scale of tomorrow, documenting every trade-off.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Iterative two-week sprints with continuous delivery. Every cycle produces working software, tested and ready for review. Full transparency via shared dashboards.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Zero-downtime deployments with comprehensive monitoring. We don't just hand off code — we ensure your team can operate, extend, and scale the system independently.",
  },
];
