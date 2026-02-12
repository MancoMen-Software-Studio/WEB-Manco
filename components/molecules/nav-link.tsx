"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className="hover:text-white"
      style={{
        position: "relative",
        fontSize: 14,
        fontWeight: 500,
        color: isActive ? "white" : "#a3a3a3",
        transition: "color 0.3s",
        textDecoration: "none",
      }}
    >
      {children}
      {isActive && (
        <span
          style={{
            position: "absolute",
            bottom: -4,
            left: 0,
            height: 1,
            width: "100%",
            background: "#0066FF",
          }}
        />
      )}
    </Link>
  );
}
