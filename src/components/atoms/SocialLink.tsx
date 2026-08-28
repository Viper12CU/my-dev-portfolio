import Icon from "@/components/atoms/Icon";

interface SocialLinkProps {
  icon: string;
  href: string;
}

export default function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <a href={href}>
      <Icon name={icon} />
    </a>
  );
}
