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
    e.preventDefault();
    onClick();

    if (isHomePage) {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
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
