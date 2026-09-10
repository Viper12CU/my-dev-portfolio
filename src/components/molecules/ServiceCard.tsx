import Link from "next/link";
import type { ServiceItem } from "@/data/services";
import Icon from "@/components/atoms/Icon";

interface ServiceCardProps {
  item: ServiceItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div className={`service-item position-relative ${item.variant}`}>
      <div className="icon">
        <svg
          className="shape"
          width="100"
          height="100"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke="none"
            strokeWidth="0"
            fill="#f5f5f5"
            d={item.svgPath}
          />
        </svg>
        <Icon name={item.icon} size={48} aria-hidden="true" />
      </div>
      <Link href={`/services/${item.slug}`} className="stretched-link">
        <h3>{item.title}</h3>
      </Link>
      <p>{item.description}</p>
    </div>
  );
}
