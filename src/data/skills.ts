export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillsData {
  title: string;
  subtitle: string;
  left: Skill[];
  right: Skill[];
}

export const skillsData: SkillsData = {
  title: "Skills",
  subtitle:
    "A practical toolkit for building reliable, scalable, and user-centered digital products.",
  left: [
    { name: "Frontend & UX", percentage: 100 },
    { name: "Backend & APIs", percentage: 90 },
    { name: "Databases & SQL", percentage: 75 },
    { name: "UI Design", percentage: 70 },
    { name: "Flutter & Dart", percentage: 80 },
  ],
  right: [
    { name: "AI Tools", percentage: 80 },
    { name: "Git & Collaboration", percentage: 84 },
    { name: "WordPress/CMS", percentage: 90 },
    { name: "Quality & Testing", percentage: 75 },
    { name: "Mobile UI Development", percentage: 75 },
  ],
};
