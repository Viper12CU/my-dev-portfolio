"use client";

import { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import SectionTitle from "@/components/atoms/SectionTitle";
import PortfolioCard from "@/components/molecules/PortfolioCard";

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;
      const imagesLoaded = (await import("imagesloaded")).default;

      if (containerRef.current) {
        const isotopeContainer = containerRef.current.querySelector(
          ".isotope-container"
        );

        if (isotopeContainer) {
          imagesLoaded(isotopeContainer as HTMLElement, () => {
            new Isotope(isotopeContainer as HTMLElement, {
              itemSelector: ".isotope-item",
              layoutMode: "masonry",
              filter: "*",
              sortBy: "original-order",
            });
          });
        }
      }
    };

    loadIsotope();
  }, []);

  const handleFilterClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const parent = e.currentTarget.parentElement;
    parent
      ?.querySelectorAll(".filter-active")
      .forEach((el) => el.classList.remove("filter-active"));
    e.currentTarget.classList.add("filter-active");
  };

  return (
    <section id="portfolio" className="portfolio section">
      <SectionTitle
        title={portfolioData.title}
        subtitle={portfolioData.subtitle}
      />

      <div className="container mx-auto px-4">
        <div
          ref={containerRef}
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {portfolioData.filters.map((filter, i) => (
              <li
                key={i}
                data-filter={filter.filter}
                className={i === 0 ? "filter-active" : ""}
                onClick={(e) => handleFilterClick(e)}
              >
                {filter.label}
              </li>
            ))}
          </ul>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioData.items.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
