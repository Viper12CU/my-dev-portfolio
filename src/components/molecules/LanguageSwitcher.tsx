"use client";

import { useState, useRef, useEffect } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const languages = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const commonT = useTranslations("Common");

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <li ref={rootRef} className="lang-switcher">
      <button
        type="button"
        className={`lang-switcher-toggle${open ? " active" : ""}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Languages className="navicon" size={20} aria-hidden="true" />
        <span>{commonT("language")}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`lang-switcher-chevron${open ? " is-open" : ""}`}
        />
      </button>

      <ul
        className={`lang-switcher-menu${open ? " is-open" : ""}`}
        role="menu"
        aria-label="Seleccionar idioma"
        aria-hidden={!open}
      >
        {languages.map((lang) => (
          <li key={lang.code} role="none">
            <button
              type="button"
              role="menuitem"
              className="lang-switcher-option"
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setOpen(false);
                router.replace(pathname, { locale: lang.code });
              }}
            >
              <span>{lang.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}
