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

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Cerrar con ESC y bloquear scroll del body cuando menú móvil está abierto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && isOpen) {
        const nav = document.getElementById("navmenu");
        if (!nav) return;
        const focusable = nav.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      const nav = document.getElementById("navmenu");
      if (nav) {
        const firstLink = nav.querySelector<HTMLElement>('a[href], button');
        firstLink?.focus();
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  // Cerrar al cambiar de ruta (ej. router.push desde NavItem en páginas de detalle)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    close();
    // Solo ejecutar al cambiar pathname, no en montaje inicial si ya está cerrado
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Cerrar automáticamente si se pasa a desktop (xl)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const handler = () => {
      if (mq.matches) close();
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [close]);

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
    <>
      {/* Botón fuera del header: evita quedar oculto por left:-100% en móvil y garantiza click en viewport */}
      <button
        type="button"
        className="header-toggle d-xl-none"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="header"
        aria-label="Toggle navigation"
      >
        <MorphIcon size={24} icon={isOpen ? icons.X : icons.Menu} />
      </button>

      {/* Overlay para cerrar al tocar fuera en móvil */}
      {isOpen && (
        <div
          className="d-xl-none"
          onClick={close}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            zIndex: 996,
          }}
        />
      )}

      <header
        id="header"
        className={`header d-flex flex-column justify-content-center ${isOpen ? "header-show" : ""}`}
      >
        <nav id="navmenu" className="navmenu" aria-label="Navegación principal">
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
    </>
  );
}
