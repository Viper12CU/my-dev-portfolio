import { useTranslations } from "next-intl";
import SectionTitle from "@/components/atoms/SectionTitle";
import ResumeItemMolecule from "@/components/molecules/ResumeItem";

export default function ResumeSection() {
  const t = useTranslations("Resume");
  const summary = t.raw("summary") as { title: string; description?: string; bullets?: string[] };
  const education = t.raw("education") as { title: string; items: { title: string; period?: string; institution?: string; institutionUrl?: string; description?: string }[] };
  const experience = t.raw("experience") as { title: string; items: { title: string; period?: string; institution?: string; institutionUrl?: string; description?: string; bullets?: string[] }[] };

  return (
    <section id="resume" className="resume section">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">{summary.title}</h3>
            <ResumeItemMolecule item={summary} />

            <h3 className="resume-title">
              {education.title}
            </h3>
            {education.items.map((item, i) => (
              <ResumeItemMolecule key={i} item={item} />
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">
              {experience.title}
            </h3>
            {experience.items.map((item, i) => (
              <ResumeItemMolecule key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
