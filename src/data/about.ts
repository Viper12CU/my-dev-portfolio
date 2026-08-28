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
    "I am a full-stack developer interested in building clear, solid, and maintainable products. I enjoy bringing design and technology together to create experiences that work well, feel great, and have purpose. I like turning complexity into something simple without losing impact or quality.",
  imageUrl: "/assets/img/profile-img.webp",
  role: "Full Stack Developer",
  bio1:
    "I specialize in developing complete web applications, from the initial idea to implementation. I combine frontend, backend, and architecture to create products that are fast, scalable, and easy to maintain.",
  bio2:
    "In every project, I aim to understand the real problem, not just the requirements. I analyze the context, propose practical solutions, and lay the technical foundation for growth without friction. I care as much about the visible result as I do about what happens behind the scenes: architecture, performance, and best practices.",
  details: {
    left: [
      { label: "Location", value: "Havana, Cuba" },
      { label: "Specialty", value: "Full Stack Development" },
      { label: "Focus", value: "Web Applications" },
      { label: "Work Mode", value: "Remote" },
    ],
    right: [
      { label: "Education", value: "Systems Engineering" },
      { label: "Email", value: "fabianalejandrolemus@gmail.com" },
      { label: "Availability", value: "Open to opportunities" },
      { label: "Approach", value: "Clean & Maintainable Code" },
    ],
  },
};
