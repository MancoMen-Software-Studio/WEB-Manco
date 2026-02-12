import { Badge } from "@/components/atoms/badge";

interface TechBadgeGroupProps {
  technologies: string[];
}

export function TechBadgeGroup({ technologies }: TechBadgeGroupProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {technologies.map((tech) => (
        <Badge key={tech} variant="outline">
          {tech}
        </Badge>
      ))}
    </div>
  );
}
