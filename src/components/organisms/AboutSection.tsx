import { aboutData } from "@/data/about";
import SectionTitle from "@/components/atoms/SectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <SectionTitle title={aboutData.title} subtitle={aboutData.subtitle} />

      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
          <div className="w-full lg:w-1/3">
            <img
              src={aboutData.imageUrl}
              className="w-full h-auto"
              alt=""
            />
          </div>
          <div className="w-full lg:w-2/3 content">
            <h2>{aboutData.role}</h2>
            <p className="italic py-3">{aboutData.bio1}</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2">
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
              <div className="w-full sm:w-1/2">
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
