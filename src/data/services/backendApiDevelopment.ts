import type { ServiceItem } from "./types";

export const backendApiDevelopment: ServiceItem = {
  slug: "backend-api-development",
  title: "Backend & API Development",
  description:
    "Well-structured APIs and backend services designed to connect systems, manage data, and support dependable digital products.",
  icon: "Network",
  svgPath:
    "M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781",
  variant: "item-teal",
  detailImage: "/assets/img/services.jpg",
  features: [
    "RESTful API design and development",
    "Node.js, Express, and NestJS backends",
    "Database design (PostgreSQL, MongoDB, Redis)",
    "Third-party API integration and webhooks",
    "Rate limiting, caching, and security hardening",
  ],
  longDescription: [
    "I design and build robust backend services and APIs that power modern web applications. From simple REST endpoints to complex microservices, I focus on clean architecture, data integrity, and reliable performance under load.",
    "Whether you need authentication systems, real-time features, or integrations with external services, I build backends that are secure, well-documented, and built to scale.",
  ],
  technologies: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "Prisma"],
  process: [
    { step: "Requirements", description: "Mapping out data flows, endpoints, authentication needs, and integration points." },
    { step: "Data Modeling", description: "Designing the database schema, relationships, and indexing strategy." },
    { step: "API Development", description: "Building endpoints with validation, error handling, and comprehensive documentation." },
    { step: "Hardening", description: "Security audit, load testing, caching layers, and monitoring setup." },
  ],
  deliverables: [
    "Documented REST/GraphQL API",
    "Database schema with seed data",
    "Authentication & authorization system",
    "API integration tests",
    "Deployment configuration (Docker/PM2)",
  ],
  duration: "3-8 weeks",
  cta: {
    text: "Build Your API",
    href: "/#contact",
  },
};
