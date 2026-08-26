export interface ResumeItem {
  title: string;
  period?: string;
  institution?: string;
  institutionUrl?: string;
  description?: string;
  bullets?: string[];
}

export interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

export interface ResumeData {
  title: string;
  subtitle: string;
  summary: ResumeItem;
  education: ResumeSection;
  experience: ResumeSection;
}

export const resumeData: ResumeData = {
  title: "Resume",
  subtitle:
    "A concise overview of my education, experience, and the path that has shaped my work as a full-stack developer.",
  summary: {
    title: "Fabian Lemus",
    description:
      "Full-stack developer and systems engineer focused on building reliable web applications from idea to implementation. I combine frontend, backend, databases, and practical architecture to create clear, scalable, and maintainable digital products.",
    bullets: [
      "Systems Engineer",
      "Frontend & Backend Development",
      "Open to Opportunities",
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        title: "Systems Engineering",
        period: "Sep 2022 - Jul 2024",
        institution: "Universidad Máximo Gómez Báez de Ciego de Ávila, Cuba",
        institutionUrl: "https://www.unica.cu/",
        description:
          "Built a strong foundation in software development, systems analysis, databases, and information technology. Developed the ability to understand complex problems, design practical solutions, and apply structured engineering principles to real-world projects.",
      },
      {
        title: "CS50's Web Programming with Python and JavaScript",
        institution: "Harvard University (edX)",
        institutionUrl: "https://cs50.harvard.edu/web/2020/",
        description:
          "An intensive course covering web development with Python and JavaScript, focusing on building dynamic web applications.",
      },
      {
        title: "B1 English for Developers Certification",
        institution: "freeCodeCamp.org",
        institutionUrl: "https://www.freecodecamp.org/learn/b1-english-for-developers",
        description:
          "A certification demonstrating proficiency in English for developers, covering technical vocabulary, reading comprehension, and communication skills in a professional context.",
      },
    ],
  },
  experience: {
    title: "Professional Experience",
    items: [
      {
        title: "Full Stack Developer",
        period: "2024 Dic - 2026 Ene",
        institution: "Bioplantas Center for Plant Biotechnology",
        institutionUrl: "https://www.bioplantas.cu/",
        bullets: [
         "Developed and maintained web applications using React, Node.js, and PostgreSQL, ensuring high performance and responsiveness.",
         "Collaborated with cross-functional teams to define, design, and ship new features, improving user experience and functionality.",
         "Implemented RESTful APIs and integrated third-party services to enhance application capabilities.",
         "Optimized applications for maximum speed and scalability, resulting in a 30% improvement in load times.",
        ],
      },
    ],
  },
};
