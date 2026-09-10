import { useTranslations } from "next-intl";
import StatItemMolecule from "@/components/molecules/StatItem";

export default function StatsSection() {
  const t = useTranslations("Stats");
  const stats = t.raw("items") as { icon: string; end: number; label: string }[];

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((item, i) => (
            <StatItemMolecule key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
