import Icon from "@/components/atoms/Icon";

interface ContactInfoItemProps {
  item: {
    icon: string;
    label: string;
    value: string;
  };
}

export default function ContactInfoItem({ item }: ContactInfoItemProps) {
  return (
    <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
      <Icon name={item.icon} className="flex-shrink-0" aria-hidden="true" />
      <div>
        <h3>{item.label}</h3>
        <p>{item.value}</p>
      </div>
    </div>
  );
}
