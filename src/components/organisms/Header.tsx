"use client";

import { useState, useEffect, useCallback } from "react";
import { navItems } from "@/data/navigation";
import NavItemMolecule from "@/components/molecules/NavItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

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
      className={`header flex-col justify-content-center ${isOpen ? "header-show" : ""}`}
    >
      <i
        className={`header-toggle xl:hidden bi ${isOpen ? "bi-x" : "bi-list"}`}
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggle();
        }}
      />

      <nav id="navmenu" className="navmenu">
        <ul>
          {navItems.map((item) => (
            <NavItemMolecule
              key={item.href}
              item={item}
              isActive={activeSection === item.href}
              onClick={handleNavClick}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
