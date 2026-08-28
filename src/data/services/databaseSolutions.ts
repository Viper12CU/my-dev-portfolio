import type { ServiceItem } from "./types";

export const databaseSolutions: ServiceItem = {
  slug: "database-solutions",
  title: "Database Solutions",
  description:
    "Practical database design and SQL solutions that keep information organized, accessible, and ready for application growth.",
  icon: "Database",
  svgPath:
    "M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813",
  variant: "item-red",
  detailImage: "/assets/img/services.jpg",
  features: [
    "Relational database design (PostgreSQL, MySQL)",
    "NoSQL solutions with MongoDB and Redis",
    "Query optimization and indexing strategies",
    "Data migration and backup planning",
    "Schema design for complex business requirements",
  ],
  longDescription: [
    "I design and implement database solutions that keep your data organized, accessible, and performant as your application grows. From relational schemas to document stores, I choose the right tool for each use case.",
    "Whether you need a new database designed from scratch or an existing one optimized for better performance, I focus on data integrity, query efficiency, and scalable architecture.",
  ],
  technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "SQL"],
  process: [
    { step: "Analysis", description: "Understanding data relationships, access patterns, and performance requirements." },
    { step: "Schema Design", description: "Creating entity-relationship diagrams, normalization, and indexing strategy." },
    { step: "Implementation", description: "Building the schema, migrations, seed data, and query optimization." },
    { step: "Tuning", description: "Performance benchmarking, slow query analysis, and indexing refinements." },
  ],
  deliverables: [
    "Database schema with documentation",
    "Migration scripts (version controlled)",
    "Seed data for development/testing",
    "Query performance report",
    "Backup and recovery strategy",
  ],
  duration: "1-4 weeks",
  cta: {
    text: "Design Your Database",
    href: "/#contact",
  },
};
