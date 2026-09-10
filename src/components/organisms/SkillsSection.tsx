"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/atoms/SectionTitle";
import SkillItem from "@/components/molecules/SkillItem";

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Skills");
  const leftSkills = t.raw("left") as { name: string; percentage: number }[];
  const rightSkills = t.raw("right") as { name: string; percentage: number }[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(
              ".progress .progress-bar"
            );
            progressBars.forEach((el) => {
              const bar = el as HTMLElement;
              bar.style.width = bar.getAttribute("aria-valuenow") + "%";
            });
          }
        });
      },
      { threshold: 0.8 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          ref={skillsRef}
          className="row skills-content skills-animation"
        >
          <div className="col-lg-6">
            {leftSkills.map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </div>
          <div className="col-lg-6">
            {rightSkills.map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
