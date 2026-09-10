import Icon from "@/components/atoms/Icon";
import Link from "next/link";

interface SocialLinkProps {
  icon: string;
  href: string;
  label?: string;
}

export default function SocialLink({ icon, href, label }: SocialLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      style={{ minWidth: "44px", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
    >
      <Icon name={icon} aria-hidden="true" />
    </Link>
  );
}
