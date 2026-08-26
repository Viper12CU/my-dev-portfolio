export interface ServiceProcess {
  step: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: string;
  svgPath: string;
  variant: string;
  detailImage: string;
  features: string[];
  longDescription: string[];
  technologies: string[];
  process: ServiceProcess[];
  deliverables: string[];
  duration: string;
  cta: {
    text: string;
    href: string;
  };
}

export interface ServicesData {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export const servicesData: ServicesData = {
  title: "Services",
  subtitle:
    "I offer a range of services to help you build and enhance your digital presence, from web development to design and optimization.",
  items: [
    {
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
    },
    {
      slug: "frontend-ux",
      title: "Frontend & UX",
      description:
        "Responsive and intuitive interfaces that combine thoughtful user experiences with clean, maintainable frontend code.",
      icon: "bi-window-stack",
      svgPath:
        "M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426",
      variant: "item-orange",
      detailImage: "/assets/img/services.jpg",
      features: [
        "Responsive design for mobile, tablet, and desktop",
        "Component-based architecture with React/Next.js",
        "Accessibility-first approach (WCAG 2.2)",
        "Design system and reusable component libraries",
        "Animation and micro-interactions with GSAP/Framer Motion",
      ],
      longDescription: [
        "I create modern, responsive web interfaces that look great and work seamlessly across all devices. Using React, Next.js, and Tailwind CSS, I build component-driven UIs that are fast, accessible, and easy to maintain.",
        "From landing pages to complex dashboards, I focus on clean visual hierarchy, smooth interactions, and performance that keeps users engaged.",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Storybook"],
      process: [
        { step: "UX Research", description: "Analyzing user behavior, competitor patterns, and defining the information architecture." },
        { step: "Wireframes", description: "Creating low-fidelity layouts to validate structure and user flows before visual design." },
        { step: "UI Design", description: "Building high-fidelity mockups with a consistent design system and component tokens." },
        { step: "Development", description: "Pixel-perfect implementation with responsive breakpoints, animations, and accessibility." },
      ],
      deliverables: [
        "Responsive web application",
        "Design system / component library",
        "Interactive prototypes",
        "Accessibility audit report",
        "Performance benchmarks (Lighthouse scores)",
      ],
      duration: "2-6 weeks",
      cta: {
        text: "Discuss Your UI",
        href: "/#contact",
      },
    },
    {
      slug: "backend-api-development",
      title: "Backend & API Development",
      description:
        "Well-structured APIs and backend services designed to connect systems, manage data, and support dependable digital products.",
      icon: "bi-diagram-3",
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
    },
    {
      slug: "cross-platform-mobile-development",
      title: "Cross-Platform Mobile Development",
      description:
        "Cross-platform mobile applications built with Flutter for consistent, responsive experiences across Android and iOS.",
      icon: "bi-phone",
      svgPath:
        "M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762",
      variant: "item-pink",
      detailImage: "/assets/img/services.jpg",
      features: [
        "Single codebase for Android and iOS",
        "Custom UI with Flutter widgets and animations",
        "Native performance with platform-specific optimizations",
        "Push notifications and deep linking",
        "App Store and Play Store deployment support",
      ],
      longDescription: [
        "I build cross-platform mobile applications using Flutter that deliver native-like performance on both Android and iOS from a single codebase. From concept to deployment, I handle UI design, business logic, and platform integration.",
        "Whether you need a consumer-facing app or an internal tool, I focus on smooth animations, fast load times, and a consistent experience across all devices.",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "SQLite", "GetX/Bloc"],
      process: [
        { step: "Planning", description: "Defining platform requirements, screen flows, and native feature needs." },
        { step: "UI/UX Design", description: "Creating platform-adaptive designs that follow Material Design and Cupertino guidelines." },
        { step: "Development", description: "Building the app with Flutter widgets, state management, and API integrations." },
        { step: "Publishing", description: "App Store and Play Store submission, screenshots, metadata, and release management." },
      ],
      deliverables: [
        "Cross-platform mobile application",
        "Source code with setup instructions",
        "App Store & Play Store listings",
        "Push notification system",
        "30 days of post-launch support",
      ],
      duration: "4-10 weeks",
      cta: {
        text: "Build Your App",
        href: "/#contact",
      },
    },
    {
      slug: "database-solutions",
      title: "Database Solutions",
      description:
        "Practical database design and SQL solutions that keep information organized, accessible, and ready for application growth.",
      icon: "bi-database",
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
    },
    {
      slug: "ai-automation-agents",
      title: "AI Automation & Agents",
      description:
        "Intelligent automations and AI agents built with n8n to streamline repetitive workflows, connect tools, and help teams work more efficiently.",
      icon: "bi-cpu",
      svgPath:
        "M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572",
      variant: "item-indigo",
      detailImage: "/assets/img/services.jpg",
      features: [
        "Workflow automation with n8n and custom integrations",
        "AI-powered agents for data processing and decision-making",
        "Tool connection (CRM, email, databases, APIs)",
        "Custom logic and conditional branching",
        "Monitoring and error handling for production workflows",
      ],
      longDescription: [
        "I build intelligent automations and AI agents that streamline repetitive workflows and connect your tools seamlessly. Using n8n and custom integrations, I create systems that handle routine tasks so your team can focus on what matters.",
        "From simple data syncing to complex multi-step workflows with AI decision-making, I design automations that are reliable, observable, and easy to modify as your needs evolve.",
      ],
      technologies: ["n8n", "OpenAI API", "Node.js", "Webhooks", "REST APIs", "Docker"],
      process: [
        { step: "Audit", description: "Mapping your current workflows, identifying bottleneasts and automation opportunities." },
        { step: "Design", description: "Architecting the automation flow, triggers, error handling, and data mapping." },
        { step: "Build", description: "Implementing workflows in n8n with custom nodes, AI integrations, and testing." },
        { step: "Deploy", description: "Production setup with monitoring, alerting, and documentation for your team." },
      ],
      deliverables: [
        "Production-ready automation workflows",
        "AI agent configuration and prompts",
        "Error handling and monitoring setup",
        "Workflow documentation",
        "30 days of optimization support",
      ],
      duration: "1-3 weeks",
      cta: {
        text: "Automate Your Workflow",
        href: "/#contact",
      },
    },
  ],
};

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.items.find((item) => item.slug === slug);
}
