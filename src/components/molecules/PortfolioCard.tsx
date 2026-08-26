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
          <a href={item.appUrl} title="View application" className="details-link" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Icon name="bi-box-arrow-up-right" />
          </a>
        </div>
      </Link>
    </div>
  );
}
