"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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
                  <Image src={img} alt={`${item.title} - ${index + 1}`}  fill sizes="900px" className="object-cover" />
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
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong> {item.category.replace("filter-", "").charAt(0).toUpperCase() + item.category.replace("filter-", "").slice(1)}</li>
                <li><strong>Client</strong> {item.client}</li>
                <li><strong>Project date</strong> {item.projectDate}</li>
                <li><strong>Technologies</strong> {item.technologies.join(", ")}</li>
                <li><strong>Project URL</strong> <a href={item.appUrl} target="_blank" rel="noopener noreferrer">{item.appUrl.replace("https://", "")}</a></li>
                <li>
                  <a href={item.appUrl} className="btn-visit align-self-start" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </li>
                <li>
                  <a href={item.githubUrl} className="btn-visit align-self-start" target="_blank" rel="noopener noreferrer">
                    View Code
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
