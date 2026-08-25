export interface NavItem {
  href: string;
  icon: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "#hero", icon: "bi-house", label: "Home" },
  { href: "#about", icon: "bi-person", label: "About" },
  { href: "#resume", icon: "bi-file-earmark-text", label: "Resume" },
  { href: "#portfolio", icon: "bi-images", label: "Portfolio" },
  { href: "#services", icon: "bi-hdd-stack", label: "Services" },
  { href: "#contact", icon: "bi-envelope", label: "Contact" },
];
