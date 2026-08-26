import type { ServiceItem } from "./types";

export const frontendUx: ServiceItem = {
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
};
