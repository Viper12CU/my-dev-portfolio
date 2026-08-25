"use client";

import { useEffect, useRef } from "react";
import { skillsData } from "@/data/skills";
import SectionTitle from "@/components/atoms/SectionTitle";
import SkillItem from "@/components/molecules/SkillItem";

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

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
      <SectionTitle title={skillsData.title} subtitle={skillsData.subtitle} />

      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div ref={skillsRef} className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            {skillsData.left.map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </div>
          <div className="w-full lg:w-1/2">
            {skillsData.right.map((skill, i) => (
              <SkillItem key={i} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
