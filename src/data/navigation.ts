export interface NavItem {
  href: string;
  icon: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "#hero", icon: "Home", label: "Home" },
  { href: "#about", icon: "User", label: "About" },
  { href: "#resume", icon: "FileText", label: "Resume" },
  { href: "#portfolio", icon: "Images", label: "Portfolio" },
  { href: "#services", icon: "Server", label: "Services" },
  { href: "#contact", icon: "Mail", label: "Contact" },
];
