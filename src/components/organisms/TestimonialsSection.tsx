"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/atoms/SectionTitle";
import TestimonialCard from "@/components/molecules/TestimonialCard";

export default function TestimonialsSection() {
  const t = useTranslations("Testimonials");
  const items = t.raw("items") as { id: number; name: string; role: string; quote: string; imageUrl: string }[];

  useEffect(() => {
    const loadSwiper = async () => {
      const Swiper = (await import("swiper")).default;
      const { Navigation, Pagination, Autoplay } = await import("swiper/modules");

      const swiperEl = document.querySelector(".init-swiper");
      if (swiperEl) {
        const configEl = swiperEl.querySelector(".swiper-config");
        if (configEl) {
          const config = JSON.parse(configEl.innerHTML.trim());
          new Swiper(swiperEl as HTMLElement, {
            modules: [Navigation, Pagination, Autoplay],
            ...config,
          });
        }
      }
    };

    loadSwiper();
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      <SectionTitle
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <script
            type="application/json"
            className="swiper-config"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                loop: true,
                speed: 600,
                autoplay: { delay: 5000 },
                slidesPerView: "auto",
                pagination: {
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true,
                },
              }),
            }}
          />
          <div className="swiper-wrapper">
            {items.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
  );
}
