import { servicesData } from "@/data/services";
import SectionTitle from "@/components/atoms/SectionTitle";
import ServiceCard from "@/components/molecules/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="services section">
      <SectionTitle
        title={servicesData.title}
        subtitle={servicesData.subtitle}
      />

      <div className="container">
        <div className="row gy-4">
          {servicesData.items.map((item, i) => (
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
