"use client";

import type { NavItem } from "@/data/navigation";
import Icon from "@/components/atoms/Icon";

interface NavItemMoleculeProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

export default function NavItemMolecule({
  item,
  isActive,
  onClick,
}: NavItemMoleculeProps) {
  return (
    <li>
      <a
        href={item.href}
        className={isActive ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          onClick();
          const target = document.querySelector(item.href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <Icon name={item.icon} className="navicon" />
        <span>{item.label}</span>
      </a>
    </li>
  );
}
