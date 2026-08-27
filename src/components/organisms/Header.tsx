"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide";
import { navItems } from "@/data/navigation";
import NavItemMolecule from "@/components/molecules/NavItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.href,
        el: document.querySelector(item.href),
      }));

      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el && (section.el as HTMLElement).offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(() => {
    if (isOpen) setIsOpen(false);
  }, [isOpen]);

  return (
    <header
      id="header"
      className={`header d-flex flex-column justify-content-center ${isOpen ? "header-show" : ""}`}
    >
      <button
        className="header-toggle d-xl-none"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <MorphIcon size={24} icon={isOpen ? X : Menu} />
      </button>

      <nav id="navmenu" className="navmenu">
        <ul>
          {navItems.map((item) => (
            <NavItemMolecule
              key={item.href}
              item={item}
              isActive={activeSection === item.href}
              onClick={handleNavClick}
              isHomePage={isHomePage}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
