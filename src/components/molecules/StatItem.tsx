import type { StatItem } from "@/data/stats";
import Icon from "@/components/atoms/Icon";

interface StatItemMoleculeProps {
  item: StatItem;
}

export default function StatItemMolecule({ item }: StatItemMoleculeProps) {
  return (
    <div className="flex flex-col items-center">
      <Icon name={item.icon} />
      <div className="stats-item mt-2 w-full text-center relative z-0">
        <span
          data-purecounter-start="0"
          data-purecounter-end={item.end}
          data-purecounter-duration="1"
          className="purecounter"
        />
        <p>{item.label}</p>
      </div>
    </div>
  );
}
