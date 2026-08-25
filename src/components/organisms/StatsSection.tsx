import { statsData } from "@/data/stats";
import StatItemMolecule from "@/components/molecules/StatItem";

export default function StatsSection() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statsData.map((item, i) => (
            <StatItemMolecule key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
