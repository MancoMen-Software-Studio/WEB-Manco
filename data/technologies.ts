import type { Technology } from "@/lib/types";

export const technologies: Technology[] = [
  { name: ".NET 9", category: "backend" },
  { name: "C# 13", category: "backend" },
  { name: "ASP.NET Core", category: "backend" },
  { name: "Entity Framework Core", category: "backend" },
  { name: "MediatR", category: "backend" },
  { name: "React 19", category: "frontend" },
  { name: "Next.js 15", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS 4", category: "frontend" },
  { name: "D3.js", category: "frontend" },
  { name: "PostgreSQL 17", category: "database" },
  { name: "Redis 7.4", category: "database" },
  { name: "IndexedDB", category: "database" },
  { name: "Azure", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "Terraform", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "Azure DevOps", category: "devops" },
  { name: "Unity 6 LTS", category: "xr" },
  { name: "Unity DOTS", category: "xr" },
  { name: "Photon Fusion 2", category: "xr" },
  { name: "XR Interaction Toolkit", category: "xr" },
];

export const techCategories: Record<string, string> = {
  backend: "Backend & Runtime",
  frontend: "Frontend & Visualization",
  database: "Databases",
  cloud: "Cloud & Hosting",
  devops: "DevOps & CI/CD",
  xr: "XR & Immersive",
};
