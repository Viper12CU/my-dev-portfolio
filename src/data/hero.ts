export interface HeroData {
  name: string;
  typedItems: string[];
  socialLinks: { icon: string; href: string }[];
}

export const heroData: HeroData = {
  name: "Fabian Lemus",
  typedItems: ["Developer", "Freelancer", "Designer"],
  socialLinks: [
    { icon: "Linkedin", href: "#" },
    { icon: "Github", href: "#" },
    { icon: "Send", href: "#" },
  ],
};
