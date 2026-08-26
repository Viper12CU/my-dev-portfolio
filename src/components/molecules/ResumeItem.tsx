import type { ResumeItem } from "@/data/resume";

interface ResumeItemMoleculeProps {
  item: ResumeItem;
}

export default function ResumeItemMolecule({ item }: ResumeItemMoleculeProps) {
  return (
    <article className="resume-item">
      <h4 className="resume-item-title">{item.title}</h4>
      {item.period && <p className="resume-item-period">{item.period}</p>}
      {item.institution && (
        <p className="resume-item-institution">
          <em>
            {item.institutionUrl ? (
              <a
                href={item.institutionUrl}
                target="_blank"
                rel="noreferrer"
              >
                {item.institution}
              </a>
            ) : (
              item.institution
            )}
          </em>
        </p>
      )}
      {item.description && (
        <p className="resume-item-description">{item.description}</p>
      )}
      {item.bullets && (
        <ul className="resume-item-bullets">
          {item.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
