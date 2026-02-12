"use client";

import Link from "next/link";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Badge } from "@/components/atoms/badge";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  href: string;
  color: string;
}

export function ProjectCard({
  title,
  subtitle,
  category,
  technologies,
  href,
  color,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group hover:border-electric"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 16,
        border: "1px solid #262626",
        background: "#1a1a1a",
        transition: "all 0.5s",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 280,
          width: "100%",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
        }}
      >
        <div
          className="group-hover:opacity-40"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            transition: "opacity 0.5s",
            background: `radial-gradient(circle at 50% 50%, ${color}40 0%, transparent 70%)`,
          }}
        />
        <div style={{ position: "absolute", bottom: 24, left: 24 }}>
          <Badge>{category}</Badge>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Heading as="h3" className="text-white group-hover:text-electric">
            {title}
          </Heading>
          <Text>{subtitle}</Text>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
