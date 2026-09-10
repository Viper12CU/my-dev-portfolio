import Image from "next/image";
import type { TestimonialItem } from "@/data/testimonials";
import Icon from "@/components/atoms/Icon";

interface TestimonialCardProps {
  item: TestimonialItem;
}

export default function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-6">
            <div className="testimonial-content">
              <p>
                <Icon name="Quote" className="quote-icon-left" />
                <span>{item.quote}</span>
                <Icon name="Quote" className="quote-icon-right" />
              </p>
              <h3>{item.name}</h3>
              <h4>{item.role}</h4>
              <div className="stars" aria-label="5 de 5 estrellas">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" aria-hidden="true" />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-2 text-center">
            <Image
              src={item.imageUrl}
              className="img-fluid testimonial-img"
              alt={item.name}
              width={400}
              height={400}
              sizes="150px"
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
