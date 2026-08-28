import Link from "next/link";
import Image from "next/image";
import type { PortfolioItem } from "@/data/portfolio";
import Icon from "@/components/atoms/Icon";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
      <Link href={`/portfolio/${item.id}`} className="portfolio-card-link">
        <Image
          src={item.imageUrl}
          className="img-fluid"
          alt={item.title}
          width={873}
          height={885}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ height: "auto", width: "100%" }}
        />
        <div className="portfolio-info">
          <div className="portfolio-info-content">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
          <span
            role="button"
            title="View application"
            className="details-link"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(item.appUrl, "_blank", "noopener,noreferrer");
            }}
          >
            <Icon name="ExternalLink" />
          </span>
        </div>
      </Link>
    </div>
  );
}
