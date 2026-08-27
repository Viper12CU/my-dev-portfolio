import type { ServiceItem } from "./types";

export const fullStackWebDevelopment: ServiceItem = {
  slug: "full-stack-web-development",
  title: "Full-Stack Web Development",
  description:
    "Complete web applications built from frontend to backend, with a clear structure, reliable functionality, and room to grow.",
  icon: "bi-code-slash",
  svgPath:
    "M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174",
  variant: "item-cyan",
  detailImage: "/assets/img/services.jpg",
  features: [
    "End-to-end application architecture and development",
    "RESTful and GraphQL API integration",
    "Authentication, authorization, and security best practices",
    "CI/CD pipelines and automated deployment",
    "Performance optimization and scalability planning",
  ],
  longDescription: [
    "I build complete web applications from the ground up, handling everything from database design and backend logic to responsive frontend interfaces. Each project is structured for maintainability and growth, using modern frameworks and proven architectural patterns.",
    "Whether you need a new product built from scratch or an existing system improved, I focus on clean code, clear documentation, and reliable functionality that your team can extend over time.",
  ],
  technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "Vercel"],
  process: [
    { step: "Discovery", description: "Understanding your business goals, technical requirements, and user needs to define a clear project scope." },
    { step: "Architecture", description: "Designing the system structure, data models, API contracts, and technology stack selection." },
    { step: "Development", description: "Building the application in iterative sprints with regular demos and feedback cycles." },
    { step: "Testing & Launch", description: "Thorough QA, performance testing, deployment setup, and production monitoring." },
  ],
  deliverables: [
    "Full source code with documentation",
    "Deployed application with CI/CD pipeline",
    "API documentation and database schema",
    "Admin panel or dashboard (if needed)",
    "30 days of post-launch support",
  ],
  duration: "4-12 weeks",
  cta: {
    text: "Start Your Project",
    href: "/#contact",
  },
};
