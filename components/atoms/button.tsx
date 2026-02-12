"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  className?: string;
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  magnetic = true,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const magneticRef = useMagnetic({ strength: 0.2 });

  const baseStyle: React.CSSProperties = {
    paddingLeft: size === "large" ? 48 : 36,
    paddingRight: size === "large" ? 48 : 36,
    paddingTop: size === "large" ? 18 : 14,
    paddingBottom: size === "large" ? 18 : 14,
    borderRadius: 9999,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    fontSize: size === "large" ? 16 : 14,
    lineHeight: 1.5,
    whiteSpace: "nowrap" as const,
    transition: "all 0.3s ease",
    width: fullWidth ? "100%" : undefined,
  };

  const classes = cn(
    variant === "primary" &&
      "bg-electric text-white hover:bg-electric-light active:bg-electric-dark",
    variant === "secondary" &&
      "border border-gray-800 bg-transparent text-white hover:border-electric hover:text-electric",
    variant === "ghost" &&
      "bg-transparent text-gray-400 hover:text-white",
    disabled && "pointer-events-none opacity-50",
    className
  );

  const content = (
    <span className="relative z-10">{children}</span>
  );

  if (href) {
    return (
      <div ref={magnetic ? magneticRef : undefined} style={{ display: fullWidth ? "block" : "inline-block" }}>
        <Link href={href} className={classes} style={baseStyle}>
          {content}
        </Link>
      </div>
    );
  }

  return (
    <div ref={magnetic ? magneticRef : undefined} style={{ display: fullWidth ? "block" : "inline-block" }}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
        style={baseStyle}
      >
        {content}
      </button>
    </div>
  );
}
