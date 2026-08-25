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
  subtitle: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
  info: [
    {
      icon: "bi-geo-alt",
      title: "Address",
      content: "A108 Adam Street, New York, NY 535022",
    },
    {
      icon: "bi-telephone",
      title: "Call Us",
      content: "+1 5589 55488 55",
    },
    {
      icon: "bi-envelope",
      title: "Email Us",
      content: "info@example.com",
    },
  ],
};
