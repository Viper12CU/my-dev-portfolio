interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
