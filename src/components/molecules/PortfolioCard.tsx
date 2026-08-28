import Link from "next/link";
import type { PortfolioItem } from "@/data/portfolio";
import Icon from "@/components/atoms/Icon";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
      <Link href={`/portfolio/${item.id}`} className="portfolio-card-link">
        <img src={item.imageUrl} className="img-fluid" alt={item.title} />
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
