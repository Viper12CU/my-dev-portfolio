"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { MorphIcon } from "morphicons/react";
import { icons } from "lucide";
import { Download } from "lucide-react";
import { navItems } from "@/data/navigation";
import NavItemMolecule from "@/components/molecules/NavItem";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import { usePathname } from "@/i18n/navigation";

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

  const commonT = useTranslations("Common");
  const navT = useTranslations("Nav");
  const navItemsTranslated = navItems.map((i) => ({
    ...i,
    label: navT(
      i.label.toLowerCase() as
        | "home"
        | "about"
        | "resume"
        | "portfolio"
        | "services"
        | "contact",
    ),
  }));

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && isOpen) {
        const nav = document.getElementById("navmenu");
        if (!nav) return;
        const focusable = nav.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
        const firstLink = nav.querySelector<HTMLElement>("a[href], button");
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

  // Cerrar menú al cambiar de ruta (browser back/forward, router.push desde NavItem)
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setIsOpen(false);
    }
    prevPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const handler = () => {
      if (mq.matches) close();
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [close]);

  useEffect(() => {
    if (detailActive) return;
    if (!isHomePage) return;

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
      <button
        type="button"
        className="header-toggle d-xl-none"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls="header"
        aria-label={commonT("toggleNav")}
      >
        <MorphIcon size={24} icon={isOpen ? icons.X : icons.Menu} />
      </button>

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
        <nav id="navmenu" className="navmenu" aria-label={commonT("toggleNav")}>
          <ul>
            <LanguageSwitcher />
            <li>
              <a
                href="/assets/files/cv_fabian_lemus.pdf"
                download="CV_Fabian_Lemus.pdf"
                onClick={handleNavClick}
              >
                <Download className="navicon" size={20} />
                <span>{commonT("downloadCv")}</span>
              </a>
            </li>
            {navItemsTranslated.map((item) => (
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
