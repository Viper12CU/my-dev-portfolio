"use client";

import { useRouter } from "next/navigation";
import type { NavItem } from "@/data/navigation";
import Icon from "@/components/atoms/Icon";

interface NavItemMoleculeProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
  isHomePage: boolean;
}

export default function NavItemMolecule({
  item,
  isActive,
  onClick,
  isHomePage,
}: NavItemMoleculeProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Cerrar menú primero (importante en móvil)
    onClick();

    if (isHomePage) {
      e.preventDefault();
      const target = document.querySelector(item.href);
      if (target) {
        // history push para actualizar hash sin recarga
        history.pushState(null, "", item.href);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Desde páginas de detalle (/portfolio/*, /services/*) navegar a home con hash
      // Dejar que router.push haga la navegación; actualizar hash manualmente si ya estamos en "/"
      e.preventDefault();
      router.push(`/${item.href}`);
    }
  };

  return (
    <li>
      <a
        href={isHomePage ? item.href : `/${item.href}`}
        className={isActive ? "active" : ""}
        onClick={handleClick}
      >
        <Icon name={item.icon} className="navicon" />
        <span>{item.label}</span>
      </a>
    </li>
  );
}
