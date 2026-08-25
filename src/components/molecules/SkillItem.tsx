import type { Skill } from "@/data/skills";
import ProgressBar from "@/components/atoms/ProgressBar";

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return <ProgressBar skill={skill.name} percentage={skill.percentage} />;
}
