export interface FooterData {
  name: string;
  description: string;
  socialLinks: { icon: string; href: string }[];
  copyright: string;
}

export const footerData: FooterData = {
  name: "Fabian Lemus",
  description:
    "I am a full-stack developer interested in building clear, solid, and maintainable products. I enjoy bringing design and technology together to create experiences that work well, feel great, and have purpose. I like turning complexity into something simple without losing impact or quality.",
  socialLinks: [
    { icon: "Linkedin", href: "https://linkedin.com/in/fabian-alejandro-lemus-865a643b1" },
    { icon: "Github", href: "https://github.com/Viper12CU" },
    { icon: "Send", href: "https://t.me/@Alex_fer4" },
  ],
  copyright: "Fabian Lemus",
};
