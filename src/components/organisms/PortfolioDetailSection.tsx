"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  BlossomCarousel,
  BlossomPrev,
  BlossomNext,
} from "@blossom-carousel/react";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioDetailSectionProps {
  item: PortfolioItem;
}

export default function PortfolioDetailSection({ item }: PortfolioDetailSectionProps) {
  const t = useTranslations("PortfolioDetail");

  return (
    <section id="portfolio-details" className="portfolio-details section">
      <div className="container" data-aos="fade-up">
        <div className="bloom-carousel-wrapper">
          <div className="bloom-carousel-container">
          <BlossomCarousel
            id="portfolio-carousel"
            className="carousel grid! h-full snap-x snap-mandatory auto-cols-[100%] grid-flow-col"
          >
            {item.detailImages.map((img, index) => (
              <div key={index} data-blossom-slide className="slide size-full overflow-hidden snap-center">
                <div className="card size-full">
                  <Image src={img} alt={`${item.title} - ${index + 1}`} fill sizes="900px" className="object-cover" />
                </div>
              </div>
            ))}
            </BlossomCarousel>

            <BlossomPrev for="portfolio-carousel" className="bloom-btn bloom-btn-prev">
              <ChevronLeft size={24} />
            </BlossomPrev>
            <BlossomNext for="portfolio-carousel" className="bloom-btn bloom-btn-next">
              <ChevronRight size={24} />
            </BlossomNext>
          </div>
        </div>

        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="portfolio-description">
              <h2>{item.title}</h2>
              {item.detailsDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-info">
              <h3>{t("projectInformation")}</h3>
              <ul>
                <li><strong>{t("category")}</strong> {item.category.replace("filter-", "").charAt(0).toUpperCase() + item.category.replace("filter-", "").slice(1)}</li>
                <li><strong>{t("client")}</strong> {item.client}</li>
                <li><strong>{t("projectDate")}</strong> {item.projectDate}</li>
                <li><strong>{t("technologies")}</strong> {item.technologies.join(", ")}</li>
                <li><strong>{t("projectUrl")}</strong> <a href={item.appUrl} target="_blank" rel="noopener noreferrer">{item.appUrl.replace("https://", "")}</a></li>
                <li>
                  <a href={item.appUrl} className="btn-visit align-self-start" target="_blank" rel="noopener noreferrer">
                    {t("visitWebsite")}
                  </a>
                </li>
                <li>
                  <a href={item.githubUrl} className="btn-visit align-self-start" target="_blank" rel="noopener noreferrer">
                    {t("viewCode")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
