import type { ResumeItem } from "@/data/resume";

interface ResumeItemMoleculeProps {
  item: ResumeItem;
}

export default function ResumeItemMolecule({ item }: ResumeItemMoleculeProps) {
  return (
    <div className="resume-item pb-0">
      <h4>{item.title}</h4>
      {item.period && <h5>{item.period}</h5>}
      {item.institution && <p><em>{item.institution}</em></p>}
      {item.description && <p>{item.description}</p>}
      {item.bullets && (
        <ul>
          {item.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
