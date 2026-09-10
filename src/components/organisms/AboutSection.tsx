import Image from "next/image";
import { ChevronRight, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function AboutSection() {
  const t = useTranslations("About");
  const commonT = useTranslations("Common");
  const leftDetails = t.raw("details.left") as { label: string; value: string }[];
  const rightDetails = t.raw("details.right") as { label: string; value: string }[];

  return (
    <section id="about" className="about section">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <Image
              src="/assets/img/profile-img.webp"
              className="img-fluid"
              alt="Fabian Lemus, full-stack developer"
              width={600}
              height={600}
              sizes="(max-width: 992px) 100vw, 400px"
              style={{ height: "auto" }}
            />
          </div>
          <div className="col-lg-8 content">
            <h2>{t("role")}</h2>
            <p className="fst-italic py-3">{t("bio1")}</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {leftDetails.map((detail, i) => (
                    <li key={i}>
                      <ChevronRight size={16} />{" "}
                      <strong>{detail.label}:</strong>{" "}
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {rightDetails.map((detail, i) => (
                    <li key={i}>
                      <ChevronRight size={16} />{" "}
                      <strong>{detail.label}:</strong>{" "}
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="py-3">{t("bio2")}</p>
            <div className="about-cta">
              <a
                href="/assets/files/cv_fabian_lemus.pdf"
                download="CV_Fabian_Lemus.pdf"
                className="btn-about-cv"
              >
                <Download size={18} />
                <span>{commonT("downloadCv")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
