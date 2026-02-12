import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    subtitle: "Enterprise-Grade Backend & API Engineering",
    description:
      "We architect and build production-grade software systems with .NET, C#, and cloud-native infrastructure. From secure transaction APIs to event-driven microservices, every solution is engineered for scale, security, and long-term maintainability.",
    icon: "code",
    features: [
      "Backend API development with .NET and ASP.NET Core",
      "Microservices architecture with CQRS and MediatR",
      "Enterprise security (OAuth 2.0, JWT, AES-256 encryption)",
      "Event-driven systems with Azure Service Bus and RabbitMQ",
      "Database design with PostgreSQL, Redis, and Entity Framework Core",
      "CI/CD pipelines with GitHub Actions and Azure DevOps",
    ],
    technologies: [
      ".NET 9",
      "C# 13",
      "ASP.NET Core",
      "PostgreSQL",
      "Redis",
      "Azure Service Bus",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    process: [
      {
        title: "Discovery & Architecture",
        description:
          "Deep-dive into your business requirements. We map domain boundaries, define system architecture, and establish technical foundations with security-first design.",
      },
      {
        title: "Iterative Development",
        description:
          "Two-week sprints with continuous delivery. Every iteration produces working, tested software with full transparency and code quality enforcement via CodeQL and SonarQube.",
      },
      {
        title: "Quality Assurance",
        description:
          "Automated testing with xUnit, NSubstitute, and Testcontainers. Performance benchmarks and security scanning ensure production readiness at every stage.",
      },
      {
        title: "Deployment & Observability",
        description:
          "Zero-downtime deployments on Azure Container Apps. Full OpenTelemetry observability with Seq, Grafana, and Azure Monitor for end-to-end system visibility.",
      },
    ],
  },
  {
    slug: "frontend-data-visualization",
    title: "Frontend & Data Visualization",
    subtitle: "Real-Time Dashboards & Modern Web Applications",
    description:
      "We build high-performance web applications and real-time data dashboards with React, Next.js, and custom WebGL visualizations. From enterprise analytics platforms to consumer-facing interfaces, we deliver pixel-perfect experiences that scale.",
    icon: "eye",
    features: [
      "React 19 and Next.js 15 application development",
      "Real-time data visualization with D3.js and custom WebGL shaders",
      "Live data streaming with SignalR and WebSocket",
      "State management with Zustand and TanStack Query",
      "Performance optimization with Web Workers and virtualization",
      "WCAG 2.1 AA accessibility compliance",
    ],
    technologies: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS 4",
      "D3.js",
      "Recharts",
      "WebGL",
      "SignalR",
      "Zustand",
      "Playwright",
    ],
    process: [
      {
        title: "UX Research & Design",
        description:
          "Data-driven interface design focused on information hierarchy, user workflows, and accessibility requirements from day one.",
      },
      {
        title: "Component Architecture",
        description:
          "Modular component library with atomic design patterns. Storybook-driven development ensures consistency across the entire application.",
      },
      {
        title: "Performance Engineering",
        description:
          "Web Workers for heavy computation, virtualized rendering for large datasets, Service Workers for offline capabilities, and bundle optimization for fast initial loads.",
      },
      {
        title: "Testing & Deployment",
        description:
          "Comprehensive testing with Vitest and Playwright. Deployed on Vercel or Azure with CI/CD via GitHub Actions and automated Lighthouse audits.",
      },
    ],
  },
  {
    slug: "xr-immersive-solutions",
    title: "XR & Immersive Solutions",
    subtitle: "Enterprise Training & Simulation Platforms",
    description:
      "We develop cross-platform XR experiences for enterprise training, simulation, and visualization using Unity 6, DOTS architecture, and real-time multiplayer networking. From VR headsets to WebGL, we deliver immersive solutions that run everywhere.",
    icon: "strategy",
    features: [
      "Unity 6 LTS development with DOTS high-performance architecture",
      "Cross-platform XR: Meta Quest, Desktop, WebGL, and iOS",
      "Real-time multiplayer with Photon Fusion 2",
      "Enterprise backend integration with REST APIs and OAuth 2.0",
      "Foveated rendering and performance optimization for VR",
      "Progressive asset loading and Brotli compression for web",
    ],
    technologies: [
      "Unity 6 LTS",
      "Unity DOTS",
      "Burst Compiler",
      "XR Interaction Toolkit",
      "Photon Fusion 2",
      "Vulkan",
      "DirectX 12",
      "WebGL 2.0",
      "SignalR",
      "Azure",
    ],
    process: [
      {
        title: "Concept & Prototyping",
        description:
          "Rapid prototyping of XR interactions and training scenarios. We validate concepts on target hardware before committing to full development.",
      },
      {
        title: "Performance-First Development",
        description:
          "DOTS-first architecture with Entities, Burst Compiler, and Job System ensures 60fps on all target platforms including standalone VR headsets.",
      },
      {
        title: "Multiplayer & Backend",
        description:
          "Photon Fusion 2 for real-time multiplayer simulation with authoritative server architecture. SignalR for real-time backend events and progress tracking.",
      },
      {
        title: "Cross-Platform Deployment",
        description:
          "Single codebase deployed to Meta Quest 3, Windows Desktop, WebGL, and iOS. Automated builds via GitHub Actions with platform-specific optimizations.",
      },
    ],
  },
];
