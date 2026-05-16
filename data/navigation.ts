import { ROUTES } from "@/lib/constants";
import type { NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  { label: "Nodeself", href: ROUTES.projects, key: "nodeself" },
  { label: "Studio", href: ROUTES.about, key: "studio" },
  { label: "Contact", href: ROUTES.contact, key: "contact" },
];
