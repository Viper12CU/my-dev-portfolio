import type { TestimonialItem } from "@/data/testimonials";
import Icon from "@/components/atoms/Icon";

interface TestimonialCardProps {
  item: TestimonialItem;
}

export default function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-full md:w-3/5">
            <div className="testimonial-content">
              <p>
                <Icon name="bi-quote quote-icon-left" />
                <span>{item.quote}</span>
                <Icon name="bi-quote quote-icon-right" />
              </p>
              <h3>{item.name}</h3>
              <h4>{item.role}</h4>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="bi-star-fill" />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/5 text-center">
            <img
              src={item.imageUrl}
              className="testimonial-img mx-auto"
              alt={item.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
