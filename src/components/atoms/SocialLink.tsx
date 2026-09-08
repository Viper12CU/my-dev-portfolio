import Icon from "@/components/atoms/Icon";
import Link from "next/link";

interface SocialLinkProps {
  icon: string;
  href: string;
}

export default function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <Link href={href} >
      <Icon name={icon} />
    </Link>
  );
}
