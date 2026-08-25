interface SocialLinkProps {
  icon: string;
  href: string;
}

export default function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <a href={href}>
      <i className={`bi ${icon}`} />
    </a>
  );
}
