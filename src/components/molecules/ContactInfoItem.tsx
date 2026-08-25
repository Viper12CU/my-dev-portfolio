import type { ContactInfo } from "@/data/contact";
import Icon from "@/components/atoms/Icon";

interface ContactInfoItemProps {
  item: ContactInfo;
}

export default function ContactInfoItem({ item }: ContactInfoItemProps) {
  return (
    <div className="info-item flex" data-aos="fade-up" data-aos-delay="200">
      <Icon name={item.icon} className="shrink-0" />
      <div>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </div>
    </div>
  );
}
