import { useTranslations } from "next-intl";
import SectionTitle from "@/components/atoms/SectionTitle";
import ServiceCard from "@/components/molecules/ServiceCard";
import type { ServiceItem } from "@/data/services/types";

export default function ServicesSection() {
  const t = useTranslations("Services");
  const items = t.raw("items") as ServiceItem[];

  return (
    <section id="services" className="services section">
      <SectionTitle
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <div className="container">
        <div className="row gy-4">
          {items.map((item: ServiceItem, i: number) => (
            <div
              key={i}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 100}
            >
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
