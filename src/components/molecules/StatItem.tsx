import type { StatItem } from "@/data/stats";
import Icon from "@/components/atoms/Icon";

interface StatItemMoleculeProps {
  item: StatItem;
}

export default function StatItemMolecule({ item }: StatItemMoleculeProps) {
  return (
    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
      <Icon name={item.icon} aria-hidden="true" />
      <div className="stats-item">
        <span
          data-purecounter-start="0"
          data-purecounter-end={item.end}
          data-purecounter-duration="1"
          className="purecounter"
          aria-label={`${item.end} ${item.label}`}
        />
        <p>{item.label}</p>
      </div>
    </div>
  );
}
