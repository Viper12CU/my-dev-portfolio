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
    { icon: "Linkedin", href: "#" },
    { icon: "Github", href: "#" },
    { icon: "Send", href: "#" },
  ],
  copyright: "Fabian Lemus",
};
