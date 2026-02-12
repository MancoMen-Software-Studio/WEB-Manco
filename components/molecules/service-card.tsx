"use client";

import Link from "next/link";
import { Icon } from "@/components/atoms/icon";
import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
}

export function ServiceCard({
  title,
  subtitle,
  description,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group hover:border-electric"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        borderRadius: 16,
        border: "1px solid #262626",
        background: "#1a1a1a",
        padding: 40,
        transition: "all 0.5s",
        textDecoration: "none",
      }}
    >
      <div
        className="group-hover:bg-electric group-hover:text-white"
        style={{
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          background: "rgba(0,102,255,0.1)",
          color: "#0066FF",
          transition: "all 0.5s",
        }}
      >
        <Icon name={icon} size={28} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          className="font-mono"
          style={{
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#0066FF",
          }}
        >
          {subtitle}
        </span>
        <Heading as="h3" className="text-white group-hover:text-electric">
          {title}
        </Heading>
        <Text>{description}</Text>
      </div>
      <div
        className="group-hover:opacity-100"
        style={{
          marginTop: "auto",
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 14,
          fontWeight: 500,
          color: "#0066FF",
          opacity: 0,
          transition: "all 0.3s",
        }}
      >
        <span>Learn more</span>
        <Icon name="arrow" size={16} />
      </div>
    </Link>
  );
}
