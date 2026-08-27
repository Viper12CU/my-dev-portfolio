import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, getServiceBySlug } from "@/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Service Details`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="col-lg-8 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
      <img
        src={service.detailImage}
        alt={service.title}
        className="img-fluid services-img"
      />

      <h3>{service.title}</h3>

      {service.longDescription.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <ul>
        {service.features.map((feature, index) => (
          <li key={index}>
            <i className="bi bi-check-circle"></i>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="service-detail-divider" data-aos="fade-up">
        <h4>Technologies</h4>
        <div className="service-tech-tags">
          {service.technologies.map((tech, index) => (
            <span key={index} className="service-tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="service-detail-divider" data-aos="fade-up">
        <h4>How I Work</h4>
        <div className="service-process">
          {service.process.map((step, index) => (
            <div key={index} className="service-process-step">
              <div className="service-process-number">{index + 1}</div>
              <div className="service-process-content">
                <h5>{step.step}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="service-detail-divider" data-aos="fade-up">
        <h4>What You Get</h4>
        <ul className="service-deliverables">
          {service.deliverables.map((item, index) => (
            <li key={index}>
              <i className="bi bi-check2-circle"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Duration + CTA */}
      <div className="service-detail-cta" data-aos="fade-up">
        <div className="service-duration">
          <i className="bi bi-clock-history"></i>
          <span>Typical duration: <strong>{service.duration}</strong></span>
        </div>
        <Link href={service.cta.href} className="btn-get-started">
          {service.cta.text}
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
