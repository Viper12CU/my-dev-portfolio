export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  info: ContactInfo[];
}

export const contactData: ContactData = {
  title: "Contact",
  subtitle:
    "Do you have a project? Let’s talk about turning your idea into a clear, solid, and maintainable product.",
  info: [
    {
      icon: "Mail",
      title: "Email",
      content: "fabianalejandrolemus@gmail.com",
    },
    {
      icon: "Phone",
      title: "Phone",
      content: "+53 58816764",
    },
  ],
};
