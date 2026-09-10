"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/atoms/SectionTitle";
import PortfolioCard from "@/components/molecules/PortfolioCard";
import type { PortfolioItem } from "@/data/portfolio";

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Portfolio");
  const filters = t.raw("filters") as { label: string; filter: string }[];
  const items = t.raw("items") as PortfolioItem[];

  useEffect(() => {
    let isotopeInstance: { destroy: () => void } | null = null;

    const loadIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;
      const imagesLoaded = (await import("imagesloaded")).default;

      if (containerRef.current) {
        const isotopeContainer = containerRef.current.querySelector(
          ".isotope-container"
        );

        if (isotopeContainer) {
          imagesLoaded(isotopeContainer as HTMLElement, () => {
            const instance = new Isotope(isotopeContainer as HTMLElement, {
              itemSelector: ".isotope-item",
              layoutMode: "masonry",
              filter: "*",
              sortBy: "original-order",
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            isotopeInstance = { destroy: () => (instance as any).destroy() };
          });
        }
      }
    };

    loadIsotope();

    return () => {
      if (isotopeInstance) {
        isotopeInstance.destroy();
      }
    };
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
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="container">
        <div
          ref={containerRef}
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters "
            data-aos="fade-up"
            data-aos-delay="100"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {filters.map((filter, i) => (
              <li
                key={i}
                data-filter={filter.filter}
                className={i === 0 ? "filter-active" : ""}
                onClick={(e) => handleFilterClick(e)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleFilterClick(e as unknown as React.MouseEvent<HTMLLIElement>);
                  }
                }}
                tabIndex={0}
                role="tab"
                aria-selected={i === 0}
              >
                {filter.label}
              </li>
            ))}
          </ul>

          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {items.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
