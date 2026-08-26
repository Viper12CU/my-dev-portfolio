export interface HeroData {
  name: string;
  typedItems: string[];
  socialLinks: { icon: string; href: string }[];
}

export const heroData: HeroData = {
  name: "Fabian Lemus",
  typedItems: ["Developer", "Freelancer", "Designer"],
  socialLinks: [
    { icon: "bi-twitter-x", href: "#" },
    { icon: "bi-facebook", href: "#" },
    { icon: "bi-instagram", href: "#" },
    { icon: "bi-linkedin", href: "#" },
  ],
};
