"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { MorphIcon } from "morphicons/react";
import { icons } from "lucide";
import { Download } from "lucide-react";
import { navItems } from "@/data/navigation";
import NavItemMolecule from "@/components/molecules/NavItem";

function getActiveSectionForPath(pathname: string): string | null {
  if (pathname.startsWith("/portfolio")) return "#portfolio";
  if (pathname.startsWith("/services")) return "#services";
  return null;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState("#hero");
  const detailActive = getActiveSectionForPath(pathname);
  const effectiveActive = detailActive ?? activeSection;

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    // En páginas de detalle (portfolio/services) el activo viene de getActiveSectionForPath,
    // no se necesita scrollspy.
    if (detailActive) {
      return;
    }

    // Solo activar scrollspy en la página principal, donde existen las secciones #hero, #about, etc.
    if (!isHomePage) {
      return;
    }

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isHomePage, detailActive]);

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
        <MorphIcon size={24} icon={isOpen ? icons.X : icons.Menu} />
      </button>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a
              href="/assets/files/cv_fabian_lemus.pdf"
              download="CV_Fabian_Lemus.pdf"
              onClick={handleNavClick}
            >
              <Download className="navicon" size={20} />
              <span>Download CV</span>
            </a>
          </li>
          {navItems.map((item) => (
            <NavItemMolecule
              key={item.href}
              item={item}
              isActive={effectiveActive === item.href}
              onClick={handleNavClick}
              isHomePage={isHomePage}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
