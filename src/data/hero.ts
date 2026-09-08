export interface HeroData {
  name: string;
  typedItems: string[];
  socialLinks: { icon: string; href: string }[];
}

export const heroData: HeroData = {
  name: "Fabian Lemus",
  typedItems: ["Developer", "Freelancer", "Designer"],
  socialLinks: [
    { icon: "Linkedin", href: "https://linkedin.com/in/fabian-alejandro-lemus-865a643b1" },
    { icon: "Github", href: "https://github.com/Viper12CU" },
    { icon: "Send", href: "https://t.me/@Alex_fer4" },
  ],
};
