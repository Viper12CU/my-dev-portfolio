import { statsData } from "@/data/stats";
import StatItemMolecule from "@/components/molecules/StatItem";

export default function StatsSection() {
  return (
    <section id="stats" className="stats section">
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, i) => (
            <StatItemMolecule key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
