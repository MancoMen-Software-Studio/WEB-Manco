import { ROUTES } from "@/lib/constants";
import type { NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  { label: "Nodeself", href: ROUTES.projects },
  { label: "Studio", href: ROUTES.about },
  { label: "Contact", href: ROUTES.contact },
];
