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
                      <i className="bi bi-chevron-right" />{" "}
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
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>{detail.label}:</strong>{" "}
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="py-3">{aboutData.bio2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
