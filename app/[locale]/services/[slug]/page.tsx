import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { CheckCircle, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import type { ServiceItem } from "@/data/services";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    servicesData.items.map((item) => ({
      locale,
      slug: item.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "Services" });
  const services = t.raw("items") as ServiceItem[];
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: t("title") };

  return {
    title: `${service.title} | ${t("title")}`,
    description: service.description,
    openGraph: { title: service.title, description: service.description },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const t = await getTranslations("Services");
  const services = t.raw("items") as ServiceItem[];
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <div className="col-lg-8 ps-lg-5" data-aos="fade-up" data-aos-delay="200">
      <Image
        src={service.detailImage}
        alt={service.title}
        className="img-fluid services-img"
        width={1024}
        height={648}
        sizes="(max-width: 992px) 100vw, 700px"
        style={{ height: "auto", width: "100%" }}
      />

      <h3>{service.title}</h3>

      {service.longDescription.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <ul>
        {service.features.map((feature, index) => (
          <li key={index}>
            <CheckCircle size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="service-detail-divider" data-aos="fade-up">
        <h4>{t("technologies")}</h4>
        <div className="service-tech-tags">
          {service.technologies.map((tech, index) => (
            <span key={index} className="service-tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="service-detail-divider" data-aos="fade-up">
        <h4>{t("howIWork")}</h4>
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

      <div className="service-detail-divider" data-aos="fade-up">
        <h4>{t("whatYouGet")}</h4>
        <ul className="service-deliverables">
          {service.deliverables.map((item, index) => (
            <li key={index}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="service-detail-cta" data-aos="fade-up">
        <div className="service-duration">
          <Clock size={18} />
          <span>{t("typicalDuration")} <strong>{service.duration}</strong></span>
        </div>
        <Link href={service.cta.href} className="btn-get-started">
          {service.cta.text}
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
