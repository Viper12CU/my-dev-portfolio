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
  subtitle: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
  left: [
    { name: "HTML", percentage: 100 },
    { name: "CSS", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
  ],
  right: [
    { name: "PHP", percentage: 80 },
    { name: "WordPress/CMS", percentage: 90 },
    { name: "Photoshop", percentage: 55 },
  ],
};
