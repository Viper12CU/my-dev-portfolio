export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  gallery: string;
}

export interface PortfolioFilter {
  label: string;
  filter: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  filters: PortfolioFilter[];
  items: PortfolioItem[];
}

export const portfolioData: PortfolioData = {
  title: "Portfolio",
  subtitle:
    "A showcase of my work, demonstrating my skills and expertise in creating innovative and effective solutions for various projects.",
  filters: [
    { label: "All", filter: "*" },
    { label: "App", filter: ".filter-app" },
    { label: "Card", filter: ".filter-product" },
    { label: "Web", filter: ".filter-branding" },
  ],
  items: [
    {
      id: 1,
      title: "App 1",
      description: "Lorem ipsum, dolor sit",
      category: "filter-app",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
      link: "#",
      gallery: "portfolio-gallery-app",
    },
    {
      id: 2,
      title: "Product 1",
      description: "Lorem ipsum, dolor sit",
      category: "filter-product",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
      link: "#",
      gallery: "portfolio-gallery-product",
    },
    {
      id: 3,
      title: "Branding 1",
      description: "Lorem ipsum, dolor sit",
      category: "filter-branding",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
      link: "#",
      gallery: "portfolio-gallery-branding",
    },
    {
      id: 4,
      title: "App 2",
      description: "Lorem ipsum, dolor sit",
      category: "filter-app",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
      link: "#",
      gallery: "portfolio-gallery-app",
    },
    {
      id: 5,
      title: "Product 2",
      description: "Lorem ipsum, dolor sit",
      category: "filter-product",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
      link: "#",
      gallery: "portfolio-gallery-product",
    },
    {
      id: 6,
      title: "Branding 2",
      description: "Lorem ipsum, dolor sit",
      category: "filter-branding",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
      link: "#",
      gallery: "portfolio-gallery-branding",
    },
    {
      id: 7,
      title: "App 3",
      description: "Lorem ipsum, dolor sit",
      category: "filter-app",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
      link: "#",
      gallery: "portfolio-gallery-app",
    },
    {
      id: 8,
      title: "Product 3",
      description: "Lorem ipsum, dolor sit",
      category: "filter-product",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
      link: "#",
      gallery: "portfolio-gallery-product",
    },
    {
      id: 9,
      title: "Branding 3",
      description: "Lorem ipsum, dolor sit",
      category: "filter-branding",
      imageUrl: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
      link: "#",
      gallery: "portfolio-gallery-branding",
    },
  ],
};
