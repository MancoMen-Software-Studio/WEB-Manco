export const ROUTES = {
  home: "/",
  services: "/services",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
} as const;

export const SITE = {
  name: "MancoMen Software Studio",
  tagline: "Software that reveals the structure of human behavior",
  description:
    "MancoMen Software Studio is building Nodeself — a behavioral modeling engine that maps personal change as a living graph. Causal modeling, decay engine, forward simulation. The graph is the product. Currently seeking pre-seed funding.",
  url: "https://mancomen.com",
  locale: "en-US",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/mancomen",
  github: "https://github.com/MancoMartinez",
} as const;

export const CONTACT = {
  email: "contact@mancomen.com",
  address: "Bogotá, Colombia",
} as const;

export const EASING = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,
};
