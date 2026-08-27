export interface HeroData {
  name: string;
  typedItems: string[];
  socialLinks: { icon: string; href: string }[];
}

export const heroData: HeroData = {
  name: "Fabian Lemus",
  typedItems: ["Developer", "Freelancer", "Designer"],
  socialLinks: [
    { icon: "bi-linkedin", href: "#" },
    { icon: "bi-github", href: "#" },
    { icon: "bi-telegram", href: "#" },
  ],
};
