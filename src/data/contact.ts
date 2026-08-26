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
    "¿Tienes un proyecto web? Hablemos sobre cómo convertir tu idea en un producto claro, sólido y mantenible.",
  info: [
    {
      icon: "bi-geo-alt",
      title: "Ubicación",
      content: "La Habana, Cuba",
    },
    {
      icon: "bi-envelope",
      title: "Email",
      content: "fabianalejandrolemus@gmail.com",
    },
  ],
};
