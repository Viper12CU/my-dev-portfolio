export interface AboutData {
  title: string;
  subtitle: string;
  imageUrl: string;
  role: string;
  bio1: string;
  bio2: string;
  details: { left: DetailItem[]; right: DetailItem[] };
}

export interface DetailItem {
  label: string;
  value: string;
}

export const aboutData: AboutData = {
  title: "About",
  subtitle:
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  imageUrl: "/assets/img/profile-img.jpg",
  role: "UI/UX Designer & Web Developer.",
  bio1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  bio2:
    "Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.",
  details: {
    left: [
      { label: "Birthday", value: "1 May 1995" },
      { label: "Website", value: "www.example.com" },
      { label: "Phone", value: "+123 456 7890" },
      { label: "City", value: "New York, USA" },
    ],
    right: [
      { label: "Age", value: "30" },
      { label: "Degree", value: "Master" },
      { label: "Email", value: "email@example.com" },
      { label: "Freelance", value: "Available" },
    ],
  },
};
