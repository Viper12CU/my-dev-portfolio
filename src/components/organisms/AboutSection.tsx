import { ChevronRight, Download } from "lucide-react";
import { aboutData } from "@/data/about";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <SectionTitle title={aboutData.title} subtitle={aboutData.subtitle} />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src={aboutData.imageUrl}
              className="img-fluid"
              alt="Fabian Lemus, desarrollador full-stack"
            />
          </div>
          <div className="col-lg-8 content">
            <h2>{aboutData.role}</h2>
            <p className="fst-italic py-3">{aboutData.bio1}</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {aboutData.details.left.map((detail, i) => (
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
                  {aboutData.details.right.map((detail, i) => (
                    <li key={i}>
                      <ChevronRight size={16} />{" "}
                      <strong>{detail.label}:</strong>{" "}
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="py-3">{aboutData.bio2}</p>
            <div className="about-cta">
              <a
                href="/assets/files/cv_fabian_lemus.pdf"
                download="CV_Fabian_Lemus.pdf"
                className="btn-about-cv"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
