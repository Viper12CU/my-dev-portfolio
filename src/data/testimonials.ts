export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export const testimonialsData: TestimonialsData = {
  title: "Testimonials",
  subtitle: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
  items: [
    {
      id: 1,
      name: "Saul Goodman",
      role: "Ceo & Founder",
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      imageUrl: "/assets/img/testimonials/testimonials-1.jpg",
    },
    {
      id: 2,
      name: "Sara Wilsson",
      role: "Designer",
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      imageUrl: "/assets/img/testimonials/testimonials-2.jpg",
    },
    {
      id: 3,
      name: "Jena Karlis",
      role: "Store Owner",
      quote:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      imageUrl: "/assets/img/testimonials/testimonials-3.jpg",
    },
    {
      id: 4,
      name: "John Larson",
      role: "Entrepreneur",
      quote:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      imageUrl: "/assets/img/testimonials/testimonials-4.jpg",
    },
  ],
};
