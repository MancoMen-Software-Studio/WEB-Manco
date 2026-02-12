import { ROUTES } from "@/lib/constants";
import type { NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  { label: "Services", href: ROUTES.services },
  { label: "About", href: ROUTES.about },
  { label: "Projects", href: ROUTES.projects },
  { label: "Contact", href: ROUTES.contact },
];
