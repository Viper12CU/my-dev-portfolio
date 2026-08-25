import type { PortfolioItem } from "@/data/portfolio";
import Icon from "@/components/atoms/Icon";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="portfolio-item isotope-item">
      <img src={item.imageUrl} className="w-full h-auto" alt={item.title} />
      <div className="portfolio-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <a
          href={item.imageUrl}
          title={item.title}
          data-gallery={item.gallery}
          className="glightbox preview-link"
        >
          <Icon name="bi-zoom-in" />
        </a>
        <a href={item.link} title="More Details" className="details-link">
          <Icon name="bi-link-45deg" />
        </a>
      </div>
    </div>
  );
}
