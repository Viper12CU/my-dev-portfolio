export interface HeroData {
  name: string;
  typedItems: string[];
  socialLinks: { icon: string; href: string }[];
}

export const heroData: HeroData = {
  name: "Brandon Johnson",
  typedItems: ["Designer", "Developer", "Freelancer", "Photographer"],
  socialLinks: [
    { icon: "bi-twitter-x", href: "#" },
    { icon: "bi-facebook", href: "#" },
    { icon: "bi-instagram", href: "#" },
    { icon: "bi-linkedin", href: "#" },
  ],
};
