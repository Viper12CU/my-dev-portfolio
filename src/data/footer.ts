export interface FooterData {
  name: string;
  description: string;
  socialLinks: { icon: string; href: string }[];
  copyright: string;
}

export const footerData: FooterData = {
  name: "Brandon Johnson",
  description:
    "Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.",
  socialLinks: [
    { icon: "bi-twitter-x", href: "" },
    { icon: "bi-facebook", href: "" },
    { icon: "bi-instagram", href: "" },
    { icon: "bi-skype", href: "" },
    { icon: "bi-linkedin", href: "" },
  ],
  copyright: "Alex Smith",
};
