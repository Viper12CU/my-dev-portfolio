"use client";

import { useEffect, useRef } from "react";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioDetailSectionProps {
  item: PortfolioItem;
}

export default function PortfolioDetailSection({ item }: PortfolioDetailSectionProps) {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initSwiper = async () => {
      const Swiper = (await import("swiper")).default;
      const { Navigation, Pagination, Autoplay } = await import("swiper/modules");

      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Navigation, Pagination, Autoplay],
          loop: true,
          speed: 600,
          autoplay: { delay: 5000 },
          slidesPerView: "auto",
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        });
      }
    };

    initSwiper();
  }, []);

  return (
    <section id="portfolio-details" className="portfolio-details section">
      <div className="container" data-aos="fade-up">
        <div ref={swiperRef} className="portfolio-details-slider swiper init-swiper">
          <div className="swiper-wrapper align-items-center">
            {item.images.map((img, index) => (
              <div key={index} className="swiper-slide">
                <img src={img} alt={`${item.title} - ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
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
