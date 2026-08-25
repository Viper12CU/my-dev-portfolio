import { resumeData } from "@/data/resume";
import SectionTitle from "@/components/atoms/SectionTitle";
import ResumeItemMolecule from "@/components/molecules/ResumeItem";

export default function ResumeSection() {
  return (
    <section id="resume" className="resume section">
      <SectionTitle title={resumeData.title} subtitle={resumeData.subtitle} />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">{resumeData.summary.title}</h3>
            <ResumeItemMolecule item={resumeData.summary} />

            <h3 className="resume-title">
              {resumeData.education.title}
            </h3>
            {resumeData.education.items.map((item, i) => (
              <ResumeItemMolecule key={i} item={item} />
            ))}
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">
              {resumeData.experience.title}
            </h3>
            {resumeData.experience.items.map((item, i) => (
              <ResumeItemMolecule key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
