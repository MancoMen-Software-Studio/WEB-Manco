import { ROUTES } from "@/lib/constants";
import type { NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  { label: "Nexus", href: ROUTES.projects },
  { label: "Studio", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];
