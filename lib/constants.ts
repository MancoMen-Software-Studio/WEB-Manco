export const ROUTES = {
  home: "/",
  services: "/services",
  about: "/about",
  projects: "/projects",
  contact: "/contact",
} as const;

export const SITE = {
  name: "MancoMen Software Studio",
  tagline: "Built to Scale, Built to Last",
  description:
    "MancoMen Software Studio is a Bogota-based enterprise software consultancy specializing in .NET backend systems, React data visualization platforms, and Unity XR immersive solutions. We deliver scalable, production-grade software for ambitious businesses.",
  url: "https://mancomen.com",
  locale: "en-US",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/mancomen",
  github: "https://github.com/MancoMen-Software-Studio",
} as const;

export const CONTACT = {
  email: "mancomenstudio@gmail.com",
  address: "Bogota, Colombia",
} as const;

export const EASING = {
  expoOut: [0.16, 1, 0.3, 1] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,
};
